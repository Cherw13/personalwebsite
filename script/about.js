var currentClicked = 0;
const textInfo = document.querySelectorAll(".text-info");

const topTextInfo = document.querySelectorAll(".about-top-tag");
topTextInfo[currentClicked].style.setProperty("--about-top-tag","60%");

topTextInfo.forEach( (value,index,lst)=>{
    value.addEventListener("click", ()=>{
        if(index != currentClicked)
        {
            textInfo[currentClicked].classList.remove("active");
            textInfo[index].classList.add("active");
            lst[currentClicked].style.setProperty("--about-top-tag","0%");
            value.style.setProperty("--about-top-tag","60%");
            currentClicked = index;
        }
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwPlj5x57B1Ot_rYpgeZIOLgLvW-XnhouG8XTckITWnoKSit2cRr3wv20hjKGsq6vN0/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML = "Message sent successfully"
      setTimeout(function (){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    } )
    .catch(error => console.error('Error!', error.message))
})


