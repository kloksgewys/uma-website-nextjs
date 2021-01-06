import Callout from 'sections/shared/components/Callout';

const FAQ = () => (
  <>
    <section className="section-categories">
      <div className="shell">
        <div className="section__inner">
          <div className="section__head">
            <span>?</span>
            <h1>UMA FAQs</h1>
          </div>
          <div className="section__nav">
            <ul className="list-category">
              <li className="is-active">
                <a href="#category1">About UMA</a>
              </li>
              <li>
                <a href="#category2">Priceless Contracts</a>
              </li>
              <li>
                <a href="#category3">Optimistic Oracle</a>
              </li>
            </ul>
          </div>
          <div className="section__body">
            <div className="categories">
              <div className="category" id="category1">
                <h4>About UMA</h4>
                <div className="category__content">
                  <h6>What does UMA stand for?</h6>
                  <p>Universal Market Access</p>
                </div>
                <div className="category__content">
                  <h6>What is UMA's mission?</h6>
                  <p>
                    UMA’s mission is to make financial markets universally accessible—unrestrained
                    by censorship, pre-existing financial and social capital, or beliefs and values.
                    The economic freedom created by universal market access creates equal
                    opportunity to pursue prosperity and build financial independence .
                  </p>
                </div>
                <div className="category__content">
                  <h6>What is a synthetic asset?</h6>
                  <p>
                    Synthetic assets are collateral-backed tokens whose value fluctuates depending
                    on the tokens’ reference index.
                  </p>
                </div>
              </div>
              <div className="category" id="category2">
                <h4>Priceless Contracts</h4>
                <div className="category__content">
                  <h6>What are priceless financial contracts?</h6>
                  <p>
                    UMA provides priceless financial contract templates for developers to create any
                    kind of financial contract. Priceless contracts minimize on-chain oracle usage
                    to reduce the frequence and surface area for oracle attacks.
                  </p>
                  <p>
                    The first set of priceless contracts enable developers to create synthetic
                    assets. Up until now, synthetic token designs have required smart contracts to
                    know the value of its collateral at all times, as reported by an on-chain price
                    feed. “Priceless” synthetic tokens differ because they do not require an
                    on-chain price feed to indicate whether the contract is properly collateralized.
                    Instead, they have a liquidation mechanism that allows anyone to liquidate an
                    undercollateralized position.
                  </p>
                  <p>
                    In this design, liquidators can choose to liquidate positions based on their own
                    off-chain view of the reference index for the token, which informs their view on
                    whether the position is properly collateralized. Positions that have not been
                    liquidated are assumed to be properly collateralized.
                  </p>
                  <p>
                    Liquidators are kept honest by disputers who are rewarded for catching invalid
                    liquidations. Only when a liquidation is disputed is an oracle needed. UMA’s
                    priceless financial contract templates leverage a decentralized oracle service
                    known as the Data Verification Mechanism (DVM). This system of incentives
                    functions to minimize oracle usage while keeping the entire system correctly
                    collateralized.
                  </p>
                </div>
              </div>
              <div className="category" id="category3">
                <h4>UMA's Optimistic Oracle</h4>
                <div className="category__content">
                  <h6>What is UMA’s Optimistic Oracle?</h6>
                  <p>
                    UMA’s priceless contracts leverage an optimistic oracle known as the Data
                    Verification Mechanism (DVM). The DVM provides the price of an asset at a
                    requested timestamp <b>only</b> when network participants dispute the value of
                    collateral backing a synthetic token. This differs from non-optimistic oracle
                    solutions which constantly write prices on-chain to ensure contracts are
                    properly collateralized. Minimizing oracle usage increases the security and
                    scalability of decentralized financial contracts.
                  </p>
                  <p>
                    When a dispute occurs, the DVM aggregates price data submitted by UMA token
                    holders. UMA token holders respond to price requests by referencing the asset's
                    price off-chain and reporting the price to the DVM. This price is used as an
                    input by the DVM to determine the final price of the asset.
                  </p>
                  <p>
                    If the price returned by the DVM determines the disputer was correct, the
                    disputer is rewarded with a penalty charged to the liquidator; conversely if the
                    disputer was incorrect, the disputer forfeits a bond to the liquidator.
                  </p>
                  <p>
                    {' '}
                    UMA's DVM is backed by economic guarantees to ensure it price feeds cannot be
                    corrupted. Learn more{' '}
                    <a
                      href="https://medium.com/uma-project/umas-data-verification-mechanism-3c5342759eb8"
                      target="_blank"
                    >
                      {' '}
                      here
                    </a>
                    !{' '}
                  </p>
                </div>
                <div className="category__content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Callout />
  </>
);

export default FAQ;
