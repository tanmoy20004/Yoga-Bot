/**
 * YogaMate structured knowledge base.
 * This single source of truth is used by the Express AI route (retrieval context
 * and offline fallback) and by the React app (style cards, guided practice).
 */

export const styles = [
  {
    id: 'hatha',
    name: 'Hatha Yoga',
    sanskrit: 'हठ योग',
    icon: 'Sun',
    image: '/images/yoga/hatha.jpg',
    levelGroup: 'beginner',
    difficulty: 'Beginner',
    level: 1,
    pace: 'Slow and steady',
    sessionLength: '20–45 min',
    tagline: 'The foundation of posture and breath.',
    description:
      'Hatha is the gentle, foundational style of yoga. Poses are held for a few breaths with careful attention to alignment and slow, deliberate breathing. It is the perfect place to begin.',
    benefits: ['Builds a strong foundation', 'Improves posture', 'Calms the mind', 'Gentle flexibility'],
    bestFor: ['Flexibility', 'Relaxation', 'Balance', 'General Fitness'],
    focus: ['Alignment', 'Breath awareness', 'Foundational poses'],
    principles: [
      'Move slowly and hold each pose for 5–10 steady breaths.',
      'Find a stable, comfortable version of every pose before going deeper.',
      'Coordinate movement with the breath: lengthen on inhales, soften on exhales.',
    ],
    breath: 'Slow nasal breathing. Inhale to lengthen the spine, exhale to settle deeper.',
    sequence: ['tadasana', 'sukhasana', 'urdhva-hastasana', 'uttanasana', 'vrksasana', 'bhujangasana', 'paschimottanasana', 'savasana'],
    precautions: 'Move slowly, avoid locking your knees and stop if a pose causes sharp pain.',
    accent: '#3E8E63',
    soft: '#E6F2E9',
  },
  {
    id: 'vinyasa',
    name: 'Vinyasa Yoga',
    sanskrit: 'विन्यास योग',
    icon: 'Wind',
    image: '/images/yoga/vinyasa.jpg',
    levelGroup: 'intermediate',
    difficulty: 'All levels',
    level: 2,
    pace: 'Flowing and rhythmic',
    sessionLength: '30–60 min',
    tagline: 'Movement woven together with breath.',
    description:
      'Vinyasa links one pose to the next with the breath, creating a smooth, flowing practice. The pace can be gentle or energetic, and no two classes are exactly the same.',
    benefits: ['Improves coordination', 'Builds lean strength', 'Boosts stamina', 'Encourages mindfulness'],
    bestFor: ['Flexibility', 'Strength', 'General Fitness', 'Balance'],
    focus: ['Breath-led transitions', 'Sun salutations', 'Standing flows'],
    principles: [
      'Every movement has one breath: inhale to open or lengthen, exhale to fold or contract.',
      'Keep the breath steady. If you lose it, slow down or take a rest pose.',
      'Choose a variation that lets you keep moving without strain.',
    ],
    breath: 'Continuous nasal breathing, usually Ujjayi (ocean-like) breath in a stronger class.',
    sequence: ['tadasana', 'urdhva-hastasana', 'uttanasana', 'plank', 'chaturanga', 'bhujangasana', 'adho-mukha-svanasana', 'virabhadrasana-1', 'virabhadrasana-2', 'savasana'],
    precautions: 'Do not rush. Skip any transition that makes you hold your breath or feel dizzy.',
    accent: '#2F8F86',
    soft: '#E4F3F1',
  },
  {
    id: 'ashtanga',
    name: 'Ashtanga Yoga',
    sanskrit: 'अष्टाङ्ग योग',
    icon: 'Flame',
    image: '/images/yoga/ashtanga.jpg',
    levelGroup: 'advanced',
    difficulty: 'Advanced',
    level: 3,
    pace: 'Structured and vigorous',
    sessionLength: '60–90 min',
    tagline: 'A precise, progressive sequence.',
    description:
      'Ashtanga follows a fixed series of poses in a set order, linked by vinyasa transitions. It is physically demanding and builds heat, discipline, flexibility and strength over time.',
    benefits: ['Develops strength and stamina', 'Builds discipline', 'Increases flexibility', 'Deepens focus'],
    bestFor: ['Strength', 'Flexibility', 'General Fitness'],
    focus: ['Fixed sequences', 'Vinyasa transitions', 'Progressive practice'],
    principles: [
      'Practice the same sequence, adding poses only when the foundation is ready.',
      'Use the breath as a metronome; never force a pose to match an idea.',
      'Rest is part of the practice — modify when energy is low.',
    ],
    breath: 'Ujjayi breath throughout, steady and audible, with bandhas (energy locks) in advanced practice.',
    sequence: ['tadasana', 'urdhva-hastasana', 'uttanasana', 'plank', 'chaturanga', 'bhujangasana', 'adho-mukha-svanasana', 'virabhadrasana-1', 'virabhadrasana-2', 'trikonasana', 'dhanurasana', 'savasana'],
    precautions: 'Not recommended for complete beginners without a qualified teacher. Respect joint limits in repeated transitions.',
    accent: '#B5652F',
    soft: '#F7EADF',
  },
  {
    id: 'yin',
    name: 'Yin Yoga',
    sanskrit: 'यिन योग',
    icon: 'Moon',
    image: '/images/yoga/yin.jpg',
    levelGroup: 'beginner',
    difficulty: 'Beginner',
    level: 1,
    pace: 'Very slow and still',
    sessionLength: '45–75 min',
    tagline: 'Stillness, time and deep release.',
    description:
      'Yin poses are held for two to five minutes or longer, with the body relaxed. The practice targets deep connective tissue and invites patience, quiet and introspection.',
    benefits: ['Deep flexibility', 'Releases tension', 'Calms the nervous system', 'Improves patience'],
    bestFor: ['Flexibility', 'Relaxation'],
    focus: ['Long-held poses', 'Stillness', 'Deep connective tissue'],
    principles: [
      'Arrive in the pose, then let the muscles soften completely.',
      'Stay still and breathe into the sensation; never push past a sharp or numb feeling.',
      'Use props so the body can release instead of working to hold the shape.',
    ],
    breath: 'Long, slow natural breathing. Let each exhale be a little longer than the inhale.',
    sequence: ['sukhasana', 'supta-baddha-konasana', 'paschimottanasana', 'balasana', 'ardha-matsyendrasana', 'viparita-karani', 'savasana'],
    precautions: 'Sensation should be mild and steady. Stop if you feel numbness, tingling or sharp pain.',
    accent: '#6C6BA8',
    soft: '#EEECF7',
  },
  {
    id: 'iyengar',
    name: 'Iyengar Yoga',
    sanskrit: 'आयङ्गार योग',
    icon: 'Crosshair',
    image: '/images/yoga/iyengar.jpg',
    levelGroup: 'beginner',
    difficulty: 'All levels',
    level: 2,
    pace: 'Precise and methodical',
    sessionLength: '45–60 min',
    tagline: 'Alignment first, with props as support.',
    description:
      'Iyengar yoga focuses on precise alignment in each pose. Blocks, straps, bolsters and walls are used so that every body can experience the pose safely and correctly.',
    benefits: ['Excellent alignment habits', 'Safe for all bodies', 'Improves posture', 'Body awareness'],
    bestFor: ['Balance', 'Flexibility', 'General Fitness', 'Relaxation'],
    focus: ['Precision', 'Props', 'Step-by-step correction'],
    principles: [
      'Build the pose from the feet (or sitting bones) up, with exact alignment.',
      'Props are tools, not shortcuts: they bring the floor closer to you.',
      'Hold poses with awareness and refine small details rather than chasing depth.',
    ],
    breath: 'Steady nasal breathing; the teacher may instruct when to inhale and exhale in each step.',
    sequence: ['tadasana', 'vrksasana', 'trikonasana', 'setu-bandha', 'paschimottanasana', 'ardha-matsyendrasana', 'savasana'],
    precautions: 'Use props liberally. If you have an injury, work with a certified Iyengar teacher.',
    accent: '#8A6A3F',
    soft: '#F4EDE2',
  },
  {
    id: 'kundalini',
    name: 'Kundalini Yoga',
    sanskrit: 'कुण्डलिनी योग',
    icon: 'Sparkles',
    image: '/images/yoga/kundalini.jpg',
    levelGroup: 'intermediate',
    difficulty: 'Intermediate',
    level: 2,
    pace: 'Dynamic with stillness',
    sessionLength: '30–60 min',
    tagline: 'Breath, movement and meditation.',
    description:
      'Kundalini combines repetitive movements (kriyas), powerful breathing techniques, mantra and meditation. A class usually includes a warm-up, a kriya, relaxation and meditation.',
    benefits: ['Energises the body', 'Strengthens the breath', 'Reduces stress', 'Builds mental focus'],
    bestFor: ['Relaxation', 'Strength', 'General Fitness'],
    focus: ['Kriyas', 'Pranayama', 'Meditation'],
    principles: [
      'Keep the spine long and the breath deliberate during each repetition.',
      'Move at a pace that lets you maintain the prescribed rhythm without strain.',
      'End with deep relaxation so the nervous system can integrate the practice.',
    ],
    breath: 'Breath of Fire and alternate-nostril breathing are common, adapted for the individual.',
    sequence: ['sukhasana', 'marjariasana', 'tadasana', 'urdhva-hastasana', 'plank', 'navasana', 'savasana'],
    precautions: 'Breath of Fire should be gentle; stop if you feel light-headed. Learn advanced kriyas from a qualified teacher.',
    accent: '#B7793B',
    soft: '#F8EFE1',
  },
  {
    id: 'bikram',
    name: 'Bikram Yoga',
    sanskrit: 'बिक्रम योग',
    icon: 'Zap',
    image: '/images/yoga/bikram.jpg',
    levelGroup: 'advanced',
    difficulty: 'Advanced',
    level: 3,
    pace: 'Fixed sequence in heat',
    sessionLength: '90 min',
    tagline: 'The traditional 26-posture series in a heated room.',
    description:
      'Bikram follows a strict sequence of 26 poses and two breathing exercises in a room heated to about 40°C. The heat increases flexibility but also places extra demand on the heart and hydration.',
    benefits: ['Deep flexibility', 'Endurance', 'Heat tolerance', 'Strong routine'],
    bestFor: ['Flexibility', 'Strength', 'General Fitness'],
    focus: ['26 fixed poses', 'Heated practice', 'Discipline'],
    principles: [
      'Follow the traditional order and rest whenever needed.',
      'Hydrate before, during and after class; listen closely to your body in the heat.',
      'Never lock the knees or force a range that the heat alone creates.',
    ],
    breath: 'Normal breathing in most poses; specific breathing exercises are taught in the series.',
    sequence: ['tadasana', 'urdhva-hastasana', 'uttanasana', 'bhujangasana', 'adho-mukha-svanasana', 'virabhadrasana-2', 'trikonasana', 'dhanurasana', 'savasana'],
    precautions: 'Heated practice is not suitable for everyone. People with heart conditions, low blood pressure, dehydration or pregnancy should seek medical advice first.',
    accent: '#C4663C',
    soft: '#FBEADF',
  },
  {
    id: 'power',
    name: 'Power Yoga',
    sanskrit: 'पावर योग',
    icon: 'Dumbbell',
    image: '/images/yoga/power.jpg',
    levelGroup: 'intermediate',
    difficulty: 'Intermediate',
    level: 3,
    pace: 'Energetic and athletic',
    sessionLength: '45–75 min',
    tagline: 'Strength, flexibility and stamina.',
    description:
      'Power yoga is a vigorous, fitness-oriented style derived from Ashtanga. Classes vary by teacher and emphasise building heat, strength and endurance through dynamic sequences.',
    benefits: ['Builds muscle strength', 'Improves stamina', 'Increases flexibility', 'High-energy workout'],
    bestFor: ['Strength', 'General Fitness', 'Flexibility'],
    focus: ['Strength flows', 'Core work', 'Endurance'],
    principles: [
      'Keep the breath matched to movement even when the pace is fast.',
      'Engage the core and protect the lower back in weight-bearing poses.',
      'Modify with knees bent or a shorter range rather than sacrificing alignment.',
    ],
    breath: 'Strong, rhythmic Ujjayi breathing to fuel movement and build internal heat.',
    sequence: ['tadasana', 'plank', 'chaturanga', 'bhujangasana', 'adho-mukha-svanasana', 'virabhadrasana-2', 'utkatasana', 'navasana', 'savasana'],
    precautions: 'Warm up properly. Stop if you feel sharp pain in the knees, shoulders or lower back.',
    accent: '#A34E43',
    soft: '#F7E7E3',
  },
  {
    id: 'restorative',
    name: 'Restorative Yoga',
    sanskrit: 'पुनर्स्थापक योग',
    icon: 'Heart',
    image: '/images/yoga/restorative.jpg',
    levelGroup: 'beginner',
    difficulty: 'Beginner',
    level: 1,
    pace: 'Deeply relaxing',
    sessionLength: '30–60 min',
    tagline: 'Rest is the practice.',
    description:
      'Restorative yoga uses bolsters, blankets and blocks to support the body completely in restful poses. Very little effort is needed; the goal is deep physical and mental relaxation.',
    benefits: ['Reduces stress', 'Releases deep tension', 'Improves sleep', 'Soothes the nervous system'],
    bestFor: ['Relaxation', 'Flexibility'],
    focus: ['Full support', 'Long holds', 'Nervous system reset'],
    principles: [
      'Set up props so you feel completely supported and can release all effort.',
      'Stay still, keep the breath easy and let the body soften into the support.',
      'Move slowly between poses and keep the room comfortably warm.',
    ],
    breath: 'Slow, quiet nasal breathing; let the exhale be longer and smoother than the inhale.',
    sequence: ['sukhasana', 'supta-baddha-konasana', 'setu-bandha', 'balasana', 'viparita-karani', 'savasana'],
    precautions: 'You should feel no stretching or effort. If a pose is uncomfortable, add more props or come out of it.',
    accent: '#7A90A6',
    soft: '#EAF0F5',
  },
  {
    id: 'prenatal',
    name: 'Prenatal Yoga',
    sanskrit: 'गर्भावस्था योग',
    icon: 'Baby',
    image: '/images/yoga/prenatal.jpg',
    levelGroup: 'beginner',
    difficulty: 'Beginner',
    level: 1,
    pace: 'Gentle and nurturing',
    sessionLength: '20–40 min',
    tagline: 'Gentle movement for pregnancy.',
    description:
      'Prenatal yoga adapts gentle poses and breathing to support the changing body during pregnancy. It can help with comfort, strength, breath awareness and relaxation.',
    benefits: ['Gentle strength', 'Breath preparation', 'Relaxation', 'Comfort in the changing body'],
    bestFor: ['Relaxation', 'General Fitness', 'Flexibility'],
    focus: ['Gentle movement', 'Breathwork', 'Comfort and support'],
    principles: [
      'Widen the stance, avoid deep abdominal compression and use props for support.',
      'Never hold the breath; breathe smoothly through every movement.',
      'Avoid lying flat on the back after the first trimester, and avoid deep twists and strong inversions.',
    ],
    breath: 'Slow, calm nasal breathing; gentle alternate-nostril breathing can be soothing.',
    sequence: ['sukhasana', 'marjariasana', 'tadasana', 'vrksasana', 'virabhadrasana-2', 'supta-baddha-konasana', 'savasana'],
    precautions: 'Always get clearance from your obstetrician or qualified healthcare professional before practising, and learn with a certified prenatal yoga teacher. Stop if you feel pain, dizziness, bleeding or contractions.',
    accent: '#B37A96',
    soft: '#F7EAF0',
  },
];

