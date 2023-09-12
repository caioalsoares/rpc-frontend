import dayjs from "dayjs"

export const renderHumanTime = (timestamp: number) => {
    let hms = dayjs.unix(timestamp).format('HH:mm')

    return hms
}

export const renderDateToText = (date: string) => {
  require('dayjs/locale/pt')
  return dayjs(date).locale('pt').format('dddd, D [de] MMMM [de] YYYY')
}

export const isOnAir = (beginTimeStamp: number, endTimeStamp: number) : boolean => {
    const timeNow = Date.now()

    const isOnAir = timeNow >= beginTimeStamp*1000 && timeNow <= endTimeStamp*1000

    return isOnAir

}

export const sortArrayOfObjects = (arr: Entry[], propertyName: string, order = 'ascending') => {
    const sortedArr = arr.sort((a: any, b: any) => {
      if (a[propertyName] < b[propertyName]) {
        return -1;
      }
      if (a[propertyName] > b[propertyName]) {
        return 1;
      }
      return 0;
    });
  
    if (order === 'descending') {
      return sortedArr.reverse();
    }
  
    return sortedArr;
  };

  export const fetchProgramme = async (date: string) => {
          
        const fetchProgramme =  await fetch(`https://rpc-back.onrender.com/?date=${date}`)
        const programmeJson: Entry[]= await fetchProgramme.json()

        return sortArrayOfObjects(programmeJson, "start_time")
      }