import type { Flashcard, NoteSection, Quiz } from './types'

/** I-Core Leadership (Z370) — Days 1–2 (Intro to Management + Attitudes) */
export const leadershipNotes: NoteSection[] = [
  {
    id: 'ldr-d1-course',
    title: 'What Z370 actually delivers',
    bullets: [
      'Reality check: you will not leave knowing “all you need” to be an effective leader.',
      'You will leave with a base understanding of management & leadership, exposure to tools/theories leaders use, and the ability to apply concepts in I-Core group case work.',
      'Goal: be more prepared to contribute as both a leader and a follower in firms you join — and learn from each other along the way.',
    ],
  },
  {
    id: 'ldr-d1-career',
    title: 'Why OB matters for hiring and promotion',
    bullets: [
      'Hiring often turns on technical skills — the “nuts and bolts” of getting the job done; function-specific knowledge.',
      'Promotion more often turns on people skills: ability to manage people, strong team skills, and building/managing relationships.',
      'OB builds the soft skills that matter after the technical hire — including for aggressive I-Core team work with unfamiliar teammates under time pressure.',
    ],
    keyTerms: [
      {
        term: 'Technical skills (hire lens)',
        definition:
          'Job- or function-specific knowledge that shows you can get the work done — often decisive at hiring.',
      },
    ],
  },
  {
    id: 'ldr-d1-ob',
    title: 'What organizational behavior is',
    bullets: [
      'Organizational behavior (OB) is the study of the impact that individuals, groups, and structure have on behavior within organizations — aimed at improving effectiveness.',
      'OB is not merely “leadership,” HR employee relations, performance management, or strategy as labels — those use OB insights; OB is the behavioral science lens.',
      'A basic OB model organizes concepts as Inputs → Processes → Outcomes across individual, group, and organizational levels (with feedback from outcomes back to inputs).',
    ],
    keyTerms: [
      {
        term: 'Organizational behavior (OB)',
        definition:
          'Study of how individuals, groups, and structure affect behavior in organizations, aimed at improving effectiveness.',
      },
    ],
  },
  {
    id: 'ldr-d1-ipo',
    title: 'IPO model (inputs → processes → outcomes)',
    bullets: [
      'Inputs (starting variables): Individual — diversity, personality, values. Group — group structure, roles, team responsibilities. Organizational — structure, culture.',
      'Processes (what people/orgs do): Individual — emotions/moods, motivation, perception, decision making. Group — communication, leadership, power & politics, conflict & negotiation. Organizational — HRM, change practices.',
      'Outcomes (what you explain/predict): Individual — attitudes & stress, job performance, citizenship behavior, withdrawal behavior. Group — team performance. Organizational — productivity, survival.',
      'Critical placement: motivation is an individual-level process; leadership, communication, power/politics, and conflict sit at the group-process level.',
      'When motivation falters under mistreatment, withdrawal behaviors (e.g., lateness) become more likely — an individual outcome linked to weak individual processes.',
    ],
    keyTerms: [
      {
        term: 'IPO / Organizing Framework',
        definition:
          'OB map of Inputs → Processes → Outcomes at individual, group, and organizational levels; problems are often outcomes; causes often sit in inputs and processes.',
      },
    ],
  },
  {
    id: 'ldr-d1-person-situation',
    title: 'Person–situation distinction',
    bullets: [
      'Person factors: characteristics that give individuals their unique identities.',
      'Situation factors: elements outside us that influence what we do, how we do it, and the ultimate results.',
      'Individual behavior often results from the interaction of these interdependent factors — effective managers understand the interplay, not person or situation alone.',
    ],
    keyTerms: [
      {
        term: 'Person factors',
        definition:
          'Individual characteristics that create unique identity (who the person is).',
      },
      {
        term: 'Situation factors',
        definition:
          'External elements that shape what people do, how they do it, and results.',
      },
    ],
  },
  {
    id: 'ldr-d1-problem-solving',
    title: '3-step problem solving + choosing a solution',
    bullets: [
      'Structure and rigor: (1) Define the problem, (2) Identify the causes, (3) Recommend / select a solution.',
      'Use the Organizing Framework: define problems as outcomes; look for causes in inputs and processes (person and situation).',
      'When selecting the most effective solution, weigh: selection criteria (profits, impact on others, reputation with customers/community, org values, ethics); consequences (who wins/loses, ideal vs practical, perfection vs excellence, superior vs satisfactory); choice process (individual, team, or third party — and the decision method if multiple people); necessary resources to implement.',
    ],
    keyTerms: [
      {
        term: '3-step problem-solving approach',
        definition:
          'Define the problem → identify the causes → recommend/select a solution (using the OB organizing framework).',
      },
    ],
  },
  {
    id: 'ldr-d1-team-myths',
    title: '“Keys to team success” — common myths',
    bullets: [
      'Class flags claims that are often treated as automatic keys but are misleading: harmony is always required; more people = more ideas = more success; rotating members always reduces complacency and creative abrasion; strong hands-on leadership is always best; members must always subordinate self-interest for the team.',
      'Effective teams manage conflict productively (creative abrasion can help), size carefully, and balance leadership/self-management and individual with collective goals — not blind obedience to those myths.',
    ],
  },
  {
    id: 'ldr-c1-levels',
    title: 'Individual vs group processes (exam focus)',
    bullets: [
      'Group-level processes include communication, conflict, power, politics — and leadership.',
      'Motivation is primarily an individual-level process — not a group-level process in the standard OB model.',
      'When motivation falters after prolonged mistreatment, people often show withdrawal / neglect behaviors (e.g., showing up late) rather than extra-effort or citizenship behaviors.',
    ],
    keyTerms: [
      {
        term: 'Withdrawal / neglect',
        definition:
          'Reduced engagement behaviors (lateness, reduced effort, skipping optional meetings) that often appear when motivation drops under poor treatment.',
      },
    ],
  },
  {
    id: 'ldr-c1-attitudes',
    title: 'Attitudes and their components',
    bullets: [
      'Attitudes are evaluative statements or judgments — favorable or unfavorable — about objects, people, or events.',
      'Three classic components: cognitive (beliefs), affective (feelings), and behavioral (intentions / predisposition to act).',
      'Example of the behavioral component: “I’m going to look for another job that pays better.”',
      'In the IPO model, attitudes appear as an individual-level outcome (with stress), shaped by processes like perception and motivation.',
    ],
    keyTerms: [
      {
        term: 'Attitude',
        definition:
          'Evaluative statement or judgment, favorable or unfavorable, about an object, person, or event.',
      },
      {
        term: 'Behavioral component of an attitude',
        definition:
          'An intention or predisposition to behave in a certain way toward someone or something.',
      },
    ],
  },
  {
    id: 'ldr-c1-dissonance',
    title: 'Cognitive dissonance',
    bullets: [
      'Cognitive dissonance = perceived contradictions between attitudes and behavior (or between two cognitions).',
      'People typically reduce dissonance by: changing behavior, changing attitudes/beliefs, or rationalizing (minimizing importance, adding justifying cognitions).',
      'Day 2 adds: belittle the importance of the inconsistent behavior; find consonant elements that outweigh dissonant ones.',
      'What is not a dissonance-reduction response: admitting the attitude–behavior conflict and saying you’ll keep doing the behavior anyway with no change or justification.',
      'Courier example: speeding while seeing yourself as law-abiding — likely responses include changing behavior, minimizing (“everyone speeds”), justifying with job needs, or reframing the rule; “it’s wrong but I’ll keep speeding” leaves the dissonance unresolved.',
    ],
    keyTerms: [
      {
        term: 'Cognitive dissonance',
        definition:
          'Incompatibility an individual perceives between two or more attitudes, or between attitude and behavior.',
      },
    ],
  },
  {
    id: 'ldr-c1-satisfaction',
    title: 'Job satisfaction outcomes & POS',
    bullets: [
      'Three major outcomes of job satisfaction emphasized in OB: job performance, customer satisfaction, and life satisfaction.',
      'In the U.S., people are more likely to view work as an exchange than as a moral obligation.',
      'Perceived organizational support (POS): belief that the organization values your contributions and cares about your well-being.',
      'POS tends to matter more in countries where power distance is lower — employees expect more egalitarian, reciprocal support.',
    ],
    keyTerms: [
      {
        term: 'Job satisfaction outcomes (core trio)',
        definition:
          'Job performance, customer satisfaction, and life satisfaction.',
      },
      {
        term: 'Perceived organizational support (POS)',
        definition:
          'Degree to which employees believe the organization values their contribution and cares about their well-being; especially consequential where power distance is lower.',
      },
      {
        term: 'Power distance',
        definition:
          'Extent to which a society accepts unequal power distribution in institutions and organizations.',
      },
    ],
  },
  {
    id: 'ldr-d2-tpb',
    title: 'Ajzen’s theory of planned behavior',
    bullets: [
      'Personal attitudes influence behavior through intentions — not directly in one hop.',
      'Ajzen’s theory of planned behavior (TPB): attitudes (and related beliefs) shape behavioral intentions; intentions then predict behavior.',
      'Managers who want behavior change often need to address attitudes and the intention pathway — not only rules or incentives.',
    ],
    keyTerms: [
      {
        term: 'Theory of planned behavior (Ajzen)',
        definition:
          'Framework where attitudes affect behavioral intentions, and intentions predict subsequent behavior.',
      },
    ],
  },
  {
    id: 'ldr-d2-four-attitudes',
    title: 'Four potent workplace attitudes',
    bullets: [
      'Some workplace attitudes matter more than others. Four especially powerful ones: job satisfaction, employee engagement, organizational commitment, and perceived organizational support (POS).',
      'Job satisfaction: affective/emotional response toward various facets of one’s job — how much the individual likes the job.',
      'Employee engagement: extent employees give their all to work roles — includes feelings of urgency, focus, intensity, and enthusiasm.',
      'Organizational commitment: extent an employee identifies with the organization and is committed to its goals.',
      'Perceived organizational support (POS): extent employees believe the organization values their contributions and genuinely cares about their well-being.',
    ],
    keyTerms: [
      {
        term: 'Employee engagement',
        definition:
          'Extent employees invest fully in work roles — urgency, focus, intensity, and enthusiasm.',
      },
      {
        term: 'Organizational commitment',
        definition:
          'Extent an employee identifies with the organization and is committed to its goals.',
      },
    ],
  },
  {
    id: 'ldr-d2-attitude-outcomes',
    title: 'Outcomes linked to key attitudes',
    bullets: [
      'Organizational commitment → greater employee retention; greater motivation to pursue organizational goals.',
      'Employee engagement → increased customer loyalty and satisfaction; increased employee performance and well-being; improved financial performance.',
      'Perceived organizational support → increased organizational commitment and job satisfaction; more organizational citizenship behavior (OCB) and task performance; lower turnover.',
      'These four attitudes are related to important work outcomes — diagnosing weak attitudes can predict withdrawal, CWB, or performance gaps.',
    ],
    keyTerms: [
      {
        term: 'Organizational citizenship behavior (OCB)',
        definition:
          'Discretionary behaviors that benefit the organization beyond formal job requirements — often linked to satisfaction, POS, and commitment.',
      },
    ],
  },
  {
    id: 'ldr-d2-dissatisfaction',
    title: 'Responses to job dissatisfaction (EVLN)',
    bullets: [
      'When employees are dissatisfied, responses vary along two dimensions: constructive vs destructive, and active vs passive.',
      'Active + constructive = Voice — actively and constructively trying to improve conditions (speak up, propose fixes).',
      'Passive + constructive = Loyalty — passively but optimistically waiting for conditions to improve.',
      'Active + destructive = Exit — leaving the organization or job.',
      'Passive + destructive = Neglect — passively allowing conditions to worsen (reduced effort, lateness, ignoring responsibilities).',
      'Destructive responses harm the organization; constructive responses try to fix the situation. Active responses take initiative; passive responses withhold action.',
    ],
    keyTerms: [
      {
        term: 'EVLN model',
        definition:
          'Exit, Voice, Loyalty, Neglect — four responses to dissatisfaction mapped on active/passive and constructive/destructive axes.',
      },
      {
        term: 'Voice (dissatisfaction response)',
        definition:
          'Active, constructive response — attempting to improve dissatisfying conditions.',
      },
      {
        term: 'Neglect (dissatisfaction response)',
        definition:
          'Passive, destructive response — allowing conditions to worsen through reduced effort or inattention.',
      },
    ],
  },
  {
    id: 'ldr-d2-cwb',
    title: 'Counterproductive work behavior (CWB)',
    bullets: [
      'Counterproductive work behaviors (CWB) actively damage the organization.',
      'Examples: stealing, behaving aggressively toward coworkers, chronic lateness or absenteeism.',
      'CWB is inversely related to job satisfaction — dissatisfied employees are more likely to engage in destructive behaviors.',
      'Neglect (passive destructive) and CWB (active destructive) are different: neglect is withdrawal; CWB is intentional harm or rule-breaking.',
    ],
    keyTerms: [
      {
        term: 'Counterproductive work behavior (CWB)',
        definition:
          'Actions that actively damage the organization — theft, aggression toward coworkers, lateness, absenteeism.',
      },
    ],
  },
  {
    id: 'ldr-d2-js-outcomes',
    title: 'Job satisfaction outcome map (Day 2)',
    bullets: [
      'Job satisfaction links to both attitudinal and behavioral outcomes — some relationships are inverse (marked * below).',
      'Attitudinal outcomes: higher motivation and job involvement; lower withdrawal cognitions* and perceived stress*.',
      'Behavioral outcomes: higher job performance and OCB; lower CWB* and turnover*.',
      'Inverse relationships (*): satisfaction tends to reduce withdrawal thoughts, stress, counterproductive behavior, and turnover — and increase positive outcomes on the other side.',
      'Day 1 also highlights job performance, customer satisfaction, and life satisfaction as satisfaction outcomes — Day 2 adds the fuller OB outcome web (motivation, involvement, OCB, CWB, turnover).',
    ],
    keyTerms: [
      {
        term: 'Job involvement',
        definition:
          'Degree to which a person psychologically identifies with and is engaged in their work — positively linked to job satisfaction.',
      },
      {
        term: 'Withdrawal cognitions',
        definition:
          'Thoughts about leaving the job or organization — inversely related to job satisfaction.',
      },
    ],
  },
]

