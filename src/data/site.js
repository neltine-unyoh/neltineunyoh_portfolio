// ---------------------------------------------------------------
// All the words on the site live in this one file.
// Edit here and every page updates.
// Anything marked "DRAFT" was written from your CV: replace it
// with your real stories before you send the site to recruiters.
// ---------------------------------------------------------------

const base = import.meta.env.BASE_URL;

export const profile = {
  name: "Neltine Unyoh",
  role: "Technical Product Manager",
  location: "Douala, Cameroon",
  timezone: "UTC+1",
  email: "neltineunyoh8@gmail.com",
  phone: "+237 654 894 694",
  whatsapp: "https://wa.me/237654894694",
  linkedin: "", // paste your LinkedIn URL here and the link appears everywhere
  resumeUrl: `${base}resume.pdf`,
  photo: `${base}images/neltine.webp`, // your photo lives in public/images
  availability: "Open to product roles, remote or in Cameroon",
  // The short line under the homepage heading
  intro:
    "I'm a technical product manager who has led SaaS, AI, EdTech and AgriTech products from first idea to launch, and built some of them myself as a developer.",
  story:
    "I started as a software engineer because I loved coding. Over time I got more curious about the decisions behind the code than the code itself. That curiosity led me to product management.",
};

// Companies and products shown in the scrolling strip on the homepage
export const worked = [
  { name: "Mihma Corporation", note: "Product Manager" },
  { name: "Kora", note: "B2B SaaS" },
  { name: "Stayverse", note: "Product Manager" },
  { name: "Sanfaani", note: "Product Manager" },
  { name: "QuizGenie", note: "AI · EdTech" },
  { name: "AgriLock", note: "AgriTech" },
  { name: "Maviance", note: "Fintech" },
];

// The dark numbers band on the homepage. Keep these to numbers you can explain in an interview.
export const stats = [
  { value: "2+", label: "Years in product and engineering" },
  { value: "5", label: "Companies and teams" },
  { value: "3", label: "Products built from scratch" },
  { value: "20+", label: "SMEs running on Kora" },
];

export const experience = [
  {
    company: "Maviance PLC",
    role: "Frontend Developer Intern",
    period: "Jul 2024 – Dec 2024",
    place: "Yaoundé, Cameroon",
    points: [
      "Built responsive interfaces for digital financial products in Agile Scrum teams with product managers and designers.",
      "Integrated REST APIs and troubleshot issues to improve reliability.",
    ],
  },
  {
    company: "QuizGenie",
    role: "Product Owner & Full-Stack Developer",
    period: "Jan 2025 – Aug 2025",
    place: "Douala, Cameroon",
    points: [
      "Took an AI-powered learning product from concept to launch in 8 months, as both product owner and developer.",
      "Validated the problem through user, market and competitive research, then wrote the PRDs and specifications.",
      "Built product features, integrated AI capabilities and managed development priorities in Jira.",
    ],
  },
  {
    company: "Mihma Corporation",
    role: "Product Manager, Kora",
    period: "Sep 2025 – Jun 2026",
    place: "Douala, Cameroon",
    points: [
      "Owned the full lifecycle of Kora, a B2B SaaS platform used by 20+ SMEs across 7 product modules.",
      "Ran 10+ product demos, supported sales through discovery and closing, and helped onboard 5+ new client businesses.",
      "Led discovery through customer interviews and competitor research, then turned findings into PRDs, user stories and flows.",
      "Prioritized the Jira backlog by customer value, business impact and feasibility, and ran sprint planning with engineering and design.",
    ],
  },
  {
    company: "Stayverse",
    role: "Product Manager (Contract, part-time)",
    period: "Nov 2025 – Mar 2026",
    place: "Lagos, Nigeria · Remote",
    points: [
      "Set product priorities, roadmap direction and delivery scope in a fully remote, cross-functional team.",
      "Analyzed funnels and feature adoption with Mixpanel and SQL to find drop-off points.",
      "Defined success metrics and scoped the MVP by user value and business impact.",
    ],
  },
  {
    company: "Sanfaani LTD",
    role: "Product Manager (Contract)",
    period: "Jul 2026 – Sep 2026",
    place: "Lagos, Nigeria · Remote",
    points: [
      "Owned product goals, priorities and development plans, tracking performance to decide where to iterate.",
      "Wrote requirements and specifications that guided engineering and design delivery.",
      "Combined user feedback with customer and competitor research to shape the roadmap.",
    ],
  },
];

