export function parseTime(strTime) {
  var newDate = new Date()
  newDate.setTime(Date.parse(strTime))
  var year = newDate.getFullYear()
  var month = newDate.getMonth()
  month = month < 10 ? '0' + month : month
  var day = newDate.getDay()
  day = day < 10 ? '0' + day : day
  var hour = newDate.getHours()
  hour = hour < 10 ? '0' + hour : hour
  var minute = newDate.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  var second = newDate.getSeconds()
  second = second < 10 ? '0' + second : second
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
}
