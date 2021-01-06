const Callout = () => (
  <div className="callout">
    <div className="shell">
      <div className="callout__inner">
        <div
          className="callout__background"
          style={{ backgroundImage: 'url("assets/images/temp/pattern1.png")' }}
        />
        <div className="callout__content">
          <h5>Start building with UMA</h5>
          <h2>Are you ready to build your first synthetic asset?</h2>
          <div className="section__actions">
            <a
              href="https://docs.umaproject.org/build-walkthrough/build-process"
              className="btn btn--white"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Callout;
