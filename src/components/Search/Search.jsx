import { useContext } from 'react';
import searchIcon from '../../logos and images/search.svg'


import "./Search.css";
import { QuestionsContext } from '../context/QuestionsContext';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(QuestionsContext);
  
  return (
    <div className="filters__search">
      <img className="search__icon" src={searchIcon} alt="search icon" />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        className="search__input"
        placeholder="Введите запрос..."
      />
    </div>
  );
};

export default Search;
