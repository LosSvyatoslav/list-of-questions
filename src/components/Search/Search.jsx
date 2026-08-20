import { useContext } from 'react';
import searchIcon from '../../logos and images/search.svg'


import "./Search.css";
import { QuestionsContext } from '../context/QuestionsContext';

const Search = () => {
  const { searchValue, setSearchValue, handlePageClick } = useContext(QuestionsContext);

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    handlePageClick(1);
  }
  
  return (
    <div className="filters__search">
      <img className="search__icon" src={searchIcon} alt="search icon" />
      <input
        aria-label='Поиск вопросов'
        value={searchValue}
        onChange={handleSearch}
        type="text"
        className="search__input"
        placeholder="Введите запрос..."
      />
    </div>
  );
};

export default Search;
