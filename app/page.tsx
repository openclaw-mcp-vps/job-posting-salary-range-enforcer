export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-16">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <span className="text-xs uppercase tracking-widest text-[#58a6ff] font-semibold">
          HR Compliance Tool
        </span>
        <h1 className="text-4xl font-bold text-white leading-tight">
          Ensure Job Postings Include<br />
          <span className="text-[#58a6ff]">Required Salary Ranges</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
          Automatically scan job boards and company career pages for salary transparency compliance.
          Get instant alerts when postings are missing required pay ranges — before regulators do.
        </p>
        <ul className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-[#c9d1d9]">
          <li className="flex items-center gap-2 justify-center">
            <span className="text-[#58a6ff] font-bold">✓</span> Scheduled URL scanning
          </li>
          <li className="flex items-center gap-2 justify-center">
            <span className="text-[#58a6ff] font-bold">✓</span> Regex + AI detection
          </li>
          <li className="flex items-center gap-2 justify-center">
            <span className="text-[#58a6ff] font-bold">✓</span> Email &amp; dashboard alerts
          </li>
        </ul>
        <div>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Monitoring — $9/mo
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm border border-[#30363d] rounded-xl p-8 flex flex-col gap-5 bg-[#161b22]">
          <div className="flex flex-col gap-1">
            <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Pro Plan</span>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold text-white">$9</span>
              <span className="text-[#8b949e] mb-1">/month</span>
            </div>
            <p className="text-[#8b949e] text-sm">Everything you need to stay compliant.</p>
          </div>
          <ul className="flex flex-col gap-3 text-sm text-[#c9d1d9]">
            {[
              "Monitor up to 500 job postings/mo",
              "Scheduled scans every 6 hours",
              "AI-powered salary range detection",
              "Email alerts for violations",
              "Compliance dashboard",
              "CSV export of findings"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              q: "Which salary transparency laws does this cover?",
              a: "The tool checks for the presence of salary ranges as required by laws like Colorado's EPEWA, New York City Local Law 32, California SB 1162, and similar state/local regulations. You configure which rules apply to your postings."
            },
            {
              q: "How does the salary detection work?",
              a: "We combine regex patterns (e.g. $XX,XXX–$XX,XXX) with an AI model to catch salary ranges written in various formats — including hourly rates, annual salaries, and pay bands — reducing false negatives."
            },
            {
              q: "Can I monitor third-party job boards like LinkedIn or Indeed?",
              a: "Yes. You provide the URLs of job listings or career pages and we scan them on your schedule. Works with any publicly accessible page including LinkedIn, Indeed, Greenhouse, Lever, and custom career sites."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-5 bg-[#161b22] flex flex-col gap-2">
              <h3 className="font-semibold text-white">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
