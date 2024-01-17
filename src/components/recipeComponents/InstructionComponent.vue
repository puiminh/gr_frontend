<template lang="">
    <div>
        <div
          :class="{current : current==childInstruction.order}" 
          class="instruction_step flex items-center justify-between cursor-pointer p-4 m-2" 
          @click="jumpToTimeIC"
          ref="instruction"
        >
            <p class="step uppercase title text text-medium yellow font-mono mr-2 self-start mt-2">step {{childInstruction.order}} </p>
            <p 
              class="instruction-text text-xl text-orange-50 word-space-3"
              :contenteditable="edit"
              @input="childInstruction.description = $event.target.innerText"
            >
              {{instruction.description ? instruction.description :  defaultIns}}
            </p>
            <p class="step uppercase title text text-medium text-slate-200 font-mono mr-6 self-start mt-2"
              @click="promptGetTime"
            > 
              {{timeFormat}} 
            </p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      defaultIns: 'Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi a, posuere class magna elementum montes feugiat cubilia aliquet. Vel cursus sollicitudin nunc fringilla justo cum urna at potenti pellentesque tincidunt fusce, tellus inceptos morbi nostra metus varius turpis interdum nisl lacus. Porta in non porttitor venenatis suspendisse, cras dis curae.',
      childInstruction: {
        order: 0,
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi a, posuere class magna elementum montes feugiat cubilia aliquet. Vel cursus sollicitudin nunc fringilla justo cum urna at potenti pellentesque tincidunt fusce, tellus inceptos morbi nostra metus varius turpis interdum nisl lacus. Porta in non porttitor venenatis suspendisse, cras dis curae.',
        time: 0,
      }
    }
  },
  watch: {
    current(newValue) {
      if (newValue==this.instruction.order) {
        this.$refs.instruction.scrollIntoView({ behavior : 'smooth' })
      }
    },
    instruction(newValue) {
      this.childInstruction = newValue;
    }
  },
  emits: ['jumpToTimeParent'],
  methods: {
    promptGetTime() {
      if (this.edit) {
        let time = prompt("Input the time (s): ", 0);
        if (time != null) {
          this.childInstruction.time = time;
        }
      }
    },
    jumpToTimeIC () { 
      this.$emit('jumpToTimeParent', this.instruction.time);
    },
    convertTimeFormatToTime(timeString) {
      const [hours, minutes] = timeString.split(':').map(Number);
      // Chuyển đổi giờ và phút thành giây và cộng lại
      const totalSeconds = hours * 3600 + minutes * 60;

      return totalSeconds;
    }
  },
  props: ['instruction', 'current', 'edit'],
  computed: {
    timeFormat() {
      const minutes = Math.floor(this.childInstruction.time / 60);
      const remainingSeconds = this.childInstruction.time % 60;

      // Sử dụng padStart để thêm số 0 phía trước nếu cần thiết
      const formattedTime = `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;

      return formattedTime;
    }
  },
  mounted() {
    this.childInstruction = this.instruction;
  }

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