
exports.up = function(knex, Promise) {
  return knex.schema.createTable('station_queues', table=>{
    table.increments()
    table.integer('station_id')
    table.integer('project_id')
    table.integer('station_priority')
    table.boolean('complete').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('station_queues')
};
