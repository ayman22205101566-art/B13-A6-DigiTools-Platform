import { useState } from "react"
import { toast } from "react-toastify"
import { products } from "../data/products"
import ProductCard from "./ProductCard"
import CartPanel from "./CartPanel"

function PremiumToolsSection({ cartItems, setCartItems }) {
  const [activeTab, setActiveTab] = useState("products")

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product])
    toast.success(`${product.name} added to cart`)
  }

  const handleRemoveFromCart = (productId) => {
    const targetItem = cartItems.find((item) => item.id === productId)

    setCartItems((prev) => {
      const firstIndex = prev.findIndex((item) => item.id === productId)
      return prev.filter((_, index) => index !== firstIndex)
    })

    if (targetItem) {
      toast.info(`${targetItem.name} removed from cart`)
    }
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning("Cart is already empty")
      return
    }

    setCartItems([])
    toast.success("Proceed to checkout completed")
  }

  const isProductAdded = (productId) => {
    return cartItems.some((item) => item.id === productId)
  }

  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-[34px] font-extrabold leading-tight text-[#111827] md:text-[42px]">
            Premium Digital Tools
          </h2>

          <p className="mx-auto mt-4 max-w-[580px] text-[16px] leading-6 text-[#7B8794]">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex rounded-full border border-[#E7E7E7] bg-white p-1 shadow-sm">
              <button
                onClick={() => setActiveTab("products")}
                className={`rounded-full px-8 py-3 text-[15px] font-medium transition ${
                  activeTab === "products"
                    ? "bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white shadow-[0_8px_20px_rgba(124,58,237,0.25)]"
                    : "text-[#1F2937]"
                }`}
              >
                Products
              </button>

              <button
                onClick={() => setActiveTab("cart")}
                className={`rounded-full px-8 py-3 text-[15px] font-medium transition ${
                  activeTab === "cart" ? "text-[#6D28D9]" : "text-[#1F2937]"
                }`}
              >
                Cart ({cartItems.length})
              </button>
            </div>
          </div>

          <div className="mx-auto mt-4 h-[3px] w-4 rounded-full bg-[#EC4899]" />
        </div>

        <div className="mt-10">
          {activeTab === "products" ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isAdded={isProductAdded(product.id)}
                />
              ))}
            </div>
          ) : (
            <CartPanel
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onCheckout={handleCheckout}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default PremiumToolsSection