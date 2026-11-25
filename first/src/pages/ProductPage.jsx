import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Stars from '../components/Stars'
import ProductCard from '../components/ProductCard'
import { findProduct, products } from '../data/products'
import { useCart } from '../context/CartContext'
import { FREE_SHIPPING_OVER, money } from '../lib/format'
import NotFound from './NotFound'

export default function ProductPage() {
  const { id } = useParams()
  const p = findProduct(id)
  const { add, items } = useCart()
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [qty, setQty] = useState(1)
  const [error, setError] = useState('')
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setSize(''); setColor(p?.colors[0] || ''); setQty(1); setError(''); setAdded(false)
    window.scrollTo(0, 0)
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!p) return <NotFound />

  const off = p.mrp > p.price ? Math.round(((p.mrp - p.price) / p.mrp) * 100) : 0
  const inCart = items.filter((i) => i.id === p.id).reduce((n, i) => n + i.qty, 0)
  const left = p.stock - inCart
  const related = products.filter((r) => r.category === p.category && r.id !== p.id).slice(0, 4)

  function addToCart() {
    if (!size) { setError('Choose a size first.'); return }
    if (left <= 0) { setError('You already have all the stock in your bag.'); return }
    add({ id: p.id, size, color, qty: Math.min(qty, left) })
    setError('')
    setAdded(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-gray-900">Home</Link> / <Link to={`/shop?category=${p.category}`} className="hover:text-gray-900">{p.category}</Link> / <span className="text-gray-900">{p.title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-gray-100">
          <img src={p.image} alt={p.title} className="aspect-[4/5] w-full object-cover" />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wide text-gray-500">{p.category}</p>
            <h1 className="text-3xl font-bold text-gray-900">{p.title}</h1>
            <Stars rating={p.rating} reviews={`${p.reviews} reviews`} />
          </div>
          <p className="flex items-baseline gap-3">
            <span className="text-3xl font-bold">{money(p.price)}</span>
            {off > 0 && <><span className="text-lg text-gray-400 line-through">{money(p.mrp)}</span><span className="font-semibold text-green-700">{off}% off</span></>}
          </p>
          <p className="leading-relaxed text-gray-700">{p.description}</p>

          {p.stock === 0 ? (
            <p className="rounded-lg bg-gray-100 p-4 font-semibold text-gray-700">Sold out. Check back soon.</p>
          ) : (
            <>
              <fieldset>
                <legend className="mb-2 text-sm font-semibold">Size</legend>
                <div className="flex flex-wrap gap-2">
                  {p.sizes.map((s) => (
                    <button key={s} onClick={() => { setSize(s); setError('') }} aria-pressed={size === s}
                      className={`min-w-12 rounded-lg border px-3 py-2 text-sm font-semibold ${size === s ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 hover:border-gray-900'}`}>{s}</button>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-2 text-sm font-semibold">Colour: <span className="font-normal">{color}</span></legend>
                <div className="flex flex-wrap gap-2">
                  {p.colors.map((c) => (
                    <button key={c} onClick={() => setColor(c)} aria-pressed={color === c}
                      className={`rounded-lg border px-3 py-2 text-sm ${color === c ? 'border-gray-900 ring-1 ring-gray-900' : 'border-gray-300 hover:border-gray-900'}`}>{c}</button>
                  ))}
                </div>
              </fieldset>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center rounded-lg border border-gray-300">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2.5 text-lg" aria-label="Decrease quantity">−</button>
                  <span className="w-10 text-center font-semibold" aria-live="polite">{qty}</span>
                  <button onClick={() => setQty((q) => Math.min(Math.max(1, left), q + 1))} className="px-3 py-2.5 text-lg" aria-label="Increase quantity">+</button>
                </div>
                <button onClick={addToCart} className="flex-1 rounded-lg bg-[#ee1c47] px-6 py-3 font-semibold text-white hover:bg-[#d0153c]">Add to bag</button>
              </div>
              {error && <p role="alert" className="text-sm font-medium text-red-600">{error}</p>}
              {added && (
                <p role="status" className="flex items-center justify-between rounded-lg bg-green-50 p-3 text-sm text-green-800">
                  Added to your bag.
                  <Link to="/cart" className="font-semibold underline">View bag</Link>
                </p>
              )}
              <p className={`text-sm ${p.stock <= 5 ? 'font-semibold text-amber-700' : 'text-gray-600'}`}>
                {p.stock <= 5 ? `Only ${p.stock} left in stock` : 'In stock'} · Free delivery over {money(FREE_SHIPPING_OVER)}
              </p>
            </>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((r) => <ProductCard key={r.id} product={r} />)}
          </div>
        </section>
      )}
    </div>
  )
}
