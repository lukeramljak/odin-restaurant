export const addHomeContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  contentDiv.innerHTML = `
    <section class="max-w-6xl m-auto py-6 sm:py-16">
      <div class="px-4 md:px-6">
        <div
          class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
        >
          <img
            src="../src/assets/pexels-cup-of-couple-8472650.jpg"
            width="550"
            height="550"
            alt="Hero"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <h1
                class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              >
                Welcome to Ramen House
              </h1>
              <p class="max-w-[600px] text-gray-500 md:text-xl">
                Experience the authentic taste of traditional Japanese ramen.
              </p>
            </div>
            <div class="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                class="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-800 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Make a Reservation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
