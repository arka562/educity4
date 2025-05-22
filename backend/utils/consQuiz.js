import mongoose from "mongoose";
import Quiz from "../models/Quiz.model.js";

const mongoURI = "mongodb+srv://arka792002:arka5678@cluster0.l5hsp.mongodb.net/test";

const allQuizzes = [
  // ========== EASY QUIZ (Constitution Basics) ==========
  {
    course: "upsc",
    subject: "Polity",
    chapter: "constitution",
    quizNumber: 1,
    title: "Constitution Basics (Easy)",
    description: "Fundamental concepts of Indian Constitution",
    duration: 15,
    questions: [
      {
        "text": "When was the Indian Constitution adopted?",
        "options": ["15 August 1947", "26 January 1950", "26 November 1949", "9 December 1946"],
        "correctAnswer": 2,
        "explanation": "The Constitution was adopted on 26 November 1949 and came into force on 26 January 1950"
      },
      {
        "text": "Who was the Chairman of the Drafting Committee?",
        "options": ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Dr. Rajendra Prasad", "Sardar Patel"],
        "correctAnswer": 1,
        "explanation": "Dr. B.R. Ambedkar is recognized as the Chief Architect of the Indian Constitution"
      },
      {
        "text": "How many Articles were there in the original Constitution?",
        "options": ["395", "448", "470", "500"],
        "correctAnswer": 0,
        "explanation": "The original Constitution had 395 Articles in 22 Parts"
      },
      {
        "text": "Which part contains Fundamental Rights?",
        "options": ["Part I", "Part III", "Part IV", "Part II"],
        "correctAnswer": 1,
        "explanation": "Part III (Articles 12-35) contains the Fundamental Rights"
      },
      {
        "text": "The Preamble declares India as:",
        "options": ["Federal, Democratic, Republic", "Sovereign, Socialist, Secular, Democratic, Republic", "Socialist, Federal, Secular", "None of these"],
        "correctAnswer": 1,
        "explanation": "The Preamble was amended in 1976 to add Socialist, Secular, and Integrity"
      },
      {
        "text": "Fundamental Duties were added by which amendment?",
        "options": ["24th", "42nd", "44th", "73rd"],
        "correctAnswer": 1,
        "explanation": "42nd Amendment (1976) added Fundamental Duties under Article 51A"
      },
      {
        "text": "Which schedule divides powers between Centre and States?",
        "options": ["5th", "7th", "9th", "10th"],
        "correctAnswer": 1,
        "explanation": "7th Schedule contains Union, State and Concurrent Lists"
      },
      {
        "text": "Article 21 protects:",
        "options": ["Right to Equality", "Right to Life and Personal Liberty", "Right against Exploitation", "Right to Religion"],
        "correctAnswer": 1,
        "explanation": "Article 21 has been expanded to include various rights like privacy, health, etc."
      },
      {
        "text": "The concept of Directive Principles is borrowed from:",
        "options": ["USA", "Ireland", "UK", "Canada"],
        "correctAnswer": 1,
        "explanation": "DPSP (Part IV) were inspired by the Irish Constitution"
      },
      {
        "text": "Who can amend the Constitution?",
        "options": ["President", "Parliament", "Supreme Court", "Prime Minister"],
        "correctAnswer": 1,
        "explanation": "Article 368 gives Parliament the power to amend the Constitution"
      },
      {
        "text": "The word 'Secular' was added to Preamble in:",
        "options": ["1950", "1976", "1985", "1991"],
        "correctAnswer": 1,
        "explanation": "Added by the 42nd Amendment during Emergency"
      },
      {
        "text": "Right to Education is under:",
        "options": ["Article 21", "Article 21A", "Article 22", "Article 19"],
        "correctAnswer": 1,
        "explanation": "Article 21A was added by 86th Amendment (2002)"
      },
      {
        "text": "Which is NOT a Fundamental Right?",
        "options": ["Right to Equality", "Right to Property", "Right to Constitutional Remedies", "Right against Exploitation"],
        "correctAnswer": 1,
        "explanation": "Right to Property was moved to Article 300A (Legal Right) by 44th Amendment"
      },
      {
        "text": "The Constitution was enforced on:",
        "options": ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1950"],
        "correctAnswer": 0,
        "explanation": "Chosen to commemorate the 1930 Purna Swaraj Declaration"
      },
      {
        "text": "Which Article abolishes untouchability?",
        "options": ["Article 14", "Article 15", "Article 16", "Article 17"],
        "correctAnswer": 3,
        "explanation": "Article 17 abolishes untouchability and its practice in any form"
      }
    ]
  },

  // ========== INTERMEDIATE QUIZ (Application) ==========
  {
    course: "upsc",
    subject: "Polity",
    chapter: "constitution",
    quizNumber: 2,
    title: "Constitution Application (Intermediate)",
    description: "Application of constitutional principles",
    duration: 20,
    questions: [
      {
        "text": "Which case established the Basic Structure Doctrine?",
        "options": ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Maneka Gandhi Case"],
        "correctAnswer": 1,
        "explanation": "Kesavananda Bharati (1973) case laid down that Parliament cannot alter the basic structure"
      },
      {
        "text": "A Money Bill is defined under:",
        "options": ["Article 110", "Article 112", "Article 368", "Article 356"],
        "correctAnswer": 0,
        "explanation": "Article 110 defines what constitutes a Money Bill"
      },
      {
        "text": "Which amendment reduced voting age from 21 to 18?",
        "options": ["42nd", "44th", "61st", "73rd"],
        "correctAnswer": 2,
        "explanation": "61st Amendment (1988) lowered voting age to encourage youth participation"
      },
      {
        "text": "The 'Golden Triangle' of Constitution refers to:",
        "options": ["Articles 14, 19, and 21", "Articles 32, 226, and 136", "Articles 368, 13, and 12", "Articles 52, 74, and 75"],
        "correctAnswer": 0,
        "explanation": "These articles form the core of Fundamental Rights jurisprudence"
      },
      {
        "text": "Which writ is issued to compel authority to perform its duty?",
        "options": ["Habeas Corpus", "Mandamus", "Certiorari", "Quo Warranto"],
        "correctAnswer": 1,
        "explanation": "Mandamus ('we command') directs public officials to perform legal duties"
      },
      {
        "text": "Which Article deals with President's rule in States?",
        "options": ["Article 352", "Article 356", "Article 360", "Article 368"],
        "correctAnswer": 1,
        "explanation": "Article 356 allows Central government to take over state administration"
      },
      {
        "text": "The 'Due Process of Law' concept was introduced in:",
        "options": ["A.K. Gopalan Case", "Maneka Gandhi Case", "Kesavananda Bharati Case", "Minerva Mills Case"],
        "correctAnswer": 1,
        "explanation": "Maneka Gandhi (1978) expanded Article 21 to include due process"
      },
      {
        "text": "Which is NOT a feature of Indian Federalism?",
        "options": ["Written Constitution", "Independent Judiciary", "Dual Citizenship", "Bicameral Legislature"],
        "correctAnswer": 2,
        "explanation": "India follows single citizenship unlike federal states like USA"
      },
      {
        "text": "The 42nd Amendment is called:",
        "options": ["Mini Constitution", "Socialist Amendment", "Fundamental Rights Amendment", "Federal Amendment"],
        "correctAnswer": 0,
        "explanation": "It made sweeping changes including adding Fundamental Duties"
      },
      {
        "text": "Which Article provides for Uniform Civil Code?",
        "options": ["Article 40", "Article 44", "Article 48", "Article 51A"],
        "correctAnswer": 1,
        "explanation": "Article 44 is a DPSP advocating uniform civil laws"
      },
      {
        "text": "The first Constitutional Amendment added:",
        "options": ["Ninth Schedule", "Tenth Schedule", "Fundamental Duties", "Right to Property"],
        "correctAnswer": 0,
        "explanation": "Added in 1951 to protect land reform laws from judicial review"
      },
      {
        "text": "Which case struck down NJAC?",
        "options": ["Supreme Court Advocates-on-Record Case", "S.P. Gupta Case", "Fourth Judges Case", "None of these"],
        "correctAnswer": 2,
        "explanation": "Fourth Judges Case (2015) declared NJAC unconstitutional"
      },
      {
        "text": "The 'Doctrine of Eclipse' applies to:",
        "options": ["Pre-Constitutional Laws", "Post-Constitutional Laws", "Constitutional Amendments", "Ordinances"],
        "correctAnswer": 0,
        "explanation": "Pre-constitutional laws inconsistent with FRs become dormant"
      },
      {
        "text": "Which Article deals with abolition of titles?",
        "options": ["Article 14", "Article 17", "Article 18", "Article 19"],
        "correctAnswer": 2,
        "explanation": "Article 18 prohibits state conferring titles except military/academic"
      },
      {
        "text": "The 'Harmonious Construction' principle is used in:",
        "options": ["Fundamental Rights vs DPSP", "Centre-State Relations", "Legislative vs Executive conflicts", "All of the above"],
        "correctAnswer": 3,
        "explanation": "Courts use this to reconcile apparently conflicting provisions"
      }
    ]
  },

  // ========== HARD QUIZ (Advanced Concepts) ==========
  {
    course: "upsc",
    subject: "Indian Polity",
    chapter: "constitution",
    quizNumber: 3,
    title: "Constitution Advanced (Hard)",
    description: "Advanced constitutional concepts and doctrines",
    duration: 30,
    questions: [
      {
        "text": "The 'Doctrine of Severability' was established in:",
        "options": ["Romesh Thappar Case", "A.K. Gopalan Case", "Champakam Dorairajan Case", "Shankari Prasad Case"],
        "correctAnswer": 0,
        "explanation": "Romesh Thappar (1950) held that only unconstitutional parts of law will be void"
      },
      {
        "text": "Which Article was called 'Political Horoscope' by B.R. Ambedkar?",
        "options": ["Article 32", "Article 356", "Article 368", "Article 370"],
        "correctAnswer": 1,
        "explanation": "He warned Article 356 (President's Rule) could be misused"
      },
      {
        "text": "The 'Doctrine of Pith and Substance' relates to:",
        "options": ["Legislative Competence", "Judicial Review", "Basic Structure", "Federalism"],
        "correctAnswer": 0,
        "explanation": "Determines whether a law substantially falls within legislature's jurisdiction"
      },
      {
        "text": "Which case introduced the 'Width Test' for Constitutional Amendments?",
        "options": ["Waman Rao Case", "Minerva Mills Case", "I.R. Coelho Case", "None of these"],
        "correctAnswer": 1,
        "explanation": "Minerva Mills examined whether amendment's effect destroys basic structure"
      },
      {
        "text": "The 'Doctrine of Incidental or Ancillary Powers' is applied in:",
        "options": ["Seventh Schedule disputes", "Money Bill classification", "Judicial Appointments", "Emergency provisions"],
        "correctAnswer": 0,
        "explanation": "Allows legislatures to make laws incidental to their main subjects"
      },
      {
        "text": "Which Article was amended to implement GST?",
        "options": ["268A", "269A", "279A", "All of the above"],
        "correctAnswer": 3,
        "explanation": "101st Amendment introduced all these articles for GST framework"
      },
      {
        "text": "The 'Doctrine of Colorable Legislation' prevents:",
        "options": ["Indirect violation of Constitutional limits", "Judicial overreach", "Executive misuse of power", "All of the above"],
        "correctAnswer": 0,
        "explanation": "If legislature lacks competence, it cannot do indirectly what it can't do directly"
      },
      {
        "text": "Which case held that 'Constitution is a living tree'?",
        "options": ["Kesavananda Bharati", "Maneka Gandhi", "S.R. Bommai", "None of these"],
        "correctAnswer": 1,
        "explanation": "Maneka Gandhi case adopted this Canadian principle for dynamic interpretation"
      },
      {
        "text": "The 'Doctrine of Repugnancy' is mentioned in:",
        "options": ["Article 245", "Article 254", "Article 263", "Article 256"],
        "correctAnswer": 1,
        "explanation": "Article 254 deals with inconsistency between Union and State laws"
      },
      {
        "text": "Which amendment added the Anti-Defection Law?",
        "options": ["42nd", "44th", "52nd", "61st"],
        "correctAnswer": 2,
        "explanation": "52nd Amendment (1985) added Tenth Schedule"
      },
      {
        "text": "The 'Doctrine of Prospective Overruling' was first used in:",
        "options": ["Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "None of these"],
        "correctAnswer": 0,
        "explanation": "Golaknath (1967) held amendments violating FRs would apply prospectively"
      },
      {
        "text": "Which Article was the basis for the NJAC Act?",
        "options": ["Article 124", "Article 124A", "Article 217", "Article 222"],
        "correctAnswer": 1,
        "explanation": "99th Amendment inserted Article 124A for National Judicial Appointments Commission"
      },
      {
        "text": "The 'Doctrine of Basic Structure' was expanded in:",
        "options": ["Indira Gandhi vs Raj Narain", "Minerva Mills Case", "Both", "None"],
        "correctAnswer": 2,
        "explanation": "Both cases added new elements to basic structure doctrine"
      },
      {
        "text": "Which case introduced the 'Essential Features Test'?",
        "options": ["Waman Rao Case", "I.R. Coelho Case", "Both", "None"],
        "correctAnswer": 1,
        "explanation": "I.R. Coelho (2007) held laws in Ninth Schedule must pass basic structure test"
      },
      {
        "text": "The 'Doctrine of Harmonious Construction' was critically applied in:",
        "options": ["Fundamental Rights vs DPSP conflicts", "Legislative Lists overlap", "Both", "None"],
        "correctAnswer": 2,
        "explanation": "Used to reconcile both types of constitutional conflicts"
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
        const existing = await Quiz.findOne({ 
          course: quiz.course,
          subject: quiz.subject,
          chapter: quiz.chapter,
          quizNumber: quiz.quizNumber 
        });
        
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