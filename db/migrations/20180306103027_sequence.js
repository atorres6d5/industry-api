
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sequence', table=>{
    talbe.increments()
    table.integer('project_id').notNullable()
    talbe.integer('station_id').defaultTo(null)
    table.integer('department_id').notNullable()
    table.integer('sequence').notNullable()
    table.boolean('active').defaultTo(false)
    table.boolean('completed').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sequences')
};
