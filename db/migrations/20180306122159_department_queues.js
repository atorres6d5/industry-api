
exports.up = function(knex, Promise) {
  return knex.schema.createTable('department_queues', table=>{
    table.increments()
    table.integer('department_id').notNullable()
    table.integer('project_id').notNullable()
    table.integer('priority').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('department_queues')
};
