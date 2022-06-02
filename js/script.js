const app = Vue.createApp({
    data(){
        return{
            bloco:{
                inicio:true,
                idade:false,
                cambio:false,
                diaSemana:false,
                desconto:false
            }
        }
    },
    methods:{
        verificarLink(classe){
            console.log(classe)
        }
    }
})

app.mount("#app")