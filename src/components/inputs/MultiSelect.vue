<template>
    <div>
      <VueMultiselect
        v-model="taggingSelected"
        :options="taggingOptions"
        :multiple="true"
        :taggable="true"
        tag-placeholder="Add this as new tag"
        placeholder="Type to search or add courses"
        label="title"
        track-by="id">
      </VueMultiselect>
    </div>
  </template>
  
  <script>
  import VueMultiselect from 'vue-multiselect'
  export default {
    components: { VueMultiselect },
    data () {
      return {
        taggingSelected: null,
        // taggingOptions: [
        // { name: 'Vue.js', code: 'vu' },
        // { name: 'Javascript', code: 'js' },
        // { name: 'Open Source', code: 'os' },
        // { name: 'Open Source1', code: 'os1' },
        // { name: 'Open Source2', code: 'os2' },
        // ]
      }
    },
    props: {
      data: {
        type: Array,
      },
      predata: {
        type: Array,
      }
    },
    computed: {
      taggingOptions () {
        return this.data.map((e)=>{
          return { title: e.course.title, id: e.course.id }
        })
      }
    },
    methods: {
    },
    mounted() {
      if (this.predata?.courses?.length) {
        const pre = this.predata.courses.map((e)=>{ return { title: e.title, id: e.id } })
        console.log("pre: ",pre);
        this.taggingSelected = pre
      }
    }
  }
  </script>
  
  <style src="vue-multiselect/dist/vue-multiselect.css"></style>

  <style scoped>
    ::v-deep(.multiselect__tag) {
        max-width: 100%;
        height: 50px;
        background: #fff;

        border-radius: 10px;
        color:rgb(107, 107, 107);

        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        
    }

    ::v-deep(.multiselect__tag span) {
        font-weight: 600;
        font-family: sans-serif;

    }

    ::v-deep(.multiselect__tag-icon::after) {
        color: red;
        font-weight: 900;
    }

    ::v-deep(.multiselect__tags) {
        background: var(--bg-more-gray);
        padding: 8px 12px 0 8px;

    }
  </style>