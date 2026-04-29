// --- Animation de bienvenue ---
window.onload = function() {
    const header = document.querySelector('header h1');
    header.style.opacity = 0;
    header.style.transition = 'opacity 3s ease';

    setTimeout(() => {
        header.style.opacity = 1;
    }, 200);
};

// --- Formulaire de contact ---
function envoyerMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Vérifier que tous les champs sont remplis
      if (!name || !email || !message) {
    alert('⚠️ Merci de remplir tous les champs !');
    return;
  }

  // Afficher une confirmation
    document.getElementById('formulaire').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}