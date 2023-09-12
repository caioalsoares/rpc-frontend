'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from "dayjs"
import DatePickerComponent from './components/DatePicker';
import Entry from './components/Entry';

const PageWrapper = styled.div`
  max-width: 1100px;
  padding: 16px;
  margin: 0px auto;
  margin-top: 30px;
`

const Home = () => {
  
  const timestamp: any = new Date()
  const currentDay = dayjs.unix(timestamp/1000).format('YYYY-MM-DD')

  const [date, setDate] = useState(currentDay)


  return (

  <PageWrapper>
    <DatePickerComponent />
    <Entry date={date}></Entry>
  </PageWrapper>
)}

export default Home;