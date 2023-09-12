'use client'

import styled from "styled-components"
import Image from 'next/image'
import { ReactNode } from "react";
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { isOnAir, renderHumanTime } from "@/app/utils";
import Link from "next/link";

  const EntryWrapper = styled.div`
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

  const EntryLogoWrapper = styled.div`
    border-radius: 5px;
    height: 60px;
    width: 60px;
    overflow: hidden;
  `
  const EntryInfoContainer = styled.div`
    padding: 0px;
  `
  const EntryInfoHour = styled.span<{isOnAir: boolean}>`
    font-size: 18px;
    display: grid;
    place-items: center;
    justify-content: center;
    height: 60px;
    color: ${props => props.isOnAir ? '#848484' : 'green' };
    font-weight: 300;
  `
  const EntryInfoDescription = styled.h1`
    font-size: 14px;
    font-weight: 400;
  `
  const EntryInfoClass = styled.span`
    color: #848484;
    font-weight: 300;
    font-size:14px;
  `

  const Tag = styled.span<{ liveTag?: boolean}>`
    padding:3px;
    font-size: 12px;
    border-radius:3px;
    color: white;
    background-color: ${ props => props.liveTag ? 'red' : '#C1C1C1'};
    text-transform: uppercase;
    font-weight: 700;
    margin: 2px;
  `

  const program: Entry[] = [{
    id: 10,
    date: "2023-08-10",
    title: "Encontro Com Patrícia Poeta",
    description: "Patrícia Poeta comanda o programa que mistura comportamento, prestação de serviço, informação, música, entretenimento e muita diversão.",
    imageUrl: "https://stgguiaftaprod.blob.core.windows.net/stgguiaftapublic/Imagens%5CImagem%5C18022.jpg",
    logoUrl: "https://stgguiaftaprod.blob.core.windows.net/stgguiaftapublic/Imagens%5CLogo%5C15422.jpg",
    urlPrograma: "http://globo.com",
    video: "HD",
    classe: "Variedade",
    startTime: 1691670600,
    endTime: 1691674499,
    liveBroadcast: true,
    durationInMinutes: 64
  }];

  
 
  const  Entry =  ()  => {

    const renderEntryLogo = (logoUrl: string, title: string) => {
        return (
                <Image src={logoUrl} alt={title} width={60} height={60} />
        )
      }

    

    return (
        program.map(
            (program, index) => { 

                const programDescription = (

                    <EntryInfoDescription>

                        {program.liveBroadcast ? <Tag liveTag>• AO VIVO</Tag> : null }
                        {program.video ? <Tag>HD</Tag> : null}
                        {program.durationInMinutes ? <Tag>{program.durationInMinutes + 'min'}</Tag> : null}
                        <br/>
                        {program.description}
                        <br/>
                        {program.urlPrograma? <Link href={program.urlPrograma}>acessar site</Link> : null}


                        
                        
                    </EntryInfoDescription>
                    
                )

                const items: CollapseProps['items'] = [
                    {
                      key: index,
                      label: program.title,
                      children: programDescription,
                    },]
    
                return(
                    <EntryWrapper key={index}>
                        <EntryInfoHour isOnAir={!isOnAir(program.startTime, program.endTime)}>{isOnAir(program.startTime, program.endTime) ? 'AGORA' : renderHumanTime(program.startTime) }</EntryInfoHour>
                        <EntryLogoWrapper>
                            {renderEntryLogo(program.logoUrl, program.title)}
                        </EntryLogoWrapper>
                        <EntryInfoContainer>
                            <EntryInfoClass>{program.classe}</EntryInfoClass>
                            <Collapse className="custom" items={items} bordered={false} expandIconPosition="end" defaultActiveKey={['1']} />
                        </EntryInfoContainer>
                    </EntryWrapper>
                    )
                }
        )

    )
  }

  export default Entry