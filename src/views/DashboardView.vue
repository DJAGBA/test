<template>
  <div class="dashboard">
    <aside>
      <div class="profile-header">
        <img :src="photoEnseignant" alt="Photo de profil" class="profile-picture">
        <h2>Bienvenue, {{ nomEnseignant }}</h2>
      </div>
      <ul>
        <li><router-link to="/debutducours">Début de cours</router-link></li> <br>
        <li><router-link to="/finducours">Fin de cours</router-link></li> <br>
        <li><router-link to="/cumuldheure">Cumul d'heures</router-link></li> <br>
        <li><router-link to="/historique">Historique des cours</router-link></li> <br>
        <!-- <li><router-link to="/teacher/profile">Profil</router-link></li> <br> -->
        <li><a href="Login">Déconnexion</a></li>
      </ul>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  name: 'Teacher',
  data() {
    return {
      nomEnseignant: 'Nom Prénom', 
      photoEnseignant: 'https://media.gettyimages.com/id/1358852926/fr/photo/math-enseignant-en-salle-de-classe.jpg?s=612x612&w=0&k=20&c=mO5md_RueAW2UdaM8iCHUP3GfCQOLD1YQ61QXzZmMzM=', 
    };
  },
};
</script>
<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
}

aside {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.profile-picture {
  width: 80px;
  height: 80px;
  border-radius: 80%;
  margin-bottom: 10px;
}

aside ul {
  list-style: none;
  padding: 0;
}

aside li {
  margin-bottom: 10px;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
