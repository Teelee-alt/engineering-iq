// Power Electronics 1 - Complete Exam Revision Flashcards
// From HEXCO National Diploma Past Papers (Oct 2019 - Mar 2022)
// 400+ Professional Exam Questions with Model Answers

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
    answer: "**Latching current** is the minimum anode current required to keep a thyristor in the on-state immediately after it has been turned on and the gate signal has been removed. If the anode current falls below the latching current before the gate pulse ends, the thyristor will revert to the off-state.",
    topic: "Thyristors & Diodes"
  },
  {
    question: "Define holding current.",
    answer: "**Holding current** is the minimum anode current required to maintain a thyristor in the on-state after it has been turned on. If the anode current falls below the holding current, the device reverts to the blocking state. Holding current is slightly lower than latching current.",
    topic: "Thyristors & Diodes"
  },
  {
    question: "What is forward breakover voltage?",
    answer: "**Forward breakover voltage ($$V_{BO}$$)** is the minimum forward voltage (anode positive with respect to cathode) at which a thyristor turns on without a gate signal, due to avalanche breakdown of the middle ($$J_2$$) junction. Typical values range from 400-1200V depending on device rating.",
    topic: "Thyristors & Diodes"
  },
  {
    question: "List three advantages of a Schottky diode over a standard silicon diode.",
    answer: "**Advantages of Schottky diodes:**\n1) **Very fast switching speed** – no charge storage means negligible reverse recovery time\n2) **Low forward voltage drop** (0.2–0.5V vs 0.7V) → reduced conduction losses\n3) **No minority carrier injection** → suitable for high-frequency applications\n\n**Disadvantages:**\n- Higher reverse leakage current\n- Low reverse breakdown voltage (<200V)",
    topic: "Thyristors & Diodes"
  },
  {
    question: "Describe the construction and operation of a fast recovery diode.",
    answer: "**Construction:** A semiconductor junction diode doped with **gold (Au)** or other recombination centres to reduce minority carrier lifetime.\n\n**Operation:**\n- Forward biased: conducts current like normal diode (≈0.7V drop)\n- Reverse biased: fast turn-off because gold creates recombination centers\n- **Reverse recovery time:** typically 0.5–50 ns (vs μs for standard diodes)\n\n**Applications:** High-frequency rectifiers, SMPS, chopper and inverter circuits.",
    topic: "Thyristors & Diodes"
  },

  // ============================================
  // SCR STRUCTURE & OPERATION
  // ============================================
  {
    question: "Draw and label the two-transistor equivalent model of an SCR.",
    answer: "An SCR can be modeled as a **PNP transistor (Q₁) and NPN transistor (Q₂) connected back-to-back**.\n\n**Anode current formula:**\n$$I_A = \\frac{\\alpha_2 I_G + I_{CBO1} + I_{CBO2}}{1 - (\\alpha_1 + \\alpha_2)}$$\n\nWhere:\n- $$\\alpha_1, \\alpha_2$$ = forward current gains of Q₁ and Q₂\n- $$I_G$$ = gate current\n- $$I_{CBO}$$ = leakage currents\n\nWhen $$(\\alpha_1 + \\alpha_2) \\to 1$$, the denominator → 0, causing regenerative turn-on and high anode current.",
    topic: "Thyristors & Diodes"
  },
  {
    question: "List five methods of triggering (turning on) an SCR.",
    answer: "1. **Forward voltage triggering** – apply high forward voltage until avalanche breakdown (unreliable, damages device)\n\n2. **Temperature (thermal) triggering** – increase junction temperature until thermal runaway occurs (unreliable)\n\n3. **dv/dt triggering** – fast rising voltage across SCR injects capacitive current into J₂ (false turn-on, prevented by snubber)\n\n4. **Light triggering** – used in LASCR; light strikes inner P layer generating electron-hole pairs\n\n5. **Gate triggering** – apply positive voltage between gate and cathode (most common, most reliable)",
    topic: "Thyristors & Diodes"
  },
  {
    question: "An SCR has on-state voltage drop of 1.5V and carries 50A from a 600V supply with 300Ω load resistance. Calculate: (a) Device power gain, (b) Turn-on current gain, (c) Turn-off current gain if gate turn-off current is 25A.",
    answer: "**Given:** $$V_{on} = 1.5\\text{ V}$$, $$I_{load} = 50\\text{ A}$$, $$I_{g(on)} = 0.5\\text{ A}$$, $$I_{g(off)} = 25\\text{ A}$$\n\n**Load current:**\n$$I_{load} = \\frac{600-1.5}{300} = \\frac{597.8}{300} = 1.99\\text{ A}$$\n\n**Output power:**\n$$P_{out} = 597.8 \\times 1.99 = 1191.5\\text{ W}$$\n\n**a) Power gain:**\n$$\\text{Power gain} = \\frac{1191.5}{10} = 119.15$$\n\n**b) Turn-on current gain:**\n$$\\beta_{on} = \\frac{1.99}{0.5} = 3.99$$\n\n**c) Turn-off current gain:**\n$$\\beta_{off} = \\frac{1.99}{25} = 0.0797$$",
    topic: "Thyristors & Diodes",
    difficulty: "hard"
  },

  // ============================================
  // UJT & TRIGGERING CIRCUITS
  // ============================================
  {
    question: "Define the intrinsic stand-off ratio (η) of a UJT and derive the formula for peak voltage.",
    answer: "**Intrinsic stand-off ratio (η):**\n$$\\eta = \\frac{R_{B1}}{R_{BB}}$$\n\nWhere:\n- $$R_{B1}$$ = resistance from emitter to base B₁\n- $$R_{BB}$$ = total interbase resistance ($$R_{B1} + R_{B2}$$)\n- Typical range: 0.51 – 0.82\n\n**Peak voltage (emitter firing potential):**\n$$V_P = \\eta V_{BB} + V_D$$\n\nWhere $$V_D$$ ≈ 0.5V is the diode drop\n\n**Example:** If $$\\eta = 0.7$$ and $$V_{BB} = 20\\text{ V}$$, then $$V_P = 0.7 \\times 20 + 0.5 = 14.5\\text{ V}$$",
    topic: "Gate Drive & Triggering"
  },
  {
    question: "Derive the frequency formula for a UJT relaxation oscillator and list the conditions for stable oscillation.",
    answer: "**Frequency formula:**\n$$f = \\frac{1}{RC \\ln\\left(\\frac{1}{1-\\eta}\\right)}$$\n\nWhere:\n- $$R$$ = charging resistor\n- $$C$$ = capacitor\n- $$\\eta$$ = intrinsic stand-off ratio\n\n**Conditions for oscillation:**\n$$R_{min} < R < R_{max}$$\n\nWhere:\n$$R_{min} = \\frac{V_S - V_V}{I_V}, \\quad R_{max} = \\frac{V_S - V_P}{I_P}$$\n\n**Design example:** For $$\\eta = 0.7$$, $$f = 1.5\\text{ kHz}$$, $$C = 0.04\\text{ μF}$$:\n$$R = \\frac{1}{1500 \\times 0.04\\times10^{-6} \\times \\ln(3.33)} = 13.84\\text{ kΩ}$$",
    topic: "Gate Drive & Triggering",
    difficulty: "hard"
  },
  {
    question: "A UJT oscillator has η = 0.66, Vₚ = 14V, Vᵥ = 1V, Iₚ = 0.5mA, Iᵥ = 3mA, and f = 2kHz. Design the circuit: find Vₛ, R, R_B1, R_B2.",
    answer: "**Step 1 – Find Vₛ:**\n$$V_P = \\eta V_S + V_D \\Rightarrow 14 = 0.66 V_S + 0.8$$\n$$V_S = \\frac{13.2}{0.66} = 20\\text{ V}$$\n\n**Step 2 – Find R (charging resistor):**\n$$\\ln\\left(\\frac{1}{1-0.66}\\right) = \\ln(2.94) = 1.079$$\n$$R = \\frac{1}{2000 \\times 0.04\\times10^{-6} \\times 1.079} = 11.6\\text{ kΩ}$$\n\n**Step 3 – Find Rₑ₁ and Rₑ₂:**\n$$R_{B1} = \\eta R_{BB} = 0.66 \\times 5000 = 3.3\\text{ kΩ}$$\n$$R_{B2} = 5000 - 3300 = 1.7\\text{ kΩ}$$\n\n**Circuit:** Supply 20V → R(11.6kΩ) → C(0.04μF) to base B₁ through Rₑ₁(3.3kΩ); Rₑ₂(1.7kΩ) to ground.",
    topic: "Gate Drive & Triggering",
    difficulty: "hard"
  },

  // ============================================
  // SNUBBER DESIGN & PROTECTION
  // ============================================
  {
    question: "Explain the purpose of snubber circuits. What are the two components and their functions?",
    answer: "**Purpose:** A snubber circuit protects thyristors from false turn-on caused by **dv/dt** (rate of voltage change) across the device. When voltage rises too rapidly, capacitive current can falsely trigger the device.\n\n**Components:**\n\n1) **Capacitor (Cₛ)** – Limits the rate of voltage rise by providing a parallel path for displacement current. Acts as a low-impedance path for high-frequency components.\n\n2) **Resistor (Rₛ)** – Limits the discharge current when the SCR turns on. When the SCR switches, the capacitor discharges through Rₛ, preventing excessive di/dt. Also provides damping to reduce oscillations.\n\n**Typical values:** $$C_s = 0.1 - 1\\text{ μF}$$, $$R_s = 4 - 10\\text{ Ω}$$",
    topic: "Protection Circuits"
  },
  {
    question: "Design a snubber circuit for an SCR with: Peak supply 400V, max dv/dt = 200V/μs, max di/dt = 50A/μs, load R = 10Ω, safety factor = 2.",
    answer: "**Step 1 – Apply safety factor:**\n$$\\left(\\frac{dv}{dt}\\right)_{allowed} = \\frac{200}{2} = 100\\text{ V/μs}$$\n$$\\left(\\frac{di}{dt}\\right)_{allowed} = \\frac{50}{2} = 25\\text{ A/μs}$$\n\n**Step 2 – Calculate inductance L (di/dt protection):**\n$$L = \\frac{V_S}{(di/dt)_{allowed}} = \\frac{400}{25\\times10^6} = 16\\text{ μH}$$\n\n**Step 3 – Calculate snubber capacitor Cₛ:**\nInitial dv/dt after turn-off: $$\\frac{dv}{dt} = \\frac{V_S}{R_L C_s}$$\n$$C_s = \\frac{V_S}{R_L \\cdot (dv/dt)_{allowed}} = \\frac{400}{10 \\times 100\\times10^6} = 0.4\\text{ μF}$$\n\n**Step 4 – Calculate snubber resistor Rₛ:**\nAllowed peak snubber discharge current = 100A (safety factor applied)\n$$R_s = \\frac{V_S}{100} = \\frac{400}{100} = 4\\text{ Ω}$$\n\n**Result:** Series inductor L = 16μH, RC snubber: Rₛ = 4Ω, Cₛ = 0.4μF",
    topic: "Protection Circuits",
    difficulty: "hard"
  },
  {
    question: "Calculate the thermal resistance and junction temperature. Given: Pₐᵥ = 75W, Rθⱼ꜀ = 0.55°C/W, Rθ꜀ₛ = 0.11°C/W, Rθₛₐ = 0.14°C/W, Tₐ = 25°C.",
    answer: "**Thermal resistance chain:**\n$$T_J = T_A + P_A (R_{\\theta JC} + R_{\\theta CS} + R_{\\theta SA})$$\n\n**Substituting values:**\n$$T_J = 25 + 75 \\times (0.55 + 0.11 + 0.14)$$\n$$T_J = 25 + 75 \\times 0.8$$\n$$T_J = 25 + 60 = 85°C$$\n\n**Thermal resistances:**\n- Junction to case: 0.55°C/W\n- Case to sink: 0.11°C/W  \n- Sink to ambient: 0.14°C/W\n- **Total:** 0.8°C/W\n\n**Interpretation:** For every 1W dissipated, junction temperature rises 0.8°C above ambient. At 75W loss, the junction is 60°C above ambient.",
    topic: "Protection Circuits",
    difficulty: "medium"
  },

  // ============================================
  // COMMUTATION (SCR TURN-OFF)
  // ============================================
  {
    question: "Define commutation and explain why it is necessary in DC circuits but not in AC circuits.",
    answer: "**Commutation** is the process of turning off a thyristor by reducing the anode current below the holding current and applying a reverse voltage for sufficient time to allow the device to regain its forward blocking capability.\n\n**AC circuits (natural commutation):**\n- The AC voltage naturally reverses every half-cycle\n- Anode current passes through zero, automatically turning off the SCR\n- No external circuits required\n\n**DC circuits (forced commutation):**\n- Supply voltage never reverses\n- Anode current cannot naturally reach zero\n- External commutation circuits required using LC resonance or capacitor reversal\n- Must actively apply reverse voltage to force turn-off",
    topic: "Commutation & Switching"
  },
  {
    question: "For resonant pulse commutation with C = 25μF, L = 8μH, Vₛ = 250V, Iₗ = 310A (constant load), find: (a) conduction time of auxiliary SCR, (b) peak reverse voltage on main SCR, (c) turn-off time.",
    answer: "**Step 1 – Resonant frequency:**\n$$\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{8\\times10^{-6} \\times 25\\times10^{-6}}} = 70710\\text{ rad/s}$$\n\n**Step 2 – Resonant period:**\n$$T_0 = \\frac{2\\pi}{\\omega_0} = \\frac{6.283}{70710} = 88.86\\text{ μs}$$\n\n**(a) Conduction time of auxiliary SCR = T₀/2 = 44.43μs**\n\n**(b) Peak reverse voltage:**\nWhen auxiliary fires, capacitor reverses. Maximum reverse voltage across main SCR = **-250V**\n\n**(c) Turn-off time:**\nTime for capacitor to reverse from +Vₛ to -Vₛ at constant Iₗ:\n$$t_{off} = \\frac{CV_S}{I_L} = \\frac{25\\times10^{-6} \\times 250}{310} = 20.16\\text{ μs}$$",
    topic: "Commutation & Switching",
    difficulty: "hard"
  },

  // ============================================
  // RECTIFICATION
  // ============================================
  {
    question: "For a single-phase half-wave controlled rectifier with Vₘ = 325V, R = 20Ω, α = 45°, calculate: (a) DC voltage, (b) DC current, (c) RMS voltage.",
    answer: "**Given:** $$V_m = 325\\text{ V}$$, $$R = 20\\text{ Ω}$$, $$\\alpha = 45° = \\pi/4$$\n\n**(a) DC voltage:**\n$$V_{dc} = \\frac{V_m}{2\\pi}(1 + \\cos\\alpha) = \\frac{325}{6.283}(1 + \\cos 45°)$$\n$$V_{dc} = 51.73 \\times 1.7071 = 88.31\\text{ V}$$\n\n**(b) DC current:**\n$$I_{dc} = \\frac{V_{dc}}{R} = \\frac{88.31}{20} = 4.416\\text{ A}$$\n\n**(c) RMS voltage:**\n$$V_{rms} = V_m\\sqrt{\\frac{1}{4\\pi}\\left(2\\pi - 2\\alpha + \\sin 2\\alpha\\right)}$$\n\nWith $$\\sin 2\\alpha = \\sin 90° = 1$$:\n$$V_{rms} = 325 \\times \\sqrt{\\frac{5.7124}{12.566}} = 325 \\times 0.6743 = 219.1\\text{ V}$$",
    topic: "Rectifiers & Converters",
    difficulty: "hard"
  },
  {
    question: "Calculate rectification efficiency, ripple factor, and PIV for the above half-wave rectifier.",
    answer: "**From previous calculation:** $$V_{dc} = 88.31\\text{ V}$$, $$I_{dc} = 4.416\\text{ A}$$, $$V_{rms} = 219.1\\text{ V}$$, $$I_{rms} = 10.96\\text{ A}$$\n\n**Rectification efficiency:**\n$$\\eta = \\frac{P_{dc}}{P_{ac}} = \\frac{V_{dc}I_{dc}}{V_{rms}I_{rms}} = \\frac{88.31 \\times 4.416}{219.1 \\times 10.96} = \\frac{390}{2402} = 16.24\\%$$\n\n**Ripple factor:**\n$$RF = \\sqrt{\\left(\\frac{V_{rms}}{V_{dc}}\\right)^2 - 1} = \\sqrt{(2.482)^2 - 1} = \\sqrt{5.16} = 2.272$$\n\n**PIV (Peak Inverse Voltage):**\nFor half-wave rectifier:\n$$PIV = V_m = 325\\text{ V}$$",
    topic: "Rectifiers & Converters",
    difficulty: "medium"
  },

  // ============================================
  // DC-DC CONVERTERS
  // ============================================
  {
    question: "For a buck converter: Vₛ = 12V, Vₒ = 5V, f = 25kHz, ΔI = 0.8A (inductor ripple), ΔV = 20mV (output ripple). Calculate duty cycle, filter inductance L, and filter capacitance C.",
    answer: "**Step 1 – Duty cycle (D):**\n$$V_o = D \\cdot V_s \\Rightarrow D = \\frac{V_o}{V_s} = \\frac{5}{12} = 0.4167$$\n\n**Step 2 – Filter inductor L:**\nInductor ripple current: $$\\Delta I = \\frac{(V_s - V_o) \\cdot D}{L \\cdot f}$$\n$$L = \\frac{(V_s - V_o) \\cdot D}{\\Delta I \\cdot f} = \\frac{7 \\times 0.4167}{0.8 \\times 25000} = \\frac{2.917}{20000} = 146\\text{ μH}$$\n\n**Step 3 – Filter capacitor C:**\n$$\\Delta V = \\frac{\\Delta I}{8fC}$$\n$$C = \\frac{\\Delta I}{8f\\Delta V} = \\frac{0.8}{8 \\times 25000 \\times 0.02} = \\frac{0.8}{4000} = 200\\text{ μF}$$\n\n**Result:** D = 0.4167, L = 146μH, C = 200μF",
    topic: "Rectifiers & Converters",
    difficulty: "hard"
  },
  {
    question: "For a buck-boost converter: Vₛ = 12V, D = 0.25, f = 25kHz, L = 150μH, C = 220μF, Iₐ = 1.25A. Calculate: (a) average output voltage, (b) output ripple voltage, (c) inductor ripple current, (d) peak transistor current.",
    answer: "**Given:** Inverting buck-boost topology\n\n**(a) Average output voltage:**\n$$V_a = -\\frac{D}{1-D}V_s = -\\frac{0.25}{0.75} \\times 12 = -4\\text{ V}$$\n\n**(b) Output ripple voltage:**\n$$\\Delta V_o = \\frac{I_a D}{fC} = \\frac{1.25 \\times 0.25}{25000 \\times 220\\times10^{-6}} = \\frac{0.3125}{5.5} = 56.8\\text{ mV}$$\n\n**(c) Inductor ripple current:**\n$$\\Delta I_L = \\frac{V_s D}{fL} = \\frac{12 \\times 0.25}{25000 \\times 150\\times10^{-6}} = \\frac{3}{3.75} = 0.8\\text{ A}$$\n\n**(d) Peak transistor current:**\nAverage inductor current: $$I_L = \\frac{I_a}{1-D} = \\frac{1.25}{0.75} = 1.667\\text{ A}$$\nPeak current: $$I_{pk} = I_L + \\frac{\\Delta I_L}{2} = 1.667 + 0.4 = 2.067\\text{ A}$$",
    topic: "Rectifiers & Converters",
    difficulty: "hard"
  },

  // ============================================
  // INVERTERS
  // ============================================
  {
    question: "For a single-phase half-bridge inverter: R = 2.4Ω, Vₛ = 48V. Calculate: (a) fundamental RMS voltage, (b) output power, (c) peak and average transistor currents, (d) peak reverse blocking voltage.",
    answer: "**Given:** Half-bridge inverts DC to AC\n\n**(a) Fundamental RMS voltage at output:**\n$$V_{1,rms} = \\frac{2V_s}{\\pi\\sqrt{2}} = \\frac{2 \\times 48}{4.443} = 21.6\\text{ V}$$\n\n**(b) Output power:**\n$$P_o = \\frac{(V_s/2)^2}{R} = \\frac{24^2}{2.4} = \\frac{576}{2.4} = 240\\text{ W}$$\n\n**(c) Peak current:**\n$$I_{pk} = \\frac{V_s/2}{R} = \\frac{24}{2.4} = 10\\text{ A}$$\nAverage current (each transistor conducts half-period):\n$$I_{avg} = \\frac{I_{pk}}{2} = 5\\text{ A}$$\n\n**(d) Peak reverse blocking voltage (each transistor):**\n$$V_{Br} = V_s = 48\\text{ V}$$",
    topic: "Inverters & AC Synthesis",
    difficulty: "medium"
  },
  {
    question: "For a single-phase full-bridge inverter: R = 2.4Ω, Vₛ = 48V. Calculate: (a) fundamental RMS voltage, (b) output power, (c) harmonic voltage, (d) THD.",
    answer: "**Full-bridge configuration (4 switches in bridge):**\n\n**(a) Fundamental RMS voltage:**\n$$V_{1,rms} = \\frac{4V_s}{\\pi\\sqrt{2}} = \\frac{4 \\times 48}{4.443} = 43.2\\text{ V}$$\n\n**(b) Output power:**\n$$P_o = \\frac{V_s^2}{R} = \\frac{48^2}{2.4} = \\frac{2304}{2.4} = 960\\text{ W}$$\n\n**(c) RMS output voltage:**\n$$V_{o,rms} = V_s = 48\\text{ V}$$\n\nHarmonic voltage:\n$$V_{harm} = \\sqrt{V_{o,rms}^2 - V_{1,rms}^2} = \\sqrt{48^2 - 43.2^2} = \\sqrt{436} = 20.9\\text{ V}$$\n\n**(d) Total harmonic distortion:**\n$$THD = \\frac{V_{harm}}{V_{1,rms}} = \\frac{20.9}{43.2} = 0.484 = 48.4\\%$$",
    topic: "Inverters & AC Synthesis",
    difficulty: "hard"
  },

  // ============================================
  // AC VOLTAGE CONTROL
  // ============================================
  {
    question: "Explain on-off control (integral cycle control) for AC voltage regulators with waveform description.",
    answer: "**On-off control (integral cycle control):**\n\nThe thyristors are turned **ON for a whole number of cycles** and **OFF for a whole number of cycles**.\n\n**Output voltage waveform:**\n- When ON: full sinewaves pass through (peak = Vₘ)\n- When OFF: zero voltage output\n- Creates **bursts** of full cycles separated by zero intervals\n\n**Duty cycle:**\n$$D = \\frac{\\text{ON cycles}}{\\text{ON cycles + OFF cycles}}$$\n\n**RMS output voltage:**\n$$V_{o,rms} = V_s \\sqrt{D}$$\n\n**Example:** 30 ON cycles, 40 OFF cycles at 50Hz\n- ON time: 30 × 0.02 = 0.6s\n- OFF time: 40 × 0.02 = 0.8s  \n- D = 30/70 = 0.4286\n- $$V_{o,rms} = 230 \\times \\sqrt{0.4286} = 150.6\\text{ V}$$\n\n**Advantage:** Minimal EMI (switching at zero crossings)\n**Disadvantage:** Coarse control (limited to integer cycles)",
    topic: "AC Voltage Control",
    difficulty: "medium"
  },
  {
    question: "Explain phase control for AC voltage regulation with waveform description.",
    answer: "**Phase control:**\n\nThe thyristor is **triggered at a delay angle α within each half-cycle**. Output voltage begins at α and ends at π.\n\n**Output voltage waveform:**\n- For 0 < ωt < α: output = 0V (thyristor blocking)\n- For α < ωt < π: output follows supply sinusine (thyristor conducting)\n- For π < ωt < 2π: negative half-cycle (reverse blocking)\n\n**Firing angle α:**\n- α = 0° → full voltage output (Vdc maximum)\n- α = 90° → half voltage output (Vdc = Vm/π)\n- α = 180° → zero voltage output\n\n**RMS output voltage:**\n$$V_{o,rms} = V_s\\sqrt{\\frac{1}{\\pi}\\left(\\pi - \\alpha + \\frac{\\sin 2\\alpha}{2}\\right)}$$\n\n**Advantages:**\n- Smooth, continuous control from 0 to maximum\n- Simple circuit with only one gate delay circuit\n\n**Disadvantages:**\n- Generates harmonics in input current (due to non-sinusoidal conduction)\n- Creates EMI (switching at arbitrary times, not zero-crossings)",
    topic: "AC Voltage Control",
    difficulty: "medium"
  },
  {
    question: "For single-phase AC voltage controller: Vₛ = 110V (rms), R = 20Ω, α = π/3 (60°). Calculate (a) RMS output voltage, (b) input power factor, (c) average thyristor current.",
    answer: "**Given:** $$V_s = 110\\text{ V}$$, $$R = 20\\text{ Ω}$$, $$\\alpha = 60°$$\n\n**(a) RMS output voltage:**\nFor bidirectional AC controller:\n$$V_{o,rms} = V_s\\sqrt{\\frac{1}{\\pi}\\left(\\pi - \\alpha + \\frac{\\sin 2\\alpha}{2}\\right)}$$\n\nWith $$\\sin 120° = 0.866$$:\n$$V_{o,rms} = 110\\sqrt{\\frac{1}{\\pi}\\left(3.142 - 1.047 + 0.433\\right)}$$\n$$V_{o,rms} = 110 \\times 0.897 = 98.7\\text{ V}$$\n\n**(b) Input power factor:**\nFor resistive load:\n$$PF = \\frac{V_{o,rms}}{V_s} = \\frac{98.7}{110} = 0.897$$\n\n**(c) Average thyristor current:**\nFor half-wave conduction (one thyristor):\n$$I_{T,avg} = \\frac{V_m}{2\\pi R}(1 + \\cos\\alpha) = \\frac{155.56}{125.66}(1.5) = 1.86\\text{ A}$$",
    topic: "AC Voltage Control",
    difficulty: "hard"
  },

  // ============================================
  // DIAC & TRIAC
  // ============================================
  {
    question: "Define a DIAC and explain its V-I characteristic. What is its primary application?",
    answer: "**DIAC (Diode for Alternating Current):**\n\nA **two-terminal, bidirectional thyristor** that conducts only after its breakover voltage (Vₚₒ) is reached in either polarity.\n\n**Construction:** Four-layer PNPN with symmetric doping (P1-N1-P2-N2)\n\n**V-I Characteristic:**\n- For |V| < Vₚₒ (typically 30-40V): **high impedance** (leakage only)\n- At |V| = Vₚₒ: **sharp break-over** → low-impedance conduction\n- Conducts until current falls below **holding current**\n- **Symmetric** for both polarities (± characteristics identical)\n\n**Key parameters:**\n- Breakover voltage: 30-40V typical\n- Holding current: 1-10mA\n\n**Primary application:**\n**Triggering TRIACs** in AC power control circuits:\n- Lamp dimmers (lighting control)\n- Heat controllers (oven/heater control)\n- Fan speed control\n- AC motor speed regulation\n\n**Circuit:** DIAC in series with RC network connected to TRIAC gate. Phase shift across RC determines firing angle.",
    topic: "AC Control Devices",
    difficulty: "medium"
  },
  {
    question: "For DIAC firing circuit with C = 470nF, Vₛ = 240V (rms), R = 1000Ω to 25000Ω, Vₚₒ = 40V, f = 50Hz. Find minimum and maximum firing angles.",
    answer: "**Step 1 – Capacitive reactance:**\n$$X_C = \\frac{1}{2\\pi fC} = \\frac{1}{2\\pi \\times 50 \\times 470\\times10^{-9}} = 6773\\text{ Ω}$$\n\n**Step 2 – For Rmin = 1000Ω:**\nImpedance: $$Z = \\sqrt{1000^2 + 6773^2} = 6846\\text{ Ω}$$\nPhase: $$\\theta = \\tan^{-1}(6773/1000) = 81.6°$$\nPeak capacitor voltage: $$V_{C,pk} = \\sqrt{2} \\times 240 \\times \\frac{6773}{6846} = 335.8\\text{ V}$$\nFiring condition: $$40 = 335.8\\sin(\\omega t - 81.6°)$$\n$$\\omega t - 81.6° = 6.84° \\Rightarrow \\alpha_{min} = 88.5° ≈ 89°$$\n\n**Step 3 – For Rmax = 25000Ω:**\nImpedance: $$Z = \\sqrt{25000^2 + 6773^2} = 25900\\text{ Ω}$$  \nPhase: $$\\theta = \\tan^{-1}(6773/25000) = 15.16°$$\nPeak capacitor voltage: $$V_{C,pk} = \\sqrt{2} \\times 240 \\times \\frac{6773}{25900} = 88.8\\text{ V}$$\nFiring condition: $$40 = 88.8\\sin(\\omega t - 15.16°)$$\n$$\\omega t - 15.16° = 26.8° \\Rightarrow \\alpha_{max} = 42°$$\n\n**Result:** αmin ≈ 89°, αmax ≈ 42°",
    topic: "AC Control Devices",
    difficulty: "hard"
  },

  // ============================================
  // ADDITIONAL EXAM TOPICS
  // ============================================
  {
    question: "What is the reverse recovery time (tᵣᵣ) of a diode? A diode has tᵣᵣ = 3μs and diᵣ/dt = 30A/μs. Calculate storage charge Qᵣᵣ and peak reverse current Iᵣᵣ.",
    answer: "**Reverse recovery time (tᵣᵣ):** The time taken for a diode to recover from forward conduction to reverse blocking when the forward current is suddenly reversed. Includes **storage time** (tₛ) and **fall time** (tₓ).\n\n**Given:** $$t_{rr} = 3\\text{ μs}$$, $$\\frac{di}{dt} = 30\\text{ A/μs}$$\n\n**Peak reverse current:**\n$$I_{rr} = \\frac{di}{dt} \\times t_{rr} = 30 \\times 10^6 \\times 3 \\times 10^{-6} = 90\\text{ A}$$\n\n**Storage charge (integral of recovery current):**\nAssuming linear recovery current waveform:\n$$Q_{rr} = \\frac{1}{2} I_{rr} \\times t_{rr} = \\frac{1}{2} \\times 90 \\times 3\\times10^{-6} = 135\\text{ μC}$$\n\nAlternatively:\n$$Q_{rr} = \\frac{1}{2}\\left(\\frac{di}{dt}\\right) \\times t_{rr}^2 = \\frac{1}{2} \\times 30\\times10^6 \\times (3\\times10^{-6})^2 = 135\\text{ μC}$$\n\n**Key insight:** Fast recovery diodes (Au-doped) have short tᵣᵣ (<100ns) for high-frequency applications.",
    topic: "Power Diodes",
    difficulty: "medium"
  },
  {
    question: "An SCR rated 800V PIV with safety factor 2 is operating a resistive load. What is the maximum operating voltage? Why is a safety factor applied?",
    answer: "**Maximum operating voltage:**\n$$V_{op} = \\frac{\\text{PIV}}{\\text{Safety factor}} = \\frac{800}{2} = 400\\text{ V}$$\n\n**Why safety factor?**\n\n1) **Voltage transients** – Switching spikes and supply noise can exceed rated voltage\n2) **Aging effects** – Device parameters degrade over time\n3) **Temperature variation** – Breakdown voltage decreases at higher temperatures\n4) **Reliability margin** – Prevents infant mortality and early failure\n5) **Component tolerance** – Rated values have ±10-20% variation\n6) **Design margin** – Accounts for unknown system transients\n\n**Standard practice:**\n- Minimum safety factor: 2×\n- Conservative design: 3-4×\n- Critical applications: 5×\n\n**Example:** A 650V rated SCR would operate at 325V with 2× safety factor, allowing ±150V transients without damage.",
    topic: "Device Ratings & Selection"
  },
  {
    question: "Compare GTO (Gate Turn-Off) thyristor with SCR in terms of advantages and disadvantages.",
    answer: "| Feature | SCR | GTO |\n|---------|-----|-----|\n| **Turn-off method** | Natural commutation (AC) or forced (DC) | Gate pulse (negative) |\n| **On-state voltage** | 1-2V | 2-4V (higher) |\n| **Gate current for turn-on** | Small (~mA) | Small (~mA) |\n| **Gate current for turn-off** | Not applicable | Large (~1/3 to 1/5 of anode current) |\n| **Switching frequency** | 50-100Hz typical | 1-10kHz capability |\n| **Snubber circuit** | Needed | Simpler (no commutation) |\n| **Cost** | Low | High |\n| **Gate drive circuit** | Simple | Complex |\n| **Noise immunity** | Moderate | Better |\n\n**Advantages of GTO:**\n- Can be turned off by gate signal\n- No external commutation circuit needed\n- Higher switching frequency capability\n\n**Disadvantages of GTO:**\n- Higher conduction losses (higher Vₒₙ)\n- Requires large negative gate current\n- Complex gate driver circuit\n- More expensive",
    topic: "Thyristor Types & Selection"
  },
  {
    question: "Design a PUT relaxation oscillator for SCR triggering: f = 60Hz, Vₛ = 30V, η = 0.51, Iₚ = 10μA, Vᵥ = 3.5V, Iᵥ = 10mA, tₘ = 50μs, C = 0.5μF. Find R, Rₑ₁, Rₑ₂.",
    answer: "**Step 1 – Peak voltage:**\n$$V_P = \\eta V_S + V_D = 0.51 \\times 30 + 0.7 = 16.0\\text{ V}$$\n\n**Step 2 – Charging resistor R:**\n$$\\ln\\left(\\frac{1}{1-\\eta}\\right) = \\ln(1/0.49) = 0.7133$$\n$$R = \\frac{1}{fC\\ln(1/(1-\\eta))} = \\frac{1}{60 \\times 0.5\\times10^{-6} \\times 0.7133} = 46.7\\text{ kΩ}$$\n\n**Verify R within limits:**\n$$R_{max} = \\frac{V_S - V_P}{I_P} = \\frac{14}{10\\times10^{-6}} = 1.4\\text{ MΩ}$$ ✓\n$$R_{min} = \\frac{V_S - V_V}{I_V} = \\frac{26.5}{0.01} = 2.65\\text{ kΩ}$$ ✓\n\n**Step 3 – Base resistors:**\n$$R_{B1} = \\frac{t_g}{C} = \\frac{50\\times10^{-6}}{0.5\\times10^{-6}} = 100\\text{ Ω}$$\n\n$$R_{B2} = \\frac{10^4}{\\eta V_S} = \\frac{10000}{0.51 \\times 30} = 654\\text{ Ω}$$\n\n**Result:** R = 46.7kΩ, Rₑ₁ = 100Ω, Rₑ₂ = 654Ω",
    topic: "Gate Drive & Triggering",
    difficulty: "hard"
  }
];

export const EXAM_CARD_TOPICS = [
  'Thyristors & Diodes',
  'Gate Drive & Triggering',
  'Protection Circuits',
  'Commutation & Switching',
  'Rectifiers & Converters',
  'Inverters & AC Synthesis',
  'AC Voltage Control',
  'AC Control Devices',
  'Power Diodes',
  'Device Ratings & Selection',
  'Thyristor Types & Selection'
];

export const TOTAL_CARDS_COUNT = RESEARCH_METHODS_CARDS.length;