export const poses = {
  tadasana: {
    id: 'tadasana', name: 'Mountain Pose', sanskrit: 'Tadasana', level: 'Beginner', category: 'Standing',
    styles: ['hatha', 'vinyasa', 'iyengar', 'prenatal'], keywords: ['mountain', 'stand', 'posture', 'standing tall'],
    start: 'Stand with your feet hip-width apart, toes spread and weight even on both feet.',
    steps: [
      'Press all four corners of each foot into the floor and lift the arches.',
      'Unlock your knees — keep a soft micro-bend rather than locking them.',
      'Lengthen your tailbone down and lift the crown of your head up.',
      'Relax your shoulders away from your ears and let your arms hang by your sides.',
      'Rest your gaze softly on a point in front of you.',
    ],
    breath: 'Inhale to grow taller through the spine; exhale and settle your weight evenly.',
    hold: '30–60 seconds (5–10 breaths)',
    benefits: ['Improves posture', 'Builds body awareness', 'Calms the mind', 'Creates a foundation for standing poses'],
    mistakes: ['Locking the knees', 'Leaning back onto the heels', 'Tensing the shoulders and jaw'],
    caution: 'If you feel light-headed, bend the knees slightly or sit down.',
  },
  sukhasana: {
    id: 'sukhasana', name: 'Easy Pose', sanskrit: 'Sukhasana', level: 'Beginner', category: 'Seated',
    styles: ['hatha', 'yin', 'kundalini', 'restorative', 'prenatal'], keywords: ['easy pose', 'sit', 'cross legged', 'meditation', 'seated'],
    start: 'Sit on a cushion or folded blanket with your legs crossed comfortably in front.',
    steps: [
      'Sit tall on the front third of your cushion so your hips are level.',
      'Let your knees fall naturally; place a blanket under them if they lift.',
      'Lengthen your spine and widen your collarbones.',
      'Rest your hands on your knees, palms up or down.',
      'Close your eyes or soften your gaze.',
    ],
    breath: 'Breathe slowly in and out through the nose; feel the belly expand and soften.',
    hold: '1–5 minutes',
    benefits: ['Prepares for meditation', 'Opens the hips gently', 'Encourages calm breathing'],
    mistakes: ['Slumping the lower back', 'Forcing the knees down', 'Collapsing the chest'],
    caution: 'If the hips are tight, sit higher on a bolster — the knees should be at or below hip level.',
  },
  'urdhva-hastasana': {
    id: 'urdhva-hastasana', name: 'Upward Salute', sanskrit: 'Urdhva Hastasana', level: 'Beginner', category: 'Standing',
    styles: ['hatha', 'vinyasa', 'ashtanga', 'kundalini', 'bikram'], keywords: ['raise arms', 'hands up', 'upward salute', 'stretch up', 'hastauttanasana'],
    start: 'Begin in Mountain Pose with your feet grounded and spine long.',
    steps: [
      'Turn your palms forward and sweep both arms out to the sides and overhead.',
      'Keep the arms shoulder-width apart and reach through the fingertips.',
      'Lift the chest gently without dumping the ribs forward.',
      'If comfortable, look slightly up at your fingertips.',
    ],
    breath: 'Inhale as you raise the arms; exhale as you lower them with control.',
    hold: '15–30 seconds',
    benefits: ['Stretches the spine and shoulders', 'Opens the chest', 'Improves breathing capacity'],
    mistakes: ['Jutting the ribs forward', 'Locking the elbows', 'Holding the breath'],
    caution: 'If you have shoulder pain, keep the arms at shoulder height instead of overhead.',
  },
  uttanasana: {
    id: 'uttanasana', name: 'Standing Forward Fold', sanskrit: 'Uttanasana / Padahastasana', level: 'Beginner', category: 'Standing',
    styles: ['hatha', 'vinyasa', 'ashtanga', 'bikram', 'iyengar'], keywords: ['forward fold', 'bend forward', 'padahastasana', 'touch toes', 'hands to feet'],
    start: 'Stand tall in Mountain Pose with your feet hip-width apart.',
    steps: [
      'Hinge from the hips — not the waist — and fold forward slowly.',
      'Keep the knees softly bent and let the belly move toward the thighs.',
      'Relax your head, neck and arms; let the fingertips reach toward the floor or shins.',
      'Press the balls of the feet down and lift the sitting bones up.',
      'To come up, place hands on the hips and rise with a long spine.',
    ],
    breath: 'Exhale as you fold; inhale to lengthen the spine; exhale to soften deeper.',
    hold: '30–60 seconds',
    benefits: ['Stretches the hamstrings and calves', 'Relieves tension in the neck', 'Calms the mind'],
    mistakes: ['Rounding the upper back aggressively', 'Locking the knees', 'Whipping up too quickly'],
    caution: 'With back pain, keep the knees well bent and fold only halfway. Come out slowly to avoid dizziness.',
  },
  plank: {
    id: 'plank', name: 'Plank Pose', sanskrit: 'Phalakasana', level: 'Intermediate', category: 'Core',
    styles: ['vinyasa', 'ashtanga', 'kundalini', 'power'], keywords: ['plank', 'push up position', 'core', 'dandasana'],
    start: 'Start on hands and knees with wrists under shoulders and knees under hips.',
    steps: [
      'Spread your fingers and press the base of each index finger into the mat.',
      'Step the feet back one at a time until the body forms one long line.',
      'Draw the navel gently toward the spine and squeeze the thighs.',
      'Keep shoulders away from the ears and the neck long.',
    ],
    breath: 'Breathe steadily — inhale to create length, exhale to engage the core.',
    hold: '20–60 seconds',
    benefits: ['Builds core and shoulder strength', 'Improves posture', 'Trains whole-body stability'],
    mistakes: ['Sagging the hips', 'Lifting the hips too high', 'Holding the breath'],
    caution: 'Drop the knees to the floor if the lower back starts to ache.',
  },
  chaturanga: {
    id: 'chaturanga', name: 'Four-Limbed Staff Pose', sanskrit: 'Chaturanga Dandasana', level: 'Advanced', category: 'Core',
    styles: ['vinyasa', 'ashtanga', 'power'], keywords: ['chaturanga', 'low plank', 'four limbed', 'push up'],
    start: 'From Plank Pose, shift your weight slightly forward onto the hands.',
    steps: [
      'Keep elbows close to the ribs, pointing straight back.',
      'Lower the body only a few inches with control, shoulders level.',
      'Draw the shoulder blades down the back and keep the chest broad.',
      'Press firmly through the palms and hold the core engaged.',
    ],
    breath: 'Exhale as you lower; inhale as you lift or move into the next pose.',
    hold: '5–20 seconds',
    benefits: ['Builds arm and core strength', 'Prepares the body for arm balances'],
    mistakes: ['Dropping the hips below shoulder level', 'Flaring the elbows out', 'Collapsing the shoulders'],
    caution: 'This is an advanced pose. practise with knees down until you have the strength to keep the body in one line.',
  },
  bhujangasana: {
    id: 'bhujangasana', name: 'Cobra Pose', sanskrit: 'Bhujangasana', level: 'Beginner', category: 'Backbend',
    styles: ['hatha', 'vinyasa', 'ashtanga', 'bikram', 'power'], keywords: ['cobra', 'bend back', 'backbend', 'snake'],
    start: 'Lie on your belly with hands under the shoulders and elbows tucked close.',
    steps: [
      'Press the tops of the feet and the palms into the mat.',
      'Inhale and lift the chest a small amount using the back muscles.',
      'Keep the hips and pubic bone on the floor; do not push up with the hands.',
      'Draw the shoulders down and back, and lengthen through the crown.',
    ],
    breath: 'Inhale to lift the chest; exhale to stay steady; breathe normally while holding.',
    hold: '15–30 seconds (or 5 breaths)',
    benefits: ['Strengthens the back', 'Opens the chest', 'Improves spinal flexibility'],
    mistakes: ['Pushing too high with the arms', 'Crunching the lower back', 'Lifting the hips off the floor'],
    caution: 'Stop if there is pinching or pain in the lower back. Keep the lift small.',
  },
  'adho-mukha-svanasana': {
    id: 'adho-mukha-svanasana', name: 'Downward-Facing Dog', sanskrit: 'Adho Mukha Svanasana', level: 'Beginner', category: 'Inversion',
    styles: ['hatha', 'vinyasa', 'ashtanga', 'power', 'bikram'], keywords: ['downward dog', 'down dog', 'dog pose', 'inversion', 'adho mukha'],
    start: 'Begin on hands and knees with wrists under shoulders and knees under hips.',
    steps: [
      'Tuck your toes and press the palms firmly into the mat.',
      'Lift the knees and press the sitting bones up and back.',
      'Keep the knees bent if needed and lengthen the spine toward the floor.',
      'Press the heels toward the floor — bends in the knees are completely fine.',
      'Let the head hang naturally between the arms.',
    ],
    breath: 'Exhale as you lift the hips; take slow, even breaths while holding.',
    hold: '30–60 seconds',
    benefits: ['Stretches hamstrings and calves', 'Strengthens arms and shoulders', 'Gently reverses blood flow'],
    mistakes: ['Locking the knees', 'Rounding the upper back', 'Forcing the heels flat'],
    caution: 'Come down slowly if you feel dizzy. Avoid deep inversions with glaucoma or recent injury unless cleared by a professional.',
  },
  'virabhadrasana-1': {
    id: 'virabhadrasana-1', name: 'Warrior I', sanskrit: 'Virabhadrasana I', level: 'Beginner', category: 'Standing',
    styles: ['vinyasa', 'ashtanga', 'hatha', 'bikram', 'prenatal'], keywords: ['warrior 1', 'warrior one', 'virabhadrasana'],
    start: 'Stand tall and step one foot back about one leg length, turning the back toes out slightly.',
    steps: [
      'Turn the back foot out about 45 degrees and keep the front foot pointing forward.',
      'Bend the front knee over the ankle, keeping the shin as vertical as possible.',
      'Square your hips toward the front of the mat as much as is comfortable.',
      'Reach the arms overhead with a long spine and a soft gaze ahead.',
    ],
    breath: 'Inhale to lengthen and lift the arms; exhale to sink a little deeper into the bend.',
    hold: '30–60 seconds each side',
    benefits: ['Strengthens legs and core', 'Opens the hips and chest', 'Builds focus and balance'],
    mistakes: ['Front knee collapsing inward', 'Lower back arching too much', 'Turning the whole body sideways'],
    caution: 'Keep the stance shorter if the front knee feels strained.',
  },
  'virabhadrasana-2': {
    id: 'virabhadrasana-2', name: 'Warrior II', sanskrit: 'Virabhadrasana II', level: 'Beginner', category: 'Standing',
    styles: ['vinyasa', 'ashtanga', 'hatha', 'bikram', 'power', 'iyengar', 'prenatal'], keywords: ['warrior 2', 'warrior two', 'virabhadrasana'],
    start: 'Stand with feet wide apart, turning the right toes forward and the left toes slightly inward.',
    steps: [
      'Bend the right knee directly over the right ankle.',
      'Keep the left leg straight and press the outer left foot into the floor.',
      'Extend both arms out at shoulder height, palms down.',
      'Look over the right fingertips with a soft, steady gaze.',
      'Repeat on the other side.',
    ],
    breath: 'Inhale as you open the arms; exhale as you bend the knee; breathe evenly while holding.',
    hold: '30–60 seconds each side',
    benefits: ['Builds leg strength and stamina', 'Opens the hips', 'Improves concentration'],
    mistakes: ['Knee drifting past the ankle', 'Leaning the torso toward the bent leg', 'Turning the head too far'],
    caution: 'Shorten the stance if your hips or knees feel strained. In pregnancy, use a wider, gentler stance.',
  },
  trikonasana: {
    id: 'trikonasana', name: 'Triangle Pose', sanskrit: 'Trikonasana', level: 'Beginner', category: 'Standing',
    styles: ['iyengar', 'vinyasa', 'ashtanga', 'hatha', 'bikram'], keywords: ['triangle', 'trikonasana', 'side stretch'],
    start: 'Stand with feet about one leg apart; turn the right toes forward and left toes slightly in.',
    steps: [
      'Reach both arms out to the sides at shoulder height.',
      'Hinge at the right hip and reach the right hand toward the shin or a block.',
      'Extend the left arm up and keep both sides of the torso equally long.',
      'Press the outer edge of the back foot into the floor.',
      'Return slowly with a long spine and repeat on the other side.',
    ],
    breath: 'Inhale to lengthen the spine and open the arms; exhale to fold to the side.',
    hold: '30–60 seconds each side',
    benefits: ['Stretches the sides and hamstrings', 'Improves balance', 'Strengthens the legs'],
    mistakes: ['Rounding the back to reach the floor', 'Collapsing the chest', 'Bending the front knee deeply'],
    caution: 'Use a block under the hand. If you have neck issues, keep the gaze straight ahead.',
  },
  vrksasana: {
    id: 'vrksasana', name: 'Tree Pose', sanskrit: 'Vrksasana', level: 'Beginner', category: 'Balance',
    styles: ['hatha', 'iyengar', 'vinyasa', 'prenatal'], keywords: ['tree', 'balance', 'one leg', 'vrksasana'],
    start: 'Stand in Mountain Pose with feet hip-width apart and weight even.',
    steps: [
      'Shift weight onto the left foot and press its four corners into the floor.',
      'Place the right foot on the inner left thigh or calf — never on the knee.',
      'Bring palms together at the chest and find a steady point to look at.',
      'Lengthen the spine and breathe; press the foot and thigh gently together.',
      'Step back down and repeat on the other side.',
    ],
    breath: 'Inhale to lengthen; exhale to settle. Keep breathing normally — never hold the breath.',
    hold: '30–60 seconds each side',
    benefits: ['Improves balance and focus', 'Strengthens the feet', 'Builds confidence'],
    mistakes: ['Placing the foot on the knee', 'Hinging sideways at the waist', 'Staring at the floor'],
    caution: 'Use a wall or chair for support. If you feel unsteady, keep the toes on the floor.',
  },
  paschimottanasana: {
    id: 'paschimottanasana', name: 'Seated Forward Fold', sanskrit: 'Paschimottanasana', level: 'Beginner', category: 'Forward fold',
    styles: ['hatha', 'yin', 'iyengar', 'bikram', 'restorative'], keywords: ['seated forward bend', 'forward fold', 'touch toes sitting', 'paschimottanasana'],
    start: 'Sit on a folded blanket with both legs extended straight in front of you.',
    steps: [
      'Flex your feet and press the backs of the thighs into the floor.',
      'Sit tall and lengthen the spine on an inhale.',
      'Hinge from the hips and fold forward on the exhale, reaching to the shins or feet.',
      'Keep the spine long rather than rounding the upper back.',
      'Breathe into the back of the body and soften a little more with each exhale.',
    ],
    breath: 'Inhale to grow tall; exhale to fold a fraction deeper.',
    hold: '1–3 minutes (longer in Yin)',
    benefits: ['Stretches the back body', 'Calms the mind', 'Relieves mild back tension'],
    mistakes: ['Rounding the upper back', 'Yanking on the feet', 'Collapsing the chest'],
    caution: 'Use a strap around the feet if needed. With a disc problem, keep the knees bent and fold only mildly.',
  },
  'setu-bandha': {
    id: 'setu-bandha', name: 'Bridge Pose', sanskrit: 'Setu Bandha Sarvangasana', level: 'Beginner', category: 'Backbend',
    styles: ['iyengar', 'restorative', 'hatha', 'yin'], keywords: ['bridge', 'setu bandha', 'hip lift', 'backbend'],
    start: 'Lie on your back with knees bent, feet hip-width apart and arms alongside the body.',
    steps: [
      'Press the feet and the backs of the arms into the floor.',
      'On an inhale, lift the hips a comfortable height.',
      'Keep the knees parallel and do not let them splay outward.',
      'For support, slide a block under the sacrum and rest there.',
      'Lower slowly on an exhale.',
    ],
    breath: 'Inhale to lift the hips; breathe naturally while holding; exhale to lower.',
    hold: '30–60 seconds',
    benefits: ['Strengthens the back and glutes', 'Opens the chest', 'Gently energises the body'],
    mistakes: ['Pushing too high and cramping the lower back', 'Turning the knees out', 'Holding the breath'],
    caution: 'Avoid if you have a recent neck injury; use a bolster and keep the lift small.',
  },
  balasana: {
    id: 'balasana', name: "Child's Pose", sanskrit: 'Balasana', level: 'Beginner', category: 'Rest',
    styles: ['hatha', 'yin', 'restorative', 'vinyasa', 'prenatal'], keywords: ['child pose', 'childs pose', 'rest', 'balasana', 'knees'],
    start: 'Kneel on the floor with big toes together and knees wider than the hips.',
    steps: [
      'Sit back on your heels and lengthen the spine.',
      'Fold forward between the thighs and rest the forehead on the floor or a bolster.',
      'Let the arms reach forward or rest alongside the body.',
      'Soften the jaw, belly and shoulders with each exhale.',
    ],
    breath: 'Natural, slow breathing — let the back body widen with each inhale.',
    hold: '1–3 minutes',
    benefits: ['Rest resets the body', 'Gently stretches the hips and back', 'Calms the nervous system'],
    mistakes: ['Forcing the forehead to the floor', 'Collapsing the shoulders into the ears', 'Tensing the belly'],
    caution: 'If your knees are uncomfortable, place a blanket behind them or widen them further.',
  },
  savasana: {
    id: 'savasana', name: 'Corpse Pose', sanskrit: 'Savasana', level: 'Beginner', category: 'Rest',
    styles: ['hatha', 'vinyasa', 'ashtanga', 'yin', 'iyengar', 'kundalini', 'bikram', 'power', 'restorative', 'prenatal'],
    keywords: ['corpse', 'final relaxation', 'rest', 'lie down', 'relax', 'savasana'],
    start: 'Lie flat on your back with legs extended and arms relaxed at your sides.',
    steps: [
      'Support your head with a blanket if your chin sits higher than your forehead.',
      'Let the feet fall naturally apart and turn the palms up.',
      'Release effort from the face, jaw, belly and limbs.',
      'Stay present and simply watch the breath.',
    ],
    breath: 'Let the breath become slow and natural. Do not try to change it.',
    hold: '3–10 minutes',
    benefits: ['Deep relaxation', 'Integrates the practice', 'Lowers stress'],
    mistakes: ['Tensing the body while lying down', 'Falling into a stiff, held position', 'Skipping this pose'],
    caution: 'In pregnancy or with back discomfort, rest on your side with a pillow between the knees.',
  },
  marjariasana: {
    id: 'marjariasana', name: 'Cat–Cow Pose', sanskrit: 'Marjariasana / Bitilasana', level: 'Beginner', category: 'Spinal',
    styles: ['hatha', 'vinyasa', 'kundalini', 'prenatal', 'yin'], keywords: ['cat cow', 'cat', 'cow', 'spinal', 'tabletop', 'marjariasana'],
    start: 'Come onto hands and knees with wrists under shoulders and knees under hips.',
    steps: [
      'Press the palms down and keep the spine neutral.',
      'On an inhale, lift the sitting bones and chest and let the belly soften down (Cow).',
      'On an exhale, round the spine up like a cat and draw the chin toward the chest.',
      'Repeat slowly, moving the whole spine rather than only the neck.',
    ],
    breath: 'Inhale into Cow; exhale into Cat.',
    hold: '8–12 repetitions',
    benefits: ['Warms the spine', 'Improves spinal mobility', 'Massages abdominal organs', 'Gentle in pregnancy'],
    mistakes: ['Moving only the head', 'Rocking the hips aggressively', 'Holding the breath'],
    caution: 'Keep the movement small if the back is sensitive.',
  },
  dhanurasana: {
    id: 'dhanurasana', name: 'Bow Pose', sanskrit: 'Dhanurasana', level: 'Intermediate', category: 'Backbend',
    styles: ['ashtanga', 'hatha', 'bikram', 'power'], keywords: ['bow', 'dhanurasana', 'backbend', 'lie on belly'],
    start: 'Lie on your belly with arms alongside the body and a small gap between the feet.',
    steps: [
      'Bend the knees and reach back to hold the outer ankles.',
      'Press the pubic bone into the floor and lengthen the spine.',
      'On an inhale, gently lift the chest and thighs away from the floor.',
      'Keep the gaze down and the breath smooth.',
    ],
    breath: 'Inhale to lift; exhale to hold steady without collapsing.',
    hold: '15–30 seconds',
    benefits: ['Strengthens the back', 'Opens the chest and shoulders', 'Improves spinal flexibility'],
    mistakes: ['Lifting too high too soon', 'Jerking the legs up', 'Crunching the lower back'],
    caution: 'Avoid with serious back injury, recent abdominal surgery or during pregnancy.',
  },
  navasana: {
    id: 'navasana', name: 'Boat Pose', sanskrit: 'Navasana', level: 'Intermediate', category: 'Core',
    styles: ['power', 'kundalini', 'vinyasa'], keywords: ['boat', 'navasana', 'core', 'v shape', 'abs'],
    start: 'Sit on the floor with knees bent and feet flat, hands resting on your thighs.',
    steps: [
      'Sit tall and lean the torso back slightly from the hips.',
      'Lift the feet to shin height, then straighten the legs if comfortable.',
      'Reach the arms forward parallel to the floor.',
      'Draw the belly in and broaden the chest; keep the neck long.',
    ],
    breath: 'Inhale to lengthen the spine; exhale to engage the core.',
    hold: '20–45 seconds',
    benefits: ['Strengthens the core', 'Improves balance', 'Builds stamina'],
    mistakes: ['Rounding the upper back', 'Holding the breath', 'Locking the knees'],
    caution: 'Keep the knees bent and use hands behind the thighs if the lower back complains.',
  },
  utkatasana: {
    id: 'utkatasana', name: 'Chair Pose', sanskrit: 'Utkatasana', level: 'Beginner', category: 'Standing',
    styles: ['power', 'vinyasa', 'hatha', 'bikram'], keywords: ['chair', 'utkatasana', 'squat', 'thighs', 'strength'],
    start: 'Stand with feet together or hip-width apart.',
    steps: [
      'Inhale and reach both arms overhead.',
      'Exhale and sit the hips back and down as if into a chair.',
      'Keep the knees over the ankles and the weight in the heels.',
      'Lift the chest and keep the arms long.',
    ],
    breath: 'Inhale to lengthen; exhale to sit lower.',
    hold: '30–45 seconds',
    benefits: ['Strengthens thighs and core', 'Builds heat', 'Improves balance'],
    mistakes: ['Knees caving inward', 'Leaning the torso far forward', 'Tensing the shoulders'],
    caution: 'Come out if the knees hurt; keep the bend shallow.',
  },
  'supta-baddha-konasana': {
    id: 'supta-baddha-konasana', name: 'Reclined Butterfly Pose', sanskrit: 'Supta Baddha Konasana', level: 'Beginner', category: 'Rest',
    styles: ['yin', 'restorative', 'prenatal', 'iyengar'], keywords: ['butterfly', 'reclined butterfly', 'supine', 'hips', 'rest'],
    start: 'Lie on your back, ideally with a bolster lengthwise under your upper back.',
    steps: [
      'Bring the soles of the feet together and let the knees open to the sides.',
      'Rest your arms out to the sides, palms up.',
      'Support the knees with blankets or pillows so they are fully at ease.',
      'Let the breath be soft and allow the chest to open over the bolster.',
    ],
    breath: 'Slow nasal breathing; let each exhale soften the hips a little more.',
    hold: '2–5 minutes',
    benefits: ['Opens the hips gently', 'Relaxes the nervous system', 'Opens the chest'],
    mistakes: ['Forcing the knees flat', 'Tensing the belly', 'Using no support'],
    caution: 'Always support the knees. In pregnancy this is a comfortable, gentle option.',
  },
  'viparita-karani': {
    id: 'viparita-karani', name: 'Legs-Up-the-Wall Pose', sanskrit: 'Viparita Karani', level: 'Beginner', category: 'Rest',
    styles: ['restorative', 'yin', 'hatha'], keywords: ['legs up the wall', 'viparita karani', 'inversion', 'legs up', 'rest'],
    start: 'Sit sideways against a wall with your hip close to it.',
    steps: [
      'Swing your legs up the wall as you lie back on the floor.',
      'Slide your sitting bones close to the wall and place a cushion under them if needed.',
      'Let the arms rest out to the sides and soften the belly.',
      'Stay still and breathe naturally.',
    ],
    breath: 'Natural, unhurried breathing — let the exhale be long and smooth.',
    hold: '3–10 minutes',
    benefits: ['Calms the nervous system', 'Relieves tired legs', 'Gentle inversion without effort'],
    mistakes: ['Tensing the legs', 'Placing the hips too far from the wall', 'Holding the breath'],
    caution: 'Avoid during heavy menstruation and with untreated glaucoma; ask a professional if unsure.',
  },
  'ardha-matsyendrasana': {
    id: 'ardha-matsyendrasana', name: 'Half Lord of the Fishes Pose', sanskrit: 'Ardha Matsyendrasana', level: 'Intermediate', category: 'Twist',
    styles: ['iyengar', 'yin', 'hatha'], keywords: ['seated twist', 'twist', 'matsyendra', 'spinal twist'],
    start: 'Sit with legs extended, then cross the right shin in front of the left leg.',
    steps: [
      'Place the right foot outside the left thigh and keep both sitting bones grounded.',
      'Hug the right knee with the left arm and lengthen the spine.',
      'Press the left elbow outside the right knee and turn the torso gently to the right.',
      'Keep the twist in the upper back, not forced from the neck.',
      'Repeat on the other side.',
    ],
    breath: 'Inhale to lengthen the spine; exhale to twist a little further.',
    hold: '30–60 seconds each side',
    benefits: ['Improves spinal mobility', 'Stretches the hips', 'Aids digestion'],
    mistakes: ['Forcing the twist with the arm', 'Lifting a sitting bone', 'Twisting the neck excessively'],
    caution: 'Avoid deep twists during pregnancy and with serious spinal conditions.',
  },
};

