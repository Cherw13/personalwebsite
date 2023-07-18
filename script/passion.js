const projectContainer = document.querySelector(".containerProjects");

let htmls = "";
passionProject.forEach((value) => {
  let tag = "";
  value.tags.forEach((tagz) => {
    tag += `<span class="projectTags" style="background-color:${value.color}">${tagz}</span>`;
  });
  htmls += `
    <div class="project">
      <a href="${value.link}" target="_blank">
        <img src="${value.image}" class="project-image">
      </a>
      <div>${tag}</div>
      <p>${value.title}</p>
    </div>
  `;
});

projectContainer.innerHTML = htmls;
