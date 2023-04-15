const Notification = (props) => {
  //  Write your code here.
};

const Notification = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="signal-card">
      <div className="first-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="image"
        />
        <p className="paragraph">Information Message</p>
      </div>
      <div className="first-card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="image"
        />
        <p className="paragraph">Success Message</p>
      </div>
      <div className="first-card3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          className="image"
        />
        <p className="paragraph">Warning Message</p>
      </div>
      <div className="first-card4">
        <img
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          className="image"
        />
        <p className="paragraph">Error Message</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(<Notification />, document.getElementById("root"));
