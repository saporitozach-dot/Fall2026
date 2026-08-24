import type { Flashcard, NoteSection, Quiz } from './types'

/** I-Core Operations — Week 1 Session 1 (Ch. 1: OSCM in a strategic context) */
export const operationsNotes: NoteSection[] = [
  {
    id: 'ops-c1-fit',
    title: 'Promise → operating model (and supply chain)',
    bullets: [
      'Strategy sets the goal. Operations & supply chain management is how firms achieve it.',
      'Different customer promises require different operating models and different supply chains — a choice that is right for one firm can be wrong for its rival.',
      'Southwest promise: friendly, reliable, low-cost travel. Model: one 737 family, point-to-point, single cabin, high utilization; ~44-minute gate turns; one pilot pool / parts / training pipeline — deleted complexity funds the low fare.',
      'Delta promise: connect the world with a premium product. Model: many aircraft types, hub-and-spoke, multiple cabins, partnership revenue; slower turns on widebodies — network breadth and experience are the levers, not turn speed.',
      'H&M promise: fashion/quality at the best price → distant sourcing, large batches, orders months ahead; accept markdown risk to buy the lowest cost.',
      'Zara (Inditex) promise: inspiring newness / responsiveness → near production, small batches adapted to demand, frequent collections; higher unit cost, lower markdown risk; ~2× weekly new-product deliveries per store.',
    ],
    keyTerms: [
      {
        term: 'Operating model fit',
        definition:
          'Designing processes, assets, and supply choices so they deliver the firm’s specific customer promise better than a generic “best practice” copied from a rival.',
      },
    ],
  },
  {
    id: 'ops-c1-definitions',
    title: 'What OSCM is',
    bullets: [
      'Operations and Supply Chain Management (OSCM): design, operation, and improvement of the systems that create and deliver the firm’s primary products and services.',
      'Operations: manufacturing and service processes that transform resources into products/services.',
      'Supply chain management: processes that move information and material to and from the firm.',
      'Everything a business does, it does through processes — managing those processes is operations.',
    ],
    keyTerms: [
      {
        term: 'OSCM',
        definition:
          'Design, operation, and improvement of systems that create and deliver the firm’s primary products and services.',
      },
      {
        term: 'Operations',
        definition:
          'Manufacturing and service processes used to transform resources into products and services.',
      },
      {
        term: 'Supply chain management',
        definition:
          'Processes that move information and material to and from the firm.',
      },
    ],
  },
  {
    id: 'ops-c1-spa',
    title: 'Strategy → Processes → Analytics',
    bullets: [
      'Strategy: the plan to execute processes differently so offerings are more valuable/appealing than competitors’.',
      'Processes: building blocks that create and deliver products/services — inside the firm and across the supply chain.',
      'Analytics: using data for evidence-based operating decisions.',
      'Strategy = execute processes differently (distinctive value). Operational effectiveness = execute processes better (often lower cost / higher productivity).',
      'Firms are engineered for a purpose: deliver targeted value at competitive cost — like race cars, better design creates huge advantage.',
    ],
    keyTerms: [
      {
        term: 'Strategy (ops view)',
        definition:
          'Plan to run processes differently so products/services are more valuable or appealing than rivals’.',
      },
      {
        term: 'Operational effectiveness',
        definition:
          'Executing processes better — delivering value at lower cost / higher productivity (distinct from unique strategic positioning).',
      },
      {
        term: 'Analytics',
        definition: 'Use of data to make evidence-based operating decisions.',
      },
    ],
  },
  {
    id: 'ops-c1-goods-services',
    title: 'Goods vs services continuum',
    bullets: [
      'Goods tend to be tangible, measurable, more homogeneous once produced, inventory-able, and judged on physical specs; customer interaction is not always required during production.',
      'Services tend to be intangible, must be experienced, more heterogeneous (vary with customer perception), cannot be inventoried (consumed when produced), and are perceived as a package of design features.',
      'Product–service bundling: building service activities into product offerings (many “products” sit in the middle of the continuum).',
    ],
    keyTerms: [
      {
        term: 'Product–service bundling',
        definition:
          'Building service activities into a company’s product offerings for customers.',
      },
    ],
  },
  {
    id: 'ops-c1-eev',
    title: 'Efficiency, effectiveness, and value',
    bullets: [
      'Efficiency: actual output relative to a standard; doing something at the lowest possible cost — “do the thing right.”',
      'Effectiveness: doing the things that create the most value for the customer — “do the right thing.”',
      'Value: attractiveness of a product relative to its price — “delight your customer.”',
      'Common efficiency ratios: receivables turnover = annual credit sales / average accounts receivable; inventory turnover = COGS / average inventory; total asset turnover = revenue / total assets.',
    ],
    keyTerms: [
      {
        term: 'Efficiency',
        definition:
          'Output relative to a standard; operating at the lowest possible cost.',
      },
      {
        term: 'Effectiveness',
        definition: 'Doing the things that create the most value for the customer.',
      },
      {
        term: 'Value',
        definition: 'Attractiveness of a product relative to its price.',
      },
    ],
  },
  {
    id: 'ops-c1-context',
    title: 'Why OSCM matters (and what’s current)',
    bullets: [
      'Processes are building blocks of strategy — every function manages or depends on them (finance spend → goods/services; marketing promises need ops delivery; accounting records ops flows).',
      'Recurring challenge themes: raise productivity/efficiency; expand globally; align supply chain with strategy; use tech (AI, IoT, etc.) for cost/growth; understand regional cost differences.',
      'Current OSCM issues: supply-chain disruption, tariffs/regulation, workforce, technology/automation, and a more informed/powerful customer.',
      'OSCM career paths often cluster as Make (production), Move (supply chain), Serve (service ops), and Improve & Lead (process improvement → leadership).',
    ],
  },
]

