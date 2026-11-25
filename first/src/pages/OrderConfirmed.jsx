import { Link, useParams } from 'react-router-dom'
import { money } from '../lib/format'
import NotFound from './NotFound'

export default function OrderConfirmed() {
  const { id } = useParams()
  let order = null
  try { order = JSON.parse(localStorage.getItem(`kumo.order.${id}`) || 'null') } catch { /* ignore */ }
  if (!order) return <NotFound />

  const eta = new Date(new Date(order.placedAt).getTime() + 4 * 864e5)
    .toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-4xl text-green-700"><i className="bx bx-check" /></div>
        <h1 className="mt-4 text-3xl font-bold">Order placed</h1>
        <p className="mt-2 text-gray-600">Thanks, {order.customer.name.split(' ')[0]}. Order <span className="font-semibold text-gray-900">#{order.id}</span> should arrive by <span className="font-semibold text-gray-900">{eta}</span>.</p>
      </div>
      <div className="mt-10 rounded-2xl border p-6">
        <ul className="divide-y">
          {order.items.map((i, n) => (
            <li key={n} className="flex items-center gap-4 py-3">
              <img src={i.image} alt="" className="h-16 w-14 rounded object-cover" />
              <div className="flex-1"><p className="font-semibold">{i.title}</p><p className="text-sm text-gray-600">Size {i.size} · {i.color} · Qty {i.qty}</p></div>
              <p className="font-semibold">{money(i.qty * i.price)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between border-t pt-4 text-lg font-bold"><span>Total paid</span><span>{money(order.total)}</span></div>
        <p className="mt-4 text-sm text-gray-600">Delivering to {order.customer.address}, {order.customer.city} {order.customer.pin}</p>
      </div>
      <div className="mt-8 text-center"><Link to="/shop" className="inline-block rounded-full bg-gray-900 px-6 py-3 font-semibold text-white">Continue shopping</Link></div>
    </div>
  )
}
