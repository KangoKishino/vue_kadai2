<template>
  <div id="app" class="mx-auto">
    <div v-if="this.$store.getters.nthQuestion === 1">
      <InputForm msg="お客様の情報を入力してください"/>
      <p class="error-message">{{ firstError }}</p>
      <button @click="nextQuestion" class="btn btn-outline-primary">次へ進む</button>
    </div>
    <div v-else-if="this.$store.getters.nthQuestion === 2">
      <InsuranceQuestion/>
      <p class="error-message">{{ secondError }}</p>
      <button @click="prevQuestion" class="btn btn-outline-primary">前へ戻る</button>
      <button @click="nextQuestion" class="btn btn-outline-primary">次へ進む</button>
    </div>
    <div v-else>
      <ConsultationContent msg="ご相談内容をご記入ください"/>
      <button @click="prevQuestion" class="btn btn-outline-primary">前へ戻る</button>
      <button class="btn btn-outline-primary">次へ進む</button>
    </div>
  </div>
</template>

<script>
import InputForm from './components/InputForm.vue'
import InsuranceQuestion from './components/InsuranceQuestion.vue'
import ConsultationContent from './components/ConsultationContent.vue'


export default {
  name: 'App',
  data() {
    return {
      firstError: '',
      secondError: ''
    }
  },
  components: {
    InputForm,
    InsuranceQuestion,
    ConsultationContent
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
          this.firstError = '';
          return false;
        } else {
          this.firstError = '※値を選択してください';
          return true;
        }
      } else if (this.$store.getters.nthQuestion === 2) {
        if (this.$store.getters.surgery) {
          this.secondError = '';
          return false;
        } else {
          this.secondError = '※値を選択してください';
          return true;
        }
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 600px;
}

.container {
    padding: 40px 20px;
}
button {
  margin: 20px;
}
h5 {
    border-bottom: solid 1px;
}
p {
    padding-top: 20px;
    color: #5981a6;
}
.error-message {
  color: red;
}
input {
  margin: 2px;
}
</style>
