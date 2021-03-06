
exports.up = function(knex, Promise) {
  return knex.schema.createTable('labor_hours', table=>{
    table.increments()
    table.integer('Employee_id').notNullable()
    table.foreign('Employee_id').references('users.Employee_id')
    table.integer('project_seq_id').notNullable()
    // table.foreign('project_seq_id').references('sequence.id')
    table.string('hours_worked').defaultTo(null)
    table.integer('Parts_made').defaultTo(0)
    table.integer('Non_Conforming_Parts').defaultTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('labor_hours')
};
