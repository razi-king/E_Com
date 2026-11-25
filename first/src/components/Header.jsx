import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../image/logo.png'
import { useCart } from '../context/CartContext'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop all' },
  { to: '/shop?category=Tops', label: 'Tops' },
  { to: '/shop?category=Bottoms', label: 'Bottoms' },
  { to: '/shop?category=Dresses', label: 'Dresses' },
  { to: '/shop?category=Jackets', label: 'Jackets' },
]

export default function Header() {
  const { count } = useCart()
  const navigate = useNavigate()
  const loc = useLocation()
  const cat = new URLSearchParams(loc.search).get('category')
  const here = loc.pathname + (cat ? `?category=${cat}` : '')
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function search(e) {
    e.preventDefault()
    navigate(`/shop${q.trim() ? `?q=${encodeURIComponent(q.trim())}` : ''}`)
    setOpen(false)
  }

  const link = (to) => `font-semibold transition hover:text-[#ee1c47] ${here === to ? 'text-[#ee1c47]' : 'text-gray-800'}`

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0"><img src={logo} alt="Kumo home" className="w-24" /></Link>
        <nav className="hidden flex-1 gap-6 md:flex" aria-label="Main">
          {nav.map((n) => <Link key={n.label} to={n.to} aria-current={here === n.to ? 'page' : undefined} className={link(n.to)}>{n.label}</Link>)}
        </nav>
        <form onSubmit={search} className="ml-auto hidden items-center rounded-full border border-gray-300 px-3 lg:flex" role="search">
          <i className="bx bx-search text-xl text-gray-500" aria-hidden="true" />
          <label htmlFor="q" className="sr-only">Search products</label>
          <input id="q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" className="w-48 bg-transparent px-2 py-1.5 text-sm outline-none" />
        </form>
        <Link to="/cart" className="relative ml-auto text-2xl text-gray-800 hover:text-[#ee1c47] lg:ml-0" aria-label={`Cart, ${count} items`}>
          <i className="bx bx-shopping-bag" aria-hidden="true" />
          {count > 0 && <span className="absolute -right-2 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#ee1c47] px-1 text-xs font-bold text-white">{count}</span>}
        </Link>
        <button onClick={() => setOpen((v) => !v)} className="text-3xl md:hidden" aria-label="Menu" aria-expanded={open}>
          <i className={`bx ${open ? 'bx-x' : 'bx-menu'}`} />
        </button>
      </div>
      {open && (
        <div className="space-y-3 border-t px-4 py-4 md:hidden">
          <form onSubmit={search} role="search" className="flex rounded-full border border-gray-300 px-3">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" aria-label="Search products" className="flex-1 bg-transparent py-2 text-sm outline-none" />
            <button aria-label="Search"><i className="bx bx-search text-xl" /></button>
          </form>
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {nav.map((n) => <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className={link(n.to)}>{n.label}</Link>)}
          </nav>
        </div>
      )}
    </header>
  )
}
