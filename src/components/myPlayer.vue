<template>
  <div class="container" id="container">
    <div class="player">
      <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerContent[nowIndex]"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)">
      </video-player>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player';
export default {
   props: {
    playerContent: {
      type: Array,
      default: [],
    },
  },
  data:function() {
    return {    
      nowIndex:0
    }
  },
  components: {
    videoPlayer
  },
  methods: {
    onPlayerPlay(player) {
    //   alert("play");
    },
    onPlayerPause(player){
    //   alert("pause");
    },
  },
  computed: {
    
  },
  mounted:{
    player:function(){
      return this.$refs.videoPlayer.player
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  .container {
    background-color: #efefef;
    min-height: 100%;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  .container {
    background-color: #efefef;
    min-height: 100%;
  }
  .video-js .vjs-big-play-button{
     /*
      播放按钮换成圆形
     */
    height: 2em;
    width: 2em;
    line-height: 2em;
    border-radius: 1em;
  }
    #container{
        float:right;
        margin-top:-240px;
        margin-right:30px;
        width:400px;
        height:180px;
    }
</style>