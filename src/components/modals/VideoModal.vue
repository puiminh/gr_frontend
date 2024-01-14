<template>
    <div class="bg-white rounded-2xl p-8 flex flex-col justify-between gap-4" @paste="onPasteMethod">
        <div class="container relative w-96">
           <label :class="['wrapper ', {'active': active}]" for="default-btn">
              <div :class="['image ', {'!hidden': !active}]">
                <img src="https://www.shutterstock.com/image-vector/check-mark-icon-tick-symbol-600nw-1938875785.jpg" alt="">
              </div>
              <div :class="['content ', {'hidden': active}]">
                 <div class="icon">
                  <svg class="w-24 h-24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>
                  </svg>
                 </div>
                 <div class="text">
                    <p class="font-semibold font-mono text-sm flex">Paste/upload your video here</p>
                 </div>
              </div>
              <div class="file-name flex font-semibold font-mono">
                 <div class="truncate max-w-xs">
                  {{ fileName }}
                 </div>
                  <button id="cancel-btn" @click.stop="removeFile" class="hover:text-red-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
              </div>
            </label>
           <!-- <label for="default-btn" class="w-fit h-fit" id="custom-btn">
              Choose a file
            </label> -->
           <input id="default-btn" type="file"  hidden @change="getFile">
        </div>
  
  
        <UploadFirebase class="uploadBar hidden" progressbar="display" :file="file" :upload="upload" :bob="true" @uploadDone="uploadDone"></UploadFirebase>
        
        <!-- <button @click="passImageLinkMethod" type="button" class="self-end place-self-end bottom-0 right-0 text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Save
        </button> -->
    </div>
  
  
  </template>
  
  <script>
  import gsap from 'gsap';
  import UploadFirebase from '@/components/uploadFirebase/UploadFirebase.vue';
  
  export default {
      props: {
      },
      data() {
          return {
              videoLink: "",
              file: "",
              active: false,
              fileName: "",
              upload: false,
          };
      },
      watch: {
        videoLink() {
          this.passVideoLinkMethod()
        }
      }
      ,
      methods: {
  
          uploadExcute() {
            console.log("Upload from parent")
            this.upload = true;
  
            gsap.to('.uploadBar', {
                      y: '-10px',
                      duration: 0.2
                  })
            gsap.to('.uploadBar', {
                      display: 'block',
                      ease: 'ease-in',
                      y: 0,
                      duration: 0.2,
                      delay: 0.2,
              })
          },

          changePreview(link) {
            this.videoLink = link
            this.passVideoLinkMethod();
          },
          uploadDone(data) {
            this.upload = false
  
            gsap.to('.uploadBar', {
                      display: 'none',
                      ease: 'ease-out',
                      duration: 0.4,
                      delay: 2,
            })

            this.changePreview(data)
          }
          ,
          getFile(event) {
              console.log(event.target.files[0]);
              this.file = event.target.files[0];
              this.fileName = event.target.files[0].name;
              if (this.file) {
  
                  // this.changePreview(URL.createObjectURL(this.file));
                  this.uploadExcute();
              }
          },
          removeFile() {
              this.file = "";
              this.fileName = "";
              this.videoLink = "";
              this.active = false;
          },
          passVideoLinkMethod() {
            this.$emit('passVideoLink', this.videoLink);
          }
      },
      mounted() {
      },
      components: { UploadFirebase }
  }
  </script>
  
  <style scoped>
  
  .container .wrapper{
    position: relative;
    height: 200px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    border: 2px dashed #c2cdda;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .wrapper.active{
    border: none;
  }
  .wrapper .image{
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px dashed #c2cdda;
  }
  .wrapper img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .wrapper .icon{
    font-size: 100px;
    color: #9658fe;
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .wrapper .text{
    font-size: 20px;
    font-weight: 500;
    color: #5B5B7B;
  }
  .wrapper #cancel-btn i{
    position: absolute;
    font-size: 20px;
    right: 15px;
    top: 15px;
    color: #9658fe;
    cursor: pointer;
    display: none;
  }
  .wrapper.active:hover #cancel-btn i{
    display: block;
  }
  .wrapper #cancel-btn i:hover{
    color: #e74c3c;
  }
  .wrapper .file-name{
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 8px 12px;
    font-size: 18px;
    color: #fff;
    display: none;
    background: linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);
    justify-content: space-between;
  }
  .wrapper.active:hover .file-name{
    display: flex;
  }
  .container #custom-btn{
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 25px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    background: linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  
  </style>