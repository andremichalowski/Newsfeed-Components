/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Andre Michalowski adds an Object to the array',
    date: 'Jan 1st, 2019',
    firstParagraph: `He might as well be Hodor. `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

/* Step 1: Create a function that creates a component. 
You will want your component to look like the template below: 


  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, 
  or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. 
  This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject 
  and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. 
  Refresh the page to see the new article.


*/

/* Step 1: Create a function that creates a component. 
You will want your component to look like the template below: */

//Create Function
function createArticle(title, date, firstParagraph, secondParagraph, thirdParagraph) {
 // 1. Create HTML markup:
  const constructorArticle = document.createElement('div');
  const constructorTitle = document.createElement('h2');
  const constructorDate = document.createElement('p');
  const constructorP1 = document.createElement('p');
  const constructorP2 = document.createElement('p');
  const constructorP3 = document.createElement('p');
  const constructorButton = document.createElement('span');

 // 2. Define HTML structure:
  constructorArticle.append(constructorTitle, constructorDate, constructorP1, constructorP2, constructorP3, constructorButton);

 // 3. Add some class names:
  constructorArticle.classList.add('article');
  constructorDate.classList.add('date');
  constructorButton.classList.add('expandButton');

// 4. Add some content!:
  constructorTitle.textContent = title;
  constructorDate.textContent = date;
  constructorP1.textContent = firstParagraph;
  constructorP2.textContent = secondParagraph;
  constructorP3.textContent = thirdParagraph;
  constructorButton.textContent = 'click here';
  // Step 2: Add an event listener to the expandButton span. 
  // This event listener should toggle the class 'article-open' on the 'article' div.
  constructorButton.addEventListener('click', e => {
    constructorArticle.classList.toggle('article-open');
  });

// // 
//5. >>> PROMPT DOES NOT SPECIFY CONSTRUCTOR SEE BELOW FUNCTION FOR ALTERNATIVE
//
//5. Create a new article:
//   // 1. Create HTML markup:
//     const newTitle = document.createElement('h2');
//     const newDate = document.createElement('p');
//     const newParagraph = document.createElement('p');
//   // 2. Define HTML structure:
//     constructorArticle.append(newTitle, newDate, newParagraph);
//   // 3. Add class:
//     newTitle.classList.add('article');
//     newDate.classList.add('date');
//   // 4. Add content:
//     newTitle.textContent = 'NewTitle';
//     newDate.textContent - 'Oct 30th 2019';
//     newParagraph.textContent = `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
//     wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
//     mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
//     and Parvati Sorting Hat Minister of Magic blue turban remember my last.`;



 
// 5. Return: 
//Step 3: return the entire component.
  return constructorArticle;
}




//-----Append Manual and Loop------
const body = document.querySelector('body');
console.log(body);
// Append Manual:
  // function appendbody() {
  //   body.append(createArticle('ttlEx', 'dateEx', 'cntnt1Ex', 'cntnt2Ex', 'cntnt3Ex'));
  // };
  // appendbody();

// Append Loop
  data.forEach((data => {
        body.append(createArticle(data.title, data.date, data.firstParagraph, data.secondParagraph, data.thirdParagraph));
      }))


  
// Step 4: Map over the data, creating a component for each object 
// and add each component to the DOM as children of the 'articles' div.
      //Training kit setting up a new array with map.
          // 
          // let newComponents = data.map((arrayItem) => {
          //   let newButton = buttonCreator(arrayItem);
          
          //   // Remember, we always need to return something when we use .map
          //   return newButton;
          // });
      // ...continued.
          //
          // newComponents.forEach(component => {
          //   parent.appendChild(component);
          // });

const mapContainer = document.querySelector('.articles');
data.map((item) => {
  console.log('The main box is being built');
  console.log(mapContainer);
  mapContainer.appendChild(createArticle(item.title, item.date, item.firstParagraph, item.secondParagraph, item.thirdParagraph));
});

// ????????????QUESTION FOR PETAR... HOW DO I FILL THIS WITH ACTUALLY NEW/USEFUL INFORMATION


// Step 5: Add a new article to the array. Make sure it is in the same format as the others. 
// Refresh the page to see the new article.
      //see inside of the constructor function

//       function newArticle () {
//         data.push({
//         title: "Hello",
//         date: "30-09-2019",
//         firstParagraph: "Interesting Information!",
//         secondParagraph: "Other interesting info",
//         thirdParagraph: "Ok...",
//       });
//       console.log('hello');
//     };

// newArticle();

///...???????????QUESTION FOR PETAR.. How do I add a new article...?
    
 













  // //-----Luis
  // function createCard(title, subtitle, content, imgsrc) {
  //   const card = document.createElement('div');
  //   const image = document.createElement('img');
  //   const name = document.createElement('h2');
  //   const sub = document.createElement('p');
  //   const description = document.createElement('p');
  
  //   card.append(image);
  //   card.append(name);
  //   card.append(sub);
  //   card.append(description);
  // /   // 2- Define HTML structure
  //   card.append(cardImg, cardH2, cardP1, cardP2);
  
  //   card.classList.add('card');
  //   sub.classList.add('subtitle');
  //   description.classList.add('desc');
  
  //   name.textContent = title;
  //   image.src = imgsrc;
  //   sub.textContent = subtitle;
  //   description.textContent = content;
  
  //   return card;
  // }
  //   //--Append manual and loop--//
  //   const container = document.querySelector('.container');
  //   // //Append manual
  //   container.append(createCard("Octavius Kraken", "Escape Artist", "Super Powers: can shape-shift, instantly change color, communicate using light displays generated on his skin, taste things by touching them, squirt ink and use tools", "https://images.unsplash.com/photo-1564261331932-ea97c182f705?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" ))
  //   container.append(createCard("Another", "Anoter", "Sanother", "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"))
  //   //forEachMethod
  //   cardData.forEach((card => {
  //     container.append(createCard(card.title, card.subtitle, card.content, card.imgsrc));
  //   }))
