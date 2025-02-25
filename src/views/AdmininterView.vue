<template>
  <div class="admin-panel">
    <aside>
      <h2>Administration</h2>
      <ul>
        <li><router-link to="/admin/manage-teachers">Gérer les enseignants</router-link></li>
        <li><router-link to="/admin/manage-modules">Gérer les modules</router-link></li>
        <li><router-link to="/admin/manage-filieres">Gérer les filières</router-link></li>
        <li><router-link to="/admin/reports">Rapports</router-link></li>
      </ul>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdminPanel',
};
</script>

<style scoped>
.admin-panel {
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
