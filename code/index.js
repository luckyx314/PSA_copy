const userIcon = () => {
  const i = document.createElement("i");
  i.setAttribute("class", "fa-solid fa-user icon");
  return i;
}

const generatePopulationIcons = () => {
  const popIcons = document.getElementById("population-icons");
  let ctr = 0;

  while(ctr < 42) {
    const person = userIcon();
    popIcons.appendChild(person);

    if (ctr > 21) {
      person.classList.add("female");
    } else {
      person.classList.add("male");
    }
    ctr++;
  }
}


// population section
generatePopulationIcons();
