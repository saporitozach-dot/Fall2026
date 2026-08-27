import type { Flashcard, NoteSection, Quiz } from './types'

/** I-Core Marketing (M370) — Lectures #1–2 (Class Intro + Ch. 1 Overview) */
export const marketingNotes: NoteSection[] = [
  {
    id: 'mkt-c1-framing',
    title: 'What this course is (and isn’t)',
    bullets: [
      'Not a course about advertising, branding, or “becoming a marketer.”',
      'It is about making better business decisions by understanding customers more deeply than competitors.',
      'Fundamental question: Why do technically strong firms with great people still struggle to grow profitably?',
      'Profitability depends on customer choices; those choices depend on perceived value; leaders must shape those choices.',
      'Career trajectory depends on influencing profitable growth — customers choosing your firm repeatedly over alternatives. Marketing explains why they do.',
    ],
    keyTerms: [
      {
        term: 'Marketing (this course’s view)',
        definition:
          'The discipline that links customer needs and choices to profitable financial outcomes — not advertising alone.',
      },
    ],
  },
  {
    id: 'mkt-c1-profitability',
    title: 'Marketing as a profitability discipline',
    bullets: [
      'Marketing is the system that: (1) identifies customer needs, (2) designs solutions to meet those needs, and (3) captures value through pricing and delivery.',
      'Includes needs customers may not articulate — then designing offerings that serve them profitably.',
      'At its core, marketing links customers to financial outcomes.',
    ],
  },
  {
    id: 'mkt-c1-perceived-value',
    title: 'Created value ≠ perceived value',
    bullets: [
      'Puzzling pattern: strong technical expertise + talented people + competitive offerings can still yield weak or inconsistent profitability.',
      'Competence alone does not guarantee success — something is missing.',
      'Firms create value; customers perceive value; markets reward perceived value.',
      'Value only matters when customers recognize it. Many firms create value well but translate it poorly into customer decisions and revenue.',
      'Illustration: a premium product can command higher price and much higher share than a cheaper rival when customers perceive more value (not when the firm merely claims it).',
    ],
    keyTerms: [
      {
        term: 'Perceived value',
        definition:
          'The value customers believe they get — what drives choice and what markets reward — distinct from the value a firm believes it created.',
      },
    ],
  },
  {
    id: 'mkt-c1-translation',
    title: 'Marketing as a translation function',
    bullets: [
      'Marketing translates: capabilities → solutions → value → willingness to pay.',
      'That chain connects what the firm can do to what customers will choose and pay for.',
      'Translation cannot be separated from corporate strategy, pricing, or delivery. If the chain breaks, profitability suffers.',
    ],
    keyTerms: [
      {
        term: 'Willingness to pay (WTP)',
        definition:
          'What customers are prepared to pay once they see value — the end of the capabilities → solutions → value translation.',
      },
    ],
  },
  {
    id: 'mkt-c1-core-question',
    title: 'The core marketing question',
    bullets: [
      'Why should a customer choose us — over alternatives, at this price, in this context, right now?',
      'If leadership cannot answer it clearly, the organization struggles no matter how strong the product or team.',
      'Customers use a mental equation: perceived value ≈ benefits − costs.',
      'Benefits are rarely only functional — also emotional benefits, convenience, identity signaling, and risk reduction.',
      'Great marketing strategy increases benefits while reducing perceived costs.',
    ],
    keyTerms: [
      {
        term: 'Perceived value equation',
        definition:
          'Perceived value ≈ benefits − costs, where benefits include functional, emotional, convenience, identity, and risk-reduction elements.',
      },
    ],
  },
  {
    id: 'mkt-c1-4ps',
    title: 'The marketing mix (4 Ps)',
    bullets: [
      'Four managerial levers that influence customer choice — treat as integrated decisions, not independent tactics.',
      'Product: the solution — a believable promise.',
      'Price: economic outcomes; price doesn’t only extract value — it also communicates value.',
      'Place: access and delivery; reducing friction is often a hidden growth lever.',
      'Promotion: communication and credibility — about trust, not just awareness.',
    ],
    keyTerms: [
      {
        term: 'Marketing mix (4 Ps)',
        definition:
          'Product, Price, Place, and Promotion — the integrated levers firms use to shape customer choice.',
      },
    ],
  },
  {
    id: 'mkt-c1-clv',
    title: 'Customer lifetime value (CLV)',
    bullets: [
      'CLV estimates the total economic value of a customer relationship over time — not a single transaction.',
      'Firms make bad decisions when they optimize short-term profit instead of long-term relationship value.',
      'CLV logic justifies: spending more to acquire the right customer, investing in retention, and designing loyalty programs — when evaluated over the lifetime, not just the first sale.',
    ],
    keyTerms: [
      {
        term: 'Customer lifetime value (CLV)',
        definition:
          'Estimate of the total economic value of a customer relationship over time, used to guide acquisition, retention, and loyalty decisions.',
      },
    ],
  },
  {
    id: 'mkt-c1-starbucks',
    title: 'Case lens: Starbucks vs gas-station coffee',
    bullets: [
      'Same basic product (brewed coffee) but very different prices: Starbucks ~$3–$5 vs gas station ~$1–$1.50 — yet many customers still choose Starbucks.',
      'Core question: Why pay 2–4× more for what appears to be the same product?',
      'Starbucks: premium “third place” experience (between home and work); advantages include perceived quality, customization, environment, brand/identity signaling, and consistency; disadvantages include higher price, wait times, over-branding perceptions, and uneven accessibility.',
      'Starbucks 4 Ps: specialty/customizable product; comfortable place (Wi-Fi, seating); premium price; strong brand/lifestyle promotion.',
      'Gas station: advantages are price, convenience (routes, hours), speed, and “adequate quality for the job” (caffeine/warmth); disadvantages are lower perceived quality, little customization, weak brand, limited environment, inconsistency.',
      'Gas station 4 Ps: simple brewed product; highly convenient place; low price; minimal/functional promotion.',
      'Lesson: perceived value and job-to-be-done differ — coherent 4P alignment can support a premium or a convenience strategy.',
    ],
    keyTerms: [
      {
        term: 'Third place',
        definition:
          'Starbucks positioning: a space between home and work where customers relax, socialize, or work — experience beyond the beverage.',
      },
    ],
  },
  {
    id: 'mkt-c1-wrap',
    title: 'Big picture for leaders',
    bullets: [
      'Marketing strategy coherence: choose customers deliberately → design solutions around needs → align the 4 Ps → capture value profitably.',
      'When decisions reinforce each other, profitability follows.',
      'Why marketing belongs beyond “the marketing function”: shapes growth strategy, aligns cross-functional teams, improves capital allocation, reduces execution risk.',
      'Semester skills: understand customers differently, design profitable offerings, price for value, make better go-to-market decisions — customer-driven decision fluency, not becoming a marketer.',
      'Carry-forward question: Why should a customer choose us — over all alternatives — at this price?',
    ],
  },
  {
    id: 'mkt-c2-five-aspects',
    title: 'Five core aspects of marketing (Ch. 1)',
    bullets: [
      'Marketing entails an exchange — a trade of value between buyer and seller so each is better off.',
      'Marketing satisfies customer needs and wants (not just stated needs).',
      'Marketing affects many stakeholders — not only end customers.',
      'Marketing can be performed by individuals and organizations (B2B, B2C, C2C).',
      'Marketing creates value through integrated Product, Price, Place, and Promotion decisions.',
    ],
    keyTerms: [
      {
        term: 'Five core aspects of marketing',
        definition:
          'Exchange; satisfying needs/wants; stakeholder impact; individuals and organizations; value creation via the 4 Ps.',
      },
    ],
  },
  {
    id: 'mkt-c2-exchange',
    title: 'Exchange: goods, services, and ideas',
    bullets: [
      'Exchange requires something to trade (goods, services, or ideas), a buyer–seller relationship, and usually money — routed through a supply chain.',
      'Goods: physical items (e.g., Tide vs store-brand detergent — differentiation via compelling features and benefits in the customer’s mind).',
      'Services: intangible benefits from people or machines; brands differentiate on how they deliver the service. Customers cannot inspect a service before buying — trust and delivery quality matter more.',
      'Ideas: thoughts, opinions, philosophies — intellectual concepts can be marketed (packaged slogans, symbols, and narratives that make a worldview recognizable).',
      'New product ideas often start by uncovering everyday consumer needs — what people wish they had for home, work, cars, computers, etc.',
    ],
    keyTerms: [
      {
        term: 'Exchange (marketing)',
        definition:
          'Trade of things of value between buyer and seller so that each party is better off — via goods, services, or ideas, usually involving money and a route-to-market.',
      },
    ],
  },
  {
    id: 'mkt-c2-insights',
    title: 'From consumer need to marketing insight',
    bullets: [
      'Marketers generate product ideas by uncovering needs — including emotional needs customers may not articulate directly.',
      'Pillsbury example: foundational insight — mothers want to make their children happy.',
      'Strategy lever: position baking products not just as food but as a simple way for busy moms to create memorable, happy family moments.',
      'Tactics from the insight: emphasize shared kitchen moments; Doughboy as “Mommy’s Secret Helper”; appeal to moms’ generous spirit.',
    ],
    keyTerms: [
      {
        term: 'Marketing insight',
        definition:
          'A deep, actionable truth about what customers need or want emotionally/functionally — the foundation for positioning and the marketing mix.',
      },
    ],
  },
  {
    id: 'mkt-c2-context',
    title: 'Who markets, and who is affected',
    bullets: [
      'Marketing contexts: B2B (business-to-business), B2C (business-to-consumer), and C2C (consumer-to-consumer).',
      'Stakeholders beyond customers: supply-chain partners, employees, and society at large.',
      'Example tension: data centers deliver essential digital services but strain local energy and physical resources — sparking debate among communities, businesses, and governments.',
    ],
    keyTerms: [
      {
        term: 'B2B / B2C / C2C',
        definition:
          'Business-to-business, business-to-consumer, and consumer-to-consumer marketing contexts.',
      },
    ],
  },
  {
    id: 'mkt-c2-value-bcr',
    title: 'Value creation and cost–benefit analysis',
    bullets: [
      'The 4 Ps are the controllable decisions a firm uses to respond to its target market’s wants — each P influences value creation.',
      'Value reflects the relationship of benefits to costs (same logic as perceived value ≈ benefits − costs).',
      'Cost–benefit analysis (CBA): compare total benefits of an exchange against total costs to judge net value and viability.',
      'Benefit–cost ratio (BCR) = present value of benefits ÷ present value of costs.',
      'BCR > 1 → exchange likely adds net value (smart move). BCR = 1 → no net gain. BCR < 1 → costs exceed benefits (reject).',
    ],
    keyTerms: [
      {
        term: 'Benefit–cost ratio (BCR)',
        definition:
          'Present value of benefits divided by present value of costs; BCR > 1 favors the exchange, BCR < 1 favors rejection.',
      },
      {
        term: 'Cost–benefit analysis (CBA)',
        definition:
          'Method comparing total benefits of an exchange to its total costs to determine net value and viability.',
      },
    ],
  },
  {
    id: 'mkt-c2-apple',
    title: 'Case lens: Apple’s 4 Ps as an ecosystem',
    bullets: [
      'Product: streamlined premium hardware (iPhone, Mac, iPad, Watch, AirPods, TV); ecosystem integration (iOS, iCloud, Music) locks users in; design, minimalism, and innovation over SKU breadth.',
      'Price: premium pricing reinforces luxury/high-end image; price skimming on flagships; rare broad discounts (mostly education) to protect brand equity.',
      'Place: experiential Apple Stores in high-traffic locations; direct online sales; authorized resellers, carriers, wholesalers, and electronics retailers.',
      'Promotion: lifestyle/emotional storytelling (privacy, creativity, human connection); global keynotes for earned media; #ShotOniPhone UGC showcases real users.',
      'Lesson: the 4 Ps reinforce one premium ecosystem — each P signals and delivers value consistently.',
    ],
  },
  {
    id: 'mkt-c2-evolution',
    title: 'Evolution of marketing eras',
    bullets: [
      'Production-oriented era (~turn of 20th century): belief that a good product sells itself.',
      'Sales-oriented era: production and distribution sophistication led to supply exceeding demand — firms answered overproduction by pushing sales.',
      'Market-oriented era: focus shifted to what customers wanted; firms discovered marketing communication.',
      'Value-based era: market orientation plus delivering greater value than competitors; value = benefits/costs; relational orientation and CRM (customer relationship management) become central.',
      'Today (augmented / value marketing): digital, mobile, internet, robotics, AI, and other tech augment value; creativity is a key delivery method for the value proposition.',
    ],
    keyTerms: [
      {
        term: 'Value-based marketing',
        definition:
          'Implementing strategy according to what customers value — understanding value drives exchange, with relational CRM as a success lever.',
      },
      {
        term: 'CRM (customer relationship management)',
        definition:
          'Systems and practices for building and managing customer relationships — emphasized in the value-based marketing era.',
      },
    ],
  },
  {
    id: 'mkt-c2-value-metrics',
    title: 'Measuring value creation',
    bullets: [
      'Analytics systems track whether a firm, project, or investment generates returns above cost — combining monetary metrics, market signals, and operational indicators.',
      'Discounted cash flow (DCF): present value of projected future cash flows from an asset or business unit.',
      'Customer value metrics: NPS, retention, customer lifetime value (LTV/CLV) — link experience to financial returns.',
      'Operational KPIs: cycle time, utilization, digital self-service rates — efficiency drivers that feed financial outcomes.',
      'EVA (economic value added): net operating profit after tax minus investor cost of capital (WACC) — true economic profit.',
      'TSR (total shareholder return): stock appreciation plus reinvested dividends over a period.',
      'MVC (market value creation): firm market value vs broader benchmarks — isolates management “alpha.”',
    ],
    keyTerms: [
      {
        term: 'EVA (economic value added)',
        definition:
          'Net operating profit after tax minus the cost of capital (WACC) — measures true economic profit.',
      },
      {
        term: 'DCF (discounted cash flow)',
        definition:
          'Estimates present value of all projected future cash flows from an asset or business unit.',
      },
    ],
  },
  {
    id: 'mkt-c2-warby',
    title: 'Case lens: Warby Parker — insight to mixed reality',
    bullets: [
      'Central insight: traditional eyewear was an outdated monopoly with excessive markups; vertical integration + DTC could deliver a superior experience at a revolutionary price.',
      'Value proposition: affordable, high-quality, stylish eyewear via convenient DTC with at-home try-on.',
      'Product: fashionable prescription eyewear and sunglasses at accessible prices.',
      'Price: transparent mid-range pricing — no hidden costs; easy to understand total cost.',
      'Place: primarily own e-commerce and mobile app — direct control of customer experience.',
      'Promotion: content marketing, UGC (#WarbyHomeTryOn), Instagram community, targeted digital ads, micro-influencers, referral/word-of-mouth programs.',
      'Business reality (2020 IPO): ~$572M venture capital, ~$3B valuation, ~$394M revenue, ~−$56M net loss — stakeholders demanded growth while online eyeglass sales were only ~8% of the market.',
      'Strategic pivot: opened physical retail “the Warby Parker way” to scale — raises exam-style questions: Is the product differentiated enough? Is value sufficient? Can DTC brands survive retail expansion? (Casper Sleep parallel: DTC mattress IPO, shares fell ~50% post-IPO).',
    ],
    keyTerms: [
      {
        term: 'DTC (direct-to-consumer)',
        definition:
          'Selling directly via owned channels (web/app) rather than traditional wholesale — Warby Parker’s initial route-to-market.',
      },
      {
        term: 'Vertical integration (Warby Parker)',
        definition:
          'Owning more of the value chain (design, distribution) to cut middleman markups and control experience and price.',
      },
    ],
  },
]

