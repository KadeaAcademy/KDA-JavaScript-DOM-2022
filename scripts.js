// document.getElementById
const item1 = document.getElementById("item-1");

// console.log(item1);
// document.getElementsByClassName
const lists = document.getElementsByClassName("list");
// console.log(lists);

// document.getElementsByTagName

const items = document.getElementsByTagName("li");

// console.log(items);

// document.querySelector

const item1WithQuerySelector = document.querySelector("#item-1");
const listWithQuerySelector = document.querySelector(".list");

// console.log(item1WithQuerySelector);
// console.log(listWithQuerySelector);

// document.querySelectorAll
const item = document.querySelector("ul > li");
// console.log("item", item);
const listWithQuerySelectorAll = document.querySelectorAll(".list");
// console.log(listWithQuerySelectorAll);

// Accerder aux elements du DOM
console.log(item1.textContent);

// Modifier le contenu d'un élément HTML

item1.textContent = "Amos";
console.log(item1.textContent);

// Changer les styles d'un élément HTML
item1.style = "color: red";

// Modifier des classes

listWithQuerySelector.classList.add("list-style-none");

// Créez de nouveaux éléments

const jared = document.createElement("li");
jared.textContent = "Jared";

// Attacher les nouveaux éléments au DOM
listWithQuerySelector.prepend(jared);

// Supprimer et remplacez des éléments du DOM

jared.remove();
item1.remove();

// formulaire d'ajout des apprenants

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputsValues = {};

  for (const field of this.elements) {
    const { name, value } = field;
    if (name) {
      inputsValues[name] = value;
    }
  }

  const newItem = document.createElement("li");
  newItem.textContent = inputsValues.name;
  listWithQuerySelector.appendChild(newItem);
});
