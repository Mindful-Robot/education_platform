import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Heading from '../components/homepage/Heading';
import Categories from '../components/homepage/Categories';

import classes from './Homepage.module.css'


function Homepage() {
  return (
      <section>
          <Container fluid className={classes.frontpageContainer}>
            <Heading />
            <Categories />
          </Container>
      </section>
  );
}

export default Homepage;