import React from 'react';
/**
 * Portfolio page component
 * @return {JSX.Element}
 */
export default function Portfolio(): JSX.Element {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>This is the portfolio page.</p>
      <div className="project-list">
        <div className="project">
          <h2>Project 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum euismod, nisi vel consectetur euismod, nisl nunc
            consectetur nisl, eget aliquam nisl eros eu nisi.
          </p>
        </div>
        <div className="project">
          <h2>Project 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum euismod, nisi vel consectetur euismod, nisl nunc
            consectetur nisl, eget aliquam nisl eros eu nisi.
          </p>
        </div>
        <div className="project">
          <h2>Project 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum euismod, nisi vel consectetur euismod, nisl nunc
            consectetur nisl, eget aliquam nisl eros eu nisi.
          </p>
        </div>
      </div>
    </div>
  );
}
