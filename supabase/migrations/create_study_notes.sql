-- Create study_notes table for Power Electronics study materials
-- This table stores PDF-converted study content organized by topic

CREATE TABLE IF NOT EXISTS study_notes (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Content organization
  topic TEXT NOT NULL,
  title TEXT NOT NULL,
  content_type TEXT NOT NULL, -- 'chapter', 'exam_guide', 'definitions', 'formulas', 'calculations'
  
  -- Content (plain text with LaTeX formatting)
  content TEXT NOT NULL,
  summary TEXT,
  
  -- Metadata
  source_pdf TEXT, -- 'power-electronics-scr', 'power-electronics-digital-notes', 'opto-electronic-devices', 'number-bases', 'misc-power-electronics'
  difficulty_level TEXT, -- 'beginner', 'intermediate', 'advanced'
  key_terms TEXT[], -- ARRAY of searchable terms
  
  -- Access control
  is_public BOOLEAN DEFAULT TRUE,
  
  -- Indexing
  search_vector tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('english', title), 'A') ||
    setweight(to_tsvector('english', topic), 'B') ||
    setweight(to_tsvector('english', content), 'C')
  ) STORED
);

-- Create index for full-text search
CREATE INDEX study_notes_search_idx ON study_notes USING GIN (search_vector);

-- Create index for topic filtering
CREATE INDEX study_notes_topic_idx ON study_notes (topic);

-- Create index for source PDF
CREATE INDEX study_notes_source_idx ON study_notes (source_pdf);

-- Create index for difficulty level
CREATE INDEX study_notes_difficulty_idx ON study_notes (difficulty_level);

-- Insert Power Electronics Study Notes Content

-- ============================================
-- TOPIC: Semiconductor Fundamentals
-- ============================================

INSERT INTO study_notes (topic, title, content_type, content, summary, source_pdf, difficulty_level, key_terms) VALUES
(
  'Semiconductor Fundamentals',
  'Power Diode Types and Characteristics',
  'definitions',
  '# Power Diode Types and Characteristics

## General Purpose Diode (Standard PN Junction)
- **Forward voltage (V_F)**: ~0.7V for silicon, ~0.3V for germanium
- **Forward current (I_F)**: Current when forward biased
- **Reverse current (I_R)**: Leakage current (μA range)
- **Reverse voltage (V_R)**: Maximum allowable reverse voltage
- **Breakdown voltage (V_BR)**: Reverse voltage causing sharp current rise
- **Recovery time**: 1-5 ns for silicon

## Fast Recovery Diode
- Gold doping creates recombination centers
- Reverse recovery time: 0.5-50 ns (vs μs for standard)
- Forward drop: ~1-2V
- Applications: High-frequency rectifiers, SMPS, chopper circuits

## Schottky Diode
- Metal-semiconductor junction (no P-N junction)
- Forward voltage drop: 0.2-0.5V (very low)
- Reverse recovery time: Negligible (majority carrier device)
- Breakdown voltage: Typically <200V
- High reverse leakage current
- Applications: High-frequency circuits, digital logic, solar cells',
  'Comprehensive comparison of power diode types used in power electronics',
  'power-electronics-scr',
  'intermediate',
  ARRAY['diode', 'forward_voltage', 'reverse_recovery', 'schottky', 'fast_recovery']
),
(
  'Semiconductor Fundamentals',
  'Thyristor Parameters: Latching and Holding Current',
  'definitions',
  '# Thyristor Current Parameters

## Latching Current (I_L)
**Definition**: Minimum anode current required to maintain conduction immediately after gate pulse is removed, at the instant of turn-on.

**Formula**: I_L is slightly higher than holding current

**Significance**:
- If anode current falls below I_L before gate pulse ends, thyristor reverts to off-state
- Critical for circuit design - must ensure anode current exceeds latching current
- Typical values: 20-100 mA depending on device rating

## Holding Current (I_H)
**Definition**: Minimum anode current required to keep thyristor in on-state after being turned on.

**Relationship**: I_H < I_L (holding current is lower)

**Characteristics**:
- Device regenerates only if I_A > I_H
- Used to calculate minimum load resistance for reliable turn-on
- Prevents spurious triggering from noise

## Forward Breakover Voltage (V_BO)
**Definition**: Voltage at which thyristor turns on WITHOUT gate signal due to avalanche breakdown of middle junction.

**Typical values**: 400-1200V depending on device rating

**Prevention**: Snubber circuits limit dv/dt to prevent false triggering',
  'Critical current parameters for thyristor operation and circuit design',
  'power-electronics-scr',
  'intermediate',
  ARRAY['thyristor', 'latching_current', 'holding_current', 'turn_on', 'scr']
);

