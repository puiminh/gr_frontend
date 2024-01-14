<template>
    <div>
        <div v-if="progressbar=='display'">
            <ProgressBar title="Upload image..." color="blue" :progress="progressing"></ProgressBar>
        </div>
    </div>
</template>

<script>
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from '@firebase/storage';
import "@/services/firebase.js";
import ProgressBar from '../progress/ProgressBar.vue';
import gsap from 'gsap';

export default {
    props: ["file", "upload", "bob", "progressbar"],
    data() {
        return {
            progressing: 0,
        };
    },
    watch: {
        file: function (newValue, oldValue) {
            console.log("Props file has been change", newValue, oldValue);
        },
        upload: function (newValue, oldValue) {
            console.log("Props upload has been change", newValue, oldValue);
            if (newValue == true) {
                console.log("Excute cus parent told");
                this.uploadFile(this.file);
            }
        }
    },
    methods: {
        uploadFile() {
            console.log("Now uploadting...", this.file);
            this.resetProcess();
            const metadata = {};
            const storage = getStorage();
            const storageRef = ref(storage, "web/" + Math.round(Date.now() / 1000));
            const uploadTask = uploadBytesResumable(storageRef, this.file, metadata);
            //       uploadBytes(storageRef, this.File).then((snapshot) => {
            //     console.log('Uploaded a blob or file!');
            // });
            {
                uploadTask.on("state_changed", (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    this.progressing = progress;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                }, (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case "storage/unauthorized":
                            // User doesn't have permission to access the object
                            break;
                        case "storage/canceled":
                            // User canceled the upload
                            break;
                        // ...
                        case "storage/unknown":
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                }, () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log("File available at", downloadURL);
                        this.$emit("uploadDone", downloadURL);
                    });
                });
            }
        },
        resetProcess() {
            this.progressing = 0;
        }
    },
    components: { ProgressBar }
}
</script>

