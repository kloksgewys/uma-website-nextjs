const Header = () => (
  <header className="header">
    <div className="shell shell--large">
      <div className="header__inner">
        <div className="logo header__logo">
          <a href="/">
            <img src="/assets/images/logo.svg" alt="" />
          </a>
        </div>
        <div className="header__content">
          <nav className="nav">
            <ul>
              <li>
                <a href="https://docs.umaproject.org/getting-started/overview">How UMA Works</a>
              </li>
              <li>
                <a href="https://docs.umaproject.org/build-walkthrough/build-process">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="https://docs.umaproject.org/">Docs</a>
              </li>
              <li>
                <a href="https://vote.umaproject.org/" target="_blank">
                  Vote
                </a>
              </li>
            </ul>
          </nav>
          <div className="socials">
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
        <div className="mobile-nav js-mobile-nav">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
