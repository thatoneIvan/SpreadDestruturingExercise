// 1a
const mcuShows = ["Loki", "Moon Knight"];
console.log(mcuShows);

// 1b
const starWarsShows = ["The Mandolorian","The Book of Boba Fett"];
console.log(starWarsShows);

// 1c
const disneyPlusShows = [...mcuShows, ...starWarsShows, "The Beatles:Get Back"];

// 1d
console.log(disneyPlusShows);
/*
Loki',
'Moon Knight',
'The Mandolorian',
'The Book of Boba Fett',
'The Beatles:Get Back'
*/

// 2a
const netflixMovies = {
    action: `Extraction`,
    crime: `The Irishman`
};

// 2b
const amazonPrimeMovies = {
    action: `The Tomorrow War`,
    drama: `One Night in Miami`
};

// 2c
const streamingMovies = { ...amazonPrimeMovies,...netflixMovies, musical:"Hamilton"};

// 2d
console.log(streamingMovies);

// 3a
const disneyJunior = [
    `Mickey Mouse Clubhouse`, 
    `Spidey and His Amazing Friends`
];

// 3b (line)
const [Mickey, Spidey] = disneyJunior;

// 3c 
console.log(Mickey,Spidey);

// 4a (destructuring.js line 60)
const Avengers = {
    warMachine: `James Rhodes`,
    theHulk: `Bruce Banner`
};

// 4b (uses {} since it uses the keyword) to a value

const {warMachine, theHulk} = Avengers;

// 4c
console.log(warMachine, theHulk);

// 4d
const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkEye: `Clint Barton`,
    ironMan: `Tony Stark`
};
// 4e
const {blackWidow: nat,...others} = moreAvengers;

// 4f
console.log(nat, others);


// BOnUS

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

// 5a 
// const {first,second ,third } = bonus;
// const all =[...first,...second,...third];
//console.log(all);

// OR
const all = [
    ...bonus.first,
    ...bonus.second,
    ...bonus.third
];
console.log(all);

// 5b

//const [one, two, three, four, five, six, seven, eight, nine ] = all;

// another example
const [one, two, three] = bonus.first;
const [four, five, six] = bonus.second;
const [seven, eight, nine] = bonus.third;

console.log(one, two, three, four, five, six, seven, eight, nine );

