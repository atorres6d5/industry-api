
exports.up = function(knex, Promise) {
  return knex.schema.crearteTable('station', table=>{
    table.increments()
    table.string('station_name').notNullable()
    table.string('station_type').defaultTo(null)
    table.integer('department_id').notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('station')
};
