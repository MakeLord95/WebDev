function Greeting(props) {
  console.log(props);

  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
      <p>{props.message}</p>
    </div>
  );
}

export default Greeting;