export const sequences = {
  suryaNamaskar: {
    id: 'suryaNamaskar',
    name: 'Surya Namaskar (Sun Salutation)',
    aliases: ['surya namaskar', 'sun salutation', 'sun salute', 'namaskar', '12 steps', 'suryanamaskar'],
    description: 'A classic 12-step sequence that warms the whole body and links movement with breath.',
    steps: [
      { name: 'Pranamasana', sanskrit: 'Prayer Pose', cues: ['Stand straight with your feet together.', 'Join your palms in front of your chest.', 'Relax your shoulders and breathe normally.'], breath: 'Breathe normally.' },
      { name: 'Hastauttanasana', sanskrit: 'Raised Arms Pose', cues: ['Raise both arms above your head.', 'Gently bend backwards from the upper back.', 'Keep the knees soft and steady.'], breath: 'Inhale while raising your arms.' },
      { name: 'Padahastasana', sanskrit: 'Hand-to-Foot Pose', cues: ['Slowly bend forward from the hips.', 'Try to bring your hands towards your feet.', 'Let the head and neck hang heavy.'], breath: 'Exhale while bending.' },
      { name: 'Ashwa Sanchalanasana', sanskrit: 'Equestrian Pose', cues: ['Step the right leg back and lower the right knee.', 'Keep the left foot between your hands.', 'Look slightly forward and lift the chest.'], breath: 'Inhale as you step back.' },
      { name: 'Dandasana', sanskrit: 'Stick Pose / Plank', cues: ['Step the left leg back to join the right.', 'Keep the body in one straight line.', 'Engage the core and press the palms down.'], breath: 'Exhale as you step back.' },
      { name: 'Ashtanga Namaskara', sanskrit: 'Eight-Limbed Salute', cues: ['Lower the knees, chest and chin to the floor.', 'Keep the hips slightly lifted.', 'Relax the shoulders down.'], breath: 'Hold the breath for a moment, or keep breathing gently if that is easier.' },
      { name: 'Bhujangasana', sanskrit: 'Cobra Pose', cues: ['Slide the hands under the shoulders.', 'Lift the chest gently using the back muscles.', 'Keep the hips on the floor.'], breath: 'Inhale as you lift the chest.' },
      { name: 'Adho Mukha Svanasana', sanskrit: 'Downward-Facing Dog', cues: ['Tuck the toes and lift the hips up and back.', 'Press the palms down and lengthen the spine.', 'Bend the knees as much as you need.'], breath: 'Exhale as you lift the hips.' },
      { name: 'Ashwa Sanchalanasana', sanskrit: 'Equestrian Pose', cues: ['Step the right foot forward between the hands.', 'Lower the left knee to the floor.', 'Look forward and open the chest.'], breath: 'Inhale as you step forward.' },
      { name: 'Padahastasana', sanskrit: 'Hand-to-Foot Pose', cues: ['Bring the left foot forward to meet the right.', 'Fold forward from the hips.', 'Relax the head and let the hands reach down.'], breath: 'Exhale as you fold.' },
      { name: 'Hastauttanasana', sanskrit: 'Raised Arms Pose', cues: ['Raise the arms overhead and stand tall.', 'Gently arch back from the upper back.', 'Keep the breath smooth.'], breath: 'Inhale as you rise.' },
      { name: 'Pranamasana', sanskrit: 'Prayer Pose', cues: ['Bring the palms together at the chest.', 'Stand straight and settle the body.', 'Notice how you feel.'], breath: 'Exhale and return to normal breathing.' },
    ],
    benefits: ['Warms the whole body', 'Strengthens arms and legs', 'Improves flexibility', 'Builds breath awareness', 'Creates a focused mind'],
    mistakes: ['Rushing through the steps', 'Forcing the feet or hands to the floor', 'Holding the breath or clenching the jaw', 'Locking the knees in the folding poses'],
    breathing: 'Inhale on opening and lengthening movements (steps 2, 4, 7, 9, 11). Exhale on folding and lowering movements (steps 3, 5, 8, 10, 12).',
    safety: 'Move at your own pace and skip any step that does not feel right. Bend the knees in folds, drop the knees in plank, and stop if you feel pain, dizziness or breathlessness.',
  },
  gentleFlow: {
    id: 'gentleFlow',
    name: 'Gentle Beginner Flow',
    aliases: ['gentle flow', 'beginner flow', 'easy sequence', 'morning flow'],
    description: 'A short, accessible sequence to warm the spine and build confidence.',
    steps: [
      { name: 'Sukhasana', sanskrit: 'Easy Pose', cues: ['Sit comfortably and lengthen the spine.', 'Take five slow breaths.'], breath: 'Natural nasal breathing.' },
      { name: 'Marjariasana', sanskrit: 'Cat–Cow', cues: ['Come to hands and knees.', 'Move with the breath, rounding and lifting the spine.'], breath: 'Inhale Cow, exhale Cat.' },
      { name: 'Tadasana', sanskrit: 'Mountain Pose', cues: ['Stand tall with weight even on both feet.', 'Reach the crown of the head up.'], breath: 'Inhale tall, exhale settle.' },
      { name: 'Vrksasana', sanskrit: 'Tree Pose', cues: ['Balance on one foot with the other foot on the inner thigh or calf.', 'Use a wall if needed.'], breath: 'Keep breathing normally.' },
      { name: 'Balasana', sanskrit: "Child's Pose", cues: ['Rest on the heels and fold forward.', 'Soften the whole body.'], breath: 'Slow, easy breaths.' },
      { name: 'Savasana', sanskrit: 'Corpse Pose', cues: ['Lie down and let everything go.', 'Watch the breath.'], breath: 'Let the breath be natural.' },
    ],
    benefits: ['Gentle mobility', 'Improves balance', 'Calms the mind'],
    mistakes: ['Moving too fast', 'Holding the breath', 'Skipping the final rest'],
    breathing: 'Link each movement with one inhale or exhale; never force the breath.',
    safety: 'Stop if anything hurts. Use props and a wall for support whenever helpful.',
  },
};

