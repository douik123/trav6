var obj1 = {
  better: 'better',
  call: 'call',
  it:'it',
  soup:'soup'
};
var obj2 = {
  red:'raphael',
  orange:'michael',
  blue:'leonardo',
  purple:'tagiatello'
};

var obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
const tab1 = ['good','morning','ahmed'];
const tab2 = ['how','are','you'];
const tab3 = tab1.concat(tab2);
console.log(tab3);
console.log(tab3.join());
const geraltAndThegirls = ['Ciri', 'Geralt of Rivia', 'Triss Merigold', 'Yennefer'];
if(geraltAndThegirls.includes('Geralt of Rivia')) {
    console.log('Good you found Geralt');
  }
  const doesItContainsCat = ['Dog', 'Cat', 'Fish'];
if(doesItContainsCat.includes('Cat')) {
    console.log('What a suprize!');
  }
  const ItAlsoWorkOnString = 'I can’t believe we’re at Hogwarts! No, that’s Buckingham Palace.'
  if(ItAlsoWorkOnString.includes('Hogwarts')) {
    console.log('oui cette phrase inclut hogwarts');
  }
     let sayhello=() => 'Hello ' + name;

let addition = (a, b) => a + b;
   console.log(addition(100,50));