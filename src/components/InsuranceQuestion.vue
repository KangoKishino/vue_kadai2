<template>
    <div id="insurance-question" class="container card">
        <h5>以下にお答えください</h5>
        <div class="text-left">
            <div>
                <p>現在、生命保険に加入されていますか？</p>
                <label>
                    <input type="radio" v-model="isSign" value=true>はい
                </label>
                <label>
                    <input type="radio" v-model="isSign" value=false>いいえ
                </label>
            </div>
            <div v-if="this.$store.getters.sign">
                <p>現在入院中ですか？または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？</p>
                <label>
                    <input type="radio" v-model="isHospitalize" value=true>はい
                </label>
                <label>
                    <input type="radio" v-model="isHospitalize" value=false>いいえ
                </label>
            </div>
            <div v-if="this.$store.getters.hospitalize !== ''">
                <p>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
                <label>
                    <input type="radio" v-model="isSurgery" value=true>はい
                </label>
                <label>
                    <input type="radio" v-model="isSurgery" value=false>いいえ
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'InsuranceQuestion',
    computed: {
        isSign: {
            get() {
                return this.$store.getters.sign;
            },
            set(value) {
                this.$store.commit('isSign', value)
            }
        },
        isHospitalize: {
            get() {
                return this.$store.getters.hospitalize;
            },
            set(value) {
                this.$store.commit('isHospitalize', value)
            }
        },
        isSurgery: {
            get() {
                return this.$store.getters.surgery;
            },
            set(value) {
                this.$store.commit('isSurgery', value)
            }
        },
    }
}
</script>

<style scoped>
</style>
