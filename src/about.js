import { aboutUsData } from "./about-items";

export const addAboutContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  aboutUsData.forEach((item) => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = item.section;
    section.appendChild(h2);
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
