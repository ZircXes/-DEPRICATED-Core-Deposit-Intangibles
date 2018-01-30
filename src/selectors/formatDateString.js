export default function formatDateString(myDate) {
  var curDate = new Date(myDate);
  let dd = curDate.getDate();
  let mm = curDate.getMonth() + 1;
  let yyyy = curDate.getFullYear();
  return (yyyy.toString() + '-' + mm.toString() + '-' + dd.toString());
}