export const levelRank = { beginner: 1, intermediate: 2, advanced: 3, 'all levels': 2 };

export const levelGroups = [
  { id: 'beginner', label: 'Beginner', shortLabel: 'Beginners', icon: 'Sprout', description: 'Gentle starts, steady breathing and strong foundations.' },
  { id: 'intermediate', label: 'Intermediate', shortLabel: 'Intermediate', icon: 'Activity', description: 'Build flow, strength and confidence in your practice.' },
  { id: 'advanced', label: 'Advanced', shortLabel: 'Advanced', icon: 'Flame', description: 'Structured, vigorous practice for experienced students.' },
];

export function stylesForLevel(group) {
  return !group || group === 'all' ? styles : styles.filter((style) => style.levelGroup === group);
}

/** Local photos for the quick pose-timer library. */
export const posePhotos = {
  tadasana: '/images/yoga/hatha.jpg',
  sukhasana: '/images/yoga/yin.jpg',
  'urdhva-hastasana': '/images/yoga/vinyasa.jpg',
  uttanasana: '/images/yoga/vinyasa.jpg',
  vrksasana: '/images/yoga/vinyasa.jpg',
  bhujangasana: '/images/yoga/power.jpg',
  'virabhadrasana-2': '/images/yoga/ashtanga.jpg',
  balasana: '/images/yoga/yin.jpg',
  paschimottanasana: '/images/yoga/yin.jpg',
  savasana: '/images/yoga/restorative.jpg',
  'supta-baddha-konasana': '/images/yoga/restorative.jpg',
  'viparita-karani': '/images/yoga/restorative.jpg',
};

