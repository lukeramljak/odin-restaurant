import { menuItems } from "./menu-items";

export const addMenuContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  contentDiv.appendChild(h1);

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  contentDiv.appendChild(cardContainer);

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    const img = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const btn = document.createElement("button");

    card.className = "card";
    img.className = "img-container";
    title.className = "title";
    description.className = "description";
    price.className = "price";
    btn.className = "btn";

    title.textContent = item.name;
    description.textContent = item.description;
    price.textContent = item.price;
    btn.textContent = "Add To Cart";

    img.style.background = `url(${item.image}) center / cover`;
    card.append(img, title, description, price, btn);
    cardContainer.appendChild(card);
  });
};
