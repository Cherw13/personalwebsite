const header = document.querySelector("#header");

header.innerHTML=

` <div id = 'leftHeader'>
    
    <img src="../images/PersonalBrandLogo.png" alt="logo" class="leftHeader-logo" />
   <div id="menus" ><i data-feather="menu"></i> </div>
  </div>

  <ul id = "rightHeader">
    <li><a href="index.html"> Work </a></li>
    <li><a href="passion.html"> Passion Projects</a></li>
    <li><a href="about.html"> About </a></li>
  </ul>`;

feather.replace();

function handleSmallScreen(){
  document.querySelector("#menus").style.setProperty("--header-menu", "visible");
}

function handleBigScreen(){
  document.querySelector("#menus").style.setProperty("--header-menu", "hidden");
}

function handleResize(){
  const screenWidth = window.innerWidth;
  if(screenWidth>760){
    handleBigScreen();
  }

  else{
    handleSmallScreen();
  }
}

window.addEventListener("resize",handleResize);

handleResize();

let isClosed = false;
document.querySelector("#menus").addEventListener("click", ()=>{
  let height;
  isClosed ? height = "0px" : height = "272px";
  isClosed = !isClosed;
  document.querySelector("#rightHeader").style.setProperty("--right-header-height",height);
});