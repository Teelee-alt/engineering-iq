import https from 'https';

const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlZndncXR0aHZybXdjbmFubmNyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTkxNjExOSwiZXhwIjoyMDk1NDkyMTE5fQ.JcpmmLi62yMr-TSLJGG5OHMp4o50wqDSIrTjLbUF7eg';

function insertData(table, records) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(records);
    const options = {
      hostname: 'sefwgqtthvrmwcnanncr.supabase.co',
      path: `/rest/v1/${table}`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'apikey': SERVICE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
        'Content-Length': body.length
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, data });
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

const extendedCards = [
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 38, question: 'What is Computer Numerical Control (CNC)?', answer: 'Computers controlling machine tools through preprogrammed sequences. CNC systems are critical for high-precision tasks like cutting, drilling, and milling. Widely used in manufacturing.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 39, question: 'What is Motion Control?', answer: 'Strategies and devices that manage machine movement. Includes controlling speed, position, and acceleration of motors and drives in automated systems.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 40, question: 'What is Adaptive Control?', answer: 'Control systems that adjust parameters in real time to respond to changing conditions. This ensures optimal performance when process dynamics shift.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 41, question: 'What is a Sensor?', answer: 'A device that detects environmental changes (temperature, pressure, light) and converts them into electrical signals for processing. Sensors serve as the eyes and ears in automation.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 42, question: 'What is Robotics?', answer: 'The integration of mechanical systems, sensors, and controllers to perform tasks automatically. Robots are used in assembly, material handling, and precision manufacturing tasks.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 9, question: 'What is a Hydraulic Actuator?', answer: 'Uses pressurized fluid (oil) to produce high force outputs. Ideal for heavy-duty applications requiring strong force and smooth motion. Common in hydraulic presses and heavy machinery.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 10, question: 'What is a Pneumatic Actuator?', answer: 'Uses compressed air to produce motion. Pneumatic systems are lighter, faster, and safer than hydraulic systems but produce less force. Used in pick-and-place operations and assembly automation.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 11, question: 'What is Boolean Algebra in PLC programming?', answer: 'Mathematical logic using binary values (0/1 or True/False) to represent logic operations. AND, OR, NOT, NAND, NOR, XOR gates form the basis of digital control logic in PLCs.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 12, question: 'What is a second-order system?', answer: 'A dynamic system with two energy-storage elements (like mass-spring-damper). Its behavior is described by a second-order differential equation. Natural frequency and damping ratio characterize its response.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 13, question: 'What is damping in control systems?', answer: 'The resistance to oscillation in a system. Critical damping provides fastest response without overshoot. Underdamping causes oscillation; overdamping causes slow response.' }
];

async function seedCards() {
  console.log(`Seeding ${extendedCards.length} additional cards...`);
  const result = await insertData('cards', extendedCards);
  if (result.status === 201) {
    console.log('✓ Extended cards seeded successfully!');
    return true;
  } else {
    console.log(`Error ${result.status}:`, result.data.substring(0, 200));
    return false;
  }
}

seedCards().then(success => process.exit(success ? 0 : 1)).catch(e => {
  console.error(e);
  process.exit(1);
});
