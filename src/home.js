export const addHomeContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const container = document.createElement("section");
  container.className = "home-container";

  container.innerHTML = `
    <div class="hero">
      <h1>Savour the Soul of Japan</h1>
      <p>Indulge in a Symphony of Flavors with Handcrafted Noodles, Rich Broths, and Irresistible Toppings – Your Culinary Journey Begins Here!</p>
      <button class="btn">Place Order</button>
    </div>
    <div>
      <h2>Welcome to Ramen House</h2>
      <p>At Ramen House, we invite you on a culinary journey through the heart of Japan, where each bowl is a celebration of tradition and flavor. Step into our cozy haven and experience the artistry of ramen, crafted with passion and served with warmth.</p>
      <p>Dive into a world of tantalizing choices, from the rich and savory Hakata Classic Tonkotsu Ramen to the bold and spicy Karai Miso Temptation. Our menu is a symphony of tastes, each dish carefully curated to satisfy the most discerning palates. Whether you're a ramen connoisseur or a first-time adventurer, there's a bowl that awaits your discovery.</p>
    </div>
  `;

  contentDiv.appendChild(container);
};
