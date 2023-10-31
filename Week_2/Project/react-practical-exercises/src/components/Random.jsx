function Random(props) {
  const randomNumber = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div className="box">
      <>
        Random value between {props.min} and {props.max} ={">"} {randomNumber}
      </>
    </div>
  );
}

export default Random;
