// Exemple 1

/*const person = {
  name: 'Alex',
  email: "alex.pop@gmail.com",
  age: 45,
  company: {
    companyName: "Google",
    expYears: 10
  }
};

const person2 = {
  name: 'Maria',
  email: "mariaaaaa@gmail.com",
  age: 35,
  company: {
    companyName: "Meta",
    expYears: 5
  }
};

// const name = person.name;
// const email = person.email;
// const age = person.age;
// const company = person.company;

const { name, email, age, company: { companyName } } = person;

// console.log(companyName);
// console.log(company); // WRONG!!!

function displayPersonJobMessage({ name, company: { companyName } }) {
  console.log(`${name} lucreaza la ${companyName}`);
}

displayPersonJobMessage(person);
displayPersonJobMessage(person2);*/

// Example 2
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308