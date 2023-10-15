import css from './statistics.module.css';

export default function Statistics({ title, children }) {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
}

export const Data = ({ stats }) => {
  return (
    <ul className={css.stat_list}>
      {stats.map(el => (
        <li key={el.id} className={css.item}>
          <p className={css.label}>{el.label}</p>
          <p className={css.percentage}>{el.percentage}%</p>
        </li>
      ))}
    </ul>
  );
};
