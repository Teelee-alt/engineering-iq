export interface ExamCard {
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic?: string;
}

export const RESEARCH_METHODS_CARDS: ExamCard[] = [
  // ============================================
  // TOPIC 1: THE NATURE OF RESEARCH (Cards 1-50)
  // ============================================
  
  {
    topic: 'The Nature of Research',
    question: 'What is the meaning of RESEARCH when broken down?',
    answer: 'RE (prefix) = do it again; SEARCH = investigate or look for. Research is a systematic means of problem solving that fills gaps in knowledge.'
  },
  
  {
    topic: 'The Nature of Research',
    question: "Define research according to Grinnell (1993)",
    answer: 'A structured inquiry that utilizes acceptable scientific methodology to solve problems and create new knowledge that is generally applicable.'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'What are the five key characteristics of research?',
    answer: '1) **Systematic** - planned and organized\n2) **Logical** - follows clear reasoning\n3) **Empirical** - based on observation and evidence\n4) **Reductive** - allows generalization from specific cases\n5) **Replicable** - other researchers can repeat it',
    difficulty: 'medium'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'Differentiate between methods and methodology',
    answer: '**Methods** = specific techniques and procedures used to obtain data (questionnaires, interviews)\n**Methodology** = the theory of how research should be undertaken; the overall strategy and framework for the research'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'What is basic (pure) research? Give an example.',
    answer: '**Basic research** seeks to extend the boundaries of knowledge and test theory without immediate practical application.\n\n**Example:** Does caffeine ingestion improve Ca²⁺ binding with troponin? (mechanism-oriented, no immediate practical application)',
    difficulty: 'easy'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'What is applied research? Give an example.',
    answer: '**Applied research** applies findings to solve a specific existing problem; a methodical quest for solutions to practical problems.\n\n**Example:** Does caffeine ingestion improve athletic performance? (direct practical application)',
    difficulty: 'easy'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'Define descriptive, correlational, and explanatory research',
    answer: '**Descriptive:** Describes a phenomenon as it exists; answers "what", "who", "where", "when", "how"\n\n**Correlational:** Examines relationships between non-manipulated variables; measures association but not causation\n\n**Explanatory (Causal):** Identifies cause-and-effect relationships; answers "why" questions through controlled experiments',
    difficulty: 'medium'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'Explain the "third-variable problem" in correlational research',
    answer: 'An observed correlation between two variables may be due to each being correlated with a third, unmeasured variable, rather than a direct causal link.\n\n**Example:** Ice cream sales correlate with drowning deaths, but temperature is the third variable causing both.',
    difficulty: 'hard'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'What is exploratory research and when is it used?',
    answer: '**Definition:** Conducted for a problem that has not been clearly defined, when there are very few or no earlier studies.\n\n**Uses:**\n- Lays foundation for future research\n- Develops new ideas and hypotheses\n- Usually produces qualitative data\n\n**Advantages:** Flexible, low cost, helps decide if topic is worth further investment\n\n**Disadvantages:** Usually inconclusive, results can be biased due to small sample sizes',
    difficulty: 'medium'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'Define paradigm in research. What are three major paradigms?',
    answer: '**Paradigm:** From Greek "paradeigma" meaning pattern. A conceptual framework shared by a community of scientists that provides a model for examining problems and solutions.\n\n**Three major paradigms:**\n1) **Positivism** - objective reality, measurable, quantitative\n2) **Constructivism** - socially constructed reality, qualitative\n3) **Pragmatism** - practical approach, mixed methods',
    difficulty: 'hard'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'Explain ontology, epistemology, and methodology',
    answer: '**Ontology:** The nature of our beliefs about reality. Does a single verifiable reality exist, or are there socially constructed multiple realities?\n\n**Epistemology:** The branch of philosophy studying the nature of knowledge and how it is acquired and validated.\n\n**Methodology:** The theory of how research should be undertaken; the strategy that informs research method choice.\n\n**Relationship:** Ontology → Epistemology → Methodology (each influences the next)',
    difficulty: 'hard'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'What is qualitative research? What is quantitative research?',
    answer: '**Qualitative Research:** A form of systematic empirical inquiry into meaning. Researcher relies on participants\' views, asks broad questions, collects words/text data, describes and analyzes for themes.\n\n**Quantitative Research:** The systematic process of collecting numerical data through standardized techniques, using statistical methods to derive insights and generalize findings.\n\n**Key difference:** Qualitative seeks depth in understanding; Quantitative seeks breadth and measurable relationships',
    difficulty: 'medium'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'What are independent, dependent, and extraneous variables?',
    answer: '**Independent Variable (IV):** The variable manipulated by the researcher; the "cause" or predictor variable\n\n**Dependent Variable (DV):** The variable measured to see the effect of the IV; the "effect" or criterion variable\n\n**Extraneous Variable:** A variable not of interest but could influence the DV. Must be controlled to isolate IV effect on DV\n\n**Confounding Variable:** An extraneous variable that co-varies with the IV, making it impossible to determine which caused the DV change',
    difficulty: 'medium'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'List four objectives of research',
    answer: '1) **Descriptive** - Describe a situation or phenomenon\n2) **Correlational** - Explore relationships between variables\n3) **Explanatory** - Explain why things happen\n4) **Exploratory** - Examine feasibility when little is known about the problem'
  },
  
  {
    topic: 'The Nature of Research',
    question: 'What is the helical nature of research?',
    answer: 'One research project provides new questions and new problems for future research. Research is an ongoing, spiraling process rather than linear or circular. Each study builds on and generates new directions for investigation.'
  },
  
  // ============================================
  // TOPIC 2: RESEARCH FORMULATION & DESIGN (Cards 51-85)
  // ============================================
  
  {
    topic: 'Research Formulation & Design',
    question: 'Define a research problem. What forms can it take?',
    answer: '**Definition:** A situation or circumstance that requires a solution to be described, explained, or predicted.\n\n**Forms:**\n1) A research question: "Is there a relationship between decentralization and productivity?"\n2) An assumption to challenge: "The average age of male students exceeds female students"\n3) A situation needing explanation or prediction'
  },
  
  {
    topic: 'Research Formulation & Design',
    question: 'List criteria for selecting a researchable problem',
    answer: '**Significance criteria:**\n- Significant and relevant to organized knowledge\n- Theoretical or practical implications\n\n**Research capability criteria:**\n- Measurable concepts and measurable/explainable relationships\n- Non-hypothetical (based on factual evidence)\n\n**Practical criteria:**\n- Arouses genuine researcher interest\n- Within researcher\'s level of expertise\n- Data available in needed format\n\n**Ethical criterion:**\n- Research must not cause harm to subjects',
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Formulation & Design',
    question: 'Explain the problem formulation process (steps)',
    answer: '**Step 1:** Distinguish the subject area of interest\n\n**Step 2:** Dissect the subject area into sub-areas\n\n**Step 3:** Decide about an area (narrow down)\n\n**Step 4:** Generate research questions\n\n**Step 5:** Formulate objectives (possible answers to questions)\n\n**Step 6:** Assess feasibility of objectives\n\n**Step 7:** Double-check interest and available resources',
    difficulty: 'medium'
  },
  
  {
    topic: 'Research Formulation & Design',
    question: 'What is a problem statement? What are its characteristics?',
    answer: '**Problem Statement:** A clear, standalone statement making explicit what you aim to discover or establish. It is specific and actionable.\n\n**Three characteristics of effective problem statement (Andrew & Hildebrand, 1982):**\n1) Reflects felt needs\n2) Non-hypothetical - based on factual evidence\n3) Suggests meaningful and testable hypotheses\n\n**Must include:**\n- What is the problem or defect?\n- Magnitude of the problem?\n- Where is the problem?\n- Why is it important?',
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Formulation & Design',
    question: 'Define research objectives. What does SMART stand for?',
    answer: '**Research Objectives:** Goals set out to achieve in a study. They inform readers about scope and extent, closely related to problem statement.\n\n**SMART criteria:**\n- **S**pecific - clearly defined and precise\n- **M**easurable - quantifiable with success indicators\n- **A**ppropriate (Attainable) - aligns with target audience needs\n- **R**ealistic - achievable with available resources\n- **T**ime-specific - provides timeframe for completion\n\n**Example:** "By January 2025, increase female engineering majors to 3% of total enrollment"',
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Formulation & Design',
    question: 'Distinguish between main objectives and specific objectives',
    answer: '**Main Objective:**\n- Describes overall purpose of research\n- Broad outcomes and concepts\n- What we generally want to accomplish\n\n**Specific Objectives:**\n- State how main objective will be achieved\n- Measurable and concrete\n- Define exactly what you want to see, where, and when\n\n**Example for library services study:**\n\nMain: "To study the effect of library services on student academic performance (2017-2018)"\n\nSpecific: "To compare utilization levels of library services among different academic performance groups"',
    difficulty: 'medium'
  },
  
  {
    topic: 'Research Formulation & Design',
    question: 'What types of specific objectives exist? Give examples.',
    answer: '**Three types based on research questions:**\n\n1) **Estimation objectives:** Determine incidence rates or prevalence\n   - Example: "Estimate percentage of unemployed graduates"\n\n2) **Association objectives:** Investigate associations between factors\n   - Example: "Investigate association between study hours and grades"\n\n3) **Evaluation objectives:** Evaluate intervention effectiveness\n   - Example: "Evaluate effectiveness of new teaching method on student performance"',
    difficulty: 'medium'
  },
  
  {
    topic: 'Research Formulation & Design',
    question: 'What action verbs are suitable for research objectives?',
    answer: '**Recommended action verbs:**\nDetermine, Compare, Verify, Calculate, Describe, Measure, Explain, Identify, Analyze, Evaluate, Assess, Establish, Test, Investigate\n\n**Verbs to AVOID (vague):**\nAppreciates, Understand, Study, Notice, Observe, Believe, Know, Learn, Comprehend\n\n**Why:** Action verbs are specific, measurable, and observable, making objectives clear and testable.'
  },
  
  // ============================================
  // TOPIC 3: LITERATURE REVIEW (Cards 86-127)
  // ============================================
  
  {
    topic: 'Literature Review',
    question: 'Define literature review. What is its purpose?',
    answer: '**Definition:** A survey of scholarly sources (books, journals, articles, websites) on a specific topic.\n\n**Purpose:**\n- Provides overview of current knowledge\n- Identifies relevant theories and methods\n- Finds gaps in existing research\n- Ensures your research is new and original\n- Demonstrates knowledge of field\n- Shows ability to critically evaluate sources'
  },
  
  {
    topic: 'Literature Review',
    question: 'Explain the inverted pyramid model of literature review',
    answer: '**The Inverted Pyramid has three steps:**\n\n**Step 1:** Identification of problem domain\n- The research field/area where work makes contribution\n\n**Step 2:** Critical discussion of what has been done\n- Categorize major research themes\n- Make critical comparison of papers\n- Identify knowledge gaps\n\n**Step 3:** Identification of knowledge gaps\n- Link gaps directly to research objectives\n\n**Shape significance:** Increased focus from broad problem domain → specific research gaps → clear research objectives',
    difficulty: 'hard'
  },
  
  {
    topic: 'Literature Review',
    question: 'Outline the process of developing a literature review',
    answer: '**Step 1: Define the main topic**\n- Designate sections, subsections, headings following pyramid structure\n- Identify keywords and subject vocabulary\n\n**Step 2: Search the literature**\n- Define databases and sources\n- Set time interval and language criteria\n- Set cut-off year for publications\n\n**Step 3: Analyze the results**\n- Use critical reading skills\n- Evaluate each source\n- Use matrix method for comparison\n\n**Step 4: Write**\n- Express conclusions about others\' work\n- Properly cite and reference\n- Organize by chronology, topic, or pyramid',
    difficulty: 'hard'
  },
  
  {
    topic: 'Literature Review',
    question: 'What critical questions should you ask when reading research papers?',
    answer: '**About the author and argument:**\n1) Who is the author? (credentials, affiliation)\n2) What is the central point or main argument?\n3) Is the research question evident and articulated with previous knowledge?\n\n**About methodology:**\n4) Was the research designed and conducted properly?\n5) What findings and conclusions are made?\n6) Are results and discussion plausible and consistent with objectives and methodology?'
  },
  
  {
    topic: 'Literature Review',
    question: 'Explain the matrix method for literature review',
    answer: '**Matrix Method:** A table comparing and contrasting articles efficiently\n\n**Typical columns:**\n- Author & year\n- Type of study (quantitative/qualitative)\n- Sample size and characteristics\n- Research design\n- Data collection methods\n- Key findings\n- Limitations\n\n**Benefits:**\n- Quickly spot differences and similarities\n- Easily identify gaps in research\n- Organize large amounts of literature\n- Makes synthesis easier'
  },
  
  {
    topic: 'Literature Review',
    question: 'Distinguish integral, non-integral, and citation types',
    answer: '**Integral Citation:** Author\'s name in the sentence\n- Example: "Lillis (2001) argues that tutors lack explicit knowledge"\n\n**Non-Integral Citation:** Author\'s name in parentheses\n- Example: "Tutors lack explicit knowledge (Lillis, 2001)"\n\n**Information-Prominent:** Emphasis on information\n- Example: "Behavior is important (Boger et al., 1974)"\n\n**Author-Prominent:** Author as sentence subject\n- Example: "Close (1983) developed a simplified theory"'
  },
  
  {
    topic: 'Literature Review',
    question: 'What should be included in literature review sections?',
    answer: '**Introduction:**\n- Nature of topic under discussion\n- Parameters (included/excluded)\n- Basis for literature selection\n- Scope and how it ties to research\n\n**Body:**\n- Synthesizes multiple texts in paragraphs\n- Classifies and evaluates themes\n- Uses chronological, topical, or pyramid organization\n\n**Conclusion:**\n- Summary of major agreements/disagreements\n- General conclusions drawn\n- Where thesis sits in literature\n\n**Each paragraph should contain:**\nTopic sentence, definitions, evidence, discoveries, current assumptions, conclusions, link to next idea'
  },
  
  {
    topic: 'Literature Review',
    question: 'What is plagiarism? What are types and how to avoid it?',
    answer: '**Plagiarism:** Taking another\'s work and passing it off as your own\n\n**Three types:**\n1) Copying text directly without quotation marks\n2) Improper paraphrasing (keeping too close to original)\n3) Failing to give proper references or citations\n\n**How to avoid:**\n- Use quotation marks and cite for direct quotes\n- Paraphrase and cite when using ideas\n- Use reference management software (Zotero, Mendeley, EndNote)\n- Run work through anti-plagiarism tools (Turnitin, Grammarly)\n- Maintain detailed notes with proper citations',
    difficulty: 'medium'
  },
  
  // ============================================
  // TOPIC 4: RESEARCH PROPOSAL WRITING (Cards 128-154)
  // ============================================
  
  {
    topic: 'Research Proposal Writing',
    question: 'Define a research proposal. Why is it important?',
    answer: '**Definition:** A written plan of the study detailing what the researcher intends to do.\n\n**Importance (It serves as a "contract"):**\n- Permits others to learn about intended research and offer suggestions\n- Helps researcher clarify what needs to be done\n- Prevents unintentional problems\n- Protects student from demanding additional requirements\n- Protects committee from poor work delivery'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'What five things must a research proposal do?',
    answer: '1) **Outline steps** in your proposed research\n\n2) **Provide intellectual context** - show how research fits into field\n\n3) **Justify research** - explain significance and need\n\n4) **Be creative** - demonstrate originality and innovation\n\n5) **Think through experiments** - anticipate problems and realistic timetable'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'What are the three essential ingredients of a proposal?',
    answer: '1) **The Issue:** What problem does your research address? What gap will it fill?\n\n2) **Research Design:** How will the research achieve its objective? What methods will you use?\n\n3) **Benefit:** What will the research contribute? What impact will it have?'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'List key elements of a standard research proposal',
    answer: '1. Title\n2. Introduction\n3. Background of the study\n4. Statement of the problem\n5. Aim and Objectives\n6. Research questions\n7. Scope and limitations\n8. Significance of the study\n9. Literature review (brief)\n10. Methodology\n11. Time schedule/work plan\n12. Budget\n13. Conclusion\n14. References\n15. Appendices',
    difficulty: 'medium'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'What are criteria for selecting a good research title?',
    answer: '1) **Reflect the theme** of the research\n\n2) **Self-explanatory** - understandable without reading proposal\n\n3) **Brief** - concise but complete (usually 10-15 words)\n\n4) **Simple, unambiguous language** - avoid jargon\n\n5) **Specific to domain** - clearly indicates field\n\n6) **Avoid brackets and arithmetic** - professional appearance\n\n7) **Clear meaning** - no confusion about focus'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'What should introduction and background contain?',
    answer: '**Introduction should contain:**\n- Theoretical background\n- Background of the problem\n- Overview from broad picture to narrow research questions\n- Familiarity with previous research\n- Relevance of planned study\n\n**Statement of the Problem should:**\n- Be a short "SO WHAT" statement\n- Include definition, nature, extent of problem\n- Serve as blueprint for literature review\n- Keep committee focused on key issue'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'Distinguish between aims and objectives in proposals',
    answer: '**Aims:**\n- Short, general statements of intent\n- Answer "what do we want to accomplish overall?"\n- Broad in scope\n\n**Objectives:**\n- Very specific statements\n- Define practical steps to achieve aims\n- Measurable and concrete\n- Answer "what specific steps will we take?"\n\n**Relationship:** Aims are achieved through objectives\n\n**Example:**\nAim: "To study effect of library services on academic performance"\nObjectives: "To compare utilization levels among performance groups"'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'What should the scope and limitations section include?',
    answer: '**Scope - Clear boundaries in terms of:**\n- Time period of study\n- Issues to be addressed\n- Geographic or organizational area of study\n- Population to be studied\n\n**Limitations - Acknowledge:**\n- What is included in study\n- What is excluded from study\n- Shortcomings due to resources\n- Time constraints\n- Access limitations\n\n**Purpose:** Tell reader what is within and outside research boundaries, demonstrating realistic understanding of constraints'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'What does the rationale/significance section explain?',
    answer: '**The Rationale/Significance explains the importance of research:**\n\n- **National context** - addresses problems relevant to nation/region\n- **Knowledge gaps** - bridges gaps in existing knowledge\n- **Usefulness to society** - benefits communities, organizations, or professions\n- **Present state of affairs** - describes current situation\n- **Affected stakeholders** - identifies who benefits\n- **Contribution** - explains unique contribution to field\n\n**Goal:** Convince reader that research deserves time and resources'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'What is the purpose of literature review in a proposal? Explain funnel point',
    answer: '**Literature Review Purpose:**\n- Ensures not "reinventing the wheel"\n- Gives credit to previous work\n- Demonstrates knowledge of problem\n- Shows ability to critically evaluate\n- Integrates existing literature\n- Provides theoretical insights\n- Convinces reader research is significant\n\n**The "Funnel Point":** \nThe purpose of your research, framed as a research question or hypothesis. It is the narrowest point where all literature analysis leads directly to your aims and objectives.',
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'What should the methodology section contain? What must you show?',
    answer: '**Methodology section includes:**\n- Selection of appropriate approach (qualitative/quantitative/mixed)\n- Tools/techniques to be used\n- Instrumentation/procedure details\n- Data collection techniques\n- Data processing/analysis techniques\n- Data/information presentation methods\n\n**Three things to demonstrate:**\n1) **Justify** your method choice - why this approach?\n2) **Show understanding** of principles - demonstrate competence\n3) **Prove feasibility** - it can actually be done within constraints'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'What should time schedule and budget include?',
    answer: '**Time Schedule/Work Plan:**\n- Timeline of assigned tasks\n- Realistic durations for each phase\n- Account for rewrites and edits\n- Include feedback sessions\n- Show milestones and deliverables\n\n**Budget/Estimated Cost:**\n- Resource personnel salaries\n- Support staff costs\n- Stationery and materials\n- Transport and utilities\n- House rents if needed\n- Miscellaneous costs\n- Specific justification for each item\n\n**Purpose:** Demonstrates understanding of research costs and prevents overspending'
  },
  
  {
    topic: 'Research Proposal Writing',
    question: 'List common mistakes and best practices in proposal writing',
    answer: '**Common Mistakes to AVOID:**\n- Not connecting proposed research to literature\n- Insufficient methodology detail\n- Too much/too little on major issues\n- Forgetting table of contents\n- Rambling without clear direction\n- Incorrect citations/references\n- Relying solely on supervisor\n\n**Best Practices (DOs):**\n- Produce professional-looking proposal\n- Make it interesting and informative\n- Use easy-to-read format\n- Present one idea per page\n- Use clear headings/sub-headings\n- Be concise and precise\n- Check spelling and grammar\n- Present in acceptable format',
    difficulty: 'medium'
  },
  
  // ============================================
  // TOPIC 5: RESEARCH DESIGN (Cards 155-218)
  // ============================================
  
  {
    topic: 'Research Design',
    question: 'Define research design. What are key elements?',
    answer: '**Definition:** A framework of research methods and techniques chosen by the researcher. A general plan of how you will answer research questions. The type of research problem determines the design, not vice versa.\n\n**Key elements of design plan:**\n- Purposes of the study\n- Strategies to be employed\n- Time dimensions (temporal aspects)\n- Research environment (field vs. lab)\n- Unit of analysis\n- Sampling design\n- Data collection methods\n- Measurement approaches\n- Data analysis procedures',
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Design',
    question: 'What are the three purposes of research design?',
    answer: '1) **Exploratory Research**\n   - Investigates study questions with new problem areas\n   - Lays groundwork for more definitive research\n   - May not offer final conclusions\n\n2) **Descriptive Research**\n   - Illustrates behavior of specimen population\n   - Only one variable required\n   - Describes, explains, validates findings\n\n3) **Explanatory (Causal) Research**\n   - Understands impact of changes in standard procedures\n   - Experiments are most popular form\n   - Investigates cause-and-effect relationships'
  },
  
  {
    topic: 'Research Design',
    question: 'Explain time dimensions in research design',
    answer: '**Three time dimensions/horizons:**\n\n1) **Cross-sectional studies**\n   - Snapshot at a single point in time\n   - Comparison of groups at one moment\n\n2) **Multiple cross-sectional studies**\n   - Multiple measurement points\n   - Different samples at each time point\n   - Tracks trends over time\n\n3) **Longitudinal studies (true panel)**\n   - Multiple measurement points\n   - Same sample at each time point\n   - Most rigorous for studying change over time'
  },
  
  {
    topic: 'Research Design',
    question: 'Explain unit of analysis. Give examples.',
    answer: '**Definition:** The level of aggregation of data during analysis. The entity being studied as a whole.\n\n**Examples:**\n- **Individuals** - student performance, employee satisfaction\n- **Dyads** - pairs or couples\n- **Groups** - teams, departments, families\n- **Organizations** - companies, schools, hospitals\n- **Cultures** - communities, societies, nations\n\n**Importance:** Must match research questions and data collection methods. Unit of analysis determines sample size and statistical analysis approach.',
    difficulty: 'medium'
  },
  
  {
    topic: 'Research Design',
    question: 'What is contrived vs. non-contrived research environments?',
    answer: '**Contrived Environment:**\n- Artificial setting\n- Laboratory conditions\n- Researcher controls conditions\n- High internal validity\n- Lower generalizability\n- Example: Controlled lab experiment\n\n**Non-Contrived Environment:**\n- Natural environment\n- Work proceeds normally\n- Field conditions\n- Better generalizability\n- Lower control over variables\n- Example: Workplace observation\n\n**Trade-off:** Control vs. realism'
  },
  
  {
    topic: 'Research Design',
    question: 'Distinguish between quantitative and qualitative research approaches',
    answer: '**Quantitative Research:**\n- Explains phenomena by collecting numerical data\n- Uses mathematically-based methods (statistics)\n- All aspects designed before data collection\n- Data in numbers and statistics\n- Generalize widely, predict results\n- Test causal relationships\n- Deductive approach\n\n**Qualitative Research:**\n- Studies meaning from participant perspectives\n- Asks broad questions\n- Collects words/text data\n- Describes and analyzes for themes\n- Seeks depth not breadth\n- Inductive approach\n- Small sample, naturalistic inquiry',
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Design',
    question: 'List types of quantitative research methods',
    answer: '**Four types of quantitative research methods:**\n\n1) **Descriptive** - Describe characteristics of a population or phenomenon\n\n2) **Correlational** - Investigate relationships between variables; measures association\n\n3) **Experimental** - Manipulate independent variable; establish causation with control groups\n\n4) **Quasi-experimental** - Examine cause-effect but IV not manipulated; less control than true experiments'
  },
  
  {
    topic: 'Research Design',
    question: 'Define experimental research. What are its characteristics?',
    answer: '**Definition:** A controlled method attempting to establish certainty about IV-DV relationships. Tests if an intervention works to improve some condition.\n\n**Main characteristics:**\n- Controlled manipulation of at least one independent variable\n- Uses experimental and control groups\n- Random assignment of subjects to groups\n- Pre-test and post-test measurements\n- Tight control of extraneous variables\n\n**Logic of experimentation:**\nPre-test observation of DV → Exposure to IV → Post-test observation of DV → Compare post-test to pre-test',
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Design',
    question: 'What are the six conditions for "ideal" experiments?',
    answer: '1) **Time order of IV established** - IV occurs before DV\n\n2) **IV manipulated** - researcher controls and varies the IV\n\n3) **Relationship between IV and DV established** - clear cause-effect link\n\n4) **Control of rival hypotheses** - alternative explanations ruled out\n\n5) **One control group used** - comparison for experimental group\n\n6) **Random assignment and sampling used** - no selection bias\n\n**Note:** Real-world research rarely achieves all six conditions perfectly'
  },
  
  {
    topic: 'Research Design',
    question: 'Define quasi-experimental research and its characteristics',
    answer: '**Definition:** Examines cause-and-effect relationships, but the independent variable is identified but not manipulated by the researcher.\n\n**Characteristics:**\n- Samples not randomly selected\n- Not all variables controlled\n- Some control group comparison\n- IV naturally varies or researcher assigns conditions\n- More realistic than true experiments\n- Less statistical control than experiments\n\n**When used:** When true experiments impossible due to practical or ethical constraints'
  },
  
  {
    topic: 'Research Design',
    question: 'Explain the four scales of measurement with examples',
    answer: '**1. Nominal Scale:**\n- Categories with no natural order or ranking\n- Examples: gender, blood type, race, eye color, zip code, political party\n\n**2. Ordinal Scale:**\n- Order matters but not the difference between values\n- Examples: education level (high school/BS/MS/PhD), socioeconomic status (low/middle/high), satisfaction rating\n\n**3. Interval Scale:**\n- Order and difference between values meaningful, no true zero\n- Examples: temperature (°F, °C), pH, SAT score, credit score\n\n**4. Ratio Scale:**\n- All properties of interval PLUS true zero point\n- Examples: weight, length, enzyme activity, dose, survival time, temperature in Kelvin',
    difficulty: 'medium'
  },
  
  {
    topic: 'Research Design',
    question: 'What is the basic measurement equation? Define reliability and validity',
    answer: '**Basic Measurement Equation:**\n$$X = T + E$$\n\nWhere: X = Actual measurement, T = True phenomenon, E = Error in measurement\n\n**Reliability:** A measure\'s ability to yield consistent results each time it is applied. Relates to random error - more reliable = less random error.\n\n**Validity:** The accuracy of the measure - whether it actually measures what it intends to measure. Relates to systematic error.\n\n**Both needed:** A test can be reliable (consistent) but invalid (measuring wrong thing), or valid but unreliable (measuring right thing inconsistently)'
  },
  
  {
    topic: 'Research Design',
    question: 'Explain data analysis approaches: descriptive and inferential statistics',
    answer: '**Descriptive Statistics:**\n- Organize and summarize data\n- Measures: mean, median, mode, range, variance, standard deviation\n- Describe data characteristics\n- Not used for drawing conclusions about population\n\n**Inferential Statistics:**\n- Draw conclusions about population from sample\n- Test hypotheses\n- Estimate population parameters\n- Test for significance of differences\n- Common tests: t-test, ANOVA, regression, chi-square\n\n**Univariate vs. Bivariate analysis:**\n- **Univariate:** Analyzes single variable (age, gender)\n- **Bivariate:** Two variables simultaneously to determine relationships'
  },
  
  {
    topic: 'Research Design',
    question: 'List types of qualitative research methods',
    answer: '**Seven types of qualitative research:**\n\n1) **Ethnography** - Observation in natural environment focusing on culture\n\n2) **Phenomenology** - Studies lived experience and meaning\n\n3) **Grounded theory** - Theory developed inductively from data\n\n4) **Narrative research** - Studies stories and personal narratives\n\n5) **Case study** - In-depth examination of single unit (person, family, organization)\n\n6) **Participatory action research** - Participants define problems and lead research\n\n7) **Focus groups** - Group discussions to explore themes'
  },
  
  {
    topic: 'Research Design',
    question: 'Define mixed methods research. When is it used?',
    answer: '**Definition:** Both a method and methodology for collecting, analyzing, and integrating quantitative and qualitative research in a single study. Provides better understanding than either approach alone.\n\n**When used:**\n1) One type alone is not enough\n2) Incorporate qualitative into quantitative study\n3) Build from one phase to another\n4) Explore qualitatively then develop instrument\n5) Follow up quantitative study qualitatively\n\n**Characteristics:**\n- Methodological eclecticism\n- Emphasis on diversity\n- Tends toward balance and compromise\n- Iterative, cyclical approach\n- Focus on research question in determining methods',
    difficulty: 'hard'
  },
  
  {
    topic: 'Research Design',
    question: 'Describe the four mixed methods research designs',
    answer: '**1. Sequential Explanatory:**\n- Quantitative → Qualitative\n- Priority to quantitative\n- Integrate during interpretation\n- Use: explain/contextualize quantitative findings\n\n**2. Sequential Exploratory:**\n- Qualitative → Quantitative\n- Priority to qualitative\n- Use: test elements of theory, develop instruments\n\n**3. Concurrent Triangulation:**\n- Quantitative + Qualitative (simultaneous)\n- Usually equal priority\n- Use: develop complete understanding, cross-validate\n\n**4. Concurrent Nested:**\n- One predominant method with embedded other method\n- Nesting improves predominant method\n- Use: broader and in-depth perspectives'
  },
  
  {
    topic: 'Research Design',
    question: 'What should methodology section of thesis include? What tense?',
    answer: '**Methodology section should describe:**\n1) Participants: who they are, how many, how selected\n2) Materials: equipment, instruments, stimuli used\n3) Design: research design, variables, measurement, statistical techniques\n4) Procedure: step-by-step process\n5) Data analysis: how data will be analyzed\n\n**Tense:** Past tense (use future only if it is a research design proposal)\n\n**Key advice about detail:**\n- Provide enough detail for another researcher to replicate\n- Focus on brevity\n- Avoid unnecessary details not relevant to outcome',
    difficulty: 'medium'
  },
  
  // ============================================
  // TOPIC 6: SAMPLING DESIGN (Cards 219-249)
  // ============================================
  
  {
    topic: 'Sampling Design',
    question: 'Define population, target population, and accessible population',
    answer: '**Research Population:**\n- Large collection of individuals/objects with similar characteristics\n- The complete group of interest\n\n**Target Population:**\n- The group researcher is interested in studying\n- Results generalized to this population\n- All members share significant traits\n\n**Accessible (Study) Population:**\n- Population to which conclusions can realistically apply\n- Subset of target population\n- From which researchers draw samples\n- Often the only practical population to access'
  },
  
  {
    topic: 'Sampling Design',
    question: 'Define sampling and sample. What are key assumptions?',
    answer: '**Sampling:** The process of selecting a small proportion from accessible population to participate in study.\n\n**Sample:** A subset of the population measured to gather data about entire population.\n\n**Two key assumptions behind sampling:**\n\n1) **Representative** - Sample contains most characteristics present in population\n\n2) **Equal and independent chance** - All members given equal and independent chance of selection\n\n**Note:** Sample size is less important than how sample is drawn. A small probability sample free of bias is preferable to larger biased sample.',
    difficulty: 'medium'
  },
  
  {
    topic: 'Sampling Design',
    question: 'Distinguish subjects, respondents, and participants in research',
    answer: '**Subjects:**\n- People in a researcher\'s experiment\n- Usually quantitative research\n- Term is more passive\n- Used in scientific research\n- Example: medical experiment subjects\n\n**Respondents:**\n- People who answer questionnaires\n- Usually quantitative research\n- Respond only to questions asked\n- No more, no less detail\n\n**Participants:**\n- People in qualitative studies (interviews, focus groups)\n- Participate and actively contribute\n- Give much more detailed answers\n- More active involvement than subjects or respondents'
  },
  
  {
    topic: 'Sampling Design',
    question: 'Define probability sampling. What is a sampling frame?',
    answer: '**Probability (Random) Sampling:**\n- Each individual in population has exactly same chance of being selected\n- Researcher can determine statistical likelihood of any case in sample\n- Allows statistical inference\n- Requires sampling frame\n\n**Sampling Frame:**\n- A list of all individual members of population\n- Provides at least theoretical access to each member\n- May be partial (undercover some population)\n- Examples: electoral register, school list, employee directory\n\n**Importance:** Without sampling frame, probability sampling is impossible'
  },
  
  {
    topic: 'Sampling Design',
    question: 'Explain simple random sampling with formula and example',
    answer: '**Definition:** Sample members selected literally at random from sampling frame.\n\n**Formula:** $$P(\\text{selection}) = \\frac{1}{N}$$\nWhere N = population size\n\n**Methods:** Random number tables, lottery, pin in list, random generator\n\n**Worked Example:**\n- Population: 500 registered professionals\n- Required sample: 50\n- Each professional has probability 1/500 = 0.2%\n- Assign numbers 1-500\n- Use random number generator to select 50 numbers\n- Contact professionals with selected numbers\n\n**Advantages:** Unbiased, statistically rigorous\n**Disadvantages:** Requires complete sampling frame, time-consuming',
    difficulty: 'hard'
  },
  
  {
    topic: 'Sampling Design',
    question: 'Explain systematic sampling with formula and example',
    answer: '**Definition:** Members selected systematically (every k-th element) rather than randomly.\n\n**Formula:** $$k = \\frac{\\text{Population size}}{\\text{Sample size}}$$\n\n**Steps:**\n1. Calculate k (sampling interval)\n2. Randomly select starting number between 1 and k\n3. Select every k-th element thereafter\n\n**Worked Example:**\n- Population: 1,000 employees\n- Required sample: 100\n- k = 1,000 ÷ 100 = 10\n- Random start: 7\n- Select: 7, 17, 27, 37, 47... continue to 100 selections\n\n**Advantages:** Simpler than simple random, systematic spacing\n**Disadvantages:** Can introduce bias if population has periodic pattern',
    difficulty: 'hard'
  },
  
  {
    topic: 'Sampling Design',
    question: 'Explain stratified random sampling with worked example',
    answer: '**Definition:** Population divided into homogeneous subgroups (strata), then random sample from each, often proportionally.\n\n**Why use:** Ensures all subgroups represented; reduces sampling error for stratified populations\n\n**Worked Example:**\n- Company workforce: 60% apprentices, 40% journeymen (total 500)\n- Stratify: 300 apprentices, 200 journeymen\n- Sample proportionally: 60 apprentices, 40 journeymen (20% of each)\n- Randomly select 60 from 300 apprentices; 40 from 200 journeymen\n- Total sample = 100 (maintains 60:40 ratio)\n\n**Advantages:** Ensures representation, reduces sampling error\n**Disadvantages:** Need to identify strata, more complex than simple random',
    difficulty: 'hard'
  },
  
  {
    topic: 'Sampling Design',
    question: 'Compare cluster sampling, stage sampling, and multistage sampling',
    answer: '**Cluster Sampling:**\n- Two-stage: select clusters randomly, then sample ALL within clusters\n- Use when sampling frame unavailable at individual level\n\n**Stage Sampling:**\n- Extension of cluster with more than two stages\n- Example: geographical areas → schools → classes → students\n\n**Multistage Sampling:**\n- Apply multiple sampling methods in successive stages\n- Can combine different methods at different stages\n- More flexible than simple clustering\n\n**When particularly helpful:**\n- Sampling frame not readily available\n- Can be obtained at lower level (e.g., list of schools per area)\n- Large geographic dispersal of population'
  },
  
  {
    topic: 'Sampling Design',
    question: 'Define non-probability sampling and its types',
    answer: '**Definition:** Used when sampling frame unavailable or cannot contact all population members. Cannot use probability methods, so rely on non-probability methods.\n\n**Four types:**\n\n**1. Convenience (Accidental) Sampling**\n- Select members most easily available\n- Does not attempt to make representative\n- Report information about sample\n\n**2. Purposive (Judgmental) Sampling**\n- Apply experience to select typical cases\n- Researcher judges representativeness\n- Must justify strategy\n\n**3. Quota Sampling**\n- Non-probability equivalent of stratified\n- Set quotas for categories\n- Used in opinion polling\n\n**4. Snowball Sampling**\n- Identify one/two people, ask to identify others\n- Like rolling snowball\n- For hard-to-identify populations'
  },
  
  {
    topic: 'Sampling Design',
    question: 'Define dimensional and snowball sampling. When used?',
    answer: '**Dimensional Sampling:**\n- Extension of quota sampling\n- Set quotas for combinations of two or more variables\n- Example: predetermined numbers for each combination of occupation × gender × age group\n- Use: ensuring coverage of multiple variable combinations\n\n**Snowball Sampling:**\n- Identify one/two people with relevant characteristics\n- Ask them to identify others with similar characteristics\n- Those identify more, like rolling snowball expanding\n- Use: when potential members difficult/dangerous to identify\n- Example: hidden populations (undocumented immigrants, homeless, rare disease sufferers)\n\n**Non-probability methods are less rigorous but sometimes necessary'
  },
  
  {
    topic: 'Sampling Design',
    question: 'What factors determine sample size? Explain each',
    answer: '**Four factors determine sample size:**\n\n**1. Population Size** - Larger population may need larger sample (but relationship not linear)\n\n**2. Margin of Error (Confidence Interval)** - Percentage indicating how close sample results will be to true population value. Smaller margin requires larger sample.\n\n**3. Confidence Level** - Degree of certainty that sample represents population within margin of error. Common levels: 90%, 95%, 99%. Higher confidence requires larger sample.\n\n**4. Standard Deviation** - How much variation expected among responses. Most researchers set at 0.5 (50%) - the worst-case scenario - to guarantee adequate sample size.\n\n**Formula factors:**\n- **Z-score:** Constant based on confidence level (90%=1.645, 95%=1.96, 99%=2.576)\n- **Slovin\'s formula:** n = N/(1+Ne²) for estimated populations',
    difficulty: 'hard'
  },
  
  {
    topic: 'Sampling Design',
    question: 'What is minimum sample size? What is more important than size?',
    answer: '**Minimum Sample Size:**\n- Some writers suggest 30 is minimum for any survey\n- Assumes simple statistical analysis\n- If comparing sub-groups, each group must be larger\n- Qualitative research: often 12-30 depending on methodology\n\n**More important than size:**\n- **How the sample is drawn**\n- A small probability sample free of bias is preferable to larger biased/unrepresentative sample\n- Sample quality > sample quantity\n- Representative small sample better than large biased sample'
  },
  
  // ============================================
  // TOPIC 7: DATA COLLECTION METHODS (Cards 250-277)
  // ============================================
  
  {
    topic: 'Data Collection Methods',
    question: 'Define data collection instruments. What are examples?',
    answer: '**Definition:** Data gathering devices used in study - testing devices for measuring a phenomenon.\n\n**Examples:**\n- Paper and pencil tests\n- Questionnaires\n- Interviews (structured/unstructured)\n- Observation guidelines\n- Research tools (scales, inventories)\n- Focus group guides\n- Electronic surveys\n- Biometric devices\n\n**Quality requirements:** Must be valid (measure what intended) and reliable (consistent results)'
  },
  
  {
    topic: 'Data Collection Methods',
    question: 'What are five sections of a well-designed questionnaire?',
    answer: '**1. Introduction**\n- Researcher\'s request for help\n- Brief explanation of purpose\n- Importance of respondent\'s participation\n\n**2. Respondent Identification Data**\n- Name, address, contact information\n- Demographics if appropriate\n\n**3. Instructions**\n- Clear directions for interviewer\n- Clear directions for respondent\n- How to complete survey\n\n**4. Information (Main Body)**\n- Questions and response codes\n- Main content of survey\n- Organized logically\n\n**5. Classification Data**\n- Demographics (age, gender, income, etc.)\n- Usually placed at end\n- May be optional'
  },
  
  {
    topic: 'Data Collection Methods',
    question: 'Distinguish closed and open format questions. Give advantages',
    answer: '**Closed Format Questions:**\n- Respondents choose from several given options\n- Types: multiple choice, yes/no, ranking, Likert scale\n\n**Advantages of closed:**\n- Easy and quick to fill in\n- Easy to code, record, and analyze quantitatively\n- Consistent responses\n- Quantifiable data\n\n**Open Format Questions:**\n- Respondents formulate their own answers\n- Free-form responses\n\n**Advantages of open:**\n- Allows exploration of range of possible themes\n- Captures unexpected responses\n- In-depth understanding\n- Qualitative richness\n\n**Trade-off:** Ease of analysis vs. depth of response'
  },
  
  {
    topic: 'Data Collection Methods',
    question: 'List rules for asking good questions in questionnaires',
    answer: '**Four rules for asking good questions:**\n\n1) **Use short and simple sentences**\n   - Avoid complex grammar\n   - One idea per sentence\n   - Easy to understand\n\n2) **Ask for only one piece of information at a time**\n   - Avoid double-barreled questions\n   - Example: "Do you like the food and service?" (TWO questions)\n   - Better: "Do you like the food?" "Do you like the service?"\n\n3) **Avoid negatives if possible**\n   - "Do NOT avoid studying" is confusing\n   - Better: "Do you study regularly?"\n\n4) **Use clear wording**\n   - Define jargon\n   - Avoid ambiguous terms\n   - Use exact language'
  },
  
  {
    topic: 'Data Collection Methods',
    question: 'How should questions be arranged in a questionnaire?',
    answer: '**Order of questions:**\n\n1) **General to Specific**\n   - Start with broad context\n   - Narrow to specific topics\n   - Prevents priming effects\n\n2) **Easy to Difficult**\n   - Start with simple, non-threatening questions\n   - Build rapport and motivation\n   - Progress to complex questions\n\n3) **Closed Format First**\n   - Begin with closed questions\n   - Follow with open questions\n   - Builds momentum\n\n4) **Relevant to Main Subject First**\n   - Start with questions central to research\n   - Secondary topics later\n\n5) **Do NOT start with demographics/personal questions**\n   - Can discourage participation\n   - Save for middle or end\n\n**Goal:** Maximize response rate and data quality'
  },
  
  {
    topic: 'Data Collection Methods',
    question: 'Define observation as a data collection technique. Distinguish overt vs. covert',
    answer: '**Observation:**\n- Process where respondents observed without interruption\n- Records actual behavior not self-reported\n- Example: shopping patterns assessed by counting vehicles\n\n**Overt Observation:**\n- Everyone knows they are being observed\n- Researcher is visible\n- Participants aware of study\n- May affect natural behavior (Hawthorne effect)\n\n**Covert Observation:**\n- No one knows they are being observed\n- Observer is concealed\n- More natural behavior captured\n- Ethical concerns about informed consent\n\n**Advantage:** Captures actual behavior\n**Disadvantage:** Time-consuming, observer bias possible'
  },
  
  {
    topic: 'Data Collection Methods',
    question: 'Define interview and describe types',
    answer: '**Interview (Kahn & Cannell, 1957):**\n- Purposeful discussion between two or more people\n- Gather valid and reliable data\n- Relevant to research questions and objectives\n\n**Types of interviews:**\n\n**1. Structured Interview**\n- Standard set of questions in exact order\n- Nothing more, nothing less\n- Consistent across all respondents\n- Quantifiable data\n\n**2. Face-to-face Interview**\n- In-person interaction\n- Rich data collection\n- Non-verbal cues observable\n\n**3. Telephone Interview**\n- Remote interaction\n- More economical\n- Less personal\n\n**4. Computer-Assisted Personal Interviewing (CAPI)**\n- Interviewer uses computer/tablet\n- Data entered in real-time\n- Efficient data collection'
  },
  
  {
    topic: 'Data Collection Methods',
    question: 'What are strengths and limitations of interviews?',
    answer: '**Strengths of interviews:**\n\n1) Provide rich, in-depth description of individual experience\n\n2) Particularly useful for complex and sensitive issues\n\n3) Can explain phenomena beyond mere observation\n\n4) Generate new ideas and theories\n\n5) People studied in own environment increases credibility\n\n6) Build rapport with respondents\n\n**Limitations:**\n\n1) Very time-consuming\n\n2) Generate huge amounts of data\n\n3) Data analysis difficult without clear strategy\n\n4) Interpretation of data may be subjective\n\n5) Interviewer bias possible\n\n6) Requires skilled interviewer'
  },
  
  {
    topic: 'Data Collection Methods',
    question: 'Define credibility, transferability, dependability, and confirmability',
    answer: '**Qualitative Research Quality Criteria:**\n\n**1. Credibility:** Trustworthiness - how believable are conclusions? Confidence in "truth" of findings.\n\n**2. Transferability:** Context is well described so findings may apply in other contexts. Results not too context-bound.\n\n**3. Dependability:** Researcher described all factors influencing data. Findings consistent and could be repeated. Like reliability in quantitative.\n\n**4. Confirmability:** Degree of neutrality - findings shaped by respondents, not researcher bias. Like objectivity in quantitative.\n\n**Quantitative equivalents:**\n- Credibility ↔ Internal validity\n- Transferability ↔ Generalizability/External validity\n- Dependability ↔ Reliability\n- Confirmability ↔ Objectivity'
  },
  
  {
    topic: 'Data Collection Methods',
    question: 'What is triangulation? Explain types with examples',
    answer: '**Triangulation:** Cross-checking information and conclusions using multiple procedures or sources. If agreement exists, supports data interpretation. Gets closer to truth but doesn\'t guarantee certainty.\n\n**Types:**\n\n**1. Method Triangulation:**\n- Comparing data from different methods\n- Both quantitative and qualitative\n- Example: Questionnaire on eating habits + Focus group interviews\n\n**2. Researcher Triangulation:**\n- Different people as researchers\n- Increases confirmability and credibility\n- Reduces researcher bias\n\n**3. Data Triangulation:**\n- Multiple data sources\n- Different respondents, times, locations\n\n**4. Theory Triangulation:**\n- Multiple theories to interpret data\n- Different perspectives on findings'
  },
  
  {
    topic: 'Data Collection Methods',
    question: 'What is reflexivity in qualitative research?',
    answer: '**Reflexivity:** The researcher\'s need to constantly be aware of:\n\n1) **How and why** they are conducting the research\n\n2) **When their own beliefs and opinions** might have influenced:\n   - Data collection\n   - Data analysis\n   - Interpretation\n\n3) **Their positionality** - their relationship to the subject\n\n4) **Their assumptions** about the research topic\n\n**Importance:** \n- Acknowledges researcher is not neutral\n- Increases transparency\n- Enhances credibility\n- Part of confirmability\n- Demonstrated through reflective journal or discussion of limitations'
  },
  
  // ============================================
  // TOPIC 8: DATA ANALYSIS (Cards 278-304)
  // ============================================
  
  {
    topic: 'Data Analysis',
    question: 'What are quality control techniques before analyzing data?',
    answer: '**Data quality control before analysis:**\n\n1) **Check if values within normal range**\n   - Identify outliers and extreme values\n   - Determine if realistic\n\n2) **Verify samples taken under normal conditions**\n   - No unusual circumstances during collection\n   - Consistent methodology\n\n3) **Check if outside values within previous extremes**\n   - Compare to historical data\n   - Ensure consistency\n\n4) **Check for data recorded as "under detection limit"**\n   - Note any missing or imputed values\n   - Understand measurement limitations\n\n5) **Compare data to seasonal expectations**\n   - Account for temporal patterns\n   - Contextual validation\n\n**Goal:** Ensure data integrity before statistical analysis'
  },
  
  {
    topic: 'Data Analysis',
    question: 'What is an outlier? What are the five steps of data quality assessment?',
    answer: '**Outlier:** Data that are either very large or very small compared to all or most other numbers. May indicate:\n- Data entry error\n- Measurement error\n- Genuine unusual case\n- Needs investigation\n\n**Five steps of data quality assessment:**\n\n1) **Output** - Describe the data you have\n\n2) **Select the statistical method** - Choose appropriate analysis\n\n3) **Identify assumptions** - Understand method requirements\n\n4) **Perform the statistical method** - Execute analysis\n\n5) **Evaluate the results** - Interpret and validate findings\n\n**Sequential process:** Each step builds on previous'
  },
  
  {
    topic: 'Data Analysis',
    question: 'What should you do before applying statistical tests?',
    answer: '**Before statistical testing, always:**\n\n1) **Group/visualize data**\n   - Create charts, graphs, plots\n   - Look for outliers\n   - Clean data\n\n2) **Explore with summary statistics**\n   - Calculate basic descriptive stats\n   - Get data overview\n\n3) **Try measures of central tendency**\n   - Mean, median, mode\n   - Understand typical value\n\n4) **Describe using measures of spread**\n   - Range, variance, standard deviation\n   - Understand variability\n\n5) **Present data using appropriate formats**\n   - Frequencies, tables, charts, graphs\n   - Visual inspection\n\n**Purpose:** Understand data before formal testing; identify data problems early'
  },
  
  {
    topic: 'Data Analysis',
    question: 'Define cross tabulation. How should variables be arranged?',
    answer: '**Cross Tabulation (Crosstabs):**\n- Presentational device with rows and columns\n- For nominal data (rows) and ordinal data (columns)\n- Shows relationships between categorical variables\n\n**Arrangement:**\n- **Dependent Variable Headings:** Horizontally (across columns)\n- **Independent Variable Headings:** Vertically (down rows)\n\n**Purpose:**\n- Present two or more variables simultaneously\n- Study simultaneous effects\n- Compare frequencies across groups\n\n**Recommendation:**\n- Use percentages instead of frequencies\n- Easier for comparison and interpretation\n- Shows proportional relationships'
  },
  
  {
    topic: 'Data Analysis',
    question: 'When should different charts be used? Explain types',
    answer: '**Chart Selection Guide:**\n\n**1. Bar Charts**\n- Categorical and discrete data\n- Show highest and lowest values\n- Compare categories\n\n**2. Histograms**\n- Continuous data\n- Show distribution\n- Bars represent frequency intervals\n\n**3. Line Graphs**\n- Show trends over time\n- Continuous data\n- Single or multiple variables\n\n**4. Pie Charts**\n- Show proportions\n- Parts of a whole\n- Percentages\n\n**5. Boxplots (Box-and-Whisker)**\n- Distribution of multiple variables\n- Show range and medians\n- Compare several groups\n\n**6. Scatterplots**\n- Relationship between two variables\n- Several variable pairs\n- Correlation visualization\n\n**Guideline:** Avoid unnecessary 3D; only use third dimension if provides additional information'
  },
  
  {
    topic: 'Data Analysis',
    question: 'Define stem-and-leaf plots and explain their construction',
    answer: '**Stem-and-Leaf Plot:** A graphical representation splitting each data value into "stem" (all digits except last) and "leaf" (last digit).\n\n**How to create:**\n\n1) Split each data value into stem and leaf\n   - Example: 36 becomes 3 | 6 (stem=3, leaf=6)\n\n2) Group numbers with same stems\n   - All 20s together, all 30s together, etc.\n\n3) List stems in numerical order vertically\n\n4) List leaves in numerical order horizontally\n\n5) Title the graph\n\n6) Provide legend\n   - Example: "3 | 6 means 36"\n\n**Advantages:**\n- Shows distribution\n- Retains original data values\n- Quick to construct\n- Good for small datasets'
  },
  
  {
    topic: 'Data Analysis',
    question: 'Explain positively and negatively skewed distributions',
    answer: '**Positively Skewed (Right Skewed):**\n- Majority of data values fall to LEFT of mean\n- Cluster at lower end\n- Tail extends to RIGHT\n- Mean > Median > Mode\n- Example: Income distribution (few very high earners)\n\n**Negatively Skewed (Left Skewed):**\n- Majority of data values fall to RIGHT of mean\n- Cluster at upper end\n- Tail extends to LEFT\n- Mean < Median < Mode\n- Example: Test scores (few very low performers)\n\n**Symmetric (Normal) Distribution:**\n- Mean = Median = Mode\n- Bell curve shape\n- Half data on each side\n\n**Importance:** Affects choice of descriptive statistics and statistical tests'
  },
  
  {
    topic: 'Data Analysis',
    question: 'Define frequency polygon and ogive curve',
    answer: '**Frequency Polygon:**\n- Graphical representation of distribution of continuous variable\n- Connects midpoints of histogram bars with lines\n- Shows distribution shape\n- Alternative to histogram\n\n**Ogive Curve (Cumulative Frequency Curve):**\n- Shows cumulative frequency distribution\n- Ascending curve\n- Useful for determining:\n  - Median value\n  - Percentiles\n  - Quartiles\n- "S" shaped curve for normal distribution\n- Can be used to estimate values'
  },
  
  {
    topic: 'Data Analysis',
    question: 'What are four classifications of data for tabulation?',
    answer: '**Four classifications of data for tabulation:**\n\n1) **Geographical Classification**\n   - Data organized by location/region\n   - By state, city, country, etc.\n   - Example: Sales by region\n\n2) **Chronological Classification**\n   - Data organized by time\n   - By year, month, quarter, etc.\n   - Example: Annual revenue 2020-2024\n\n3) **Qualitative Classification**\n   - According to attributes/characteristics\n   - Non-numeric categories\n   - Example: By gender, marital status, color\n\n4) **Quantitative Classification**\n   - According to class intervals\n   - Numeric ranges\n   - Example: Age groups 18-25, 26-35, 36-45\n\n**Purpose:** Organizing data for clarity and analysis'
  },
  
  // ============================================
  // TOPIC 9: RESEARCH FINDINGS & DISCUSSION (Cards 305-327)
  // ============================================
  
  {
    topic: 'Research Findings & Discussion',
    question: 'What is the purpose of the Results section? How should it begin?',
    answer: '**Purpose of Results section:**\n- Report key findings and statistical analyses conducted\n- Summarize findings rather than provide great detail\n- Present results without commenting on them\n- Pure facts, no interpretation\n\n**How to begin Results:**\n- With **descriptive (summary) statistics**\n- Mean, median, range, etc.\n- Summary table of descriptive statistics\n- Establish baseline data characteristics\n\n**Tense:** Past tense\n- Example: "A total of 417 samples contained..."\n- "The average temperature was..."\n- "This difference was not statistically significant"'
  },
  
  {
    topic: 'Research Findings & Discussion',
    question: 'What is the relationship between text and tables/figures in Results?',
    answer: '**Text-Table/Figure Relationship:**\n\n**NOT extensive overlap**\n- Don\'t repeat tables verbatim in text\n- Don\'t say "See Table 3 below" then repeat all data\n\n**Recommended approach:**\n- Text presents ONLY main points from tables/figures\n- Emphasize the finding, not the table\n\n**Good example:**\n"Researchers who attended the workshop published twice as many papers per year (Table 3)."\n\n**Bad example:**\n"Table 3 shows that researchers who attended published twice as many papers per year..."\n\n**Best practice:**\n- Use text to highlight key results\n- Refer to figures for supporting detail\n- Let data speak through visualization'
  },
  
  {
    topic: 'Research Findings & Discussion',
    question: 'What is the function of the Discussion section? What should it include?',
    answer: '**Function of Discussion:**\n- Give MEANING to results (the "why")\n- Place results in context of theory/conceptual framework\n- Place results in context of previous research\n- Assess importance of findings\n- Acknowledge limitations\n- Identify new areas for exploration\n\n**Key difference from Results:**\n- Results = facts, unedited hard data\n- Discussion = what results mean, implications\n\n**Discussion DOES NOT include:**\n- New results not in Results section\n- Buried important literature (that\'s Background\'s role)\n- Extensive repetition of Background'
  },
  
  {
    topic: 'Research Findings & Discussion',
    question: 'Explain the structure of a Discussion section',
    answer: '**Typical Discussion Structure:**\n\n1) **Principal Findings**\n   - Summarize major findings\n   - Shift from numeric data to descriptive words\n   - Do not introduce new results\n\n2) **Interpretation of Findings**\n   - Explain what findings mean\n   - State consistency with previous research\n   - Posit why differences exist\n   - Do not restate Background content\n\n3) **Interpretation in Context of Literature**\n   - How findings fit with body of literature\n   - Relate to theories introduced\n   - Compare and contrast with other studies\n\n4) **Implications**\n   - How results might be generalized\n   - Operational implications\n   - Methodological implications\n   - New considerations from findings\n\n5) **Limitations**\n   - Thoughtful acknowledgment\n   - Demonstrate knowledge of constraints\n   - Preempt reviewer criticism\n\n6) **Summary/Conclusion**\n   - Brief summary of findings\n   - Bottom line message'
  },
  
  {
    topic: 'Research Findings & Discussion',
    question: 'What are the "deadly questions" Discussion must answer?',
    answer: '**Two "deadly questions" Discussion must answer:**\n\n**1. "So What?"**\n- Why do these findings matter?\n- What is their significance?\n- How are they important to the field?\n- What is the practical/theoretical value?\n\n**2. "Who Cares?"**\n- What stakeholders should care about these results?\n- Who is affected?\n- Who can use these findings?\n- Practitioners, researchers, policymakers, public?\n\n**If you cannot answer these questions convincingly:**\n- Your research may lack significance\n- Your Discussion section is weak\n- Your findings may not matter\n\n**Strong Discussion answers both questions clearly and compellingly**'
  },
  
  {
    topic: 'Research Findings & Discussion',
    question: 'What should the Conclusion do? How does it differ from Summary?',
    answer: '**Conclusion should:**\n- Succinctly summarize implications of findings\n- NOT make sweeping statements beyond data\n- Present bottom line message and value\n- Tell reader what to take away\n- Be memorable and impactful\n\n**Summary vs. Conclusion:**\n\n**Summary:**\n- Summarizes findings\n- Factual recap\n- "What we found"\n\n**Conclusion:**\n- Ultimate take-away message\n- Implications and significance\n- "What it means"\n- "What to do with it"\n\n**Note:** Sometimes Summary of Discussion section serves as Conclusion.\n\n**Key difference:** Summary repeats; Conclusion interprets and implies'
  },
  
  {
    topic: 'Research Findings & Discussion',
    question: 'What does data summarization (data condensation) involve?',
    answer: '**Data Summarization (Condensation) Involves:**\n\n1) **Classification**\n   - Organize into categories\n   - Group similar items\n\n2) **Tabulation**\n   - Create tables\n   - Organize in rows/columns\n   - Display systematically\n\n3) **Presenting using graphs/diagrams**\n   - Visual representations\n   - Charts, bar graphs, histograms\n   - Easy to interpret\n\n4) **Using summary statistical measures**\n   - Mean, median, mode (central tendency)\n   - Range, variance, standard deviation (spread)\n   - Percentiles, quartiles\n\n**Purpose:**\n- Reduce large amounts of data to comprehensible form\n- Identify patterns and trends\n- Facilitate communication\n- Support analysis'
  }
];

export const EXAM_CARD_TOPICS = [
  'The Nature of Research',
  'Research Formulation & Design',
  'Literature Review',
  'Research Proposal Writing',
  'Research Design',
  'Sampling Design',
  'Data Collection Methods',
  'Data Analysis',
  'Research Findings & Discussion'
];

export const TOTAL_CARDS_COUNT = RESEARCH_METHODS_CARDS.length;
