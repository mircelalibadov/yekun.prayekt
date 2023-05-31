const btn_clik = document.querySelector(".btn_clik");
const home_about = document.querySelector(".home_about");
const blog = document.querySelector(".blog");
const Details = document.querySelector(".Details");
const cards = document.querySelector(".cards");

btn_clik.addEventListener("click", function () {
  home_about.classList.toggle("home_clik_about");
});
blog.addEventListener("click", function () {
  Details.classList.toggle("Details_bt");
});

fetch("https://northwind.vercel.app/api/categories")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.length);

    for (let i = 0; i < 3; i++) {
      //   console.log(data[i]);

      const section = document.createElement("section");
      
      const div = document.createElement("div");
      const ic = document.createElement("i");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      const a = document.createElement("a");

      div.append(ic, h2, p, a);
      

      section.classList.add("about_section");
      div.classList.add("card");
      ic.classList.add("fa-solid");
      ic.classList.add("fa-camera");


      h2.innerText = data[i].name;
      p.innerText = data[i].description;
      a.innerText = "More Details";

      cards.appendChild(div);
    }
  });