export const leadershipFlashcards: Flashcard[] = [
  {
    id: 'fc-ldr-1',
    topic: 'OB definition',
    front: 'Define organizational behavior (OB).',
    back: 'The study of the impact that individuals, groups, and structure have on behavior within organizations (to improve effectiveness).',
  },
  {
    id: 'fc-ldr-2',
    topic: 'IPO',
    front: 'What are the three columns of the basic OB (IPO) model?',
    back: 'Inputs → Processes → Outcomes (with feedback from outcomes to inputs), each split into individual, group, and organizational levels.',
  },
  {
    id: 'fc-ldr-3',
    topic: 'IPO',
    front: 'Name group-level processes; which common topic is NOT group-level?',
    back: 'Group: communication, leadership, power & politics, conflict & negotiation. Motivation is individual-level.',
  },
  {
    id: 'fc-ldr-4',
    topic: 'IPO',
    front: 'List individual-level outcomes in the basic OB model.',
    back: 'Attitudes and stress; job performance; citizenship behavior; withdrawal behavior.',
  },
  {
    id: 'fc-ldr-5',
    topic: 'Career',
    front: 'What tends to decide hiring vs promotion?',
    back: 'Hire: technical / job-specific skills. Promote: managing people, team skills, building relationships.',
  },
  {
    id: 'fc-ldr-6',
    topic: 'Person–situation',
    front: 'Person factors vs situation factors?',
    back: 'Person = characteristics that make individuals unique. Situation = external elements that shape actions and results. Behavior often comes from their interaction.',
  },
  {
    id: 'fc-ldr-7',
    topic: 'Problem solving',
    front: 'What are the three steps of the problem-solving approach?',
    back: 'Define the problem; identify the causes; recommend/select a solution.',
  },
  {
    id: 'fc-ldr-8',
    topic: 'Problem solving',
    front: 'When choosing a solution, what four considerations does Day 1 emphasize?',
    back: 'Selection criteria; consequences; choice process; necessary resources.',
  },
  {
    id: 'fc-ldr-9',
    topic: 'Teams',
    front: 'Name 3+ common myths presented as false “keys” to team success.',
    back: 'Harmony always; more people = more success; rotating members always helps; strong hands-on leadership always; members must always subordinate self-interest.',
  },
  {
    id: 'fc-ldr-10',
    topic: 'Withdrawal',
    front: 'If motivation falters after long supervisor abuse, what kind of behavior is most likely?',
    back: 'Withdrawal/neglect — e.g., showing up late — not citizenship or higher productivity.',
  },
  {
    id: 'fc-ldr-11',
    topic: 'Attitudes',
    front: 'Best textbook definition of an attitude?',
    back: 'Evaluative statements or judgments, favorable or unfavorable, about objects, people, or events.',
  },
  {
    id: 'fc-ldr-12',
    topic: 'Attitudes',
    front: '“I’m going to look for another job that pays better” illustrates which attitude component?',
    back: 'Behavioral (intention to act).',
  },
  {
    id: 'fc-ldr-13',
    topic: 'Dissonance',
    front: 'What is cognitive dissonance?',
    back: 'Contradictions individuals perceive between their attitudes and their behavior (or between cognitions).',
  },
  {
    id: 'fc-ldr-14',
    topic: 'Dissonance',
    front: 'How do people usually reduce cognitive dissonance? What does NOT count?',
    back: 'Change behavior, change attitude, or rationalize/minimize. Saying “it’s wrong but I’ll keep doing it” without change is not a reduction response.',
  },
  {
    id: 'fc-ldr-15',
    topic: 'Satisfaction',
    front: 'What are the three outcomes of job satisfaction?',
    back: 'Job performance, customer satisfaction, and life satisfaction.',
  },
  {
    id: 'fc-ldr-16',
    topic: 'Culture',
    front: 'In the U.S., work is more often viewed as a(n) ____ than as a moral obligation.',
    back: 'Exchange.',
  },
  {
    id: 'fc-ldr-17',
    topic: 'POS',
    front: 'POS is especially important in countries where which cultural dimension is lower?',
    back: 'Power distance.',
  },
  {
    id: 'fc-ldr-18',
    topic: 'IPO',
    front: 'Where do diversity / personality / values sit in the IPO model?',
    back: 'Individual-level inputs.',
  },
  {
    id: 'fc-ldr-19',
    topic: 'TPB',
    front: 'How do attitudes affect behavior in Ajzen’s theory of planned behavior?',
    back: 'Attitudes shape behavioral intentions; intentions then predict behavior — not a direct attitude→behavior jump.',
  },
  {
    id: 'fc-ldr-20',
    topic: 'Four attitudes',
    front: 'Name the four especially potent workplace attitudes from Day 2.',
    back: 'Job satisfaction, employee engagement, organizational commitment, perceived organizational support (POS).',
  },
  {
    id: 'fc-ldr-21',
    topic: 'Four attitudes',
    front: 'Define employee engagement and name four feeling components.',
    back: 'Extent employees give their all to work roles — urgency, focus, intensity, enthusiasm.',
  },
  {
    id: 'fc-ldr-22',
    topic: 'Four attitudes',
    front: 'Define organizational commitment vs perceived organizational support.',
    back: 'Commitment = identifies with org and its goals. POS = belief the org values your contributions and cares about your well-being.',
  },
  {
    id: 'fc-ldr-23',
    topic: 'Outcomes',
    front: 'What outcomes does organizational commitment lead to?',
    back: 'Greater employee retention; greater motivation to pursue organizational goals.',
  },
  {
    id: 'fc-ldr-24',
    topic: 'Outcomes',
    front: 'List outcomes linked to employee engagement.',
    back: 'Increased customer loyalty/satisfaction, employee performance, employee well-being, financial performance.',
  },
  {
    id: 'fc-ldr-25',
    topic: 'Outcomes',
    front: 'What outcomes does POS predict?',
    back: 'Higher commitment and job satisfaction; more OCB and task performance; lower turnover.',
  },
  {
    id: 'fc-ldr-26',
    topic: 'EVLN',
    front: 'Map the four EVLN responses to active/passive and constructive/destructive.',
    back: 'Voice = active constructive. Loyalty = passive constructive. Exit = active destructive. Neglect = passive destructive.',
  },
  {
    id: 'fc-ldr-27',
    topic: 'EVLN',
    front: 'A dissatisfied employee reduces effort and shows up late but doesn’t quit. Which EVLN response?',
    back: 'Neglect — passive destructive (allowing conditions to worsen through withdrawal).',
  },
  {
    id: 'fc-ldr-28',
    topic: 'CWB',
    front: 'Define counterproductive work behavior and give three examples.',
    back: 'Actions that actively damage the org: stealing, aggression toward coworkers, chronic lateness/absenteeism.',
  },
  {
    id: 'fc-ldr-29',
    topic: 'Job satisfaction',
    front: 'Which job satisfaction outcomes are inversely related (*)?',
    back: 'Withdrawal cognitions, perceived stress, CWB, and turnover — satisfaction lowers these.',
  },
  {
    id: 'fc-ldr-30',
    topic: 'Job satisfaction',
    front: 'Name positive attitudinal and behavioral outcomes of job satisfaction.',
    back: 'Attitudinal: motivation, job involvement. Behavioral: job performance, OCB.',
  },
  {
    id: 'fc-ldr-31',
    topic: 'Dissonance',
    front: 'Name three ways to reduce cognitive dissonance (Day 2 list).',
    back: 'Change attitudes, behaviors, or both; belittle the importance of the inconsistent behavior; find consonant elements that outweigh dissonant ones.',
  },
]

