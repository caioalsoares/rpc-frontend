'use client'
import { renderDateToText } from '@/app/utils';
import { Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import dayjs from "dayjs"


const DatePickerComponentWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap:10px;
`

const DateWrapper = styled.div`
    display: grid;
    justify-content: center;
    font-weight: 600;
    color: #2e314a;

`
interface DatePickerProps {
    date: string
}


const DatePickerComponent = (props: DatePickerProps) => {

    const dayBefore = dayjs(props.date).subtract(1, 'day').format('YYYY-MM-DD')
    const dayBeforeLink = `/?date=${dayBefore}`

    const dayAfter = dayjs(props.date).add(1, 'day').format('YYYY-MM-DD')
    const dayAfterLink = `/?date=${dayAfter}`


    return (
        <DatePickerComponentWrapper>
        <Link href={dayBeforeLink}><Button type="primary" ghost>anterior</Button></Link>
        <DateWrapper>{renderDateToText(props.date)}</DateWrapper>
        <Link href={dayAfterLink}><Button type="primary" ghost>proximo</Button></Link>
        </DatePickerComponentWrapper>
    )
}

export default DatePickerComponent