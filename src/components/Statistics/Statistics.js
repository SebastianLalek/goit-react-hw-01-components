import css from './statistics.module.css';

import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}

      <ul className={css['stat-list']}>
        {stats.map(({ label, percentage, id }) => (
          <Data label={label} percentage={percentage} id={id} />
        ))}
      </ul>
    </section>
  );
}

const Data = ({ label, percentage, id }) => {
  return (
    <li key={id} className={css.item}>
      <p className={css.label}>{label}</p>
      <p className={css.percentage}>{percentage}%</p>
    </li>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

Data.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
