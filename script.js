
// ===================================
// VARLIAD WEBSITE JAVASCRIPT
// ===================================


// AUTOMATIC COPYRIGHT YEAR

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// LEADERSHIP PILLARS INTERACTION

const pillarCards = document.querySelectorAll(".pillar-card");

pillarCards.forEach(card => {

    card.addEventListener("toggle", () => {

        if (card.open) {

            pillarCards.forEach(otherCard => {

                if (otherCard !== card) {
                    otherCard.open = false;
                }

            });

        }

    });

});
