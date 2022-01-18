export function getAge(dateString) {
  if (!dateString) return;
  let str = dateString.split("-");
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - str[2];
  var m = today.getMonth() - str[1];
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    return age--;
  }
  return age;
}
