import type { Flashcard, NoteSection, Quiz } from './types'

/** I-Core Finance — Week 1 Class 1 (TVM intro) */
export const financeNotes: NoteSection[] = [
  {
    id: 'fin-c1-corporate',
    title: 'What corporate finance is about',
    bullets: [
      'Inside a firm, finance answers: “Is it worth it?” — create or preserve economic value of assets.',
      'Worth it means benefits (cash in) exceed costs (cash out), adjusted for time, required return, and risk.',
      'That comparison is the time value of money (TVM).',
      'I-Core focuses on fundamentals usable across finance, applied to corporate decisions: TVM, valuing bonds/stocks, risk & return, and capital budgeting — not investments, derivatives, markets, fintech, etc.',
    ],
    keyTerms: [
      {
        term: 'Corporate finance (financial management)',
        definition:
          'Decisions inside a business about whether activities/investments create value after considering cash flows, time, returns, and risk.',
      },
    ],
  },
  {
    id: 'fin-c1-why-tvm',
    title: 'Why a dollar today beats a dollar later',
    bullets: [
      'A dollar in hand today is worth more than a dollar promised in the future.',
      'Three reasons: inflation erodes purchasing power; the future is uncertain (risk); waiting has an opportunity cost.',
      'We invest (lend) to earn a return — ideally enough above inflation to beat the desire for spending now.',
      'Viewpoint labels: r = rate of return (lender’s income); i = interest rate (borrower’s expense). Same math idea, different side of the deal.',
    ],
    keyTerms: [
      {
        term: 'Opportunity cost',
        definition:
          'Value of the next-best alternative you give up. In finance, often the interest rate / return you forgo by taking an action.',
      },
      {
        term: 'Time value of money',
        definition:
          'Money available now is worth more than the same nominal amount later because of inflation, risk, and opportunity cost.',
      },
    ],
  },
  {
    id: 'fin-c1-interest',
    title: 'Simple vs compound interest',
    bullets: [
      'Simple interest: each period you earn (or pay) interest only on the original principal — same dollar interest each period.',
      'Example: $1,000 at 6% simple → $60 interest every year, forever based on the original $1,000.',
      'Compound interest: interest is earned on principal plus interest already accumulated — “interest on interest.”',
      'Example: $1,000 at 6% compounded: end of year 2 balance $1,123.60; year 3 interest = $1,123.60 × 0.06 = $67.42.',
      'Higher compound rates dramatically change long-run balances (logarithmic growth is easy to underestimate).',
    ],
    keyTerms: [
      {
        term: 'Compounding',
        definition:
          'Earning return on prior returns so the balance (and interest each period) grows over time.',
      },
    ],
  },
  {
    id: 'fin-c1-fv-pv',
    title: 'Future value & present value (lump sums)',
    bullets: [
      'Future value (FV): what an investment grows to over time at rate r.',
      'FV = PV × (1 + r)^n. The factor (1 + r)^n is the future value interest factor, FVIF(r, n).',
      'Present value (PV): today’s value of a future cash flow — bringing money back by discounting.',
      'PV = FV / (1 + r)^n = FV × 1/(1 + r)^n. The factor 1/(1 + r)^n is the discount factor / PVIF(r, n).',
      'PVIF and FVIF are reciprocals: PVIF(r, n) = 1 / FVIF(r, n).',
      'Finding FV multiplies (compounding forward). Finding PV divides (discounting back). Discounting is central to finance.',
      'r in these formulas measures required return for risk and lost opportunity (discount rate when finding PV).',
      'PVs fall as cash is delayed further or as the discount rate rises — waiting longer or facing more risk makes future cash worth less today.',
    ],
    keyTerms: [
      {
        term: 'Discounting',
        definition:
          'Reducing a future cash flow to present value by dividing by (1 + r)^n.',
      },
      {
        term: 'Discount rate',
        definition:
          'The rate r used to find PV; reflects risk and opportunity cost of capital.',
      },
      {
        term: 'FVIF(r, n)',
        definition: '(1 + r)^n — multiplies PV to get FV for a lump sum.',
      },
      {
        term: 'PVIF(r, n)',
        definition: '1/(1 + r)^n — multiplies FV to get PV for a lump sum.',
      },
    ],
  },
  {
    id: 'fin-c1-excel',
    title: 'Excel TVM basics (Class 1)',
    bullets: [
      'Core arguments: Rate (same time unit as periods), Nper (# periods), Pmt (periodic payment if any), Pv, Fv.',
      'Sign convention matters: money you invest/pay out is typically negative; money you receive is positive (Excel solves 0 = FV − PV(1+rate)^nper style identities).',
      'Lump-sum FV example: $100 for 5 years at 6% → =FV(0.06,5,,-100) ≈ $133.82.',
      'Basic FV: $5,000 CD at 2% for 4 years → FV = 5000 × (1.02)^4 ≈ $5,412.16.',
      'Basic PV: $12M in 5 years, opportunity rate 8% → PV = 12,000,000 / (1.08)^5 ≈ $8,166,998.',
      'Multi-step: $10,000 grows 4 years at 3.5%, withdraw $5,000, reinvest remainder 5 years at 5.8% → end balance ≈ $8,583.88 (chain FV calculations; watch signs in nested =FV).',
    ],
  },
  {
    id: 'fin-c1-solving',
    title: 'Solving for rate (r) or periods (n)',
    bullets: [
      'Given PV, FV, and n, solve for r: compute FV/PV, take the n-th root, subtract 1. Or use RATE / calculator.',
      'Example: $100 → $150 in 6 periods → (150/100)^(1/6) − 1 ≈ 6.99% ≈ 7%.',
      'Given PV, FV, and r, solve for n: n = ln(FV/PV) / ln(1+r). Or use NPER / calculator.',
      'Example: $100 → $150 at 7% → ln(1.5)/ln(1.07) ≈ 6 periods.',
    ],
  },
  {
    id: 'fin-c1-numeracy',
    title: 'Decimals, rounding & simple growth (Study Brief)',
    bullets: [
      'Dollars: stock prices/dividends → two decimals; large statement figures → often nearest dollar (or thousands/millions).',
      'Rates of return: keep at least four decimal places in decimal form (e.g. 0.1440 = 14.40%) so compounding stays accurate — don’t round rates to two decimals too early.',
      'Standard rounding: 5+ rounds up; 4 and below rounds down.',
      'Percentage change / simple growth: (new − old)/old, or equivalently (new/old) − 1.',
      'Grow a number forward one period: starting × (1 + growth rate). Example: $234.5M × 1.17 ≈ $274.4M; $3.52 dividend × 1.02 ≈ $3.59.',
    ],
  },
]

