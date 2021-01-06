import { PROJECTS } from 'sections/projects/allProjects';

const Updates = () => (
  <section className="section-info">
    <div className="shell">
      <div className="section__inner">
        <h5>Key Metrics</h5>
        <div className="stats">
          <div className="grid section__grid">
            <div className="grid__col grid__col--1of3 section__col">
              <div className="stat">
                {/* TODO: compute this value */}
                <strong>$51</strong>
                <div className="stat__content">
                  <h3>Million</h3>
                  <p>Total value stored in UMA contracts</p>
                </div>
              </div>
            </div>
            <div className="grid__col grid__col--1of3 section__col">
              <div className="stat">
                <strong>{PROJECTS.length}</strong>
                <div className="stat__content">
                  <h3>Projects</h3>
                  <p>Number of mainnet projects using UMA</p>
                </div>
              </div>
            </div>
            <div className="grid__col grid__col--1of3 section__col">
              <div className="stat">
                {/* TODO: compute this value */}
                <strong>3</strong>
                <div className="stat__content">
                  <h3>Oracle Calls</h3>
                  <p>Only 3 price requests required to secure $51 million</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Updates;
