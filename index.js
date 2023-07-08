const Notification = (props) => {
  //  Write your code here.
  return (
    <li className={`${props.className}`}>
      <img src={`${props.image}`} alt="image" />
      <p>{props.message}</p>
    </li>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>notification</h1>
    <ul>
      <Notification
        className="info-msg"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="suc-msg"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warn-msg"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Danger Message"
      />
      <Notification
        className="err-msg"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

