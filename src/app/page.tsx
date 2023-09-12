'use client'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from "dayjs"
import DatePickerComponent from './components/DatePicker';
import Entry from './components/Entry';
import Button from 'antd/es/button';
import { useSearchParams } from 'next/navigation'

const PageWrapper = styled.div`
  max-width: 1100px;
  padding: 16px;
  margin: 0px auto;
  margin-top: 30px;
`

const Home = () => {


  const urlQuery = useSearchParams()
 
  const dateParam = urlQuery.get('date')


  
  const timestamp: any = new Date()
  const currentDay = dayjs.unix(timestamp/1000).format('YYYY-MM-DD')

  const date: string = !!dateParam ? dateParam : currentDay


  return (

  <PageWrapper>
    <Entry date={date}></Entry>
  </PageWrapper>
)}

export default Home;