import { aboutUsData } from "./about-items";

export const addAboutContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const container = document.createElement("div");
  container.className = "about-container";

  aboutUsData.forEach((i) => {
    container.innerHTML += `
    <section>
      <h2>${i.section}</h2>
      ${renderContent(i.content)}
    </section>`;
  });

  contentDiv.appendChild(container);

  function renderContent(content) {
    if (typeof content === "string") {
      return `<p>${content}</p>`;
    } else if (Array.isArray(content)) {
      return content
        .map(
          (item) => `
          <article>
            <img src="${item.image}" />
              <div>
                <h3>${item.name}</h3>
                <p><strong>${item.role}</strong></p>
                <p>${item.bio}</p>
              </div>
          </article>
          `,
        )
        .join("");
    } else if (typeof content === "object") {
      return `
      <p>Email: <a href="mailto:${content.email}">${content.email}</a></p>
      <p>Phone: <a href="tel:${content.phone}">${content.phone}</a></p>
      <p>Address: ${content.address}</p>
    `;
    }
    return "";
  }
};