export const skills = [
  { group: "Product", items: ["Discovery", "Strategy", "User & market research", "Competitive analysis", "MVP definition", "Roadmapping", "Prioritization"] },
  { group: "Delivery", items: ["PRDs", "User stories", "Acceptance criteria", "User flows", "Agile / Scrum", "Sprint & release planning", "QA"] },
  { group: "Go-to-market", items: ["Client demos", "Sales support", "Onboarding", "Training & documentation"] },
  { group: "Analytics", items: ["KPIs", "Funnels & adoption", "A/B testing", "SQL", "Mixpanel", "Metabase", "Excel / Sheets"] },
  { group: "Tools & tech", items: ["Jira", "Figma", "Notion", "GitHub", "JavaScript", "TypeScript", "React", "Node.js", "REST APIs", "Supabase"] },
];

// Tools shown in the scrolling row on the About page.
// Two ways to show a tool's logo:
//   1. Paste an image link:   { name: "Figma", file: "figma", logo: "https://..." }
//   2. Or save the file as public/logos/figma.svg (or .png).
// Until one of these is set, only the tool's name is shown.
export const tools = [
  { name: "Jira", file: "jira" },
  { name: "Figma", file: "figma" },
  { name: "Notion", file: "notion" },
  { name: "Mixpanel", file: "mixpanel" },
  { name: "Metabase", file: "metabase" },
  { name: "Google Sheets", file: "google-sheets" },
  { name: "Excel", file: "excel" },
  { name: "SQL", file: "sql" },
  { name: "GitHub", file: "github" },
  { name: "JavaScript", file: "javascript" },
  { name: "TypeScript", file: "typescript" },
  { name: "React", file: "react" },
  { name: "Node.js", file: "nodejs" },
  { name: "Supabase", file: "supabase" },
].map((tool) => ({
  ...tool,
  logos: [tool.logo, `${base}logos/${tool.file}.png`, `${base}logos/${tool.file}.svg`].filter(Boolean),
}));

export const education = {
  degree: "BSc, Software Engineering",
  school: "Institute of Management and Engineering, Douala",
  period: "2022 – 2025",
};

export const certifications = [
  { name: "Agile Scrum Product Owner Certified", year: "2026" },
  { name: "Fintech and Payments Fundamentals", year: "2026" },
  { name: "Product Management Professional Certificate, Prodefied", year: "2025" },
  { name: "AI Product Management, Simplilearn", year: "2025" },
];

export const languages = ["English (fluent)", "French (fluent)"];

