export const addContactContent = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const section = document.createElement("section");
  section.innerHTML = `
  <div class="flex flex-col items-center justify-center space-y-4 text-center">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold sm:text-5xl xl:text-6xl">Contact Us</h1>
      <p class="max-w-[600px] text-gray-500 md:text-xl">
        We'd love to hear from you! For inquiries or reservations, please reach out to us at
        info@ramenhouse.com.
      </p>
    </div>
  </div>
  `;
  section.classList.add(
    "max-w-screen-md",
    "m-auto",
    "py-12",
    "px-6",
    "md:py-24",
    "lg:py-32",
  );

  contentDiv.appendChild(section);
};
