import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          {friend.isOnline ? (
            <span className={css.online}></span>
          ) : (
            <span className={css.offline}></span>
          )}
          <img className={css.avatar} src={friend.avatar} alt="" width={48} />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
