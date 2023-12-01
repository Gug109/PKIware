const reqCertificate = document.querySelector(".section__request-btn");
const mainUl = document.querySelector(".section__main-ul");
const footer = document.querySelector(".footer");
const secondarySection = document.querySelector(".secondary-section");
const header = document.querySelector(".header");
const certificateDetalis = document.querySelectorAll(".section__child-row-eye-icon");
const showUserInfo = document.querySelector(".secondary-section__angel-icon");
const showUserInfoMainBlock = document.querySelector(".secondary-section__show-user-infos-main-block");
const renewBtn = document.querySelector(".secondary-section__renew-btn");
secondarySection.style = "display:none";

showUserInfo.addEventListener('click', (e) => {
    e.preventDefault();

    if (showUserInfoMainBlock.style.display === "block") {
        showUserInfoMainBlock.style.display = "none";
    } else {
        showUserInfoMainBlock.style.display = "block";
    }
});

certificateDetalis.forEach(element => {
    element.addEventListener('click', () => {
        mainUl.style = "display:none";
        footer.style = "display:none";
        secondarySection.style = "display:block";
        header.style = "margin-bottom: 0";
        footer.style = "display:block";
    })
});