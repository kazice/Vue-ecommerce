<template>

<div class="sales-board-des">
        <h2>畅销系列</h2>
        <p>众多精美皮肤火热售卖中，折扣多多，最低4折起，赶紧行动吧！</p>

        <table class="sales-board-table">
          <tbody> 
              <tr class="ui-table-row">
                  <td class="col-first" v-for="(item,index) in hotSales1">
                      <div class="intro-pic">
                          <label>{{ hotSales1[index] }}</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first" v-for="(item,index) in hotSales2">
                      <div class="intro-pic">
                          <label>{{ hotSales2[index] }}</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first" v-for="(item,index) in hotSales3">
                      <div class="intro-pic">
                          <label>{{ hotSales3[index] }}</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first" v-for="(item,index) in hotSales4">
                      <div class="intro-pic">
                          <label>{{ hotSales4[index] }}</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first" v-for="(item,index) in hotSales5">
                      <div class="intro-pic">
                          <label>{{ hotSales5[index] }}</label>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
</div>
</template>

<script>
export default {
    data:function(){
        return{
            hotSales1:['情人节系列','冰雪节系列','万圣节系列','2017SKT','战场BOSS','猩红之月','星之守护者'],
            hotSales2:['2017愚人节','惊悚派对','鸡年三国','枯萎之壤','运动员系列','绞肉机系列','2014SSW'],
            hotSales3:['驯龙系列','奇幻冒险小队','灭世魔神系列','探戈灵魂','太空系列','英特尔系列','舞会系列'],
            hotSales4:['刺客信条系列','英雄去超越！','勇敢的心','钢铁系列','海贼系列','升金甲虫','世界破坏者'],
            hotSales5:['狼外婆系列','血色苍穹','星座系列','偶像明星系列','2016万圣节','古埃及','医护系列']
        }
    }
}
</script>

<style>

</style>

