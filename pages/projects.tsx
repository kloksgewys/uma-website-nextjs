import format from 'date-fns/format';
import startCase from 'lodash/startCase';

import { PROJECTS, Socials } from 'sections/projects/allProjects';

const Projects = () => (
  <>
    <section className="section-boxes">
      <div className="shell">
        <div className="section__inner">
          <div className="section__head">
            <h1>Projects Using UMA</h1>
          </div>
          <div className="section__nav">
            <div className="form section__form">
              <form action="?" method="post">
                <div className="form__row">
                  <label htmlFor="filters" className="form__label">
                    Filter by
                  </label>
                  <div className="form__controls">
                    <div className="select js-select">
                      <select name="filters" id="filters" className="js-filter">
                        <option value="*">Category: All</option>
                        <option value=".digitally-native-index">Digitally Native Index</option>
                        <option value=".yield-dollar">Yield Dollar</option>
                        <option value=".synthetic-asset-marketplace">
                          Synthetic Asset Exchange
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="grid section__grid">
              <div className="grid__col grid__col--size4 section__col">
                <h6>Project</h6>
              </div>
              <div className="grid__col grid__col--size5 section__col">
                <h6>Launch Date</h6>
              </div>
              <div className="grid__col grid__col--size6 section__col">
                <h6>Category</h6>
              </div>
              <div className="grid__col grid__col--size7 section__col">
                <h6>Etherscan Link</h6>
              </div>
            </div>
          </div>
          <div className="section__body">
            <div className="boxes boxes--filtered js-filter-items">
              {PROJECTS.map((project) => (
                <div className={`box ${project.category}`} id={project.id} key={project.id}>
                  <div className="grid">
                    <div className="grid__col grid__col--size4 box__col">
                      <div className="box__inner">
                        {project.icon}
                        <div className="box__content">
                          <h6>{project.name}</h6>
                          <p>{project.description}</p>
                          <div className="box__actions">
                            <a href={project.learnMoreLink} target="_blank">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid__col grid__col--size5 box__col">
                      <small>Launch Date</small>
                      <span>{format(project.launchDate, 'MMM yyyy')}</span>
                    </div>
                    <div className="grid__col grid__col--size6 box__col">
                      <small>Category</small>
                      <span>{startCase(project.category)}</span>
                    </div>
                    {project.contractAddress != null && (
                      <div className="grid__col grid__col--size7 box__col">
                        <small>Etherscan Link</small>
                        <div className="box__link">
                          <span>
                            <a
                              href={`https://etherscan.io/token/${project.contractAddress}`}
                              target="_blank"
                            >
                              Etherscan Link
                            </a>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  {project.socials != null && (
                    <>
                      <ul className="box__socials">
                        {project.socials.map((social) => {
                          let icon = null;

                          if (social.type === Socials.GitHub) {
                            icon = <img src="assets/images/svg/soc5.svg" alt="" />;
                          } else if (social.type === Socials.Twitter) {
                            icon = <img src="assets/images/svg/soc8.svg" alt="" />;
                          } else if (social.type === Socials.Discord) {
                            icon = (
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 25 28.4"
                                // @ts-ignore
                                style={{ enableBackground: 'new 0 0 25 28.4' }}
                                xmlSpace="preserve"
                              >
                                <path
                                  d="M11.4,13.5c0,0.9-0.6,1.6-1.5,1.6c-0.8,0-1.5-0.7-1.5-1.6c0-0.9,0.6-1.6,1.5-1.6C10.7,11.9,11.4,12.6,11.4,13.5z M15.1,11.9
													c-0.8,0-1.5,0.7-1.5,1.6c0,0.9,0.7,1.6,1.5,1.6c0.8,0,1.5-0.7,1.5-1.6C16.6,12.6,15.9,11.9,15.1,11.9z M25,2.9v25.5l-3.1-2.7
													l-1.7-1.6l-1.8-1.7l0.8,2.6H2.9c-1.6,0-2.9-1.3-2.9-2.9V2.9C0,1.3,1.3,0,2.9,0h19.1C23.7,0,25,1.3,25,2.9z M20.9,16.4
													c0-4.6-2.1-8.3-2.1-8.3c-2.1-1.5-4-1.5-4-1.5l-0.2,0.2c2.4,0.7,3.6,1.8,3.6,1.8c-1.5-0.8-2.9-1.2-4.3-1.4c-1-0.1-2-0.1-2.9,0
													c-0.1,0-0.2,0-0.2,0c-0.5,0-1.7,0.2-3.2,0.9C7,8.5,6.7,8.7,6.7,8.7s1.2-1.1,3.8-1.9l-0.1-0.2c0,0-2,0-4,1.5c0,0-2.1,3.7-2.1,8.3
													c0,0,1.2,2.1,4.4,2.2c0,0,0.5-0.6,1-1.2c-1.8-0.5-2.5-1.7-2.5-1.7s0.1,0.1,0.4,0.2c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0.1
													c0.4,0.2,0.7,0.4,1,0.5c0.6,0.2,1.3,0.5,2.1,0.6c1.1,0.2,2.3,0.3,3.7,0c0.7-0.1,1.4-0.3,2.1-0.6c0.5-0.2,1.1-0.5,1.6-0.8
													c0,0-0.7,1.2-2.6,1.7c0.4,0.5,0.9,1.2,0.9,1.2C19.7,18.5,20.9,16.4,20.9,16.4z"
                                />
                              </svg>
                            );
                          } else if (social.type === Socials.Medium) {
                            icon = <img src="assets/images/svg/soc9.svg" alt="" />;
                          }

                          return (
                            <li key={social.type}>
                              <a href={social.link} target="_blank">
                                {icon}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Projects;