export const operationsFlashcards: Flashcard[] = [
  {
    id: 'fc-ops-1',
    topic: 'Fit',
    front: 'What is the core Class 1 lesson from Southwest vs Delta (and H&M vs Zara)?',
    back: 'Different promises require different operating models / supply chains; a design that fits one firm can be wrong for its rival.',
  },
  {
    id: 'fc-ops-2',
    topic: 'Fit',
    front: 'Name 3+ Southwest operating choices that support low-cost, reliable travel.',
    back: 'Single 737 family; point-to-point; single cabin; high utilization; ~44-min turns; shared pilot/parts/training pools (deleted complexity).',
  },
  {
    id: 'fc-ops-3',
    topic: 'Fit',
    front: 'How does Delta’s model differ when the promise is network + premium connection?',
    back: 'Many aircraft types; hub-and-spoke; multiple cabins; slower widebody turns; premium/partnership revenue — breadth/experience over turn speed.',
  },
  {
    id: 'fc-ops-4',
    topic: 'Supply chain',
    front: 'H&M vs Zara: how do sourcing/batch choices match each promise?',
    back: 'H&M: distant, large batches, early forecasts → lowest cost, more markdown risk. Zara: near, small batches, rapid response → newness, lower markdown risk, higher unit cost.',
  },
  {
    id: 'fc-ops-5',
    topic: 'Definitions',
    front: 'Define Operations and Supply Chain Management (OSCM).',
    back: 'Design, operation, and improvement of the systems that create and deliver the firm’s primary products and services.',
  },
  {
    id: 'fc-ops-6',
    topic: 'Definitions',
    front: 'Operations vs supply chain management — what’s the distinction?',
    back: 'Operations = processes that transform resources into products/services. SCM = processes that move information and material to and from the firm.',
  },
  {
    id: 'fc-ops-7',
    topic: 'SPA',
    front: 'What are Strategy, Processes, and Analytics in the Ch. 1 framework?',
    back: 'Strategy = plan to execute processes differently for superior customer appeal. Processes = building blocks that create/deliver offerings. Analytics = data for evidence-based ops decisions.',
  },
  {
    id: 'fc-ops-8',
    topic: 'SPA',
    front: 'Strategy vs operational effectiveness — difference?',
    back: 'Strategy: execute processes differently (distinctive value/positioning). OE: execute processes better (often lower cost / higher productivity).',
  },
  {
    id: 'fc-ops-9',
    topic: 'Goods–services',
    front: 'List key contrasts on the goods–services continuum (tangibility, inventory, variability).',
    back: 'Goods: tangible, storable inventory, more homogeneous specs. Services: intangible/experienced, no inventory (consumed when produced), more heterogeneous with customer perception.',
  },
  {
    id: 'fc-ops-10',
    topic: 'Goods–services',
    front: 'What is product–service bundling?',
    back: 'Building service activities into product offerings for customers.',
  },
  {
    id: 'fc-ops-11',
    topic: 'EEV',
    front: 'Efficiency vs effectiveness vs value — one-line each.',
    back: 'Efficiency: do the thing right (lowest cost / vs standard). Effectiveness: do the right thing (max customer value). Value: attractiveness relative to price.',
  },
  {
    id: 'fc-ops-12',
    topic: 'EEV',
    front: 'Formulas: inventory turnover and total asset turnover?',
    back: 'Inventory turnover = COGS / average inventory. Total asset turnover = revenue (sales) / total assets.',
  },
  {
    id: 'fc-ops-13',
    topic: 'EEV',
    front: 'Receivable turnover formula?',
    back: 'Annual credit sales / average accounts receivable.',
  },
  {
    id: 'fc-ops-14',
    topic: 'Context',
    front: 'Name the five current issues in OSCM highlighted in Ch. 1.',
    back: 'Disruption; tariffs & regulation; workforce; technology; the (more informed/powerful) customer.',
  },
  {
    id: 'fc-ops-15',
    topic: 'Context',
    front: 'Four OSCM career directions from Class 1?',
    back: 'Make (production), Move (supply chain), Serve (service ops), Improve & Lead (process improvement / leadership path).',
  },
  {
    id: 'fc-ops-16',
    topic: 'Core idea',
    front: '“Everything a business does, it does through ___.” Finish and explain.',
    back: 'Processes. Managing processes is operations — they implement strategy inside the firm and across the supply chain.',
  },
]

