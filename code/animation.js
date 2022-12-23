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

const realTimeClock = () => {
    let rtClock = new Date();
    let hrs = rtClock.getHours();
    let min = rtClock.getMinutes();
    let sec = rtClock.getSeconds();

    let ampPm = (hrs < 12) ? "AM" : "PM";

    hrs = (hrs > 12) ? hrs - 12 : hrs;

    hrs = ("0" + hrs).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);

    document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec + " " + ampPm;
    let t = setTimeout(realTimeClock, 500);

}

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


// clock
realTimeClock();
