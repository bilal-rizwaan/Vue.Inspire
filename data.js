new Vue({
    el:"#root",
    data:{
        Subject:"Vue.js",
        Author:"Eve You"
    },
    methods:{
        greet:function(review){
          return `Great Man ${this.Author} Review ${review}`

        }
    }
})