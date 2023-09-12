'use client'
import React from 'react';
import styled from 'styled-components';
import DatePickerComponent from './components/DatePicker';
import Entry from './components/Entry';

const PageWrapper = styled.div`
  max-width: 1100px;
  margin: 0px auto;
  margin-top: 30px;
`

const Home = () => (
  <PageWrapper>
    <DatePickerComponent/>
    <Entry></Entry>
  </PageWrapper>
);

export default Home;