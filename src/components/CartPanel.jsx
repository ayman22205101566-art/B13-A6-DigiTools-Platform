function CartPanel({ cartItems, onRemoveFromCart, onCheckout }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  if (cartItems.length === 0) {
    return (
      <div className="rounded-[18px] border border-[#E7E7E7] bg-white p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <h3 className="text-[24px] font-bold text-[#1F2937]">Cart is Empty</h3>
        <p className="mt-3 text-[16px] text-[#7B8794]">
          No products selected yet. Click Buy Now to add products to cart.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="flex flex-col gap-4 rounded-[18px] border border-[#E7E7E7] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E9E9E9] bg-white">
  <img
    src={item.icon}
    alt={item.name}
    className="h-6 w-6 object-contain"
  />
</div>

            <div>
              <h4 className="text-[18px] font-semibold text-[#1F2937]">
                {item.name}
              </h4>
              <p className="mt-1 text-[15px] text-[#7B8794]">${item.price}</p>
            </div>
          </div>

          <button
            onClick={() => onRemoveFromCart(item.id)}
            className="rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-medium text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="rounded-[18px] border border-[#E7E7E7] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between text-[16px] text-[#1F2937]">
          <span>Total Products</span>
          <span className="font-semibold">{cartItems.length}</span>
        </div>

        <div className="mt-3 flex items-center justify-between text-[16px] text-[#1F2937]">
          <span>Total Price</span>
          <span className="font-semibold">${totalPrice}</span>
        </div>

        <button
          onClick={onCheckout}
          className="mt-5 w-full rounded-full bg-gradient-to-r from-[#6D28D9] to-[#A21CAF] px-5 py-3 text-[16px] font-semibold text-white shadow-[0_10px_25px_rgba(124,58,237,0.25)]"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default CartPanel