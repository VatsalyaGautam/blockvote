export function Stats() {
  type StatColor = keyof typeof colorVariants;
  const stats: {
    id: number;
    name: string;
    value: string;
    color: StatColor;
    icon: string;
  }[] = [
    {
      id: 1,
      name: "Elections Created",
      value: "127",
      color: "blue",
      icon: "🗳️",
    },
    {
      id: 2,
      name: "Total Votes Cast",
      value: "8,492",
      color: "cyan",
      icon: "✅",
    },
    {
      id: 3,
      name: "Active Users",
      value: "2,341",
      color: "indigo",
      icon: "👥",
    },
    {
      id: 4,
      name: "Success Rate",
      value: "99.9%",
      color: "teal",
      icon: "🎯",
    },
  ];

  const colorVariants = {
    blue: {
      bg: "from-blue-600/20 to-blue-800/20",
      border: "border-blue-500/30",
      text: "text-blue-400",
      glow: "shadow-blue-500/20",
    },
    cyan: {
      bg: "from-cyan-600/20 to-cyan-800/20",
      border: "border-cyan-500/30",
      text: "text-cyan-400",
      glow: "shadow-cyan-500/20",
    },
    indigo: {
      bg: "from-indigo-600/20 to-indigo-800/20",
      border: "border-indigo-500/30",
      text: "text-indigo-400",
      glow: "shadow-indigo-500/20",
    },
    teal: {
      bg: "from-teal-600/20 to-teal-800/20",
      border: "border-teal-500/30",
      text: "text-teal-400",
      glow: "shadow-teal-500/20",
    },
  };

  return (
    <section className="bg-gradient-to-b from-black via-gray-950 to-black py-24 sm:py-32 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by voters
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                worldwide
              </span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-200">
              Join thousands of users who trust our platform for secure,
              transparent voting.
            </p>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const colors = colorVariants[stat.color];
              return (
                <div
                  key={stat.id}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} p-8 backdrop-blur-sm hover:scale-105 transition-all duration-500 shadow-lg ${colors.glow} hover:shadow-xl`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.icon}
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <dd
                      className={`text-4xl font-bold tracking-tight ${colors.text} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.value}
                    </dd>
                    <dt className="mt-2 text-sm font-semibold leading-6 text-blue-200/80 group-hover:text-blue-200 transition-colors duration-300">
                      {stat.name}
                    </dt>
                  </div>

                  {/* Animated counter effect */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
export function Testimonials() {
  const testimonials = [
    {
      body: "BlockVote revolutionized our student government elections. The transparency and security gave everyone confidence in the results.",
      author: {
        name: "Sarah Chen",
        handle: "@sarahc_dev",
        role: "Student Council President",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108755-2616b2e6d5a4?w=100&h=100&fit=crop&crop=face",
      },
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      body: "The real-time results and immutable records made our community vote completely trustworthy. Amazing platform!",
      author: {
        name: "Marcus Rodriguez",
        handle: "@marcustech",
        role: "Community Organizer",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      },
      gradient: "from-cyan-400 to-indigo-400",
    },
    {
      body: "Fast, secure, and user-friendly. BlockVote is exactly what decentralized voting should be. Highly recommended!",
      author: {
        name: "Dr. Emily Watson",
        handle: "@emilywatson",
        role: "Blockchain Researcher",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      },
      gradient: "from-indigo-400 to-teal-400",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-950 via-black to-blue-950/20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              community
            </span>{" "}
            says
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Trusted by organizations worldwide for secure, transparent voting
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <div className="xl:col-start-2 xl:row-end-1">
            <div className="rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-8 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-blue-500/10">
              <blockquote className="text-blue-100">
                <p>"{testimonials[0].body}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img
                  className="h-10 w-10 rounded-full bg-gray-800"
                  src={testimonials[0].author.imageUrl}
                  alt=""
                />
                <div>
                  <div
                    className={`font-semibold bg-gradient-to-r ${testimonials[0].gradient} bg-clip-text text-transparent`}
                  >
                    {testimonials[0].author.name}
                  </div>
                  <div className="text-blue-300/70">
                    {testimonials[0].author.handle}
                  </div>
                </div>
              </figcaption>
            </div>
          </div>

          <div className="xl:row-span-2">
            <div className="rounded-2xl bg-gradient-to-br from-cyan-900/20 to-indigo-900/20 p-8 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-cyan-500/10">
              <blockquote className="text-cyan-100">
                <p>"{testimonials[1].body}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img
                  className="h-10 w-10 rounded-full bg-gray-800"
                  src={testimonials[1].author.imageUrl}
                  alt=""
                />
                <div>
                  <div
                    className={`font-semibold bg-gradient-to-r ${testimonials[1].gradient} bg-clip-text text-transparent`}
                  >
                    {testimonials[1].author.name}
                  </div>
                  <div className="text-cyan-300/70">
                    {testimonials[1].author.handle}
                  </div>
                </div>
              </figcaption>
            </div>
          </div>

          <div className="xl:col-start-2 xl:row-start-2">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-900/20 to-teal-900/20 p-8 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-indigo-500/10">
              <blockquote className="text-indigo-100">
                <p>"{testimonials[2].body}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img
                  className="h-10 w-10 rounded-full bg-gray-800"
                  src={testimonials[2].author.imageUrl}
                  alt=""
                />
                <div>
                  <div
                    className={`font-semibold bg-gradient-to-r ${testimonials[2].gradient} bg-clip-text text-transparent`}
                  >
                    {testimonials[2].author.name}
                  </div>
                  <div className="text-indigo-300/70">
                    {testimonials[2].author.handle}
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black py-24 sm:py-32">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to revolutionize
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              your voting process?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-200">
            Join thousands of organizations using BlockVote for secure,
            transparent, and efficient elections on the blockchain.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 px-8 py-4 text-white shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2 font-semibold">
                Start Your First Election
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>

            <button className="group rounded-2xl border border-blue-500/30 bg-blue-950/20 px-8 py-4 text-blue-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-900/30 hover:text-blue-200">
              <span className="flex items-center gap-2">
                View Demo
                <span className="group-hover:scale-110 transition-transform duration-300">
                  🎥
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
export function Footer() {
  const navigation = {
    main: [
      { name: "Elections", href: "/elections" },
      { name: "Create Election", href: "/create" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Security", href: "/security" },
    ],
    social: [
      {
        name: "Twitter",
        href: "#",
        icon: "🐦",
      },
      {
        name: "GitHub",
        href: "#",
        icon: "🐱",
      },
      {
        name: "Discord",
        href: "#",
        icon: "💬",
      },
      {
        name: "LinkedIn",
        href: "#",
        icon: "💼",
      },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-blue-800/20">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                BlockVote
              </span>
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed">
              Democratizing voting through blockchain technology. Secure,
              transparent, and immutable elections for the digital age.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-blue-300 hover:text-blue-200 transition-colors duration-300 hover:scale-110 transform"
                >
                  <span className="text-xl">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-blue-200 mb-4">
                Platform
              </h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-blue-300/70 hover:text-blue-200 transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-blue-200 mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-blue-300/70 hover:text-blue-200 transition-colors duration-300 text-sm"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-300/70 hover:text-blue-200 transition-colors duration-300 text-sm"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-300/70 hover:text-blue-200 transition-colors duration-300 text-sm"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-300/70 hover:text-blue-200 transition-colors duration-300 text-sm"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-blue-200">
              Stay Updated
            </h3>
            <p className="text-blue-300/70 text-sm">
              Get the latest updates on new features and blockchain voting
              insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl bg-blue-950/30 border border-blue-800/30 px-4 py-2 text-blue-200 placeholder-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent transition-all duration-300"
              />
              <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-white font-medium hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-blue-800/20 space-y-4 sm:space-y-0">
          <p className="text-blue-300/60 text-sm">
            © 2024 BlockVote. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-blue-300/60 hover:text-blue-200 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-blue-300/60 hover:text-blue-200 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-blue-300/60 hover:text-blue-200 text-sm transition-colors duration-300"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
