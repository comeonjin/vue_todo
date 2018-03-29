<template>
    <div class="container">
        <input class="todo-input" type="text" v-model="text" @keyup.enter="addItem">
        <Cell v-for="(item, index) in list" :key="index" :con="item" />
        <Footer :remainNum="rn"></Footer>
    </div>
</template>

<script>
    import Footer from './footer.jsx'
    import Cell from './todoCell.vue'
    import {mapState, mapMutations} from 'vuex'

    export default {
        data(){
            return{
                text: 'hello webpack!'                
            }
        },
        computed: {
            ...mapState([
                'list',
                'rn'
            ])
        },
        methods:{
            ...mapMutations([
                'ADD_ITEM'
            ]),
            addItem(e){
                if(this.text.trim() !== ""){
                    this.ADD_ITEM(this.text.trim())
                }
                this.text = ""
            }
        },
        components: {
            Footer,
            Cell
        },
        mounted(){
            console.log(this.$store.state.count)
        }
    }
</script>

<style lang="stylus" scoped>

    .container
        width 100%
        background purple
        .todo-input
            display block 
            width 300px
            height 50px
            margin 0 auto
            background red
</style>

