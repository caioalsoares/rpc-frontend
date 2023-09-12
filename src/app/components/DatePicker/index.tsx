'use client'
import { Button, DatePicker } from 'antd';
import styled from 'styled-components';

const DatePickerComponentWrapper = styled.div`
    grid-template-columns: inline;
    gap:10px;
`

const DatePickerComponent = () => {
    return (
        <DatePickerComponentWrapper>
        <Button type="primary">anterior</Button>
        <DatePicker placeholder=''/>
        <Button type="primary">proximo</Button>
        </DatePickerComponentWrapper>
    )
}

export default DatePickerComponent