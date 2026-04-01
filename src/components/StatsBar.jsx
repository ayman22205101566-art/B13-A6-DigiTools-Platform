function StatsBar() {
  return (
    <section className="bg-gradient-to-r from-[#5b2eff] via-[#8b2cff] to-[#c414ff]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-6 py-12 text-center text-white md:grid-cols-3 lg:px-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[54px] font-extrabold leading-none tracking-[-0.03em]">
            50K+
          </h2>
          <p className="mt-4 text-[18px] font-medium text-white/90">Active Users</p>
        </div>

        <div className="flex flex-col items-center justify-center border-y border-white/20 py-6 md:border-x md:border-y-0 md:py-0">
          <h2 className="text-[54px] font-extrabold leading-none tracking-[-0.03em]">
            200+
          </h2>
          <p className="mt-4 text-[18px] font-medium text-white/90">Premium Tools</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[54px] font-extrabold leading-none tracking-[-0.03em]">
            4.9
          </h2>
          <p className="mt-4 text-[18px] font-medium text-white/90">Rating</p>
        </div>
      </div>
    </section>
  )
}

export default StatsBar