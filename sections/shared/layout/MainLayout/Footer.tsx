import Link from 'next/link';

import ROUTES from 'constants/routes';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell shell--large">
        <div className="footer__inner">
          <div className="grid footer__grid">
            <div className="grid__col grid__col--size1 footer__col">
              <div className="logo footer__logo">
                <a href="/">
                  <img src="/assets/images/logo.svg" alt="" />
                </a>
              </div>
              <div className="copyright">
                <p>Risk Labs © {currentYear}</p>
              </div>
            </div>
            <div className="grid__col grid__col--size2 footer__col">
              <div className="grid footer-nav__grid">
                <div className="footer-nav footer__nav">
                  <ul>
                    <li>
                      <a href="https://docs.umaproject.org/getting-started/overview">
                        How UMA Works
                      </a>
                    </li>
                    <li>
                      <a href="https://docs.umaproject.org/">Docs</a>
                    </li>
                    <li>
                      <Link href={ROUTES.FAQ}>
                        <a>FAQS</a>
                      </Link>
                    </li>
                    <li>
                      <a href="mailto:hello@umaproject.org" target="_blank">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav footer__nav">
                  <ul>
                    <li>
                      <a href="https://docs.umaproject.org/tutorials/setup">Getting Started</a>
                    </li>
                    <li>
                      <a href="https://vote.umaproject.org/" target="_blank">
                        Vote
                      </a>
                    </li>
                    <li>
                      <a href="https://angel.co/risk-labs/jobs" target="_blank">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid__col grid__col--size3 footer__col">
              <div className="footer__content">
                <div className="footer__entry">
                  <h6>Get UMA Updates</h6>
                  <p>Sign up for our newsletter to stay updated about the UMA project.</p>
                </div>
                <div className="subscribe footer__subscribe">
                  <form action="?" method="post">
                    <input
                      type="email"
                      id="mail"
                      name="mail"
                      placeholder="Email Address"
                      className="subscribe__field"
                    />
                    <button type="submit" className="subscribe__btn">
                      <img src="/assets/images/svg/ico-arrow.svg" alt="" />
                    </button>
                  </form>
                  <p className="subscribe__message" />
                </div>
                <div className="subscribe-global hidden">
                  <div id="mc_embed_signup">
                    <form
                      action="https://umaproject.us19.list-manage.com/subscribe/post?u=b2e789cb476a06f1261e79e05&id=85dfd6c316"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate"
                      target="_blank"
                      noValidate
                    >
                      <div id="mc_embed_signup_scroll">
                        <h2>Subscribe to our mailing list</h2>
                        <div className="indicates-required">
                          <span className="asterisk">*</span> indicates required
                        </div>
                        <div className="mc-field-group">
                          <label htmlFor="mce-EMAIL">
                            Email Address <span className="asterisk">*</span>
                          </label>
                          <input
                            type="email"
                            name="EMAIL"
                            className="required email"
                            id="mce-EMAIL"
                          />
                        </div>
                        <div id="mce-responses" className="clear">
                          <div
                            className="response"
                            id="mce-error-response"
                            style={{ display: 'none' }}
                          />
                          <div
                            className="response"
                            id="mce-success-response"
                            style={{ display: 'none' }}
                          />
                        </div>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                          <input
                            type="text"
                            name="b_b2e789cb476a06f1261e79e05_85dfd6c316"
                            tabIndex={-1}
                          />
                        </div>
                        <div className="clear">
                          <input
                            type="submit"
                            defaultValue="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="button"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*End mc_embed_signup*/}
                  <div className="socials footer__socials">
                    <ul>
                      <li>
                        <a href="https://medium.com/uma-project" target="_blank">
                          <img src="/assets/images/svg/vector1.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/umaprotocol" target="_blank">
                          <img src="/assets/images/svg/vector2.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/umaprotocol?lang=en" target="_blank">
                          <img src="/assets/images/svg/vector3.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="https://discord.com/invite/jsb9XQJ" target="_blank">
                          <img src="/assets/images/svg/soc3.svg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
