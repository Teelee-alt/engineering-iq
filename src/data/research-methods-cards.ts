export interface ExamCard {
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic?: string;
}

export const RESEARCH_METHODS_CARDS: ExamCard[] = [
  // ============================================
  // TOPIC 1: SAMPLING METHODS & TECHNIQUES
  // ============================================
  
  {
    topic: 'Sampling Methods & Techniques',
    question: 'What is Probability Sampling?',
    answer: `**Probability Sampling** is a method where every member of the population has a known, non-zero chance of being selected. Selection is random, allowing statistical inference and estimation of sampling error. Examples include:
- Simple random sampling
- Stratified random sampling  
- Systematic sampling
- Cluster sampling
- Multistage sampling`,
    difficulty: 'easy'
  },
  
  {
    topic: 'Sampling Methods & Techniques',
    question: 'Define Non-Probability Sampling with Examples',
    answer: `**Non-Probability Sampling** is based on non-random criteria (e.g., convenience, judgment). Not every member has a known chance of inclusion. Results cannot be generalised with statistical confidence but are cheaper and faster.

| Type | Definition | Example |
|------|-----------|---------|
| **Convenience** | Select easily available subjects | Survey students in your class |
| **Purposive** | Intentional selection based on criteria | Interview only senior engineers with 10+ years experience |
| **Quota** | Fill pre-set quotas per stratum | Need 20 men, 20 women engineers |
| **Snowball** | Referrals from initial respondents | Chain referral in hard-to-reach populations |`,
    difficulty: 'medium'
  },
  
  {
    topic: 'Sampling Methods & Techniques',
    question: 'Explain Simple Random Sampling with Formula',
    answer: `**Simple Random Sampling** gives each population element equal and independent chance of selection.

**Method:** Use random number tables, lottery, or random generator.

**Formula:** $P(\text{selection}) = \\frac{1}{N}$ where N = population size

**Worked Example:**
- Population: 500 registered electricians
- Required sample: 50 electricians
- Assign numbers 1–500 to each
- Use random number generator to select 50 numbers
- Contact electricians with those numbers
- Every electrician has exactly 1/500 = 0.2% chance of selection`,
    difficulty: 'medium'
  },
  
  {
    topic: 'Sampling Methods & Techniques',
    question: 'Explain Stratified Random Sampling with Example',
    answer: `**Stratified Random Sampling** divides population into homogeneous subgroups (strata) and randomly samples from each, often proportionally.

**Why use:** Ensures all subgroups represented; reduces sampling error for stratified populations.

**Worked Example:**
- Company workforce: 60% apprentices, 40% journeymen (total 500)
- Stratify: Apprentices = 300, Journeymen = 200
- Sample proportionally: 60 apprentices, 40 journeymen
- Randomly select 60 from 300 apprentices; 40 from 200 journeymen
- Total sample = 100 (20% of population, maintaining 60:40 ratio)

**Result:** Sample composition matches population exactly.`,
    difficulty: 'medium'
  },
  
  {
    topic: 'Sampling Methods & Techniques',
    question: 'Derive and Apply Systematic Sampling Formula',
    answer: `**Systematic Sampling** selects every k-th element after random start.

**Formula:** $k = \\frac{\\text{Population size}}{\\text{Sample size}}$

**Worked Example:**
- Population size: 1,000 employees
- Required sample: 100 employees
- Calculate k: $k = \\frac{1000}{100} = 10$
- Random start between 1–10: say 7
- Select: 7, 17, 27, 37, 47, 57, 67...
- Continue until reaching 100 selections

**Advantages:** Simple, systematic spacing, often more accurate than simple random if population ordered randomly.`,
    difficulty: 'hard'
  },
  
  {
    topic: 'Sampling Methods & Techniques',
    question: 'Distinguish Cluster vs. Multistage Sampling',
    answer: `| Feature | Cluster Sampling | Multistage Sampling |
|---------|------------------|---------------------|
| **Definition** | Divide population into clusters; randomly select clusters; survey ALL in selected clusters | Apply multiple sampling methods in successive stages |
| **Stages** | One stage | Two or more stages |
| **Cost** | Low – only selected clusters surveyed | Moderate – staged approach |
| **Example** | Select 10 of 50 suburbs; interview EVERY electrician in those 10 | Stage 1: Select districts; Stage 2: Select towns in districts; Stage 3: Select households in towns |
| **When used** | Geographically spread populations | Large populations across hierarchical divisions |

**Practical use:** Electrical workers survey in province uses multistage: districts → towns → individual workers.`,
    difficulty: 'hard'
  },
  
  // ============================================
  // TOPIC 2: RESEARCH DESIGN & METHODOLOGY
  // ============================================
  
  {
    topic: 'Research Design & Methodology',
    question: 'Define Research Design and State Its Importance',
    answer: `**Research Design** is the overall strategy or blueprint that guides data collection, measurement, and analysis.

**Key Characteristics:**
- Ensures research question answered validly
- Reduces bias systematically
- Enables appropriate statistical analysis
- Allows replication by others
- Allocates resources efficiently

**Importance:**
1. Provides clear structure and direction
2. Maximizes reliability and reduces errors
3. Enables valid conclusions
4. Ensures ethical compliance
5. Facilitates replication and verification`,
    difficulty: 'easy'
  },
  
  {
    topic: 'Research Design & Methodology',
    question: 'Describe Laboratory Experiment Procedures (8-step process)',
    answer: `**Laboratory Experiment Procedure:**

1. **Define variables**
   - Independent variable (manipulated)
   - Dependent variable (measured)
   - Control variables (held constant)

2. **Formulate hypothesis** – Testable prediction

3. **Control extraneous variables** – Temperature, humidity, voltage standardised

4. **Random assignment** – Subjects randomly assigned to experimental/control groups

5. **Manipulate independent variable** – Apply treatment (e.g., change circuit configuration)

6. **Measure dependent variable** – Record outcomes (power output, efficiency)

7. **Analyse results** – Statistical tests comparing groups

8. **Draw conclusions** – Accept or reject hypothesis

**Example:** Test if increasing heatsink surface area reduces transistor temperature. Control: ambient temp, load current. Measure: junction temperature. Compare experimental vs. control group.`,
    difficulty: 'medium'
  },
  
  {
    topic: 'Research Design & Methodology',
    question: 'Compare Exploratory, Descriptive, and Causal Research Designs',
    answer: `| Aspect | Exploratory | Descriptive | Causal |
|--------|-------------|-------------|---------|
| **Purpose** | Explore poorly understood problem; generate hypotheses | Describe characteristics, patterns, behaviours | Determine cause-effect relationships |
| **Research Q** | "What is happening?" | "What? Where? When? How many?" | "Why does X cause Y?" |
| **Design** | Loose, flexible, evolving | Structured, pre-planned | Highly structured, controlled |
| **Methods** | Literature review, interviews, focus groups, case studies | Surveys, observation, correlation | Experiments (lab/field), quasi-experiments |
| **Variable control** | None | None | Independent variable manipulated |
| **Control groups** | Not used | Not used | Essential for comparison |
| **Analysis** | Qualitative, thematic | Frequency, percentage, average | Hypothesis testing, ANOVA, regression |
| **Outcome** | Refined questions, insights, hypotheses | Profiles, distributions, descriptions | Causal claims supported by data |
| **Example** | Why do new motors fail intermittently? | How many transformers fail annually? What age groups? | Does increased load cause temperature rise? |`,
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Design & Methodology',
    question: 'Describe Case Study Research Design with Characteristics',
    answer: `**Case Study** is an in-depth, intensive investigation of a single case (person, organisation, event, project) in real-life context.

**Main Features:**
1. **In-depth examination** – Single unit studied intensively
2. **Context-bound** – Real-life setting; boundaries blurred
3. **Multiple data sources** – Interviews, documents, observations, artefacts
4. **Holistic perspective** – Understanding whole case, not isolated variables
5. **Particularistic** – Focus on specific instance, not generalisation
6. **Iterative analysis** – Data collection and analysis simultaneous

**Advantages:**
- Rich contextual understanding
- Identifies complex mechanisms
- Suitable for exploring "how" and "why"

**Limitations:**
- Cannot generalise to population
- Time-consuming
- Researcher bias possible

**Worked Example:** Case study of substation fire:
- Analyse design specifications
- Review maintenance records
- Interview operators
- Examine weather conditions at time
- Reconstruct causal sequence
- Identify root causes and recommendations`,
    difficulty: 'medium'
  },
  
  {
    topic: 'Research Design & Methodology',
    question: 'Diagram and Explain the 9-Step Research Process',
    answer: `**Research Process Flow:**

$$\\text{Problem} \\rightarrow \\text{Literature} \\rightarrow \\text{Questions} \\rightarrow \\text{Hypothesis} \\rightarrow \\text{Design}$$
$$\\downarrow \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\quad \\downarrow$$
$$\\text{Collect Data} \\rightarrow \\text{Analyse Data} \\rightarrow \\text{Interpret} \\rightarrow \\text{Report}$$

**Step Descriptions:**

| Step | Activity | Output |
|------|----------|--------|
| 1 | **Identify problem** | Gap, question, contradiction identified |
| 2 | **Review literature** | Context, existing knowledge, gaps found |
| 3 | **Research questions** | Clear, answerable questions formulated |
| 4 | **Hypothesis/objectives** | Testable predictions or SMART goals |
| 5 | **Design methodology** | Strategy, sampling, instruments, procedures |
| 6 | **Collect data** | Raw data gathered systematically |
| 7 | **Analyse data** | Patterns, relationships, summaries identified |
| 8 | **Interpret findings** | Results linked to questions and theory |
| 9 | **Report/disseminate** | Findings communicated to audiences |

**Note:** Process is often iterative; unexpected results loop back to earlier stages.`,
    difficulty: 'hard'
  },
  
  // ============================================
  // TOPIC 3: DATA COLLECTION INSTRUMENTS
  // ============================================
  
  {
    topic: 'Data Collection Instruments',
    question: 'Define Research Instrument and Provide Examples',
    answer: `**Research Instrument** is a tool used to collect, measure, and record data for a study.

**Essential Properties:**
- **Validity** – Measures what it intends to measure
- **Reliability** – Produces consistent results under same conditions
- **Objectivity** – Minimises observer bias

**Common Research Instruments:**

| Instrument | Use | Example |
|-----------|-----|---------|
| **Questionnaire** | Survey data collection | 20-item scale on workplace safety |
| **Interview guide** | Qualitative data | Semi-structured questions for engineers |
| **Observation checklist** | Behavioural recording | Tallies for safety compliance |
| **Psychological scale** | Attitude/belief measurement | Likert scale: strongly disagree (1) to strongly agree (5) |
| **Measurement tool** | Physical/quantitative data | Multimeter, oscilloscope, power meter |
| **Test** | Knowledge/skill assessment | Engineering competency exam |

**Worked Example:** Motor efficiency study uses multimeter as instrument: measures voltage, current, mechanical output to calculate efficiency ratio.`,
    difficulty: 'easy'
  },
  
  {
    topic: 'Data Collection Instruments',
    question: 'Explain Participant Observation with Advantages/Disadvantages',
    answer: `**Participant Observation** is a qualitative method where researcher becomes group member, participating in activities while observing and recording behaviour.

**Process:**
1. Researcher joins the group/organisation
2. Participates in normal activities
3. Observes behaviour systematically
4. Takes field notes during or after
5. Records interactions, decisions, relationships

**Worked Example:** Research on maintenance safety:
- Engineer joins maintenance team for 6 months
- Works alongside technicians daily
- Observes lockout/tagout procedures
- Records how decisions made in real context
- Identifies barriers to safety compliance

**Advantages:**
- Contextual richness – see real behaviour, non-verbal cues
- Access to insider perspectives
- Understanding of meanings and motivations
- Data from natural settings

**Disadvantages:**
- Reactivity (Hawthorne effect) – people change when observed
- Researcher bias – personal interpretations
- Time-consuming and labour-intensive
- Difficult to replicate exactly`,
    difficulty: 'medium'
  },
  
  {
    topic: 'Data Collection Instruments',
    question: 'Describe Action Research with Cyclical Process',
    answer: `**Action Research** is a cyclical, participatory approach simultaneously investigating a problem AND taking action to solve it.

**The Cycle:**
$$\\text{Plan} \\rightarrow \\text{Act} \\rightarrow \\text{Observe} \\rightarrow \\text{Reflect}$$

**Detailed Steps:**
1. **Plan** – Identify problem, develop intervention strategy
2. **Act** – Implement intervention/change
3. **Observe** – Collect data on outcomes, document processes
4. **Reflect** – Analyse results, identify improvements
5. **Cycle again** – Refine and repeat until problem solved

**Worked Example:** Improving electrical safety training:
- **Plan** – Design new safety module
- **Act** – Deliver to one class
- **Observe** – Measure pre/post knowledge, safety incidents
- **Reflect** – What worked? What needs changing?
- **Cycle 2** – Revise module, deliver to next cohort
- **Result** – Iteratively improved training effectiveness

**Characteristics:**
- Integrates research with intervention
- Practitioner-led improvement
- Data-informed decision making
- Cyclical refinement
- Often occurs within organisations`,
    difficulty: 'medium'
  },
  
  {
    topic: 'Data Collection Instruments',
    question: 'Define Questionnaire and Compare Question Types',
    answer: `**Questionnaire** is a series of written questions (open-ended or closed-ended) completed by respondents.

**Types:**
- **Self-administered** – postal, online, hand-delivered
- **Interviewer-administered** – face-to-face, phone, recorded

**Question Types:**

| Type | Format | Example | Pros | Cons |
|------|--------|---------|------|------|
| **Open-ended** | Blank space for response | "What causes transformer failures?" | Rich detail, unexpected insights | Time-consuming, hard to analyse |
| **Closed: Yes/No** | Binary choice | "Have you attended safety training?" | Quick, simple | Limits detail |
| **Closed: Multiple choice** | Fixed options | "Frequency of maintenance: Daily/Weekly/Monthly?" | Quantifiable, consistent | Forces categories |
| **Likert scale** | Agreement scale 1–5 | "Safety training is essential" | Measurable, statistical | Assumes ordinal data |
| **Rating scale** | Numeric rating | "Rate safety awareness 1–10" | Comparative | Arbitrary anchors |

**Worked Example:** Workplace electrical safety questionnaire:
- Q1: "Have you attended safety training?" (Yes/No)
- Q2: "How often do you inspect circuit breakers?" (Daily/Weekly/Monthly/Rarely)
- Q3: "I am confident in live-line procedures" (1=Strongly disagree to 5=Strongly agree)
- Q4: "What improvements would help safety?" (Open-ended)`,
    difficulty: 'medium'
  },
  
  // ============================================
  // TOPIC 4: QUALITATIVE & QUANTITATIVE RESEARCH
  // ============================================
  
  {
    topic: 'Qualitative & Quantitative Research',
    question: 'Define Qualitative Research with Characteristics',
    answer: `**Qualitative Research** is an exploratory approach seeking to understand human behaviour, experiences, and social phenomena from the perspective of those involved.

**Core Characteristics:**
- Collects **non-numerical data** (words, images, observations)
- Uses **interpretive analysis** (coding, thematic analysis)
- Explores **meanings and context** rather than testing hypotheses
- **Flexible design** that evolves as data emerge
- **Small, purposive samples** (10–30 participants)
- **Natural settings** – real-world contexts
- **Researcher involvement** – interpretive, reflexive role

**Methods:**
- Semi-structured/unstructured interviews
- Focus groups
- Participant observation
- Ethnography
- Case studies
- Document/text analysis

**Goal:** Generate rich, contextual understanding of complex phenomena.

**Worked Example:** Understanding why engineers resist new software tool:
- Interview 15 engineers about tool adoption
- Observe how they currently work
- Identify barriers: learning curve, incompatibility, lack of training
- Develop recommendations based on their experiences`,
    difficulty: 'easy'
  },
  
  {
    topic: 'Qualitative & Quantitative Research',
    question: 'Compare Quantitative and Qualitative Research Paradigms',
    answer: `| Aspect | Quantitative | Qualitative |
|--------|--------------|-------------|
| **Data** | Numbers, measurements, statistics | Words, images, observations, text |
| **Sample** | Large (often 100+), random/probability | Small (10–30), purposive/non-probability |
| **Design** | Structured, predetermined, testing | Flexible, evolving, exploratory |
| **Control** | High – variables manipulated, controlled | Low – natural settings, minimal intervention |
| **Analysis** | Statistical tests, percentages, means | Thematic coding, content analysis, narrative |
| **Generalisation** | Aims for breadth, statistical significance | Aims for depth, contextual understanding |
| **Researcher role** | Detached, objective, neutral observer | Involved, reflexive, interpretive |
| **Reliability** | High – replicable, consistent | High – trustworthiness through rich description |
| **Validity** | Internal (causation), external (generalisation) | Internal (credibility), external (transferability) |
| **Question** | "How much?" "Does X cause Y?" | "What?" "How?" "Why?" |
| **Strength** | Generalisable findings, prediction | Deep understanding, unexpected insights |
| **Weakness** | May miss context, meaning | Not generalisable, time-consuming |
| **Example** | Survey 500 engineers on safety awareness; t-test differences | Interview 12 engineers on safety barriers; thematic analysis |`,
    difficulty: 'hard'
  },
  
  {
    topic: 'Qualitative & Quantitative Research',
    question: 'Explain Strengths and Weaknesses of Qualitative Research',
    answer: `**Strengths of Qualitative Research:**

1. **Deep understanding** – Contextual, nuanced understanding of complex issues
2. **Flexible design** – Evolves as patterns emerge; explores unexpected directions
3. **Captures perspectives** – Participants' voices, meanings, lived experiences
4. **Theory generation** – Develops hypotheses and frameworks from data
5. **Holistic view** – Examines interconnections and emergent properties
6. **Naturalistic** – Real-world settings, authentic behaviours
7. **Rich detail** – Thick descriptions, exemplary quotes

**Weaknesses of Qualitative Research:**

1. **Limited generalisation** – Findings context-specific; cannot infer to population
2. **Time-consuming** – Interviews, transcription, analysis very lengthy
3. **Researcher bias** – Interpretations influenced by researcher's perspectives
4. **Difficult replication** – Hard to replicate exactly; unique circumstances
5. **Subjective analysis** – Without statistical checks, conclusions may be biased
6. **Small samples** – Limited sample size restricts scope
7. **Resource intensive** – Requires skilled qualitative researchers

**Mitigation Strategies:**

| Weakness | Mitigation |
|----------|-----------|
| Researcher bias | Reflexivity, peer debriefing, member checking |
| Limited generalisation | Purposive sampling ensures diverse perspectives |
| Replication difficulty | Detailed methodology documentation enables similar studies |
| Subjective analysis | Systematic coding protocols, audit trails |`,
    difficulty: 'hard'
  },
  
  // ============================================
  // TOPIC 5: ETHICS IN RESEARCH
  // ============================================
  
  {
    topic: 'Ethics in Research',
    question: 'Define Research Ethics and State Its Importance (5 marks)',
    answer: `**Research Ethics** refers to the moral principles and professional standards that guide researchers to conduct studies honestly, responsibly, and with respect for participants, animals, and the environment.

**Why Ethics is Important:**

1. **Protection** – Prevents harm to participants (physical, psychological, social, economic)
2. **Trust** – Maintains public confidence in research institutions and findings
3. **Integrity** – Prevents fabrication, falsification, plagiarism
4. **Compliance** – Satisfies legal requirements (ethics board approval, informed consent)
5. **Credibility** – Ensures research community accepts and builds on findings
6. **Accountability** – Demonstrates responsible conduct to funders and society

**Core Ethical Principles:**
- Respect for persons (autonomy, informed consent)
- Beneficence (maximize benefits, minimize harm)
- Justice (fair distribution of benefits/burdens)
- Integrity (honesty, transparency)
- Accountability (responsibility for consequences)

**Regulatory Bodies:**
- Institutional Review Boards (IRBs)
- Ethics Committees
- Professional associations (IEEE, ACM)`,
    difficulty: 'easy'
  },
  
  {
    topic: 'Ethics in Research',
    question: 'Explain Four Key Ethical Principles with Examples',
    answer: `**1. Informed Consent (3 marks)**
Participants must receive FULL information:
- Purpose of study
- Procedures and time commitment
- Risks and potential discomfort
- Benefits to self and society
- Right to withdraw anytime without penalty
- Confidentiality assurances

Consent must be:
- **Voluntary** – no coercion or undue incentives
- **Documented** – typically signed form
- **Informed** – clear language, time for questions

**Example:** Before measuring electricians' reaction times, researcher explains: "You'll perform timed circuit identification tasks. Participation takes 2 hours. No risk. Your results are confidential. You can withdraw anytime. You receive £20 participation fee regardless."

---

**2. Anonymity (3 marks)**
Researcher CANNOT identify which person provided which data.

- No personal identifiers collected (names, numbers, addresses)
- Data merged with others
- Even researcher doesn't know contributor identity

**Example:** Online survey with no IP tracking, no login required, no demographic codes linking to individuals. All 500 responses treated as anonymous pool.

---

**3. Right to Service (3 marks)**
Control group participants NOT denied beneficial services.

- If intervention proves effective, must be offered to control group
- Delayed delivery acceptable
- Alternative treatments if control withholding unethical

**Example:** Safety training program study. Control group receives training AFTER study completion, not during. Results in improved safety for all.

---

**4. Voluntary Participation (3 marks)**
Participants freely choose involvement; no pressure.

- No coercion from employers, teachers, managers
- No excessive incentives
- Can withdraw without negative consequences

**Example:** Asking apprentices to participate in study; making clear: "Your participation is voluntary. Declining won't affect your grades, employment status, or any evaluations."`,
    difficulty: 'hard'
  },
  
  {
    topic: 'Ethics in Research',
    question: 'Define Pilot Study and Explain Its Role',
    answer: `**Pilot Study** is a small-scale, preliminary test of research design, instruments, and procedures before the main study.

**Purpose:**
- Identifies problems with question wording (unclear, ambiguous, leading)
- Tests timing – how long does survey actually take?
- Finds technical issues (missing response options, confusing instructions)
- Reveals logistics problems (recruitment, data collection, analysis)
- Enables refinement before expensive main study

**Worked Example:** Workplace electrical safety questionnaire
- **Pilot:** Distribute to 10 electricians
- **Findings:** 
  - Question 3 misunderstood by 7 people – wording too technical
  - Survey takes 12 min, not 5 min estimated
  - Missing response category for "sometimes"
  - 3 people cannot access online version
- **Revisions:**
  - Simplify Question 3 language
  - Revise time estimate to 15 min
  - Add "sometimes" option
  - Provide paper alternative
- **Main study:** Distribute revised version to 200 electricians

**Advantages:**
- Saves time and cost – fixes problems early
- Improves data quality
- Increases response rates
- Builds researcher confidence
- Reduces participant burden`,
    difficulty: 'easy'
  },
  
  // ============================================
  // TOPIC 6: DATA ANALYSIS & STATISTICS
  // ============================================
  
  {
    topic: 'Data Analysis & Statistics',
    question: 'Explain Roles of Statistics in Research (6 marks)',
    answer: `**1. Experimental Design**
- Determine sample size needed (power analysis)
- Design randomisation procedures
- Plan replication and block designs

**2. Data Summarisation**
- Descriptive statistics reduce large datasets to meaningful summaries
- Mean, median, mode, standard deviation, range
- Example: 1000 temperature measurements → mean = 45°C, SD = 2.3°C

**3. Statistical Inference**
- Generalise from sample to population
- Construct confidence intervals: "population mean lies between 43–47°C with 95% confidence"
- Enables hypothesis testing

**4. Relationship Identification**
- Correlation reveals strength of association (r = 0.87 = strong positive)
- Regression models relationships: Temperature = 20 + 1.5×(Load)
- Causal claims require experimental design + statistical support

**5. Reliability & Validity Testing**
- Cronbach's alpha measures internal consistency of scales (α = 0.82 = acceptable)
- Standard error assesses measurement precision
- Ensures instruments actually measure intended constructs

**6. Prediction**
- Time series forecasting: predict next month's power demand
- Regression prediction: estimate motor efficiency from design parameters
- Machine learning: classify circuit faults from sensor data`,
    difficulty: 'hard'
  },
  
  {
    topic: 'Data Analysis & Statistics',
    question: 'Define Measures of Central Tendency with Formulas',
    answer: `**Measures of Central Tendency** are single values summarising the centre or typical value of a dataset.

**1. Mean (Arithmetic Average)**
$$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n} = \\frac{x_1 + x_2 + ... + x_n}{n}$$

**Example:** Five motor efficiencies: 0.88, 0.91, 0.89, 0.90, 0.87
$$\\bar{x} = \\frac{0.88 + 0.91 + 0.89 + 0.90 + 0.87}{5} = \\frac{4.45}{5} = 0.89$$

**Properties:** 
- Uses all data
- Sensitive to outliers
- Most common for statistical tests

---

**2. Median**
Middle value when data ordered ascending. For odd n: $$\\text{position} = \\frac{n+1}{2}$$. For even n: average of two middle values.

**Example:** Five efficiencies ordered: 0.87, 0.88, 0.89, 0.90, 0.91
$$\\text{Median} = \\text{3rd value} = 0.89$$

**Properties:**
- Robust to outliers
- Useful for skewed distributions

---

**3. Mode**
Most frequently occurring value. Data may have one mode (unimodal), two (bimodal), or none.

**Example:** Failures in 20 circuits: 0, 0, 1, 1, 1, 2, 2, 3
$$\\text{Mode} = 1 \\text{ (appears 3 times)}$$

**Properties:**
- Useful for categorical data
- Identifies peak of distribution`,
    difficulty: 'medium'
  },
  
  {
    topic: 'Data Analysis & Statistics',
    question: 'Calculate Mean from Grouped Frequency Data (Worked Example)',
    answer: `**Formula for Grouped Data Mean:**
$$\\bar{x} = \\frac{\\sum (f \\cdot x_m)}{\\sum f}$$

where:
- f = frequency (count in each class)
- x_m = class midpoint = (lower + upper) / 2

**Worked Example:** Computers sold per shop in 50 stores.

**Step 1: Create frequency table with midpoints**

| Computers sold | Number of stores (f) | Midpoint (x_m) | f × x_m |
|---|---|---|---|
| 4–12 | 11 | 8 | 88 |
| 13–21 | 14 | 17 | 238 |
| 22–30 | 13 | 26 | 338 |
| 31–39 | 8 | 35 | 280 |
| 40–48 | 4 | 44 | 176 |
| **Total** | **50** | | **1120** |

**Step 2: Calculate**
$$\\bar{x} = \\frac{1120}{50} = 22.4 \\text{ computers per shop}$$

**Interpretation:** On average, each shop sold 22.4 computers.

**Note:** This is an estimate since we don't know individual shop values, only class intervals.`,
    difficulty: 'hard'
  },
  
  {
    topic: 'Data Analysis & Statistics',
    question: 'Explain Measures of Dispersion with Formulas',
    answer: `**Measures of Dispersion** describe how spread out data are around the central value.

**1. Range**
$$\\text{Range} = x_{\\text{max}} - x_{\\text{min}}$$

**Example:** Motor speeds: min 1000 RPM, max 1500 RPM
$$\\text{Range} = 1500 - 1000 = 500 \\text{ RPM}$$

**Limitation:** Only considers extremes, ignores middle 98% of data.

---

**2. Variance**
Population: $\\sigma^2 = \\frac{\\sum (x_i - \\mu)^2}{N}$

Sample: $s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n-1}$

**Interpretation:** Average squared deviation from mean. Larger variance = more spread.

---

**3. Standard Deviation**
$$\\sigma = \\sqrt{\\sigma^2} \\quad \\text{(population)} \\quad s = \\sqrt{s^2} \\quad \\text{(sample)}$$

**Example:** Motor efficiency: mean = 0.89, SD = 0.03
- Interpretation: Typical efficiency varies ±0.03 from mean
- About 68% of motors between 0.86–0.92 (within 1 SD)
- About 95% between 0.83–0.95 (within 2 SDs) – normal distribution

**Advantage:** Same units as original data; intuitive interpretation.

---

**4. Interquartile Range (IQR)**
$$\\text{IQR} = Q_3 - Q_1$$

**Interpretation:** Range of middle 50% of data. Robust to outliers.

**Summary Table:**

| Measure | Advantages | Disadvantages |
|---------|-----------|---|
| Range | Simple | Only extremes |
| Variance | Mathematical basis | Not intuitive (squared units) |
| Std Dev | Intuitive, same units | Affected by outliers |
| IQR | Robust to outliers | Ignores tails |`,
    difficulty: 'hard'
  },
  
  // ============================================
  // TOPIC 7: REPORT WRITING & DOCUMENTATION
  // ============================================
  
  {
    topic: 'Report Writing & Documentation',
    question: 'Outline Standard Research Report Chapter Structure',
    answer: `**Standard Research Report Layout:**

| Chapter | Title | Content |
|---------|-------|---------|
| **1** | **Introduction** | Background, problem statement, research questions/objectives, significance, scope, key definitions |
| **2** | **Literature Review** | Critical summary of existing research, theoretical framework, identification of gaps and contradictions |
| **3** | **Methodology** | Research design, population/sample, data collection instruments, procedures, ethical considerations, planned analysis |
| **4** | **Results/Findings** | Presentation of data: tables, figures, graphs, statistical outputs. NO interpretation yet. |
| **5** | **Discussion** | Interpretation of results, comparison with literature, practical implications, limitations, recommendations |
| **6** | **Conclusions & Recommendations** | Summary of key findings, contributions to knowledge, suggestions for practice and future research |
| | **Front Matter** | Title page, abstract, table of contents, list of figures/tables |
| | **Back Matter** | References/Bibliography, appendices, glossary |

**Professional Formatting Requirements:**
- **Headers/Footers** – Page numbers, running title
- **Table of Contents** – Lists chapters, sections, page numbers
- **Figures/Tables** – Numbered, captioned, referenced in text
- **Typography** – Consistent fonts, spacing, margins
- **Academic style** – Formal tone, third person, past tense
- **Citations** – Harvard or IEEE style throughout

**Word Count:** Thesis typically 40,000–60,000 words; papers 5,000–10,000 words.`,
    difficulty: 'easy'
  },
  
  {
    topic: 'Report Writing & Documentation',
    question: 'Define Abstract, Journal, Bibliography, and References',
    answer: `**1. Abstract**
- **Definition:** Concise summary (150–300 words) of research
- **Contents:** Background/context, research question, methodology, key findings, conclusions
- **Placement:** Beginning of report/paper
- **Importance:** 
  - Allows readers to decide relevance quickly
  - Used in indexing and databases
  - Often sole part read by busy professionals

---

**2. Journal**
- **Definition:** Peer-reviewed periodical publishing original research
- **Format:** Articles vetted by expert reviewers before publication
- **Examples:** IEEE Transactions on Power Electronics, Nature, The Lancet
- **Importance:**
  - Provides validated, authoritative sources
  - Up-to-date research findings
  - Citable references for credibility
  - Building blocks of knowledge advancement

---

**3. Bibliography**
- **Definition:** List of ALL sources consulted during research
- **Includes:** Sources cited AND those read but not cited
- **Purpose:** 
  - Shows breadth of reading/research
  - Gives credit to other authors
  - Guides readers to further resources

---

**4. References (or Reference List)**
- **Definition:** List of ONLY sources explicitly cited in text
- **Inclusion:** Every in-text citation must appear in references
- **Purpose:**
  - Allows readers to locate and verify sources
  - Enables checking author's claims
  - Prevents plagiarism through attribution
  - Establishes evidence base

**Example Comparison:**
- Paper cites 15 sources → 15 items in References
- Paper read 30 sources but cited 15 → 30 in Bibliography, 15 in References`,
    difficulty: 'medium'
  },
  
  {
    topic: 'Report Writing & Documentation',
    question: 'Provide Harvard Reference Style Examples (Books)',
    answer: `**Harvard Referencing System – Books**

**Format:**
Author(s) surname, Initial(s). (Year) *Title of book: subtitle*. Edition (if not first). Publisher.

---

**One Author:**
Floyd, T.L. (2020) *Electronics Fundamentals: Circuits, Devices and Applications*. 9th edn. Pearson.

**In-text citation:** (Floyd, 2020)

---

**Two Authors:**
Floyd, T.L. and Buchla, D.M. (2020) *Electronics Fundamentals: Circuits, Devices and Applications*. 9th edn. Pearson.

**In-text citation:** (Floyd and Buchla, 2020)

---

**Three or More Authors:**
Rashid, M.H., Muhammad, H. and Hasan, R. (2018) *Power Electronics: Circuits, Devices and Applications*. 4th edn. Pearson.

**In-text citation:** (Rashid et al., 2018)

---

**Chapter in Edited Book:**
Holmes, M. (2019) Renewable energy systems. In: Smith, J. ed. *Sustainable Engineering*. 3rd edn. Oxford University Press, pp. 245–278.

**In-text citation:** (Holmes, 2019, p. 250)

---

**Key Rules:**
- Italicise book title
- Use 'et al.' for 3+ authors (in-text)
- List ALL authors in reference list
- Include edition if not first
- Format as: Author (Year) *Title*. Publisher.`,
    difficulty: 'medium'
  },
  
  // ============================================
  // TOPIC 8: RESEARCH PARADIGMS & FRAMEWORKS
  // ============================================
  
  {
    topic: 'Research Paradigms & Frameworks',
    question: 'Define Research Paradigm and Its Components',
    answer: `**Research Paradigm** is a fundamental worldview that guides research, encompassing philosophical beliefs about the nature of reality, knowledge, and appropriate research methods.

**Three Components:**

**1. Ontology (Nature of Reality)**
- What is real? Objective or subjective?
- Does reality exist independently or is it constructed?
- Are there multiple realities or one?

**2. Epistemology (Nature of Knowledge)**
- How do we know what we know?
- What counts as valid knowledge?
- What is the relationship between knower and known?
- How is knowledge created/discovered?

**3. Methodology (Research Approach)**
- How should research be conducted?
- Which methods are appropriate?
- How is data collected and analysed?

---

**Major Research Paradigms:**

| Aspect | Positivism | Interpretivism |
|--------|-----------|---|
| **Ontology** | Objective reality; mind-independent | Subjective; socially constructed |
| **Epistemology** | Only observable/measurable facts are valid | Knowledge through interpretation and meaning |
| **Methodology** | Quantitative, experiments, statistics | Qualitative, interviews, thematic analysis |
| **Aim** | General laws, prediction | Understanding, meaning-making |

**Importance:** Paradigm influences all research decisions:
- Which questions are asked
- How data are collected
- How findings are interpreted
- What counts as evidence`,
    difficulty: 'easy'
  },
  
  {
    topic: 'Research Paradigms & Frameworks',
    question: 'Describe Positivism Paradigm with Electrical Example',
    answer: `**Positivism Paradigm Characteristics:**

**Ontology (Reality):**
- Objective reality exists independently of the researcher
- One, singular reality
- Laws of nature are discoverable

**Epistemology (Knowledge):**
- Only observable, measurable phenomena are valid knowledge
- Knowledge is value-free (researcher bias excluded)
- Universal laws apply across contexts
- Cause-effect relationships can be established

**Methodology:**
- **Quantitative research**
- Controlled experiments
- Surveys with statistical analysis
- Hypothesis testing
- Replicable procedures
- Objective measurement

**Researcher Role:**
- Detached, neutral observer
- Objective, unbiased stance
- Distance from subject matter

---

**Worked Example – Electrical Engineering:**

**Research Question:** Does increasing heatsink surface area reduce transistor temperature under load?

**Positivist Approach:**
1. **Hypothesis:** "Increasing heatsink area by 20% reduces junction temperature by ≥10°C"
2. **Variables:**
   - Independent: heatsink surface area (20%, 40%, 60% increase)
   - Dependent: junction temperature (measured with infrared thermometer)
   - Control: ambient temp, load current, measurement time, transistor type
3. **Method:** Laboratory experiment with randomised treatment order
4. **Measurement:** Precise instruments, replicable procedure
5. **Analysis:** ANOVA comparing temperature across groups
6. **Result:** Statistical significance determines acceptance of hypothesis
7. **Generalisation:** If significant, claim applies to all similar transistors

**Positivism Strengths:** Rigorous, generalisable, objective, replicable
**Limitations:** May miss contextual meanings, human factors, unexpected findings`,
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Paradigms & Frameworks',
    question: 'Describe Interpretivism Paradigm with Qualitative Example',
    answer: `**Interpretivism (Constructivism) Paradigm Characteristics:**

**Ontology (Reality):**
- Multiple, subjective realities exist
- Reality is socially constructed through human interaction
- Meanings created, not discovered

**Epistemology (Knowledge):**
- Knowledge built through interpretation and meaning-making
- Researcher and participants co-construct understanding
- Context-dependent; no universal laws
- Values and perspectives shape knowledge

**Methodology:**
- **Qualitative research**
- In-depth interviews
- Participant observation
- Case studies
- Ethnography
- Thematic analysis
- Rich description

**Researcher Role:**
- Involved, participatory stance
- Reflexive (aware of own biases)
- Interpretive, meaning-seeking
- Acknowledges subjectivity

---

**Worked Example – Electrical Engineering:**

**Research Question:** How do maintenance technicians perceive risks of working on live circuits?

**Interpretivist Approach:**
1. **Design:** Qualitative case study of one maintenance department
2. **Participants:** 12 technicians with varying experience (2–20 years)
3. **Data Collection:** 
   - Semi-structured interviews (1 hour each)
   - Participant observation during live-line work (20 hours)
   - Document review (safety records, incident reports)
4. **Analysis:**
   - Transcribe and code interviews
   - Identify themes: fear, complacency, training gaps, peer influence
   - Construct narrative of lived experiences
5. **Understanding:** How cultural context, training, supervision shape risk perception
6. **Interpretation:** Why some technicians take shortcuts despite training
7. **Outcome:** Rich description of contextual factors affecting behaviour
   - Not generalisable to all technicians
   - Transferable insights for similar contexts

**Interpretivism Strengths:** Deep understanding, contextual, captures meaning
**Limitations:** Not generalisable, time-consuming, interpretation subjective`,
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Paradigms & Frameworks',
    question: 'Compare Validity and Reliability with Types',
    answer: `**Validity: Are we measuring the RIGHT thing?**
$$\\text{Validity} = \\text{Accuracy of measurement}$$

**Types of Validity:**

**1. Internal Validity (Causation)**
- Can we claim X caused Y?
- Threats: confounding variables, selection bias, regression to mean
- Addressed by: random assignment, control groups, statistical controls
- Example: Does new teaching method (X) increase exam scores (Y)? Or did maturation/practice cause improvement?

**2. External Validity (Generalisation)**
- Can findings be generalised to other populations/settings/times?
- Threats: unrepresentative sample, artificial lab setting, unique context
- Addressed by: random sampling, naturalistic settings, diverse samples
- Example: Does 5 kW motor efficiency result apply to 50 kW motors?

**3. Construct Validity**
- Does measurement tool actually capture the construct?
- Example: Does IQ test really measure intelligence, or just test-taking ability?

**4. Content Validity**
- Does test cover all relevant aspects of construct?
- Example: Does safety awareness questionnaire assess all dimensions?

---

**Reliability: Are we getting CONSISTENT results?**
$$\\text{Reliability} = \\text{Consistency of measurement}$$

**Aspects:**

**1. Test-Retest Reliability**
- Same person, same instrument, different times → similar results?
- Example: IQ test given twice → similar scores

**2. Inter-Rater Reliability**
- Different observers rate same behaviour → similar scores?
- Example: Two raters assess safety compliance; Cronbach's α = 0.85 (acceptable)

**3. Internal Consistency**
- All items in scale measuring same construct?
- Measured by Cronbach's alpha (α > 0.70 acceptable)

---

**Comparison:**

| | Validity | Reliability |
|---|----------|-----------|
| **Definition** | Measuring intended construct | Consistent measurement |
| **Question** | Right thing? | Consistent results? |
| **Importance** | Essential; can't have valid but unreliable measure | Essential but secondary to validity |
| **Improvement** | Careful design, theory, piloting | Standardise procedures, train raters |
| **Example** | Reliable bathroom scale consistently wrong = unreliable AND invalid | Unreliable clock that sometimes shows right time = unreliable but occasionally valid |`,
    difficulty: 'hard'
  }
];
