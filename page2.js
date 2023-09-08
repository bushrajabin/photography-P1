// This is for page 2

const dummy_Data = [
    {
        "id": 7,
        "type": "bougainvillea glabra",
        "Available": false,
        "Image": './images/img14.jpg',
        "Description": "Bougainvillea glabra is an  evergreen, climbing shrub with thick, thorny stems and drooping branches that are glabrous or sparsely hairy.The leaf-like bracts are purple, oblong or elliptical, pointed, 65–90 mm (2+1⁄2–3+1⁄2 in) long and about 50 mm (2 in) wide. They tower over the flowers. These grow individually in pairs or in groups of three on flower stems about 3.5 millimeters long."
    },
    // {
    //     "id": 8,
    //     "type": "Temple",
    //     "Available": false,
    //     "Image": './images/img15.jpg'
    // },
    {
        "id": 9,
        "type": "Clouds",
        "Available": false,
        "Image": './images/sky.jpg',
        "Description": "A cloud is water vapour in the atmosphere (sky) that has condensed into very small water droplets or ice crystals that appear in visible shapes or formations above the ground."
    },
    {
        "id": 10,
        "type": "Sky",
        "Available": true,
        "Image": './images/sky2.jpg',
        "Description": "The sky is an unobstructed view upward from the surface of the Earth. It includes the atmosphere and outer space. It may also be considered a place between the ground and outer space, thus distinct from outer space."
    },
    {
        "id": 11,
        "type": "Baugainvillea",
        "Available": true,
        "Image": './images/flower10.jpg',
        "Description": ". Bougainvillea glabra is sometimes called paper flower because its bracts are thin and papery. The fruit is a narrow five-lobed achene.The actual flower of the plant is small and generally white, but each cluster of three flowers is surrounded by three or six bracts with the bright colours associated with the plant, including pink, magenta, purple, red, orange, white, or yellow"
    },
    {
        "id": 14,
        "type": "BeautifulLeaf",
        "Available": true,
        "Image": './images/leaf1.jpg',
        "Description": "A leaf  is a principal appendage of the stem of a vascular plant,[1] usually borne laterally aboveground and specialized for photosynthesis. Leaves are collectively called foliage,"
    },
    {
        "id": 15,
        "type": "eveningVibe",
        "Available": false,
        "Image": './images/eveningSky.jpg',
        "Description": "The evening is the time when all of our dreams become reality, when everything becomes possible again. The evening is the time when everybody has something to smile about, because they have had a good day."
    },
    {
        "id": 16,
        "type": "Leaf",
        "Available": false,
        "Image": './images/leaf1.jpg',
        "Description": "A leaf  is a principal appendage of the stem of a vascular plant,[1] usually borne laterally aboveground and specialized for photosynthesis. Leaves are collectively called foliage,"
    },

    {
        "id": 17,
        "type": "camera",
        "Available": false,
        "Image": './images/camera-1.jpg',
        "Description": "A camera is an optical instrument used to capture and store images or videos, either digitally via an electronic image sensor,"
    },
    {
        "id": 18,
        "type": "BBg",
        "Available": false,
        "Image": './images/bbg2.jpg',
        "Description": "Biswa Bangla Gate, popularly known as Kolkata Gate, is the new icon of a rising Bengal, the same way London Eye is for the UK and Eiffel Tower is for Paris"

    },
    {
        "id": 19,
        "type": "eveningVibe",
        "Available": false,
        "Image": './images/eveningSky.jpg',
        "Description": "The evening is the time when all of our dreams become reality, when everything becomes possible again. The evening is the time when everybody has something to smile about, because they have had a good day."

    },
    {
        "id": 20,
        "type": "Rose",
        "Available": false,
        "Image": './images/rose.jpg',
        "Description": "A rose is a plant that is a member of the genus Rosa, which consists of some 100 species of perennial shrubs in the rose family. Many roses are cultivated for their beautiful flowers, which range in colour from white through various tones of yellow and pink to dark crimson and maroon."
    },
    {
        "id": 21,
        "type": "WaterDrops",
        "Available": false,
        "Image": './images/img3.jpg',
        "Description": "A drop or droplet is a small column of liquid, bounded completely or almost completely by free surfaces. A drop may form when liquid accumulates at the lower end of a tube or other surface boundary, producing a hanging drop called a pendant drop"
    },
    {
        "id": 22,
        "type": "kolkata",
        "Available": false,
        "Image": './images/bbg2.jpg',
        "Description": "Biswa Bangla Gate, popularly known as Kolkata Gate, is the new icon of a rising Bengal, the same way London Eye is for the UK and Eiffel Tower is for Paris"


    },
    {
        "id": 23,
        "type": "BeautifulFlower",
        "Available": false,
        "Image": './images/img5.jpg',
        "Description": "A leaf  is a principal appendage of the stem of a vascular plant,[1] usually borne laterally aboveground and specialized for photosynthesis. Leaves are collectively called foliage,"

    },
    {
        "id": 24,
        "type": "Madagascar Periwinkle",
        "Available": false,
        "Image": './images/img6.jpg',
        "Description": "Catharanthus roseus, commonly known as bright eyes, Cape periwinkle, graveyard plant, Madagascar periwinkle, old maid, pink periwinkle, rose periwinkle, is a perennial species of flowering plant in the family Apocynaceae. It is native and endemic to Madagascar, but grown elsewhere as an ornamental and medicinal plant."
    },
    {
        "id": 25,
        "type": "Moss-rose purslane",
        "Available": false,
        "Image": './images/img7.jpg',
        "Description": "Portulaca grandiflora is a succulent flowering plant in the purslane family Portulacaceae, native to southern Brazil, Argentina, and Uruguay and often cultivated in gardens. It has many common names, including rose moss, eleven o'clock, Mexican rose, moss rose, sun rose, rock rose, and moss-rose purslane."
    },
    {
        "id": 26,
        "type": "Moss-rose purslane",
        "Available": false,
        "Image": './images/img8.jpg',
        "Description": "Moss rose is a low-growing annual native to South America. The plant has succulent leaves that are fleshy and narrow and grows 8 inches tall and 1 foot wide forming a matt. The flowers are red, orange, yellow, white and other pastel colors that come in single, semi-double and double forms.  The flowers do not open on cloudy or rainy days and close up from sundown to sun up."
    },
    {
        "id": 27,
        "type": "Blue-Sky",
        "Available": false,
        "Image": './images/img9.jpg',
        "Description": "Blue Sky Quotes are optimistic, visionary statements about the future. They can be used to galvanize people around a common goal or simply to make them feel good."
    },
    {
        "id": 28,
        "type": "Leaf",
        "Available": false,
        "Image": './images/img10.jpg',
        "Description": "A leaf  is a principal appendage of the stem of a vascular plant,[1] usually borne laterally aboveground and specialized for photosynthesis. Leaves are collectively called foliage,"

    },
    {
        "id": 29,
        "type": "Baugainvillea-flower",
        "Available": false,
        "Image": './images/img11.jpg',
        "Description": "Bougainvillea are popular ornamental plants in India and most areas with warm climates and grown both as shrub and vine. Genus Bougainvillea are vine-like evergreen shrubs, sometimes thorny, with simple ovate leaves and clusters of small tubular flowers that grows rampantly"
    },
    {
        "id": 30,
        "type": "Hanging-Resturarent",
        "Available": false,
        "Image": './images/img12.jpg',
        "Description": "It is basically a circular hanging restaurant positioned on four arc-shaped steel pillars. The hanging restaurants in Malaysia and Visitor's Gallery in Eiffel Tower in Paris have inspired the government authorities of Kolkata to come up with this iconic structure."
    },
    {
        "id": 31,
        "type": "Canna glauca",
        "Available": false,
        "Image": './images/img13.jpg',
        "Description": "Canna glauca is a species of the Canna genus, a member of the family Cannaceae. It is commonly known as water canna or Louisiana canna.The species prefers light (sandy), medium (loamy) and heavy (clay) soils and requires well-drained soil. The preferred soil is acid, neutral and basic (alkaline). It cannot grow in the shade and requires moist soi"
    },
    {
        "id": 31,
        "type": "Pink-Rose",
        "Available": false,
        "Image": './images/rose.jpg',
        "Description": "A rose is either a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars"
    },
    {
        "id": 32,
        "type": "white-Rose",
        "Available": false,
        "Image": './images/img16.jpg',
        "Description": "A rose is either a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars"
    },
    {
        "id": 33,
        "type": "white-rose",
        "Available": false,
        "Image": './images/img17.jpg',
        "Description": "A rose is either a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars"

    },
    {
        "id": 34,
        "type": "Gadapana-flower",
        "Available": false,
        "Image": './images/img18.jpg',
        "Description": "Lantana camara is a species of flowering plant within the verbena family, native to the American tropics. It is a very adaptable species, which can inhabit a wide variety of ecosystems; once it has been introduced into a habitat it spreads rapidly; "
    },
    {
        "id": 35,
        "type": "Tajmahal",
        "Available": false,
        "Image": './images/img19.jpg',
        "Description": "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."
    },
    {
        "id": 36,
        "type": "Chinese ixora",
        "Available": false,
        "Image": './images/img20.jpg',
        "Description": "Ixora is a genus of flowering plants in the family Rubiaceae.[1] It is the only genus in the tribe Ixoreae. It consists of tropical evergreen trees and shrubs and holds around 544 species"
    },

    {
        "id": 37,
        "type": "TajMahal",
        "Available": false,
        "Image": './images/tajMahal.jpg',
        "Description": "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."

    },
    {
        "id": 38,
        "type": "hoeblackplant",
        "Available": false,
        "Image": './images/flower1.jpg',
        "Description": "Hibiscus rosa-sinensis, known colloquially as Chinese hibiscus, China rose, Hawaiian hibiscus, rose mallow and shoeblack plant, is a species of tropical hibiscus, a flowering plant in the Hibisceae tribe of the family Malvaceae."
    },
    {
        "id": 39,
        "type": "sun",
        "Available": false,
        "Image": './images/flower2.jpg',
        "Description": "The Sun is the largest object in our solar system. The Sun’s volume would need 1.3 million Earths to fill it. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest bits of debris in orbit around it. The hottest part of the Sun is its core,"
    },
    {
        "id": 40,
        "type": "butterfly",
        "Available": false,
        "Image": './images/butterfly.jpg',
        "Description": "Butterflies are insects that have large, often brightly coloured wings, and a conspicuous, fluttering flight. The group comprises the superfamilies Hedyloidea and Papilionoidea. The oldest butterfly fossils have been dated to the Paleocene, about 56 million years ago, though they may have originated earlier."
    },
    {
        "id": 41,
        "type": "Art",
        "Available": true,
        "Image": './images/mehedi.jpg',
        "Description": "Mehndi, otherwise known as henna, is a paste associated with positive spirits and good luck"
    },
    {
        "id": 11,
        "type": "bougainvillea glabra",
        "Available": false,
        "Image": './images/redFlower.jpg',
        "Description": "Bougainvillea glabra is an  evergreen, climbing shrub with thick, thorny stems and drooping branches that are glabrous or sparsely hairy.The leaf-like bracts are purple, oblong or elliptical, pointed, 65–90 mm (2+1⁄2–3+1⁄2 in) long and about 50 mm (2 in) wide. They tower over the flowers. These grow individually in pairs or in groups of three on flower stems about 3.5 millimeters long."

    },
    {
        "id": 42,
        "type": "bougainvillea glabra",
        "Available": true,
        "Image": './images/redFlower2.jpg',
        "Description": "Bougainvillea glabra is an  evergreen, climbing shrub with thick, thorny stems and drooping branches that are glabrous or sparsely hairy.The leaf-like bracts are purple, oblong or elliptical, pointed, 65–90 mm (2+1⁄2–3+1⁄2 in) long and about 50 mm (2 in) wide. They tower over the flowers. These grow individually in pairs or in groups of three on flower stems about 3.5 millimeters long."

    },
]

window.addEventListener("DOMContentLoaded", function () {

    const gallery_Div2 = document.getElementById("gallery2");
    const headerText = document.createElement("h1");
    headerText.id = "headerText";
    headerText.innerHTML = `
    <p>My photography</p>
      `;
    gallery_Div2.appendChild(headerText)
    for (let element of dummy_Data) {

        const only_Image = element['Image']
        const only_Available = element['Available']
        const image_type = element['type']
        const about_image = element['Description']?.substring(0, 100)
        // console.log(image_type)



        const inner_gallery2 = document.createElement("div");
        inner_gallery2.id = 'inner_gallery'

        gallery_Div2.appendChild(inner_gallery2);
        // for image
        const main_img = document.createElement('img');
        main_img.id = 'main_img'
        // for Image Type
        const type = document.createElement('h3');
        type.className = 'type';
        // for image caption
        const image_caption = document.createElement('p');
        image_caption.className = 'caption';

        inner_gallery2.appendChild(main_img)
        inner_gallery2.appendChild(type)
        inner_gallery2.appendChild(image_caption);


        main_img.src = only_Image;
        gallery_Div2.appendChild(inner_gallery2);

        type.innerText = image_type
        gallery_Div2.appendChild(inner_gallery2)

        image_caption.innerText = about_image ? about_image : ""
        gallery_Div2.appendChild(inner_gallery2)


        // const add_Now = document.createElement("button")
        // add_Now.className = 'add_btn'
        // add_Now.innerHTML = `
        // <p>ViweMore</p>
        // `;

        // inner_gallery2.appendChild(add_Now)

        // view more button


    }
})
