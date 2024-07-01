const url =
  'https://script.google.com/macros/s/AKfycbynDvgOlwDQwFqdvFYxKs6BVEZG76ElvDa5QpgDt94qY3c31LKLCJyQAkj1iCxciAc/exec'
const obj = {
  fullName: 'DUBAL SERHII',
  item: 'Deszczowka',
  date: '16.02.2022',
  price: 55,
}
function clickButton() {
  const params = {
    method: 'POST',
    body: JSON.stringify(obj),
  }
  fetch(url, params)
    .then((res) => res.text())
    .then((res) => console.log(JSON.parse(res)))
}
