import { menuItems } from "./menu-items";

export const addMenuContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  contentDiv.appendChild(h1);

  const container = document.createElement("div");
  container.className = "menu-container";

  menuItems.forEach((i) => {
    container.innerHTML += `
      <div class="card">
        <img class="menu-img" src="${i.image}" />
        <h2 class="title">${i.name}</h2>
        <p>${i.description}</p>
        <p class="price">${i.price}</p>
        <button class="btn">Add To Cart</button>
      </div>
    `;
  });

  contentDiv.appendChild(container);
};
