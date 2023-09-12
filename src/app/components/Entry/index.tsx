
import Image from 'next/image'
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { fetchProgramme, isOnAir, renderHumanTime } from "@/app/utils";
import Link from "next/link";
import { EntryInfoClass, EntryInfoContainer, EntryInfoDescription, EntryInfoHour, EntryLogoWrapper, EntryWrapper, Tag } from "./style";
import DatePickerComponent from '../DatePicker';


  interface EntryProps {
    date: string
  }
 
  const  Entry =  async (props: EntryProps) => {

    const program: Entry[] = await fetchProgramme(props.date)

    const renderEntryLogo = (logoUrl: string, title: string) => {
        return (
                <Image src={logoUrl} alt={title} width={60} height={60} />
        )
      }

    

    const Entries = () => {
      return (
        program.map(
            (program, index) => { 

                const programDescription = (

                    <EntryInfoDescription>

                        {program.live_broadcast ? <Tag $liveTag>• AO VIVO</Tag> : null }
                        {program.video ? <Tag>HD</Tag> : null}
                        {program.duration_in_minutes ? <Tag>{program.duration_in_minutes + 'min'}</Tag> : null}
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
                        <EntryInfoHour $isOnAir={!isOnAir(program.start_time, program.end_time)}>{isOnAir(program.start_time, program.end_time) ? 'NO AR' : renderHumanTime(program.start_time) }</EntryInfoHour>
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
            
    )}
    

    return (
      <>
          <DatePickerComponent date={props.date}/>
          <Entries/>
      </>
    )
  }

  export default Entry