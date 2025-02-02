import PropTypes from 'prop-types';
import { SearchLabel, SearchInput } from './FilterStyled';

export const Filter = ({ value, onChange }) => (
  <SearchLabel>
    Find contacts by name
    <SearchInput type="text" value={value} onChange={onChange} />
  </SearchLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};