export const leadershipQuizzes: Quiz[] = [
  {
    id: 'quiz-ldr-d1-intro',
    title: 'Day 1 — Intro to Management',
    description:
      'IPO model, person–situation, 3-step problem solving, hire vs promote, and team myths from Z370 Day 1.',
    questions: [
      {
        id: 'ld1-q1',
        prompt:
          'In the basic OB model, which set is correctly placed as group-level processes?',
        choices: [
          'Motivation, perception, decision making',
          'Communication, leadership, power and politics, conflict and negotiation',
          'Diversity, personality, values',
          'Productivity and survival',
        ],
        correctIndex: 1,
        explanation:
          'Group processes include communication, leadership, power/politics, and conflict. Motivation is an individual process.',
      },
      {
        id: 'ld1-q2',
        prompt:
          'According to the IPO / organizing framework, problems are most often defined in terms of ____, while causes are commonly found in ____.',
        choices: [
          'inputs; outcomes only',
          'outcomes; inputs and processes',
          'processes; unrelated industry trends only',
          'culture; technical skills only',
        ],
        correctIndex: 1,
        explanation:
          'Define problems as outcomes; hunt for causes in inputs and processes (person and situation).',
      },
      {
        id: 'ld1-q3',
        prompt: 'The three steps of the problem-solving approach are:',
        choices: [
          'Brainstorm → vote → implement with no analysis',
          'Define the problem → identify the causes → recommend/select a solution',
          'Hire → train → promote',
          'Inputs → ignore processes → hope for outcomes',
        ],
        correctIndex: 1,
        explanation:
          'Day 1 / Kinicki-style approach: define problem, identify causes, then recommend a solution.',
      },
      {
        id: 'ld1-q4',
        prompt:
          'When selecting the most effective solution, which consideration asks who wins vs loses and ideal vs practical options?',
        choices: [
          'Necessary resources',
          'Choice process',
          'Consequences',
          'Person factors only',
        ],
        correctIndex: 2,
        explanation:
          'Consequences include trade-offs (winners/losers, ideal vs practical, perfection vs excellence, superior vs satisfactory).',
      },
      {
        id: 'ld1-q5',
        prompt: 'Person factors are best described as:',
        choices: [
          'External elements that shape what we do and the results',
          'Characteristics that give individuals their unique identities',
          'Only the organization’s structure and culture',
          'Exam grading policies',
        ],
        correctIndex: 1,
        explanation:
          'Person factors = identity-giving individual characteristics; situation factors = outside influences.',
      },
      {
        id: 'ld1-q6',
        prompt:
          'Criteria that often determine who is hired vs who is promoted:',
        choices: [
          'Hire on relationships; promote only on technical skills',
          'Hire on technical/job skills; promote on managing people, teams, and relationships',
          'Both decisions ignore people skills',
          'Promotion never requires team skills',
        ],
        correctIndex: 1,
        explanation:
          'Day 1: technical skills drive hiring; people/team/relationship skills drive promotion.',
      },
      {
        id: 'ld1-q7',
        prompt:
          'Which claim is best treated as a common team myth rather than a reliable “key to success”?',
        choices: [
          'Team size and conflict need deliberate management',
          'More people always means more ideas and more success',
          'Creative abrasion can sometimes help teams',
          'Self-managed teams can work in some contexts',
        ],
        correctIndex: 1,
        explanation:
          '“More people = more success” is a classic oversimplification flagged in Day 1’s false keys list.',
      },
      {
        id: 'ld1-q8',
        prompt:
          'Individual-level outcomes in the basic OB model include all except:',
        choices: [
          'Attitudes and stress',
          'Job performance',
          'Withdrawal behavior',
          'Organizational survival',
        ],
        correctIndex: 3,
        explanation:
          'Survival (and productivity) are organizational-level outcomes.',
      },
    ],
  },
  {
    id: 'quiz-ldr-ob-attitudes',
    title: 'OB basics — attitudes & satisfaction',
    description:
      'Exact items covering OB definition, levels of analysis, attitudes, dissonance, POS, and job satisfaction outcomes.',
    questions: [
      {
        id: 'lq1',
        prompt:
          'Vance has been at his job as a department manager for four years. During this time, Vance has continually been abused by his supervisor; however, he has continued to do his job well. If Vance\'s motivation falters, what behavior is Vance most likely to exhibit?',
        choices: [
          'Begin showing up for work late',
          'Bring everyone donuts',
          'Work longer hours',
          "Continue attending the monthly directors' meeting",
          'Increase productivity',
        ],
        correctIndex: 0,
        explanation:
          'When motivation drops under mistreatment, withdrawal/neglect behaviors (e.g., lateness) are most likely — not citizenship or extra effort.',
      },
      {
        id: 'lq2',
        prompt:
          'At the group level, processes can include all except which of the following?',
        choices: [
          'Politics',
          'Motivation',
          'Conflict',
          'Communication',
          'Power',
        ],
        correctIndex: 1,
        explanation:
          'Communication, conflict, power, and politics are group-level processes. Motivation is treated as an individual-level process.',
      },
      {
        id: 'lq3',
        prompt:
          'Aisha is a courier delivering parcels throughout the metropolitan area. Although she considers herself law abiding, she often breaks the speed limit while making her deliveries. Which of the following statements does NOT reflect a likely response to the conflict between her attitude and her behavior?',
        choices: [
          '"This speeding is irresponsible. From now on I am observing the speed limits."',
          '"It\'s wrong to break even minor laws, but I\'ll probably keep speeding anyway."',
          '"It\'s not a problem that I speed a little bit; it\'s not much over the limit, and everyone else speeds some."',
          '"I\'ve got to drive fast sometimes, otherwise I will not make all my deliveries and I\'ll lose clients."',
          '"The speed limits are just too low around here; anyone driving at a reasonable speed will break them."',
        ],
        correctIndex: 1,
        explanation:
          'Dissonance is reduced by changing behavior, changing beliefs, or rationalizing. Admitting it\'s wrong and continuing anyway does not reduce the conflict.',
      },
      {
        id: 'lq4',
        prompt:
          'In the United States, people are more likely to view work as a(n) ________ than as a moral obligation.',
        choices: [
          'avocation',
          'pastime',
          'recreation',
          'end',
          'exchange',
        ],
        correctIndex: 4,
        explanation:
          'U.S. work culture commonly frames employment as an economic exchange rather than a moral duty.',
      },
      {
        id: 'lq5',
        prompt:
          'Perceived organizational support (POS) is important in countries where the ________ is lower.',
        choices: [
          'individualism',
          'uncertainty avoidance',
          'power distance',
          'cognitive dissonance',
          'employer engagement',
        ],
        correctIndex: 2,
        explanation:
          'POS effects are especially important where power distance is lower — more egalitarian expectations of organizational support and reciprocity.',
      },
      {
        id: 'lq6',
        prompt:
          'The statement, "I\'m going to look for another job that pays better," is an example of the behavioral component of an attitude.',
        choices: ['True', 'False'],
        correctIndex: 0,
        explanation:
          'True — the behavioral component is an intention or predisposition to act.',
      },
      {
        id: 'lq7',
        prompt:
          'Contradictions individuals might perceive between their attitudes and their behavior is called cognitive dissonance.',
        choices: ['True', 'False'],
        correctIndex: 0,
        explanation:
          'True — that is the definition of cognitive dissonance.',
      },
      {
        id: 'lq8',
        prompt:
          '________ is the study of the impact that individuals, groups, and structure have on behavior within organizations.',
        choices: [
          'Performance management',
          'Leadership',
          'Employee relations',
          'Organizational strategy',
          'Organizational behavior',
        ],
        correctIndex: 4,
        explanation:
          'That is the standard definition of organizational behavior (OB).',
      },
      {
        id: 'lq9',
        prompt: 'What are the three outcomes of job satisfaction?',
        choices: [
          'Pay, job performance, customer satisfaction',
          'Pay, attitudes, customer satisfaction',
          'Attitudes, behaviors, engagement',
          'Job performance, customer satisfaction, life satisfaction',
          'Pay, personality, turnover',
        ],
        correctIndex: 3,
        explanation:
          'Core outcomes highlighted in OB: job performance, customer satisfaction, and life satisfaction.',
      },
      {
        id: 'lq10',
        prompt: 'Which of the following is the best definition of attitude?',
        choices: [
          "Attitudes are the yardstick by which one measures one's actions.",
          'Attitudes indicate how one will react to a given event.',
          'Attitudes are a measure of how the worth of an object, person, or event is evaluated.',
          'Attitudes are evaluative statements or judgments, either favorable or unfavorable, about objects, people, or events.',
          'Attitudes are the emotional part of an evaluation of a person, object, or event.',
        ],
        correctIndex: 3,
        explanation:
          'Textbook definition: attitudes are evaluative statements/judgments about objects, people, or events.',
      },
    ],
  },
  {
    id: 'quiz-ldr-d2-attitudes',
    title: 'Day 2 — Attitudes & TPB',
    description:
      'Four key attitudes, Ajzen’s TPB, cognitive dissonance, and attitude-outcome links.',
    questions: [
      {
        id: 'ld2-q1',
        prompt:
          'In Ajzen’s theory of planned behavior, attitudes most directly influence behavior through:',
        choices: [
          'Immediate automatic reflexes',
          'Behavioral intentions',
          'Organizational structure only',
          'Group-level politics',
        ],
        correctIndex: 1,
        explanation:
          'TPB path: attitudes → intentions → behavior. Managers must address the intention pathway.',
      },
      {
        id: 'ld2-q2',
        prompt:
          'Which attitude reflects the extent employees give their all — with urgency, focus, intensity, and enthusiasm?',
        choices: [
          'Organizational commitment',
          'Employee engagement',
          'Perceived organizational support',
          'Cognitive dissonance',
        ],
        correctIndex: 1,
        explanation:
          'Employee engagement = full investment in work roles with urgency, focus, intensity, enthusiasm.',
      },
      {
        id: 'ld2-q3',
        prompt:
          'Organizational commitment is best defined as:',
        choices: [
          'Belief the org values your contributions and cares about your well-being',
          'Extent an employee identifies with the organization and is committed to its goals',
          'Affective response toward facets of one’s job',
          'Intention to steal from the organization',
        ],
        correctIndex: 1,
        explanation:
          'Commitment = identification with the org + commitment to its goals. POS is the “values/cares” belief.',
      },
      {
        id: 'ld2-q4',
        prompt:
          'Perceived organizational support (POS) is most likely to increase:',
        choices: [
          'Turnover and CWB',
          'OCB, task performance, commitment, and job satisfaction',
          'Withdrawal cognitions only',
          'Power distance',
        ],
        correctIndex: 1,
        explanation:
          'POS → higher commitment, satisfaction, OCB, task performance, and lower turnover.',
      },
      {
        id: 'ld2-q5',
        prompt:
          'Employee engagement is linked to which set of outcomes?',
        choices: [
          'Only lower turnover',
          'Customer loyalty/satisfaction, employee performance, well-being, and financial performance',
          'Only increased CWB',
          'Only organizational survival at the group level',
        ],
        correctIndex: 1,
        explanation:
          'Engagement ripples to customers, individual performance, well-being, and firm financial results.',
      },
      {
        id: 'ld2-q6',
        prompt:
          'To reduce cognitive dissonance, people may:',
        choices: [
          'Only ignore the problem with no attitude or behavior change',
          'Change attitudes, behaviors, or both; belittle importance; or find consonant elements outweighing dissonant ones',
          'Only increase the inconsistent behavior',
          'Only blame coworkers',
        ],
        correctIndex: 1,
        explanation:
          'Day 2 reduction paths: change cognitions/behavior, minimize importance, or emphasize consistent elements.',
      },
      {
        id: 'ld2-q7',
        prompt:
          'Job satisfaction is best described as:',
        choices: [
          'Extent of identification with organizational goals',
          'An affective/emotional response toward facets of one’s job — how much the individual likes the job',
          'Only the cognitive belief that work is moral duty',
          'Passive destructive withdrawal',
        ],
        correctIndex: 1,
        explanation:
          'Job satisfaction = affective evaluation of job facets — liking the job.',
      },
      {
        id: 'ld2-q8',
        prompt:
          'Which job satisfaction outcome is inversely related (higher satisfaction → lower outcome)?',
        choices: [
          'Job involvement',
          'Organizational citizenship behavior',
          'Counterproductive work behavior',
          'Motivation',
        ],
        correctIndex: 2,
        explanation:
          'CWB, turnover, withdrawal cognitions, and perceived stress are inverse; involvement, OCB, motivation, performance are positive.',
      },
    ],
  },
  {
    id: 'quiz-ldr-d2-evln',
    title: 'Day 2 — EVLN & counterproductive behavior',
    description:
      'Map dissatisfaction responses and distinguish neglect, exit, voice, and CWB.',
    questions: [
      {
        id: 'ld2-q9',
        prompt:
          'An employee speaks up at a meeting to propose fixes for poor working conditions. This is:',
        choices: [
          'Exit',
          'Voice',
          'Loyalty',
          'Neglect',
        ],
        correctIndex: 1,
        explanation:
          'Voice = active constructive — trying to improve conditions.',
      },
      {
        id: 'ld2-q10',
        prompt:
          'A dissatisfied worker passively waits, hoping things improve without taking action. This is:',
        choices: [
          'Exit',
          'Voice',
          'Loyalty',
          'Neglect',
        ],
        correctIndex: 2,
        explanation:
          'Loyalty = passive constructive — optimistic waiting.',
      },
      {
        id: 'ld2-q11',
        prompt:
          'Quitting the organization in response to dissatisfaction is classified as:',
        choices: [
          'Active destructive (Exit)',
          'Passive constructive (Loyalty)',
          'Active constructive (Voice)',
          'Passive destructive (Neglect)',
        ],
        correctIndex: 0,
        explanation:
          'Exit = active destructive — leaving the situation.',
      },
      {
        id: 'ld2-q12',
        prompt:
          'Reduced effort, lateness, and ignoring responsibilities while staying on the job map to:',
        choices: [
          'Voice',
          'Loyalty',
          'Neglect',
          'Organizational commitment',
        ],
        correctIndex: 2,
        explanation:
          'Neglect = passive destructive — conditions worsen through withdrawal behaviors.',
      },
      {
        id: 'ld2-q13',
        prompt:
          'Counterproductive work behaviors (CWB) include:',
        choices: [
          'Organizational citizenship behavior and mentoring',
          'Stealing, aggression toward coworkers, and chronic lateness/absenteeism',
          'Voice and loyalty only',
          'Only passive constructive responses',
        ],
        correctIndex: 1,
        explanation:
          'CWB actively damages the org — theft, aggression, lateness, absence.',
      },
      {
        id: 'ld2-q14',
        prompt:
          'Neglect differs from CWB because neglect is primarily:',
        choices: [
          'Active destructive harm like theft',
          'Passive destructive withdrawal — reduced effort without necessarily intentional org damage',
          'Active constructive problem-solving',
          'The same as organizational commitment',
        ],
        correctIndex: 1,
        explanation:
          'Neglect = passive withdrawal; CWB = active damaging behaviors (theft, aggression, etc.).',
      },
      {
        id: 'ld2-q15',
        prompt:
          'Higher job satisfaction is positively related to job performance and OCB, and inversely related to:',
        choices: [
          'Job involvement and motivation',
          'CWB and turnover',
          'Employee engagement only',
          'Organizational commitment only',
        ],
        correctIndex: 1,
        explanation:
          'Inverse links: CWB, turnover, withdrawal cognitions, perceived stress. Positive: performance, OCB, involvement, motivation.',
      },
      {
        id: 'ld2-q16',
        prompt:
          'Greater organizational commitment most directly supports:',
        choices: [
          'Higher turnover and lower motivation for org goals',
          'Greater retention and motivation to pursue organizational goals',
          'Only increased CWB',
          'Only passive neglect',
        ],
        correctIndex: 1,
        explanation:
          'Commitment → retention + motivation toward org goals.',
      },
    ],
  },
  {
    id: 'quiz-ldr-personality',
    title: 'Personality — Big Five, Dark Triad & values',
    description:
      'Exact items on openness, conscientiousness, emotional stability, narcissism, Machiavellianism, values, trait activation, and situational strength.',
    questions: [
      {
        id: 'lp-q1',
        prompt:
          'Ming rates low on openness. Which of the following statements is most likely to be true about Ming?',
        choices: [
          'She will be well liked.',
          'She will be very emotionally expressive.',
          'She will be less comfortable with ambiguity.',
          'She will be quite creative.',
          'She will be quite compliant and conforming.',
        ],
        correctIndex: 2,
        explanation:
          'Low openness = preference for routine, tradition, and predictability — discomfort with ambiguity, change, and abstract novelty. Creativity and curiosity are high-openness traits.',
      },
      {
        id: 'lp-q2',
        prompt:
          'Neha is positive, optimistic, and usually happy. In which of the Big Five personality traits would Neha most likely score high?',
        choices: [
          'Emotional stability',
          'Conscientiousness',
          'Openness to experience',
          'Agreeableness',
          'Extroversion',
        ],
        correctIndex: 0,
        explanation:
          'Emotional stability (low neuroticism) = calm, confident, secure, and generally positive. Conscientiousness is organized/dependable; extraversion is outgoing/sociable.',
      },
      {
        id: 'lp-q3',
        prompt:
          'Which of the following is NOT a trait of a narcissistic individual?',
        choices: [
          'A tendency to exploit situations and people',
          'Fantasies of grand success',
          'A sense of entitlement',
          'A lack of empathy',
          'A tendency toward being insensitive',
        ],
        correctIndex: 4,
        explanation:
          'In the Dark Triad framework, exploitation, grandiosity, entitlement, and lack of empathy are narcissism markers. Insensitivity is more characteristic of psychopathy than narcissism in standard OB texts.',
      },
      {
        id: 'lp-q4',
        prompt:
          'Brenda is a highly conscientious person per the Big Five Model, so she would be ________.',
        choices: [
          'creative, curious, and artistically sensitive',
          'nervous, anxious, depressed, and insecure',
          'responsible, organized, dependable, and persistent',
          'reserved, timid, and quiet',
          'gregarious, assertive, and sociable',
        ],
        correctIndex: 2,
        explanation:
          'Conscientiousness = organized, careful, dependable, disciplined, and achievement-oriented. Creative/curious = openness; anxious = low emotional stability; reserved = introversion; gregarious = extraversion.',
      },
      {
        id: 'lp-q5',
        prompt:
          'Carlos is a very exciting person, people want to be friends with him and find his company very desirable. Carlos usually takes the lead within his circle of friends and seldom considers what others want. Most likely, Carlos has which of the Dark Triad?',
        choices: [
          'Machiavellianism and narcissism',
          'Machiavellianism',
          'Narcissism',
          'Psychopathy',
          'Psychopathy and narcissism',
        ],
        correctIndex: 2,
        explanation:
          'Charismatic, attention-seeking, self-centered leadership without regard for others’ needs fits narcissism (grandiosity + desire for admiration). Machiavellianism emphasizes strategic manipulation; psychopathy emphasizes callousness and impulsivity.',
      },
      {
        id: 'lp-q6',
        prompt:
          'At work, Gopal\'s constant refrain is, "I do what I have to do to get ahead." Gopal would be described as high Machiavellian.',
        choices: ['True', 'False'],
        correctIndex: 0,
        explanation:
          'True — high Machiavellians are pragmatic, manipulative, and willing to do whatever it takes to advance their own interests.',
      },
      {
        id: 'lp-q7',
        prompt:
          '________ represent relatively stable and enduring, basic convictions that some actions and outcomes are more morally, socially, or personally preferable than others.',
        choices: [
          'Intrinsic values',
          'Generational values',
          'Organizational values',
          'Value systems',
          'Values',
        ],
        correctIndex: 4,
        explanation:
          'Values are enduring beliefs about what is desirable or preferable. Value systems are broader frameworks; organizational/generational values are subsets or contexts.',
      },
      {
        id: 'lp-q8',
        prompt:
          'A commission-based compensation plan would likely activate the extraversion trait because extraverts are more reward-sensitive, than, say, open people. This is an example of ________.',
        choices: [
          'trait-activation theory',
          'cognitive dissonance theory',
          'situation strength theory',
          'instrumental values framework',
          'organizational citizenship theory',
        ],
        correctIndex: 0,
        explanation:
          'Trait activation theory: situational cues (here, pay-for-performance rewards) make certain traits (extraversion/reward sensitivity) more likely to be expressed in behavior.',
      },
      {
        id: 'lp-q9',
        prompt:
          'Joe, a paramedic, is a very self-directed person and does not need step-by-step instructions in his work. According to the idea of situational strength, if Joe\'s supervisor gives him detailed instructions on how to bandage a broken finger, Joe will perceive this as his manager ________.',
        choices: [
          'using good quality control',
          'not having enough to do with her own time',
          'being concerned for his well being',
          'being neurotic and narcissistic',
          'not having faith in his abilities',
        ],
        correctIndex: 4,
        explanation:
          'Strong situations (detailed directives) constrain self-expression. For a self-directed employee, micromanagement signals the supervisor does not trust his competence.',
      },
      {
        id: 'lp-q10',
        prompt:
          'The abilities needed to perform mental activities-thinking, reasoning, and problem solving-are also known as ________.',
        choices: [
          'physical abilities',
          'athletic abilities',
          'intellectual abilities',
          'cognitive abilities',
          'proactive abilities',
        ],
        correctIndex: 3,
        explanation:
          'Cognitive abilities = mental capacities for thinking, reasoning, and problem solving. Intellectual abilities is a close synonym, but Robbins/Kinicki OB uses “cognitive abilities” as the standard term.',
      },
    ],
  },
  {
    id: 'quiz-ldr-emotions-moods',
    title: 'Emotions, moods & emotional intelligence',
    description:
      'Universal emotions, EI, emotions vs moods, affect intensity, and how stressful events shape mood.',
    questions: [
      {
        id: 'lem-q1',
        prompt:
          'Anger, fear, sadness, happiness, disgust, and ________ are the six universal emotions.',
        choices: ['surprise', 'love', 'envy', 'hate', 'jealousy'],
        correctIndex: 0,
        explanation:
          'Paul Ekman’s research identifies six universal emotions: anger, fear, sadness, happiness, disgust, and surprise.',
      },
      {
        id: 'lem-q2',
        prompt:
          'Which of the following statements is true regarding emotional intelligence (EI)?',
        choices: [
          'EI is a simple, straightforward concept.',
          'Evidence suggests that EI is not genetically influenced.',
          'EI can be measured easily.',
          'Evidence suggests that a person\'s performance on the job is independent of her EI.',
          'EI is related to a person\'s ability to detect emotions in others.',
        ],
        correctIndex: 4,
        explanation:
          'EI involves perceiving, understanding, and managing emotions — including detecting emotions in others. It is multidimensional, partly heritable, hard to measure cleanly, and linked to job performance.',
      },
      {
        id: 'lem-q3',
        prompt: 'Emotions are caused by specific events.',
        choices: ['True', 'False'],
        correctIndex: 0,
        explanation:
          'True — emotions are typically brief, intense reactions to specific events. Moods are more diffuse and less tied to a particular trigger.',
      },
      {
        id: 'lem-q4',
        prompt:
          '________ indicates a person\'s ability to perceive emotions in oneself and others, to understand the meaning of these emotions, and regulate his/her own emotions accordingly.',
        choices: [
          'Confirmation bias',
          'Cognitive dissonance',
          'Cognitive distortion',
          'Emotional dissonance',
          'Emotional intelligence',
        ],
        correctIndex: 4,
        explanation:
          'Emotional intelligence (EI) = perceiving, understanding, and regulating emotions in self and others.',
      },
      {
        id: 'lem-q5',
        prompt:
          'Which of the following terms best describes feelings that tend to be less intense than emotions?',
        choices: ['Cognition', 'Thoughts', 'Reactions', 'Moods', 'Affect'],
        correctIndex: 3,
        explanation:
          'Moods are feelings that tend to be less intense than emotions and last longer. Affect is the broader umbrella term for both.',
      },
      {
        id: 'lem-q6',
        prompt:
          'Which of the following is the term used for the strength with which individuals experience emotion?',
        choices: [
          'Positivity offset',
          'Emotional dissonance',
          'Affect intensity',
          'Emotional labor',
          'Emotional intelligence',
        ],
        correctIndex: 2,
        explanation:
          'Affect intensity = how strongly a person experiences emotions. Emotional labor is managing displayed emotions for a job role.',
      },
      {
        id: 'lem-q7',
        prompt:
          'When his son won the regional Spelling Bee, Mario immediately felt a surge of joy, which turned into a feeling of satisfaction that lasted for several weeks. What is one of the reasons that Mario\'s feeling of satisfaction might be categorized as a mood and NOT an emotion?',
        choices: [
          'It is expressed on his face.',
          'It has a lengthy duration.',
          'It is brought about by a specific event.',
          'It is a very strong feeling.',
          'It is a positive feeling.',
        ],
        correctIndex: 1,
        explanation:
          'Moods last longer than emotions. The initial joy was a brief emotion; weeks-long satisfaction fits mood duration.',
      },
      {
        id: 'lem-q8',
        prompt: 'Which of the following statements is true regarding moods?',
        choices: [
          'Moods are less cognitive in nature than emotions.',
          'Moods don\'t last longer than emotions.',
          'Moods are generally not indicated by distinct facial expressions.',
          'Moods are more action oriented in nature, as compared to emotions.',
          'Moods are more intense feelings than emotions.',
        ],
        correctIndex: 2,
        explanation:
          'Moods are usually not shown through distinct facial expressions, tend to last longer, and are less intense and less action-oriented than emotions.',
      },
      {
        id: 'lem-q9',
        prompt: 'What effect do stressful events typically have on mood?',
        choices: [
          'Positive',
          'Negative',
          'Long-term positive',
          'Short-term positive but long-term negative',
          'Short-term positive',
        ],
        correctIndex: 1,
        explanation:
          'Stressful events typically produce negative moods.',
      },
      {
        id: 'lem-q10',
        prompt:
          'Joanna and Rahul are working as a team on a project for the Almeida Company. Rahul\'s tardiness causes the team to miss an important deadline. Joanna yells at Rahul in anger for his mistake. Which of the following terms best describes the intense feelings that Joanna directs at Rahul?',
        choices: [
          'Emotional labor',
          'Emotions',
          'Affect',
          'Cognition',
          'Moods',
        ],
        correctIndex: 1,
        explanation:
          'Joanna\'s anger is an intense, event-driven reaction — an emotion, not a longer-lasting mood or the managed display of emotional labor.',
      },
    ],
  },
]