export const marketingFlashcards: Flashcard[] = [
  {
    id: 'fc-mkt-1',
    topic: 'Course framing',
    front: 'What is M370 primarily about, if not advertising/branding?',
    back: 'Making better business decisions by understanding customers more deeply than competitors — linking customer choice to profitable growth.',
  },
  {
    id: 'fc-mkt-2',
    topic: 'Course framing',
    front: 'State the fundamental question opening Lecture 1.',
    back: 'Why do technically strong firms with great people still struggle to grow profitably?',
  },
  {
    id: 'fc-mkt-3',
    topic: 'Profitability',
    front: 'Name the three parts of marketing as a profitability system.',
    back: 'Identify customer needs; design solutions to meet those needs; capture value through pricing and delivery.',
  },
  {
    id: 'fc-mkt-4',
    topic: 'Perceived value',
    front: 'Firms create value, customers ____ value, and markets reward ____ value.',
    back: 'Perceive; perceived. Markets reward what customers recognize — not what firms think they created.',
  },
  {
    id: 'fc-mkt-5',
    topic: 'Perceived value',
    front: 'Why can competent firms still have weak profitability?',
    back: 'They may create value but fail to translate it into perceived value, customer choice, and revenue.',
  },
  {
    id: 'fc-mkt-6',
    topic: 'Translation',
    front: 'List the marketing translation chain from Lecture 1.',
    back: 'Capabilities → solutions → value → willingness to pay.',
  },
  {
    id: 'fc-mkt-7',
    topic: 'Core question',
    front: 'What is the core marketing question for the course?',
    back: 'Why should a customer choose us — over alternatives, at this price, in this context, right now?',
  },
  {
    id: 'fc-mkt-8',
    topic: 'Perceived value',
    front: 'Write the customer’s mental perceived-value equation and name non-functional benefit types.',
    back: 'Perceived value ≈ benefits − costs. Benefits also include emotional, convenience, identity signaling, and risk reduction.',
  },
  {
    id: 'fc-mkt-9',
    topic: 'Strategy',
    front: 'What does “great marketing strategy” do to benefits and costs?',
    back: 'Increases benefits while reducing perceived costs.',
  },
  {
    id: 'fc-mkt-10',
    topic: '4 Ps',
    front: 'Name the 4 Ps and one Lecture 1 insight for each.',
    back: 'Product = believable promise/solution. Price communicates as well as extracts value. Place = access/delivery; less friction can grow. Promotion = trust/credibility, not just awareness.',
  },
  {
    id: 'fc-mkt-11',
    topic: '4 Ps',
    front: 'How should the 4 Ps be treated managerially?',
    back: 'As integrated decisions that reinforce each other — not independent tactics.',
  },
  {
    id: 'fc-mkt-12',
    topic: 'CLV',
    front: 'What is customer lifetime value, and why does it change decisions?',
    back: 'Total economic value of a customer relationship over time. It justifies acquisition spend, retention, and loyalty when short-term transaction profit would say “no.”',
  },
  {
    id: 'fc-mkt-13',
    topic: 'Starbucks case',
    front: 'What marketing puzzle does Starbucks vs gas-station coffee pose?',
    back: 'Why willingly pay ~2–4× more for brewed coffee when a cheaper option is nearby?',
  },
  {
    id: 'fc-mkt-14',
    topic: 'Starbucks case',
    front: 'What is Starbucks’ “third place,” and how does it affect the offer?',
    back: 'A space between home and work for relax/socialize/work — so the product is a premium experience, not just coffee.',
  },
  {
    id: 'fc-mkt-15',
    topic: 'Starbucks case',
    front: 'Contrast Starbucks vs gas-station coffee on Place and Price.',
    back: 'Starbucks: comfortable seating/Wi-Fi environment + premium price. Gas station: commuting-route convenience/speed + low price.',
  },
  {
    id: 'fc-mkt-16',
    topic: 'Wrap-up',
    front: 'List the four coherence steps in the Lecture 1 wrap-up.',
    back: 'Choose customers deliberately; design solutions around needs; align the 4 Ps; capture value profitably.',
  },
  {
    id: 'fc-mkt-17',
    topic: 'Leadership',
    front: 'Name 3+ reasons marketing belongs in C-suite / leadership conversations.',
    back: 'Shapes growth strategy; aligns cross-functional teams; improves capital allocation; reduces execution risk.',
  },
  {
    id: 'fc-mkt-18',
    topic: 'Core question',
    front: 'Closing carry-forward question from Lecture 1?',
    back: 'Why should a customer choose us — over all alternatives — at this price?',
  },
  {
    id: 'fc-mkt-19',
    topic: 'Five aspects',
    front: 'List the five core aspects of marketing from Ch. 1.',
    back: 'Exchange; satisfying needs/wants; affects stakeholders; individuals and organizations; creates value via the 4 Ps.',
  },
  {
    id: 'fc-mkt-20',
    topic: 'Exchange',
    front: 'Define marketing exchange and name three things that can be exchanged.',
    back: 'Trade of value between buyer and seller so each is better off. Can exchange goods, services, or ideas (usually via money and a supply chain).',
  },
  {
    id: 'fc-mkt-21',
    topic: 'Goods vs services',
    front: 'How do service brands differentiate vs goods brands, pre-purchase?',
    back: 'Services are intangible — customers can’t inspect before buying. Service brands differentiate on how they deliver and build trust; goods brands often differentiate on tangible features/benefits in the customer’s mind.',
  },
  {
    id: 'fc-mkt-22',
    topic: 'Insights',
    front: 'What was Pillsbury’s foundational marketing insight, and how was it used?',
    back: 'Mothers want to make their children happy → position baking products as a simple way to create memorable family moments (shared kitchen time, Doughboy as “Secret Helper,” generosity).',
  },
  {
    id: 'fc-mkt-23',
    topic: 'Context',
    front: 'Name the three marketing contexts (B___, B___, C___) and one stakeholder group beyond customers.',
    back: 'B2B, B2C, C2C. Other stakeholders: supply-chain partners, employees, society at large.',
  },
  {
    id: 'fc-mkt-24',
    topic: 'Value / BCR',
    front: 'Write the BCR formula and interpret BCR > 1, = 1, and < 1.',
    back: 'BCR = PV of benefits ÷ PV of costs. > 1 = net value likely (smart); = 1 = no net gain; < 1 = reject (costs exceed benefits).',
  },
  {
    id: 'fc-mkt-25',
    topic: '4 Ps (Ch. 1)',
    front: 'How does Ch. 1 define the marketing mix relative to target markets?',
    back: 'The controllable set of decisions/activities the firm uses to respond to target-market wants — each P plays a role in value creation.',
  },
  {
    id: 'fc-mkt-26',
    topic: 'Apple case',
    front: 'Name two Apple Price tactics and what they signal.',
    back: 'Premium pricing and price skimming on flagships signal luxury/elite quality; rare broad discounts protect brand equity (education discounts are the main exception).',
  },
  {
    id: 'fc-mkt-27',
    topic: 'Apple case',
    front: 'How does Apple use Place and Promotion to reinforce its ecosystem?',
    back: 'Place: experiential Apple Stores + direct online + selective third-party channels. Promotion: emotional lifestyle storytelling, global keynotes, #ShotOniPhone UGC.',
  },
  {
    id: 'fc-mkt-28',
    topic: 'Evolution',
    front: 'Order the four historical marketing eras and the trigger for the sales-oriented shift.',
    back: 'Production → Sales → Market-oriented → Value-based. Sales era: supply outpaced demand (overproduction) so firms pushed sales.',
  },
  {
    id: 'fc-mkt-29',
    topic: 'Evolution',
    front: 'What distinguishes value-based marketing from market-oriented marketing?',
    back: 'Value-based keeps customer focus but adds delivering greater value than competitors (benefits/costs), relational orientation, and CRM.',
  },
  {
    id: 'fc-mkt-30',
    topic: 'Value metrics',
    front: 'Match: DCF, EVA, NPS/LTV — what does each measure?',
    back: 'DCF = PV of future cash flows. EVA = economic profit after subtracting cost of capital (WACC). NPS/LTV/retention = customer experience linked to financial returns.',
  },
  {
    id: 'fc-mkt-31',
    topic: 'Warby Parker',
    front: 'What was Warby Parker’s central market insight?',
    back: 'Traditional eyewear was a monopoly with excessive markups; vertical integration + DTC could offer a superior experience at a revolutionary transparent price.',
  },
  {
    id: 'fc-mkt-32',
    topic: 'Warby Parker',
    front: 'Summarize Warby Parker’s initial 4 Ps in one line each.',
    back: 'Product: stylish affordable Rx/sunglasses. Price: transparent mid-range, no hidden fees. Place: owned e-commerce/app (DTC). Promotion: content, UGC (#WarbyHomeTryOn), social, influencers, referrals.',
  },
  {
    id: 'fc-mkt-33',
    topic: 'Warby Parker',
    front: 'Why did Warby Parker open physical stores despite starting DTC?',
    back: 'Stakeholders demanded growth; online was only ~8% of eyewear market; needed scale. Opens strategic questions about differentiation, value, and DTC→retail risk (Casper parallel).',
  },
]

