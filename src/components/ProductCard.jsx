function ProductCard({ product, onAddToCart, isAdded }) {
  const getTagStyle = (tagType) => {
    if (tagType === "best-seller") {
      return "bg-[#FFF2CC] text-[#D97706]"
    }
    if (tagType === "popular") {
      return "bg-[#ECE8FF] text-[#7C3AED]"
    }
    if (tagType === "new") {
      return "bg-[#DCFCE7] text-[#16A34A]"
    }
    return "bg-gray-100 text-gray-600"
  }

  return (
    <div className="rounded-[18px] border border-[#E7E7E7] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E9E9E9] bg-white">
         <img
             src={product.icon}
             alt={product.name}
             className="h-6 w-6 object-contain"
        />
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${getTagStyle(
            product.tagType
          )}`}
        >
          {product.tag}
        </span>
      </div>

      <h3 className="text-[20px] font-bold leading-tight text-[#1F2937]">
        {product.name}
      </h3>

      <p className="mt-3 min-h-[68px] text-[15px] leading-6 text-[#7B8794]">
        {product.description}
      </p>

      <div className="mt-4 flex items-end">
        <span className="text-[20px] font-bold text-[#1F2937]">
          ${product.price}
        </span>
        <span className="ml-1 text-[15px] text-[#9AA5B1]">/{product.period}</span>
      </div>

      <ul className="mt-4 space-y-2">
        {product.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-[15px] text-[#7B8794]"
          >
            <span className="text-[#22C55E]">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onAddToCart(product)}
        className="mt-6 w-full rounded-full bg-gradient-to-r from-[#6D28D9] to-[#A21CAF] px-5 py-3 text-[16px] font-semibold text-white shadow-[0_10px_25px_rgba(124,58,237,0.25)] transition hover:scale-[1.01]"
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  )
}

export default ProductCard