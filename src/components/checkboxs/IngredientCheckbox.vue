<template lang="">
    <div>
        <div class="round">
            <input type="checkbox" :id="item"/>
            <label :for="item"></label>
          </div>          
    </div>
</template>
<script>
export default {
  props: ['item']
    
}
</script>
<style scoped>
.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 3px solid #979797;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: var(--yellow);
  border-color: var(--yellow);
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

</style>