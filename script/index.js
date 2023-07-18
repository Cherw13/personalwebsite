let htmlForProject = "";
highlightProjects.forEach( (value,index) => {
    let htmlForTag="";
    value.tags.forEach( (value) => {
        
        htmlForTag += `<span class = "projectEachTag" style="background-color:${colorForProject[index]};">${value}</span>`;
    });
    let indexs;
    index%2==0?indexs=0:indexs=1;
        htmlForProject += `
        <div class = "project-inner-container">
            <div class="project-inner-left left-${indexs}" data-aos="fade-right" data-aos-easing="ease-in">
                <img onclick = "window.location.href = '${value.destination}'"src="${value.image}">
            </div>
            <div class="project-inner-right right-${indexs}" data-aos="fade-left" data-aos-easing="ease-in">
                <div class = "project-inner-right-name">${value.name}</div>
                <div class = "project-inner-right-tags">${htmlForTag}</div>
                <div class = "project-inner-right-description">${value.description}</div>
                <div class = "project-inner-right-availableText"}>
                <span onmouseover="this.style.color='${colorForProject[index]}'" onmouseout="this.style.color='#686868'"> <a onclick = "window.location.href = '${value.destination}'"> ${value.availableText} </a> </span>
                </div>
            </div>
        </div>`
    ;
});
document.querySelector(".projects-container").innerHTML = htmlForProject;

