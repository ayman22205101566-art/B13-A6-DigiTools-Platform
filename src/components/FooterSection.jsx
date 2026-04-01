function FooterSection() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#5B2EFF] via-[#8B2CFF] to-[#C414FF] py-24">
        <div className="mx-auto max-w-[1180px] px-6 text-center lg:px-10">
          <h2 className="text-[32px] font-extrabold leading-tight text-white md:text-[46px]">
            Ready To Transform Your Workflow?
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-white/85 md:text-[16px]">
            Join thousands of professionals who are already using Digitools to work smarter.
            <br className="hidden md:block" />
            Start your free trial today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-3 text-[16px] font-semibold text-[#7C3AED] shadow-sm transition hover:scale-[1.02]">
              Explore Products
            </button>

            <button className="rounded-full border border-white/70 bg-transparent px-8 py-3 text-[16px] font-semibold text-white transition hover:bg-white/10">
              View Pricing
            </button>
          </div>

          <p className="mt-6 text-[14px] text-white/80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      <footer className="bg-[#061432] text-white">
        <div className="mx-auto max-w-[1180px] px-6 py-20 lg:px-10">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr_1fr] lg:gap-x-10">
            <div>
              <h3 className="text-[38px] font-extrabold leading-none tracking-[-0.02em] md:text-[44px]">
                DigiTools
              </h3>

              <p className="mt-7 max-w-[250px] text-[15px] leading-9 text-white/75">
                Premium digital tools for creators,
                professionals, and businesses. Work smarter
                with our suite of powerful tools.
              </p>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-white">Product</h4>
              <ul className="mt-6 space-y-4 text-[15px] text-white/75">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-white">Company</h4>
              <ul className="mt-6 space-y-4 text-[15px] text-white/75">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-white">Resources</h4>
              <ul className="mt-6 space-y-4 text-[15px] text-white/75">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-white">Social Links</h4>

              <div className="mt-6 flex items-center gap-3">
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#061432]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 8.438 9.874v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46H15.19c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89H13.56v6.987A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
                  </svg>
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#061432]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                  >
                    <path d="M12 2.04c2.717 0 3.056.01 4.122.058 1.065.049 1.792.218 2.212.382.557.216.954.475 1.372.893.418.418.677.815.893 1.372.164.42.333 1.147.382 2.212.048 1.066.058 1.405.058 4.122s-.01 3.056-.058 4.122c-.049 1.065-.218 1.792-.382 2.212a3.83 3.83 0 0 1-.893 1.372 3.83 3.83 0 0 1-1.372.893c-.42.164-1.147.333-2.212.382-1.066.048-1.405.058-4.122.058s-3.056-.01-4.122-.058c-1.065-.049-1.792-.218-2.212-.382a3.83 3.83 0 0 1-1.372-.893 3.83 3.83 0 0 1-.893-1.372c-.164-.42-.333-1.147-.382-2.212C2.05 15.096 2.04 14.757 2.04 12.04s.01-3.056.058-4.122c.049-1.065.218-1.792.382-2.212a3.83 3.83 0 0 1 .893-1.372 3.83 3.83 0 0 1 1.372-.893c.42-.164 1.147-.333 2.212-.382C8.944 2.05 9.283 2.04 12 2.04Zm0 1.8c-2.671 0-2.986.01-4.04.057-.975.045-1.505.207-1.858.344-.468.182-.801.4-1.151.75-.35.35-.568.683-.75 1.151-.137.353-.299.883-.344 1.858-.047 1.054-.057 1.369-.057 4.04s.01 2.986.057 4.04c.045.975.207 1.505.344 1.858.182.468.4.801.75 1.151.35.35.683.568 1.151.75.353.137.883.299 1.858.344 1.054.047 1.369.057 4.04.057s2.986-.01 4.04-.057c.975-.045 1.505-.207 1.858-.344.468-.182.801-.4 1.151-.75.35-.35.568-.683.75-1.151.137-.353.299-.883.344-1.858.047-1.054.057-1.369.057-4.04s-.01-2.986-.057-4.04c-.045-.975-.207-1.505-.344-1.858a2.03 2.03 0 0 0-.75-1.151 2.03 2.03 0 0 0-1.151-.75c-.353-.137-.883-.299-1.858-.344-1.054-.047-1.369-.057-4.04-.057Zm0 3.06A5.14 5.14 0 1 1 6.86 12 5.14 5.14 0 0 1 12 6.9Zm0 8.48A3.34 3.34 0 1 0 8.66 12 3.34 3.34 0 0 0 12 15.38Zm6.54-9.9a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2Z" />
                  </svg>
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#061432]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                  >
                    <path d="M18.244 2H21l-6.56 7.497L22.158 22h-6.043l-4.734-6.189L5.96 22H3.2l7.016-8.012L2 2h6.196l4.28 5.602L18.244 2Zm-1.06 18h1.527L7.37 3.895H5.731L17.184 20Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-7">
            <div className="flex flex-col gap-4 text-[14px] text-white/55 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Digitools. All rights reserved.</p>

              <div className="flex flex-wrap items-center gap-8">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Cookies</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterSection