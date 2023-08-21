//-------------------------------------------------------------THIS IS FOR NAV LINKS-----------------
const Nav_links = ["Home", "About", "Blogs", "Gallery"];

//---------------dummy datas for image-------------------------

const dummy_Data = [
    {
        "id": 1,
        "type": "flower",
        "Available": true,
        "Image": './images/whiteFlower.jpeg'

    },
    {
        "id": 2,
        "type": "Pinkflower",
        "Available": true,
        "Image": './images/pinkFlower.jpeg'
    },
    {
        "id": 3,
        "type": "SunLeafes",
        "Available": true,
        "Image": './images/sunWithLeaves.jpeg'
    },
    {
        "id": 4,
        "type": "Black&White",
        "Available": false,
        "Image": './images/blackWhite.jpeg'
    },
    {
        "id": 5,
        "type": "Sunset",
        "Available": false,
        "Image": './images/images.jpeg'
    },
    {
        "id": 6,
        "type": "SunSet",
        "Available": true,
        "Image": './images/sunSet.jpg'
    }
]

// ---------------------------Main function start from here----------------------
document.addEventListener("DOMContentLoaded", function () {
    // -----------THIS FUNCTION FOR NAV BAR
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
            alert("Clicked: " + aTags[i].innerText);
        });
    }

    // -------------------------------------------------THIS IS FOR BODY_PART

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

    const image_div = document.getElementById("body_part");
    const image = document.createElement("div");
    image.id = "left_image";
    image.innerHTML = `
    <img id="img1" src="./images/camera-1.jpg"/>
    `;
    body.appendChild(image)

    // ----------------------------THIS IS FOR IMAGES PART/DUMMY DATA-----


    const gallery_Div = document.getElementById("gallery");
    //-----FOR DUMMMYYY DATA

    for (let element of dummy_Data) {
        // console.log("elem", element)
        // console.log(`key is ${keys} and values are ${element[keys]}`)
        const only_Image = element['Image']
        const only_Available = element['Available']
        const only_Type = element['type']


        const inner_gallery = document.createElement("div");
        inner_gallery.id = 'inner_gallery'

        gallery_Div.appendChild(inner_gallery)

        const main_img = document.createElement('img');
        main_img.id = 'main_img'

        const add_Now = document.createElement("button")
        add_Now.className = 'add_btn'
        add_Now.innerHTML = `${only_Available ? "Available" : "Not Available"}`
        add_Now.addEventListener("click", function (event) {
            event.preventDefault();
            if (only_Available) {
                alert(only_Available)

            } else {
                alert(only_Available)
            }
        })

        inner_gallery.appendChild(main_img)
        inner_gallery.appendChild(add_Now)


        main_img.src = only_Image;
        gallery_Div.appendChild(inner_gallery);

    }




    // ------------------THIS IS FOR FOOTER PART-----------------

    const footer = document.getElementById("footerpart");
    const footer_part = document.createElement(div);
    footer_part.id = "footer";
    footer_part.innerHTML = `
     <p>DesignBy:-- @bushra`;
    body.appendChild(footer_part);

});


// this function move in second pagee
function clickForNextPage(url) {
    window.location.href = url
}
