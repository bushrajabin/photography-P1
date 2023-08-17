const Nav_links = ["Home", "About", "Contact", "Blogs", "Gallery"];

document.addEventListener("DOMContentLoaded", function () {
    const main_div=document.getElementById("nav");
    const nav_logo = document.createElement("div");
    nav_logo.id = "logo";
    nav_logo.innerHTML = `
    <img id="logo_image" src="./images/logo.png"/>
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
        event.preventDefault(); // Prevent the default behavior of the link
        alert("Clicked: " + aTags[i].innerText);
      });
    }
});
