<template>
  <div>
    <div class="about mx-auto container card">
      <h5>以下の内容をご確認ください</h5>
        <div class="text-left">
          <p>-性別-</p>
          {{ switchGender() }}
          <p>-生年月日-</p>
          {{ $store.getters.year }}年{{ $store.getters.month }}月{{ $store.getters.day }}日
          <p>現在、生命保険に加入されていますか？</p>
          {{ switchTranslate($store.getters.sign) }}
          <p>現在入院中ですか？または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？</p>
          {{ switchTranslate($store.getters.hospitalize) }}
          <p>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
          {{ switchTranslate($store.getters.surgery) }}
          <p>-ご相談内容-</p>
          {{ $store.getters.content }}
        </div>
    </div>
    <ButtonComponents/>
  </div>
</template>

<script>
import ButtonComponents from '../components/ButtonComponents.vue'

export default {
  components: {
    ButtonComponents
  },
  methods: {
    switchGender() {
      if(this.$store.getters.gender === 'male') {
        return '男性'
      } else {
        return '女性'
      }
    },
    switchTranslate(value) {
      if(value === 'true') {
        return 'はい'
      } else {
        return 'いいえ'
      }
    }
  }
}
</script>

