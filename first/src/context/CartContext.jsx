import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { findProduct } from '../data/products'
import { shippingFor } from '../lib/format'

const CartContext = createContext(null)
const KEY = 'kumo.cart'

// A line is one product in one size/colour: key = id|size|color
const lineKey = (l) => `${l.id}|${l.size}|${l.color}`

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const p = findProduct(action.line.id)
      const key = lineKey(action.line)
      const existing = state.find((l) => lineKey(l) === key)
      const qty = Math.min(p.stock, (existing?.qty || 0) + action.line.qty)
      return existing ? state.map((l) => (lineKey(l) === key ? { ...l, qty } : l)) : [...state, { ...action.line, qty }]
    }
    case 'qty': {
      const p = findProduct(action.id)
      return state.map((l) => (lineKey(l) === action.key ? { ...l, qty: Math.max(1, Math.min(p.stock, action.qty)) } : l))
    }
    case 'remove':
      return state.filter((l) => lineKey(l) !== action.key)
    case 'clear':
      return []
    default:
      return state
  }
}

function load() {
  try {
    // Drop lines for products that no longer exist
    return JSON.parse(localStorage.getItem(KEY) || '[]').filter((l) => findProduct(l.id))
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, undefined, load)
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(lines)) }, [lines])

  const value = useMemo(() => {
    const items = lines.map((l) => ({ ...l, key: lineKey(l), product: findProduct(l.id) }))
    const count = items.reduce((n, i) => n + i.qty, 0)
    const subtotal = items.reduce((n, i) => n + i.qty * i.product.price, 0)
    const savings = items.reduce((n, i) => n + i.qty * (i.product.mrp - i.product.price), 0)
    const shipping = shippingFor(subtotal)
    return {
      items, count, subtotal, savings, shipping, total: subtotal + shipping,
      add: (line) => dispatch({ type: 'add', line }),
      setQty: (key, id, qty) => dispatch({ type: 'qty', key, id, qty }),
      remove: (key) => dispatch({ type: 'remove', key }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [lines])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
