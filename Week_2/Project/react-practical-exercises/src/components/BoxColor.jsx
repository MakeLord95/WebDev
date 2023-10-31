function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color:
      props.r === 255 && props.g === 0 && props.b === 0
        ? "white"
        : props.r === 128 && props.g === 255 && props.b === 0
        ? "black"
        : "inherit",
  };

  const fullHex = `#${props.r.toString(16).padStart(2, "0")}${props.g
    .toString(16)
    .padStart(2, "0")}${props.b.toString(16).padStart(2, "0")}`;

  return (
    <div className="BoxColor box" style={divStyle}>
      <>
        rgb({props.r},{props.g},{props.b})
        <br />
        {fullHex}
      </>
    </div>
  );
}

export default BoxColor;
