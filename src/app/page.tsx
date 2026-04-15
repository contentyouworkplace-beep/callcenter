const countries = [
  { name: "India", code: "IN", flag: "🇮🇳", dialCode: "+91" },
  { name: "United States", code: "US", flag: "🇺🇸", dialCode: "+1" },
  { name: "Canada", code: "CA", flag: "🇨🇦", dialCode: "+1" },
  { name: "UAE", code: "AE", flag: "🇦🇪", dialCode: "+971" },
  { name: "China", code: "CN", flag: "🇨🇳", dialCode: "+86" },
  { name: "Russia", code: "RU", flag: "🇷🇺", dialCode: "+7" },
  { name: "Singapore", code: "SG", flag: "🇸🇬", dialCode: "+65" },
  { name: "Malaysia", code: "MY", flag: "🇲🇾", dialCode: "+60" },
  { name: "Indonesia", code: "ID", flag: "🇮🇩", dialCode: "+62" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧", dialCode: "+44" },
  { name: "Australia", code: "AU", flag: "🇦🇺", dialCode: "+61" },
  { name: "Germany", code: "DE", flag: "🇩🇪", dialCode: "+49" },
  { name: "Japan", code: "JP", flag: "🇯🇵", dialCode: "+81" },
  { name: "South Korea", code: "KR", flag: "🇰🇷", dialCode: "+82" },
  { name: "Brazil", code: "BR", flag: "🇧🇷", dialCode: "+55" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦", dialCode: "+27" },
  { name: "Philippines", code: "PH", flag: "🇵🇭", dialCode: "+63" },
  { name: "Thailand", code: "TH", flag: "🇹🇭", dialCode: "+66" },
  { name: "Vietnam", code: "VN", flag: "🇻🇳", dialCode: "+84" },
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", dialCode: "+966" },
];

const features = [
  {
    icon: "📞",
    title: "IVR System",
    desc: "Intelligent Interactive Voice Response with multi-level menus, auto-attendant, and smart call routing to the right agents.",
  },
  {
    icon: "🎙️",
    title: "Call Recordings",
    desc: "HD call recording with cloud storage, playback, download & analytics. Monitor quality and train your team effectively.",
  },
  {
    icon: "👥",
    title: "Dedicated Calling Team",
    desc: "Professional, trained telecallers fluent in English, Hindi & regional languages. Scalable teams from 5 to 500+ agents.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    desc: "Live dashboards with call volume, duration, conversion rates, agent performance & campaign ROI tracking.",
  },
  {
    icon: "🌍",
    title: "Global Coverage",
    desc: "Local & toll-free numbers in 20+ countries. Multi-timezone support with 24/7 calling capabilities.",
  },
  {
    icon: "🔗",
    title: "CRM Integration",
    desc: "Seamless integration with Salesforce, HubSpot, Zoho & custom CRMs. Auto-log calls, notes & follow-ups.",
  },
  {
    icon: "📱",
    title: "Auto Dialer",
    desc: "Predictive, progressive & preview dialing modes. Maximize agent talk-time and minimize idle time.",
  },
  {
    icon: "🛡️",
    title: "DND & Compliance",
    desc: "Built-in DND registry checks, TCPA/TRAI compliance, call-time restrictions & consent management.",
  },
  {
    icon: "🎧",
    title: "Customer Support Team",
    desc: "Trained support agents for inbound queries, ticket resolution, live chat & email support across time zones.",
  },
  {
    icon: "💼",
    title: "Lead Qualification",
    desc: "Expert sales reps who qualify leads, set appointments, and nurture prospects through the funnel to close.",
  },
];

const languages = [
  { name: "English", accents: ["American", "British", "Australian", "Indian"] },
  { name: "Hindi", accents: ["Standard", "Regional"] },
  { name: "Arabic", accents: ["Gulf", "Levantine", "Egyptian"] },
  { name: "Mandarin", accents: ["Standard", "Cantonese"] },
  { name: "Spanish", accents: ["Latin American", "European"] },
  { name: "Malay", accents: ["Malaysian", "Indonesian"] },
  { name: "Russian", accents: ["Standard"] },
  { name: "Portuguese", accents: ["Brazilian"] },
  { name: "Japanese", accents: ["Standard"] },
  { name: "Korean", accents: ["Standard"] },
  { name: "French", accents: ["European", "Canadian"] },
  { name: "German", accents: ["Standard"] },
  { name: "Tamil", accents: ["Standard"] },
  { name: "Telugu", accents: ["Standard"] },
  { name: "Thai", accents: ["Standard"] },
  { name: "Vietnamese", accents: ["Standard"] },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
  { value: "100+", label: "Happy Clients" },
  { value: "20+", label: "Countries" },
  { value: "15+", label: "Languages" },
  { value: "99.9%", label: "Uptime" },
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                G
              </div>
              <span className="text-xl font-bold gradient-text">
                GOPLNR SALES
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-slate-300 hover:text-white transition">Features</a>
              <a href="#countries" className="text-sm text-slate-300 hover:text-white transition">Coverage</a>
              <a href="#why-us" className="text-sm text-slate-300 hover:text-white transition">Why Us</a>
              <a href="#contact" className="text-sm text-slate-300 hover:text-white transition">Contact</a>
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-blue-300">Serving 20+ Countries Worldwide</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            <span className="text-white">Expand Your Sales &amp; Support</span>
            <br />
            <span className="gradient-text">Team with Highly Qualified People</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 animate-fade-in-up">
            A 50+ member sales &amp; support team with 5+ years of experience. Enterprise-grade
            IVR systems, dedicated calling teams, customer support agents &amp; HD call recordings
            in 15+ languages across India, USA, UAE, Singapore &amp; 20+ countries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition shadow-lg shadow-blue-500/25"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="border border-slate-600 hover:border-slate-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition"
            >
              Explore Features
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20 max-w-5xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to <span className="gradient-text">Scale Sales &amp; Support</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              From IVR systems to dedicated sales &amp; support teams, we provide end-to-end telecalling solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-card rounded-2xl p-6 hover:border-blue-500/30 transition group"
              >
                <div className="text-4xl mb-4 group-hover:animate-float">{f.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Recordings Highlight */}
      <section className="py-24 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Crystal-Clear <span className="gradient-text">Call Recordings</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Every call is recorded in HD quality and stored securely in the cloud.
                Review, analyze, and improve your team&apos;s performance with our powerful recording platform.
              </p>
              <ul className="space-y-4">
                {[
                  "HD audio recording on every call",
                  "Secure cloud storage with encryption",
                  "Search & filter by agent, date, duration",
                  "Download & share recordings instantly",
                  "AI-powered call transcription",
                  "Sentiment analysis & quality scoring",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-400 text-xs">✓</span>
                    </span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="space-y-4">
                {[
                  { agent: "Priya S.", duration: "4:32", status: "Converted", country: "🇮🇳" },
                  { agent: "John D.", duration: "6:15", status: "Follow-up", country: "🇺🇸" },
                  { agent: "Ahmed K.", duration: "3:48", status: "Converted", country: "🇦🇪" },
                  { agent: "Wei L.", duration: "5:21", status: "Interested", country: "🇸🇬" },
                  { agent: "Sarah M.", duration: "2:55", status: "Converted", country: "🇬🇧" },
                ].map((call) => (
                  <div
                    key={call.agent}
                    className="flex items-center justify-between bg-slate-800/50 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{call.country}</span>
                      <div>
                        <div className="text-sm font-medium text-white">{call.agent}</div>
                        <div className="text-xs text-slate-400">{call.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          call.status === "Converted"
                            ? "bg-green-500/20 text-green-400"
                            : call.status === "Follow-up"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {call.status}
                      </span>
                      <button className="text-slate-400 hover:text-white text-sm">▶</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section id="countries" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Global Coverage</span> — 20+ Countries
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Local numbers, native-speaking agents, and timezone-aligned calling across these regions and more.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {countries.map((c) => (
              <div
                key={c.code}
                className="glass-card rounded-xl p-4 text-center hover:border-blue-500/30 transition"
              >
                <div className="text-3xl mb-2">{c.flag}</div>
                <div className="text-sm font-medium text-white">{c.name}</div>
                <div className="text-xs text-slate-400 mt-1">{c.dialCode}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GOPLNR - Team, Languages & Experience */}
      <section id="why-us" className="py-24 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why <span className="gradient-text">GOPLNR SALES?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              5+ years of proven telecalling expertise, a 50+ member dedicated team, and 100+ satisfied clients across the globe.
            </p>
          </div>

          {/* Experience highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold gradient-text mb-2">5+</div>
              <div className="text-xl font-semibold text-white mb-3">Years in Business</div>
              <p className="text-sm text-slate-400">Trusted by startups & enterprises since 2021. Deep domain expertise in B2B & B2C telecalling campaigns.</p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold gradient-text mb-2">50+</div>
              <div className="text-xl font-semibold text-white mb-3">Team Members</div>
              <p className="text-sm text-slate-400">Skilled telecallers, QA analysts, campaign managers & tech support staff working across multiple time zones.</p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold gradient-text mb-2">100+</div>
              <div className="text-xl font-semibold text-white mb-3">Happy Clients</div>
              <p className="text-sm text-slate-400">From SaaS companies to real estate, healthcare, fintech & e-commerce — delivering results across industries.</p>
            </div>
          </div>

          {/* Languages & Accents */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Languages &amp; Accents We Support</h3>
            <p className="text-slate-400">Native &amp; near-native speakers with region-specific accent training</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="glass-card rounded-xl p-4 hover:border-blue-500/30 transition"
              >
                <div className="text-base font-semibold text-white mb-1">🗣️ {lang.name}</div>
                <div className="text-xs text-slate-400">
                  {lang.accents.join(" · ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to <span className="gradient-text">Boost Your Sales &amp; Support?</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Get in touch and we&apos;ll set up your sales &amp; support team within 48 hours.
              </p>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Business Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 6353583148"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Country</label>
                <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition">
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.name} ({c.dialCode})
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-slate-400 mb-2">How can we help?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your telecalling needs..."
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-lg transition shadow-lg shadow-blue-500/25"
                >
                  Request a Callback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                  G
                </div>
                <span className="text-lg font-bold gradient-text">GOPLNR SALES</span>
              </div>
              <p className="text-sm text-slate-400">
                Enterprise sales &amp; support solutions with IVR, call recordings &amp; dedicated teams across 20+ countries.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>IVR Systems</li>
                <li>Sales Teams</li>
                <li>Customer Support</li>
                <li>Call Recordings</li>
                <li>Auto Dialer</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Coverage</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>India &amp; South Asia</li>
                <li>North America</li>
                <li>Middle East</li>
                <li>Southeast Asia</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Corporate Office</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Vadodara, Gujarat, India</li>
                <li>+91 6353583148</li>
                <li>sales@goplnr.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-10 pt-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} GOPLNR SALES. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
