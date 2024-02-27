
const toggleMode = () => {

    var lightLogo = document.querySelector(".header__logo");
  
    var lightbtn = document.querySelector(".toggle__btn");
    lightbtn.classList.add("dark__mode");
  
    var lightBody = document.querySelector("body");
    lightBody.classList.add("dark__body");
  
    var lightTextMenu = document.querySelector(".header__menu");
    lightTextMenu.classList.add("darkmode__text_menu");
  
    var lightTextMenu2 = document.querySelector(".header__menu2");
    lightTextMenu2.classList.add("darkmode__text_menu");
  
    var lightTextMenu3 = document.querySelector(".header__menu3");
    lightTextMenu3.classList.add("darkmode__text_menu");
  
    var lightTitle = document.querySelector(".secondSectionTextTitle");
    lightTitle.classList.add("darkmode__title");
  
    var lightText = document.querySelector(".secondSectionTextLine");
    lightText.classList.add("darkmode__text");
  
    var lightText2 = document.querySelector(".fourthSectionText");
    lightText2.classList.add("darkmode__text");
  
    var lightText3 = document.querySelector(".fourthSectionText2");
    lightText3.classList.add("darkmode__text");
  
  
    lightbtn.addEventListener("click", () => {
  
      if (lightbtn.classList.contains("dark__mode")){
        lightbtn.classList.remove("dark__mode");
        lightbtn.classList.add("light__mode");
        lightBody.classList.remove("dark__body");
        lightBody.classList.add("light__body");
        lightTextMenu.classList.remove("darkmode__text_menu");
        lightTextMenu.classList.add("lightmode__text_menu");
        lightTextMenu2.classList.remove("darkmode__text_menu");
        lightTextMenu2.classList.add("lightmode__text_menu");
        lightTextMenu3.classList.remove("darkmode__text_menu");
        lightTextMenu3.classList.add("lightmode__text_menu");
        lightTitle.classList.remove("darkmode__title");
        lightTitle.classList.add("lightmode__title");
        lightText.classList.remove("darkmode__text");
        lightText.classList.add("lightmode__text");
        lightText2.classList.remove("darkmode__text");
        lightText2.classList.add("lightmode__text");
        lightText3.classList.remove("darkmode__text");
        lightText3.classList.add("lightmode__text");
  
        lightLogo.classList.add("header_logo_light");
        lightLogo.src = "./assets/logopau_light.svg";
        
      } else {
        lightbtn.classList.remove("light__mode");
        lightbtn.classList.add("dark__mode");
        lightBody.classList.remove("light__body");
        lightBody.classList.add("dark__body");
        lightTextMenu.classList.remove("lightmode__text_menu");
        lightTextMenu.classList.add("darkmode__text_menu");
        lightTextMenu2.classList.remove("lightmode__text_menu");
        lightTextMenu2.classList.add("darkmode__text_menu");
        lightTextMenu3.classList.remove("lightmode__text_menu");
        lightTextMenu.classList.add("darkmode__text_menu");
        lightTitle.classList.remove("lightmode__title");
        lightTitle.classList.add("darkmode__title");
        lightText.classList.remove("lightmode__text");
        lightText.classList.add("darkmode__text");
        lightText2.classList.remove("lightmode__text");
        lightText2.classList.add("darkmode__text");
        lightText3.classList.remove("lightmode__text");
        lightText3.classList.add("darkmode__text");
  
        lightLogo.classList.remove("header_logo_light");
        lightLogo.src = "./assets/paulogo.svg";
      }
  
    })
  
  }

