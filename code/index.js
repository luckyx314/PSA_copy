const userIcon = () => {
    const i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-user icon");
    return i;
};

const generatePopulationIcons = () => {
    const popIcons = document.getElementById("population-icons");
    let ctr = 0;

    while (ctr < 42) {
        const person = userIcon();
        popIcons.appendChild(person);

        if (ctr > 21) {
            person.classList.add("female");
        } else {
            person.classList.add("male");
        }
        ctr++;
    }
};

const highlightSidebarNav = () => {
    const sections = document.querySelectorAll("section");
    const sidebarLi = document.querySelectorAll("nav#sidebar ul li");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY > sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });
        sidebarLi.forEach((li) => {
            li.childNodes[1].childNodes[1].classList.remove("active");
            li.childNodes[1].childNodes[3].classList.remove("active");

            if (li.classList.contains(current)) {
                li.childNodes[1].childNodes[1].classList.add("active");
                li.childNodes[1].childNodes[3].classList.add("active");
            }
        });
    });
};

// population section
generatePopulationIcons();

// sidebar nav
highlightSidebarNav();
