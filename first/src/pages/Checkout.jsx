import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { OrderSummary } from './Cart'
import { money } from '../lib/format'

const FIELDS = [
  { name: 'name', label: 'Full name', autoComplete: 'name', wide: true },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Mobile number', type: 'tel', autoComplete: 'tel', inputMode: 'numeric' },
  { name: 'address', label: 'Address', autoComplete: 'street-address', wide: true },
  { name: 'city', label: 'City', autoComplete: 'address-level2' },
  { name: 'pin', label: 'PIN code', autoComplete: 'postal-code', inputMode: 'numeric' },
]

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address.'
  if (!/^[6-9]\d{9}$/.test(v.phone.replace(/\D/g, '').slice(-10))) e.phone = 'Enter a 10-digit Indian mobile number.'
  if (v.address.trim().length < 8) e.address = 'Enter your house number and street.'
  if (!v.city.trim()) e.city = 'Enter your city.'
  if (!/^[1-9]\d{5}$/.test(v.pin.trim())) e.pin = 'Enter a 6-digit PIN code.'
  return e
}

export default function Checkout() {
  const { items, total, clear } = useCart()
  const navigate = useNavigate()
  const [values, setValues] = useState({ name: '', email: '', phone: '', address: '', city: '', pin: '', payment: 'cod' })
  const [errors, setErrors] = useState({})
  const [placing, setPlacing] = useState(false)

  if (!items.length && !placing) return <Navigate to="/cart" replace />

  const change = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  function place(e) {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    const first = Object.keys(errs)[0]
    if (first) { document.getElementById(first)?.focus(); return }
    setPlacing(true)
    // Demo store: the order is saved in this browser instead of a payment gateway.
    const order = {
      id: `KM${Date.now().toString().slice(-8)}`,
      placedAt: new Date().toISOString(),
      customer: values,
      items: items.map((i) => ({ id: i.id, title: i.product.title, size: i.size, color: i.color, qty: i.qty, price: i.product.price, image: i.product.image })),
      total,
    }
    localStorage.setItem(`kumo.order.${order.id}`, JSON.stringify(order))
    clear()
    navigate(`/order/${order.id}`, { replace: true })
  }

  const input = (bad) => `w-full rounded-lg border px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#ee1c47]/30 ${bad ? 'border-red-500' : 'border-gray-300 focus:border-[#ee1c47]'}`

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/cart" className="text-sm font-semibold text-gray-600 hover:underline">← Back to bag</Link>
      <h1 className="mb-8 mt-2 text-3xl font-bold">Checkout</h1>
      <form onSubmit={place} noValidate className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-lg font-bold">Delivery details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {FIELDS.map((f) => (
                <div key={f.name} className={f.wide ? 'sm:col-span-2' : ''}>
                  <label htmlFor={f.name} className="mb-1 block text-sm font-medium">{f.label}</label>
                  <input id={f.name} name={f.name} type={f.type || 'text'} value={values[f.name]} onChange={change}
                    autoComplete={f.autoComplete} inputMode={f.inputMode} className={input(errors[f.name])}
                    aria-invalid={!!errors[f.name]} aria-describedby={errors[f.name] ? `${f.name}-err` : undefined} />
                  {errors[f.name] && <p id={`${f.name}-err`} className="mt-1 text-sm text-red-600">{errors[f.name]}</p>}
                </div>
              ))}
            </div>
          </section>
          <fieldset>
            <legend className="mb-4 text-lg font-bold">Payment</legend>
            <div className="space-y-2">
              {[
                { id: 'cod', label: 'Cash on delivery', note: 'Pay when your order arrives' },
                { id: 'upi', label: 'UPI', note: 'Demo only: no payment is taken' },
              ].map((p) => (
                <label key={p.id} className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 ${values.payment === p.id ? 'border-gray-900 ring-1 ring-gray-900' : 'border-gray-300'}`}>
                  <input type="radio" name="payment" value={p.id} checked={values.payment === p.id} onChange={change} className="mt-1 accent-[#ee1c47]" />
                  <span><span className="block font-semibold">{p.label}</span><span className="text-sm text-gray-600">{p.note}</span></span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <div>
          <OrderSummary>
            <ul className="space-y-2 border-t pt-3 text-sm">
              {items.map((i) => (
                <li key={i.key} className="flex justify-between gap-2">
                  <span className="truncate">{i.qty} × {i.product.title} <span className="text-gray-500">({i.size})</span></span>
                  <span>{money(i.qty * i.product.price)}</span>
                </li>
              ))}
            </ul>
            <button disabled={placing} className="w-full rounded-lg bg-[#ee1c47] py-3 font-semibold text-white hover:bg-[#d0153c] disabled:opacity-60">
              Place order · {money(total)}
            </button>
            <p className="text-center text-xs text-gray-500">This is a portfolio demo. No real order or payment is made.</p>
          </OrderSummary>
        </div>
      </form>
    </div>
  )
}
