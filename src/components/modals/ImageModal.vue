<template>
  <div class="bg-white rounded-2xl p-8 flex flex-col justify-between gap-4" @paste="onPasteMethod">
      <div class="container relative w-96">
         <label :class="['wrapper ', {'active': active}]" for="default-btn">
            <div :class="['image ', {'!hidden': !active}]">
               <img :src="imageLink" alt="">
            </div>
            <div :class="['content ', {'hidden': active}]">
               <div class="icon">
                <svg class="w-24 h-24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>
                </svg>
               </div>
               <div class="text">
                  <p class="font-semibold font-mono text-sm flex">Paste/upload your image here</p>
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
import axios from 'axios';
import gsap from 'gsap';
import UploadFirebase from '@/components/uploadFirebase/UploadFirebase.vue';

export default {
    props: {
      imagePropLink: {
        default: ''
      },
    },
    data() {
        return {
            imageLink: "",
            file: "",
            active: false,
            fileName: "",
            keyword: "",
            images: [],
            hideRec: true,
            upload: false,
        };
    },
    watch: {
      imageLink() {
        this.passImageLinkMethod()
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

        uploadDone(data) {
          this.upload = false
          this.changePreview(data)

          gsap.to('.uploadBar', {
                    display: 'none',
                    ease: 'ease-out',
                    duration: 0.4,
                    delay: 2,
          })
        },

        changePreview(link) {
          this.imageLink = link
          this.active = true;
          this.passImageLinkMethod();
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
            this.imageLink = "";
            this.active = false;
        },
        onPasteMethod(evt) {
            const clipboardItems = evt.clipboardData.items;
            const items = [].slice.call(clipboardItems).filter(function (item) {
                // Filter the image items only
                return item.type.indexOf("image") !== -1;
            });
            if (items.length === 0) {
                return;
            }
            const item = items[0];
            // Get the blob of image
            const blob = item.getAsFile();
            this.file = blob;
            this.fileName = blob.name;
            if (this.file) {
              this.uploadExcute();
                // this.changePreview(URL.createObjectURL(this.file));
            }
        },
        recommendImg(keyWord) {
            var config = {
                method: "get",
                url: `https://pixabay.com/api/?key=33176895-a9db6d4d27c77a4fa35a54a28&q=${keyWord}&image_type=photo&safesearch=true&per_page=8`,
            };
            axios(config)
                .then((response) => {
                console.log(response.data.hits);

                this.images = response.data.hits.map((e)=>{
                  return e.previewURL
                })
                // this.images = response.data.hits.map((e) => {
                //     if (e.previewLink && !e.previewLink[0].link.includes("mp4") && !e.previewLink[0].link.includes("gif")) {
                //         console.log(e.previewLink[0].link);
                //         return e.previewLink[0].link;
                //     }
                //     else {
                //         return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKS8sgnBMSLmsUMhsuoKM94dLEb61aboXs6wc0zwu&s";
                //     }
                // });
            })
                .catch(function (error) {
                console.log(error);
            });
        },
        passImageLinkMethod() {
          this.$emit('passImageLink', this.imageLink);
        }
    },
    mounted() {
      console.log(this.imagePropLink);
      if (this.imagePropLink) {
        this.fileName = 'file.png';
        this.imageLink = this.imagePropLink;
        this.active = true;
      }
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