/** Turns a written hold suggestion such as "30–60 seconds" into timer seconds. */
export function getPoseHoldSeconds(pose) {
  const text = String(pose?.hold || '');
  const matches = [...text.matchAll(/(\d+)\s*(?:[–-]\s*(\d+))?\s*(second|minute|minutes|min|sec|secs)/gi)];
  if (!matches.length) return 45;
  const match = matches[0];
  const value = Number(match[2] || match[1]);
  const isMinutes = /min/i.test(match[3]);
  const seconds = isMinutes ? value * 60 : value;
  return Math.max(15, Math.min(300, seconds));
}

export const goals = ['Flexibility', 'Relaxation', 'Strength', 'Balance', 'General Fitness'];
export const experienceLevels = ['Beginner', 'Intermediate', 'Advanced'];

const GOAL_POSES = {
  Flexibility: ['uttanasana', 'paschimottanasana', 'trikonasana', 'supta-baddha-konasana', 'balasana'],
  Relaxation: ['sukhasana', 'balasana', 'supta-baddha-konasana', 'viparita-karani', 'savasana'],
  Strength: ['plank', 'chaturanga', 'virabhadrasana-2', 'utkatasana', 'navasana', 'setu-bandha'],
  Balance: ['vrksasana', 'virabhadrasana-1', 'virabhadrasana-2', 'tadasana', 'trikonasana'],
  'General Fitness': ['tadasana', 'bhujangasana', 'virabhadrasana-2', 'plank', 'marjariasana', 'savasana'],
};

