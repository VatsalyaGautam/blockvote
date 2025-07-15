import {
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    name: "Wallet Integration",
    description:
      "Connect your MetaMask wallet to participate in elections securely.",
    icon: Shield,
    color: "blue",
  },
  {
    name: "Election Management",
    description:
      "Create and manage elections with customizable settings and timeframes.",
    icon: Clock,
    color: "cyan",
  },
  {
    name: "Candidate Management",
    description: "Add candidates with detailed profiles and qualifications.",
    icon: Users,
    color: "indigo",
  },
  {
    name: "Secure Voting",
    description:
      "Cast your vote with cryptographic security and immutable records.",
    icon: CheckCircle,
    color: "teal",
  },
  {
    name: "Real-time Results",
    description: "View live voting results and comprehensive analytics.",
    icon: BarChart3,
    color: "sky",
  },
  {
    name: "Fast Transactions",
    description: "Built on Sepholia for lightning-fast, low-cost transactions.",
    icon: Zap,
    color: "violet",
  },
];

const colorVariants = {
  blue: {
    bg: "bg-gradient-to-br from-blue-600 to-blue-700",
    shadow: "shadow-blue-500/20",
    ring: "ring-blue-500/20",
  },
  cyan: {
    bg: "bg-gradient-to-br from-cyan-600 to-cyan-700",
    shadow: "shadow-cyan-500/20",
    ring: "ring-cyan-500/20",
  },
  indigo: {
    bg: "bg-gradient-to-br from-indigo-600 to-indigo-700",
    shadow: "shadow-indigo-500/20",
    ring: "ring-indigo-500/20",
  },
  teal: {
    bg: "bg-gradient-to-br from-teal-600 to-teal-700",
    shadow: "shadow-teal-500/20",
    ring: "ring-teal-500/20",
  },
  sky: {
    bg: "bg-gradient-to-br from-sky-600 to-sky-700",
    shadow: "shadow-sky-500/20",
    ring: "ring-sky-500/20",
  },
  violet: {
    bg: "bg-gradient-to-br from-violet-600 to-violet-700",
    shadow: "shadow-violet-500/20",
    ring: "ring-violet-500/20",
  },
};

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Complete voting platform
          </p>
          <p className="mt-6 text-lg leading-8 text-blue-200">
            Our decentralized voting platform provides all the tools needed for
            secure, transparent, and efficient elections on the blockchain.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => {
              const colors = colorVariants[feature.color];
              return (
                <div
                  key={feature.name}
                  className="relative pl-16 group hover:scale-105 transition-transform duration-300"
                >
                  <dt className="text-base font-semibold leading-7 text-blue-100">
                    <div
                      className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl ${colors.bg} shadow-lg ${colors.shadow} ring-1 ${colors.ring} group-hover:scale-110 transition-all duration-300`}
                    >
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-blue-300/80">
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
