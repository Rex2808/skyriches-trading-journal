const getStartedBtn = document.getElementById("get-started-btn");
const dashboardSection = document.getElementById("dashboard-preview");

getStartedBtn.addEventListener("click", () => {
    dashboardSection.scrollIntoView({
        behavior: "smooth"
    });
});

