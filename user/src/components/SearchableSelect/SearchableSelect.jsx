import { AutoComplete } from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchableSelect = ({ options, onSelect, placeholder, value }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(value);

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (value) => {
    setSearchValue(value);
    // Tìm kiếm các station dựa trên từ khóa nhập vào
    const results = options.filter(station =>
      station.stationPoint.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelect = (value, option) => {
    setSelectedValue(value);
    onSelect(value, option);
    setSearchValue('');
    console.log('selectedValue: ', selectedValue);
    console.log('handleSelect: ', value);
  };

  return (
    <AutoComplete
      options={searchResults.map(station => ({ value: station.stationId, label: station.stationPoint }))}
      style={{ width: '100%' }}
      onSelect={handleSelect}
      onSearch={handleSearch}
      placeholder={placeholder}
      value={searchValue}
    />
  );
};


SearchableSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default SearchableSelect;
