const setObserver = (className) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            } else {
                entry.target.classList.remove(className);
            }
        });
    });
    return observer;
};

// observers
const showObserver = setObserver("show");
const fadeObserver = setObserver("fade-in");

// elements
const hiddenElements = document.querySelectorAll(".hidden");
const fadedElements = document.querySelectorAll(".fade");
const ungrownElements = document.querySelectorAll(".ungrown");

// vertical bars

// observe elements
hiddenElements.forEach((el) => showObserver.observe(el));
fadedElements.forEach((el) => fadeObserver.observe(el));
