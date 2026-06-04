import { ArrowRight, Mail } from "lucide-react";

const navItems = ["Studio", "Services", "Method", "Contact"];

const metrics = [
  ["12+", "years building and advising"],
  ["0-1", "venture formation"],
  ["B2B", "products, platforms, operations"],
  ["MVP", "strategy to shipped proof"]
];

const services = [
  {
    title: "Venture Strategy",
    text: "We sharpen the market, customer, business model, and execution logic before teams commit serious capital."
  },
  {
    title: "Product Formation",
    text: "We turn early conviction into positioning, user journeys, MVP scope, product architecture, and launch plans."
  },
  {
    title: "Build Sprints",
    text: "We help teams ship credible prototypes and lean products that answer the right commercial questions."
  },
  {
    title: "Growth Systems",
    text: "We design acquisition, retention, pricing, and operating loops that make promising ventures compound."
  }
];

const method = [
  ["01", "Reduce", "Separate signal from noise and define the strongest first-principles problem."],
  ["02", "Frame", "Shape the thesis, product wedge, business mechanics, and proof required."],
  ["03", "Build", "Move into focused execution with clear scope, senior judgment, and fast learning."],
  ["04", "Compound", "Install the operating rhythms and growth systems needed after launch."]
];

const principles = [
  "Clarity before velocity",
  "Small proofs before large bets",
  "Commercial truth over theatre",
  "Execution systems over slideware"
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative min-h-screen border-b border-line/80 px-5 py-5 sm:px-8 lg:px-10">
        <div className="ambient-grid" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-7xl flex-col">
          <header className="reveal flex items-center justify-between border-b border-line/80 pb-5">
            <a href="#" className="heading text-xl font-extrabold text-ink">
              FirstPrinciple
            </a>
            <nav className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-ink">
                  {item}
                </a>
              ))}
            </nav>
            <a
              href="mailto:hello@firstprinciple.studio"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-ink bg-ink px-4 text-sm font-bold text-white transition hover:bg-pine focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact
            </a>
          </header>

          <div className="grid flex-1 content-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-10">
            <div>
              <p className="reveal text-sm font-extrabold uppercase tracking-[0.22em] text-teal">
                Venture studio / 12+ years experience
              </p>
              <h1 className="heading reveal mt-6 max-w-5xl text-[clamp(4rem,13vw,10.5rem)] font-extrabold leading-[0.82] text-ink">
                Build from first principles.
              </h1>
            </div>

            <div className="reveal self-end lg:pb-5">
              <p className="max-w-xl text-2xl leading-9 text-muted">
                FirstPrinciple partners with founders and companies to turn rigorous insight into ventures, products, and operating systems that can survive contact with the market.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@firstprinciple.studio"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-pine focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
                >
                  Start a venture conversation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-white/70 px-6 text-sm font-extrabold text-ink transition hover:-translate-y-1 hover:border-teal/50 focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
                >
                  View studio model
                </a>
              </div>
            </div>
          </div>

          <div className="reveal grid border-t border-line/80 md:grid-cols-4">
            {metrics.map(([value, label]) => (
              <div key={value} className="border-b border-line/80 py-5 md:border-b-0 md:border-r md:last:border-r-0">
                <p className="heading text-4xl font-extrabold text-ink">{value}</p>
                <p className="mt-1 max-w-40 text-sm font-semibold leading-5 text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee border-b border-line bg-ink py-4 text-white" aria-label="FirstPrinciple focus areas">
        <div className="marquee-track heading text-2xl font-extrabold uppercase">
          <span>Strategy</span>
          <span>Product</span>
          <span>Venture Building</span>
          <span>Growth Systems</span>
          <span>Execution</span>
          <span>Strategy</span>
          <span>Product</span>
          <span>Venture Building</span>
          <span>Growth Systems</span>
          <span>Execution</span>
        </div>
      </div>

      <section id="studio" className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="reveal text-sm font-extrabold uppercase tracking-[0.22em] text-teal">
            The studio
          </p>
          <div className="space-y-8">
            <h2 className="heading reveal text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
              We work where uncertainty is high and the cost of vague thinking is expensive.
            </h2>
            <p className="reveal max-w-3xl text-xl leading-9 text-muted">
              The work is part strategy, part product, part company-building. We help teams choose the right problem, prove the right assumptions, and build the smallest version of the business that can earn real conviction.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-line bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-teal">Services</p>
              <h2 className="heading mt-4 text-4xl font-extrabold text-ink sm:text-5xl">
                Senior help across the venture arc.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-muted">
              Focused enough for early ventures. Serious enough for established companies creating new business lines.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className="reveal bg-paper p-7 sm:p-9" style={{ animationDelay: `${index * 70}ms` }}>
                <p className="heading text-sm font-extrabold text-teal">0{index + 1}</p>
                <h3 className="heading mt-8 text-3xl font-extrabold text-ink">{service.title}</h3>
                <p className="mt-4 text-lg leading-8 text-muted">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="lg:sticky lg:top-10 lg:h-fit">
            <p className="reveal text-sm font-extrabold uppercase tracking-[0.22em] text-teal">Method</p>
            <h2 className="heading reveal mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              A scroll-led path from thesis to execution.
            </h2>
            <p className="reveal mt-5 text-lg leading-8 text-muted">
              Each phase strips away ambiguity until the team knows what to build, why it matters, and how to move.
            </p>
          </div>

          <div className="space-y-5">
            {method.map(([number, title, text]) => (
              <article key={title} className="scroll-panel reveal border-l-4 border-teal bg-white p-7 shadow-sm sm:p-9">
                <p className="heading text-sm font-extrabold text-teal">{number}</p>
                <h3 className="heading mt-8 text-5xl font-extrabold text-ink">{title}</h3>
                <p className="mt-4 max-w-2xl text-xl leading-9 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pine px-5 py-24 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="reveal text-sm font-extrabold uppercase tracking-[0.22em] text-teal">
            Operating principles
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="reveal bg-pine p-7 sm:p-10">
                <p className="heading text-3xl font-extrabold leading-tight sm:text-5xl">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal border-y border-line py-16">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-teal">Contact</p>
            <h2 className="heading mt-6 max-w-5xl text-5xl font-extrabold leading-[0.95] text-ink sm:text-7xl">
              Bring the opportunity. We will bring the structure.
            </h2>
            <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-2xl text-xl leading-9 text-muted">
                Tell us what you are building, what is uncertain, and what needs to become investable, shippable, or scalable.
              </p>
              <a
                href="mailto:hello@firstprinciple.studio"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-pine focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
              >
                hello@firstprinciple.studio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
