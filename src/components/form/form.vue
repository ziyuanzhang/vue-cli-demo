<template>
   <div id="form">
        <h1>form  相关的</h1>
        <div>
            <label>
                <span>title:</span>
                <input type="text" required v-model.lazy="form.title" />
                <p>title:{{form.title}}</p>
            </label>
        </div>
        <div>
            <label>
                <span>content:</span>
                <textarea v-model="form.content"></textarea>
                <p>content:{{form.content}}</p>
            </label>
        </div>
        <div>
            <label>
                <span>张三:</span>
                <input type="checkbox" value="张三"  v-model.lazy="form.checkboxs" />
            </label>
            <label>
                <span>李四:</span>
                <input type="checkbox" value="李四"  v-model.lazy="form.checkboxs" />
            </label>
            <label>
                <span>王五:</span>
                <input type="checkbox" value="王五"  v-model.lazy="form.checkboxs" />
            </label>
            <p>checkbox:</p>
            <ul>
                <li v-for="checkbox in form.checkboxs">{{checkbox}}</li>
            </ul>
        </div>
        <div>
           <label>
                <span>直辖市：</span>
                
            </label>
            <select v-model="form.city">
                    <option v-for="city in cities">{{city}}</option>
            </select>
            <p>{{form.city}}</p>
            
            
        </div>
   </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        title: "",
        content: "",
        checkboxs: [],
        city:"上海"
      },
      cities: ["北京", "上海", "重庆", "天津", "深圳"]
    };
  }
};
</script>
<style scoped>
#form {
  margin: 10px 0;
  border: 2px solid saddlebrown;
  text-align: center;
  padding: 10px 0;
}
#form>div{
    margin: 5px 0;
    border: 1px solid seagreen;
}
</style>


