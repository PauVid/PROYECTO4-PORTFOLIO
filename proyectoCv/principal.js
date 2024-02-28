import "./principal.css"
import { aboutMe } from "./aboutMe";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";

let show = "Experience";

const template = () => {
    return `
    <main>
    ${aboutMe()}
    <div class="change-container">
    <button id="change">Show ${show}</button>
    </div>
    <div id="content">
    ${Education()}
    </div>
    ${Projects()}
    </main>
    `;
};

export const principal = () => {
    return template();
};

export const addPrincipalListeners = () => {
    const button = document.querySelector("#change");

    button.addEventListener("click", () => {
        const content = document.querySelector("#content");

        if (show === "Experience") {
            content.innerHTML = `${Experience()}`;
            show = "Education";
        } else {
            content.innerHTML = `${Education()}`;
            show = "Experience";
        }
        button.textContent = `Show ${show}`;
    })
};