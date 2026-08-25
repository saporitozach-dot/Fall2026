import type { Flashcard, NoteSection, Quiz } from './types'

/** I-Core Marketing (M370) — Lecture #1 Class Introduction */
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
]
