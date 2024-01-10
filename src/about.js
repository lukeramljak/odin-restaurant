export const addAboutContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const section = document.createElement("section");
  section.innerHTML = `
  <div class="flex flex-col justify-center space-y-4">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold sm:text-5xl xl:text-6xl">About Us</h1>
      <p class="text-gray-500 md:text-xl">
        Ramen House was founded in 2008 with the goal of bringing authentic Japanese ramen to the heart of
        the city. Our commitment to using only the freshest ingredients and traditional cooking methods has
        made us a beloved destination for ramen lovers.
      </p>
    </div>
  </div>

  <div class="grid gap-10 sm:px-10 md:grid-cols-2 md:gap-16">
    <div class="flex flex-col items-center space-y-4">
      <img
        src="/src/assets/about/jouwen-wang-5-u7C5gy8r4-unsplash.jpg"
        width="100"
        height="100"
        alt="Chef Hiroshi"
        class="h-24 w-24 rounded-full object-cover"
        style="aspect-ratio: 100 / 100; object-fit: cover;"
      />
      <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Head Chef</div>
      <h2 class="text-3xl font-bold sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
        Chef Hiroshi
      </h2>
      <p class="text-sm text-gray-500">
        With over 20 years of experience in the culinary world, Chef Hiroshi brings his passion for authentic
        Japanese cuisine to every dish at Ramen House.
      </p>
    </div>
    <div class="flex flex-col items-center space-y-4">
      <img
        src="/src/assets/about/pexels-maksim-goncharenok-5506098.jpg"
        width="100"
        height="100"
        alt="Yuki Tanaka"
        class="h-24 w-24 rounded-full object-cover"
        style="aspect-ratio: 100 / 100; object-fit: cover;"
      />
      <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
        Managing Partner
      </div>
      <h2 class="text-3xl font-bold sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
        Yuki Tanaka
      </h2>
      <p class="text-sm leading-snug text-gray-500">
        As the managing partner, Yuki ensures that every aspect of Ramen House reflects our commitment to
        quality and authenticity.
      </p>
    </div>
  </div>
  `;
  section.classList.add(
    "flex",
    "flex-col",
    "gap-16",
    "items-center",
    "m-auto",
    "max-w-screen-md",
    "py-6",
    "sm:py-12",
    "md:py-24",
    "lg:py-32",
  );
  contentDiv.appendChild(section);
};