export const marketingQuizzes: Quiz[] = [
  {
    id: 'quiz-mkt-c1-concepts',
    title: 'Lecture 1 — Marketing concepts',
    description:
      'Perceived value, translation, the core question, 4 Ps, and CLV from Class Introduction.',
    questions: [
      {
        id: 'mq1',
        prompt:
          'According to Lecture 1, M370 is best described as a course about:',
        choices: [
          'Becoming an advertising specialist',
          'Making better business decisions by understanding customers more deeply than competitors',
          'Memorizing brand slogans',
          'Only social-media tactics',
        ],
        correctIndex: 1,
        explanation:
          'The framing is explicit: not advertising/branding as an end — customer-driven business decisions.',
      },
      {
        id: 'mq2',
        prompt:
          'A firm has strong technical expertise, talented people, and competitive offerings, yet weak profitability. Lecture 1’s diagnosis centers on:',
        choices: [
          'Markets only reward R&D patents',
          'Created value is not the same as perceived value — customers may not recognize or choose the firm’s value',
          'All profitability problems are accounting errors',
          'Firms should never charge premium prices',
        ],
        correctIndex: 1,
        explanation:
          'Firms create value; customers perceive value; markets reward perceived value. Translation failures hurt revenue.',
      },
      {
        id: 'mq3',
        prompt: 'Marketing as a translation function moves through which sequence?',
        choices: [
          'Price → Place → Product → Promotion',
          'Capabilities → solutions → value → willingness to pay',
          'Awareness → clicks → impressions → likes',
          'Cost → markup → invoice → collection',
        ],
        correctIndex: 1,
        explanation:
          'Lecture chain: capabilities → solutions → value → WTP. Breaks in that chain hurt profitability.',
      },
      {
        id: 'mq4',
        prompt: 'The core marketing question emphasized in class is closest to:',
        choices: [
          'How do we maximize awareness spend this quarter?',
          'Why should a customer choose us over alternatives at this price, in this context, right now?',
          'Which competitor has the largest headcount?',
          'How do we copy the industry’s average price?',
        ],
        correctIndex: 1,
        explanation:
          'Choice over alternatives, at a price, in context, now — the course’s central question.',
      },
      {
        id: 'mq5',
        prompt:
          'In the perceived-value mental equation, which statement is true?',
        choices: [
          'Only functional product specs count as benefits',
          'Perceived value ≈ benefits − costs, and benefits can include emotional, convenience, identity, and risk reduction',
          'Costs never include time or effort',
          'Firms, not customers, decide perceived value',
        ],
        correctIndex: 1,
        explanation:
          'Benefits are broader than function; customers decide perceived value via benefits minus costs.',
      },
      {
        id: 'mq6',
        prompt: 'Which Lecture 1 statement about Price is correct?',
        choices: [
          'Price only extracts value; it never signals anything',
          'Price extracts value and also communicates value',
          'Price is irrelevant if Product is strong',
          'Lower price always maximizes perceived value',
        ],
        correctIndex: 1,
        explanation:
          'Price is both an economic lever and a value signal.',
      },
      {
        id: 'mq7',
        prompt: 'Customer lifetime value (CLV) is most useful because it:',
        choices: [
          'Ignores retention and loyalty entirely',
          'Focuses only on the first transaction’s margin',
          'Estimates relationship value over time, supporting smarter acquisition, retention, and loyalty investments',
          'Replaces the need for the 4 Ps',
        ],
        correctIndex: 2,
        explanation:
          'CLV shifts decisions from short-term sale profit to lifetime relationship economics.',
      },
      {
        id: 'mq8',
        prompt:
          'Starbucks vs gas-station coffee illustrates that customers may pay much more when:',
        choices: [
          'The molecules in the coffee are chemically unique to Starbucks by law',
          'Perceived benefits (experience, customization, brand, consistency) outweigh higher perceived costs for that customer’s “job”',
          'Gas stations never sell coffee',
          'Promotion is banned for convenience stores',
        ],
        correctIndex: 1,
        explanation:
          'Same category product, different perceived value and 4P alignment — not a legal uniqueness claim.',
      },
    ],
  },
  {
    id: 'quiz-mkt-c1-application',
    title: 'Lecture 1 — Apply the 4 Ps & coherence',
    description:
      'Starbucks/gas-station contrast and the choose–design–align–capture wrap-up.',
    questions: [
      {
        id: 'mq9',
        prompt:
          'Starbucks’ “third place” positioning primarily strengthens which P, and how?',
        choices: [
          'Price only — by always matching gas-station prices',
          'Place/experience — seating, atmosphere, and a space between home and work, supporting premium Product/Price',
          'Promotion only — with no store environment changes',
          'Place by removing all seating so customers leave faster',
        ],
        correctIndex: 1,
        explanation:
          'Third place is an experiential Place (and Product) story that supports premium pricing.',
      },
      {
        id: 'mq10',
        prompt:
          'A gas-station coffee strategy that wins on commuting routes, speed, and low price is best described as:',
        choices: [
          'Failed marketing because the brand is weak',
          'A coherent low-friction convenience play where Place and Price fit a simpler Product and light Promotion',
          'Identical to Starbucks’ strategy with different logos',
          'Impossible because coffee must always be premium',
        ],
        correctIndex: 1,
        explanation:
          'Lecture contrast: different jobs and 4P alignments can both be intentional strategies.',
      },
      {
        id: 'mq11',
        prompt: '“Reducing friction” in Lecture 1 is highlighted mainly under:',
        choices: [
          'Promotion as awareness only',
          'Place (access and delivery) as a hidden growth lever',
          'Ignoring customer costs',
          'Raising price without changing access',
        ],
        correctIndex: 1,
        explanation:
          'Place = access/delivery; cutting friction can unlock growth.',
      },
      {
        id: 'mq12',
        prompt:
          'Which sequence matches the Lecture 1 “big picture” coherence checklist?',
        choices: [
          'Maximize ads → cut price → expand SKUs → hope',
          'Choose customers deliberately → design solutions around needs → align the 4 Ps → capture value profitably',
          'Build capabilities → skip customers → set price last → promote',
          'Copy competitors’ 4 Ps exactly → measure headcount',
        ],
        correctIndex: 1,
        explanation:
          'Wrap-up: deliberate customers, needs-based solutions, aligned mix, profitable capture.',
      },
      {
        id: 'mq13',
        prompt:
          'Promotion in this lecture is framed primarily as about:',
        choices: [
          'Trust and credibility, not awareness alone',
          'Buying the maximum number of impressions regardless of message',
          'Replacing Product quality',
          'Setting manufacturing cost',
        ],
        correctIndex: 0,
        explanation:
          'Promotion = communication and credibility / trust — not just awareness.',
      },
      {
        id: 'mq14',
        prompt:
          'Why does Lecture 1 argue marketing belongs in leadership / C-suite conversations?',
        choices: [
          'Only marketers can approve expense reports',
          'It shapes growth strategy, aligns teams, improves capital allocation, and reduces execution risk',
          'Finance never looks at customers',
          'Operations cannot use the 4 Ps',
        ],
        correctIndex: 1,
        explanation:
          'Marketing is framed as a profitability and growth discipline beyond a siloed function.',
      },
    ],
  },
  {
    id: 'quiz-mkt-c2-concepts',
    title: 'Lecture 2 — Ch. 1 core concepts',
    description:
      'Five aspects of marketing, exchange, insights, stakeholders, BCR, and marketing evolution.',
    questions: [
      {
        id: 'mq15',
        prompt:
          'Which is NOT one of the five core aspects of marketing from Ch. 1?',
        choices: [
          'Marketing entails an exchange',
          'Marketing satisfies customer needs and wants',
          'Marketing is only about manufacturing efficiency',
          'Marketing creates value through the 4 Ps',
        ],
        correctIndex: 2,
        explanation:
          'The five aspects center on exchange, needs, stakeholders, who can market, and 4P value creation — not factory efficiency alone.',
      },
      {
        id: 'mq16',
        prompt: 'Marketing exchange is best defined as:',
        choices: [
          'A one-sided transfer where only the seller gains',
          'A trade of things of value between buyer and seller so each is better off',
          'Only the physical movement of goods in a warehouse',
          'Government regulation of prices',
        ],
        correctIndex: 1,
        explanation:
          'Exchange requires value traded (goods, services, or ideas), a buyer–seller relationship, and usually money via a route-to-market.',
      },
      {
        id: 'mq17',
        prompt:
          'Why is trust especially critical for service brands compared to many goods?',
        choices: [
          'Services are always cheaper than goods',
          'Customers cannot see or touch a service before buying — differentiation depends on delivery and trust',
          'Services cannot use promotion',
          'Goods never require differentiation',
        ],
        correctIndex: 1,
        explanation:
          'Intangible services must build trust and stand out on how they are delivered, not on physical inspection.',
      },
      {
        id: 'mq18',
        prompt: 'Pillsbury’s foundational insight was that:',
        choices: [
          'Mothers want the lowest possible price on flour',
          'Mothers want to make their children happy — baking can create memorable family moments',
          'Children prefer store-brand dough',
          'Baking products should never be advertised',
        ],
        correctIndex: 1,
        explanation:
          'The emotional insight drives positioning beyond “food” to shared moments, the Doughboy helper, and generosity.',
      },
      {
        id: 'mq19',
        prompt: 'A BCR (benefit–cost ratio) of 0.8 implies:',
        choices: [
          'The exchange likely adds net value — proceed',
          'Costs exceed benefits — reject the exchange',
          'Benefits exactly equal costs',
          'BCR is unrelated to exchange decisions',
        ],
        correctIndex: 1,
        explanation:
          'BCR = PV benefits ÷ PV costs. BCR < 1 means costs outweigh benefits.',
      },
      {
        id: 'mq20',
        prompt:
          'The sales-oriented era emerged primarily because:',
        choices: [
          'Customers had too few choices and demanded more ads',
          'Supply outpaced demand — firms focused on selling to address overproduction',
          'The internet eliminated all physical goods',
          'Value-based marketing had not yet been invented in the 1800s',
        ],
        correctIndex: 1,
        explanation:
          'As production/distribution grew sophisticated, overproduction pushed firms toward a sales focus.',
      },
      {
        id: 'mq21',
        prompt:
          'Value-based marketing adds which emphasis beyond market orientation?',
        choices: [
          'Ignoring customer wants entirely',
          'Delivering greater value than competitors, relational CRM, and value = benefits/costs',
          'Only cutting price regardless of benefits',
          'Eliminating all stakeholder concerns',
        ],
        correctIndex: 1,
        explanation:
          'Value-based era: beat competitors on value, build relationships via CRM, and implement what customers value.',
      },
      {
        id: 'mq22',
        prompt: 'EVA (economic value added) measures:',
        choices: [
          'Only social-media impressions',
          'True economic profit: NOPAT minus the investor’s cost of capital (WACC)',
          'The number of SKUs in a product line',
          'Gross margin before any costs',
        ],
        correctIndex: 1,
        explanation:
          'EVA subtracts cost of capital from net operating profit after tax to gauge real economic profit.',
      },
    ],
  },
  {
    id: 'quiz-mkt-c2-cases',
    title: 'Lecture 2 — Apple & Warby Parker application',
    description:
      'Apply the 4 Ps, DTC strategy, and growth tensions from the chapter cases.',
    questions: [
      {
        id: 'mq23',
        prompt:
          'Apple’s premium pricing and rare broad discounts primarily serve to:',
        choices: [
          'Match gas-station coffee prices',
          'Reinforce luxury/high-end brand image and protect brand equity',
          'Eliminate all third-party distribution',
          'Signal that Apple products are low quality',
        ],
        correctIndex: 1,
        explanation:
          'Premium pricing and price skimming signal elite quality; avoiding broad discounting protects equity.',
      },
      {
        id: 'mq24',
        prompt:
          'Which Apple Promotion tactic turns customers into marketers?',
        choices: [
          'Mandatory technical-spec-only ads',
          'User-generated campaigns like #ShotOniPhone showcasing real photos',
          'Banning all social media',
          'Only in-store flyers with no digital presence',
        ],
        correctIndex: 1,
        explanation:
          'UGC lets real users demonstrate product capability — promotion beyond spec sheets.',
      },
      {
        id: 'mq25',
        prompt: 'Warby Parker’s central market insight targeted:',
        choices: [
          'That eyewear should only be sold in malls',
          'An outdated monopoly with excessive markups — DTC + vertical integration could disrupt price and experience',
          'That all glasses must be luxury-priced',
          'That online sales already dominated (>90%) of eyewear',
        ],
        correctIndex: 1,
        explanation:
          'They saw markups and a poor customer experience in traditional channels — DTC could fix both.',
      },
      {
        id: 'mq26',
        prompt:
          'Warby Parker’s initial Place strategy emphasized:',
        choices: [
          'Exclusive wholesale to traditional optical monopolies only',
          'Owned e-commerce and mobile app — direct control of the customer experience',
          'Only pop-up tents with no digital channel',
          'Random third-party sellers with no brand control',
        ],
        correctIndex: 1,
        explanation:
          'DTC via owned web/app was the core route-to-market before retail expansion.',
      },
      {
        id: 'mq27',
        prompt:
          'After IPO, a key tension driving Warby Parker toward physical stores was:',
        choices: [
          'Online eyeglass sales were already 90%+ of the market',
          'Stakeholders demanded growth while online was only ~8% of the market — scale required broader reach',
          'Retail stores always guarantee immediate profitability',
          'Venture capital forbade any physical presence',
        ],
        correctIndex: 1,
        explanation:
          'Low online penetration + growth pressure pushed the “Warby Parker way” retail expansion — with strategic risk.',
      },
      {
        id: 'mq28',
        prompt:
          'The Casper Sleep parallel in Lecture 2 illustrates:',
        choices: [
          'Every DTC brand succeeds after IPO',
          'DTC brands expanding to retail/IPO can face severe market skepticism — strategic questions about value and differentiation remain',
          'Mattresses and eyeglasses have identical supply chains',
          'Retail expansion always doubles share price',
        ],
        correctIndex: 1,
        explanation:
          'Casper’s post-IPO share drop is a cautionary lens for Warby’s retail/growth bet — not a guarantee of failure or success.',
      },
      {
        id: 'mq29',
        prompt:
          'Which Warby Parker Promotion tactic builds authenticity and trust?',
        choices: [
          'Hiding all customer photos',
          'UGC and hashtags like #WarbyHomeTryOn plus micro-influencer collaborations',
          'Only celebrity endorsements with no customer voice',
          'Eliminating referral programs',
        ],
        correctIndex: 1,
        explanation:
          'UGC, social community, influencers, and referrals humanize the brand and leverage word-of-mouth.',
      },
      {
        id: 'mq30',
        prompt:
          'Apple’s ecosystem integration (iOS, iCloud, Music across devices) primarily strengthens which P?',
        choices: [
          'Price only — by lowering all device prices',
          'Product — hardware/software lock-in that increases switching costs and perceived value',
          'Place only — by removing Apple Stores',
          'Promotion only — with no product changes',
        ],
        correctIndex: 1,
        explanation:
          'Seamless cross-device software/services deepen the Product value proposition and reinforce the premium ecosystem.',
      },
    ],
  },
]
