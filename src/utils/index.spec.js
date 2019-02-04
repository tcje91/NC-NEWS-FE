const formatTimestamp = timestamp => {
    const [date, time] = timestamp.slice(0, -5).split("T")
    const [year, month, day] = date.split("-");
    const months = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return { date: `${months[Number(month)-1]} ${day} ${year}`, time }
};

let date = formatTimestamp("2018-05-30T16:59:13.000Z")

console.log(date.time, date.date)