
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sequence', table=>{
    talbe.increments()
    table.integer('project_id').notNullable()
    talbe.integer('station_id').defaultTo(null)
    table.integer('department_id').notNullable()
    table.integer('sequence').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sequences')
};
