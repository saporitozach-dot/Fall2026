import type { Flashcard, NoteSection, Quiz } from './types'

/** I-Core Leadership (Z370) — Day 1 Intro to Management + OB attitudes foundations */
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
]