// ---------------------------------------------------------------
// Products I've built
// ---------------------------------------------------------------
export const products = [
  {
    slug: "kora",
    name: "Kora",
    visual: "kora",
    tint: "#e3f0eb",
    image: `${base}images/kora-dashboard.jpg`,
    screens: [`${base}images/kora-dashboard.jpg`],
    tagline: "One place for small businesses to sell, stock, spend and get paid.",
    role: "Product Manager",
    company: "Mihma Corporation",
    period: "Sep 2025 – Jun 2026",
    category: "B2B SaaS",
    summary:
      "Kora is a B2B SaaS platform that lets SMEs run sales, inventory, invoicing, payments, point of sale, staff and multi-branch operations from one system. I owned it end to end: discovery, requirements, prioritization, launch, sales support and client onboarding.",
    stats: [
      { value: "7", label: "product modules" },
      { value: "20+", label: "SMEs using Kora" },
      { value: "10+", label: "client demos run" },
      { value: "5+", label: "businesses onboarded" },
    ],
    problem: {
      title: "Small businesses were running on scattered tools",
      body: [
        "Many SMEs tracked sales in one place, stock in another and expenses in a notebook. Owners with more than one branch had no single view of what was happening across the business.",
        "That made simple questions slow to answer: what sold today, what needs restocking, and who still owes us money.",
      ],
    },
    modules: ["Sales", "Inventory", "Invoicing", "Payments", "Point of sale", "Staff", "Multi-branch"],
    work: [
      { title: "Discovery", body: "Led customer interviews, market and competitor research, and turned the findings into PRDs, user stories, acceptance criteria and user flows in Notion and Figma." },
      { title: "Prioritization", body: "Owned the Jira backlog and ranked it by customer value, business impact and feasibility. Facilitated sprint planning and backlog refinement with engineering and UI/UX." },
      { title: "Go-to-market", body: "Ran 10+ product demos for prospective clients and supported sales in discovery and closing conversations, tailoring Kora's configuration to each client's workflow." },
      { title: "Adoption", body: "Wrote training guides and product documentation, and fed patterns from client calls back into the roadmap." },
    ],
    // DRAFT: replace these with two or three real decisions you made.
    decisions: [
      {
        title: "Configure, don't custom-build",
        body: "Every client wanted Kora to match their workflow. Rather than build one-off features for each, we leaned on configuration so new clients could be onboarded without adding engineering work.",
      },
      {
        title: "Let the sales calls shape the roadmap",
        body: "Demos and onboarding calls surfaced the same requests again and again. I logged those patterns and used them to decide which modules to deepen next.",
      },
    ],
    outcome:
      "Kora grew to 7 modules used by 20+ SMEs. I helped close and onboard 5+ new client businesses and created the documentation that helped them adopt key features.",
    learning:
      "In B2B, the product doesn't end at the release. Demos, onboarding and training decide whether a feature actually gets used.",
  },
  {
    slug: "quizgenie",
    name: "QuizGenie",
    visual: "quizgenie",
    tint: "var(--tint-violet)",
    logo: "", // add a logo file path here when you have one
    tagline: "Your study material. Your questions. Your progress.",
    role: "Product Owner & Full-Stack Developer",
    company: "My own product",
    period: "Jan 2025 – Aug 2025",
    category: "AI · EdTech",
    summary:
      "QuizGenie is an AI-powered learning product I took from concept to launch in 8 months. I was both product owner and full-stack developer: I defined the problem, users, vision, MVP scope and roadmap, then built it.",
    stats: [
      { value: "8 mo", label: "concept to launch" },
      { value: "2", label: "roles: owner and builder" },
      { value: "1", label: "pilot group of early users" },
      { value: "AI", label: "question generation at its core" },
    ],
    problem: {
      title: "DRAFT: what problem were learners facing?",
      body: [
        "DRAFT: describe who QuizGenie is for and what was hard for them before it existed. For example, students preparing for exams without enough practice questions.",
      ],
    },
    work: [
      { title: "Validation", body: "Validated the problem through user, market and competitive research before writing a line of product code." },
      { title: "Definition", body: "Wrote the PRDs and specifications, and set the MVP scope and roadmap." },
      { title: "Building", body: "Built product features and integrated the AI capabilities as the full-stack developer." },
      { title: "Launch", body: "Managed development priorities in Jira and launched to a pilot group of early users." },
    ],
    decisions: [
      {
        title: "DRAFT: a scope decision",
        body: "DRAFT: what did you deliberately leave out of the MVP, and why?",
      },
    ],
    outcome: "Launched to a pilot group of early users eight months after the first idea.",
    learning:
      "Being the PM and the developer at once taught me what every scope decision really costs, and that changed how I write requirements.",
  },
  {
    slug: "agrilock",
    name: "AgriLock",
    visual: "agrilock",
    tint: "var(--tint-green)",
    image: `${base}images/agrilock-landing.jpg`,
    tagline: "Designing a trust layer for agricultural finance.",
    role: "Product lead & Developer",
    company: "Independent project",
    period: "2025",
    category: "Fintech · Agriculture",
    summary:
      "AgriLock is a smart-contract agri-finance concept that connects farmers, investors, buyers and cooperatives. I led the product and the development.",
    stats: [
      { value: "4", label: "sides of the marketplace" },
      { value: "0 → 1", label: "concept to prototype" },
      { value: "2", label: "roles: product and developer" },
      { value: "6", label: "MVP capabilities scoped" },
    ],
    problem: {
      title: "Farmers need finance. Investors need trust.",
      body: [
        "Smallholder farmers often can't get financing for a season, while people who would invest in agriculture have little visibility into how their money is used or whether the harvest will be sold.",
        "DRAFT: add what you learned about this problem and who you spoke to.",
      ],
    },
    actors: ["Farmers", "Financiers", "Buyers", "Verifiers"],
    work: [
      { title: "Framing", body: "Mapped the four sides of the marketplace and what each one needs before they will commit." },
      { title: "Product design", body: "Defined the flows for funding a farmer, tracking progress and settling with buyers." },
      { title: "Building", body: "Led development of the smart-contract concept and the product around it." },
    ],
    decisions: [
      {
        title: "DRAFT: why smart contracts?",
        body: "DRAFT: explain why locking funds in a contract solved the trust problem better than a normal escrow or loan.",
      },
    ],
    outcome: "DRAFT: where AgriLock stands today, and what you would test next.",
    learning:
      "Multi-sided products only work when every side trusts the system. Trust has to be designed, not assumed.",
  },
];

