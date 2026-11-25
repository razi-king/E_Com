import { Link } from 'react-router-dom'
import Stars from './Stars'
import { money } from '../lib/format'

const tagStyle = { Sale: 'bg-[#ee1c47] text-white', New: 'bg-blue-600 text-white', Hot: 'bg-amber-400 text-black' }

export default function ProductCard({ product: p }) {
  const off = p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0
  return (
    <Link to={`/product/${p.id}`} className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#ee1c47]">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img src={p.image} alt={p.title} loading="lazy" className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${p.stock === 0 ? 'opacity-60' : ''}`} />
        {p.tag && p.stock > 0 && <span className={`absolute left-3 top-3 rounded px-2 py-0.5 text-xs font-semibold ${tagStyle[p.tag]}`}>{p.tag}</span>}
        {p.stock === 0 && <span className="absolute left-3 top-3 rounded bg-gray-900 px-2 py-0.5 text-xs font-semibold text-white">Sold out</span>}
      </div>
      <div className="space-y-1.5 p-4">
        <p className="text-xs uppercase tracking-wide text-gray-500">{p.category}</p>
        <h3 className="line-clamp-1 font-semibold text-gray-900">{p.title}</h3>
        <Stars rating={p.rating} reviews={p.reviews} />
        <p className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-lg font-bold text-gray-900">{money(p.price)}</span>
          {off > 0 && (
            <>
              <span className="text-sm text-gray-400 line-through">{money(p.mrp)}</span>
              <span className="text-sm font-semibold text-green-700">{off}% off</span>
            </>
          )}
        </p>
      </div>
    </Link>
  )
}
