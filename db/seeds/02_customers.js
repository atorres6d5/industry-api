
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          id: 1,
          name: 'ACME',
          customer_type: "Aerospace",
          location:'123 some address',
          phone:"555-555-5555",
          ITAR:true,
          person_of_contact:'Jenny',
          delivery_location: 'some address'
        },{
          id: 2,
          name: 'ABC Company',
          customer_type:'Education',
          location:'some place, in some building',
          phone:'111-111-1111',
          ITAR:false,
          person_of_contact:"Puckett",
          delivery_location:"in the thing on the thing"
        },{
          id: 3,
          name: 'Mfg Corp',
          customer_type:'all types',
          location: "mom's basement",
          phone:'222-222-2222',
          ITAR:false,
          person_of_contact:'Rew',
          delivery_location: "back door of moms house"
        },{
          id:4,
          name:'Big Box',
          customer_type:"the kind that sells stuff",
          location:"in the wheel in the sky",
          phone:"888-888-8888",
          ITAR: false,
          person_of_contact:'Jack',
          delivery_location:"jack-in-the-box"
        },{
          id:5,
          name: "Kwik-E-Mart",
          customer_type: "store front",
          location: "Springfield",
          phone:"777-777-7777",
          ITAR:true,
          person_of_contact:"Apu",
          delivery_location:" at the market"
        },{
          id:6,
          name: 'Batman',
          customer_type:"Defence",
          location:'under parents house in a cave',
          phone:"uses bat signal",
          ITAR:true,
          person_of_contact:"Alfred",
          delivery_location:"Wayne Manor"
        }
      ])
      .then(() => {
        return knex.raw(`SELECT setval('customers_id_seq', (SELECT MAX(id) FROM customers));`);
      })
    });
};
