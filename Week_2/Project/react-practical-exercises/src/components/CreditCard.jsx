function CreditCard(props) {
  const divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };

  const logo =
    props.type === "Visa"
      ? "https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png"
      : "https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg";

  return (
    <div className="CreditCard" style={divStyle}>
      <>
        <div className="type">
          <img src={logo} alt={props.type} />
        </div>
        <div className="number">•••• •••• •••• {props.number.substr(-4)}</div>
        <div className="expires-bank">
          <span>
            Expires {("0" + props.expirationMonth).substr(-2)}/
            {props.expirationYear.toString().substr(2)}{" "}
          </span>
          <span className="bank">{props.bank}</span>
        </div>
        <div className="owner">{props.owner}</div>
      </>
    </div>
  );
}

export default CreditCard;