-- ============================================
-- TOPIC: SCR Operation and Commutation
-- ============================================

INSERT INTO study_notes (topic, title, content_type, content, summary, source_pdf, difficulty_level, key_terms) VALUES
(
  'SCR Operation',
  'Two-Transistor Model of SCR',
  'chapter',
  '# Two-Transistor Model of SCR

## Structure
An SCR can be modeled as a **PNP transistor (Q₁) and NPN transistor (Q₂) connected back-to-back**.

The four PNPN layers form two transistors:
- **Q₁ (PNP)**: Top PNP section
- **Q₂ (NPN)**: Bottom NPN section

## Anode Current Formula
$$I_A = \\frac{\\alpha_2 I_G + I_{CBO1} + I_{CBO2}}{1 - (\\alpha_1 + \\alpha_2)}$$

Where:
- $$\\alpha_1, \\alpha_2$$ = forward current gains of Q₁ and Q₂
- $$I_G$$ = gate current
- $$I_{CBO}$$ = leakage currents (very small)

## Regenerative Action
When $$(\\alpha_1 + \\alpha_2) \\to 1$$:
- The denominator approaches zero
- Anode current becomes very large
- Minimal gate current produces large output current
- This is the basis of thyristor latching

## Key Point
The SCR is a **regenerative device**:
- Once triggered, it latches on
- Even small gate currents produce large anode currents
- Requires anode current below holding current to turn off',
  'Understanding SCR electrical behavior through transistor model',
  'power-electronics-scr',
  'hard',
  ARRAY['scr', 'two_transistor_model', 'anode_current', 'regenerative', 'latching']
),
(
  'SCR Operation',
  'Gate Triggering Methods',
  'definitions',
  '# Five Methods of Triggering an SCR

## 1. Gate Current Triggering (Most Common)
- Apply positive gate current for 1-100 microseconds
- Injects holes into middle junction
- Initiates regenerative action
- Simple and reliable circuit design
- Used in most practical applications

## 2. Forward Voltage Triggering
- Increase anode-cathode voltage above V_BO (~400-1200V)
- Middle junction undergoes avalanche breakdown
- NOT used in practice - damages device
- Prevents proper circuit operation
- Only occurs as failure mechanism

## 3. Temperature Triggering
- Increase junction temperature
- Increases leakage current
- Can initiate regenerative action
- UNRELIABLE - thermal runaway risk
- Not used for controlled switching

## 4. dv/dt Triggering
- Fast voltage rise injects charging current through junction capacitance
- Formula: $$i_C = C\\frac{dv}{dt}$$
- Can cause false (unwanted) turn-on
- **Prevention**: RC snubber circuits limit dv/dt to safe values
- Typical snubber: 0.1-1μF capacitor, 1-10Ω resistor

## 5. Light Triggering
- Photons generate electron-hole pairs in depletion region
- Used in light-activated SCRs (LASCRs)
- Isolated gate triggering for high-voltage applications
- Lower gate current requirements
- Immune to electrical noise',
  'Different methods to turn on SCRs with practical considerations',
  'power-electronics-scr',
  'intermediate',
  ARRAY['gate_triggering', 'dv_dt', 'forward_voltage', 'thyristor_turn_on']
);

-- ============================================
-- TOPIC: Snubber and Protection Circuits
-- ============================================

INSERT INTO study_notes (topic, title, content_type, content, summary, source_pdf, difficulty_level, key_terms) VALUES
(
  'Protection Circuits',
  'dv/dt Protection and Snubber Circuits',
  'chapter',
  '# dv/dt Protection and Snubber Circuits

## dv/dt Triggering Problem
When anode-cathode voltage rises very rapidly, the reverse-biased junction acts as a capacitor:

$$i_C = C \\frac{dv}{dt}$$

This capacitive current can reach gate-trigger threshold and cause unwanted turn-on.

## RC Snubber Solution
An RC snubber circuit is connected directly across the thyristor:
- **Capacitor (C_s)**: Slows voltage rise by charging
- **Resistor (R_s)**: Dampens oscillations and limits discharge current

## Design Equations
From allowed dv/dt (with safety factor):
$$C_s = \\frac{V_m}{R_L \\times (dv/dt)_{allowed}}$$

Where:
- V_m = peak supply voltage
- R_L = load resistance
- Typical dv/dt rating: 100-500 V/μs

From peak discharge current limit:
$$R_s = \\frac{V_m}{I_{peak}/2}$$

## Series Inductor
For di/dt protection, add series inductor:
$$L = \\frac{V_m}{(di/dt)_{allowed}}$$

Typical di/dt rating: 25-100 A/μs

## Typical Snubber Values
- Capacitor: 0.1-1 μF
- Resistor: 1-10 Ω
- Inductor: 10-50 μH

## Example Design
- Peak voltage 400V, max dv/dt 200 V/μs, safety factor 2
- Allowed dv/dt = 100 V/μs
- Load 10Ω → C_s = 400/(10×100×10⁶) = 0.4 μF
- Series L = 400/(25×10⁶) = 16 μH
- R_s = 400/100 = 4 Ω',
  'Design and calculation of RC snubber circuits for thyristor protection',
  'power-electronics-scr',
  'hard',
  ARRAY['snubber', 'dv_dt', 'protection', 'rc_circuit', 'di_dt']
);

