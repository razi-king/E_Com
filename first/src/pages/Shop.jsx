import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, products } from '../data/products'

const SORTS = {
  featured: { label: 'Featured', fn: (a, b) => a.id - b.id },
  'price-asc': { label: 'Price: low to high', fn: (a, b) => a.price - b.price },
  'price-desc': { label: 'Price: high to low', fn: (a, b) => b.price - a.price },
  rating: { label: 'Top rated', fn: (a, b) => b.rating - a.rating },
}
const PRICES = [
  { id: '', label: 'Any price' },
  { id: '0-999', label: 'Under ₹1,000' },
  { id: '1000-1999', label: '₹1,000 – ₹1,999' },
  { id: '2000-99999', label: '₹2,000 and above' },
]

/** Filters live in the URL, so a filtered view can be shared or bookmarked. */
export default function Shop() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const category = params.get('category') || ''
  const price = params.get('price') || ''
  const sort = params.get('sort') || 'featured'
  const inStock = params.get('stock') === '1'

  const set = (k, v) => {
    const next = new URLSearchParams(params)
    v ? next.set(k, v) : next.delete(k)
    setParams(next, { replace: true })
  }

  const results = useMemo(() => {
    const [min, max] = price ? price.split('-').map(Number) : [0, Infinity]
    const needle = q.toLowerCase()
    return products
      .filter((p) => !category || p.category === category)
      .filter((p) => p.price >= min && p.price <= max)
      .filter((p) => !inStock || p.stock > 0)
      .filter((p) => !needle || `${p.title} ${p.category} ${p.description}`.toLowerCase().includes(needle))
      .sort(SORTS[sort]?.fn || SORTS.featured.fn)
  }, [q, category, price, sort, inStock])

  const select = 'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm'

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{category || 'All products'}</h1>
        <p className="mt-1 text-gray-600">
          {results.length} {results.length === 1 ? 'product' : 'products'}{q && <> matching “{q}”</>}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-6" aria-label="Filters">
          <div>
            <label htmlFor="search" className="mb-1.5 block text-sm font-semibold">Search</label>
            <input id="search" value={q} onChange={(e) => set('q', e.target.value)} placeholder="Dress, denim, blouse…" className={select} />
          </div>
          <fieldset>
            <legend className="mb-2 text-sm font-semibold">Category</legend>
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {['', ...CATEGORIES].map((c) => (
                <button key={c || 'all'} onClick={() => set('category', c)} aria-pressed={category === c}
                  className={`rounded-full border px-3 py-1.5 text-left text-sm lg:rounded-lg ${category === c ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 hover:border-gray-900'}`}>
                  {c || 'All'}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            <div>
              <label htmlFor="price" className="mb-1.5 block text-sm font-semibold">Price</label>
              <select id="price" value={price} onChange={(e) => set('price', e.target.value)} className={select}>
                {PRICES.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="sort" className="mb-1.5 block text-sm font-semibold">Sort by</label>
              <select id="sort" value={sort} onChange={(e) => set('sort', e.target.value === 'featured' ? '' : e.target.value)} className={select}>
                {Object.entries(SORTS).map(([id, s]) => <option key={id} value={id}>{s.label}</option>)}
              </select>
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={inStock} onChange={(e) => set('stock', e.target.checked ? '1' : '')} className="h-4 w-4 accent-[#ee1c47]" />
            In stock only
          </label>
          {[...params.keys()].length > 0 && (
            <button onClick={() => setParams({}, { replace: true })} className="text-sm font-semibold text-[#ee1c47] hover:underline">Clear all filters</button>
          )}
        </aside>

        {results.length ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-3">
            {results.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
            <p className="font-semibold text-gray-900">No products match these filters</p>
            <p className="mt-1 text-gray-600">Try a different search, or clear the filters.</p>
            <button onClick={() => setParams({}, { replace: true })} className="mt-4 rounded-full bg-gray-900 px-5 py-2 font-semibold text-white">Clear filters</button>
          </div>
        )}
      </div>
    </div>
  )
}
