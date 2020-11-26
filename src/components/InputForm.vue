<template>
    <div class="container card">
        <h5>{{ msg }}</h5>
        <div class="text-left">
            <p>-性別-</p>
            <input type="radio" id="male" v-model="changed" value="male">
            <label for="male">男性</label>
            <input type="radio" id="female" v-model="changed" value="female">
            <label for="female">女性</label>

            <p>-生年月日-</p>
            <select v-model="year" @change="get_days">
                <option v-for="n in 51" :value="n + 1949" :key="n + 1949">
                    {{ n + 1949 }}（{{ toWareki(n + 1949) }}）
                </option>
            </select>年
            <select v-model="month" @change="get_days">
                <option v-for="n in 12" :value="n" :key="n">
                    {{ n }}
                </option>
            </select>月
            <select v-model="day">
                <option v-for="n in days_max" :value="n" :key="n">
                    {{ n }}
                </option>
            </select>日
        </div>
    </div>
</template>

<script>
export default{
    name: 'InputForm',
    data() {
        return {
            days_max: '',
        }
    },
    props: {
        msg: String
    },
    computed: {
        changed: {
            get() {
                return this.$store.getters.gender;
            },
            set(value) {
                this.$store.commit('changed', value);
            }
        },
        year: {
                get() {
                    return this.$store.getters.year;
                },
                set(value) {
                    this.$store.commit('setYear', value)
                }
            },
        month: {
                get() {
                    return this.$store.getters.month;
                },
                set(value) {
                    this.$store.commit('setMonth', value)
                }
            },
        day: {
                get() {
                    return this.$store.getters.day;
                },
                set(value) {
                    this.$store.commit('setDay', value)
                }
            },
    },
    created() {
        this.get_days();
    },
    methods: {
        get_days() {
            this.days_max = new Date(this.year, this.month, 0).getDate();
            if (this.$store.getters.day > this.days_max) {
                this.$store.commit('clearDay');
            }
        },
        toWareki(value) {
            if (value < 1989) {
                const wareki = value - 1925;
                return '昭和'+wareki;
            } else {
                const wareki = value - 1988;
                return '平成'+wareki;
            }
        }
    }
};
</script>

<style scoped>
</style>
