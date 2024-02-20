import './style.css'

const headerCv = () => {
  const page = document.querySelector("#app");
  const divPage = document.createElement("div");
  divPage.className = "header__diversion";
  const logoHeader = document.createElement("div");
  logoHeader.className = "header__logo";
  const divIconsHeader = document.createElement("div");
  divIconsHeader.className = "icons__diversion";
  
  for (let i = 0; i < 3; i++) {
    const iconsHeader = document.createElement("div");
    iconsHeader.className = "header__icons";
    divIconsHeader.append(iconsHeader);
  }

  divPage.append(logoHeader);
  divPage.append(divIconsHeader);   
  page.append(divPage);

};
const firstSection = () => {
  const page = document.querySelector("#app");
  
  const firstSectionElements = document.createElement("div");
  firstSectionElements.className = "firstSection";
  
  for(let i = 0; i < 3; i++){
    const firstSectionElement = document.createElement("div");
    firstSectionElement.className = "firstElements";
    
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
  
  for(let i = 0; i < 5; i++){
    const secondSectionTextLine = document.createElement("div");
    secondSectionTextLine.className = "secondSectionTextLine";
    
    secondSectionText.append(secondSectionTextLine);
  }
  
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
  const thirdSectionBanner2 = document.createElement("div");
  thirdSectionBanner2.className = "thirdSectionBanner2";
  
  divThirdSection.append(thirdSectionBanner);
  divThirdSection.append(thirdSectionBanner2);
  page.append(divThirdSection);
}
const fourthSection = () => {
  
  const page = document.querySelector("#app");
  
  const divFourthSection = document.createElement("div");
  divFourthSection.className = "fourthSection";
  
  const divFourthSectionText = document.createElement("div");
  divFourthSectionText.className = "divFourthSectionText";
  const divFourthSectionText2 = document.createElement("div");
  divFourthSectionText2.className = "divFourthSectionText2";
  
  for(let i = 0; i < 5; i++){
    const fourthSectionTextLine = document.createElement("div");
    fourthSectionTextLine.className = "fourthSectionTextLine";
    
    divFourthSectionText2.append(fourthSectionTextLine);
  }
  
  for(let i = 0; i < 5; i++){
    const fourthSectionTextLine = document.createElement("div");
    fourthSectionTextLine.className = "fourthSectionTextLine";
    
    divFourthSectionText.append(fourthSectionTextLine);
  }
  
  divFourthSection.append(divFourthSectionText);
  divFourthSection.append(divFourthSectionText2);
  page.append(divFourthSection);
  
}

headerCv();
firstSection();
secondSection();
thirdSection();
fourthSection();