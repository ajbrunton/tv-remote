<template>
  <div id="app">
    <div class="controller">
      <div class="row">
        <button class="btn power" @click="command('AAAAAQAAAAEAAAAVAw==')"><i class="fas fa-power-off"></i></button>
        <button class="btn" @click="command('AAAAAQAAAAEAAAAUAw==')"><i class="fas fa-volume-mute"></i></button>
      </div>
      <div class="divider"></div>

      <div class="row">
        <button class="btn" @click="command('AAAAAQAAAAEAAAAOAw==')">Guide</button>
      </div>
      <div class="divider"></div>

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
      <div class="divider"></div>
      <div class="row">
        <div class="col-6">
          <div class="text-center">Volume</div>
          <button class="btn" @click="command('AAAAAQAAAAEAAAASAw==')"><i class="fas fa-plus"></i></button>
          <button class="btn" @click="command('AAAAAQAAAAEAAAATAw==')"><i class="fas fa-minus"></i></button>
        </div>
        <div class="col-6">
          <div class="text-center">Channel</div>
          <button class="btn" @click="command('AAAAAQAAAAEAAAAQAw==')"><i class="fas fa-plus"></i></button>
          <button class="btn" @click="command('AAAAAQAAAAEAAAARAw==')"><i class="fas fa-minus"></i></button>
        </div>
      </div>
      <div class="divider"></div> 

      <div class="row">
          <button class="btn" @click="command('AAAAAQAAAAEAAAA0Aw==')"><i class="fas fa-angle-left"></i></button>
          <button class="btn" @click="command('AAAAAQAAAAEAAAB0Aw==')"><i class="fas fa-angle-up"></i></button>
          <button class="btn" @click="command('AAAAAQAAAAEAAAB1Aw==')"><i class="fas fa-angle-down"></i></button>
          <button class="btn" @click="command('AAAAAQAAAAEAAAAzAw==')"><i class="fas fa-angle-right"></i></button>
      </div>

      <div class="row">
          <button class="btn" @click="command('AAAAAQAAAAEAAABlAw==')">Ok</button>
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

 html {
            -webkit-text-size-adjust: none;
            touch-action: pan-y; /*prevent user scaling*/
        }

body {
  background-color: #000;
  color: white;
  font-family: sans-serif;
  touch-action: manipulation;
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

.col-6{
  width: 50%;
  margin-right: 10px;
}

.divider{
  margin: 20px 0;
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
  touch-action: none;
}

.btn:hover{
  background: rgb(63, 62, 62);
}

.power, .power:hover{
  background: rgb(63, 192, 102);
}

.text-center{
  text-align: center;
}

</style>
