export const renderHumanTime = (timestamp: number) => {
    var h: string | number = new Date(timestamp).getHours();
    var m: string | number= new Date(timestamp).getMinutes();

    h  = (h<10) ? '0' + h : h;
    m = (m<10) ? '0' + m : m;

    var output = h + ':' + m;

    return output
}

export const isOnAir = (beginTimeStamp: number, endTimeStamp: number) => {
    const timeNow = Date.now()

    const isOnAir = timeNow >= beginTimeStamp && timeNow <= endTimeStamp

    return isOnAir ? true : false

}