//Start Global Variables

const sections = document.querySelectorAll("section");
const navigationBar = document.getElementById("navbar__list");

//End Global Variables

// Start Creating Navigation Bar sections
function createnavlist() {
  //access every section in html
  for (section of sections) {
    //caught section name and id
    secName = section.getAttribute("data-nav");
    secId = section.getAttribute("id");

    //create header element

    listcontent = document.createElement("li");

    listcontent.innerHTML = `<a class='menu__link' data-nav="${section.id}" href='#${secId}'>${secName}</a>`;
    //add item to navbar list

    navigationBar.appendChild(listcontent);
  }
}
// End Navigation Bar section
createnavlist();

// start making activate section
window.onscroll = function () {
  document.querySelectorAll("section").forEach((activate) => {
    let activeLink = navigationBar.querySelector(`[data-nav=${activate.id}]`);
    if (
      activate.getBoundingClientRect().top >= -400 &&
      activate.getBoundingClientRect().top <= 150
    ) {
      //activate this section
      activate.classList.add("your-active-class");
      activeLink.classList.add("active-link");
    } else {
      // sleep the section we don't  use
      activate.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
  });
};

// making the scroll behavior smooth
navigationBar.addEventListener("click", (e) => {
  e.preventDefault();
  const srl = e.target;
  if (srl.classList.contains("menu__link")) {
    const id = srl.getAttribute("href").slice(1);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
});
//media query
