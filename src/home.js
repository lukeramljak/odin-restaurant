import Image from "./assets/pexels-cup-of-couple-8472650.jpg";

export const addHomeContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const containerDiv = document.createElement("section");

  const h1 = document.createElement("h1");
  h1.textContent = "Savour the Soul of Japan";
  containerDiv.appendChild(h1);

  const p = document.createElement("p");
  p.textContent =
    "Indulge in a Symphony of Flavors with Handcrafted Noodles, Rich Broths, and Irresistible Toppings – Your Culinary Journey Begins Here!";
  containerDiv.appendChild(p);

  const img = document.createElement("img");
  img.src = Image;
  contentDiv.appendChild(img);

  const btn = document.createElement("button");
  btn.textContent = "Place Order";
  containerDiv.appendChild(btn);

  contentDiv.appendChild(containerDiv);

  contentDiv.style.display = "flex";
  contentDiv.style.justifyContent = "space-between";
};
