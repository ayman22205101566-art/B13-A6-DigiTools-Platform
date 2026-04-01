import bannerImg from '../assets/banner.png'
function Hero() {
  return (
    <section className="bg-[#f3f3f4]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-20">
        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e7dcff] px-5 py-2 text-[16px] font-medium text-[#7c3aed]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
            New: AI-Powered Tools Available
          </div>

          <h1 className="mt-8 max-w-[520px] text-[52px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#273046] lg:text-[60px]">
            Supercharge Your Digital Workflow
          </h1>

          <p className="mt-6 max-w-[500px] text-[17px] leading-[1.9] text-[#7b8794]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-white font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.4)]">
  Explore Products
</button>

            <button className="flex items-center gap-2 rounded-full border border-[#7c3aed] bg-transparent px-6 py-4 text-[17px] font-semibold text-[#7c3aed] transition hover:bg-[#efe7ff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.574 0 3.286L8.029 20.99c-1.25.687-2.779-.216-2.779-1.643V5.653Z"
                />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[430px] overflow-hidden rounded-[8px] bg-[#e9e9ea]">
            <img
        src={bannerImg}
         alt="Digital workflow"
        className="h-[450px] w-full object-cover"
        />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero