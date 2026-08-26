import type { Flashcard, NoteSection, Quiz } from './types'

/** I-Core Finance — Week 1 Classes 1–2 (TVM) */
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
  {
    id: 'fin-c2-rule72',
    title: 'Rule of 72 (Class 2)',
    bullets: [
      'Back-of-envelope estimate of years to double money: years ≈ 72 / r, where r is the percent interest rate (use 8 for 8%, not 0.08).',
      'Example: $10,000 at 8% → Rule of 72 says ≈ 72/8 = 9 years. Exact: n = ln(2)/ln(1.08) ≈ 9.01 years.',
      'Useful for quick managerial intuition; still verify with NPER / exact math on exams when precision matters.',
    ],
    keyTerms: [
      {
        term: 'Rule of 72',
        definition:
          'Approximate doubling time in years = 72 ÷ interest rate in percent (e.g., 72/8 ≈ 9 years at 8%).',
      },
    ],
  },
  {
    id: 'fin-c2-streams',
    title: 'Streams of cash flows & DCF (Class 2)',
    bullets: [
      'Organize uneven cash flows on a timeline first — treat each flow as its own lump sum.',
      'Future value of a stream: compound each cash flow forward to the target date, then add the FVs.',
      'Present value of a stream: discount each cash flow back to today, then add the PVs. That sum is discounted cash flow (DCF).',
      'DCF = method of finding PV by discounting future cash flows one by one and summing.',
      'Example (FV stream): deposit $1,200 today and $1,400 in 1 year; earn 8%; spend in 2 years → FV = 1,200×(1.08)^2 + 1,400×(1.08) ≈ $2,911.68.',
      'Example (PV stream / choice): pay $15,500 cash now vs $8,000 now + $4,000 at end of year 1 + $4,000 at end of year 2; cost of money 8%. PV of plan = 8,000 + 4,000/1.08 + 4,000/(1.08)^2 ≈ $15,133 — prefer the installment plan (lower PV cost).',
      'Contract sale: $3,000 due in 2 years; buyer requires 8% → price = 3,000/(1.08)^2 ≈ $2,572 (=PV(0.08,2,,-3000)).',
    ],
    keyTerms: [
      {
        term: 'Discounted cash flow (DCF)',
        definition:
          'Valuing a set of future cash flows by discounting each to present value and summing the PVs.',
      },
      {
        term: 'Timeline',
        definition:
          'Diagram of cash flows by period used to keep timing straight before computing PV or FV of streams.',
      },
    ],
  },
  {
    id: 'fin-c2-excel-npv',
    title: 'Excel NPV — critical exam trap (Class 2)',
    bullets: [
      'Syntax: =NPV(rate, value1, value2, …) or a contiguous range of future cash flows.',
      'Excel NPV discounts as if the first value in the range is one period from now — it does NOT treat a time-0 cash flow as already “today.”',
      'Put any immediate (t = 0) cash flow outside NPV and add it: e.g. 8000 + NPV(0.08, 4000, 4000).',
      'Rate must be the same each period; fill gaps with 0 so the range stays contiguous (no skipped periods).',
      'Unlike PV/FV/PMT, NPV does not require opposite signs on inflows vs outflows — you choose signs to match economics.',
      'Factory example: invest $400,000 today; receive $120k, $180k, $300k at ends of years 1–3; r = 12%. NPV = NPV(0.12, 120000, 180000, 300000) + (−400000) ≈ +$64,172 → positive NPV, proceed.',
    ],
    keyTerms: [
      {
        term: 'Excel NPV trap',
        definition:
          'NPV() only discounts future cash flows starting at t=1; add the t=0 cash flow outside the function.',
      },
    ],
  },
  {
    id: 'fin-c2-excel-suite',
    title: 'Excel TVM suite & temporal congruence (Class 2)',
    bullets: [
      'Five core solvers: PV, FV, NPER, RATE, PMT — each finds the missing piece when the others are known.',
      'Shared idea: =PV(rate, nper, pmt, [fv], [type]); FV/NPER/RATE/PMT use the same arguments in matching order for their solve target.',
      'type = 0 (default) end-of-period payments (ordinary); type = 1 beginning-of-period (annuity due). Class 2 defers deep PMT/annuity theory but the function appears in the sheet.',
      'Temporal congruence: rate and nper must use the same time unit. Monthly → rate/12 and years×12; quarterly → rate/4 and years×4.',
      'Sign convention: money you pay out / invest is usually negative; money you receive is positive. Mixing signs is the #1 Excel error.',
      'Skip unused arguments with consecutive commas (e.g. lump-sum FV with no pmt: =FV(rate,nper,,pv)).',
      'Terminology aliases: PV = today’s / discounted value; FV = value later; Rate = i, r, discount rate, required return, cost of capital; NPER = n or t; PMT = level recurring payment / annuity.',
    ],
    keyTerms: [
      {
        term: 'Temporal congruence',
        definition:
          'Matching the interest rate’s time unit to the period count (e.g., monthly rate with monthly nper).',
      },
      {
        term: 'type (Excel)',
        definition:
          '0 = payment at end of each period; 1 = payment at beginning. Default is 0.',
      },
    ],
  },
  {
    id: 'fin-c2-sheet-examples',
    title: 'Class 2 spreadsheet worked numbers',
    bullets: [
      'PV of level deposits: invest $5,000 each month for 3 years at 6%/year → =PV(0.06/12, 36, -5000) ≈ $164,355 (36 periods; rate 0.5%/month).',
      'FV of a loan balance: borrow $15,000 at 3.5% compounded quarterly for 5 years → =FV(0.035/4, 20,, 15000) ≈ −$17,855 owed at maturity (sign flips with convention).',
      'NPER to double: $900 → $1,800 at 11% annual → =NPER(0.11,,-900,1800) ≈ 6.64 years (no rate conversion — already annual).',
      'RATE on a loan: $35,000 borrowed; pay $5,000/year for 10 years → =RATE(10,-5000,35000) ≈ 7.07% per year.',
      'PMT preview: $15,000 loan, 4.5%/year, monthly for 3 years → =PMT(0.045/12, 36, 15000) ≈ −$446.20 per month.',
      'Italy IOU: sell a €1,000 face amount for €992.34 with payment in 2 years → r = (1000/992.34)^(1/2) − 1 ≈ 0.385% per year (almost zero quoted interest).',
      'Property sketch: buy $3.4M, sell for $4.4M in 6 years at 10% → PV of sale = PV(0.1,6,,4400000) ≈ $2.484M (compare to price / full project NPV with interim rents when given).',
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
  {
    id: 'fc-fin-21',
    topic: 'Rule of 72',
    front: 'State the Rule of 72 and what it estimates.',
    back: 'Years to double ≈ 72 / r, where r is the interest rate in percent (not decimal). Quick estimate of doubling time.',
  },
  {
    id: 'fc-fin-22',
    topic: 'Rule of 72',
    front: 'At 8%, how long to double by Rule of 72? What’s the exact n?',
    back: 'Rule: 72/8 = 9 years. Exact: ln(2)/ln(1.08) ≈ 9.01 years.',
  },
  {
    id: 'fc-fin-23',
    topic: 'DCF',
    front: 'How do you find the present value of a stream of uneven cash flows?',
    back: 'Discount each cash flow to today as a lump sum, then add the PVs (discounted cash flow).',
  },
  {
    id: 'fc-fin-24',
    topic: 'DCF',
    front: 'How do you find the future value of a stream of uneven cash flows?',
    back: 'Compound each cash flow forward to the target date as a lump sum, then add the FVs.',
  },
  {
    id: 'fc-fin-25',
    topic: 'Excel NPV',
    front: 'What does Excel’s NPV function assume about the first cash flow in its range?',
    back: 'It treats the first value as occurring one period from now — not at t = 0. Add any immediate cash flow outside NPV.',
  },
  {
    id: 'fc-fin-26',
    topic: 'Excel NPV',
    front: 'Auto dealer: $8,000 due today plus $4,000 at end of years 1 and 2. Cost of money 8%. Write the Excel-style PV.',
    back: '8000 + NPV(0.08, 4000, 4000) ≈ $15,133 (the $8,000 stays outside NPV).',
  },
  {
    id: 'fc-fin-27',
    topic: 'Temporal congruence',
    front: 'What is temporal congruence in Excel TVM?',
    back: 'Rate and nper must share the same time unit — e.g., monthly: use rate/12 and years×12.',
  },
  {
    id: 'fc-fin-28',
    topic: 'Excel',
    front: 'Invest $5,000 monthly for 3 years at 6%/year. Excel PV call and approx answer?',
    back: '=PV(0.06/12, 36, -5000) ≈ $164,355.',
  },
  {
    id: 'fc-fin-29',
    topic: 'Excel',
    front: 'Borrow $15,000 at 3.5% compounded quarterly for 5 years. Excel FV call?',
    back: '=FV(0.035/4, 5*4,, 15000) → about $17,855 owed at the end (sign depends on convention).',
  },
  {
    id: 'fc-fin-30',
    topic: 'NPER',
    front: '$900 invested today doubles at 11% compounded annually. Approx years?',
    back: '=NPER(0.11,,-900,1800) ≈ 6.64 years.',
  },
  {
    id: 'fc-fin-31',
    topic: 'RATE',
    front: '$35,000 loan repaid with $5,000 per year for 10 years. Approx annual rate?',
    back: '=RATE(10,-5000,35000) ≈ 7.07%.',
  },
  {
    id: 'fc-fin-32',
    topic: 'PMT',
    front: '$15,000 loan, 4.5%/year, monthly payments for 3 years. Approx monthly PMT?',
    back: '=PMT(0.045/12, 36, 15000) ≈ −$446.20 (outflow).',
  },
  {
    id: 'fc-fin-33',
    topic: 'Worked example',
    front: '$1,200 today and $1,400 in one year, both earn 8%. How much can you spend in two years?',
    back: '1,200×(1.08)^2 + 1,400×(1.08) ≈ $2,911.68.',
  },
  {
    id: 'fc-fin-34',
    topic: 'Worked example',
    front: '€1,000 face IOU sold for €992.34 with payoff in 2 years. Approx annual r?',
    back: 'r = (1000/992.34)^(1/2) − 1 ≈ 0.385% per year.',
  },
  {
    id: 'fc-fin-35',
    topic: 'NPV decision',
    front: 'Factory costs $400k today; CFs $120k, $180k, $300k in years 1–3; r = 12%. Decision rule?',
    back: 'NPV ≈ +$64,172 (positive) → proceed / accept the project.',
  },
  {
    id: 'fc-fin-36',
    topic: 'Excel type',
    front: 'In =PV(..., [type]), what do type 0 and type 1 mean?',
    back: '0 (default) = payment at end of each period; 1 = payment at beginning of each period.',
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
  {
    id: 'quiz-fin-c2-concepts',
    title: 'Class 2 — Streams, DCF & Excel logic',
    description:
      'Multi-cash-flow valuation, Rule of 72, NPV traps, and temporal congruence from Week 1 Class 2.',
    questions: [
      {
        id: 'q17',
        prompt: 'Discounted cash flow (DCF) means:',
        choices: [
          'Adding nominal future cash flows without adjusting for time',
          'Discounting each future cash flow to PV and summing those PVs',
          'Only computing FV of a single deposit',
          'Converting APR to EAR and stopping',
        ],
        correctIndex: 1,
        explanation:
          'DCF discounts each future CF to today, then adds — the PV of a stream.',
      },
      {
        id: 'q18',
        prompt:
          'To find the future value of several deposits on different dates, you should:',
        choices: [
          'Average the deposits and multiply by (1+r)^n once',
          'Compound each deposit forward to the same end date, then add',
          'Only discount them and ignore compounding',
          'Use PMT with type = 1 always',
        ],
        correctIndex: 1,
        explanation:
          'Treat each flow as a lump sum, grow it for the remaining periods, then sum FVs.',
      },
      {
        id: 'q19',
        prompt: 'Excel’s =NPV(rate, range) treats the first cell in the range as:',
        choices: [
          'A cash flow at time 0 (today)',
          'A cash flow one period from now',
          'An interest rate override',
          'An optional guess like RATE’s guess argument',
        ],
        correctIndex: 1,
        explanation:
          'Classic trap: NPV starts discounting at t=1. Put today’s CF outside and add it.',
      },
      {
        id: 'q20',
        prompt:
          'Pay $15,500 cash now, or $8,000 now plus $4,000 at the end of each of the next two years. Cost of money = 8%. Best decision?',
        choices: [
          'Always take cash now because $15,500 looks smaller than $8k+$4k+$4k',
          'Prefer the installment plan — its PV ≈ $15,133 < $15,500',
          'Prefer cash now — installment PV ≈ $16,000 > $15,500',
          'The two options have identical PVs at any rate',
        ],
        correctIndex: 1,
        explanation:
          'PV = 8000 + 4000/1.08 + 4000/1.08^2 ≈ $15,133, cheaper than paying $15,500 today.',
      },
      {
        id: 'q21',
        prompt: 'Rule of 72 estimates years to double at 9% as:',
        choices: ['72 × 9 = 648 years', '72 / 9 = 8 years', '72 / 0.09 ≈ 800 years', '9 / 72 = 0.125 years'],
        correctIndex: 1,
        explanation: 'Divide 72 by the percent rate: 72/9 = 8 years (approx).',
      },
      {
        id: 'q22',
        prompt: 'Temporal congruence means:',
        choices: [
          'PV and FV must have the same sign',
          'Rate and nper use matching time units (e.g., monthly with monthly)',
          'Excel type must always equal 1',
          'NPV ranges may skip empty years freely',
        ],
        correctIndex: 1,
        explanation:
          'If cash flows are monthly, use monthly rate and monthly period count together.',
      },
      {
        id: 'q23',
        prompt:
          'For a project with a $400,000 outlay today and only future operating CFs in a contiguous range, correct Excel NPV setup is:',
        choices: [
          '=NPV(r, all_CFs_including_today)',
          '=NPV(r, future_CFs_only) + (−400000)',
          '=PV(r, nper, 400000)',
          '=RATE(nper, pmt, 400000)',
        ],
        correctIndex: 1,
        explanation:
          'Keep t=0 outside; NPV only the future flows, then add today’s cash flow.',
      },
      {
        id: 'q24',
        prompt: 'In Excel TVM functions, type = 1 means:',
        choices: [
          'Payments occur at the end of each period',
          'Payments occur at the beginning of each period',
          'Interest is simple, not compound',
          'The rate is already an EAR',
        ],
        correctIndex: 1,
        explanation: 'type 1 = beginning (annuity due); type 0 (default) = end (ordinary).',
      },
    ],
  },
  {
    id: 'quiz-fin-c2-calc',
    title: 'Class 2 — Calculations & spreadsheet drills',
    description:
      'Numbers from the W1C2 deck and Lecture 2 Excel workbook — rates, NPER, PMT, streams, NPV.',
    questions: [
      {
        id: 'q25',
        prompt:
          'Deposit $1,200 today and $1,400 in one year at 8%. Amount available to spend in two years?',
        choices: ['$2,600.00', '$2,808.00', '$2,911.68', '$3,024.00'],
        correctIndex: 2,
        explanation: '1,200×(1.08)^2 + 1,400×1.08 = 1,399.68 + 1,512 = $2,911.68.',
      },
      {
        id: 'q26',
        prompt:
          'A contract pays $3,000 in two years. Required return 8%. Fair selling price today?',
        choices: ['$3,000', '$2,778', '$2,572', '$2,400'],
        correctIndex: 2,
        explanation: 'PV = 3000/(1.08)^2 ≈ $2,572 (=PV(0.08,2,,-3000)).',
      },
      {
        id: 'q27',
        prompt:
          'Italy sells a €1,000 two-year IOU for €992.34. Approx annual interest rate?',
        choices: ['0.39%', '3.90%', '7.80%', '15.60%'],
        correctIndex: 0,
        explanation: '(1000/992.34)^(1/2) − 1 ≈ 0.00385 ≈ 0.385%.',
      },
      {
        id: 'q28',
        prompt:
          'Invest $5,000 at the end of each month for 3 years; APR 6% compounded monthly. Closest PV of that commitment?',
        choices: ['$150,000', '$164,355', '$180,000', '$5,000 × 36 × 1.06'],
        correctIndex: 1,
        explanation: '=PV(0.06/12,36,-5000) ≈ $164,355.',
      },
      {
        id: 'q29',
        prompt:
          'Borrow $15,000 at 3.5% compounded quarterly for 5 years (no interim payments). Approx amount due at maturity?',
        choices: ['$15,525', '$16,750', '$17,855', '$20,000'],
        correctIndex: 2,
        explanation: 'FV with rate 0.035/4 and nper 20 → about $17,855.',
      },
      {
        id: 'q30',
        prompt: '$900 doubles at 11% compounded annually. Closest NPER?',
        choices: ['5.0 years', '6.0 years', '6.6 years', '11.0 years'],
        correctIndex: 2,
        explanation: '=NPER(0.11,,-900,1800) ≈ 6.64 years.',
      },
      {
        id: 'q31',
        prompt:
          '$35,000 loan repaid with annual payments of $5,000 for 10 years. Closest RATE?',
        choices: ['5.00%', '7.07%', '10.00%', '14.29%'],
        correctIndex: 1,
        explanation: '=RATE(10,-5000,35000) ≈ 7.07%.',
      },
      {
        id: 'q32',
        prompt:
          '$15,000 loan, 4.5% APR, monthly payments for 3 years. Closest monthly PMT?',
        choices: ['$375', '$416', '$446', '$500'],
        correctIndex: 2,
        explanation: '=PMT(0.045/12,36,15000) ≈ $446.20.',
      },
      {
        id: 'q33',
        prompt:
          'Buy a factory for $400,000; CFs $120k, $180k, $300k at ends of years 1–3; discount rate 12%. Approx NPV and decision?',
        choices: [
          '−$64k → reject',
          '+$64k → accept',
          '+$200k → accept',
          '$0 → indifferent only',
        ],
        correctIndex: 1,
        explanation:
          'NPV(0.12, future CFs) − 400,000 ≈ +$64,172 → positive NPV, proceed.',
      },
      {
        id: 'q34',
        prompt:
          'Property will sell for $4.4M in 6 years. At 10%, today’s PV of that sale (lump sum) is closest to:',
        choices: ['$4.4M', '$3.4M', '$2.48M', '$1.0M'],
        correctIndex: 2,
        explanation: 'PV = 4,400,000/(1.1)^6 ≈ $2.484M.',
      },
    ],
  },
]