const normalize = (text) => String(text || '').toLowerCase().replace(/[^a-z0-9\s-]/g, ' ');

export function inferGoal(query) {
  const q = normalize(query);
  const aliases = {
    Flexibility: ['flexib', 'stretch', 'loose', 'range of motion'],
    Relaxation: ['relax', 'calm', 'stress', 'sleep', 'rest', 'unwind', 'meditat'],
    Strength: ['strength', 'strong', 'muscle', 'build', 'power', 'tone'],
    Balance: ['balance', 'steady', 'stability', 'coordination'],
    'General Fitness': ['fitness', 'general', 'overall', 'healthy', 'workout'],
  };
  for (const [goal, words] of Object.entries(aliases)) {
    if (words.some((word) => q.includes(word))) return goal;
  }
  return null;
}

export function getStyle(id) {
  return styles.find((style) => style.id === id) || null;
}

export function getPose(id) {
  return Object.values(poses).find((pose) => pose.id === id) || null;
}

export function findPoseByQuery(query) {
  const q = normalize(query);
  if (!q) return null;
  let best = null;
  let bestScore = 0;
  for (const pose of Object.values(poses)) {
    const names = [pose.name, pose.sanskrit, ...(pose.keywords || [])].map(normalize);
    let score = 0;
    for (const name of names) {
      if (q.includes(name) && name.length > 3) score += name.length / 3 + 3;
      for (const token of name.split(/\s+/)) {
        if (token.length > 3 && q.includes(token)) score += 1;
      }
    }
    if (score > bestScore) {
      best = pose;
      bestScore = score;
    }
  }
  return bestScore >= 2 ? best : null;
}

