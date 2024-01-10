import { menuItems } from "./menu-items";

export const addMenuContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const section = document.createElement("section");
  section.innerHTML = `
  <div class="px-4 md:px-6">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <div class="space-y-2">
        <div class="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm">Our Menu</div>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Delicious Ramen Varieties</h2>
        <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          From traditional to modern, we offer a wide range of ramen dishes to satisfy your cravings.
        </p>
      </div>
  </div>
  `;
  section.classList.add(
    "w-full",
    "py-12",
    "px-6",
    "md:py-24",
    "lg:py-32",
    "bg-gray-100",
  );
  contentDiv.appendChild(section);

  const cardContainer = document.createElement("div");
  cardContainer.classList.add(
    "mx-auto",
    "grid",
    "max-w-5xl",
    "gap-6",
    "py-12",
    "px-6",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:gap-12",
  );

  menuItems.forEach((i) => {
    cardContainer.innerHTML += `
      <div class="rounded-lg border overflow-hidden shadow-m">
        <img
          src="${i.image}"
          width="300"
          height="200"
          alt="menu item"
          class="mx-auto aspect-video object-cover object-center"
        />
        <div class="p-6 flex-1">
          <h3 class="text-xl font-bold mb-2">${i.name}</h3>
          <p class="text-gray-500">${i.description}</p>
        </div>
      </div>
    `;
  });

  contentDiv.appendChild(cardContainer);
};
