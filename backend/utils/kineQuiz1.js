import mongoose from "mongoose";
import Quiz from "../models/Quiz.model.js";

const mongoURI = "mongodb+srv://arka792002:arka5678@cluster0.l5hsp.mongodb.net/test";

const allQuizzes = [
  // ========== EASY QUIZ ==========
  {
    course: "jee",
    subject: "Physics",
    chapter: "kinematics",
    quizNumber: 1,  // Unique number
    title: "Kinematics Basics (Easy)",
    description: "Fundamental concepts of motion",
    duration: 15,
    questions: [
      {
        "text": "What is the SI unit of velocity?",
        "options": ["m/s²", "m/s", "N/s", "kg·m/s"],
        "correctAnswer": 1,
        "explanation": "Velocity is displacement over time, so its unit is m/s"
      },
      {
        "text": "A car moves at constant speed of 60 km/h for 2 hours. The distance covered is:",
        "options": ["30 km", "60 km", "120 km", "240 km"],
        "correctAnswer": 2,
        "explanation": "Distance = speed × time = 60 × 2 = 120 km"
      },
      {
        "text": "The slope of a position-time graph gives:",
        "options": ["Acceleration", "Velocity", "Force", "Displacement"],
        "correctAnswer": 1,
        "explanation": "Slope of x-t graph represents velocity (Δx/Δt)"
      },
      {
        "text": "When a ball is thrown vertically upward, at the highest point its:",
        "options": ["Velocity is maximum", "Acceleration is zero", "Velocity is zero", "Both velocity and acceleration are zero"],
        "correctAnswer": 2,
        "explanation": "At peak height, vertical velocity becomes zero while acceleration remains g downward"
      },
      {
        "text": "A body moving with uniform velocity has:",
        "options": ["Zero acceleration", "Constant non-zero acceleration", "Increasing acceleration", "Variable acceleration"],
        "correctAnswer": 0,
        "explanation": "Uniform velocity implies no change in speed or direction, hence zero acceleration"
      },
      {
        "text": "The area under a velocity-time graph represents:",
        "options": ["Acceleration", "Displacement", "Force", "Work done"],
        "correctAnswer": 1,
        "explanation": "Area under v-t graph gives displacement (v × Δt)"
      },
      {
        "text": "If a particle moves along a straight line with x = t² - 4t + 6, its velocity at t=1s is:",
        "options": ["-2 m/s", "0 m/s", "2 m/s", "4 m/s"],
        "correctAnswer": 0,
        "explanation": "v = dx/dt = 2t - 4 → at t=1: v = 2(1)-4 = -2 m/s"
      },
      {
        "text": "Which is NOT a vector quantity?",
        "options": ["Displacement", "Velocity", "Distance", "Acceleration"],
        "correctAnswer": 2,
        "explanation": "Distance has no direction, making it a scalar quantity"
      },
      {
        "text": "A car accelerates from rest at 2 m/s². Its velocity after 5s is:",
        "options": ["5 m/s", "10 m/s", "20 m/s", "25 m/s"],
        "correctAnswer": 1,
        "explanation": "v = u + at = 0 + (2)(5) = 10 m/s"
      },
      {
        "text": "The motion of a freely falling body is an example of:",
        "options": ["Uniform motion", "Uniform acceleration", "Non-uniform acceleration", "Circular motion"],
        "correctAnswer": 1,
        "explanation": "Freely falling bodies have constant acceleration due to gravity (g)"
      },
      {
        "text": "A train moving at 72 km/h is equivalent to:",
        "options": ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
        "correctAnswer": 1,
        "explanation": "72 km/h = 72 × (1000/3600) = 20 m/s"
      },
      {
        "text": "A particle moves along a circle with constant speed. Its acceleration is:",
        "options": ["Zero", "Constant in magnitude and direction", "Constant in magnitude only", "Constant in direction only"],
        "correctAnswer": 2,
        "explanation": "In uniform circular motion, centripetal acceleration has constant magnitude but changing direction"
      },
      {
        "text": "The equation v² - u² = 2as is valid when:",
        "options": ["Acceleration is zero", "Acceleration is constant", "Velocity is constant", "Motion is circular"],
        "correctAnswer": 1,
        "explanation": "This kinematic equation requires constant acceleration"
      },
      {
        "text": "A body covers 20 m in 2s and then 30 m in next 4s. Its average speed is:",
        "options": ["5 m/s", "7.5 m/s", "8.33 m/s", "10 m/s"],
        "correctAnswer": 2,
        "explanation": "Avg speed = total distance/total time = (20+30)/(2+4) ≈ 8.33 m/s"
      },
      {
        "text": "When a projectile reaches its maximum height:",
        "options": ["Velocity is zero", "Acceleration is zero", "Horizontal velocity is zero", "Vertical velocity is zero"],
        "correctAnswer": 3,
        "explanation": "At max height, vertical component becomes zero while horizontal component remains"
      },
      {
        "text": "A ball thrown upward returns to ground in 4s. Its maximum height is: (g=10 m/s²)",
        "options": ["10 m", "20 m", "40 m", "80 m"],
        "correctAnswer": 1,
        "explanation": "Time to reach max height = 2s. h = ut - ½gt² = 0 - ½(10)(2)² = 20 m"
      }, {
        "text": "The ratio of distances covered in 3rd and 5th seconds of free fall is:",
        "options": ["3:5", "5:9", "9:25", "1:1"],
        "correctAnswer": 1,
        "explanation": "Distance in nth second ∝ (2n-1). So ratio = (2×3-1):(2×5-1) = 5:9"
      },
      {
        "text": "A particle moves with v = 3t² - 6t. Its acceleration at t=2s is:",
        "options": ["0 m/s²", "6 m/s²", "12 m/s²", "18 m/s²"],
        "correctAnswer": 1,
        "explanation": "a = dv/dt = 6t - 6 → at t=2: a = 12-6 = 6 m/s²"
      },
      {
        "text": "Two trains of lengths 100m and 150m move at 20 m/s and 25 m/s respectively. Time to overtake is:",
        "options": ["10 s", "25 s", "50 s", "100 s"],
        "correctAnswer": 2,
        "explanation": "Relative speed = 5 m/s, Distance = 100+150 = 250m → Time = 250/5 = 50s"
      },
      {
        "text": "A stone is dropped from a cliff. Its velocity after 3s is: (g=10 m/s²)",
        "options": ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
        "correctAnswer": 2,
        "explanation": "v = u + gt = 0 + (10)(3) = 30 m/s"
      }
    ]
  },

  {
    course: "jee",
    subject: "Physics",
    chapter: "kinematics",
    quizNumber: 2,  // Unique number
    title: "Intermediate Kinematics",
    description: "Application of kinematic equations",
    duration: 20,
    questions: [
      {
        "text": "A particle moves along x-axis with x = 2t³ - 9t² + 12t. Its acceleration when velocity is zero is:",
        "options": ["-6 m/s²", "6 m/s²", "12 m/s²", "-12 m/s²"],
        "correctAnswer": 1,
        "explanation": "v = dx/dt = 6t²-18t+12 → set v=0 → t=1s or 2s. a = dv/dt = 12t-18 → at t=1: a=-6 m/s², at t=2: a=6 m/s²"
      },
      {
        "text": "A projectile has range R when launched at angle θ. If launched at (90°-θ) with same speed, its range will be:",
        "options": ["R", "R/2", "2R", "R²"],
        "correctAnswer": 0,
        "explanation": "Range is symmetric for complementary angles (θ and 90°-θ)"
      },
      {
        "text": "A car accelerates uniformly from rest to 20 m/s in 10s, then decelerates to rest in 5s. Total distance covered is:",
        "options": ["100 m", "150 m", "200 m", "250 m"],
        "correctAnswer": 3,
        "explanation": "Phase 1: s1 = ½(20)(10) = 100m; Phase 2: s2 = ½(20)(5) = 50m → Total = 150m"
      },
      {
        "text": "The velocity-time graph of a particle is a straight line with negative slope. This indicates:",
        "options": ["Uniform motion", "Uniform acceleration", "Uniform deceleration", "Zero acceleration"],
        "correctAnswer": 2,
        "explanation": "Negative slope in v-t graph shows uniform deceleration (negative acceleration)"
      },
      {
        "text": "A ball is thrown vertically upward with speed u. The time taken to return to ground is:",
        "options": ["u/g", "2u/g", "u²/2g", "√(2u/g)"],
        "correctAnswer": 1,
        "explanation": "Time of flight = 2 × (time to reach max height) = 2(u/g)"
      },
      {
        "text": "Two bodies are projected at angles θ and (90°-θ) with same speed. Their horizontal ranges are in ratio:",
        "options": ["1:1", "sinθ:cosθ", "tanθ:1", "1:tanθ"],
        "correctAnswer": 0,
        "explanation": "Ranges are equal for complementary projection angles"
      },
      {
        "text": "A particle moves along x-axis with velocity v = 3√x. Its acceleration when x=4m is:",
        "options": ["1.125 m/s²", "2.25 m/s²", "4.5 m/s²", "9 m/s²"],
        "correctAnswer": 1,
        "explanation": "a = v(dv/dx) = (3√x)(3/(2√x)) = 4.5 → at x=4: a=4.5/2=2.25 m/s²"
      },
      {
        "text": "A stone is dropped into a well. The splash is heard after 2s. Depth of well is: (g=10 m/s², speed of sound=330 m/s)",
        "options": ["10 m", "19.6 m", "20 m", "22.5 m"],
        "correctAnswer": 2,
        "explanation": "Solve quadratic equation: t₁ (fall) + t₂ (sound) = 2 → h ≈ 19.6m"
      },
      {
        "text": "A particle moves along a circle of radius 1m with v = 2t. Its angular acceleration at t=1s is:",
        "options": ["1 rad/s²", "2 rad/s²", "4 rad/s²", "8 rad/s²"],
        "correctAnswer": 1,
        "explanation": "aₜ = dv/dt = 2 m/s² → α = aₜ/r = 2/1 = 2 rad/s²"
      },
      {
        "text": "A projectile has maximum height equal to its horizontal range. The projection angle is:",
        "options": ["tan⁻¹(1)", "tan⁻¹(2)", "tan⁻¹(4)", "tan⁻¹(8)"],
        "correctAnswer": 2,
        "explanation": "Set H = R → (u²sin²θ/2g) = (u²sin2θ/g) → tanθ = 4"
      },
      {
        "text": "A police car chasing a thief accelerates to 36 km/h in 10s. The distance covered is:",
        "options": ["25 m", "50 m", "100 m", "200 m"],
        "correctAnswer": 1,
        "explanation": "v=10 m/s, u=0 → s = ½(v+u)t = ½(10)(10) = 50m"
      },
      {
        "text": "A particle moves along x-axis with a = -2x. When x=2m, its velocity is 4 m/s. Velocity at x=1m is:",
        "options": ["2√3 m/s", "2√5 m/s", "4√2 m/s", "6 m/s"],
        "correctAnswer": 1,
        "explanation": "Use v² = u² + 2∫a dx → v² = 16 + 2[-x²]₂¹ = 20 → v=2√5 m/s"
      },
      {
        "text": "A river flows at 5 m/s. A boat crosses the river (width 100m) perpendicular to flow with speed 10 m/s relative to water. Drift is:",
        "options": ["25 m", "50 m", "75 m", "100 m"],
        "correctAnswer": 1,
        "explanation": "Time to cross = 100/10 = 10s → Drift = 5×10 = 50m"
      },
      {
        "text": "A particle is projected at angle θ with horizontal. The ratio of maximum height to range is:",
        "options": ["tanθ", "½tanθ", "¼tanθ", "2tanθ"],
        "correctAnswer": 2,
        "explanation": "H/R = (u²sin²θ/2g)/(u²sin2θ/g) = tanθ/4"
      },
      {
        "text": "A car moving at 20 m/s brakes to stop in 40m. The retardation is:",
        "options": ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        "correctAnswer": 1,
        "explanation": "v²=u²+2as → 0=400+2a(40) → a=-5 m/s²"
      },
      {
        "text": "A particle moves with v = 3 + 2t. The distance in first 3s is:",
        "options": ["9 m", "12 m", "15 m", "18 m"],
        "correctAnswer": 3,
        "explanation": "x = ∫(3+2t)dt = 3t + t² → At t=3: x=9+9=18m"
      },
      {
        "text": "Two trains approach each other at 20 m/s and 30 m/s. When they are 1 km apart, brakes are applied giving equal retardation. Minimum retardation to avoid collision is:",
        "options": ["0.5 m/s²", "1 m/s²", "1.25 m/s²", "2.5 m/s²"],
        "correctAnswer": 2,
        "explanation": "Relative speed=50 m/s. v²=u²+2as → 0=2500+2a(1000) → a=-1.25 m/s²"
      },
      {
        "text": "A particle moves along a semicircle of radius R in time t. Its average velocity is:",
        "options": ["πR/t", "2R/t", "2πR/t", "0"],
        "correctAnswer": 1,
        "explanation": "Displacement = diameter = 2R → Avg velocity = displacement/time = 2R/t"
      },
      {
        "text": "A ball is dropped from height h. It rebounds to 0.8h. The total distance covered when it comes to rest is:",
        "options": ["4h", "5h", "9h", "∞"],
        "correctAnswer": 2,
        "explanation": "Total distance = h + 2(0.8h + 0.8²h + ...) = h + 2(0.8h/(1-0.8)) = 9h"
      },
      {
        "text": "A particle moves with x = t³ - 6t² + 9t. Its acceleration is positive when:",
        "options": ["t < 1", "t > 2", "1 < t < 3", "t > 3"],
        "correctAnswer": 1,
        "explanation": "a = 6t - 12 > 0 → t > 2"
      }  
    ]
  },

  {
    course: "jee",
    subject: "Physics",
    chapter: "kinematics",
    quizNumber: 3,  // Unique number
    title: "Advanced Kinematics (Hard)",
    description: "Challenging JEE-level kinematics problems", 
    duration: 30,
    questions: [
      {
        "text": "A particle moves along x-axis with a = -ω²x. Its time period is:",
        "options": ["2π/ω", "π/ω", "ω/2π", "1/ω"],
        "correctAnswer": 0,
        "explanation": "This is SHM equation with T = 2π/ω"
      },
      {
        "text": "A projectile has range R on horizontal surface. On an inclined plane (angle β), its range becomes R/cosβ. The projection angle is:",
        "options": ["π/4 - β/2", "π/4 + β/2", "π/2 - β", "π/2 + β"],
        "correctAnswer": 0,
        "explanation": "For inclined plane range formula, the optimal angle is θ = π/4 - β/2"
      },
      {
        "text": "A particle moves along curve y = x³/3. When x=2m, x-component of velocity is 3 m/s. The speed at this instant is:",
        "options": ["3 m/s", "5 m/s", "√45 m/s", "15 m/s"],
        "correctAnswer": 2,
        "explanation": "dy/dt = x²(dx/dt) → at x=2: dy/dt=4×3=12 → speed=√(3²+12²)=√153=3√17 m/s"
      },
      {
        "text": "A river flows at 3 m/s. A swimmer crosses with velocity 5 m/s relative to water, perpendicular to flow. The width is 100m. Downstream drift is:",
        "options": ["50 m", "60 m", "75 m", "100 m"],
        "correctAnswer": 1,
        "explanation": "Time to cross = 100/5 = 20s → Drift = 3×20 = 60m"
      },
      {
        "text": "A particle moves in xy-plane with r = tî + (t²)ĵ. The angle between velocity and acceleration at t=1s is:",
        "options": ["0°", "30°", "45°", "90°"],
        "correctAnswer": 2,
        "explanation": "v = î + 2tĵ, a = 2ĵ → at t=1: v=î+2ĵ, a=2ĵ → θ=tan⁻¹(1/2)/tan⁻¹(∞)=45°"
      },
      {
        "text": "A ball is thrown upward from a moving train (speed 20 m/s) with speed 10 m/s relative to train. The maximum height reached is: (g=10 m/s²)",
        "options": ["5 m", "10 m", "15 m", "20 m"],
        "correctAnswer": 0,
        "explanation": "Vertical component only determines max height: h = (10)²/(2×10) = 5m"
      },
      {
        "text": "A particle moves along parabola y²=4x. When x=1m, x-component of velocity is 2 m/s. The acceleration at this point is:",
        "options": ["0", "2 m/s²", "4 m/s²", "8 m/s²"],
        "correctAnswer": 3,
        "explanation": "Differentiate twice: 2y(dy/dt)=4(dx/dt), then again → a_y = 2(dx/dt)²/y³ → at x=1,y=2: a=8 m/s²"
      },
      {
        "text": "A projectile is fired from ground at angle θ with speed u. The radius of curvature at highest point is:",
        "options": ["u²cos²θ/g", "u²/g", "u²sin²θ/g", "u²sin2θ/g"],
        "correctAnswer": 0,
        "explanation": "At peak: aₙ = g = v²/R → R = (ucosθ)²/g"
      },
      {
        "text": "A particle moves with v = k/x. Its acceleration varies as:",
        "options": ["1/x", "1/x²", "1/x³", "x"],
        "correctAnswer": 2,
        "explanation": "a = v(dv/dx) = (k/x)(-k/x²) = -k²/x³ → ∝ 1/x³"
      },
      {
        "text": "A rod of length L slides against perpendicular walls. When angle θ=30°, the velocity of end A is v. Velocity of end B is:",
        "options": ["v", "v/√3", "v√3", "2v"],
        "correctAnswer": 2,
        "explanation": "Using constraint relation: v_A/cosθ = v_B/sinθ → v_B = v√3"
      },
      {
        "text": "A particle is projected at angle α from incline (angle β). The range is maximum when:",
        "options": ["α = π/4", "α = π/4 - β/2", "α = π/4 + β/2", "α = β"],
        "correctAnswer": 1,
        "explanation": "For maximum range on incline: α = π/4 - β/2"
      },
      {
        "text": "A particle moves along x-axis with v = 3t² - 12t + 9. The time when it reverses direction is:",
        "options": ["1s only", "3s only", "Both 1s and 3s", "Never"],
        "correctAnswer": 0,
        "explanation": "Set v=0 → t=1s (direction change) and t=3s (returns to origin)"
      },
      {
        "text": "A river flows at 4 m/s. A boat crosses with resultant velocity 5 m/s perpendicular to flow. Boat's speed relative to water is:",
        "options": ["3 m/s", "4 m/s", "5 m/s", "√41 m/s"],
        "correctAnswer": 0,
        "explanation": "Using Pythagoras: v_boat² = 5² + 4² → v_boat = 3 m/s (relative to water)"
      },
      {
        "text": "A particle moves along curve r = (t³)î + (t²)ĵ. The angle between r and a at t=1s is:",
        "options": ["tan⁻¹(1/3)", "tan⁻¹(3/2)", "tan⁻¹(2)", "90°"],
        "correctAnswer": 1,
        "explanation": "At t=1: r=î+ĵ, v=3î+2ĵ, a=6î+2ĵ → θ=tan⁻¹(3/2)"
      },
      {
        "text": "A projectile's range is 4√3 times its maximum height. The projection angle is:",
        "options": ["30°", "45°", "60°", "75°"],
        "correctAnswer": 0,
        "explanation": "Given R = 4√3H → tanθ = 1/√3 → θ=30°"
      },
      {
        "text": "A particle moves in plane with r = a(1+cosθ). When θ=π/2, its radial acceleration is:",
        "options": ["0", "aω²", "2aω²", "aω²/2"],
        "correctAnswer": 2,
        "explanation": "Radial acceleration a_r = rω² → at θ=π/2: r=2a → a_r=2aω²"
      },
      {
        "text": "A particle is projected from ground at angle θ. The ratio of radius of curvature at t=0 to t=T/2 (T=time of flight) is:",
        "options": ["1", "cosθ", "secθ", "sec³θ"],
        "correctAnswer": 3,
        "explanation": "R₀ = u²/gcosθ, R_{T/2} = (ucosθ)²/g → Ratio = sec³θ"
      },
      {
        "text": "A particle moves along x-axis with a = -kx. Its velocity when x=A is:",
        "options": ["kA", "A√k", "A√(k/2)", "0"],
        "correctAnswer": 1,
        "explanation": "Using energy: ½kx² = ½mv² → v = A√k (assuming m=1)"
      },
      {
        "text": "A rod AB of length L slides with ends on axes. When end A is at (a,0), velocity of B is:",
        "options": ["(a/L)v_A", "(L/a)v_A", "√(L²-a²)v_A/a", "av_A/√(L²-a²)"],
        "correctAnswer": 3,
        "explanation": "Using constraint relation: v_B = (a/y)v_A where y=√(L²-a²)"
      },
      {
        "text": "A particle moves along parabola x = y² with constant speed v. Its acceleration at (1,1) is:",
        "options": ["0", "v²/2", "v²/√2", "v²/2√2"],
        "correctAnswer": 3,
        "explanation": "a = v²/R where R is radius of curvature = 2√2 → a = v²/2√2"
      }
    ]
  }
];

const seedDB = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    });
    console.log("Connected to MongoDB");

    // 2. Process each quiz
    let successCount = 0;
    for (const quiz of allQuizzes) {
      try {
        // Check if quiz exists
        const existing = await Quiz.findOne({ quizNumber: quiz.quizNumber });
        
        if (existing) {
          // Update existing quiz
          await Quiz.updateOne(
            { quizNumber: quiz.quizNumber },
            { $set: quiz }
          );
          console.log(`↻ Updated quiz #${quiz.quizNumber} (${quiz.title})`);
        } else {
          // Create new quiz
          await Quiz.create(quiz);
          console.log(`✓ Added new quiz #${quiz.quizNumber} (${quiz.title})`);
        }
        successCount++;
      } catch (err) {
        console.error(`✖ Failed to process quiz #${quiz.quizNumber}:`, err.message);
      }
    }

    // 3. Final report
    console.log(`\nSeeding complete. Successfully processed ${successCount}/${allQuizzes.length} quizzes`);
    console.log("Total quizzes in DB:", await Quiz.countDocuments());

  } catch (err) {
    console.error("Seeding failed:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

// Run with error handling
seedDB().catch(err => console.error("Fatal error:", err));