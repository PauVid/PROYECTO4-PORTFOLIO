

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
  logoHeader.src = "./assets/paulogo.svg"
  const divMenuHeader = document.createElement("div");
  divMenuHeader.className = "icons__diversion";
  const menuHeader = document.createElement("p");
  menuHeader.className = "header__menu";
  menuHeader.textContent = "Home";
  const menuHeader2 = document.createElement("p");
  menuHeader2.className = "header__menu2";
  menuHeader2.textContent = "Portfolio";
  const menuHeader3 = document.createElement("p");
  menuHeader3.className = "header__menu3";
  menuHeader3.textContent = "About";

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
const firstSection = () => {
  const page = document.querySelector("#app");

  const firstSectionElements = document.createElement("div");
  firstSectionElements.className = "firstSection";
  let num = 0;
  for(let i = 0; i < 3; i++){
    num++
    const firstSectionElement = document.createElement("div");
    const firstSectionImages = document.createElement("div");
    const firstSectionImage = document.createElement("div");
    const divTextOverlay = document.createElement("div");
    const text = document.createElement("h3");
    const btn = document.createElement("button");
    firstSectionImage.className = `firstImg${num}`;
    firstSectionImages.className = `card__image${num}`;
    // divTextOverlay.className = `descriptionFirst${num}`;
    divTextOverlay.className = "card__overlay";
    firstSectionElement.className = `firstSection${num}`;

    text.textContent = `${num} Project`;
    btn.textContent = "See More";

    divTextOverlay.append(text);
    divTextOverlay.append(btn);
    firstSectionImages.append(firstSectionImage);
    firstSectionElement.append(firstSectionImages);
    firstSectionElement.append(divTextOverlay);
    firstSectionElements.append(firstSectionElement);
  }

  page.append(firstSectionElements)

}

const secondSection = () => {
  const page = document.querySelector("#app");

  const secondSectionElements = document.createElement("div");
  secondSectionElements.className = "secondSection";

  const secondSectionBanner = document.createElement("div");
  secondSectionBanner.className = "secondSectionBanner";

  const secondSectionBGroup = document.createElement("div");
  secondSectionBGroup.className = "secondSectionBGroup";

  const secondSectionText = document.createElement("div");
  secondSectionText.className = "secondSectionText";

  const secondSectionTextTitle = document.createElement("h3");
  secondSectionTextTitle.className = "secondSectionTextTitle";
  secondSectionTextTitle.textContent = "Lorem ipsum";
  secondSectionText.append(secondSectionTextTitle)

  const secondSectionTextLine = document.createElement("p");
  secondSectionTextLine.className = "secondSectionTextLine";
  secondSectionTextLine.textContent = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth."
  secondSectionText.append(secondSectionTextLine);


  const secondSectionImage = document.createElement("div");
  secondSectionImage.className = "secondSectionImage";


  secondSectionBGroup.append(secondSectionText)
  secondSectionBGroup.append(secondSectionImage)
  secondSectionElements.append(secondSectionBanner)
  secondSectionElements.append(secondSectionBGroup)
  page.append(secondSectionElements);
};
const thirdSection = () => {
  const page = document.querySelector("#app");

  const divThirdSection = document.createElement("div");
  divThirdSection.className = "thirdSection";
  const thirdSectionBanner = document.createElement("div");
  thirdSectionBanner.className = "thirdSectionBanner";

  const fourthSectionText = document.createElement("p");
  fourthSectionText.className = "fourthSectionText";
  fourthSectionText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

  const thirdSectionBanner2 = document.createElement("div");
  thirdSectionBanner2.className = "thirdSectionBanner2";

  const fourthSectionText2 = document.createElement("p");
  fourthSectionText2.className = "fourthSectionText2";
  fourthSectionText2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  divThirdSection.append(thirdSectionBanner);
  divThirdSection.append(fourthSectionText);
  divThirdSection.append(thirdSectionBanner2);
  divThirdSection.append(fourthSectionText2);
  page.append(divThirdSection);
}



headerCv();
firstSection();
secondSection();
thirdSection(); 
toggleMode()