<template>
    <div class="cell-container">
        <input type="checkbox" name="" id="">
        <span class="cell-content">{{content}}</span>
        <span class="cell-delete" @click="handleClick">X</span>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        props: {
            con: {
                type: String,
                required: true
            }
        },
        computed: {
            content(){
                return this.con
            }
        },
        methods: {
            ...mapMutations([
                'DELETE_ITEM'
            ]),
            handleClick(){
                this.DELETE_ITEM(this.content)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .cell-container
        width 300px
        height 50px
        font-size 20px
        color #cccccc
        margin 0px auto 0
        border-bottom 2px solid #cccccc 
        line-height 50px
        .cell-content
            background yellow 
        .cell-delete
            display inline-block
            width 20px
            height 20px
            text-align center 
            line-height 20px 
            border 2px solid #cccccc
            padding 5px
            border-radius 50%
            vertical-align middle
            margin-left 30%
            cursor pointer
</style>


