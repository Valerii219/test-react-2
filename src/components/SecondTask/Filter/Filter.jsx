import css from './Filter.module.css';
const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <label className={css.label}>
        {' '}
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </>
  );
};

export default Filter;
