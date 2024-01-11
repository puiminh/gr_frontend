<template lang="">
    <div>
        <div
          :class="{current : current==instruction.order}" 
          class="instruction_step flex items-center cursor-pointer p-4 m-2" 
          @click="jumpToTimeIC"
          ref="instruction"
        >
            <p class="step uppercase title text text-lg yellow font-mono mr-2 self-start mt-2">step {{instruction.order}} </p>
            <p class="instruction-text text-xl text-orange-50 word-space-3">
              Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi a, posuere class magna elementum montes feugiat cubilia aliquet. Vel cursus sollicitudin nunc fringilla justo cum urna at potenti pellentesque tincidunt fusce, tellus inceptos morbi nostra metus varius turpis interdum nisl lacus. Porta in non porttitor venenatis suspendisse, cras dis curae.
            </p>
            <p class="step uppercase title text text-medium text-slate-200 font-mono mr-6 self-start mt-2"> {{timeFormat}} </p>
        </div>
    </div>
</template>
<script>
export default {
  watch: {
    current(newValue) {
      if (newValue==this.instruction.order) {
        this.$refs.instruction.scrollIntoView({ behavior : 'smooth' })
      }
    }
  },
  emits: ['jumpToTimeParent'],
  methods: {
    jumpToTimeIC () { 
      this.$emit('jumpToTimeParent', this.instruction.time);
    },
  },
  props: ['instruction', 'current'],
  computed: {
    timeFormat() {
      const minutes = Math.floor(this.instruction.time / 60);
      const remainingSeconds = this.instruction.time % 60;

      // Sử dụng padStart để thêm số 0 phía trước nếu cần thiết
      const formattedTime = `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;

      return formattedTime;
    }
  },

}
</script>
<style scoped>
.instruction_step .step {
  text-orientation: mixed;
  writing-mode: vertical-lr;
  -moz-transform: scale(-1, -1);
  -webkit-transform: scale(-1, -1);
  -o-transform: scale(-1, -1);
  -ms-transform: scale(-1, -1);
  transform: scale(-1, -1);
}

.instruction_step {
  min-height: 120px;
}
.instruction_step, .step {
  transition: transform 0.3s ease-in-out,
              background-color 0.3s ease-in-out;
}
.instruction_step:hover, .current.instruction_step{
  transform:  scale(1.01, 1.01) translateZ(0);
  background: rgb(55, 56, 57);
}

.instruction_step:hover  .step, .current .step{
  transform: scale(-1.2,-1.2);
}
.instruction_step:hover  .instruction-text, .current .instruction-text{
  color: white;
}


</style>