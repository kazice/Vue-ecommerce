<template>
  <div class="index-wrap">
      <div class="index-left">
          <div class="index-left-block">
              <h2>全部商品</h2>
              <template v-for="product in productList">
              <h3>{{ product.title }}</h3>
              <ul>
                <li v-for="item in product.list">
                  <a :href="item.url">{{ item.name }}</a>
                  <span v-if="item.hot" class="hot-tag">HOT</span>
                </li>
              </ul>
              <div class="hr" v-if="!product.last"></div>
              </template>
          </div>
          <div class="index-left-block lastest-news">
              <h2>最新上架</h2>
              <ul>
                  <li v-for="item in newsList">
                      <a :href="item.url">{{ item.title }}</a>
                      <span v-if="item.hot" class="hot-tag">HOT</span>
                      <div class="hr" v-if="!item.last"></div>
                  </li>
              </ul>
          </div>
      </div>
      <div class="index-right">
          <slide-show :slides="slides"></slide-show>
          <div class="index-board-list">
              <div class="index-board-item" v-for="(item,index) in boardList" 
              :class="['index-board-' + item.id,{'line-last':(index + 1) % 2 === 0}]">
                <div class="index-board-item-inner">
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.description }}</p>
                    <div class="index-board-button">
                        <router-link class="button" :to="{path:item.url}">立即购买</router-link>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import slideShow from '@/components/slideShow'
export default {
  components:{
    slideShow
  },
  data:function(){
      return {
        invTime:2000,
        slides:[
          {
          src: require('../assets/slideShow/pic1.jpg'),
          title: '未来战士 伊泽瑞尔',
          href: 'detail/1ez'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: '大元素使 拉克丝',
          href: 'detail/2lakesi'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: '未来守卫 凯特琳',
          href: 'datail/3katelin'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'DJ娑娜',
          href: 'detail/4sona'
        }
        ],
          newsList:[
                  {
                    title: '探险家 伊泽瑞尔',
                    url: 'http://starcraft.com'
                  },
                  {
                    title: '光辉女郎 拉克丝',
                    url: 'http://warcraft.com'
                  },
                  {
                    title: '皮城女警 凯特琳',
                    url: 'http://overwatch.com',
                    hot: true
                  },
                  {
                    title: '琴瑟仙女 娑娜',
                    last:true,
                    url: 'http://hearstone.com'
                  }
          ],
          boardList: [
                      {
                        title: '未来战士',
                        description: '我忙于四处流浪，铸就了书里的传奇，哪有时间研读这些发霉的书!',
                        id: 'ez',
                        toKey: '1ez',
                        url:'/detail/1ez',
                        saleout: false
                      },
                      {
                        title: '大元素使',
                        description: '暴风雨在我轻微的耳语中诞生 感受微风吧~ ',
                        id: 'lakesi',
                        toKey: '2lakesi',
                        url:'/detail/2lakesi',
                        saleout: false
                      },
                      {
                        title: '未来守卫',
                        description: '下次，祝你好运!',
                        id: 'katelin',
                        toKey: '3katelin',
                        url:'/detail/3katelin',
                        saleout: false
                      },
                      {
                        title: 'DJ娑娜',
                        description: '只有你可以听到我的话，召唤师。今天我们演奏哪首曲子？',
                        id: 'sona',
                        toKey: '4sona',
                        url:'/detail/4sona',
                        saleout: true
                      }
          ],
          productList:{
                pc:{
                  title:'热卖系列',
                  list:[
                        {
                            name: '真三国系列',
                            url: 'http://starcraft.com'
                        },
                        {
                            name: '玉剑传说系列',
                            url: 'http://warcraft.com',
                            hot:true,

                        },
                        {
                            name: '死兆星系列',
                            url: 'http://overwatch.com',
                            hot: true
                        },
                        {
                            name: '电玩系列',
                            url: 'http://hearstone.com'
                        }
                    ]
                },
                app:{
                  title:'经典系列',
                  last:true,
                  list:[
                        {
                            name: '源计划',
                            url: 'http://weixin.com',
                            hot:true,
                        },
                        {
                            name: '冠军系列',
                            url: 'http://twitter.com',
                            hot: false
                        },
                        {
                            name: '猩红之月系列',
                            url: 'http://maps.com',
                            hot:true
                        },
                        {
                            name: '丧尸系列',
                            url: 'http://phone.com'
                        }
                    ]
                }
            }
        }
    }
}
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-ez .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
  background-size:100px;
}
.index-board-lakesi .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
  background-size:100px;
}
.index-board-katelin .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
  background-size:100px;
}
.index-board-sona .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
  background-size:100px;
}

.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
