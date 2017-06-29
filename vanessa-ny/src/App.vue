<template lang="pug">
  #app
    .container
      h1 Vanessa NY
      transition(name="el-zoom-in-top")
        questions(v-if="start" :categories="selectedCategories")
      div.start(v-if="!start")
        p.select-categories Izaberi kategorije:
          p.categories
            el-checkbox-group(v-model="selectedCategories")
              el-checkbox-button(v-for="cat in categories" :label="cat" :key="cat.name") {{ cat.name }}
        transition(name="el-fade-in")
          p.start-button(v-if="selectedCategories.length > 0")
            el-button(type="primary" size="large" @click="start = true") Kreni Ljubaaa
</template>

<script>
import Questions from './components/Questions.vue'

export default {
  name: 'app',
  data() {
    return {
      start: false,
      selectedCategories: [],
      categories: [
        {name: 'Fishbone Sister', questions: [
          ['02', 'Sportske hlače'],
          ['03', 'Jeans'],
          ['40', 'Jakne'],
          ['41', 'Sakoi'],
          ['42', 'Suknje'],
          ['43', 'Haljine'],
          ['44', 'Kratke hlače'],
          ['45', 'Hlače'],
          ['46', 'Majice'],
          ['47', 'Sportske majice'],
          ['48', 'Pulover, vesta'],
          ['49', 'Bluza'],
          ['50', 'Kratka jakna']
        ]},
        {name: 'Fishbone Man', questions: [
          ['06', 'Hlače'],
          ['30', 'Sakoi'],
          ['31', 'Kratke klače'],
          ['32', 'Majice'],
          ['33', 'Košulje'],
          ['34', 'Sportske majice'],
          ['35', 'Pulover, vesta'],
          ['36', 'Jakne'],
          ['52', 'Jeans']
        ]},
        {name: 'Amisuu', questions: [
          ['07', 'Suknja'],
          ['08', 'Majica'],
          ['09', 'Jakna'],
          ['10', 'Jeans'],
          ['11', 'Sportske hlače'],
          ['14', 'Hlače'],
          ['16', 'Kratke hlače'],
          ['21', 'Bluza'],
          ['24', 'Sportska majica'],
          ['27', 'Pulover, vesta'],
          ['28', 'Sakoi'],
          ['38', 'Kratke jakne'],
          ['51', 'Jeans'],
          ['15', 'Haljine']
        ]},
        {name: 'Smog', questions: [
          ['05', 'Jeans'],
          ['12', 'Kratke hlače'],
          ['13', 'Hlače'],
          ['19', 'Majica'],
          ['20', 'Košulja'],
          ['25', 'Sportska majica'],
          ['26', 'Pulover, vesta'],
          ['29', 'Jakne, prsluci'],
          ['18', 'Sakoi']
        ]},
        {name: 'Dodaci', questions: [
          ['17', 'Cipele'],
          ['23', 'Cipele, remen, šeširi, šalovi'],
          ['53', 'Sunglasses'],
          ['56', 'Torbe'],
          ['57', 'Šalovi, remeni, šeširi'],
          ['58', 'Nakit'],
          ['01', 'Sitnice'],
          ['37', 'Razno'],
        ]},
        {name: 'Rublje', questions: [
          ['22', 'Muško donje rublje'],
          ['39', 'Žensko donje rublje'],
          ['54', 'Ženski kupaći'],
          ['55', 'Muški kupaći'],
        ]},
      ]
    }
  },
  components: { Questions },
}
</script>

<style lang="sass">
body
  background: #1F2D3D
  padding: 0
  margin: 0
  color: #C0CCDA
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.container
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  margin: 0 auto
  text-align: center
  display: flex
  flex-direction: column

h1
  margin-top: 60px
  color: #FFF
  font-size: 3em

.start-button
  margin-top: 40px
</style>
