/* =========================================================
   PROSIT 2 - FONCTIONNALITÉS JAVASCRIPT
   Fichier : scripts/main.js
   ========================================================= */

/* On attend que tout le HTML soit chargé avant d'exécuter le JS */
document.addEventListener('DOMContentLoaded', function() {

    /* -----------------------------------------------------
       1. MESSAGE DE BIENVENUE (Alert au chargement)
       ----------------------------------------------------- */
    alert('Bienvenue sur notre plateforme d\'archivage de CERs ! Plongeons ensemble dans les profondeurs de la connaissance.');


    /* -----------------------------------------------------
       2. VALIDATION DU FORMULAIRE DE CONTACT
       ----------------------------------------------------- */
    const contactForm = document.querySelector('form.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');
            let isValid = true;

            // Vérification : l'email doit contenir un @
            if (!emailInput.value.includes('@')) {
                alert('Veuillez entrer une adresse e-mail valide, source de clarté et de communication.');
                event.preventDefault();
                isValid = false;
            }

            // Vérification : le message ne doit pas être vide
            if (isValid && messageInput.value.trim() === '') {
                alert('Laissez vos pensées s\'exprimer pleinement, sans restreindre l\'esprit.');
                event.preventDefault();
                isValid = false;
            }

            // Si tout est OK, on confirme à l'utilisateur
            if (isValid) {
                alert('Merci ! Votre message a bien été envoyé.');
            }
        });
    }


    /* -----------------------------------------------------
       3. BOUTON "VOIR PLUS" (Toggle d'affichage)
       ----------------------------------------------------- */
    const loadMoreBtn = document.getElementById('loadMore');

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const moreContent = document.getElementById('moreContent');

            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                moreContent.style.display = 'block';
                this.textContent = 'Cacher';
            } else {
                moreContent.style.display = 'none';
                this.textContent = 'Voir plus';
            }
        });
    }


    /* -----------------------------------------------------
       4. BONUS : Système de favoris (cœurs cliquables)
       ----------------------------------------------------- */
    const favoriteButtons = document.querySelectorAll('.cer-card__favorite');

    favoriteButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const heart = this.querySelector('.cer-card__favorite-icon path');
            
            // Si le cœur est déjà rempli (rouge), on le vide
            if (heart.getAttribute('fill') === 'red') {
                heart.setAttribute('fill', 'none');
            } else {
                // Sinon, on le remplit en rouge
                heart.setAttribute('fill', 'red');
            }
        });
    });

});