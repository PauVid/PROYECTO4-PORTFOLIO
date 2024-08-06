import data from "./data";
import "./experience.css";

const template = () => {
    return `
    <section class="experience" id="experience">
    <h2>Experience</h2>
    <ul>
    ${data.workExperience.map((item) => `<li>
    <h3>${item.startDate}</h3>
    <h4>${item.company}</h4>
    <h4>${item.position}</h4>
    <p>${item.description}</p>
    </li>`
    ).join("")}
    </ul>
    </section>
    `;
};

const Experience = () => {
    return template();
};

export default Experience;