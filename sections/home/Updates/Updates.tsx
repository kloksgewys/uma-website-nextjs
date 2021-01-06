const Updates = () => (
  <section className="section-updates">
    <div className="shell">
      <div className="section__inner">
        <h5>Why Use UMA?</h5>
        <div className="cards">
          <div className="cards__items">
            <div className="cards__item">
              <div className="card">
                <div className="card__image">
                  <img src="/assets/images/icon1.svg" alt="" />
                </div>
                <div className="card__content">
                  <h3>Time to Launch</h3>
                  <div className="card__entry">
                    <p>Quickly create synthetic assets with priceless contract templates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="card">
                <div className="card__image">
                  <img src="/assets/images/svg/icon2.svg" alt="" />
                </div>
                <div className="card__content">
                  <h3>No Limits on Design</h3>
                  <div className="card__entry">
                    <p>
                      Create tokens that track the price of <i>anything</i>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="card">
                <div className="card__image">
                  <img src="/assets/images/svg/icon3.svg" alt="" />
                </div>
                <div className="card__content">
                  <h3>Provably Secure</h3>
                  <div className="card__entry">
                    <p>Economic guarantees ensure your contract cannot be manipulated.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards__item">
              <div className="card">
                <div className="card__image card__image--alt">
                  <img src="/assets/images/icon4.svg" alt="" />
                </div>
                <div className="card__content">
                  <h3>Minimize Oracle Usage</h3>
                  <div className="card__entry">
                    <p> Increase security and reduce costs with minimal on-chain transactions. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__actions">
          <a href="https://docs.umaproject.org/getting-started/overview" className="btn btn--red">
            How UMA Works
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Updates;
