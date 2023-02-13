
exports.myDate = () => {
    const birthday = new Date('2000-10-16')
    const day = birthday.getDate()
    const month = birthday.getMonth() + 1
    const year = birthday.getFullYear()
    return `${year}/${month}/${day}`;
}
