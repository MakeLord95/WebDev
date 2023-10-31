function Greetings(props) {
  return (
    <div className="box">
      {props.lang === "de" && <>Hallo {props.children}</>}
      {props.lang === "en" && <>Hello {props.children}</>}
      {props.lang === "es" && <>Hola {props.children}</>}
      {props.lang === "fr" && <>Bonjour {props.children}</>}
    </div>
  );
}

export default Greetings;