export const financeFlashcards: Flashcard[] = [
  {
    id: 'fc-fin-1',
    topic: 'Corporate finance',
    front: 'What core question does corporate finance ask about firm decisions?',
    back: '“Is it worth it?” — do benefits (cash in) exceed costs (cash out) after adjusting for time, required return, and risk?',
  },
  {
    id: 'fc-fin-2',
    topic: 'TVM',
    front: 'State the time value of money in one sentence.',
    back: 'A dollar today is worth more than a dollar promised in the future.',
  },
  {
    id: 'fc-fin-3',
    topic: 'TVM',
    front: 'Name the three reasons money has time value.',
    back: 'Inflation (purchasing power), uncertainty/risk, and opportunity cost (forgone alternatives / returns).',
  },
  {
    id: 'fc-fin-4',
    topic: 'Opportunity cost',
    front: 'What is opportunity cost in a finance context?',
    back: 'The value of the next-best alternative you give up — often the interest rate or return you forgo by choosing an action.',
  },
  {
    id: 'fc-fin-5',
    topic: 'Rates',
    front: 'How do r and i differ in viewpoint?',
    back: 'r = rate of return from the lender/investor’s view (income); i = interest rate from the borrower’s view (expense). Same economics, different side.',
  },
  {
    id: 'fc-fin-6',
    topic: 'Interest',
    front: 'Simple interest vs compound interest — what’s the difference?',
    back: 'Simple: interest each period only on original principal. Compound: interest on principal plus accumulated interest (“interest on interest”).',
  },
  {
    id: 'fc-fin-7',
    topic: 'FV',
    front: 'Write the lump-sum future value formula and name (1+r)^n.',
    back: 'FV = PV × (1 + r)^n. (1 + r)^n is the future value interest factor, FVIF(r, n).',
  },
  {
    id: 'fc-fin-8',
    topic: 'PV',
    front: 'Write the lump-sum present value formula. What is 1/(1+r)^n called?',
    back: 'PV = FV / (1 + r)^n = FV × 1/(1 + r)^n. That factor is the discount factor / PVIF(r, n).',
  },
  {
    id: 'fc-fin-9',
    topic: 'Discounting',
    front: 'What does “discounting” mean, and what does r represent when you discount?',
    back: 'Bringing a future cash flow back to today by dividing by (1+r)^n. r is the discount rate — required return for risk and opportunity cost.',
  },
  {
    id: 'fc-fin-10',
    topic: 'PVIF / FVIF',
    front: 'How are PVIF and FVIF related?',
    back: 'They are reciprocals: PVIF(r, n) = 1 / FVIF(r, n).',
  },
  {
    id: 'fc-fin-11',
    topic: 'Intuition',
    front: 'Holding FV fixed, what happens to PV if you wait longer or use a higher discount rate?',
    back: 'PV falls — delayed cash and higher r both reduce present value.',
  },
  {
    id: 'fc-fin-12',
    topic: 'Excel',
    front: 'In Excel TVM functions, why does cash-flow sign matter?',
    back: 'Outflows (investing/paying) are typically negative and inflows positive so the solver matches the equation linking PV, FV, rate, and nper.',
  },
  {
    id: 'fc-fin-13',
    topic: 'Worked example',
    front: '$5,000 invested today at 2% annual compound for 4 years — approximate FV?',
    back: 'FV = 5000 × (1.02)^4 ≈ $5,412.16.',
  },
  {
    id: 'fc-fin-14',
    topic: 'Worked example',
    front: '$12M to be received in 5 years; opportunity rate 8%. Approx PV today?',
    back: 'PV = 12,000,000 / (1.08)^5 ≈ $8,166,998.',
  },
  {
    id: 'fc-fin-15',
    topic: 'Solve for r',
    front: 'How do you solve for r given PV, FV, and n (no calculator keys)?',
    back: 'r = (FV/PV)^(1/n) − 1.',
  },
  {
    id: 'fc-fin-16',
    topic: 'Solve for n',
    front: 'How do you solve for n given PV, FV, and r?',
    back: 'n = ln(FV/PV) / ln(1+r).',
  },
  {
    id: 'fc-fin-17',
    topic: 'Study brief',
    front: 'How many decimal places should you keep for rates of return while calculating?',
    back: 'At least four decimal places in decimal form (e.g., 0.1440 = 14.40%) so compounding stays accurate.',
  },
  {
    id: 'fc-fin-18',
    topic: 'Study brief',
    front: 'Two equivalent formulas for a simple growth rate between two numbers?',
    back: '(new − old)/old, or (new/old) − 1.',
  },
  {
    id: 'fc-fin-19',
    topic: 'Study brief',
    front: 'Quick way to grow a starting number by rate g for one period?',
    back: 'starting × (1 + g).',
  },
  {
    id: 'fc-fin-20',
    topic: 'Compounding',
    front: '$1,000 at 6% compound: interest earned in year 3 if the year-2 ending balance is $1,123.60?',
    back: '$1,123.60 × 0.06 = $67.42 (interest on the larger compounded balance).',
  },
]

