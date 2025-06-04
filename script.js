// copyright date
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("copyright-year")
  if (yearSpan) {
    const currentYear = new Date().getFullYear()
    yearSpan.textContent = currentYear
  }
})

const navEl = document.querySelector("header nav")
const hamburgerBtnEl = document.querySelector(".hamburger-btn")
const dropdownBtnEls = document.querySelectorAll(".dropdown-btn")

document.addEventListener("click", (e) => {
  // open nav
  if (e.target.closest(".hamburger-btn")) {
    openNav()
  }
  // close nav
  else if (
    !e.target.closest(".hamburger-btn") &&
    !e.target.closest("nav") &&
    hamburgerBtnEl.classList.contains("active")
  ) {
    closeNav()
  }
})

// open nav func
function openNav() {
  hamburgerBtnEl.setAttribute("aria-expanded", true)
  hamburgerBtnEl.classList.toggle("active")
  navEl.classList.toggle("active")
}

// close nav func
function closeNav() {
  hamburgerBtnEl.setAttribute("aria-expanded", false)
  hamburgerBtnEl.classList.toggle("active")
  navEl.classList.toggle("active")
}

// open / close dropdoen func
dropdownBtnEls.forEach((btn) => {
  let dropdown = btn.parentElement

  btn.addEventListener("click", () => {
    if (!dropdown.classList.contains("active")) {
      dropdownBtnEls.forEach((button) =>
        button.parentNode.classList.remove("active")
      )

      dropdown.classList.add("active")

    } else if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active")
    }
  })
})

// collapse all dropdown content when hovered over dropdown button 
dropdownBtnEls.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    if(btn.parentNode.classList.contains('active')){
      return
    }
    else if(!btn.parentNode.classList.contains('active')) {
      dropdownBtnEls.forEach((button) =>
        button.parentNode.classList.remove("active")
      )
    }
  })
})
