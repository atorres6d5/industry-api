exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del().then(function() {
    // Inserts seed entries
    return knex('projects').insert([
      {
        id: 1,
        customer_id: 1,
        due_date: '1/11/2019',
        Part_count: 28,
        Part_No:567,
        Parts_issued:28
      }, {
        id: 2,
        customer_id: 1,
        due_date: '3/21/2018',
        Part_count: 50,
        Part_No:569,
        Parts_issued:50
      }, {
        id: 3,
        customer_id: 2,
        due_date: '11/17/2018',
        Part_count: 100,
        Part_No:2365,
        Parts_issued:100
      }, {
        id: 4,
        customer_id: 3,
        due_date: '03/06/18',
        Part_count: 16,
        Part_No:789,
        Parts_issued:16
      },{
        id: 5,
        customer_id: 4,
        due_date: '03/06/19',
        Part_count: 16,
        Part_No:902,
        Parts_issued:16
      },{
        id: 6,
        customer_id: 4,
        due_date: '04/18/18',
        Part_count: 16,
        Part_No:153,
        Parts_issued:16
      },{
        id: 7,
        customer_id: 4,
        due_date: '03/06/18',
        Part_count: 16,
        Part_No:653,
        Parts_issued:16
      },{
        id: 8,
        customer_id: 5,
        due_date: '03/06/18',
        Part_count: 16,
        Part_No:572,
        Parts_issued:10
      },{
        id: 9,
        customer_id: 5,
        due_date: '03/29/20',
        Part_count: 16,
        Part_No:711,
        Parts_issued:16
      },{
        id: 10,
        customer_id: 4,
        due_date: '11/12/19',
        Part_count: 15,
        Part_No:110,
        Parts_issued:15
      },{
        id: 11,
        customer_id: 5,
        due_date: '01/01/19',
        Part_count: 10,
        Part_No:220,
        Parts_issued:10
      },{
        id: 12,
        customer_id: 5,
        due_date: '12/18/19',
        Part_count: 20,
        Part_No:490,
        Parts_issued:20
      },{
        id: 13,
        customer_id: 6,
        due_date: '06/30/18',
        Part_count: 16,
        Part_No:222,
        Parts_issued:16
      },{
        id: 14,
        customer_id: 6,
        due_date: '03/06/23',
        Part_count: 16,
        Part_No:789,
        Parts_issued:16
      }
    ]);
  }).then(() => {
    return knex.raw(`SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects));`);
  })
};