export function findStyleByQuery(query) {
  const q = normalize(query);
  if (!q) return null;
  let best = null;
  let bestScore = 0;
  for (const style of styles) {
    let score = 0;
    const core = normalize(style.name.replace(' Yoga', ''));
    if (q.includes(core)) score += 8;
    if (q.includes(normalize(style.name))) score += 8;
    for (const word of normalize(style.tagline).split(/\s+/)) {
      if (word.length > 4 && q.includes(word)) score += 0.5;
    }
    for (const focus of style.focus) {
      if (q.includes(normalize(focus))) score += 2;
    }
    if (score > bestScore) {
      best = style;
      bestScore = score;
    }
  }
  return bestScore >= 4 ? best : null;
}

export function findSequenceByQuery(query) {
  const q = normalize(query);
  if (!q) return null;
  return Object.values(sequences).find((sequence) => sequence.aliases.some((alias) => q.includes(normalize(alias)))) || null;
}

/**
 * Retrieval step: score knowledge-base entries against the user's question and
 * combine the results with the selected style and personal profile.
 */
export function retrieveKnowledge({ query = '', styleId = null, profile = {} } = {}) {
  const q = normalize(query);
  const words = q.split(/\s+/).filter((word) => word.length > 3);

  const scoreEntry = (text) => words.reduce((sum, word) => sum + (normalize(text).includes(word) ? 1 : 0), 0);

  const matchedStyles = styles
    .map((style) => ({
      item: style,
      score: scoreEntry([style.name, style.tagline, style.description, style.focus.join(' '), style.bestFor.join(' ')].join(' ')),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map((entry) => entry.item);

  const matchedPoses = Object.values(poses)
    .map((pose) => ({
      item: pose,
      score: scoreEntry([pose.name, pose.sanskrit, pose.category, (pose.keywords || []).join(' ')].join(' ')) + (findPoseByQuery(q)?.id === pose.id ? 6 : 0),
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((entry) => entry.item);

  const matchedSequences = Object.values(sequences)
    .filter((sequence) => sequence.aliases.some((alias) => q.includes(normalize(alias))))
    .slice(0, 2);

  const selected = getStyle(styleId);
  if (selected && !matchedStyles.some((style) => style.id === selected.id)) matchedStyles.unshift(selected);

  if (profile.goal && matchedPoses.length < 2) {
    for (const id of GOAL_POSES[profile.goal] || []) {
      if (matchedPoses.length >= 3) break;
      if (!matchedPoses.some((pose) => pose.id === id)) matchedPoses.push(getPose(id));
    }
  }

  return {
    styles: matchedStyles.filter(Boolean).slice(0, 3),
    poses: matchedPoses.filter(Boolean).slice(0, 3),
    sequences: matchedSequences,
    profile,
  };
}

export function formatContextForAI(retrieved) {
  const { styles: matchedStyles = [], poses: matchedPoses = [], sequences: matchedSequences = [], profile = {} } = retrieved;

  const styleText = matchedStyles
    .map(
      (style) => `STYLE: ${style.name} (${style.difficulty}, ${style.pace})\n- ${style.description}\n- Focus: ${style.focus.join(', ')}\n- Breath: ${style.breath}\n- Safety: ${style.precautions}`,
    )
    .join('\n\n');

  const poseText = matchedPoses
    .map(
      (pose) =>
        `POSE: ${pose.name} / ${pose.sanskrit} (${pose.level}, ${pose.category})\n- Start: ${pose.start}\n- Steps: ${pose.steps.join(' | ')}\n- Breath: ${pose.breath}\n- Hold: ${pose.hold}\n- Benefits: ${pose.benefits.join(', ')}\n- Common mistakes: ${pose.mistakes.join(', ')}\n- Caution: ${pose.caution}`,
    )
    .join('\n\n');

  const sequenceText = matchedSequences
    .map(
      (sequence) =>
        `SEQUENCE: ${sequence.name}\n- ${sequence.description}\n- Steps: ${sequence.steps.map((step, index) => `${index + 1}. ${step.name}: ${step.cues.join(' ')} [${step.breath}]`).join(' | ')}\n- Benefits: ${sequence.benefits.join(', ')}\n- Common mistakes: ${sequence.mistakes.join(', ')}\n- Breathing: ${sequence.breathing}\n- Safety: ${sequence.safety}`,
    )
    .join('\n\n');

  const profileText = `USER PROFILE: ${[profile.level && `experience=${profile.level}`, profile.goal && `goal=${profile.goal}`, profile.styleId && `preferred style=${getStyle(profile.styleId)?.name || profile.styleId}`, profile.minutes && `time=${profile.minutes} minutes`].filter(Boolean).join('; ') || 'not provided'}`;

  return [`RETRIEVED YOGA KNOWLEDGE (use this as your primary source):`, profileText, styleText, poseText, sequenceText]
    .filter(Boolean)
    .join('\n\n');
}

export function recommend({ level = 'Beginner', goal = 'General Fitness', styleId = null, minutes = 15 } = {}) {
  const userLevel = levelRank[String(level).toLowerCase()] || 1;
  const scored = styles.map((style) => {
    let score = 0;
    const reasons = [];
    if (styleId === style.id) {
      score += 6;
      reasons.push('matches your preferred style');
    }
    if (style.bestFor.includes(goal)) {
      score += 4;
      reasons.push(`supports your ${goal.toLowerCase()} goal`);
    }
    if (userLevel <= 1 && style.level === 1) {
      score += 3;
      reasons.push('welcoming for beginners');
    } else if (userLevel === 2 && style.level <= 2) {
      score += 3;
      reasons.push('suited to an intermediate practice');
    } else if (userLevel === 3) {
      score += style.level === 3 ? 3 : 1;
      if (style.level === 3) reasons.push('challenging enough for advanced practice');
    }
    if (Number(minutes) <= 20 && ['hatha', 'restorative', 'yin', 'prenatal'].includes(style.id)) {
      score += 1;
      reasons.push('works well in a short session');
    }
    return { style, score, reasons };
  });

  const top = scored.sort((a, b) => b.score - a.score).slice(0, 3);
  return top.map(({ style, reasons, score }) => {
    const posePool = [...new Set([...(GOAL_POSES[goal] || []), ...style.sequence])]
      .map(getPose)
      .filter(Boolean)
      .filter((pose) => levelRank[pose.level.toLowerCase()] <= Math.max(2, userLevel))
      .slice(0, 5);
    return {
      style,
      score,
      reasons: reasons.length ? reasons : ['a balanced practice for many goals'],
      poses: posePool,
      suggestedMinutes: Number(minutes) || 15,
    };
  });
}

export function buildSession({ styleId = 'hatha', level = 'Beginner', goal = 'General Fitness', minutes = 10 } = {}) {
  const style = getStyle(styleId) || styles[0];
  const duration = [10, 15, 20, 30].includes(Number(minutes)) ? Number(minutes) : 10;
  const count = Math.max(5, Math.min(15, Math.round(duration / 2)));
  const userLevel = levelRank[String(level).toLowerCase()] || 1;

  const pool = [...new Set([...(GOAL_POSES[goal] || []), ...style.sequence])]
    .map(getPose)
    .filter(Boolean)
    .filter((pose) => levelRank[pose.level.toLowerCase()] <= Math.max(userLevel, style.level))
    .filter((pose) => pose.id !== 'savasana');

  const ordered = [];
  const add = (pose) => {
    if (pose && !ordered.some((item) => item.id === pose.id)) ordered.push(pose);
  };

  add(getPose('tadasana'));
  if (styleId === 'restorative' || styleId === 'yin' || styleId === 'prenatal') add(getPose('sukhasana'));
  if (styleId === 'yin') add(getPose('supta-baddha-konasana'));

  // Cross-category ordering gives the session a natural warm-up → main work → wind-down arc.
  const priority = (pose) => {
    if (pose.category === 'Standing' || pose.category === 'Spinal') return 0;
    if (pose.category === 'Core' || pose.category === 'Backbend' || pose.category === 'Balance' || pose.category === 'Twist' || pose.category === 'Inversion' || pose.category === 'Forward fold') return 1;
    return 2;
  };
  [...pool].sort((a, b) => priority(a) - priority(b)).forEach(add);

  const warmDown = [getPose('balasana'), getPose('supta-baddha-konasana'), getPose('viparita-karani')];
  for (const pose of warmDown) {
    if (ordered.length >= count - 1) break;
    add(pose);
  }

  const selected = ordered.slice(0, Math.max(1, count - 1));
  selected.push(getPose('savasana'));

  const baseHold = styleId === 'yin' ? 120 : styleId === 'restorative' ? 90 : duration >= 30 ? 75 : duration >= 20 ? 60 : 45;

  return selected.map((pose) => ({
    ...pose,
    seconds:
      pose.id === 'savasana'
        ? Math.min(180, Math.max(60, duration * 4))
        : pose.id === 'marjariasana'
          ? Math.min(baseHold, 60)
          : baseHold,
  }));
}

const DISTRESS_PATTERN = /\b(pain|hurt|hurts|dizzy|dizziness|nausea|nauseous|sharp|uncomfortable|discomfort|injur\w*|chest pain|light.?headed|bleeding|contractions)\b/i;

export function buildOfflineAnswer({ query = '', styleId = null, profile = {} } = {}) {
  const cleanQuery = String(query || '').trim();
  const lower = normalize(cleanQuery);
  const selectedStyle = getStyle(styleId) || findStyleByQuery(cleanQuery);
  const distress = DISTRESS_PATTERN.test(cleanQuery);

  let answer = '';

  if (distress) {
    answer += [
      '**Safety first**',
      '- Please stop the pose right now and rest in a comfortable position.',
      '- Sharp pain, dizziness, nausea or unusual discomfort are signs to stop — do not push through them.',
      '- If symptoms continue, or if you are injured, pregnant or managing a medical condition, speak with an appropriately qualified healthcare professional.',
      '- When you resume, choose a gentler variation, use props and move slowly.\n',
    ].join('\n');
  }

  const sequence = findSequenceByQuery(cleanQuery);
  if (sequence) {
    answer += [
      `**${sequence.name} — step by step**`,
      ...sequence.steps.flatMap((step, index) => [
        `Step ${index + 1}: ${step.name} (${step.sanskrit})`,
        ...step.cues.map((cue) => `- ${cue}`),
        `- Breath: ${step.breath}`,
        '',
      ]),
      '**Benefits**',
      ...sequence.benefits.map((benefit) => `- ${benefit}`),
      '',
      '**Common mistakes**',
      ...sequence.mistakes.map((mistake) => `- ${mistake}`),
      '',
      '**Breathing instructions**',
      `- ${sequence.breathing}`,
      '',
      '**Safety precautions**',
      `- ${sequence.safety}`,
      '',
      '- Repeat the sequence 2–5 rounds when you feel ready, and finish with Savasana (final relaxation).',
    ].join('\n');
    return answer;
  }

  const pose = findPoseByQuery(cleanQuery);
  if (pose) {
    answer += [
      `**${pose.name} (${pose.sanskrit}) — ${pose.level.toLowerCase()}-friendly guide**`,
      '',
      `Starting position: ${pose.start}`,
      '',
      ...pose.steps.map((step, index) => `Step ${index + 1}: ${step}`),
      '',
      `**How to breathe**`,
      `- ${pose.breath}`,
      '',
      `**How long to hold**`,
      `- ${pose.hold}`,
      '',
      '**Benefits**',
      ...pose.benefits.map((benefit) => `- ${benefit}`),
      '',
      '**Common mistakes to avoid**',
      ...pose.mistakes.map((mistake) => `- ${mistake}`),
      '',
      '**Safety precautions**',
      `- ${pose.caution}`,
      '- Never force your body into an uncomfortable position. Stop if you feel pain or dizziness.',
    ].join('\n');
    return answer;
  }

  if (/\b(recommend|suggest|what should i|which (pose|style|practice)|good for my|plan for me|beginner)\b/i.test(lower)) {
    const result = recommend({
      level: profile.level || 'Beginner',
      goal: profile.goal || inferGoal(cleanQuery) || 'General Fitness',
      styleId: styleId || profile.styleId,
      minutes: profile.minutes || 15,
    });
    answer += [
      `**A practice recommended for you**`,
      `- Based on: ${profile.level || 'beginner'} level, ${profile.goal || inferGoal(cleanQuery) || 'general fitness'} goal${profile.minutes ? `, ${profile.minutes} minutes available` : ''}.`,
      '',
      ...result.flatMap((entry, index) => [
        `${index + 1}. ${entry.style.name} — ${entry.reasons.join(', ')}.`,
        `- Good poses to try: ${entry.poses.map((item) => item.name).join(', ')}.`,
        '',
      ]),
      '**Start here**',
      ...(result[0]?.poses.slice(0, 3).map((item) => `- ${item.name}: ${item.steps[0]}`) || []),
      '',
      '**Safety precautions**',
      '- Begin gently, breathe steadily and stop if anything hurts. For injuries, medical conditions or pregnancy, ask a qualified professional for guidance.',
    ].join('\n');
    return answer;
  }

  if (/\b(breath|breathing|pranayama|inhale|exhale)\b/i.test(lower)) {
    answer += [
      '**Breathing basics for yoga**',
      '- Breathe in and out through the nose whenever possible; keep the breath smooth and quiet.',
      '- A simple rule: inhale when you open, lengthen or lift; exhale when you fold, twist or lower.',
      '- Try this now: sit tall, inhale for four counts, exhale for six counts, and repeat five times.',
      '- If you become light-headed, return to normal breathing immediately.',
      '',
      selectedStyle
        ? `In ${selectedStyle.name}, ${selectedStyle.breath.charAt(0).toLowerCase()}${selectedStyle.breath.slice(1)}`
        : 'In most beginner practices, slow nasal breathing is the safest place to start.',
      '',
      '**Safety precautions**',
      '- Never force the breath or hold it if you feel strained. Stop and rest if you feel dizzy.',
    ].join('\n');
    return answer;
  }

  if (selectedStyle) {
    const firstPoses = selectedStyle.sequence.slice(0, 4).map(getPose).filter(Boolean);
    answer += [
      `**${selectedStyle.name} — ${selectedStyle.tagline}**`,
      `- ${selectedStyle.description}`,
      '',
      '**What to expect**',
      `- Level: ${selectedStyle.difficulty} • Pace: ${selectedStyle.pace} • Typical session: ${selectedStyle.sessionLength}`,
      `- Focus: ${selectedStyle.focus.join(', ')}.`,
      '',
      '**A gentle starting sequence**',
      ...firstPoses.map((pose, index) => `Step ${index + 1}: ${pose.name} — ${pose.steps[0]} Breath: ${pose.breath}`),
      '',
      '**Benefits**',
      ...selectedStyle.benefits.map((benefit) => `- ${benefit}`),
      '',
      '**Breathing instructions**',
      `- ${selectedStyle.breath}`,
      '',
      '**Common mistakes**',
      '- Moving too fast, holding the breath and forcing a deeper version of a pose.',
      '',
      '**Safety precautions**',
      `- ${selectedStyle.precautions}`,
      '- This is general educational guidance, not medical advice.',
    ].join('\n');
    return answer;
  }

  answer += [
    '**Hello, I am YogaMate AI** 🌿',
    '- I can teach you any yoga pose step by step, including posture, breathing, how long to hold it, benefits and mistakes to avoid.',
    '- Try asking: “How can I perform Surya Namaskar?”, “How do I do Warrior II?”, “What is good for relaxation?” or “Recommend a beginner practice”.',
    '- Choose a yoga style above and I will tailor my answers to it.',
    '',
    '**Safety precautions**',
    '- Move gently, never force a pose, and stop if you feel pain or dizziness. For injuries, medical conditions or pregnancy, consult a qualified professional.',
  ].join('\n');
  return answer;
}
