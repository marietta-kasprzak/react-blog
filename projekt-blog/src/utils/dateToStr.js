export const dateToStr = (date) => {
     console.log(date, date.toString(), date.getFullYear(), date.getMonth(), date.getDay())
     const day = date.getDay();
     const month = date.getMonth();
     const year = date.getFullYear();
     return `${getCorrectDateFormat(month)}/${getCorrectDateFormat(day)}/${year}`;  
}

const getCorrectDateFormat = (number) => {
    if (number<10) {
        return '0' + number}
        else {
            return number
        }
}

