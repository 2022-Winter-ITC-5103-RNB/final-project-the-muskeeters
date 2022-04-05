(() => {
    const openNavMenu = document.querySelector(".open-nav-menu"),
      closeNavMenu = document.querySelector(".close-img"),
      navMenu = document.querySelector(".nav-menu"),
      //menuOverlay = document.querySelector(".menu-overlay"),
      mediaSize = 880;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    //close the menu by clicking on screen
    // menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
      navMenu.classList.toggle("open");
      // menuOverlay.classList.toggle("active");
    }
  
    //
  
    navMenu.addEventListener("click", (event) => {
      if (
        event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize
      ) {
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        } else {
          // collapse existing expanded menuItemHasChildren
          if (navMenu.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    });
    function collapseSubMenu() {
      navMenu
        .querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
      navMenu
        .querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix() {
      // if navMenu is open ,close it
      if (navMenu.classList.contains("open")) {
        toggleNav();
      }
      // if menuItemHasChildren is expanded , collapse it
      if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
    }
  
    window.addEventListener("resize", function () {
      if (this.innerWidth > mediaSize) {
        resizeFix();
      }
    });
  })();


//Change Background Image

// let btn1 = document.querySelector('#btn-1');
// let btn2 = document.querySelector('#btn-2');
// let btn3 = document.querySelector('#btn-3');


// btn1.addEventListener('click', () =>{
//     document.body.style.backgroundImage = "url('./Images/1.jpg')";
// });

// btn2.addEventListener('click', () =>{
//   document.body.style.backgroundImage = "url('./Images/2.jpg')";
// });

// btn3.addEventListener('click', () =>{
//   document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181_960_720.jpg')";
// });

function changeWall1(){
  document.body.style.background = "#f3f3f3 url('./User_Images_yash/1.jpg') no-repeat right top";
  // document.getElementById("btn-1").style.background = "#f3f3f3 url('./Images/1.jpg') no-repeat ";
}
function changeWall2(){
  document.body.style.background = "#f3f3f3 url('./User_Images_yash/2.jpg') no-repeat right top";
  // document.getElementById("btn-2").style.background = "#f3f3f3 url('./Images/2.jpg') no-repeat ";
}
function changeWall3(){
  document.body.style.background = "#f3f3f3 url('./User_Images_yash/3.jpg') no-repeat right top";
  // document.getElementById("btn-3").style.background = "#f3f3f3 url('./Images/3.jpg') no-repeat ";
}