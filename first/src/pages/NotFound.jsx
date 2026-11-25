import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-6xl font-bold text-[#ee1c47]">404</p>
      <h1 className="mt-4 text-2xl font-bold">This page doesn&apos;t exist</h1>
      <p className="mt-2 text-gray-600">The product may have been removed, or the link is wrong.</p>
      <Link to="/shop" className="mt-6 inline-block rounded-full bg-gray-900 px-6 py-3 font-semibold text-white">Browse the shop</Link>
    </div>
  )
}
