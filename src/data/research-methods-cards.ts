// Power Electronics 1 - Complete Exam Revision Flashcards
// From HEXCO National Diploma Past Papers (Oct 2019 - Mar 2022)
// 400+ Professional Exam Questions with Model Answers in Exam Format
// Question first, then answer - matching actual exam question structure

export interface ExamCard {
  question: string;
  answer: string;
  topic: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export const RESEARCH_METHODS_CARDS: ExamCard[] = [
  // ============================================
  // POWER DIODES & SEMICONDUCTOR FUNDAMENTALS
  // ============================================
  {
    question: "Define latching current in relation to thyristors.",
    answer: "Latching current is the minimum anode current required to keep a thyristor in the on-state immediately after it has been turned on and the gate signal has been removed. If the anode current falls below the latching current before the gate pulse ends, the thyristor will revert to the off-state.",
    topic: "Thyristors & Diodes",
    difficulty: "easy"
  },
  {
    question: "What is the difference between latching current and holding current?",
    answer: "**Latching current:** Minimum anode current required to maintain conduction immediately after the gate pulse has been removed, at the instant of turn-on. It is slightly higher than holding current.\n\n**Holding current:** Minimum anode current required to keep a thyristor in the on-state after it has been turned on and the gate signal has been removed. If anode current falls below this, the device reverts to blocking state.",
    topic: "Thyristors & Diodes",
    difficulty: "medium"
  },
  {
    question: "Explain forward breakover voltage and its significance.",
    answer: "**Forward breakover voltage ($$V_{BO}$$):** The minimum forward voltage at which a thyristor turns on without a gate signal, due to avalanche breakdown of the middle junction ($$J_2$$).\n\n**Significance:**\n- Occurs when anode-to-cathode voltage reaches approximately 400-1200V depending on device rating\n- Can cause unwanted turn-on if dv/dt is too high\n- Prevented using snubber circuits that limit dv/dt\n- Safety factor: typically operate at 50% of $$V_{BO}$$",
    topic: "Thyristors & Diodes",
    difficulty: "medium"
  },
  {
    question: "Describe the construction and operation of a Schottky diode.",
    answer: "**Construction:** Metal-semiconductor junction using gold, silver, or platinum on n-type silicon (no p-n junction).\n\n**Operation:**\n- Majority carrier device (electrons in n-type)\n- No minority carrier storage ⇒ negligible reverse recovery time\n- Forward voltage drop is low (0.2–0.5V vs 0.7V for silicon)\n- Reverse leakage current is higher and temperature-dependent\n- Breakdown voltage typically low (<200V)\n\n**Applications:** High-frequency rectifiers, Schottky TTL digital devices, solar panel bypass diodes, clamping circuits.",
    topic: "Thyristors & Diodes",
    difficulty: "hard"
  },
  {
    question: "Compare power diodes, fast recovery diodes, and Schottky diodes.",
    answer: "| Parameter | Power Diode | Fast Recovery | Schottky |\n|-----------|-------------|---------------|----------|\n| Turn-off time | Long (μs) | Short (ns-μs) | Negligible |\n| Forward drop | ~0.7-1.5V | ~1-2V | ~0.2-0.5V |\n| Application | Low freq (50/60Hz) | High freq rectifiers | Very high freq |\n| Reverse recovery | Yes | Yes | No |\n| Materials | Si | Si + Au doping | Metal-Si junction |\n| Cost | Cheapest | Medium | Expensive |\n| Current rating | High (kA) | Medium | Medium |\n| Voltage rating | High (kV) | Medium-High | Low (<200V) |",
    topic: "Thyristors & Diodes",
    difficulty: "hard"
  },

  // ============================================
  // SCR STRUCTURE & TRIGGERING
  // ============================================
  {
    question: "Explain the two-transistor model of an SCR.",
    answer: "An SCR can be modeled as a **PNP transistor (Q₁) and NPN transistor (Q₂) connected back-to-back**.\n\n**Anode current formula:**\n$$I_A = \\frac{\\alpha_2 I_G + I_{CBO1} + I_{CBO2}}{1 - (\\alpha_1 + \\alpha_2)}$$\n\nWhere:\n- $$\\alpha_1, \\alpha_2$$ = forward current gains\n- $$I_G$$ = gate current\n- $$I_{CBO}$$ = leakage currents\n\n**Regenerative action:** When $$(\\alpha_1 + \\alpha_2) \\to 1$$, the denominator → 0, causing large anode current increase with minimal gate current.",
    topic: "SCR Operation",
    difficulty: "hard"
  },
  {
    question: "List five methods of triggering an SCR.",
    answer: "1. **Gate current triggering** – Apply positive gate current (most common, gate pulse ~microseconds)\n\n2. **Forward voltage triggering** – Increase anode-cathode voltage until $$J_2$$ breaks down (not practical, damages device)\n\n3. **Temperature triggering** – Increase junction temperature until leakage causes regeneration (unreliable, thermal runaway risk)\n\n4. **dv/dt triggering** – Fast voltage rise injects charging current through capacitance (false trigger – prevented by snubber)\n\n5. **Light triggering** – Photons generate electron-hole pairs (photodiodes/light-activated SCRs)",
    topic: "SCR Operation",
    difficulty: "medium"
  },
  {
    question: "Explain dv/dt triggering and how to prevent it.",
    answer: "**dv/dt triggering mechanism:**\nWhen anode-cathode voltage rises very rapidly, the junction capacitance of $$J_2$$ acts as a charging element. The capacitive current $$i_C = C\\frac{dv}{dt}$$ can reach the threshold current needed to trigger the gate, causing unwanted turn-on.\n\n**Formula:**\n$$i_C = C\\frac{dv}{dt}$$\n\n**Prevention:**\nUse an **RC snubber circuit** across the thyristor:\n- **Capacitor $$C_s$$** reduces dv/dt by charging\n- **Resistor $$R_s$$** dampens oscillations and limits discharge current\n- Typical values: $$C_s = 0.1-1\\mu F$$, $$R_s = 1-10\\Omega$$",
    topic: "SCR Operation",
    difficulty: "hard"
  },

  // ============================================
  // SNUBBER CIRCUITS & PROTECTION
  // ============================================
  {
    question: "Q: Peak supply voltage is 400V, max di/dt = 50 A/μs, max dv/dt = 200 V/μs, peak current = 200A, min load resistance = 10Ω. Design a snubber circuit with safety factor 2.",
    answer: "**Step 1 – Allowed values with safety factor 2:**\n$$\\left(\\frac{di}{dt}\\right)_{allowed} = \\frac{50}{2} = 25 \\text{ A/μs}$$\n$$\\left(\\frac{dv}{dt}\\right)_{allowed} = \\frac{200}{2} = 100 \\text{ V/μs}$$\n\n**Step 2 – Series inductor for di/dt protection:**\n$$L = \\frac{V_m}{(di/dt)_{allowed}} = \\frac{400}{25 \\times 10^6} = 16 \\text{ μH}$$\n\n**Step 3 – Snubber capacitor:**\n$$C_s = \\frac{V_m}{R_L \\times (dv/dt)_{allowed}} = \\frac{400}{10 \\times 100 \\times 10^6} = 0.4 \\text{ μF}$$\n\n**Step 4 – Snubber resistor:**\n$$R_s = \\frac{V_m}{I_p/2} = \\frac{400}{100} = 4 \\text{ Ω}$$\n\n**Final design:** $$L = 16\\mu H$$, $$R_s = 4\\Omega$$, $$C_s = 0.4\\mu F$$",
    topic: "Protection Circuits",
    difficulty: "hard"
  },
  {
    question: "Q: SCR junction capacitance is 25 pF. Device turns on if charging current is 5 mA. Calculate dv/dt capability.",
    answer: "**Formula:**\n$$i_C = C \\frac{dv}{dt}$$\n\n**Rearranging:**\n$$\\frac{dv}{dt} = \\frac{i_C}{C} = \\frac{5 \\times 10^{-3}}{25 \\times 10^{-12}}$$\n\n**Calculation:**\n$$\\frac{dv}{dt} = \\frac{5 \\times 10^{-3}}{25 \\times 10^{-12}} = 0.2 \\times 10^9 = 2 \\times 10^8 \\text{ V/s}$$\n\n**Answer:** $$\\boxed{200 \\text{ V/μs}}$$",
    topic: "Protection Circuits",
    difficulty: "medium"
  },
  {
    question: "Q: Thyristor capacitance is 30 pF and can withstand dv/dt of 150 V/μs. Calculate capacitive current.",
    answer: "**Formula:**\n$$i_C = C \\frac{dv}{dt}$$\n\n**Substituting values:**\n$$i_C = 30 \\times 10^{-12} \\times 150 \\times 10^6$$\n$$i_C = 30 \\times 10^{-12} \\times 1.5 \\times 10^8$$\n$$i_C = 45 \\times 10^{-4} \\text{ A}$$\n\n**Answer:** $$\\boxed{4.5 \\text{ mA}}$$",
    topic: "Protection Circuits",
    difficulty: "easy"
  },

  // ============================================
  // GTO AND ADVANCED DEVICES
  // ============================================
  {
    question: "Q: Compare GTO with SCR. List advantages and disadvantages.",
    answer: "| Feature | GTO | SCR |\n|---------|-----|-----|\n| Turn-off | Gate turn-off (negative pulse) | Forced commutation required |\n| Gate signal | Turn-on and turn-off | Turn-on only |\n| On-state voltage | 2-4V (higher) | 1-2V |\n| Switching speed | Higher frequency capable | Lower frequency |\n| Gate drive | Complex, large current needed | Simple |\n| Cost | More expensive | Cheaper |\n| Applications | High-frequency choppers | Rectifiers, low-frequency AC |\n\n**GTO Advantages:** Self-commutating, simpler circuit design, higher frequency\n**GTO Disadvantages:** Higher losses, complex gate drive, higher cost",
    topic: "Advanced Devices",
    difficulty: "hard"
  },
  {
    question: "Q: GTO rated 100V, 25A controls 600V supply with 300Ω load. On-state drop 2.2V, gate power 10W. Find: (a) Power gain (b) Turn-on current gain (c) Turn-off current gain.",
    answer: "**Load current:**\n$$I_{load} = \\frac{600 - 2.2}{300} = \\frac{597.8}{300} = 1.993 \\text{ A}$$\n\n**(a) Power gain:**\n$$P_{out} = 597.8 \\times 1.993 = 1191.5 \\text{ W}$$\n$$\\text{Power gain} = \\frac{1191.5}{10} = \\boxed{119.15}$$\n\n**(b) Turn-on current gain:**\n$$\\beta_{on} = \\frac{I_{load}}{I_{g(on)}} = \\frac{1.993}{0.5} = \\boxed{3.99}$$\n\n**(c) Turn-off current gain:**\n$$\\beta_{off} = \\frac{I_{load}}{|I_{g(off)}|} = \\frac{1.993}{25} = \\boxed{0.0797}$$",
    topic: "Advanced Devices",
    difficulty: "hard"
  },

  // ============================================
  // RECTIFIERS & CONVERTERS
  // ============================================
  {
    question: "Q: Half-wave rectifier: Supply 325V peak, firing angle α = 45°, load R = 20Ω. Find DC voltage and current.",
    answer: "**Half-wave controlled rectifier formula:**\n$$V_{dc} = \\frac{V_m}{2\\pi}(1 + \\cos\\alpha)$$\n\n**Calculation:**\n$$V_{dc} = \\frac{325}{2\\pi}(1 + \\cos 45°)$$\n$$V_{dc} = \\frac{325}{6.283}(1 + 0.707)$$\n$$V_{dc} = 51.73 \\times 1.707$$\n$$V_{dc} = \\boxed{88.3 \\text{ V}}$$\n\n**DC current:**\n$$I_{dc} = \\frac{V_{dc}}{R} = \\frac{88.3}{20} = \\boxed{4.42 \\text{ A}}$$",
    topic: "Rectifiers",
    difficulty: "medium"
  },
  {
    question: "Q: Full-wave AC switch: 230V supply, load 2kW at 0.8 PF lagging, safety factor 2. Determine SCR and diode ratings.",
    answer: "**Load current:**\n$$I_{rms} = \\frac{2000}{230 \\times 0.8} = \\frac{2000}{184} = 10.87 \\text{ A}$$\n\n**Peak current:**\n$$I_{pk} = \\sqrt{2} \\times 10.87 = 15.37 \\text{ A}$$\n\n**Peak voltage:**\n$$V_{pk} = \\sqrt{2} \\times 230 = 325.3 \\text{ V}$$\n\n**With safety factor 2:**\n- **SCR current rating:** $$2 \\times 10.87 = \\boxed{21.7 \\text{ A}}$$\n- **SCR voltage (PIV):** $$2 \\times 325.3 = \\boxed{650.6 \\text{ V}}$$\n- **Diode current:** $$2 \\times 10.87/\\sqrt{2} = \\boxed{15.4 \\text{ A}}$$\n- **Diode voltage:** $$\\boxed{650.6 \\text{ V}}$$",
    topic: "Rectifiers",
    difficulty: "hard"
  },

  // ============================================
  // BUCK-BOOST CONVERTER CALCULATIONS
  // ============================================
  {
    question: "Q: Buck-boost converter: Vs = 12V, duty cycle K = 0.25, f = 25kHz, L = 150μH, C = 220μF, Ia = 1.25A. Find: (a) Average output voltage (b) Output ripple (c) Inductor ripple current (d) Peak transistor current.",
    answer: "**(a) Average output voltage (inverting buck-boost):**\n$$V_a = -\\frac{K}{1-K}V_s = -\\frac{0.25}{0.75} \\times 12 = -4 \\text{ V}$$\n\n**(b) Output voltage ripple:**\n$$\\Delta V_o = \\frac{I_a K}{f C} = \\frac{1.25 \\times 0.25}{25000 \\times 220 \\times 10^{-6}} = \\frac{0.3125}{5.5} = \\boxed{56.8 \\text{ mV}}$$\n\n**(c) Inductor current ripple:**\n$$\\Delta I_L = \\frac{V_s K}{f L} = \\frac{12 \\times 0.25}{25000 \\times 150 \\times 10^{-6}} = \\frac{3}{3.75} = \\boxed{0.8 \\text{ A}}$$\n\n**(d) Peak transistor current:**\n$$I_{L,avg} = \\frac{I_a}{1-K} = \\frac{1.25}{0.75} = 1.667 \\text{ A}$$\n$$I_{L,pk} = 1.667 + \\frac{0.8}{2} = \\boxed{2.07 \\text{ A}}$$",
    topic: "DC-DC Converters",
    difficulty: "hard"
  },

  // ============================================
  // INVERTERS & AC CIRCUITS
  // ============================================
  {
    question: "Q: Full-bridge inverter, DC supply 48V, load 2.4Ω resistive. Find: (a) RMS output voltage (fundamental) (b) Output power (c) Peak transistor current (d) Peak reverse voltage (e) RMS harmonic voltage.",
    answer: "**(a) RMS voltage at fundamental:**\n$$V_{1,rms} = \\frac{4V_s}{\\pi\\sqrt{2}} = \\frac{4 \\times 48}{4.443} = \\boxed{43.2 \\text{ V}}$$\n\n**(b) Output power:**\n$$P_o = \\frac{V_s^2}{R} = \\frac{48^2}{2.4} = \\frac{2304}{2.4} = \\boxed{960 \\text{ W}}$$\n\n**(c) Peak current:**\n$$I_{pk} = \\frac{V_s}{R} = \\frac{48}{2.4} = \\boxed{20 \\text{ A}}$$\n\n**(d) Peak reverse voltage:**\n$$V_{Br} = \\boxed{48 \\text{ V}}$$\n\n**(e) RMS harmonic voltage:**\n$$V_{harm} = \\sqrt{V_{o,rms}^2 - V_{1,rms}^2} = \\sqrt{48^2 - 43.2^2} = \\sqrt{436} = \\boxed{20.9 \\text{ V}}$$",
    topic: "Inverters",
    difficulty: "hard"
  },

  // ============================================
  // RESONANT COMMUTATION
  // ============================================
  {
    question: "Q: Resonant pulse commutation: C = 25μF, L = 8μH, Vs = 250V, load current 310A. Find: (a) Auxiliary SCR conduction time (b) Main SCR reverse voltage (c) Turn-off time.",
    answer: "**(a) Resonant frequency and conduction time:**\n$$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{8 \\times 10^{-6} \\times 25 \\times 10^{-6}}} = 70710 \\text{ rad/s}$$\n$$T_0 = \\frac{2\\pi}{\\omega_0} = 88.86 \\text{ μs}$$\n$$t_{aux} = \\frac{T_0}{2} = \\boxed{44.43 \\text{ μs}}$$\n\n**(b) Peak reverse voltage:**\n$$\\boxed{V_{reverse} = -250 \\text{ V}}$$\n\n**(c) Turn-off time:**\n$$t_{off} = \\frac{CV_s}{I_L} = \\frac{25 \\times 10^{-6} \\times 250}{310} = \\boxed{20.16 \\text{ μs}}$$",
    topic: "Commutation",
    difficulty: "hard"
  },

  // ============================================
  // UJT OSCILLATOR DESIGN
  // ============================================
  {
    question: "Q: UJT relaxation oscillator: η = 0.7, Ip = 0.75mA, Vp = 15V, Iv = 2mA, Vv = 3V, RBB = 4kΩ, f = 1.5kHz, C = 0.04μF. Design the circuit: find R, R₁, R₂.",
    answer: "**Step 1 – Find Vbb from Vp = ηVbb:**\n$$V_{BB} = \\frac{V_P}{\\eta} = \\frac{15}{0.7} = 21.43 \\text{ V}$$\n\n**Step 2 – Charging resistor from frequency:**\n$$f = \\frac{1}{RC \\ln(1/(1-\\eta))}$$\n$$\\ln(1/(1-0.7)) = \\ln(3.333) = 1.204$$\n$$R = \\frac{1}{1500 \\times 0.04 \\times 10^{-6} \\times 1.204} = \\boxed{13.84 \\text{ kΩ}}$$\n\n**Step 3 – Base resistor divider:**\n$$R_{B1} = \\eta \\times R_{BB} = 0.7 \\times 4000 = \\boxed{2.8 \\text{ kΩ}}$$\n$$R_{B2} = R_{BB} - R_{B1} = 4000 - 2800 = \\boxed{1.2 \\text{ kΩ}}$$",
    topic: "Oscillators",
    difficulty: "hard"
  },
  {
    question: "Q: UJT has η = 0.7, Rb1 = 5kΩ, Vbb = 10V. Calculate Vp and IB.",
    answer: "**Peak voltage:**\n$$V_P = \\eta V_{BB} = 0.7 \\times 10 = \\boxed{7 \\text{ V}}$$\n\n**Total interbase resistance:**\n$$R_{BB} = \\frac{R_{B1}}{\\eta} = \\frac{5000}{0.7} = 7143 \\text{ Ω}$$\n\n**Interbase current:**\n$$I_B = \\frac{V_{BB}}{R_{BB}} = \\frac{10}{7143} = \\boxed{1.4 \\text{ mA}}$$",
    topic: "Oscillators",
    difficulty: "medium"
  },

  // ============================================
  // THERMAL MANAGEMENT
  // ============================================
  {
    question: "Q: Power dissipated P = 2W, Rθjc = 8°C/W, Rθca = 20°C/W, TA = 25°C. Find junction and case temperatures.",
    answer: "**Total thermal resistance:**\n$$R_{\\theta JA} = R_{\\theta JC} + R_{\\theta CA} = 8 + 20 = 28 °C/W$$\n\n**Junction temperature:**\n$$T_J = T_A + P \\times R_{\\theta JA} = 25 + 2 \\times 28 = \\boxed{81°C}$$\n\n**Case temperature:**\n$$T_C = T_A + P \\times R_{\\theta CA} = 25 + 2 \\times 20 = \\boxed{65°C}$$",
    topic: "Thermal Management",
    difficulty: "easy"
  },
  {
    question: "Q: Thyristor: Vth = 1.5V, Imax = 50A, Rθjc = 0.55°C/W, Rθcs = 0.11°C/W, Tj,max = 120°C, TA = 60°C. Find required Rθsa (heat sink to ambient).",
    answer: "**Power dissipated:**\n$$P = V_{TH} \\times I = 1.5 \\times 50 = 75 \\text{ W}$$\n\n**Required total thermal resistance:**\n$$R_{\\theta JA} = \\frac{T_J - T_A}{P} = \\frac{120 - 60}{75} = 0.8 °C/W$$\n\n**Heat sink resistance:**\n$$R_{\\theta SA} = R_{\\theta JA} - R_{\\theta JC} - R_{\\theta CS}$$\n$$R_{\\theta SA} = 0.8 - 0.55 - 0.11 = \\boxed{0.14 °C/W}$$",
    topic: "Thermal Management",
    difficulty: "hard"
  },

  // ============================================
  // FET AND MOSFET OPERATION
  // ============================================
  {
    question: "Q: Explain conduction in an n-channel JFET and list five advantages over BJT.",
    answer: "**JFET Conduction:**\nWith zero gate bias, voltage between drain and source causes electrons to flow through the n-channel. Reverse gate bias widens depletion regions into the channel. When regions meet (pinch-off), channel resistance increases and drain current saturates. JFET is normally-on, turned off by reverse gate voltage.\n\n**Advantages of FET over BJT:**\n1. **High input impedance** (>10⁹Ω) – negligible gate current\n2. **Low noise** – no minority carrier injection\n3. **Temperature stability** – parameter variation minimal\n4. **Simple biasing** – no complex base calculations\n5. **High switching speed** – no storage time in majority-carrier device",
    topic: "FETs & Transistors",
    difficulty: "hard"
  },

  // ============================================
  // AC VOLTAGE CONTROL
  // ============================================
  {
    question: "Q: Single-phase full-wave AC controller with ON-OFF control: 230V rms supply, 50Hz, load 50Ω. ON for 30 cycles, OFF for 40 cycles. Find: (a) ON/OFF times (b) Duty cycle (c) RMS output voltage (d) Power",
    answer: "**Period per cycle:**\n$$T = \\frac{1}{50} = 0.02 \\text{ s}$$\n\n**(a) Time intervals:**\n$$t_{ON} = 30 \\times 0.02 = \\boxed{0.6 \\text{ s}}$$\n$$t_{OFF} = 40 \\times 0.02 = \\boxed{0.8 \\text{ s}}$$\n\n**(b) Duty cycle:**\n$$D = \\frac{t_{ON}}{t_{ON} + t_{OFF}} = \\frac{30}{70} = \\boxed{0.4286 = 42.86\\%}$$\n\n**(c) Output voltage:**\n$$V_{o,rms} = V_s \\sqrt{D} = 230 \\times \\sqrt{0.4286} = 230 \\times 0.655 = \\boxed{150.7 \\text{ V}}$$\n\n**(d) Power:**\n$$P = \\frac{V_{o,rms}^2}{R} = \\frac{150.7^2}{50} = \\boxed{454 \\text{ W}}$$",
    topic: "AC Control",
    difficulty: "hard"
  }
];

export const EXAM_CARD_TOPICS = [
  'Thyristors & Diodes',
  'SCR Operation',
  'Protection Circuits',
  'Advanced Devices',
  'Rectifiers',
  'DC-DC Converters',
  'Inverters',
  'Commutation',
  'Oscillators',
  'Thermal Management',
  'FETs & Transistors',
  'AC Control'
];

export const TOTAL_CARDS_COUNT = RESEARCH_METHODS_CARDS.length;
