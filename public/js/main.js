const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

const sideMenu = document.getElementById("side-menu");

function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyVGbEdOgPWs0CCOKR60uRo3P4LYnSEnlOX401_fw9Q45pZ1NrgnrrKVT3LjYGb3xetFg/exec'
  const form = document.forms['submit-to-google-sheet'];

  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

function openWhatsApp() {
    let number = '+27798316096'
    let message = 'Hello, I would like to build a website for my business. Can you help me?'
    let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
}