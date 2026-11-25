import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FREE_SHIPPING_OVER, money } from '../lib/format'

export function OrderSummary({ children }) {
  const { subtotal, savings, shipping, total, count } = useCart()
  return (
    <div className="space-y-3 rounded-2xl bg-gray-50 p-6">
      <h2 className="text-lg font-bold">Order summary</h2>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between"><dt>Items ({count})</dt><dd>{money(subtotal)}</dd></div>
        {savings > 0 && <div className="flex justify-between text-green-700"><dt>You save</dt><dd>−{money(savings)}</dd></div>}
        <div className="flex justify-between"><dt>Delivery</dt><dd>{shipping ? money(shipping) : 'Free'}</dd></div>
        <div className="flex justify-between border-t pt-3 text-base font-bold"><dt>Total</dt><dd>{money(total)}</dd></div>
      </dl>
      {shipping > 0 && <p className="text-xs text-gray-600">Add {money(FREE_SHIPPING_OVER - subtotal)} more for free delivery.</p>}
      {children}
    </div>
  )
}

export default function Cart() {
  const { items, setQty, remove } = useCart()

  if (!items.length) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <i className="bx bx-shopping-bag text-6xl text-gray-300" aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-bold">Your bag is empty</h1>
        <p className="mt-2 text-gray-600">Find something you like and it will show up here.</p>
        <Link to="/shop" className="mt-6 inline-block rounded-full bg-[#ee1c47] px-6 py-3 font-semibold text-white">Start shopping</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Your bag</h1>
      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <ul className="divide-y rounded-2xl border">
          {items.map((i) => (
            <li key={i.key} className="flex gap-4 p-4">
              <Link to={`/product/${i.id}`} className="shrink-0"><img src={i.product.image} alt={i.product.title} className="h-28 w-24 rounded-lg object-cover" /></Link>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex justify-between gap-2">
                  <Link to={`/product/${i.id}`} className="font-semibold hover:underline">{i.product.title}</Link>
                  <p className="font-semibold">{money(i.qty * i.product.price)}</p>
                </div>
                <p className="text-sm text-gray-600">Size {i.size} · {i.color}</p>
                <p className="text-sm text-gray-600">{money(i.product.price)} each</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <div className="flex items-center rounded-lg border">
                    <button onClick={() => setQty(i.key, i.id, i.qty - 1)} disabled={i.qty <= 1} className="px-3 py-1 disabled:opacity-30" aria-label={`Decrease ${i.product.title}`}>−</button>
                    <span className="w-8 text-center text-sm font-semibold">{i.qty}</span>
                    <button onClick={() => setQty(i.key, i.id, i.qty + 1)} disabled={i.qty >= i.product.stock} className="px-3 py-1 disabled:opacity-30" aria-label={`Increase ${i.product.title}`}>+</button>
                  </div>
                  <button onClick={() => remove(i.key)} className="text-sm font-semibold text-gray-600 hover:text-[#ee1c47]">Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-3">
          <OrderSummary>
            <Link to="/checkout" className="block rounded-lg bg-[#ee1c47] py-3 text-center font-semibold text-white hover:bg-[#d0153c]">Checkout</Link>
          </OrderSummary>
          <Link to="/shop" className="block text-center text-sm font-semibold text-gray-700 hover:underline">Continue shopping</Link>
        </div>
      </div>
    </div>
  )
}
