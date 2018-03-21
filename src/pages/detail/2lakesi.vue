<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>大元素使</h2>
            <p>元素在呼唤，命运就在眼前!各位召唤师期盼已久的“大元素使 拉克丝”终于在峡谷和大家正式见面了!这款通过不断使用技能击中敌方英雄来收集元素能量，从而得到升级转化为不同形态的拉克丝皮肤为2016年度皮肤重磅之作，让我们一起踏上拉克丝缤纷的变身之旅吧!</p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                  商品类型：
                </div>
                <div class="sales-board-line-right">
                  {{ salesType }}
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                  适用地区：
                </div>
                <div class="sales-board-line-right">
                  {{ salesWhere }}
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                  有效时间：
                </div>
                <div class="sales-board-line-right">
                  {{ salesTime }}
                </div>
            </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  剩余数量：
              </div>
              <div class="sales-board-line-right">
                  {{ salesRemain }}
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  售价：
              </div>
              <div class="sales-board-line-right">
                  <span class="pre-sales">199 元</span>
                  <span class="now-sales">140元</span>    
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button">
                    立即购买
                  </div>
              </div>
          </div>
          <div>
            <my-player :playerContent="playerContent"></my-player>
        </div>
      </div>
        
      <rec-model></rec-model>
    </div>
</template>

<script>
import recModel from '@/components/recModel'
import myPlayer from '@/components/myPlayer'
export default {
    components:{
        recModel,
        myPlayer,
    },
    data:function(){
        return {
            salesType:"终极系列皮肤",
            salesWhere:"全国",
            salesTime:"半年",
            salesRemain:10,
        playerContent:[{
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
            type: "video/mp4",
            src: "/static/MV/lakesiMV.mp4" 
            }],
            poster: require("../../assets/slideShow/pic2.jpg"), //你的封面地址
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
            }
        }],
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pre-sales{
        text-decoration:line-through
    }
    .now-sales{
        color:red;
        font-size:1.5em;
        line-height:15px;
    }
</style>