-- ============================================
-- TOPIC: Rectifiers and Power Conversion
-- ============================================

INSERT INTO study_notes (topic, title, content_type, content, summary, source_pdf, difficulty_level, key_terms) VALUES
(
  'Rectifiers',
  'Half-Wave and Full-Wave Controlled Rectifiers',
  'chapter',
  '# Controlled Rectifier Analysis

## Half-Wave Controlled Rectifier
**Output DC voltage:**
$$V_{dc} = \\frac{V_m}{2\\pi}(1 + \\cos\\alpha)$$

Where:
- V_m = peak supply voltage
- α = firing angle (delay angle in radians)

**DC current:**
$$I_{dc} = \\frac{V_{dc}}{R}$$

## Full-Wave Controlled Rectifier
**Output DC voltage:**
$$V_{dc} = \\frac{2V_m}{\\pi}\\cos\\alpha$$

**Power factor:**
$$PF = \\cos\\alpha$$

## RMS Output Voltage Calculation
For half-wave:
$$V_{rms}^2 = \\frac{V_m^2}{4\\pi}\\left(2\\pi - 2\\alpha + \\sin 2\\alpha\\right)$$

## Firing Angle Effects
- α = 0° → Maximum output voltage
- α = 90° → Output voltage reduced to zero
- α = 180° → Negative output (unsuitable)

## Application Range
- Resistive loads: 0° < α < 180°
- Inductive loads: 0° < α < 180° (conduction extends beyond α)
- With freewheeling diode: 0° < α < 180°',
  'Equations and analysis for controlled rectifier circuits',
  'power-electronics-digital-notes',
  'hard',
  ARRAY['rectifier', 'controlled_rectifier', 'firing_angle', 'scr', 'dc_voltage']
);

-- ============================================
-- TOPIC: Oscillators and Function Generators
-- ============================================

INSERT INTO study_notes (topic, title, content_type, content, summary, source_pdf, difficulty_level, key_terms) VALUES
(
  'Oscillators',
  'UJT Relaxation Oscillator Design',
  '  chapter',
  '# UJT Relaxation Oscillator

## Basic Principle
A capacitor charges through a resistor from V_BB until reaching peak voltage V_P, then rapidly discharges through the UJT, producing sawtooth waveform.

## Frequency Formula
$$f = \\frac{1}{RC \\ln\\left(\\frac{1}{1-\\eta}\\right)}$$

Where:
- R = charging resistor
- C = timing capacitor
- η = intrinsic stand-off ratio
- f = oscillation frequency (Hz)

## Design Procedure

### Step 1: Determine η
$$\\eta = \\frac{R_{B1}}{R_{BB}}$$

Or from triggering voltage: $$\\eta = \\frac{V_P}{V_{BB}}$$

### Step 2: Calculate V_BB
$$V_{BB} = \\frac{V_P}{\\eta}$$

### Step 3: Find Charging Resistor
$$R = \\frac{1}{f C \\ln(1/(1-\\eta))}$$

### Step 4: Design Base Voltage Divider
$$R_{B1} = \\eta \\times R_{BB}$$
$$R_{B2} = (1-\\eta) \\times R_{BB}$$

### Step 5: Determine Pulse Width
$$R_k \\approx \\frac{t_g}{C}$$

Where t_g is desired pulse width

## Design Constraints
Minimum R (from peak point): $$R > \\frac{V_{BB} - V_P}{I_P}$$

Maximum R (from valley point): $$R < \\frac{V_{BB} - V_V}{I_V}$$

## Typical Design Values
- Frequency: 1-100 kHz
- Capacitor: 0.01-10 μF
- Charging resistor: 1-100 kΩ
- η: 0.5-0.8',
  'Complete UJT oscillator design procedure with formulas',
  'power-electronics-scr',
  'hard',
  ARRAY['ujt', 'oscillator', 'relaxation_oscillator', 'frequency', 'timing']
);

