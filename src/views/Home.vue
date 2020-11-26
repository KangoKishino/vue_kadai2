<template>
  <div class="home">
    <div v-if="this.$store.getters.nthQuestion === 1">
      <InputForm msg="お客様の情報を入力してください"/>
    </div>
    <div v-else-if="this.$store.getters.nthQuestion === 2">
      <InsuranceQuestion msg="以下にお答えください"/>
    </div>
    <div v-else>
      <ConsultationContent msg="ご相談内容をご記入ください"/>
    </div>
    <ButtonComponents/>
  </div>
</template>

<script>
import InputForm from '../components/InputForm.vue'
import InsuranceQuestion from '../components/InsuranceQuestion.vue'
import ConsultationContent from '../components/ConsultationContent.vue'
import ButtonComponents from '../components/ButtonComponents.vue'

export default {
  components: {
    InputForm,
    InsuranceQuestion,
    ConsultationContent,
    ButtonComponents
  },
}
</script>

<style>
.container {
  padding: 40px 20px;
}
h5 {
  border-bottom: solid 1px;
}
p {
  padding-top: 20px;
  color: #5981a6;
}
input {
  margin: 2px;
}
</style>
