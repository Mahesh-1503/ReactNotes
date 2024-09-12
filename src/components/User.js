import PropTypes from 'prop-types';

const User = ({ name, age, isStudent }) => (
  <div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Student: {isStudent ? 'Yes' : 'No'}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isStudent: PropTypes.bool
};

export default User;