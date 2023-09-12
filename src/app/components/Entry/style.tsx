'use client'
import { styled } from "styled-components"

export const EntryWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 16px;
    border-bottom: 1px solid #e1e1e1;
    padding: 16px 0px 16px 0px;

    .custom {
        .ant-collapse-header {
            font-size: 18px;
            font-weight: 600;
        }
        
        .ant-collapse-content-box, .ant-collapse, .ant-collapse-item, .ant-collapse-header  {
            padding: 0;
            background-color: white;
   }
}

  `

export  const EntryLogoWrapper = styled.div`
    border-radius: 5px;
    height: 60px;
    width: 60px;
    overflow: hidden;
  `
 export  const EntryInfoContainer = styled.div`
    padding: 0px;
  `
 export  const EntryInfoHour = styled.span<{$isOnAir: boolean}>`
    font-size: 18px;
    display: grid;
    place-items: center;
    justify-content: center;
    height: 60px;
    color: ${props => props.$isOnAir ? '#848484' : 'green' };
    font-weight: 300;
  `
 export  const EntryInfoDescription = styled.h1`
    font-size: 14px;
    font-weight: 400;
  `
 export  const EntryInfoClass = styled.span`
    color: #848484;
    font-weight: 300;
    font-size:14px;
  `

export  const Tag = styled.span<{ $liveTag?: boolean}>`
    padding:3px;
    font-size: 12px;
    border-radius:3px;
    color: white;
    background-color: ${ props => props.$liveTag ? 'red' : '#C1C1C1'};
    text-transform: uppercase;
    font-weight: 700;
    margin: 2px;
  `