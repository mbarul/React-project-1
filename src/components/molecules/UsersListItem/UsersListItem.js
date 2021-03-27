/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { Wrapper, StorageButton, StorageInfo } from './UsersListItem.styles';

const showIndex = (index) => alert(`This is student #${index + 1}`);

const UsersListItem = ({
  index,
  userData: { average, name, attendance = '0%' },
}) => (
  <Wrapper>
    <StorageButton value={average}>
      <div>{average}</div>
    </StorageButton>

    <StorageInfo>
      <p>{name}</p>
      <p>{attendance}</p>
    </StorageInfo>
    <Button onClick={() => showIndex(index)}></Button>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
