<template>
    <div class="test">
        <input type="text" v-bind:value="testText" v-on:change="onTextChange" />
        {{ testText }}
    </div>
</template>
<script>
    export default {
        name : 'Testing',
        data(){
            return {
                testText : ""
            };
        },
        methods : {
            onTextChange(e){
                this.testText = e.target.value;
            }
        },
        props : {
            msg: String
        }
    }
</script>
