import Link from 'next/link';
import ROUTES from 'constants/routes';

export const Projects = () => (
  <section className="section-projects">
    <div className="shell">
      <div className="section__inner">
        <h5>Projects using UMA</h5>
        <div className="projects">
          <div className="project project--alt">
            <Link href={`${ROUTES.Projects}#uusd`}>
              <a>
                <div className="project__inner">
                  <div className="project__content">
                    <div className="project__icon">
                      <img src="/assets/images/temp/ulabs2.png" alt="" width={220} height={220} />
                    </div>
                    <div className="project__entry">
                      <h3>uUSD</h3>
                      <p>A yield dollar backed by ETH or rBTC.</p>
                      <div className="project__actions">
                        <span>View Project</span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="chevron-right"
                          className="svg-inline--fa fa-chevron-right fa-w-10"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="#fff"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="project__image">
                    <img src="/assets/images/uUSD1.png" alt="" width={200} height={200} />
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="project">
            <Link href={`${ROUTES.Projects}#perlinx`}>
              <a>
                <div className="project__inner">
                  <div className="project__content">
                    <div className="project__icon">
                      <img src="/assets/images/temp/logo2.png" alt="" />
                    </div>
                    <div className="project__entry">
                      <h3>Perlinx</h3>
                      <p>Decentralized liquidity pools and synthetic asset generation.</p>
                      <div className="project__actions">
                        <span>View Project</span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="chevron-right"
                          className="svg-inline--fa fa-chevron-right fa-w-10"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="#fff"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="project__image">
                    <img src="/assets/images/temp/image2.png" alt="" />
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="project">
            <Link href={`${ROUTES.Projects}#mario`}>
              <a>
                <div className="project__inner">
                  <div className="project__content">
                    <div className="project__icon">
                      <img src="/assets/images/Mario.svg" alt="" width={120} height={120} />
                    </div>
                    <div className="project__entry">
                      <h3>Mario Cash</h3>
                      <p>A Bitcoin Cash synthetic token backed by renBTC.</p>
                      <div className="project__actions">
                        <span>View Project</span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="chevron-right"
                          className="svg-inline--fa fa-chevron-right fa-w-10"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="#fff"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="project__image">
                    <img src="/assets/images/MarioDashboard.png" alt="" />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="section__actions">
          <Link href={ROUTES.Projects}>
            <a className="btn btn--black">View All Projects</a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
