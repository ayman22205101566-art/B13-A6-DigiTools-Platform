function Navbar({ cartCount }) {
  return (
    <header className="border-b border-[#e5e7eb] bg-[#f3f3f4]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 lg:px-10">
        <div className="bg-gradient-to-r from-[#6d28d9] to-[#9333ea] bg-clip-text text-[30px] font-extrabold leading-none tracking-[-0.02em] text-transparent">
          DigiTools
        </div>

        <nav className="hidden items-center gap-10 md:flex">
          <a href="#" className="text-[16px] font-medium text-[#1f2937] hover:text-[#6d35ff]">
            Products
          </a>
          <a href="#" className="text-[16px] font-medium text-[#1f2937] hover:text-[#6d35ff]">
            Features
          </a>
          <a href="#" className="text-[16px] font-medium text-[#1f2937] hover:text-[#6d35ff]">
            Pricing
          </a>
          <a href="#" className="text-[16px] font-medium text-[#1f2937] hover:text-[#6d35ff]">
            Testimonials
          </a>
          <a href="#" className="text-[16px] font-medium text-[#1f2937] hover:text-[#6d35ff]">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative flex items-center gap-2 text-[16px] font-medium text-[#1f2937]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.837l.383 1.437m0 0L6.75 11.25m-1.644-5.976h13.358c.75 0 1.31.7 1.164 1.436l-.93 4.687a1.125 1.125 0 0 1-1.103.907H7.875m0 0a1.125 1.125 0 1 0 0 2.25h9.75m-9.75 0a1.125 1.125 0 1 0 0 2.25m9.75-2.25a1.125 1.125 0 1 0 0 2.25"
              />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-1 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button className="text-[16px] font-medium text-[#1f2937] hover:text-[#6d35ff]">
            Login
          </button>

          <button className="rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.4)] transition hover:bg-[#6d28d9]">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar