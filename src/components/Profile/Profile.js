import css from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="user avatar" className={css.avatar} />

        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <p className={css.label}>Followers</p>
          <p className={css.quantity}>{stats.followers}</p>
        </li>
        <li>
          <p className={css.label}>Views</p>
          <p className={css.quantity}>{stats.views}</p>
        </li>
        <li>
          <p className={css.label}>Likes</p>
          <p className={css.quantity}>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
}
