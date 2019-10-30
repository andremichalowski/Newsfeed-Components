/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];



  // Step 1: Write a function that will create a menu component as seen below:
        //(SEE SOLUTION BELOW)
  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>

  // The function takes an array as its only argument.
  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  // Step 3: Using a DOM selector, select the menu button 
  //(the element with a class of 'menu-button') currently on the DOM.
  

  // Step 4: add a click event listener to the menu button. 
  // When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  // Step 5: return the menu component.
  


  // Step 6: add the menu component to the DOM.
  

  const header = document.querySelector('.header');

  // 1. HTML Markup:
  function menuComponent(array) {
    const menu = document.createElement('div');
    const menuList = document.createElement('ul');
    const menuButton = document.querySelector('.menu-button');
  
    // 2. HTML Structure:
    menu.appendChild(menuList);
  
  // 3. CLASS:
    menu.classList.add('menu');
  
  // 4. CONTENT:
    menuButton.addEventListener('click', e => menu.classList.toggle('menu--open'));
  
  // 5. ARRAY:
    array.forEach(element => {
      let listItem = document.createElement('li');
      menuList.appendChild(listItem);
      listItem.textContent = element;
    })
  // 6. RETURN:
    return menu;
  }
  
  //APPEND COMPONENT TO HEADER
  header.appendChild(menuComponent(menuItems));