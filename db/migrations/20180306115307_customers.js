
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', table=>{
    table.increments()
    table.string('name')
    table.string('customer_type')
    table.string('location')
    table.string('phone')
    table.boolean('ITAR').defaultTo(false)
    table.string('person_of_contact').notNullable()
    table.string('delivery_location').notNullable()
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers')
};
