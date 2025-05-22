import mongoose from "mongoose";
import Quiz from "../models/Quiz.model.js";

const mongoURI = "mongodb+srv://arka792002:arka5678@cluster0.l5hsp.mongodb.net/test";

const allQuizzes = [
  // ========== EASY QUIZ (Parliament Basics) ==========
  {
    course: "upsc",
    subject: "Indian Polity",
    chapter: "parliament",
    quizNumber: 1,
    title: "Parliament Basics (Easy)",
    description: "Fundamental concepts of Indian Parliament",
    duration: 15,
    questions: [
      {
        "text": "The Indian Parliament consists of:",
        "options": ["President + Lok Sabha", "President + Rajya Sabha", "President + Lok Sabha + Rajya Sabha", "Lok Sabha + Rajya Sabha"],
        "correctAnswer": 2,
        "explanation": "Article 79 states Parliament consists of President and two Houses"
      },
      {
        "text": "Maximum strength of Lok Sabha is:",
        "options": ["545", "550", "552", "555"],
        "correctAnswer": 2,
        "explanation": "530 from states, 20 from UTs, and 2 nominated Anglo-Indians (though Anglo-Indian nomination was abolished in 2020)"
      },
      {
        "text": "Who presides over Lok Sabha?",
        "options": ["President", "Vice President", "Speaker", "Prime Minister"],
        "correctAnswer": 2,
        "explanation": "Speaker is the presiding officer of Lok Sabha"
      },
      {
        "text": "Money Bills can be introduced only in:",
        "options": ["Lok Sabha", "Rajya Sabha", "Either House", "Joint Sitting"],
        "correctAnswer": 0,
        "explanation": "Article 110 mandates Money Bills originate only in Lok Sabha"
      },
      {
        "text": "The tenure of Lok Sabha is:",
        "options": ["4 years", "5 years", "6 years", "Not fixed"],
        "correctAnswer": 1,
        "explanation": "Normal term is 5 years unless dissolved earlier"
      },
      {
        "text": "Rajya Sabha is a:",
        "options": ["Permanent body", "Temporary body", "Advisory body", "Subsidiary body"],
        "correctAnswer": 0,
        "explanation": "It's a permanent body with 1/3 members retiring every 2 years"
      },
      {
        "text": "Minimum age for Lok Sabha membership is:",
        "options": ["21 years", "25 years", "30 years", "35 years"],
        "correctAnswer": 1,
        "explanation": "Article 84 prescribes minimum 25 years for Lok Sabha"
      },
      {
        "text": "Who nominates members to Rajya Sabha?",
        "options": ["President", "Prime Minister", "Speaker", "Vice President"],
        "correctAnswer": 0,
        "explanation": "President nominates 12 members from literature, science, art and social service"
      },
      {
        "text": "The Budget is presented under:",
        "options": ["Article 110", "Article 112", "Article 356", "Article 360"],
        "correctAnswer": 1,
        "explanation": "Article 112 deals with Annual Financial Statement (Budget)"
      },
      {
        "text": "No-confidence motion can be moved only in:",
        "options": ["Lok Sabha", "Rajya Sabha", "Either House", "Joint Sitting"],
        "correctAnswer": 0,
        "explanation": "Only Lok Sabha can test government's majority through no-confidence motion"
      },
      {
        "text": "Joint sitting of Parliament is presided by:",
        "options": ["President", "Vice President", "Speaker", "Prime Minister"],
        "correctAnswer": 2,
        "explanation": "Speaker presides over joint sittings (Article 118)"
      },
      {
        "text": "Which House is called 'House of Elders'?",
        "options": ["Lok Sabha", "Rajya Sabha", "Both", "None"],
        "correctAnswer": 1,
        "explanation": "Rajya Sabha represents states and has more experienced members"
      },
      {
        "text": "Question Hour is conducted:",
        "options": ["First hour of sitting", "Last hour of sitting", "During lunch break", "At Speaker's discretion"],
        "correctAnswer": 0,
        "explanation": "First hour is reserved for questions to ministers"
      },
      {
        "text": "Who is the ex-officio Chairman of Rajya Sabha?",
        "options": ["President", "Prime Minister", "Vice President", "Speaker"],
        "correctAnswer": 2,
        "explanation": "Vice President is the ex-officio Chairman (Article 64)"
      },
      {
        "text": "Minimum number of Lok Sabha sessions in a year is:",
        "options": ["1", "2", "3", "4"],
        "correctAnswer": 2,
        "explanation": "Constitution mandates at least 3 sessions: Budget, Monsoon and Winter"
      }
    ]
  },

  // ========== INTERMEDIATE QUIZ (Parliamentary Procedures) ==========
  {
    course: "upsc",
    subject: "Indian Polity",
    chapter: "parliament",
    quizNumber: 2,
    title: "Parliamentary Procedures (Intermediate)",
    description: "Detailed parliamentary processes and functions",
    duration: 20,
    questions: [
      {
        "text": "A bill becomes an Act after:",
        "options": ["Passed by both Houses", "President's assent", "Gazette notification", "All of the above"],
        "correctAnswer": 3,
        "explanation": "All steps are necessary for a bill to become law"
      },
      {
        "text": "Which motion can adjourn normal business to discuss urgent matter?",
        "options": ["No-confidence motion", "Adjournment motion", "Censure motion", "Privilege motion"],
        "correctAnswer": 1,
        "explanation": "Adjournment motion sets aside normal business for urgent discussion"
      },
      {
        "text": "The 'Guillotine' is used in relation to:",
        "options": ["Budget discussion", "No-confidence motion", "Impeachment", "Question Hour"],
        "correctAnswer": 0,
        "explanation": "It's used to approve demands without discussion when time is limited"
      },
      {
        "text": "Which committee examines CAG reports?",
        "options": ["Estimates Committee", "Public Accounts Committee", "Business Advisory Committee", "Rules Committee"],
        "correctAnswer": 1,
        "explanation": "PAC examines CAG reports to ensure proper use of public funds"
      },
      {
        "text": "Who decides whether a bill is Money Bill?",
        "options": ["President", "Speaker", "Prime Minister", "Finance Minister"],
        "correctAnswer": 1,
        "explanation": "Speaker's decision is final on whether a bill is Money Bill"
      },
      {
        "text": "Which Article provides for joint sitting of Parliament?",
        "options": ["Article 108", "Article 110", "Article 112", "Article 123"],
        "correctAnswer": 0,
        "explanation": "Article 108 provides mechanism for joint sitting to resolve deadlocks"
      },
      {
        "text": "The 'Zero Hour' refers to:",
        "options": ["Time after Question Hour", "Time before Question Hour", "Midnight session", "First hour of Parliament"],
        "correctAnswer": 0,
        "explanation": "It's the time immediately following Question Hour for raising important matters"
      },
      {
        "text": "Which is NOT a financial committee of Parliament?",
        "options": ["PAC", "Estimates Committee", "Committee on Public Undertakings", "Business Advisory Committee"],
        "correctAnswer": 3,
        "explanation": "Business Advisory Committee allocates time for bills, not financial matters"
      },
      {
        "text": "The 'Kangaroo Closure' refers to:",
        "options": ["Selective discussion of clauses", "Complete rejection of bill", "Sending bill to committee", "None of these"],
        "correctAnswer": 0,
        "explanation": "Only important clauses are discussed while others are 'jumped over'"
      },
      {
        "text": "Which House has more power in Money Bills?",
        "options": ["Lok Sabha", "Rajya Sabha", "Both equal", "Depends on situation"],
        "correctAnswer": 0,
        "explanation": "Lok Sabha has supremacy as Rajya Sabha can only suggest amendments"
      },
      {
        "text": "The 'Committee on Absence of Members' belongs to:",
        "options": ["Lok Sabha only", "Rajya Sabha only", "Both Houses", "Neither House"],
        "correctAnswer": 0,
        "explanation": "It's a special committee of Lok Sabha to examine unauthorized absences"
      },
      {
        "text": "Which motion can remove the Speaker?",
        "options": ["No-confidence motion", "Censure motion", "Motion of Thanks", "None of these"],
        "correctAnswer": 3,
        "explanation": "Speaker can only be removed by resolution passed by majority of members"
      },
      {
        "text": "The 'Shadow Cabinet' system is followed in:",
        "options": ["India", "UK", "USA", "France"],
        "correctAnswer": 1,
        "explanation": "British system where opposition forms alternative cabinet (not in India)"
      },
      {
        "text": "Which is NOT a privilege of Parliament?",
        "options": ["Freedom of speech", "Right to publish debates", "Right to exclude strangers", "Right to punish members for contempt"],
        "correctAnswer": 1,
        "explanation": "Publication of debates is subject to Speaker's permission"
      },
      {
        "text": "The 'Point of Order' relates to:",
        "options": ["Violation of parliamentary procedure", "Asking factual question", "Introducing new bill", "None of these"],
        "correctAnswer": 0,
        "explanation": "It's raised when procedure is violated and doesn't require debate"
      }
    ]
  },

  // ========== HARD QUIZ (Advanced Parliamentary Concepts) ==========
  {
    course: "upsc",
    subject: "Indian Polity",
    chapter: "parliament",
    quizNumber: 3,
    title: "Advanced Parliamentary Concepts (Hard)",
    description: "Complex parliamentary doctrines and case laws",
    duration: 30,
    questions: [
      {
        "text": "The 'Doctrine of Collective Responsibility' is enshrined in:",
        "options": ["Article 74", "Article 75", "Article 76", "Article 77"],
        "correctAnswer": 1,
        "explanation": "Article 75(3) makes ministers collectively responsible to Lok Sabha"
      },
      {
        "text": "Which case established Parliament's power to amend Constitution?",
        "options": ["Shankari Prasad Case", "Golaknath Case", "Kesavananda Bharati Case", "Minerva Mills Case"],
        "correctAnswer": 0,
        "explanation": "Shankari Prasad (1951) first upheld Parliament's amending power under Article 368"
      },
      {
        "text": "The 'Lame Duck Session' refers to:",
        "options": ["Session after elections but before new govt forms", "Session before Parliament dissolves", "Session during emergency", "None of these"],
        "correctAnswer": 1,
        "explanation": "Session where outgoing members participate knowing they won't return"
      },
      {
        "text": "Which Article allows Parliament to legislate on State List?",
        "options": ["Article 249", "Article 250", "Article 252", "All of above"],
        "correctAnswer": 3,
        "explanation": "All these articles provide mechanisms for Parliament to legislate on State List"
      },
      {
        "text": "The 'Doctrine of Pith and Substance' was applied in which parliamentary context?",
        "options": ["Money Bill classification", "Legislative competence disputes", "Privilege motions", "None of these"],
        "correctAnswer": 0,
        "explanation": "Used to determine true nature of bill when challenged as incorrect classification"
      },
      {
        "text": "Which amendment introduced Anti-Defection Law?",
        "options": ["42nd", "44th", "52nd", "61st"],
        "correctAnswer": 2,
        "explanation": "52nd Amendment (1985) added Tenth Schedule to prevent defections"
      },
      {
        "text": "The 'Doctrine of Incidental or Ancillary Powers' helps Parliament in:",
        "options": ["Making laws on related matters", "Amending Constitution", "Controlling state legislatures", "None of these"],
        "correctAnswer": 0,
        "explanation": "Allows Parliament to legislate on matters incidental to subjects in Union List"
      },
      {
        "text": "Which case upheld Speaker's decision on Money Bill classification?",
        "options": ["Raja Ram Pal Case", "Kihoto Hollohan Case", "Aadhaar Case", "None of these"],
        "correctAnswer": 2,
        "explanation": "Aadhaar Act case (2018) upheld Speaker's decision despite controversy"
      },
      {
        "text": "The 'Doctrine of Harmonious Construction' is used in parliamentary matters for:",
        "options": ["Resolving conflicts between Houses", "Interpreting legislative lists", "Both", "None"],
        "correctAnswer": 2,
        "explanation": "Used for both inter-house relations and legislative competence issues"
      },
      {
        "text": "Which Article was basis for National Judicial Appointments Commission?",
        "options": ["124A", "217", "222", "368"],
        "correctAnswer": 0,
        "explanation": "99th Amendment inserted Article 124A for NJAC (later struck down)"
      },
      {
        "text": "The 'Doctrine of Colorable Legislation' prevents Parliament from:",
        "options": ["Indirectly doing what it can't do directly", "Amending Constitution", "Overruling judicial decisions", "None of these"],
        "correctAnswer": 0,
        "explanation": "If Parliament lacks competence, it cannot achieve indirectly what it can't do directly"
      },
      {
        "text": "Which case held that parliamentary privileges are subject to FRs?",
        "options": ["Searchlight Case", "Gunupati Case", "Keshav Singh Case", "Raja Ram Pal Case"],
        "correctAnswer": 3,
        "explanation": "Raja Ram Pal (2007) held privileges must conform to Fundamental Rights"
      },
      {
        "text": "The 'Doctrine of Repugnancy' under Article 254 applies to:",
        "options": ["Conflict between Union and State laws", "Conflict between two State laws", "Conflict between two Union laws", "None of these"],
        "correctAnswer": 0,
        "explanation": "Resolves conflicts when both Union and State legislate on Concurrent List"
      },
      {
        "text": "Which parliamentary device was struck down in NJAC case?",
        "options": ["Money Bill route", "Ordinance route", "Constitutional Amendment", "None of these"],
        "correctAnswer": 2,
        "explanation": "99th Amendment creating NJAC was struck down for violating basic structure"
      },
      {
        "text": "The 'Doctrine of Prospective Overruling' was first used in which parliamentary context?",
        "options": ["Golaknath Case", "Kesavananda Case", "Minerva Mills Case", "None of these"],
        "correctAnswer": 0,
        "explanation": "Golaknath (1967) applied it to Parliament's amending power under Article 368"
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