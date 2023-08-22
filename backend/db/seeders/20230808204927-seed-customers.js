'use strict';

let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Customers';
    return queryInterface.bulkInsert(options, [
      {
        firstName: "Marvin",
        lastName: "Solomon",
        phone: "804-000-0001",
        street: "4904 W GRACE STREET",
        city: "RICHMOND",
        state: "VA",
        zip: "23230",
        location: '{"lat": 37.577890, "lng": -77.497530}'
      },
      {
        firstName: "Marissa",
        lastName: "Rice",
        phone: "804-000-0002",
        street: "807 OLIVER HILL WY",
        city: "RICHMOND",
        state: "VA",
        zip: "23219",
        location: '{"lat": 37.539750, "lng": -77.423490}'
      },
      {
        firstName: "Susan",
        lastName: "Bird",
        phone: "804-000-0003",
        street: "1500 E LABURNUM AVE",
        city: "RICHMOND",
        state: "VA",
        zip: "23222",
        location: '{"lat": 37.581450, "lng": -77.406450}'
      },
      {
        firstName: "Les",
        lastName: "Pruitt",
        phone: "804-000-0004",
        street: "2101 PARK LN",
        city: "RICHMOND",
        state: "VA",
        zip: "23230",
        location: '{"lat": 37.587920, "lng": -77.492230}'
      },
      {
        firstName: "Mattie",
        lastName: "Valenzuela",
        phone: "804-000-0005",
        street: "919 E MAIN ST",
        city: "RICHMOND",
        state: "VA",
        zip: "23219",
        location: '{"lat": 37.537580, "lng": -77.435940}'
      },
      {
        firstName: "Kenton",
        lastName: "Aguirre",
        phone: "804-000-0006",
        street: "4001 OLD WARWICK RD",
        city: "RICHMOND",
        state: "VA",
        zip: "23234",
        location: '{"lat": 37.476790, "lng": -77.470540}'
      },
      {
        firstName: "Ward",
        lastName: "Parker",
        phone: "804-000-0007",
        street: "2838 FAIRFIELD AVE",
        city: "RICHMOND",
        state: "VA",
        zip: "23223",
        location: '{"lat": 37.550670, "lng": -77.397790}'
      },
      {
        firstName: "Natalie",
        lastName: "Irwin",
        phone: "804-000-0008",
        street: "2139 CREIGHTON RD",
        city: "RICHMOND",
        state: "VA",
        zip: "23223",
        location: '{"lat": 37.544970, "lng": -77.397730}'
      },
      {
        firstName: "Alfreda",
        lastName: "Everett",
        phone: "804-000-0009",
        street: "677 N LABURNUM AVE",
        city: "RICHMOND",
        state: "VA",
        zip: "23223",
        location: '{"lat": 37.552090, "lng": -77.366520}'
      },
      {
        firstName: "Lonnie",
        lastName: "Mcbride",
        phone: "804-000-0010",
        street: "14700 MIDSHIP WOODS CT",
        city: "CHESTERFIELD",
        state: "VA",
        zip: "23832",
        location: '{"lat": 37.397020, "lng": -77.684220}'
      },
      {
        firstName: "Garfield",
        lastName: "Boyle",
        phone: "804-000-0011",
        street: "11800 COALBORO RD",
        city: "CHESTERFIELD",
        state: "VA",
        zip: "23838",
        location: '{"lat": 37.340960, "lng": -77.732940}'
      },
      {
        firstName: "Buster",
        lastName: "Alexander",
        phone: "804-000-0012",
        street: "7300 BEACH RD",
        city: "CHESTERFIELD",
        state: "VA",
        zip: "23838",
        location: '{"lat": 37.370660, "lng": -77.512180}'
      },
      {
        firstName: "Frances",
        lastName: "Cuevas",
        phone: "804-000-0013",
        street: "6701 MASADA DR",
        city: "CHESTERFIELD",
        state: "VA",
        zip: "23832",
        location: '{"lat": 37.318990, "lng": -77.493270}'
      },
      {
        firstName: "Bradly",
        lastName: "Raymond",
        phone: "804-000-0014",
        street: "7000 AMSTEL BLUFF WAY",
        city: "CHESTERFIELD",
        state: "VA",
        zip: "23838",
        location: '{"lat": 37.321730, "lng": -77.500510}'
      },
      {
        firstName: "Kraig",
        lastName: "Cooper",
        phone: "804-000-0015",
        street: "11600 EXPLORER DR",
        city: "MIDLOTHIAN",
        state: "VA",
        zip: "23114",
        location: '{"lat": 37.470020, "lng": -77.613200}'
      },
      {
        firstName: "Cruz",
        lastName: "Benjamin",
        phone: "804-000-0016",
        street: "14200 RIVERDOWNS SOUTH DR",
        city: "MIDLOTHIAN",
        state: "VA",
        zip: "23113",
        location: '{"lat": 37.545880, "lng": -77.667220}'
      },
      {
        firstName: "Polly",
        lastName: "Sims",
        phone: "804-000-0017",
        street: "13612 COBY WAY",
        city: "MIDLOTHIAN",
        state: "VA",
        zip: "23112",
        location: '{"lat": 37.410520, "lng": -77.642750}'
      },
      {
        firstName: "Jeromy",
        lastName: "Barton",
        phone: "804-000-0018",
        street: "6401 HARBOURSIDE DR",
        city: "MIDLOTHIAN",
        state: "VA",
        zip: "23112",
        location: '{"lat": 37.409010, "lng": -77.646490}'
      },
      {
        firstName: "Bernice",
        lastName: "Livingston",
        phone: "804-000-0019",
        street: "2001 OLD HUNDRED RD",
        city: "MIDLOTHIAN",
        state: "VA",
        zip: "23114",
        location: '{"lat": 37.477140, "lng": -77.685650}'
      },
      {
        firstName: "Miquel",
        lastName: "Craig",
        phone: "804-000-0020",
        street: "2500 HAVILAND DR",
        city: "HENRICO",
        state: "VA",
        zip: "23229",
        location: '{"lat": 37.625060, "lng": -77.561300}'
      },
      {
        firstName: "Isiah",
        lastName: "Blair",
        phone: "336-000-0001",
        street: "2000 GRIFFITH RD",
        city: "WINSTON SALEM",
        state: "NC",
        zip: "27103",
        location: '{"lat": 36.062560, "lng": -80.309980}'
      },
      {
        firstName: "Charmaine",
        lastName: "Reynolds",
        phone: "336-000-0002",
        street: "900 BRYANSPLACE RD",
        city: "WINSTON SALEM",
        state: "NC",
        zip: "27104",
        location: '{"lat": 36.103250, "lng": -80.346270}'
      },
      {
        firstName: "Dan",
        lastName: "Montes",
        phone: "336-000-0003",
        street: "500 PITTS ST",
        city: "WINSTON SALEM",
        state: "NC",
        zip: "27127",
        location: '{"lat": 36.084450, "lng": -80.235260}'
      },
      {
        firstName: "Junior",
        lastName: "Garrett",
        phone: "336-000-0004",
        street: "731 POLO RD",
        city: "WINSTON SALEM",
        state: "NC",
        zip: "27106",
        location: '{"lat": 36.140320, "lng": -80.269610}'
      },
      {
        firstName: "Julio",
        lastName: "Brooks",
        phone: "336-000-0005",
        street: "901 W END BLVD",
        city: "WINSTON SALEM",
        state: "NC",
        zip: "27101",
        location: '{"lat": 36.094240, "lng": -80.262380}'
      },
      {
        firstName: "Lynwood",
        lastName: "Case",
        phone: "336-000-0006",
        street: "4501 GREENFIELD WAY DR",
        city: "WINSTON SALEM",
        state: "NC",
        zip: "27103",
        location: '{"lat": 36.029700, "lng": -80.373770}'
      },
      {
        firstName: "Lynette",
        lastName: "Ewing",
        phone: "336-000-0007",
        street: "100 BIGELOW ST",
        city: "WINSTON SALEM",
        state: "NC",
        zip: "27106",
        location: '{"lat": 36.306310, "lng": -79.388510}'
      },
      {
        firstName: "Janelle",
        lastName: "Mccarthy",
        phone: "336-000-0008",
        street: "3500 LAMBETH ST",
        city: "WINSTON SALEM",
        state: "NC",
        zip: "27107",
        location: '{"lat": 36.052700, "lng": -80.222970}'
      },
      {
        firstName: "Abe",
        lastName: "Leon",
        phone: "336-000-0009",
        street: "200 BROOKE DR",
        city: "WINSTON SALEM",
        state: "NC",
        zip: "27107",
        location: '{"lat": 35.975070, "lng": -80.142550}'
      },
      {
        firstName: "Paul",
        lastName: "Bowers",
        phone: "336-000-0010",
        street: "100 LAWNDALE DR",
        city: "WINSTON SALEM",
        state: "NC",
        zip: "27104",
        location: '{"lat": 36.097600, "lng": -80.299880}'
      },
      {
        firstName: "Tonya",
        lastName: "Macdonald",
        phone: "336-000-0011",
        street: "9700 CONCORD CHURCH RD",
        city: "LEWISVILLE",
        state: "NC",
        zip: "27023",
        location: '{"lat": 36.173610, "lng": -80.296420}'
      },
      {
        firstName: "Dario",
        lastName: "Ellison",
        phone: "336-000-0012",
        street: "9382 STYERS FERRY RD",
        city: "LEWISVILLE",
        state: "NC",
        zip: "27023",
        location: '{"lat": 36.065640, "lng": -80.445560}'
      },
      {
        firstName: "Cedrick",
        lastName: "Morales",
        phone: "336-000-0013",
        street: "100 CRESTWAY CT",
        city: "LEWISVILLE",
        state: "NC",
        zip: "27023",
        location: '{"lat": 36.110650, "lng": -80.432190}'
      },
      {
        firstName: "Dallas",
        lastName: "Berger",
        phone: "336-000-0014",
        street: "6400 LA GRANDE DR",
        city: "LEWISVILLE",
        state: "NC",
        zip: "27023",
        location: '{"lat": 36.095280, "lng": -80.416900}'
      },
      {
        firstName: "Amos",
        lastName: "Benitez",
        phone: "336-000-0015",
        street: "110 S CHERRY ST",
        city: "KERNERSVILLE",
        state: "NC",
        zip: "27284",
        location: '{"lat": 36.119980, "lng": -80.075090}'
      },
      {
        firstName: "Tammy",
        lastName: "Valencia",
        phone: "336-000-0016",
        street: "101 INDUSTRIAL WAY DR",
        city: "KERNERSVILLE",
        state: "NC",
        zip: "27284",
        location: '{"lat": 36.118040, "lng": -80.057510}'
      },
      {
        firstName: "Max",
        lastName: "Abbott",
        phone: "336-000-0017",
        street: "216 CENTURY BLVD",
        city: "KERNERSVILLE",
        state: "NC",
        zip: "27284",
        location: '{"lat": 36.108050, "lng": -80.093700}'
      },
      {
        firstName: "Rhett",
        lastName: "Knapp",
        phone: "336-000-0018",
        street: "6200 VANCE RD",
        city: "KERNERSVILLE",
        state: "NC",
        zip: "27284",
        location: '{"lat": 36.172860, "lng": -80.121850}'
      },
      {
        firstName: "Natasha",
        lastName: "Chaney",
        phone: "336-000-0019",
        street: "3500 VIENNA DOZIER RD",
        city: "PFAFFTOWN",
        state: "NC",
        zip: "27040",
        location: '{"lat": 36.166980, "lng": -80.414880}'
      },
      {
        firstName: "Rick",
        lastName: "Astley",
        phone: "336-000-0020",
        street: "6000 KAPP RD",
        city: "PFAFFTOWN",
        state: "NC",
        zip: "27040",
        location: '{"lat": 36.197070, "lng": -80.354920}'
      },
      {
        firstName: "Rick",
        lastName: "Astley",
        phone: "Nev-erG-onna",
        street: "Give You Up",
        city: "Never Gonna",
        state: "Let You Down",
        zip: "12345",
        location: '{"lat": 37.534280, "lng": -77.553110}'
      },
      {
        firstName: "Joshua",
        lastName: "Carter",
        phone: "804-685-4165",
        street: "314 GRANITE AVE",
        city: "RICHMOND",
        state: "VA",
        zip: "23226",
        location: '{"lat": 37.574330, "lng": -77.516490}'
      },
      {
        firstName: "Chad",
        lastName: "Schmidt",
        phone: "804-665-1565",
        street: "801 OLD DENNY ST",
        city: "RICHMOND",
        state: "VA",
        zip: "23231",
        location: '{"lat": 37.519630, "lng": -77.408280}'
      },
      {
        firstName: "Felicia",
        lastName: "Carroll",
        phone: "804-588-6451",
        street: "2500 DALE AVE",
        city: "RICHMOND",
        state: "VA",
        zip: "23234",
        location: '{"lat": 37.465230, "lng": -77.441070}'
      },
      {
        firstName: "Johnnie",
        lastName: "Daniel",
        phone: "804-415-5126",
        street: "5118 BENDING BRANCH DR",
        city: "RICHMOND",
        state: "VA",
        zip: "23223",
        location: '{"lat": 37.557320, "lng": -77.358330}'
      },
      {
        firstName: "Dallas",
        lastName: "Terry",
        phone: "804-985-5416",
        street: "800 N 33RD ST",
        city: "RICHMOND",
        state: "VA",
        zip: "23223",
        location: '{"lat": 37.531930, "lng": -77.407330}'
      },
      {
        firstName: "Ronald",
        lastName: "Powell",
        phone: "804-845-5412",
        street: "5600 WAINWRIGHT DR",
        city: "RICHMOND",
        state: "VA",
        zip: "23225",
        location: '{"lat": 37.514790, "lng": -77.504080}'
      },
      {
        firstName: "Jan",
        lastName: "Young",
        phone: "804-512-9856",
        street: "6001 LAVETA DR",
        city: "RICHMOND",
        state: "VA",
        zip: "23225",
        location: '{"lat": 37.50893888647064, "lng": -77.50777829553792}'
      },
      {
        firstName: "Isabel",
        lastName: "Johnson",
        phone: "757-521-3251",
        street: "11801 OLD WASHINGTON HWY",
        city: "GLEN ALLEN",
        state: "VA",
        zip: "23059",
        location: '{"lat": 37.690840, "lng": -77.497180}'
      },
      {
        firstName: "Sophie",
        lastName: "Clarke",
        phone: "804-126-6741",
        street: "10301 SANBET CT",
        city: "GLEN ALLEN",
        state: "VA",
        zip: "23060",
        location: '{"lat": 37.659500, "lng": -77.519350}'
      },
      {
        firstName: "Alejandro",
        lastName: "Gonzales",
        phone: "804-566-6516",
        street: "1101 PENNSYLVANIA AVE",
        city: "GLEN ALLEN",
        state: "VA",
        zip: "23060",
        location: '{"lat": 37.650860, "lng": -77.457460}'
      },
      {
        firstName: "Lydia",
        lastName: "Fisher",
        phone: "804-273-4795",
        street: "1401 TECHNOLOGY PARK DR",
        city: "GLEN ALLEN",
        state: "VA",
        zip: "23060",
        location: '{"lat": 37.667020, "lng": -77.454640}'
      },
      {
        firstName: "Thomas",
        lastName: "Bass",
        phone: "804-167-7219",
        street: "4100 SADLER RD",
        city: "GLEN ALLEN",
        state: "VA",
        zip: "23060",
        location: '{"lat": 37.650180, "lng": -77.587900}'
      },
      {
        firstName: "Lucy",
        lastName: "Dennis",
        phone: "804-985-8954",
        street: "5200 WOODCHUCK CT",
        city: "GLEN ALLEN",
        state: "VA",
        zip: "23060",
        location: '{"lat": 37.661260, "lng": -77.544870}'
      },
      {
        firstName: "Alan",
        lastName: "Ramos",
        phone: "804-574-9574",
        street: "13601 TIMBERLAKE CT",
        city: "MIDLOTHIAN",
        state: "VA",
        zip: "23114",
        location: '{"lat": 37.488400, "lng": -77.627150}'
      },
      {
        firstName: "Charles",
        lastName: "Williams",
        phone: "804-362-4655",
        street: "11401 MORAVIA RD",
        city: "MIDLOTHIAN",
        state: "VA",
        zip: "23112",
        location: '{"lat": 37.428960, "lng": -77.602020}'
      },
      {
        firstName: "Derek",
        lastName: "Willis",
        phone: "804-326-5412",
        street: "800 CHARTER COLONY PKWY",
        city: "MIDLOTHIAN",
        state: "VA",
        zip: "23114",
        location: '{"lat": 37.488900, "lng": -77.665420}'
      },
    ], options).catch((err) => {
      throw new Error(err);
    });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Customers';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      state: { [Op.in]: ['VA', 'NC'] }
    }, {});
  }
};
