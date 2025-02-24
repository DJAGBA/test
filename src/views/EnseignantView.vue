<template>
  <div class="dashboard">
    <aside>
      <h2>Bienvenue, {{ nomEnseignant }}</h2>
      <ul>
        <li><router-link to="/teacher/start-course">Début de cours</router-link></li>
        <li><router-link to="/teacher/end-course">Fin de cours</router-link></li>
        <li><router-link to="/teacher/hours">Cumul d'heures</router-link></li>
        <li><router-link to="/teacher/history">Historique des cours</router-link></li>
        <li><a href="#">Déconnexion</a></li>
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
      nomEnseignant: 'Nom Prénom', // À récupérer après la connexion
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
