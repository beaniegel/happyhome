import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Button from './Button';

const Nav = styled.nav`
  display: inline-block;
  margin-bottom: 1rem;
  border: 1px solid #00c853;
`;

const WeekButton = styled(Button)`
  color: #212529;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 0;
  &:hover {
    color: #fff;
  }
`;

const WeekItem = styled.span`
  padding: 0.532rem 1rem;
  border-left: 1px solid #00c853;
  border-right: 1px solid #00c853;
`;

const WeekNav = props => {
  let week = '??';
  if (props.week) {
    week = moment(props.week).format('D MMMM');
  }

  return (
    <Nav aria-label="Week navigation">
      <WeekButton onClick={props.prev}>&laquo;</WeekButton>
      <WeekItem>Week of {week}</WeekItem>
      <WeekButton onClick={props.next}>&raquo;</WeekButton>
    </Nav>
  );
};

export default WeekNav;
