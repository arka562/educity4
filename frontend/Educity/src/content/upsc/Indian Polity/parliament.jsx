import React from "react";
import Latex from "react-latex";
import "katex/dist/katex.min.css";
import "./parliament.css";

const Parliament = () => {
  return (
    <div className="content-container">
      <h1 className="main-title">Indian Parliament: Complete Guide for UPSC</h1>

      <p className="intro">
        The Indian Parliament is the supreme legislative body of India,
        embodying the principles of representative democracy and federalism.
        This comprehensive guide covers all aspects of Parliament including its
        structure, functions, procedures, powers, and challenges - essential for
        UPSC aspirants preparing for Indian Polity.
      </p>

      <div className="section">
        <h2>1. Introduction to Indian Parliament</h2>

        <div className="subsection">
          <h3>1.1 Constitutional Provisions</h3>
          <ul>
            <li>
              <strong>Article 79</strong>: Constitution of Parliament (President
              + Rajya Sabha + Lok Sabha)
            </li>
            <li>
              <strong>Article 80</strong>: Composition of Rajya Sabha
            </li>
            <li>
              <strong>Article 81</strong>: Composition of Lok Sabha
            </li>
            <li>
              <strong>Articles 107-122</strong>: Legislative procedures
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>1.2 Historical Evolution</h3>
          <ul>
            <li>Government of India Act 1919 introduced bicameralism</li>
            <li>Government of India Act 1935 expanded legislative powers</li>
            <li>
              Adopted from British Westminster model but with federal features
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>2. Structure of Parliament</h2>

        <div className="subsection">
          <h3>2.1 President of India</h3>
          <ul>
            <li>Integral part of Parliament though not a member</li>
            <li>
              Powers:
              <ul>
                <li>Summoning and proroguing Parliament</li>
                <li>
                  Addressing joint sessions (
                  <Latex>{"$\\text{Article 87}$"}</Latex>)
                </li>
                <li>
                  Giving assent to bills (
                  <Latex>{"$\\text{Article 111}$"}</Latex>)
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>2.2 Rajya Sabha (Council of States)</h3>
          <div className="equation">
            <p>
              <Latex>
                {
                  "$\\text{Maximum strength} = 250 \\ (238 \\ elected + 12 \\ nominated)$"
                }
              </Latex>
            </p>
          </div>
          <ul>
            <li>
              <strong>Election</strong>: By state MLAs using proportional
              representation
            </li>
            <li>
              <strong>Tenure</strong>: 6 years with 1/3rd retiring biennially
            </li>
            <li>
              <strong>Special Powers</strong>:
              <ul>
                <li>
                  Can create new All-India Services (
                  <Latex>{"$\\text{Article 312}$"}</Latex>)
                </li>
                <li>
                  Approves President's Rule (
                  <Latex>{"$\\text{Article 356}$"}</Latex>)
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>2.3 Lok Sabha (House of the People)</h3>
          <div className="equation">
            <p>
              <Latex>
                {
                  "$\\text{Maximum strength} = 552 \\ (530 \\ states + 20 \\ UTs + 2 \\ nominated)$"
                }
              </Latex>
            </p>
          </div>
          <ul>
            <li>
              <strong>Election</strong>: Direct election by FPTP system
            </li>
            <li>
              <strong>Tenure</strong>: 5 years (unless dissolved earlier)
            </li>
            <li>
              <strong>Special Powers</strong>:
              <ul>
                <li>
                  Exclusive power over Money Bills (
                  <Latex>{"$\\text{Article 110}$"}</Latex>)
                </li>
                <li>No-confidence motion can only be introduced here</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>3. Functions of Parliament</h2>

        <div className="subsection">
          <h3>3.1 Legislative Functions</h3>
          <ul>
            <li>Makes laws on Union List and Concurrent List</li>
            <li>
              Can legislate on State List in special circumstances:
              <ul>
                <li>
                  During National Emergency (
                  <Latex>{"$\\text{Article 249}$"}</Latex>)
                </li>
                <li>When Rajya Sabha passes resolution by special majority</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>3.2 Financial Functions</h3>
          <ul>
            <li>
              Approval of Budget (<Latex>{"$\\text{Article 112}$"}</Latex>)
            </li>
            <li>Money Bills originate only in Lok Sabha</li>
            <li>
              Three stages:
              <ol>
                <li>Presentation</li>
                <li>General Discussion</li>
                <li>Voting on Demands for Grants</li>
              </ol>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>3.3 Executive Control</h3>
          <ul>
            <li>Question Hour - First hour of parliamentary sitting</li>
            <li>
              No-confidence motion (<Latex>{"$\\text{Article 75}$"}</Latex>)
            </li>
            <li>Adjournment motions for urgent debates</li>
            <li>Parliamentary committees oversight</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>4. Parliamentary Procedures</h2>

        <div className="subsection">
          <h3>4.1 Sessions of Parliament</h3>
          <table className="parliament-table">
            <thead>
              <tr>
                <th>Session</th>
                <th>Timing</th>
                <th>Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Budget Session</td>
                <td>Feb-May</td>
                <td>Presentation of Union Budget</td>
              </tr>
              <tr>
                <td>Monsoon Session</td>
                <td>July-Aug</td>
                <td>Important legislative business</td>
              </tr>
              <tr>
                <td>Winter Session</td>
                <td>Nov-Dec</td>
                <td>Last session of calendar year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="subsection">
          <h3>4.2 Types of Bills</h3>
          <table className="parliament-table">
            <thead>
              <tr>
                <th>Bill Type</th>
                <th>Lok Sabha Role</th>
                <th>Rajya Sabha Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ordinary Bill</td>
                <td>Can originate</td>
                <td>Can amend/reject</td>
              </tr>
              <tr>
                <td>
                  Money Bill (<Latex>{"$\\text{Art 110}$"}</Latex>)
                </td>
                <td>Only here</td>
                <td>Can suggest changes (14 days limit)</td>
              </tr>
              <tr>
                <td>Constitutional Amendment</td>
                <td>Special majority needed</td>
                <td>Special majority needed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2>5. Parliamentary Committees</h2>

        <div className="subsection">
          <h3>5.1 Standing Committees</h3>
          <ul>
            <li>
              <strong>Public Accounts Committee (PAC)</strong>: Examines CAG
              reports
            </li>
            <li>
              <strong>Estimates Committee</strong>: Examines budget estimates
            </li>
            <li>
              <strong>Committee on Public Undertakings</strong>: Reviews PSUs
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>5.2 Ad-hoc Committees</h3>
          <ul>
            <li>Select Committees for specific bills</li>
            <li>
              Joint Parliamentary Committees (JPCs) for major investigations
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>6. Special Powers Comparison</h2>

        <div className="subsection">
          <h3>6.1 Lok Sabha's Exclusive Powers</h3>
          <ul>
            <li>Money Bills originate only here</li>
            <li>No-confidence motions</li>
            <li>
              Final say in joint sittings (
              <Latex>{"$\\text{Article 108}$"}</Latex>)
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>6.2 Rajya Sabha's Special Powers</h3>
          <ul>
            <li>
              Can authorize Parliament to legislate on State List (
              <Latex>{"$\\text{Article 249}$"}</Latex>)
            </li>
            <li>
              Can create new All-India Services (
              <Latex>{"$\\text{Article 312}$"}</Latex>)
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>7. Challenges and Reforms</h2>

        <div className="subsection">
          <h3>7.1 Current Issues</h3>
          <ul>
            <li>Declining sitting days (avg. 60-70/year vs UK's 150+)</li>
            <li>Frequent disruptions and loss of productive time</li>
            <li>Overuse of ordinance route</li>
          </ul>
        </div>

        <div className="subsection">
          <h3>7.2 Suggested Reforms</h3>
          <ul>
            <li>Fixed timings for debates (like PMQs in UK)</li>
            <li>Strengthening committee system</li>
            <li>Reforming anti-defection law (10th Schedule)</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>8. Comparative Analysis</h2>

        <div className="subsection">
          <h3>8.1 Indian vs British Parliament</h3>
          <table className="parliament-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>India</th>
                <th>UK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Upper House</td>
                <td>Rajya Sabha (elected)</td>
                <td>House of Lords (mostly appointed)</td>
              </tr>
              <tr>
                <td>Money Bill Power</td>
                <td>Only Lok Sabha</td>
                <td>Only Commons</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <h2>9. Landmark Judgments</h2>

        <div className="subsection">
          <h3>9.1 Key Cases</h3>
          <ul>
            <li>
              <strong>Kesavananda Bharati (1973)</strong>: Basic structure
              doctrine limits parliamentary amendments
            </li>
            <li>
              <strong>Raja Ram Pal vs Speaker (2007)</strong>: Judiciary can
              review parliamentary expulsions
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>10. Practice Questions</h2>

        <div className="practice-problem">
          <h3>Question 1</h3>
          <p>
            Compare the legislative powers of Rajya Sabha with the US Senate.
          </p>
        </div>

        <div className="practice-problem">
          <h3>Question 2</h3>
          <p>
            Explain the constitutional provisions related to Money Bills in
            India.
          </p>
        </div>

        <div className="practice-problem">
          <h3>Question 3</h3>
          <p>
            What are the major challenges facing the Indian Parliament today?
          </p>
        </div>
      </div>

      <div className="section">
        <h2>11. Summary</h2>
        <ul>
          <li>Parliament consists of President, Rajya Sabha and Lok Sabha</li>
          <li>
            Has legislative, financial, executive control and constituent
            functions
          </li>
          <li>Lok Sabha has supremacy in financial matters</li>
          <li>Rajya Sabha represents states and has special federal powers</li>
          <li>
            Faces challenges like disruptions and needs reforms for better
            functioning
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Parliament;
