export default function Profile(props) {
  return (
    <figure className="profile">
      <img src={props.avatar} alt="user avatar" className="avatar" />
      <figcaption>
        <h2 className="name">{props.username}</h2>
        <p className="tag">{props.tag}</p>
        <p className="location">{props.location}</p>
      </figcaption>
    </figure>
  );
}