// ---------------------------------------------------------------
// Product teardowns (How I Think)
// ---------------------------------------------------------------
export const principles = [
  {
    title: "Find the problem behind the request",
    body: "A feature request is someone's guess at a solution. I want to know what they were trying to do when they asked for it.",
  },
  {
    title: "Separate what we know from what we think",
    body: "Most product debates are two assumptions arguing. Writing down which is which usually ends the argument.",
  },
  {
    title: "Ship the smallest useful bet",
    body: "The goal of a first version is to learn whether the direction is right, not to solve everything.",
  },
  {
    title: "Talk to engineers early",
    body: "Having written production code, I bring feasibility into the conversation before the spec is written, not after.",
  },
];

export const process = [
  { title: "Frame", body: "What decision are we actually making, and for whom?" },
  { title: "Discover", body: "Interviews, data and competitors, until the problem is clear." },
  { title: "Decide", body: "Weigh value, effort and risk. Write down what we're not doing." },
  { title: "Learn", body: "Ship, measure the metric we agreed on, and adjust." },
];

export const teardowns = [
  {
    slug: "whatsapp",
    name: "WhatsApp",
    articleUrl: "", // paste your Substack article link here
    logo: `${base}images/whatsapp-logo.png`,
    heroImage: `${base}images/whatsapp-chats.jpg`,
    screens: [], // screenshots you take yourself, e.g. [`${base}images/whatsapp-1.png`]
    visual: "whatsapp",
    tint: "var(--tint-green)",
    category: "Consumer · Communication",
    question: "What makes people come back to a chat app every single day?",
    summary:
      "Most apps fight for a few minutes of attention. WhatsApp is opened many times a day without a single notification asking for it. I looked at why it feels so easy to come back to, where that comfort breaks, and one change I would make.",
    users: [
      { title: "Families and friends", body: "Want to stay close, share moments and keep group conversations going without effort." },
      { title: "Small businesses", body: "Use chats and status to sell, answer customers and keep in touch with buyers." },
    ],
    works: [
      "Everyone you know is already there, so there's nothing to set up and no one to convince.",
      "It works on cheap phones and slow connections, which matters in markets like Cameroon.",
      "Voice notes let people talk in the language and way they're comfortable with, not just type.",
      "Status gives people a reason to check in daily, even when no one has messaged them.",
    ],
    breaks: [
      "On low-storage phones, media from groups fills the phone and people end up deleting the app or their chats.",
      "Busy groups create noise, so important messages get lost between forwards and stickers.",
      "Forwarded messages spread quickly with little context, so people can't always tell what to trust.",
    ],
    recommendation: {
      title: "Let people fix a Status caption",
      body: "Allow editing only the caption, within about fifteen minutes of posting. The photo or video stays the same. It's enough to fix a typo or a missing name, without letting anyone change the context of a post long after people have seen it.",
    },
    metrics: [
      "Statuses deleted and re-posted within 15 minutes (should drop)",
      "Share of caption edits made in the first few minutes",
      "Guardrail: reports of misleading or changed Status context",
    ],
  },
  {
    slug: "mtn-momo",
    name: "MTN MoMo",
    logo: `${base}images/momo-logo.png`,
    articleUrl: "", // paste your Substack article link here to show a "Read the full article" button
    visual: "momo",
    tint: "var(--tint-yellow)",
    category: "Fintech · Payments",
    question: "Why do millions of people trust MTN MoMo with their money?",
    summary:
      "MTN Mobile Money is how millions of people in Cameroon send, receive and pay. I looked at the product through the lens of trust: what makes people confident to move money, and what makes them hesitate.",
    users: [
      { title: "Everyday senders", body: "Want to send money quickly and know it arrived." },
      { title: "Merchants and agents", body: "Need fast confirmation so they can hand over goods or cash." },
    ],
    works: [
      "USSD works on any phone, with no data or smartphone needed.",
      "The agent network turns digital money into cash almost anywhere.",
      "The confirmation SMS is a familiar, instant receipt.",
    ],
    breaks: [
      "When a transaction fails or is delayed, users can't easily see what happened or where the money is.",
      "Fees aren't always clear before the user confirms.",
      "Reversals for money sent to the wrong number are slow and stressful.",
    ],
    recommendation: {
      title: "A clear status for every transaction",
      body: "Give each pending or failed transaction a plain status (processing, failed, refund on the way) with an expected time, reachable from USSD and the app. Uncertainty is what kills trust, so make the waiting visible.",
    },
    metrics: [
      "Support contacts about failed or pending transactions",
      "Time to resolve a failed transaction",
      "Repeat usage in the 30 days after a failed transaction",
    ],
  },
];
