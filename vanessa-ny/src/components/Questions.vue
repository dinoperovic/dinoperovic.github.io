<template lang="pug">
  #questions
    h3.title Koji je artikal s&nbsp;
      span(v-html="isQuestionCode ? 'kodom:' : 'nazivom:'")

    #question(v-if="current")
      p.question(v-html="isQuestionCode ? current.code : current.label")
      .choices(:class="{codes: !isQuestionCode}")
        .choice(v-for="choice in choices")
          el-button(
            size="large"
            :disabled="isAnswered && current != choice && choice != answer"
            :type="(isAnswered && current == choice) ? 'success' : ((isAnswered && answer == choice) ? 'danger' : '')"
            v-html="isQuestionCode ? choice.label : choice.code"
            @click.prevent="chooseAnswer(choice)")

      p.score Rezultat:&nbsp;
        el-tag(:type="(totalScore > 0) ? 'success' : ((totalScore < 0) ? 'danger' : 'primary')") {{ totalScore }}

      p.next
        el-button(type="info" v-show="isAnswered && current != answer" @click="rotateQuestion") Slijedeće pitanje

      p.restart
        el-button(type="danger" size="small" @click="restart") Restartaj
</template>

<script>
import _ from 'lodash'

export default {
  name: 'questions',
  props: ['categories'],
  data() {
    return {
      isAnswered: false,
      isQuestionCode: true,
      answer: null,
      totalScore: 0,
      pool: [],
      asked: []
    }
  },
  computed: {
    current() { return _.sample(this.pool) },
    choices() {
      var choices = _.difference(this.questions, [this.current])
      return _.shuffle(_.concat([this.current], _.sampleSize(choices, 4)));
    },
    questions() {
      var q = []
      _.each(this.categories, (cat) => {
        _.each(cat.questions, (question) => {
          q.push({
            code: question[0],
            name: question[1],
            label: `${question[1]} (${cat.name})`,
            category: cat.name,
            score: 0
          })
        })
      })
      return q
    }
  },
  methods: {
    chooseAnswer(choice) {
      if (this.isAnswered) return
      this.answer = choice
      this.isAnswered = true
      var i = _.indexOf(this.questions, this.current)
      var score = this.questions[i].score
      if (choice === this.current) { score++; this.totalScore++ }
      else { score--; this.totalScore-- }
      this.$set(this.questions[i], 'score', score)
      document.activeElement.blur()
      if (this.answer == this.current) {
        var vm = this
        setTimeout(() => { vm.rotateQuestion() }, 2000)
      }
    },
    rotateQuestion() {
      this.asked.push(this.current)
      if (this.asked.length >= this.questions.length) this.asked = []
      this.pool = _.difference(this.questions, this.asked)
      this.isQuestionCode = _.sample([true, false])
      this.isAnswered = false
    },
    restart() {
      window.location.reload()
    }
  },
  mounted() {
    console.log('Start with questions!');
    this.rotateQuestion();
  }
}
</script>

<style lang="sass" scoped>
.title
  color: #F7BA2A

.question
  color: #20A0FF
  font-size: 3em
  line-height: 1
  font-weight: bold

.choices
  &.codes
    display: flex
    justify-content: center
    flex-wrap: wrap

.choice
  margin: 8px 5px

.score
  margin-top: 50px
  font-size: 1.2em

  span
    font-size: 1em
</style>
