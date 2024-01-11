<template lang="">
    <div>
        <div class="instruction_step flex items-center">
            <p class="step uppercase title text text-lg yellow font-mono mr-6 self-start mt-2">step {{step.order}} </p>
            <p class="instruction-text text-xl text-orange-50 word-space-3">
              Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi a, posuere class magna elementum montes feugiat cubilia aliquet. Vel cursus sollicitudin nunc fringilla justo cum urna at potenti pellentesque tincidunt fusce, tellus inceptos morbi nostra metus varius turpis interdum nisl lacus. Porta in non porttitor venenatis suspendisse, cras dis curae.
            </p>
        </div>
    </div>
</template>
<script>
export default {
  props: ['step']

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
</style>