export default {

    props:{
        remainNum: {
            type: Number
        }
    },
    data(){
        return {

        }
    },
    render() {
        return (
            <div>
                this is a component create with jsx syntax!
                <span>items{this.remainNum}</span>
            </div>
        )
    },
    mounted(){

    }
}