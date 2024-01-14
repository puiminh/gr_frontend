<template>
    <div class="form__group field form__field" ref="editor">
      <quill-editor 
        type="input" 
        name="name" 
        :id="title"  
        v-model:content="content"
        @update:content="$emit('update:modelValue', content)"
        theme="bubble"
        contentType="html"
        toolbar="minimal"      
        @focus="focusMethod"  
        @blur="blurMethod"
        class="pt-3 font-sans font-semibold text-md -mb-2 -ml-3"
        ></quill-editor>
      <label :for="title" class="form__label" ref="label">{{ title }}</label>
    </div>
    </template>
    
    <script>
    
    export default {
        data() {
            return {
                content: ''
            }
        },
        props: {
            modelValue: {
                default: ''
            },
            title: {
                default: 'Input'
            },
            placeholder: {
                default: 'Add some description for your course...'
            }
            
        },
        methods: {
            log() {
                console.log(this.modelValue)
            },
            focusMethod() {
                this.$refs.label.classList.add('focus_label_class')
                this.$refs.editor.classList.add('focus_field_class')              
            },
            blurMethod() {
                this.log(this.content,this.modelValue)
                this.$refs.label.classList.remove('focus_label_class')
                this.$refs.editor.classList.remove('focus_field_class')   
                if (this.content != '' && this.content!='<p><br></p>') {
                    this.$refs.label.classList.add('have_some_text')
                    console.log('have some text');
                } else {
                    this.$refs.label.classList.remove('have_some_text')
                } 
            }
        },
        watch: {
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
     .form__field::placeholder {
         color: transparent;
    }

    .form__field:placeholder-shown ~ .form__label, .have_some_text {
        cursor: text;
        top: 0rem!important;
    }

     .form__label {
         position: absolute;
         top: 1rem;
         display: block;
         transition: 0.2s;
         font-size: 0.8rem;
         font-weight: 600;
         color: #484848;
         user-select: none;
    }
     .form__field:focus, .focus_field_class {
         padding-bottom: 6px;
         font-weight: 700;
         border-width: 4px;
         border-image: linear-gradient(to right, #11998e, #38ef7d);
         border-image-slice: 1;
    }
     .form__field:focus ~ .form__label, .focus_label_class {
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