import React from 'react';

export default function CeremoniesCheatSheet() {
  return (
    <section className="sc-cheatsheet-section" id="cheat-sheet">
      <h2 className="sc-section-title">Teacher's quick cheat–sheet</h2>

      <div className="sc-table-card sc-card-shadow">
        <div className="sc-table-scroll">
          <table className="sc-cheatsheet-table">
            <thead>
              <tr>
                <th>CEREMONY</th>
                <th>TIMEBOX IN CLASS</th>
                <th>FOCUS</th>
                <th>KEY QUESTION / GOAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="sc-table-badge sc-bg-yellow">SPRINT PLANNING</span>
                </td>
                <td className="sc-td-time">15–20 min</td>
                <td className="sc-td-focus">Product</td>
                <td className="sc-td-goal">What will we deliver this sprint, and who does what?</td>
              </tr>
              <tr>
                <td>
                  <span className="sc-table-badge sc-bg-green">DAILY STAND-UP</span>
                </td>
                <td className="sc-td-time">5–10 min</td>
                <td className="sc-td-focus">Process</td>
                <td className="sc-td-goal">Done? Next? Blocked?</td>
              </tr>
              <tr>
                <td>
                  <span className="sc-table-badge sc-bg-blue">SPRINT REVIEW</span>
                </td>
                <td className="sc-td-time">~10 min / team</td>
                <td className="sc-td-focus">Product</td>
                <td className="sc-td-goal">Does our deliverable work? What feedback do we get?</td>
              </tr>
              <tr>
                <td>
                  <span className="sc-table-badge sc-bg-coral">SPRINT RETROSPECTIVE</span>
                </td>
                <td className="sc-td-time">10–15 min</td>
                <td className="sc-td-focus">Process</td>
                <td className="sc-td-goal">What 1–2 things will we change as a team?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
