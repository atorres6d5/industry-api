exports.seed = function (knex, Promise) {
  let tableOrder = ['users', 'customers', 'projects', 'clock_data', 'sequence']

  let promiseList = tableOrder.map(table => {
    return knex(table).del()
  })

  Promise.all(promiseList)
    .then(() => {
      console.log('Table data expunged')
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
}
