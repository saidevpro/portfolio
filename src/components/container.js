import React from 'react';
import Styled from "@emotion/styled"
import PropTypes from 'prop-types';

const Container = Styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    max-width: 700px;
  }
  @media (min-width: 992px) {
    max-width: 750px;
  }
  @media (min-width: 1200px) {
    max-width: 770px;
  }
`;


Container.displayName = 'Container';

export default Container;