export const financeQuizzes: Quiz[] = [
  {
    id: 'quiz-fin-c1-concepts',
    title: 'Class 1 — TVM concepts',
    description: 'Core ideas from Week 1 Class 1: why TVM exists, compounding, and PV/FV.',
    questions: [
      {
        id: 'q1',
        prompt:
          'Corporate finance decisions ultimately ask whether an activity is “worth it.” What does that mean in cash-flow terms?',
        choices: [
          'Accounting profit is positive this quarter',
          'Cash benefits exceed cash costs after considering time, return, and risk',
          'Revenue grows faster than the industry average',
          'The firm’s stock price rose today',
        ],
        correctIndex: 1,
        explanation:
          'Worth it means economic value: cash in > cash out, adjusted via TVM for timing, required returns, and risk.',
      },
      {
        id: 'q2',
        prompt: 'Which is NOT a standard reason a dollar today is worth more than a dollar later?',
        choices: [
          'Inflation reduces future purchasing power',
          'Future cash is uncertain (risk)',
          'Waiting has an opportunity cost',
          'Banks are legally required to pay simple interest only',
        ],
        correctIndex: 3,
        explanation:
          'TVM comes from inflation, risk/uncertainty, and opportunity cost — not a legal rule about simple interest.',
      },
      {
        id: 'q3',
        prompt:
          'You deposit $1,000 at 6% simple interest. How much interest do you earn in year 5 (same each year)?',
        choices: ['$60', '$67.23', '$338.23', '$1,060'],
        correctIndex: 0,
        explanation:
          'Simple interest is always on original principal: 0.06 × $1,000 = $60 every year.',
      },
      {
        id: 'q4',
        prompt:
          'With compound interest, what happens to the dollar amount of interest earned each year (assuming a positive rate and no withdrawals)?',
        choices: [
          'It stays constant',
          'It falls each year',
          'It generally rises because the base balance grows',
          'It only changes if the Fed changes rates mid-year',
        ],
        correctIndex: 2,
        explanation:
          'Compounding adds interest to the balance, so later periods earn interest on a larger base.',
      },
      {
        id: 'q5',
        prompt: 'Lump-sum future value is best written as:',
        choices: [
          'FV = PV + r × n',
          'FV = PV × (1 + r)^n',
          'FV = PV / (1 + r)^n',
          'FV = PV × r^n',
        ],
        correctIndex: 1,
        explanation: 'Compound growth: multiply PV by (1+r) once per period → FV = PV(1+r)^n.',
      },
      {
        id: 'q6',
        prompt: 'Discounting a future cash flow means:',
        choices: [
          'Subtracting inflation from the nominal amount only',
          'Multiplying FV by (1+r)^n',
          'Dividing FV by (1+r)^n to find today’s value',
          'Converting an APR into monthly payments',
        ],
        correctIndex: 2,
        explanation: 'PV = FV/(1+r)^n — discounting brings future money back to present value.',
      },
      {
        id: 'q7',
        prompt: 'If PVIF(10%, 4) = 0.6830, what is FVIF(10%, 4)?',
        choices: ['0.6830', '1.4641', '0.3170', '4.6410'],
        correctIndex: 1,
        explanation: 'FVIF = 1/PVIF ≈ 1/0.683 ≈ 1.4641, which equals (1.1)^4.',
      },
      {
        id: 'q8',
        prompt:
          'A firm will receive $12 million in five years. Its opportunity rate is 8% annually. Finding today’s value is primarily an application of:',
        choices: [
          'Simple interest only',
          'Future value compounding of a deposit',
          'Present value discounting',
          'Annuity payment formulas',
        ],
        correctIndex: 2,
        explanation:
          'A single future amount → discount to today: PV = 12M/(1.08)^5.',
      },
    ],
  },
  {
    id: 'quiz-fin-c1-calc',
    title: 'Class 1 — Calculations',
    description: 'Worked numbers from lecture examples, Excel, and the study brief.',
    questions: [
      {
        id: 'q9',
        prompt:
          'You invest $5,000 today in a CD at 2.0% compounded annually for 4 years. Closest FV?',
        choices: ['$5,400.00', '$5,412.16', '$5,080.00', '$6,000.00'],
        correctIndex: 1,
        explanation: '5000 × (1.02)^4 = 5000 × 1.08243216 ≈ $5,412.16.',
      },
      {
        id: 'q10',
        prompt:
          'In Excel, which call matches investing $100 for 5 years at 6% (outflow today, FV positive)?',
        choices: [
          '=FV(0.06,5,,100)',
          '=FV(0.06,5,,-100)',
          '=PV(0.06,5,,-100)',
          '=FV(6,5,,-100)',
        ],
        correctIndex: 1,
        explanation:
          'Rate as decimal 0.06; sign convention typically uses negative PV for money invested → ≈ $133.82.',
      },
      {
        id: 'q11',
        prompt:
          'What interest rate turns $100 into $150 in 6 periods (approx)?',
        choices: ['5.0%', '6.0%', '7.0%', '15.0%'],
        correctIndex: 2,
        explanation: '(150/100)^(1/6) − 1 ≈ 0.0699 ≈ 7%.',
      },
      {
        id: 'q12',
        prompt:
          'At 7% per period, how many periods for $100 to grow to $150 (approx)?',
        choices: ['4', '5', '6', '7'],
        correctIndex: 2,
        explanation: 'n = ln(1.5)/ln(1.07) ≈ 5.99 ≈ 6 periods.',
      },
      {
        id: 'q13',
        prompt:
          'Revenues rise from $206.1M to $234.5M. Growth rate?',
        choices: ['12.10%', '13.78%', '14.40%', '28.40%'],
        correctIndex: 1,
        explanation: '(234.5 − 206.1)/206.1 = 28.4/206.1 ≈ 0.1378 = 13.78%.',
      },
      {
        id: 'q14',
        prompt:
          '2019 revenues are $234.5M; expected growth next year is 17%. Approx 2020 revenues?',
        choices: ['$251.5M', '$274.4M', '$234.5M', '$399.0M'],
        correctIndex: 1,
        explanation: '234.5 × 1.17 = 274.365 ≈ $274.4M.',
      },
      {
        id: 'q15',
        prompt:
          'ROI: $360 profit on a $2,500 investment. Why keep four decimals on the rate?',
        choices: [
          'GAAP requires four decimals on all ratios',
          '0.1440 (14.40%) vs rounding to 0.14 (14%) materially affects compounding',
          'Stock prices always use four decimals',
          'Excel cannot store more than four decimals',
        ],
        correctIndex: 1,
        explanation:
          'Study brief: rates need ≥ four decimal places so percentage returns stay accurate under compounding.',
      },
      {
        id: 'q16',
        prompt:
          'You grow $10,000 for 4 years at 3.5%, spend $5,000 of the matured amount, then invest the rest for 5 years at 5.8%. What are you computing?',
        choices: [
          'A single PV of an annuity due',
          'A chained FV path with an intermediate withdrawal',
          'Only the PV of $10,000',
          'EAR from two quoted APRs',
        ],
        correctIndex: 1,
        explanation:
          'Lecture advanced example: FV at 3.5% for 4 years, subtract $5,000, then FV the remainder at 5.8% for 5 years ≈ $8,583.88.',
      },
    ],
  },
]
