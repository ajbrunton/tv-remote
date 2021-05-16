<template>
  <div id="app">
    <div class="controller">
      <div class="row">
        <button class="btn power" @click="command('AAAAAQAAAAEAAAAVAw==')"><i class="fas fa-power-off"></i></button>
        <button class="btn" @click="command('AAAAAQAAAAEAAAAUAw==')"><i class="fas fa-volume-mute"></i></button>
      </div>
      <div class="row">
        <button class="btn" @click="command('AAAAAQAAAAEAAAAOAw==')">Guide</button>
      </div>
      <div class="row">
        <button class="btn" @click="command('AAAAAQAAAAEAAAAAAw==')">1</button>
        <button class="btn" @click="command('AAAAAQAAAAEAAAABAw==')">2</button>
        <button class="btn" @click="command('AAAAAQAAAAEAAAACAw==')">3</button>
      </div>
      <div class="row">
        <button class="btn" @click="command('AAAAAQAAAAEAAAADAw==')">4</button>
        <button class="btn" @click="command('AAAAAQAAAAEAAAAEAw==')">5</button>
        <button class="btn" @click="command('AAAAAQAAAAEAAAAFAw==')">6</button>
      </div>
      <div class="row">
        <button class="btn" @click="command('AAAAAQAAAAEAAAAGAw==')">7</button>
        <button class="btn" @click="command('AAAAAQAAAAEAAAAHAw==')">8</button>
        <button class="btn" @click="command('AAAAAQAAAAEAAAAIAw==')">9</button>
      </div>
      <div class="row">
        <button class="btn" @click="command('AAAAAQAAAAEAAAAJAw==')">0</button>
      </div>
    </div>
  </div>
</template>

<script>
const endpoint = `http://${window.location.host}/command/`


export default {
  name: 'App',
  methods: {
    command(cmd){
      fetch(endpoint + cmd)
    }
  }
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";

body {
  background-color: #000;
  color: white;
}

.controller{
  padding: 20px;
  margin: 0 auto;
}

.row{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.btn{
  padding: 20px 10px;
  width: 100%;
  border: none;
  margin: 5px;
  border-radius: 5px;
  font-size: 1.4rem;
  background: rgb(46, 45, 45);
  color: white;
  cursor: pointer;
}

.btn:hover{
  background: rgb(63, 62, 62);
}

.power, .power:hover{
  background: rgb(63, 192, 102);
}

</style>