-- ============================================
-- TOPIC: Thermal Management
-- ============================================

INSERT INTO study_notes (topic, title, content_type, content, summary, source_pdf, difficulty_level, key_terms) VALUES
(
  'Thermal Management',
  'Thermal Resistance and Junction Temperature',
  'chapter',
  '# Thermal Analysis for Semiconductor Devices

## Thermal Resistance Concept
Thermal resistance is analogous to electrical resistance:
$$R_{\\theta} = \\frac{\\Delta T}{P}$$

Where:
- ΔT = temperature difference (°C)
- P = power dissipated (W)
- R_θ = thermal resistance (°C/W)

## Standard Thermal Resistances

### R_θJC (Junction to Case)
- From semiconductor junction to device case
- Typically 0.5-5 °C/W depending on device

### R_θCS (Case to Heat Sink)
- From device case to heat sink
- Depends on mounting method and thermal compound
- Typical: 0.1-0.5 °C/W with good mounting

### R_θSA (Heat Sink to Ambient)
- From heat sink to surrounding air
- Depends on heat sink size and cooling method
- Natural convection: 10-50 °C/W
- Forced air: 1-10 °C/W

## Junction Temperature Calculation

**Without heat sink:**
$$T_J = T_A + P \\times R_{\\theta JA}$$

**With heat sink:**
$$T_J = T_A + P \\times (R_{\\theta JC} + R_{\\theta CS} + R_{\\theta SA})$$

## Thermal Management Strategy
1. Minimize power dissipation (improve efficiency)
2. Mount device directly on PCB for small devices
3. Use thermal compound between device and heat sink
4. Choose adequate heat sink size
5. Ensure adequate cooling airflow
6. Monitor junction temperature in operation

## Design Procedure
1. Calculate power dissipation
2. Specify maximum allowable junction temperature (T_J,max)
3. Determine ambient temperature (T_A)
4. Calculate required total thermal resistance: $$R_{\\theta,required} = \\frac{T_J - T_A}{P}$$
5. Select heat sink with R_θSA ≤ R_θ,required - R_θJC - R_θCS',
  'Thermal management principles and calculation methods',
  'power-electronics-digital-notes',
  'hard',
  ARRAY['thermal_resistance', 'heat_sink', 'junction_temperature', 'cooling']
);

-- ============================================
-- TOPIC: Advanced Power Electronics
-- ============================================

INSERT INTO study_notes (topic, title, content_type, content, summary, source_pdf, difficulty_level, key_terms) VALUES
(
  'Advanced Devices',
  'Gate Turn-Off Thyristor (GTO) Characteristics',
  'chapter',
  '# Gate Turn-Off Thyristor (GTO)

## Comparison with SCR

| Feature | GTO | SCR |
|---------|-----|-----|
| **Turn-off** | Gate pulse (negative) | Forced commutation required |
| **Gate function** | Turn-on AND turn-off | Turn-on only |
| **On-state drop** | 2-4V | 1-2V |
| **Switching speed** | Higher frequency capable | Lower frequency |
| **Gate drive** | Complex, large current | Simple circuit |
| **Cost** | More expensive | Cheaper |
| **Applications** | High-freq choppers, converters | Rectifiers, AC control |

## Advantages of GTO
1. **Self-commutating**: Gate pulse can turn it off without external circuit
2. **Simpler circuit design**: No complex commutation networks
3. **Higher switching frequency**: Suitable for PWM converters
4. **Smaller filtering**: Faster switching reduces filter size

## Disadvantages of GTO
1. **Higher on-state loss**: 2-4V drop dissipates more heat
2. **Complex gate drive**: Requires bidirectional current supply
3. **Large turn-off current**: Typically 1/5 to 1/3 of anode current
4. **Higher cost**: More expensive than equivalent SCR
5. **Temperature sensitive**: Performance varies with temperature

## Power Gain
$$\\text{Power Gain} = \\frac{P_{out}}{P_{gate}}$$

**Turn-on current gain:**
$$\\beta_{on} = \\frac{I_{load}}{I_{g(on)}}$$

**Turn-off current gain:**
$$\\beta_{off} = \\frac{I_{load}}{|I_{g(off)}|}$$

## Applications
- DC-AC inverters
- High-frequency PWM converters
- Switch-mode power supplies
- Electric vehicle drives
- Industrial motor drives',
  'GTO characteristics and comparison with SCR technology',
  'power-electronics-scr',
  'hard',
  ARRAY['gto', 'gate_turn_off', 'thyristor', 'advanced_devices', 'power_gain']
);
