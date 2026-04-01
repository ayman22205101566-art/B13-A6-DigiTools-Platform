import userIcon from "../assets/user.png"
import packageIcon from "../assets/package.png"
import rocketIcon from "../assets/rocket.png"

function StepsSection() {
  const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
  },
  {
    id: "02",
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
    icon: packageIcon,
  },
  {
    id: "03",
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
    icon: rocketIcon,
  },
]

  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-[34px] font-extrabold leading-tight text-[#111827] md:text-[42px]">
            Get Started In 3 Steps
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-7 text-[#7B8794]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-[18px] border border-[#E7E7E7] bg-white px-8 py-14 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-[13px] font-bold text-white">
                {step.id}
              </div>

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F1EAFE]">
  <img
    src={step.icon}
    alt={step.title}
    className="h-10 w-10 object-contain"
  />
</div>

              <h3 className="mt-8 text-[24px] font-bold text-[#1F2937]">
                {step.title}
              </h3>

              <p className="mx-auto mt-4 max-w-[260px] text-[16px] leading-7 text-[#7B8794]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepsSection
