<template>
<div class="form__group field">
  <input type="input" :class="['form__field ', customInput]" placeholder="Name" name="name" :id="title" required 
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)" />
  <label :for="title" :class="['form__label ', customInput]">{{ title }}</label>
</div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    props: {
        modelValue: {
            default: ''
        },
        title: {
            default: 'Input'
        },
		customInput: {
			default: ''
		}
    }
}
</script>

<style scoped>
.form__group {
	 position: relative;
	 padding: 15px 0 0;
}
 .form__field {
	 font-family: inherit;
	 width: 100%;
	 border: 0;
	 border-bottom: 4px solid #484747;
	 outline: 0;
	 font-size: 1.3rem;
	 color: #000;
	 padding: 7px 0;
	 background: transparent;
	 transition: border-color 0.2s;
}

.form__field.small {
	font-size: 0.8rem;
	padding: 3px 0;
}

 .form__field::placeholder {
	 color: transparent;
}
 .form__field:placeholder-shown ~ .form__label {
	 cursor: text;
	 top: 20px;
}
 .form__label {
	 position: absolute;
	 top: 0;
	 display: block;
	 transition: 0.2s;
	 font-size: 0.8rem;
     font-weight: 600;
	 color: #484848;
     user-select: none;
}

.form__label.small {
	top: -8px!important;
}
 .form__field:focus {
	 padding-bottom: 6px;
	 font-weight: 700;
	 border-width: 4px;
	 border-image: linear-gradient(to right, #11998e, #38ef7d);
	 border-image-slice: 1;
}
 .form__field:focus ~ .form__label {
	 position: absolute;
	 top: 0;
	 display: block;
	 transition: 0.2s;
	 font-size: 1rem;
	 color: #11998e;
	 font-weight: 700;
}
/* reset input */
 .form__field:required, .form__field:invalid {
	 box-shadow: none;
}
</style>