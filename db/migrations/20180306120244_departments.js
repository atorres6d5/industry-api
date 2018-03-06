
exports.up = function(knex, Promise) {
  return knex.schema.crearteTable('departments', table=>{
    table.increments()
    table.string('name')
    table.integer('Employee_id_1st_shift_lead').defaultTo(null)
    table.integer('Employee_id_2nd_shift_lead').defaultTo(null)
  })
};

exports.down = function(knex, Promise) {

};
