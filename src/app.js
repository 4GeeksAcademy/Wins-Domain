/* eslint-disable */
import "bootstrap";
import "./style.css";

function generateDomainName() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net"];
  const domainArray = [];
  for (let pronoun1 of pronoun) {
    for (let adj1 of adj) {
      for (let noun1 of noun) {
        for (let extension of ext) {
          domainArray.push(`${pronoun1}${adj1}${noun1}${extension}`);
          console.log(`${pronoun1}${adj1}${noun1}${extension}`);
        }
      }
    }
  }
  return domainArray;
}

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    const names = generateDomainName();
    const listNames = document.getElementById("domainList");

    names.forEach(word => {
      const el = document.createElement("li");
      el.textContent = word;
      listNames.appendChild(el);
    });
  });
};
