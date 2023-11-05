// Dropdown Function

const dropdownButton = document.getElementById("dropdown-button");
const dropdownList = document.getElementById("dropdown-list");

dropdownButton.addEventListener("click", ()=>{
    if (dropdownList.style.display === "flex") {
        dropdownList.style.display = "none";
    } else {
        dropdownList.style.display = "flex";
    }
})

// Nav Link
const navLinks = document.querySelectorAll('.nav-link');


function toggleActiveClass() {
    const currentURL = window.location.pathname;
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === currentURL) {
            link.classList.add('active');
        }
    });
}

toggleActiveClass();

navLinks.forEach(link => {
    link.addEventListener('click', toggleActiveClass);
});


// Sidebar
const sideButton = document.getElementById('side-button');
const headerWrap = document.getElementById('header');
const sideWrap = document.getElementById("sidebar");
const panelWrap = document.getElementById("panel-wrap");
const sideClose = document.getElementById('close-sidebar');


sideButton.addEventListener("click", ()=>{
    if (!headerWrap.classList.contains("expand") && !sideWrap.classList.contains("expand") && !panelWrap.classList.contains("expand")) {
        headerWrap.classList.add("expand");
        sideWrap.classList.add("expand");
        panelWrap.classList.add("expand");
      } else {
        headerWrap.classList.remove("expand");
        sideWrap.classList.remove("expand");
        panelWrap.classList.remove("expand");
      }
})
sideClose.addEventListener("click", ()=>{
    headerWrap.classList.add("expand");
    sideWrap.classList.add("expand");
    panelWrap.classList.add("expand");
})



  