<template>
<div>
    <div v-if="this.$route.path==='/'">
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <button v-if="$store.getters.nthQuestion!==1" @click="prevQuestion" class="btn btn-outline-primary">前へ戻る</button>
        <button v-if="$store.getters.nthQuestion!==3" @click="nextQuestion" class="btn btn-outline-primary">次へ進む</button>
        <button v-if="$store.getters.nthQuestion===3" @click="checkForm" class="btn btn-outline-primary">次へ進む</button>
    </div>
    <div v-else>
        <router-link to="/" class="btn btn-outline-primary">前へ戻る</router-link>
        <button class="btn btn-outline-primary">送信</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            errorMessage: ''
        }
    },
    methods: {
        prevQuestion() {
            this.$store.commit('prevQuestion')
        },
        nextQuestion() {
            if (!this.checkForm()){
                this.$store.commit('nextQuestion');
            }
        },
        checkForm() {
            if (this.$store.getters.nthQuestion === 1) {
                if (this.$store.getters.gender && this.$store.getters.day) {
                    this.errorMessage = '';
                    return false;
                } else {
                    this.errorMessage = '※値を選択してください';
                    return true;
                }
            } else if (this.$store.getters.nthQuestion === 2) {
                if (this.$store.getters.surgery) {
                    this.errorMessage = '';
                    return false;
                } else {
                    this.errorMessage = '※選択してください';
                    return true;
                }
            } else {
                if (this.$store.getters.content) {
                    this.errorMessage = '';
                    this.$router.push({path: '/confirm'})
                } else {
                    this.errorMessage = '※内容を入力してください';
                }
            }
        }
    },
}
</script>

<style>
button {
  margin: 20px;
}
.error-message {
  color: red;
}
</style>