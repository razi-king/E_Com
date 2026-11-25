export default function Stars({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="flex text-amber-400" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <i key={i} className={`bx ${rating >= i ? 'bxs-star' : rating >= i - 0.5 ? 'bxs-star-half' : 'bx-star'}`} />
        ))}
      </span>
      <span className="sr-only">{rating} out of 5 stars</span>
      {reviews != null && <span className="text-gray-500">({reviews})</span>}
    </div>
  )
}
