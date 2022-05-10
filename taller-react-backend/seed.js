const fs = require('fs/promises');
const Chance = require('chance');

const chance = new Chance();

async function main() {
  const people = [];

  for (let i = 0; i < 1000; i++) {
    people.push({
      id: chance.guid(),
      name: chance.name(),
      age: chance.age(),
      gender: chance.weighted(
        ['Male', 'Female', 'Trans', 'Nonbinary'],
        [100, 100, 20, 10]
      ),
      birthday: chance.birthday(),
      phone: chance.phone(),
      email: chance.email(),
      country: chance.country({ full: true }),
      profession: chance.profession(),
    });
  }

  people.push({
    id: chance.guid(),
    name: 'Berto Yáñez',
    age: 45,
    gender: 'Male',
    birthday: '1976-09-02T05:07:43.397Z',
    phone: '(+ 34) 912 44 91 91',
    email: 'berto.yanez.gomez@hackaboss.com',
    country: 'Spain',
    profession: 'Web developer',
  });

  await fs.writeFile('./people.json', JSON.stringify(people, null, 4));
}

main().catch((e) => console.error(e));
