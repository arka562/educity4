import React from "react";
import Latex from "react-latex";
import "katex/dist/katex.min.css";
import "./judiciary.css";

const Judiciary = () => {
  return (
    <div className="content-container">
      <h1 className="main-title">Indian Judiciary: Complete Guide for UPSC</h1>

      <p className="intro">
        The Indian Judiciary is the guardian of the Constitution and the final
        interpreter of laws. This comprehensive guide covers all aspects of the
        judicial system including its structure, functions, powers,
        constitutional provisions, and landmark judgments - essential for UPSC
        aspirants preparing for Indian Polity.
      </p>

      <div className="section">
        <h2>1. Introduction to Indian Judiciary</h2>

        <div className="subsection">
          <h3>1.1 Constitutional Provisions</h3>
          <ul>
            <li>
              <strong>Article 124</strong>: Establishment and constitution of
              Supreme Court
            </li>
            <li>
              <strong>Articles 214-231</strong>: High Courts
            </li>
            <li>
              <strong>Articles 233-237</strong>: Subordinate Courts
            </li>
            <li>
              <strong>Article 32</strong>: Right to Constitutional Remedies
            </li>
            <li>
              <strong>Article 142</strong>: Supreme Court's enforcement decrees
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>1.2 Features of Indian Judiciary</h3>
          <ul>
            <li>
              <strong>Integrated System</strong>: Single system with SC at apex
            </li>
            <li>
              <strong>Independent Judiciary</strong>: Protected by Constitution
            </li>
            <li>
              <strong>Judicial Review</strong>: Power to review
              legislative/executive actions
            </li>
            <li>
              <strong>Adversarial System</strong>: Follows common law tradition
            </li>
            <li>
              <strong>Public Interest Litigation</strong>: Unique Indian
              innovation
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>2. Structure of Indian Judiciary</h2>

        <div className="subsection">
          <h3>2.1 Supreme Court of India</h3>
          <div className="equation">
            <p>
              <Latex>
                {
                  "$\\text{Current strength} = 34 \\ (31 + 1 \\ CJI + 2 \\ ad-hoc)$"
                }
              </Latex>
            </p>
          </div>
          <ul>
            <li>
              <strong>Appointment</strong>: Collegium system (Articles 124, 217)
            </li>
            <li>
              <strong>Qualifications</strong>:
              <ul>
                <li>HC judge for 5 years or</li>
                <li>Advocate for 10 years or</li>
                <li>Distinguished jurist</li>
              </ul>
            </li>
            <li>
              <strong>Tenure</strong>: Till 65 years of age
            </li>
            <li>
              <strong>Removal</strong>: Impeachment (Article 124(4))
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>2.2 High Courts</h3>
          <ul>
            <li>
              <strong>25 High Courts</strong> (including common HCs)
            </li>
            <li>
              <strong>Appointment</strong>: Collegium + President
            </li>
            <li>
              <strong>Qualifications</strong>:
              <ul>
                <li>Judicial office for 10 years or</li>
                <li>Advocate for 10 years</li>
              </ul>
            </li>
            <li>
              <strong>Tenure</strong>: Till 62 years
            </li>
            <li>
              <strong>Writ Jurisdiction</strong>: Article 226 (wider than SC's
              Article 32)
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>2.3 Subordinate Judiciary</h3>
          <ul>
            <li>
              <strong>District Courts</strong>: Headed by District Judge
            </li>
            <li>
              <strong>Appointment</strong>: By Governor after consultation with
              HC
            </li>
            <li>
              <strong>Three-tier system</strong>:
              <ol>
                <li>District Courts</li>
                <li>Taluka Courts</li>
                <li>Village Courts/Nyaya Panchayats</li>
              </ol>
            </li>
            <li>
              <strong>Fast Track Courts</strong>: For speedy justice
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>3. Jurisdiction and Powers</h2>

        <div className="subsection">
          <h3>3.1 Supreme Court Jurisdiction</h3>
          <table className="judiciary-table">
            <thead>
              <tr>
                <th>Jurisdiction</th>
                <th>Description</th>
                <th>Article</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Original</td>
                <td>Disputes between Union-States or between States</td>
                <td>131</td>
              </tr>
              <tr>
                <td>Appellate</td>
                <td>
                  Appeals against HC judgments (civil/criminal/constitutional)
                </td>
                <td>132-134</td>
              </tr>
              <tr>
                <td>Advisory</td>
                <td>President can seek opinion on law/facts</td>
                <td>143</td>
              </tr>
              <tr>
                <td>Writ</td>
                <td>Enforcement of Fundamental Rights</td>
                <td>32</td>
              </tr>
              <tr>
                <td>Special Leave</td>
                <td>Discretionary power to grant special appeals</td>
                <td>136</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="subsection">
          <h3>3.2 High Court Jurisdiction</h3>
          <ul>
            <li>
              <strong>Original Jurisdiction</strong>: In some cases (company
              law, matrimonial)
            </li>
            <li>
              <strong>Appellate Jurisdiction</strong>: Over subordinate courts
            </li>
            <li>
              <strong>Supervisory Jurisdiction</strong>: Over all
              courts/tribunals in state
            </li>
            <li>
              <strong>Administrative Control</strong>: Over subordinate
              judiciary
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>3.3 Judicial Review</h3>
          <ul>
            <li>Power to examine constitutionality of laws</li>
            <li>
              Basis:{" "}
              <Latex>
                {"$\\text{Article 13 (Laws inconsistent with FRs void)}$"}
              </Latex>
            </li>
            <li>
              Scope extended in <strong>Kesavananda Bharati case</strong>
            </li>
            <li>Limitations: Cannot review political questions</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>4. Judicial Independence</h2>

        <div className="subsection">
          <h3>4.1 Constitutional Safeguards</h3>
          <ul>
            <li>
              <strong>Security of Tenure</strong>: Judges can't be removed
              except by impeachment
            </li>
            <li>
              <strong>Fixed Service Conditions</strong>: Can't be varied to
              disadvantage
            </li>
            <li>
              <strong>Charged Expenditure</strong>: Salaries charged on
              Consolidated Fund
            </li>
            <li>
              <strong>Contempt Power</strong>: To protect dignity
            </li>
            <li>
              <strong>Ban on Practice</strong>: After retirement
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>4.2 Appointment System</h3>
          <ul>
            <li>
              <strong>Collegium System</strong>:
              <ul>
                <li>For SC: CJI + 4 senior-most judges</li>
                <li>For HCs: CJI + 2 senior-most judges</li>
              </ul>
            </li>
            <li>
              <strong>Evolution</strong>:
              <ol>
                <li>First Judges Case (1981): Executive primacy</li>
                <li>Second Judges Case (1993): Collegium system born</li>
                <li>Third Judges Case (1998): Formalized collegium</li>
                <li>NJAC Case (2015): Struck down NJAC Act</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>5. Judicial Activism and PIL</h2>

        <div className="subsection">
          <h3>5.1 Public Interest Litigation</h3>
          <ul>
            <li>
              <strong>Concept</strong>: Relaxed locus standi rules
            </li>
            <li>
              <strong>Pioneered by</strong>: Justice P.N. Bhagwati
            </li>
            <li>
              <strong>Landmark Cases</strong>:
              <ul>
                <li>Hussainara Khatoon (1979): Speedy trial</li>
                <li>Vishaka (1997): Sexual harassment guidelines</li>
                <li>Right to Food case (2001): Mid-day meals</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>5.2 Judicial Activism</h3>
          <ul>
            <li>
              <strong>Definition</strong>: Proactive role beyond traditional
              adjudication
            </li>
            <li>
              <strong>Tools</strong>:
              <ul>
                <li>Writ jurisdiction expansion</li>
                <li>Contempt powers</li>
                <li>Suo moto cognizance</li>
              </ul>
            </li>
            <li>
              <strong>Criticism</strong>: Judicial overreach concerns
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>6. Landmark Judgments</h2>

        <div className="subsection">
          <h3>6.1 Basic Structure Doctrine</h3>
          <ul>
            <li>
              <strong>Kesavananda Bharati (1973)</strong>: Parliament can't
              amend basic structure
            </li>
            <li>
              <strong>Elements of Basic Structure</strong>:
              <ul>
                <li>Supremacy of Constitution</li>
                <li>Rule of law</li>
                <li>Judicial review</li>
                <li>Federalism</li>
                <li>Secularism</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>6.2 Fundamental Rights Cases</h3>
          <table className="judiciary-table">
            <thead>
              <tr>
                <th>Case</th>
                <th>Significance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maneka Gandhi (1978)</td>
                <td>Expanded Article 21 to include due process</td>
              </tr>
              <tr>
                <td>Golaknath (1967)</td>
                <td>FRs can't be amended (overruled later)</td>
              </tr>
              <tr>
                <td>Minerva Mills (1980)</td>
                <td>Balance between FRs and DPSP</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="subsection">
          <h3>6.3 Recent Important Judgments</h3>
          <ul>
            <li>
              <strong>Right to Privacy (2017)</strong>: Fundamental right under
              Article 21
            </li>
            <li>
              <strong>Adultery Decriminalized (2018)</strong>: Joseph Shine case
            </li>
            <li>
              <strong>Sabrimala Entry (2018)</strong>: Allowed women's entry
            </li>
            <li>
              <strong>Ayodhya Verdict (2019)</strong>: Ram Janmabhoomi case
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>7. Judicial Reforms</h2>

        <div className="subsection">
          <h3>7.1 Current Challenges</h3>
          <ul>
            <li>
              <strong>Case Pendency</strong>: Over 4 crore cases pending
            </li>
            <li>
              <strong>Vacancies</strong>: Nearly 40% posts vacant in higher
              judiciary
            </li>
            <li>
              <strong>Collegium System Issues</strong>: Opaque functioning
            </li>
            <li>
              <strong>Judicial Overreach</strong>: Separation of powers concerns
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>7.2 Suggested Reforms</h3>
          <ul>
            <li>
              <strong>National Judicial Appointments Commission</strong>:
              Balanced appointment system
            </li>
            <li>
              <strong>All India Judicial Service</strong>: For subordinate
              judiciary
            </li>
            <li>
              <strong>Court Management Systems</strong>: Technology integration
            </li>
            <li>
              <strong>Alternative Dispute Resolution</strong>: Lok Adalats,
              mediation
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>8. Comparison with Other Systems</h2>

        <div className="subsection">
          <h3>8.1 Indian vs US Judiciary</h3>
          <table className="judiciary-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>India</th>
                <th>USA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Judicial Review</td>
                <td>Explicit in Constitution</td>
                <td>Developed through Marbury v Madison</td>
              </tr>
              <tr>
                <td>Appointments</td>
                <td>Collegium system</td>
                <td>President appoints with Senate approval</td>
              </tr>
              <tr>
                <td>Tenure</td>
                <td>Till retirement age</td>
                <td>Life tenure</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2>9. Practice Questions</h2>

        <div className="practice-problem">
          <h3>Question 1</h3>
          <p>
            Discuss the evolution of the collegium system in India. How does it
            differ from the NJAC model?
          </p>
        </div>

        <div className="practice-problem">
          <h3>Question 2</h3>
          <p>
            Analyze the impact of judicial activism on Indian democracy with
            suitable examples.
          </p>
        </div>

        <div className="practice-problem">
          <h3>Question 3</h3>
          <p>
            What are the major challenges facing the Indian judiciary today?
            Suggest reforms to address them.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>10. Summary</h2>
        <ul>
          <li>
            Indian judiciary is integrated and independent with SC at apex
          </li>
          <li>
            Has wide powers including judicial review and writ jurisdiction
          </li>
          <li>Collegium system governs judicial appointments</li>
          <li>Judicial activism through PIL has expanded rights protection</li>
          <li>
            Faces challenges like pendency, vacancies and transparency issues
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Judiciary;
