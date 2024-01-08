const menu = [
  {
    image: "/src/assets/menu/cards/pexels-photo-698549.webp",
    name: "Hakata Classic Tonkotsu",
    description:
      "Immerse yourself in the velvety richness of slow-cooked pork bone broth, chashu slices, al dente noodles, and traditional toppings.",
    price: 12,
  },
  {
    image: "/src/assets/menu/cards/pexels-photo-12984979.jpeg",
    name: "Karai Miso Temptation",
    description:
      "Bold and flavorful fusion ramen with spicy miso broth, succulent chicken or pork, and a blend of heat and umami. Topped with corn, green onions, and sesame seeds.",
    price: 14,
  },
  {
    image: "/src/assets/menu/cards/pexels-photo-6645911.jpeg",
    name: "Shojin Zen Bowl",
    description:
      "Plant-based goodness with miso-infused vegetable broth, organic tofu, and a vibrant assortment of seasonal vegetables.",
    price: 11,
  },
  {
    image: "/src/assets/menu/cards/pexels-photo-4083578.jpeg",
    name: "Yakitori Shoyu Chicken Ramen",
    description:
      "Soy-glazed chicken in a unique broth, paired with perfectly seared chicken, bamboo shoots, nori, and a soft-boiled egg.",
    price: 13,
  },
  {
    image: "/src/assets/menu/cards/pexels-photo-1395319.webp",
    name: "Kaisen Seafood Umi Bowl",
    description:
      "Seafood lover's dream with shrimp, mussels, calamari, and a seafood broth. Crowned with enoki mushrooms, seaweed, and chili oil.",
    price: 15,
  },
  {
    image: "/src/assets/menu/cards/pexels-photo-12984983.jpeg",
    name: "Truffle Shoyu Delicacy",
    description:
      "Luxurious ramen with soy-based broth, truffle oil-infused beef slices, bean sprouts, green onions, and a dash of truffle salt.",
    price: 16,
  },
];

export const addMenuContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  contentDiv.appendChild(h1);

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  contentDiv.appendChild(cardContainer);

  menu.forEach((item) => {
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
