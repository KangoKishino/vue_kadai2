<template>
    <div id="consultation-content" class="container card">
        <h5>{{ msg }}</h5>
        <p class="text-left">-ご相談内容-</p>
        <textarea v-model="changeContent" rows="10" cols="60"></textarea>
    </div>
</template>

<script>
export default{
    name: 'ConsultationContent',
    props: {
        msg: String
    },
    computed: {
        changeContent: {
            get() {
                return this.$store.getters.content;
            },
            set(value) {
                this.$store.commit('changeContent', value)
            }
        },
    }
};
  
</script>
<style scoped>
</style>
