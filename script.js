document.querySelector(".questions__content").addEventListener("click", (e) => {
  const questions = [...document.querySelectorAll(".item-question")];
  if (!e.target.classList.contains("item-question__title")) return;

  const element = e.target.closest(".item-question");
  if (element) {
    questions.forEach((el) => {
      if (element !== el) {
        el.classList.remove("open");
        el.querySelector(".item-question__info").style.height = "0";
      }
    });

    element.classList.toggle("open");
    const answer = element.querySelector(".item-question__info");
    if (element.classList.contains("open"))
      answer.style.height = answer.scrollHeight + "px";
    else answer.style.height = "0";
  }
});
// ----------------------- Accordion -----------------------

function toggleMenu(e) {
  if (
    e.target.classList.contains("menu__link") ||
    e.target.closest(".menu__link")
  ) {
    burger.classList.remove("open");
    menu.classList.remove("active");
    document.body.classList.remove("locked");
  } else if (e.currentTarget.classList.contains("burger")) {
    burger.classList.toggle("open");
    menu.classList.toggle("active");
    document.body.classList.toggle("locked");
  }
}

const menu = document.querySelector(".menu");
menu.addEventListener("click", toggleMenu);

const burger = document.querySelector(".burger");
burger.addEventListener("click", toggleMenu);
// ----------------------- Burger -----------------------
function menuSwitcher() {
  let sections = document.querySelectorAll("section");
  sections = [...sections];
  let navLinks = [...document.querySelectorAll("*[data-link='nav']")];
  let maxIndex = 0;
  sections.forEach((el, idx) => {
    if (window.scrollY - el.offsetTop >= -48) {
      navLinks[idx].classList.add("active");
      maxIndex = idx;
    }
  });
  navLinks = navLinks.filter((el, idx) => idx !== maxIndex);
  navLinks.forEach((el) => {
    el.classList.remove("active");
  });
}

const features = document.querySelector(".features");
setInterval(() => {
  menuSwitcher();
  if (window.scrollY >= features.offsetTop) {
    menu.classList.add("fixed");
    burger.classList.add("fixed");
  } else {
    menu.classList.add("out");
    burger.classList.add("out");
    setTimeout(() => {
      menu.classList.remove("out");
      menu.classList.remove("fixed");
      burger.classList.remove("out");
      burger.classList.remove("fixed");
    }, 300);
  }
}, 100);
// ----------------------- Fixed menu -----------------------
const submitBtn = document.querySelector('.footer__form input[type="submit"]');
submitBtn.addEventListener("click", () => {
  const emailField = document.querySelector(
    '.footer__form input[type="email"]'
  );
  const form = document.querySelector(".footer__form");
  const message = document.querySelector(".footer__message");
  const successMessage = document.querySelector(".footer__success-message");

  const newsLetter = document.querySelector(".footer__news-letter-title");

  const regExp = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  if (emailField.value.match(regExp) === null) {
    message.style.display = "block";
    messageValue = "Email addresses should follow the format user@domain.com.";
    if (emailField.value === "") messageValue = "Email Address is required.";
    message.innerText = messageValue;
  } else {
    console.log("valid message");
    successMessage.style.display = "block";
    newsLetter.style.display = "none";
    form.style.display = "none";
  }
});
// ----------------------- Form validation -----------------------
