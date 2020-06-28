<template>
  <div class="param-info">
    <div v-if="itemParams.rule">
      <div class="itemParams-contenet">{{itemParams.rule.key}}</div>
      <div>
        <table class="content-table">
          <tr v-for="(items,index) in itemParams.rule.tables[0]">
            <td v-for="(item,index) in items">{{item}}</td>
          </tr>
        </table>
      </div>
      <div class="rule-disclaimer">{{itemParams.rule.disclaimer}}</div>
    </div>

    <div v-if="itemParams.info">
      <div class="itemParams-contenet">{{itemParams.info.key}}</div>
      <div class="itemParams-table">
        <table >
          <tr class="itemParams-items" v-for="(items,index) in itemParams.info.set">
            <td class="itemParams-item" v-for="(item,index) in items">{{item}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "paramInfo",
    props:{
      itemParams:{
        type:Object,
        default:{}
      }
    },
    mounted(){
      this.$nextTick(()=>{

      })
    },
  }
</script>

<style scoped>
  .param-info{
    background-color: #fff;
  }
  .content-table{
    margin: 10px 0;
    width: 100%;
    background-color: #fff;
  }
  .content-table tr{
    display: flex;
  }
  .content-table tr td{
    flex: 1;
    padding: 5px;
    text-align: left;
    color: #b0b0b0;
    border-bottom: 1px solid #d9d9d9;
  }
  .itemParams-contenet{
    padding: 10px 0;
    width: 100%;
    color: #9f9f9f;
    text-align: center;
  }
  .rule-disclaimer{
    font-size: 14px;
    color: #9f9f9f;
  }
  .itemParams-table{
    width: 100%;
    text-align: left;
  }
  table{
    border-collapse: collapse;
  }
  .itemParams-items{
    font-size: 14px;
    line-height: 20px;
    border-bottom: 1px solid #c6c6c6;
  }
  .itemParams-item{
    padding: 5px;
  }
  .itemParams-item:nth-child(1){
    width: 22%;
    color: #9f9f9f;
  }
  .itemParams-item:nth-child(2){
    color: #ff71c1;
  }
</style>
