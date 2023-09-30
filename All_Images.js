import  {dummy_Data}  from "./data.js";
const Nav_link = ["Home", "About", "Gallery", "Contact"];
function scroolToViewSmooth(div_Id) {
  const getDivId = document.getElementById(div_Id);
  getDivId.scrollIntoView({ behavior: "smooth" });
}
// THIS FUNCTION IS GENERATE NAV BAR FOR PAGE2-
function generateNav() {
  const main_div = document.getElementById("nav");
  const nav_logo = document.createElement("div");
  nav_logo.id = "logo";
  nav_logo.innerHTML = `
      <img id="logo_image" src="./images/TP Logo.png"/>
      `;
  main_div.appendChild(nav_logo);

  const outer_div = document.getElementById("nav");
  const inner_div = document.createElement("ul");

  for (let i = 0; i < Nav_link.length; i++) {
    inner_div.innerHTML += `
          <li>
          <a id="links">${Nav_link[i]}</a>
          </li>`;
  }

  outer_div.appendChild(nav_logo);
  outer_div.appendChild(inner_div);
  const aTags = document.querySelectorAll("#links");

  for (let i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener("click", function (event) {
      event.preventDefault();

      // const href = this.getAttribute("href");
      Nav_link.textContent = Nav_link[i];

      switch (Nav_link[i]) {
        case "Home":
          scroolToViewSmooth("nav");
          break;
        case "About":
          scroolToViewSmooth("body_part");

          break;
        case "Gallery":
          scroolToViewSmooth("gallery2");

          break;
        case "Contact":
          scroolToViewSmooth("footerpart");

        default:
          break;
      }
    });
  }
}
// THIS FUNCTION FOR SHOW IMAGES DATA 
function forImageData(){
  const gallery_Div2 = document.getElementById("gallery2");
  for (let element of dummy_Data) {
    const only_Image = element["Image"];
    const only_Type = element["type"];
    const only_Id = element["id"];

    var inner_gallery = document.createElement("div");
    inner_gallery.id = "inner_gallery";

    // Add an event listener to open the details page with the clicked ID
    inner_gallery.addEventListener("click", () => {
      window.location.href = `details.html?id=${only_Id}`;
    });

    gallery_Div2.appendChild(inner_gallery);

    const main_img = document.createElement("img");
    main_img.id = "main_img";

    const add_Now = document.createElement("button");
    add_Now.className = "add_btn";
    add_Now.innerHTML = `
          <p>ViewMore</p>`;
    inner_gallery.appendChild(main_img);
    inner_gallery.appendChild(add_Now);

    main_img.src = only_Image;
    gallery_Div2.appendChild(inner_gallery);
  }
}
// Call all functions in this listener...
window.addEventListener("DOMContentLoaded", function () {
  generateNav();
  forImageData()

});

var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
loader.style.display="none";
document.querySelector(".gallery2").style.display="flex"

})
