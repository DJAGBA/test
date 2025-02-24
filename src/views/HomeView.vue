<template>
  <div class="home">
    <header>
      <nav>
        <ul>
          <li><router-link to="/Home">Accueil</router-link></li>
          <li><router-link to="/Contact">Contact </router-link></li>
          <li><router-link to="/À propos">À propos</router-link></li>
        </ul>
      </nav>
    </header>
   
    <main> 
      <h1>Gestion des Émergements des Enseignants</h1> <br>
      <p> 
        Bienvenue sur SmartEdu  notre plateforme dédiée à la gestion des émergements des
        enseignants. <br>
        Dans le cadre de la gestion académique à ESGIS, il est nécessaire d'optimiser le suivi des émergements des enseignants. <br> Actuellement, ce processus est souvent manuel et sujet à des erreurs. <br> L'application proposée vise à automatiser et simplifier la gestion des présences et des heures de cours. <br>Simplifiez le suivi et l'organisation de vos cours ! <br> <br>
      </p>
      <router-link to="/login" class="button">Se connecter</router-link> <br> <br>
    </main>
   <footer>
    <div class="footer-container">
        <div class="footer-section">
            <h3>À propos</h3>
            <p>Notre mission est de fournir des solutions innovantes pour nos utilisateurs.</p>
        </div>
        <div class="footer-section">
            <h3>Liens </h3>
            <ul>
                <li><a href="#">instagram</a></li>
                <li><a href="#">fecebook</a></li>
                <li><a href="#">tiktok</a></li>
                <li><a href="#">twitter</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Contact</h3>
            <p>Email: veroniquedjagba@gmail.com</p>
            <p>Téléphone: +228 70 20 34 10</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Gestion des Emargements des enseignants . Tous droits réservés.</p>
    </div>
</footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color:rgb(238, 21, 21);
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}



nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}


nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;
  transition: background 0.3s ease;
}


nav a:hover {
  background-color:black;
  border-radius: 5px;
}

main {
  margin-top: 120px;
  text-align: center;
  padding: 20pX
}


.button {
  display: inline-block;
  padding: 10px 20px;
  background-color:red;
  color: white;
  text-decoration: none;
  border-radius: 20px;
  margin-top: 15px;
}

.button:hover {
  background-color: red;
  
}
footer {
    background: #222;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.footer-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

.footer-section {
    max-width: 300px;
}

.footer-section h3 {
    margin-bottom: 10px;
    font-size: 18px;
    border-bottom: 2px solid #fff;
    display: inline-block;
    padding-bottom: 5px;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin: 5px 0;
}

.footer-section ul li a {
    color: #fff;
    text-decoration: none;
}

.footer-bottom {
    background: #111;
    padding: 10px 0;
    margin-top: 10px;
}

</style>