const headerCv = () => {
    const page = document.querySelector("#app");
    const divPage = document.createElement("div");
    divPage.className = "header__diversion";
    const logoHeader = document.createElement("img");
    logoHeader.className = "header__logo";
    logoHeader.src = "./assets/paulogo.svg";
    logoHeader.href = "./index.html";
    const divMenuHeader = document.createElement("div");
    divMenuHeader.className = "icons__diversion";
    const menuHeader = document.createElement("p");
    menuHeader.className = "header__menu";
    const menuLink = document.createElement("a");
    menuLink.href = "./index.html";
    menuLink.textContent = "Home";
    menuHeader.append(menuLink);
    const menuHeader2 = document.createElement("p");
    menuHeader2.className = "header__menu2";
    menuHeader2.textContent = "Portfolio";
    const menuHeader3 = document.createElement("p");
    menuHeader3.className = "header__menu3";
    const galleryLink = document.createElement("a");
    galleryLink.href = "./gallery.html";
    galleryLink.textContent = "Gallery";
    menuHeader3.append(galleryLink)
  
    const lightbtn = document.createElement("button");
    lightbtn.className = "toggle__btn";
  
  
    divMenuHeader.append(menuHeader);
    divMenuHeader.append(menuHeader2);
    divMenuHeader.append(menuHeader3);
    divMenuHeader.append(lightbtn);
  
    divPage.append(logoHeader);
    divPage.append(divMenuHeader);
    page.append(divPage);
  
  
  
  
};

const gallery = () => {
   
    const images = [
        "kL3u4Tqfn1s",
        "yVUQlyRlJSw",
        "7H77FWkK_x4",
        "r7YZXv5f5cc",
        "KQ75n3P8EJA",
        "psdV2Rl-GvU",
        "gGIJGnpMZfo",
        "j7AMlh2MMHc",
        "U3cctUBucn0",
        "SMKR4zjSdd4",
        "psdV2Rl-GvU",
        "K-94QEMm3vo",
        "j7AMlh2MMHc",
        "D68ADLeMh5Q",
        "BzuUDHCi_vo",
        "ua2vQnsn_x0",
        "TGOGwgPR1_Q",
        "oqStl2L5oxI",
        "XazoYQRnDZo",
        "YfgE8WCcZsQ",
        "NpMWgJ1_Ohk",
        "SU35VU5de1o",
        "TbUL8w1C-0s",
        "bOvvgayPCyI",
    ];


    const page = document.querySelector(".gallery");

    const galleryTrack = document.createElement("div")
    galleryTrack.className = "gallery-track";

    let num = 0;

    for ( let i = 0; i < 24; i++) {

        num++;

        const galleryCard = document.createElement("div");
        galleryCard.className = "card";

        const galleryCardWrapper = document.createElement("div");
        galleryCardWrapper.className = "card-image-wrapper";

        const galleryCardImg = document.createElement("img");
        galleryCardImg.src = `https://source.unsplash.com/${images[num]}`;

        galleryCardWrapper.append(galleryCardImg);
        galleryCard.append(galleryCardWrapper);
        galleryTrack.append(galleryCard);
    }

    page.append(galleryTrack);

}

const scrollEffect = () => {

    const gallery = document.querySelector('.gallery');
    const track = document.querySelector('.gallery-track');
    const cards = document.querySelectorAll('.card');
    const easing = 0.05;
    let startY = 0;
    let endY = 0;
    let raf;

    const lerp = (start,end,t) => start * (1-t) + end * t;

    function updateScroll() {
    startY = lerp(startY,endY,easing);
    gallery.style.height = `${track.clientHeight}px`;
    track.style.transform = `translateY(-${startY}px)`;
    activateParallax();
    raf = requestAnimationFrame(updateScroll);
    if (startY.toFixed(1) === window.scrollY.toFixed(1)) cancelAnimationFrame(raf);
    }

    function startScroll() {
    endY = window.scrollY; 
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(updateScroll);
    }

    function parallax(card) {
    const wrapper = card.querySelector('.card-image-wrapper');
    const diff = card.offsetHeight - wrapper.offsetHeight;
    const {top} = card.getBoundingClientRect();
    const progress = top / window.innerHeight;
    const yPos = diff * progress;
    wrapper.style.transform = `translateY(${yPos}px)`;
    }

    const activateParallax = () => cards.forEach(parallax);

    function init() {
    activateParallax();
    startScroll();
    }

    window.addEventListener('load',updateScroll,false);
    window.addEventListener('scroll',init,false);
    window.addEventListener('resize',updateScroll,false);

}

headerCv();
gallery();
scrollEffect();
toggleMode();