export const operationsQuizzes: Quiz[] = [
  {
    id: 'quiz-ops-c1-concepts',
    title: 'Class 1 — OSCM concepts',
    description:
      'Definitions, strategy–process fit, goods/services, and efficiency/effectiveness/value.',
    questions: [
      {
        id: 'oq1',
        prompt:
          'Southwest and Delta can both be “well run” yet look totally different. The Class 1 explanation is that:',
        choices: [
          'One firm must be inefficient; the other is efficient',
          'Each aligns its operating model to a different customer promise',
          'Airlines cannot have strategy; only cost matters',
          'Hub-and-spoke is always superior to point-to-point',
        ],
        correctIndex: 1,
        explanation:
          'Different promises → different operating models. Southwest optimizes simplicity/turns for low cost; Delta optimizes network/premium experience.',
      },
      {
        id: 'oq2',
        prompt:
          'Zara’s supply chain (near production, small batches, frequent newness) primarily buys which advantage relative to a lowest-cost distant model?',
        choices: [
          'The lowest possible cost per garment',
          'Responsiveness to actual demand and lower markdown risk',
          'Eliminating all logistics cost',
          'Larger commitments made months earlier',
        ],
        correctIndex: 1,
        explanation:
          'Higher production/logistics cost is traded for speed/flexibility and less markdown risk; newness is the product.',
      },
      {
        id: 'oq3',
        prompt: 'OSCM is best defined as:',
        choices: [
          'Only warehouse and trucking decisions',
          'Design, operation, and improvement of systems that create and deliver primary products and services',
          'Financial statement consolidation',
          'Advertising and brand positioning only',
        ],
        correctIndex: 1,
        explanation:
          'Textbook Ch. 1 definition: design, operate, and improve creation/delivery systems.',
      },
      {
        id: 'oq4',
        prompt:
          'In Strategy → Processes → Analytics, “strategy” means:',
        choices: [
          'Cutting cost in every process regardless of positioning',
          'A plan to execute processes differently so offerings beat rivals on customer value/appeal',
          'Hiring more analysts',
          'Holding more inventory than competitors',
        ],
        correctIndex: 1,
        explanation:
          'Strategy is distinctive process choices for superior customer value — not merely “be cheaper everywhere.”',
      },
      {
        id: 'oq5',
        prompt:
          'Operational effectiveness focuses on:',
        choices: [
          'Choosing a unique market position only',
          'Executing processes better — often delivering value at lower cost',
          'Avoiding all process measurement',
          'Copying a rival’s exact network design',
        ],
        correctIndex: 1,
        explanation:
          'OE = execute better (efficiency/productivity). Strategy = execute differently (positioning).',
      },
      {
        id: 'oq6',
        prompt:
          'Which trait is more characteristic of pure services than pure goods?',
        choices: [
          'Easy to inventory after production',
          'Consumed when produced; no finished-goods inventory',
          'Completely homogeneous physical specs',
          'No customer interaction ever needed',
        ],
        correctIndex: 1,
        explanation:
          'Services generally cannot be stored; production and consumption coincide.',
      },
      {
        id: 'oq7',
        prompt: 'Efficiency means:',
        choices: [
          'Doing whatever customers ask regardless of cost',
          'Doing the thing right — output vs a standard / lowest possible cost',
          'Charging the highest price',
          'Maximizing inventory levels',
        ],
        correctIndex: 1,
        explanation:
          'Efficiency = do the thing right (cost/standard). Effectiveness = do the right thing for customer value.',
      },
      {
        id: 'oq8',
        prompt: 'Value in the Ch. 1 trio is:',
        choices: [
          'Cost alone',
          'Attractiveness of a product relative to its price',
          'Number of SKUs in the catalog',
          'Total assets on the balance sheet',
        ],
        correctIndex: 1,
        explanation: 'Value = attractiveness relative to price (“delight your customer”).',
      },
    ],
  },
  {
    id: 'quiz-ops-c1-apply',
    title: 'Class 1 — Application',
    description: 'Apply fit, ratios, and current-issue framing.',
    questions: [
      {
        id: 'oq9',
        prompt:
          'If a low-cost airline copied Delta’s multi-fleet hub model “to be more premium” without changing its promise, Class 1 logic predicts:',
        choices: [
          'Automatic profit increase',
          'Likely misfit — complexity that fights the low-cost promise',
          'Identical results to Southwest',
          'No effect on operations',
        ],
        correctIndex: 1,
        explanation:
          'Choices must fit the promise; rivals’ models aren’t portable without strategic alignment.',
      },
      {
        id: 'oq10',
        prompt:
          'Inventory turnover = COGS / average inventory. Higher turnover generally suggests:',
        choices: [
          'Inventory sits longer on average',
          'Inventory is moving faster relative to COGS',
          'The firm has stopped selling goods',
          'Receivables are unpaid',
        ],
        correctIndex: 1,
        explanation:
          'Higher COGS per dollar of average inventory ⇒ inventory turns faster (efficiency lens).',
      },
      {
        id: 'oq11',
        prompt:
          'Total asset turnover = revenue / total assets. It is primarily a measure of:',
        choices: [
          'Brand sentiment only',
          'How much sales the firm generates per dollar of assets',
          'Employee satisfaction',
          'Number of suppliers',
        ],
        correctIndex: 1,
        explanation: 'Asset productivity: sales generated per dollar of assets.',
      },
      {
        id: 'oq12',
        prompt:
          'Marketing launches a campaign promising next-day delivery nationwide. Ops relevance?',
        choices: [
          'None — marketing owns promises',
          'Delivery promises are operations/supply-chain promises; capability must match',
          'Only finance cares about delivery',
          'Promises never involve processes',
        ],
        correctIndex: 1,
        explanation:
          'Products that cannot be delivered reliably/at acceptable cost fail regardless of campaign quality.',
      },
      {
        id: 'oq13',
        prompt:
          'Which set matches “current issues in OSCM” from Class 1?',
        choices: [
          'Only office-hour scheduling',
          'Disruption, tariffs/regulation, workforce, technology, customer power',
          ' exclusively exam bubble-sheet format',
          'Font size on slides',
        ],
        correctIndex: 1,
        explanation:
          'Ch. 1 current issues: disruption, tariffs & regulation, workforce, technology, the customer.',
      },
      {
        id: 'oq14',
        prompt: 'Product–service bundling means:',
        choices: [
          'Selling goods with zero services forever',
          'Building service activities into product offerings',
          'Outsourcing all manufacturing',
          'Eliminating customer interaction by law',
        ],
        correctIndex: 1,
        explanation:
          'Bundling adds services into product offerings — many offerings sit mid-continuum.',
      },
      {
        id: 'oq15',
        prompt:
          '“Processes are the building blocks of strategy” implies for a finance major that:',
        choices: [
          'Ops is irrelevant to spend and cash',
          'Dollars of spend ultimately trace to goods/services flowing through processes',
          'Only marketers manage processes',
          'Analytics replaces all processes',
        ],
        correctIndex: 1,
        explanation:
          'Every dollar of spend traces to a good or service being provided via processes.',
      },
      {
        id: 'oq16',
        prompt:
          'H&M accepting larger early commitments and markdown risk is best read as:',
        choices: [
          'A random mistake',
          'A deliberate tradeoff to secure scale/low production cost for a best-price promise',
          'Proof that forecasts are unnecessary',
          'The same model as Zara’s proximity model',
        ],
        correctIndex: 1,
        explanation:
          'Markdown risk is accepted on purpose — it buys the price/efficiency promise.',
      },
    ],
  },
]
