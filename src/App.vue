<template>
  <div id="app">
    <div class="container" id="app">
        <div class="nav_bar">
            <ul>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About Me</router-link>
                <router-link to="/trivia">Trivia</router-link>
                <router-link to="/dogs">Favorite Dogs I've Fostered</router-link>
                <router-link to="/contact">Contact</router-link>
            </ul>
        </div>
        <main class="body">
            <router-view></router-view>
        </main>
        <footer class="footer">
            <p>&#169; Riyo Perry 2021</p>
        </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
