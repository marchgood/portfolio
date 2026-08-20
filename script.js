// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// Tutup menu setelah memilih menu

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


// ========================================
// FOOTER YEAR
// ========================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// ========================================
// SKILL MODAL
// ========================================

const modal = document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const closeModal =
    document.getElementById("closeModal");


const skillCards =
    document.querySelectorAll(".skill");


skillCards.forEach(card => {

    card.addEventListener("click", () => {

        const skill =
            card.getAttribute("data-skill");

        const detail =
            card.getAttribute("data-detail");


        modalTitle.textContent = skill;

        modalText.textContent = detail;


        modal.classList.add("show");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

    });

});


// ========================================
// CLOSE MODAL
// ========================================

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

});


// Klik area luar popup untuk menutup

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("show");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    }

});


// Tekan ESC untuk menutup popup

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        modal.classList.remove("show");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    }

});


// ========================================
// SCROLL ANIMATION
// ========================================

const animatedElements =
    document.querySelectorAll(
        ".skill, .project, .info"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});
