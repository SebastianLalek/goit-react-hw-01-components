import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={css.item}>
      {isOnline ? (
        <span className={css.online}></span>
      ) : (
        <span className={css.offline}></span>
      )}
      <img className={css.avatar} src={avatar} alt="" width={48} />
      <p className={css.name}>{name}</p>
    </li>
  );
}
