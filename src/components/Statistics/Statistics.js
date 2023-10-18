import css from './statistics.module.css';

import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}

      <ul className={css['stat-list']}>
        {stats.map(el => (
          <li key={el.id} className={css.item}>
            <p className={css.label}>{el.label}</p>
            <p className={css.percentage}>{el.percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
