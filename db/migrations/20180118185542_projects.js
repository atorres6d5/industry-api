
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', table=>{
    table.increments()
    table.integer('parent_project_id').defaultTo(null)
    table.integer('customer_id').notNullable()
    table.date('due_date').notNullable()
    table.integer('Part_count').notNullable().defaultTo(10)
    table.integer('Part_No').notNullable()
    table.integer('Parts_made').notNullable().defaultTo(0)
    table.integer('Parts_issued').notNullable()
    table.integer('total_labor_hours').notNullable().defaultTo(0)
    table.integer('scrap_parts').defaultTo(0)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
