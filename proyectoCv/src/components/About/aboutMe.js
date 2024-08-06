import data from "./data";
import "./aboutMe.css";

const template = () => {
    return `
    <section class="aboutme" id="aboutme">
        <h2>About Me</h2>
        <img class="avatar" src=${data.avatar} alt=${data.name}/>
        <ul>
        ${data.skills.map((skill) => `<li><p>${skill}</p></li>`).join("")}
        </ul>
        <p>${data.aboutMe}</p>
        <p>${data.adress}</p>
        <a href=${`mailto:${data.email}>Contact me</a>`}
        </section>
        `;
};

export const aboutMe = () => {
    return template();
};

export const addAboutListeners = () => {
    const avatar = document.querySelector(".avatar");
    avatar.addEventListener("click", (e) => e.target.classList.toggle("rotate"));
};