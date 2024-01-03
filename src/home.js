export const addHomeContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Savour the Soul of Japan";
  contentDiv.appendChild(h1);

  const p = document.createElement("p");
  p.textContent =
    "Indulge in a Symphony of Flavors with Handcrafted Noodles, Rich Broths, and Irresistible Toppings – Your Culinary Journey Begins Here!";
  contentDiv.appendChild(p);

  const btn = document.createElement("button");
  btn.textContent = "Place Order";
  contentDiv.appendChild(btn);
};
