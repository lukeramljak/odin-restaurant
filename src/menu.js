const menu = [
  {
    name: "Hakata Classic Tonkotsu",
    description:
      "Immerse yourself in the velvety richness of slow-cooked pork bone broth, chashu slices, al dente noodles, and traditional toppings.",
    price: 12,
  },
  {
    name: "Karai Miso Temptation",
    description:
      "Bold and flavorful fusion ramen with spicy miso broth, succulent chicken or pork, and a blend of heat and umami. Topped with corn, green onions, and sesame seeds.",
    price: 14,
  },
  {
    name: "Shojin Zen Bowl",
    description:
      "Plant-based goodness with miso-infused vegetable broth, organic tofu, and a vibrant assortment of seasonal vegetables.",
    price: 11,
  },
  {
    name: "Yakitori Shoyu Chicken Ramen",
    description:
      "Soy-glazed chicken in a unique broth, paired with perfectly seared chicken, bamboo shoots, nori, and a soft-boiled egg.",
    price: 13,
  },
  {
    name: "Kaisen Seafood Umi Bowl",
    description:
      "Seafood lover's dream with shrimp, mussels, calamari, and a seafood broth. Crowned with enoki mushrooms, seaweed, and chili oil.",
    price: 15,
  },
  {
    name: "Truffle Shoyu Delicacy",
    description:
      "Luxurious ramen with soy-based broth, truffle oil-infused beef slices, bean sprouts, green onions, and a dash of truffle salt.",
    price: 16,
  },
];

export const addMenuContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Menu";
  contentDiv.appendChild(h2);

  menu.forEach((item) => {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");

    title.textContent = item.name;
    description.textContent = item.description;
    price.textContent = item.price;

    card.append(title, description, price);
    contentDiv.appendChild(card);
  });
};
