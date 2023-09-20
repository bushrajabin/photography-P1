import { dummy_Data } from "./data.js";
//-------------------------------------------------------------THIS IS FOR NAV LINKS-----------------
const Nav_links = ["Home", "About", "Gallery", "Contact"];
//---------------dummy datas for image-------------------------

// smooth scrool to view

function scroolToView(div_Id) {
  const getDivId = document.getElementById(div_Id);
  getDivId.scrollIntoView({ behavior: "smooth" });
}
// FUNCTION FOR NAVBAr
function fornavbar() {
  const main_div = document.getElementById("nav");
  const nav_logo = document.createElement("div");
  nav_logo.id = "logo";
  nav_logo.innerHTML = `
      <img id="logo_image" src="./images/TP Logo.png"/>
      `;
  main_div.appendChild(nav_logo);

  const outer_div = document.getElementById("nav");
  const inner_div = document.createElement("ul");

  for (let i = 0; i < Nav_links.length; i++) {
    inner_div.innerHTML += `
          <li>
          <a id="links">${Nav_links[i]}</a>
          </li>`;
  }

  outer_div.appendChild(nav_logo);
  outer_div.appendChild(inner_div);
  const aTags = document.querySelectorAll("#links");

  for (let i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener("click", function (event) {
      event.preventDefault();

      // const href = this.getAttribute("href");
      Nav_links.textContent = Nav_links[i];

      switch (Nav_links[i]) {
        case "Home":
          scroolToView("nav");
          break;
        case "About":
          scroolToView("body_part");

          break;
        case "Gallery":
          scroolToView("gallery");

          break;
        case "Contact":
          scroolToView("footerpart");

        default:
          break;
      }
    });
  }
}

// FUNCTION FOR BODY PART
function forbodyPart() {
  const body = document.getElementById("body_part");
  const inner_Div = document.createElement("div");
  inner_Div.id = "about";
  inner_Div.innerHTML = `
      <h1>Bushra</h1>
      <p>Bushra is a professional photographer who grew up in NewTown, kolkata. As a child, Bushra loved spending his days outdoors, playing and exploring. On rainy days, she would draw pictures of mountains and rivers. During his teen years,she discovered photography. She immediately fell in love with nature photography, and now, it is his passion.
      Bushra loves adventure. she likes capturing images that would make his audience want to discover more about nature. She travels around the world with his favorite camera and brings home memories immortalized in his amazing photographs.This young photographer has contributed photos in major magazines and online sites. 
      </p>
      `;
  body.appendChild(inner_Div);
}

// FUNCTION FOR IMAGE PART WITH VIEW MORE BUTTON
function forImageDiv() {
  const gallery_Div = document.getElementById("gallery");
  //-----FOR DUMMMYYY DATA

  for (let element of dummy_Data.splice(0,5)) {
    // console.log("elem", element)
    // console.log(`key is ${keys} and values are ${element[keys]}`)
    const only_Image = element["Image"];
    const only_Available = element["Available"];
    const only_Type = element["type"];
    const only_Id = element["id"];

    const inner_gallery = document.createElement("div");
    inner_gallery.id = "inner_gallery";

    // inner_gallery.addEventListener("click", () => alert(only_Id));

    // Add an event listener to open the details page with the clicked ID
    inner_gallery.addEventListener("click", () => {
      window.location.href = `details.html?id=${only_Id}`;
    });

    gallery_Div.appendChild(inner_gallery);

    const main_img = document.createElement("img");
    main_img.id = "main_img";

    const add_Now = document.createElement("button");
    add_Now.className = "add_btn";
    add_Now.innerHTML = `
          <p>ViewMore</p>`;
    inner_gallery.appendChild(main_img);
    inner_gallery.appendChild(add_Now);

    main_img.src = only_Image;
    gallery_Div.appendChild(inner_gallery);
  }

  // // FOR SHOW MORE BUTTON----------
  // const showMore = document.getElementById("next");
  // const next_image = document.createElement("button");
  // next_image.id = "next_image";
  // next_image.innerHTML = `
  //     <p>ShowMore<p>`;
  // showMore.appendChild(next_image);

}

// FUNCTION FOR FOOTER PART
function forFooter() {
  const footer = document.getElementById("footerpart");
  const footer_part = document.createElement("div");
  footer_part.id = "footer";
  footer_part.innerHTML = `
       <h2> The|Photograph</h2>`;
  footer.appendChild(footer_part);

  const links = document.createElement("div");
  links.id = "social_links";
  links.innerHTML = `
      <h1>Follow us </h1>
        <a href="https://in.pinterest.com/bushrabintjabin/"><img src="./images/facebook.png" id="img1"/></a>
       <a href="https://in.pinterest.com/bushrabintjabin/"><img src="./images/instagram.png" id="img2"/></a>
       <a href="https://in.pinterest.com/bushrabintjabin/"><img src="./images/printeres.png" id="img3"/></a>
      <h3>DesignBy:-@Bushra jabin||WebDeveloper||Student</h3>
      `;

  footer.appendChild(links);
}
// ------------IN THIS LINE CALL ALL FUNCTIONS------
document.addEventListener("DOMContentLoaded", function () {
  fornavbar();
  forbodyPart();
  forImageDiv();
  forFooter();
});

// // // this function move in second pagee
// function clickForNextPage() {
// alert("hi")  
// // window.location.href = url;
// }


// ashdyuywerttwyety


function clickForNextPage(){
  alert("hiii")
}