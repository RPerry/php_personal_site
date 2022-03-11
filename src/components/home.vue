<template>
<div class="homeContainer">
  <section class="homeName">
    <h2>Riyo Perry</h2>
  </section>
  <div class="box"></div>
</div> 
</template>

<script>


export default {
  name: 'home',
  component: {
  }
}
</script>

<style scoped>
.homeContainer {
  display: grid;
  grid-template-columns: 35.5% 14.5% 40% 50%;
  grid-template-rows: 14.9% 23.1% 30% 8% 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  width: 98vw;
  height: 70vh;
  margin-top: 5%;
}

.homeName { 
  grid-area: 1 / 3 / 3 / 4;
  font-size:6vw;
  position: absolute;
  margin-top: 6.5%;
  margin-left: 16.8%;

}

.box { 
  grid-area: 2 / 2 / 4 / 4;
  background-color: lightblue;
  margin-left: 6.5%;
  width: 100%
}

.header {
  display: none;
}

@media screen and (max-width: 800px) {
  .homeName{
    margin-top: 40%
  }
}

  
</style>
