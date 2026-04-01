function PricingSection() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      subtitle: "Perfect for getting started",
      price: "$0",
      period: "/Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      highlighted: false,
      badge: "",
    },
    {
      id: 2,
      name: "Pro",
      subtitle: "Best for professionals",
      price: "$29",
      period: "/Month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      id: 3,
      name: "Enterprise",
      subtitle: "For teams and businesses",
      price: "$99",
      period: "/Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      highlighted: false,
      badge: "",
    },
  ]

  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-[40px] font-extrabold leading-tight text-[#111827] md:text-[56px]">
            Simple, Transparent Pricing
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-[18px] leading-7 text-[#7B8794]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[18px] border p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] ${
                plan.highlighted
                  ? "border-transparent bg-gradient-to-r from-[#5B2EFF] via-[#8B2CFF] to-[#C414FF] text-white"
                  : "border-[#E7E7E7] bg-white text-[#111827]"
              }`}
            >
              {plan.badge && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F8DC8D] px-5 py-2 text-[16px] font-medium text-[#D97706] shadow-sm">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-[26px] font-bold">{plan.name}</h3>

              <p
                className={`mt-3 text-[16px] ${
                  plan.highlighted ? "text-white/85" : "text-[#7B8794]"
                }`}
              >
                {plan.subtitle}
              </p>

              <div className="mt-7 flex items-end">
                <span className="text-[56px] font-extrabold leading-none">
                  {plan.price}
                </span>
                <span
                  className={`mb-1 ml-1 text-[18px] ${
                    plan.highlighted ? "text-white/90" : "text-[#7B8794]"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-3 text-[16px] ${
                      plan.highlighted ? "text-white" : "text-[#5F6C7B]"
                    }`}
                  >
                    <span className="text-[#22C55E]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-full px-6 py-4 text-[18px] font-semibold transition ${
                  plan.highlighted
                    ? "bg-white text-[#7C3AED]"
                    : "bg-gradient-to-r from-[#5B2EFF] to-[#C414FF] text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection