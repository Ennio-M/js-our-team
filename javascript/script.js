const teamContainer = document.querySelector(".team-container");

// Array di oggetti
let cards = [
    {
        imageFile: "wayne-barnett-founder-ceo.jpg",
        _name: "Wayne Barnett",
        role: "Founder & CEO"
    },
    {
        imageFile: "angela-caroll-chief-editor.jpg",
        _name: "Angela Caroll",
        role: "Chief Editor"
    },
    {
        imageFile: "walter-gordon-office-manager.jpg",
        _name: "Walter Gordon",
        role: "Office Manager"
    },
    {
        imageFile: "angela-lopez-social-media-manager.jpg",
        _name: "Angela Lopez",
        role: "Social Media Manager"
    },
    {
        imageFile: "scott-estrada-developer.jpg",
        _name: "Scott Estrada",
        role: "Developer"
    },
    {
        imageFile: "barbara-ramos-graphic-designer.jpg",
        _name: "Barbara Ramos",
        role: "Graphic Designer"
    }
]

for(let i = 0; i < cards.length; i++) {
    // Creazione elementi
    const teamCard = document.createElement("div");
    const cardImage = document.createElement("div");
    let image = document.createElement("img");
    const cardText = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");

    // Impostazione classi
    teamCard.setAttribute("class", "team-card");
    cardImage.setAttribute("class", "card-image");
    cardText.setAttribute("class", "card-text");

    // Impostazione attributi
    image.setAttribute("src", `./img/${cards[i]['imageFile']}`);
    image.setAttribute("alt", cards[i]['_name'])
    h3.innerHTML = cards[i]['_name'];
    p.innerHTML = cards[i]['role'];

    // Output delle cards
    cardImage.append(image);
    teamCard.append(cardImage);
    teamContainer.append(teamCard);
    cardText.append(h3);
    cardText.append(p);
    teamCard.append(cardText);
}