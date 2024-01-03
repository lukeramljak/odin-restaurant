const aboutUsData = [
  {
    section: "About Us",
    content:
      "Welcome to our haven of Japanese culinary excellence, where passion and tradition converge to create a unique ramen experience. At our ramen shop, we are committed to delivering authentic flavors and meticulous craftsmanship in every bowl. Our journey began with a love for the rich heritage of Japanese cuisine, and we strive to share that love with you through each carefully curated dish.",
  },
  {
    section: "Meet the Team",
    members: [
      {
        name: "Chef Hiroshi Tanaka",
        role: "Head Chef",
        bio: "With over two decades of experience perfecting the art of ramen, Chef Hiroshi Tanaka brings his expertise and creativity to our kitchen. His dedication to using only the finest ingredients and time-honored techniques ensures that every bowl surpasses expectations.",
      },
      {
        name: "Sakura Yamamoto",
        role: "Managing Partner",
        bio: "As the heart and soul behind our ramen shop, Sakura Yamamoto is passionate about creating a welcoming and memorable dining experience. Her vision is to share the authentic flavors of Japan while fostering a sense of community within our cozy establishment.",
      },
    ],
  },
  {
    section: "Our Mission",
    content:
      "Our mission is to transport you to the bustling ramen stalls of Tokyo, where the aroma of simmering broth and the sound of slurping noodles fill the air. We invite you to join us on this gastronomic journey, where each bowl tells a story of dedication, flavor, and a commitment to preserving the essence of Japanese culinary traditions.",
  },
  {
    section: "Contact Us",
    contact: {
      email: "info@ramenhouse.com",
      phone: "+81 90-1234-5678",
      address: "123 Ramen Street, Cityville, Japan",
    },
  },
];

export const addAboutContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  aboutUsData.forEach((item) => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    section.appendChild(h2);
    h2.textContent = item.section;
    const p = document.createElement("p");

    if (Array.isArray(item.members)) {
      item.members.forEach((member) => {
        const article = document.createElement("article");
        const name = document.createElement("h3");
        name.textContent = member.name;
        const role = document.createElement("p");
        role.textContent = member.role;
        const bio = document.createElement("p");
        bio.textContent = member.bio;
        article.appendChild(name);
        article.appendChild(role);
        article.appendChild(bio);
        section.appendChild(article);
      });
    } else if (item.contact) {
      const list = document.createElement("ul");
      const email = document.createElement("li");
      email.textContent = item.contact.email;
      list.appendChild(email);
      const phone = document.createElement("li");
      phone.textContent = item.contact.phone;
      list.appendChild(phone);
      const address = document.createElement("li");
      address.textContent = item.contact.address;
      list.appendChild(address);
      section.appendChild(list);
    } else {
      p.textContent = item.content;
      section.appendChild(p);
    }
    contentDiv.appendChild(section);
  });
};
