
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sequence').del()
    .then(function () {
      // Inserts seed entries
      return knex('sequence').insert([
        {
          id: 1,
          project_id: 1,
          department_id:1,
          sequence:1,
          active:true,
          completed:false
        },
        {
          id: 2,
          project_id: 2,
          department_id:1,
          sequence:2,
          active:true,
          completed:false
        },
        {
          id: 3,
          project_id: 3,
          department_id:1,
          sequence:3,
          active:true,
          completed:false
        }
      ])
      .then(() => {
        return knex.raw(`SELECT setval('sequence_id_seq', (SELECT MAX(id) FROM sequence));`);
      })
    })
};
