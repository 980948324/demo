<template>
  <div class="about">
    <div class="list-navbar">
      <ul>
        <li class="item" :class="index==activeId?'active':''" v-for="(item, index) in category" :key="index" v-text="item.category_name" @click="scrollTo(index)"></li>
      </ul>
    </div>
    <div class="list-wrap">
      <div class="list-item" v-for="(item, index) in category" :key="index" :class="'item'+index" ref="rightitem">
        <div class="item-title">
          <span>{{item.category_name}}</span>
        </div>
        <div class="item-group">
          <div class="category-item" v-for="(i, idx) in item.category_list" :key="idx">
            <a href="#">
              <div class="image">
                <img :src="i.img_url" alt="">
              </div>
              <div>{{i.product_name}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'about',
  data: function(){
    return {
      title: '分类',
      flag: true,
      activeId:0,
      itemHeight:[],
      category:[
        {
          category_name:'新品',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'众筹',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'手机',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'电视',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'电脑',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'智能',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },{
          category_name:'家用电器',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'厨房电器',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'穿戴酷玩',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'家居家装',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'电源插座',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'出行车载',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        },
        {
          category_name:'耳机音箱',
          category_list:[
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            },
            {
              product_name:'小米9',
              img_url:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80db44cd6d4334a845b1e2e8335f060b.png'
            }
          ]
        }
      ]
    }
  },
  methods: {
    scrollTo(index){
      window.scrollTo(0,this.itemHeight[index])
    }
  },
  mounted() {
    let that = this
    let scrollHeight = 0
    this.$refs.rightitem.forEach(item => {
      this.itemHeight.push(scrollHeight)
      scrollHeight += item.offsetHeight
    });
    window.addEventListener('scroll',function(){
      let scrollHeight = window.pageYOffset
      for(let i=0;i<that.itemHeight.length;i++){
        if(scrollHeight < that.itemHeight[i]){
          that.activeId = i-1
          break
        }
      }
    })
  }
}
</script>
<style scoped>
.about{
  padding-top: 51px;
  font-size: 16px;
}
.list-navbar{
  position: fixed;
  top: 51px;
  bottom: 54px;
  left: 0;
  width: 78px;
  overflow: hidden;
  border: 1px solid #efefef;
}
.list-navbar ul{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  list-style: none;
}
.list-navbar .item{
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 18px;
  transform: scale(.76);
}
.list-navbar .active{
  color: #fb7d34;
  transform: scale(1);
}
::-webkit-scrollbar {
  display: none;
}
.list-wrap{
  padding-left: 100px;
  padding-right:20px;
}
.list-item{
  width: 100%;
  height: 350px;
}
.item-title{
  padding: 20px 0;
  text-align: center;
}
.item-group{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
}
.category-item{
  display: flex;
  width: 33.3%;
  text-align: center;
  margin: 10px 0;
}
.category-item a{
  text-decoration: none;
  margin: 0 auto;
  color: rgba(0,0,0,.54);
  font-size: 14px;
}
.category-item .image{
  height: 52px;
  width: 52px;
  margin-bottom: 10px;
}
.category-item .image img{
  width: auto;
  height: 100%;
}
</style>
