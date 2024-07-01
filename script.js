document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', async () => {
    const data = await getSpreadsheetData(
      '1e6tvb7idrP-T-FFmdb33U2BZtR_ll2jq3HjGN9ZlAh8',
      'pozwolenia'
    )
    console.log(data)
    // const url =
    //   'https://script.google.com/macros/s/AKfycbynDvgOlwDQwFqdvFYxKs6BVEZG76ElvDa5QpgDt94qY3c31LKLCJyQAkj1iCxciAc/exec'
    // const obj = {
    //   fullName: 'DUBAL SERHII',
    //   item: 'Deszczowka',
    //   date: '16.02.2022',
    //   price: 55,
    // }
    //   const params = {
    //     method: 'POST',
    //     body: JSON.stringify(obj),
    //   }
    //   fetch(url, params)
    //     .then((res) => res.text())
    //     .then((res) => console.log(JSON.parse(res)))
  })
})

async function getSpreadsheetData(id, sheet) {
  const response = await fetch(
    `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${sheet}`
  )
  const csvText = await response.text()
  return csvToObjects(csvText)
}

function csvToObjects(csv) {
  const csvRows = csv.split('\n')
  const headers = csvSplit(csvRows.shift())
  return csvRows.map((v) => {
    const row = csvSplit(v)
    const obj = new Object()
    for (const r in row) obj[headers[r]] = row[r]
    return obj
  })
}

function csvSplit(row) {
  return row.split(',').map((v) => v.substring(1, v.length - 1))
}
