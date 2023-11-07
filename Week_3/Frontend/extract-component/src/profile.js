export default function Profile(props) {
  return (
    <section className="profile">
      <h2>{props.name}</h2>
      <img
        className="avatar"
        src={props.imageUrl}
        alt={props.name}
        width={70}
        height={70}
      />

      <ul>
        <li>
          <b>Profession: </b> {props.profession}
        </li>
        <li>
          <b>Awards: {props.awardsCount} </b> {props.awards}
        </li>
        <li>
          <b>Discovered: </b>{" "}
          {props.discoveries.map((d) => (
            <>{d}</>
          ))}
        </li>
      </ul>
    </section>
  );
}
