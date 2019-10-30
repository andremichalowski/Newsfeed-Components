// const cardData = [
//     {
//       title: "Octavius Kraken",
//       subtitle: "Escape Artist",
//       content: "Super Powers: can shape-shift, instantly change color, communicate using light displays generated on his skin, taste things by touching them, squirt ink and use tools",
//       imgsrc: "https://images.unsplash.com/photo-1564261331932-ea97c182f705?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//       title: "Leonardo ",
//       subtitle: "Surfer / Pizza lover",
//       content: "Super Powers: Decelerated Aging, Dermal Armor/Shell Formation, Enhanced Durability, Enhanced Endurance, Retractable Head, Night Vision, Speed Swimming.",
//       imgsrc: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//     {
//       title: "Captain Nemo",
//       subtitle: "Comedian",
//       content: "Super Powers: Live in a sea anenome away from predators. Has a slimy mucus covering his body that protects him from the sea anemone. Tells good dad jokes.",
//       imgsrc: "https://images.unsplash.com/photo-1536168032936-9ce3b4b3165c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//     },
//   ];
  
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
  /   // 2- Define HTML structure
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
  
  // // Rodrigo
  // function createCard(name, title, content, img) {
  //   // 1- Create HTML markup
  //   const card = document.createElement('div');
  //   const cardImg = document.createElement('img');
  //   const cardH2 = document.createElement('h2');
  //   const cardP1 = document.createElement('p');
  //   const cardP2 = document.createElement('p');
  
  //   // 2- Define HTML structure
  //   card.append(cardImg, cardH2, cardP1, cardP2);
  
  //   // 3- Add some class names
  //   card.classList.add("card");
  //   cardP1.classList.add('subtitle');
  //   cardP2.classList.add('desc');
  
  //   // 4- Add some content!
  //   cardH2.innerText = name;
  //   cardP1.innerText = title;
  //   cardP2.innerText = content;
  //   // cardImg.setAttribute("src", img);
  //   cardImg.src = img;
  
  //   return card;
  // }
  
  //     //--Append manual and loop--//
  //   const container = document.querySelector('.container');
  //   //Append Manual:
  //     container.append(createCard("Octavius Kraken", "Escape Artist", "Super Powers: can shape-shift, instantly change color, communicate using light displays generated on his skin, taste things by touching them, squirt ink and use tools", "https://images.unsplash.com/photo-1564261331932-ea97c182f705?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" ))
  //     container.append(createCard("Another", "Anoter", "Sanother", "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"))  //forEachMethod
  //   // forEach Method:
  //     cardData.forEach((card => {
  //       container.append(createCard(card.title, card.subtitle, card.content, card.imgsrc));
  //     }));
  
  
  
  // //niklas
  // function createFish(name, subtitle, content, img) {
  //   //1 Html markup
  //   const card = document.createElement('div')
  //   const image = document.createElement('img')
  //   const heading = document.createElement('h2')
  //   const firstP = document.createElement('p')
  //   const secondP = document.createElement('p')
  //   //2 Define html structure
  //   card.append(image)
  //   card.append(heading)
  //   card.append(firstP)
  //   card.append(secondP)
  //   //3 Add class names
  //   card.classList.add('card')
  //   firstP.classList.add('subtitle')
  //   firstP.classList.add('desc')
  //   //4 Content
  //   firstP.textContent = subtitle
  //   secondP.textContent = content
  //   image.setAttribute("src", img);
  //   heading.textContent = name
  //   return card
  // }
  
  //   //--Append manual and loop--//
  //   const container = document.querySelector('.container');
  //   //Append Manual:
  //     container.append(createFish("Octavius Kraken", "Escape Artist", "Super Powers: can shape-shift, instantly change color, communicate using light displays generated on his skin, taste things by touching them, squirt ink and use tools", "https://images.unsplash.com/photo-1564261331932-ea97c182f705?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" ))
  //     container.append(createFish("Another", "Anoter", "Sanother", "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"))  //forEachMethod
  //   // forEach Method:
  //     cardData.forEach((card => {
  //       container.append(createFish(card.title, card.subtitle, card.content, card.imgsrc));
  //     }));
  