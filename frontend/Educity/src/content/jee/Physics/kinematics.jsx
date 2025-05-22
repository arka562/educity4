import React from "react";
import Latex from "react-latex";
import "katex/dist/katex.min.css";
import "./kinematics.css";

const kinematics = () => {
  return (
    <div className="content-container">
      <h1 className="main-title">Kinematics Notes for JEE Level</h1>

      <p className="intro">
        Kinematics is the branch of mechanics that deals with the motion of
        objects without considering the forces that cause the motion. It is a
        fundamental topic in physics and forms the basis for understanding more
        complex concepts in mechanics. Below are detailed notes on kinematics,
        tailored for JEE preparation.
      </p>

      <div className="section">
        <h2>1. Basic Concepts</h2>

        <div className="subsection">
          <h3>1.1 Motion and Rest</h3>
          <ul>
            <li>
              <strong>Motion</strong>: An object is said to be in motion if its
              position changes with respect to a reference point (or frame of
              reference) over time.
            </li>
            <li>
              <strong>Rest</strong>: An object is at rest if its position does
              not change with respect to a reference point over time.
            </li>
            <li>
              <strong>Frame of Reference</strong>: A coordinate system used to
              describe the position and motion of an object. It can be inertial
              (non-accelerating) or non-inertial (accelerating).
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>1.2 Scalars and Vectors</h3>
          <ul>
            <li>
              <strong>Scalar Quantities</strong>: Quantities that have only
              magnitude (e.g., distance, speed, mass).
            </li>
            <li>
              <strong>Vector Quantities</strong>: Quantities that have both
              magnitude and direction (e.g., displacement, velocity,
              acceleration).
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>1.3 Distance and Displacement</h3>
          <ul>
            <li>
              <strong>Distance</strong>: The total path length traveled by an
              object. It is a scalar quantity.
            </li>
            <li>
              <strong>Displacement</strong>: The shortest distance between the
              initial and final positions of an object. It is a vector quantity.
              <ul>
                <li>
                  Displacement can be zero even if the distance traveled is not
                  zero (e.g., moving in a circle and returning to the starting
                  point).
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>1.4 Speed and Velocity</h3>
          <ul>
            <li>
              <strong>Speed</strong>: The rate of change of distance with
              respect to time. It is a scalar quantity.
              <div className="equation">
                <p>
                  <Latex>
                    {"$\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}$"}
                  </Latex>
                </p>
              </div>
            </li>
            <li>
              <strong>Velocity</strong>: The rate of change of displacement with
              respect to time. It is a vector quantity.
              <div className="equation">
                <p>
                  <Latex>
                    {
                      "$\\text{Velocity} = \\frac{\\text{Displacement}}{\\text{Time}}$"
                    }
                  </Latex>
                </p>
              </div>
              <ul>
                <li>
                  <strong>Average Velocity</strong>:{" "}
                  <Latex>
                    {
                      "$\\vec{v}_{\\text{avg}} = \\frac{\\Delta \\vec{r}}{\\Delta t}$"
                    }
                  </Latex>
                </li>
                <li>
                  <strong>Instantaneous Velocity</strong>:{" "}
                  <Latex>{"$\\vec{v} = \\frac{d\\vec{r}}{dt}$"}</Latex>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>2. Equations of Motion</h2>
        <p>
          For an object moving with uniform acceleration, the following
          equations are used:
        </p>

        <div className="equation">
          <h3>First Equation of Motion:</h3>
          <p>
            <Latex>{"$v = u + at$"}</Latex>
          </p>
          <ul>
            <li>
              <Latex>{"$v$"}</Latex>: Final velocity
            </li>
            <li>
              <Latex>{"$u$"}</Latex>: Initial velocity
            </li>
            <li>
              <Latex>{"$a$"}</Latex>: Acceleration
            </li>
            <li>
              <Latex>{"$t$"}</Latex>: Time
            </li>
          </ul>
        </div>

        <div className="equation">
          <h3>Second Equation of Motion:</h3>
          <p>
            <Latex>{"$s = ut + \\frac{1}{2}at^2$"}</Latex>
          </p>
          <ul>
            <li>
              <Latex>{"$s$"}</Latex>: Displacement
            </li>
          </ul>
        </div>

        <div className="equation">
          <h3>Third Equation of Motion:</h3>
          <p>
            <Latex>{"$v^2 = u^2 + 2as$"}</Latex>
          </p>
        </div>

        <div className="equation">
          <h3>Displacement in nth Second:</h3>
          <p>
            <Latex>{"$s_n = u + \\frac{a}{2}(2n - 1)$"}</Latex>
          </p>
          <ul>
            <li>
              <Latex>{"$s_n$"}</Latex>: Displacement in the nth second.
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>3. Graphical Representation of Motion</h2>

        <div className="subsection">
          <h3>3.1 Position-Time Graph</h3>
          <ul>
            <li>
              <strong>Slope</strong>: Represents velocity.
              <ul>
                <li>
                  <strong>Positive Slope</strong>: Object is moving forward.
                </li>
                <li>
                  <strong>Negative Slope</strong>: Object is moving backward.
                </li>
                <li>
                  <strong>Zero Slope</strong>: Object is at rest.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>3.2 Velocity-Time Graph</h3>
          <ul>
            <li>
              <strong>Slope</strong>: Represents acceleration.
              <ul>
                <li>
                  <strong>Positive Slope</strong>: Acceleration is positive.
                </li>
                <li>
                  <strong>Negative Slope</strong>: Acceleration is negative
                  (deceleration).
                </li>
                <li>
                  <strong>Zero Slope</strong>: Constant velocity (no
                  acceleration).
                </li>
              </ul>
            </li>
            <li>
              <strong>Area under the curve</strong>: Represents displacement.
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>3.3 Acceleration-Time Graph</h3>
          <ul>
            <li>
              <strong>Slope</strong>: Represents jerk (rate of change of
              acceleration).
            </li>
            <li>
              <strong>Area under the curve</strong>: Represents change in
              velocity.
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>4. Projectile Motion</h2>
        <p>
          Projectile motion is the motion of an object thrown or projected into
          the air, subject only to acceleration due to gravity.
        </p>

        <div className="subsection">
          <h3>4.1 Assumptions</h3>
          <ul>
            <li>Air resistance is negligible.</li>
            <li>
              Acceleration due to gravity (<Latex>{"$g$"}</Latex>) is constant
              and acts downward.
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>4.2 Components of Projectile Motion</h3>
          <ul>
            <li>
              <strong>Horizontal Motion</strong>: Uniform motion (no
              acceleration).
              <ul>
                <li>
                  <Latex>{"$v_x = u \\cos \\theta$"}</Latex>
                </li>
                <li>
                  <Latex>{"$x = u \\cos \\theta \\cdot t$"}</Latex>
                </li>
              </ul>
            </li>
            <li>
              <strong>Vertical Motion</strong>: Accelerated motion (due to
              gravity).
              <ul>
                <li>
                  <Latex>{"$v_y = u \\sin \\theta - gt$"}</Latex>
                </li>
                <li>
                  <Latex>
                    {"$y = u \\sin \\theta \\cdot t - \\frac{1}{2}gt^2$"}
                  </Latex>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>4.3 Key Parameters</h3>
          <div className="equation">
            <h4>Time of Flight:</h4>
            <p>
              <Latex>{"$T = \\frac{2u \\sin \\theta}{g}$"}</Latex>
            </p>
          </div>

          <div className="equation">
            <h4>Maximum Height:</h4>
            <p>
              <Latex>{"$H = \\frac{u^2 \\sin^2 \\theta}{2g}$"}</Latex>
            </p>
          </div>

          <div className="equation">
            <h4>Horizontal Range:</h4>
            <p>
              <Latex>{"$R = \\frac{u^2 \\sin 2\\theta}{g}$"}</Latex>
            </p>
            <ul>
              <li>
                Maximum range occurs at <Latex>{"$\\theta = 45^\\circ$"}</Latex>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>5. Relative Motion</h2>
        <p>
          Relative motion deals with the motion of an object as observed from a
          different frame of reference.
        </p>

        <div className="subsection">
          <h3>5.1 Relative Velocity</h3>
          <ul>
            <li>
              The velocity of an object A relative to object B is given by:
              <div className="equation">
                <p>
                  <Latex>{"$\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B$"}</Latex>
                </p>
              </div>
            </li>
            <li>
              <strong>Example</strong>: If two cars are moving in the same
              direction, the relative velocity is the difference in their
              speeds.
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>5.2 River-Boat Problems</h3>
          <ul>
            <li>
              <strong>Case 1</strong>: Boat moving perpendicular to the river
              current.
              <ul>
                <li>
                  The boat's resultant velocity is the vector sum of its
                  velocity and the river's velocity.
                </li>
              </ul>
            </li>
            <li>
              <strong>Case 2</strong>: Boat moving at an angle to the river
              current.
              <ul>
                <li>
                  The boat's path is determined by the relative velocity
                  components.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>6. Circular Motion</h2>
        <p>
          Circular motion involves the movement of an object along a circular
          path.
        </p>

        <div className="subsection">
          <h3>6.1 Angular Displacement</h3>
          <ul>
            <li>
              The angle through which an object moves in circular motion.
              <div className="equation">
                <p>
                  <Latex>{"$\\theta = \\frac{s}{r}$"}</Latex>
                </p>
              </div>
              <ul>
                <li>
                  <Latex>{"$s$"}</Latex>: Arc length
                </li>
                <li>
                  <Latex>{"$r$"}</Latex>: Radius of the circular path
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>6.2 Angular Velocity</h3>
          <ul>
            <li>
              The rate of change of angular displacement.
              <div className="equation">
                <p>
                  <Latex>{"$\\omega = \\frac{d\\theta}{dt}$"}</Latex>
                </p>
              </div>
              <ul>
                <li>Units: rad/s</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>6.3 Angular Acceleration</h3>
          <ul>
            <li>
              The rate of change of angular velocity.
              <div className="equation">
                <p>
                  <Latex>{"$\\alpha = \\frac{d\\omega}{dt}$"}</Latex>
                </p>
              </div>
              <ul>
                <li>Units: rad/s²</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>6.4 Centripetal Acceleration</h3>
          <ul>
            <li>
              The acceleration directed towards the center of the circular path.
              <div className="equation">
                <p>
                  <Latex>{"$a_c = \\frac{v^2}{r} = \\omega^2 r$"}</Latex>
                </p>
              </div>
              <ul>
                <li>
                  <Latex>{"$v$"}</Latex>: Linear velocity
                </li>
                <li>
                  <Latex>{"$r$"}</Latex>: Radius
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>6.5 Centripetal Force</h3>
          <ul>
            <li>
              The force required to keep an object moving in a circular path.
              <div className="equation">
                <p>
                  <Latex>{"$F_c = \\frac{mv^2}{r} = m\\omega^2 r$"}</Latex>
                </p>
              </div>
              <ul>
                <li>
                  <Latex>{"$m$"}</Latex>: Mass of the object
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>7. Kinematic Problems and Problem-Solving Strategies</h2>

        <div className="subsection">
          <h3>7.1 Problem-Solving Steps</h3>
          <ol>
            <li>
              <strong>Identify the Given Information</strong>: List all known
              quantities (e.g., initial velocity, acceleration, time).
            </li>
            <li>
              <strong>Determine What is Asked</strong>: Identify the unknown
              quantity to be found.
            </li>
            <li>
              <strong>Choose the Appropriate Equation</strong>: Select the
              kinematic equation that relates the known and unknown quantities.
            </li>
            <li>
              <strong>Solve the Equation</strong>: Substitute the known values
              and solve for the unknown.
            </li>
            <li>
              <strong>Check Units and Reasonableness</strong>: Ensure the answer
              has the correct units and makes physical sense.
            </li>
          </ol>
        </div>

        <div className="subsection">
          <h3>7.2 Common Pitfalls</h3>
          <ul>
            <li>
              <strong>Sign Convention</strong>: Be consistent with the sign
              convention for direction (e.g., upward as positive, downward as
              negative).
            </li>
            <li>
              <strong>Units</strong>: Ensure all quantities are in consistent
              units before solving.
            </li>
            <li>
              <strong>Vector Components</strong>: Break vectors into components
              when dealing with 2D or 3D motion.
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>8. Advanced Topics in Kinematics</h2>

        <div className="subsection">
          <h3>8.1 Variable Acceleration</h3>
          <ul>
            <li>
              When acceleration is not constant, use calculus to solve for
              velocity and displacement.
              <div className="equation">
                <p>
                  <Latex>{"$v(t) = \\int a(t) \\, dt$"}</Latex>
                </p>
                <p>
                  <Latex>{"$s(t) = \\int v(t) \\, dt$"}</Latex>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>8.2 Motion in 2D and 3D</h3>
          <ul>
            <li>
              Break the motion into components (x, y, z) and solve each
              component separately using kinematic equations.
            </li>
          </ul>
        </div>

        <div className="subsection">
          <h3>8.3 Non-Uniform Circular Motion</h3>
          <ul>
            <li>
              When the speed of an object in circular motion changes, both
              tangential and centripetal acceleration are present.
              <div className="equation">
                <p>
                  <Latex>{"$a_{\\text{total}} = \\sqrt{a_t^2 + a_c^2}$"}</Latex>
                </p>
              </div>
              <ul>
                <li>
                  <Latex>{"$a_t$"}</Latex>: Tangential acceleration
                </li>
                <li>
                  <Latex>{"$a_c$"}</Latex>: Centripetal acceleration
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>9. Practice Problems</h2>

        <div className="practice-problem">
          <h3>Problem 1</h3>
          <p>
            A car accelerates uniformly from rest to a speed of 30 m/s in 10
            seconds. Find the acceleration and the distance traveled.
          </p>
        </div>

        <div className="practice-problem">
          <h3>Problem 2</h3>
          <p>
            A projectile is launched at an angle of 60° with an initial velocity
            of 50 m/s. Calculate the time of flight, maximum height, and
            horizontal range.
          </p>
        </div>

        <div className="practice-problem">
          <h3>Problem 3</h3>
          <p>
            A particle moves in a circle of radius 2 m with a constant speed of
            4 m/s. Find the centripetal acceleration and the time period of the
            motion.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>10. Summary</h2>
        <ul>
          <li>
            Kinematics is the study of motion without considering the forces
            causing it.
          </li>
          <li>
            Key quantities include displacement, velocity, and acceleration.
          </li>
          <li>
            Equations of motion are essential for solving problems involving
            uniform acceleration.
          </li>
          <li>
            Projectile motion, relative motion, and circular motion are
            important applications of kinematics.
          </li>
          <li>
            Practice and problem-solving are crucial for mastering kinematics
            for JEE.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default kinematics;
