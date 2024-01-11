<template>
  <div class="video-container paused" data-volume-level="high" ref="videoContainer">
    <img class="thumbnail-img">
    <div class="video-controls-container">
      <div class="timeline-container" ref="timelineContainer" 
          @mousedown="handleTimeUpdate"
          @mouseup="toggleScrubbing"
      >
        <div class="timeline">
          <!-- <img class="preview-img"> -->
          <div class="thumb-indicator"></div>
        </div>
      </div>
      <div class="controls">
        <button class="play-pause-btn" ref="playPauseBtn" @click="togglePlay">
          <svg class="play-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
          <svg class="pause-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
          </svg>
        </button>
        <div class="volume-container">
          <button class="mute-btn" ref="muteBtn">
            <svg class="volume-high-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
            </svg>
            <svg class="volume-low-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" />
            </svg>
            <svg class="volume-muted-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" />
            </svg>
          </button>
          <input class="volume-slider" type="range" min="0" max="1" step="any" value="1" ref="volumeSlider" @input="setVolume">
        </div>
        <div class="duration-container">
          <div class="current-time" ref="currentTime">0:00</div>
          /
          <div class="total-time" ref="totalTimeElem"></div>
        </div>
        <button class="speed-btn wide-btn" ref="speedBtn" @click="changePlaybackSpeed">
          1x
        </button>
        <button class="mini-player-btn" ref="miniPlayerBtn">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/>
          </svg>
        </button>
        <button class="theater-btn">
          <svg class="tall" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>
          </svg>
          <svg class="wide" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"/>
          </svg>
        </button>
        <button class="full-screen-btn" ref="fullScreenBtn" @click="toggleFullScreenMode">
          <svg class="open" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
          </svg>
          <svg class="close" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
          </svg>
        </button>
      </div>
    </div>
    <video id="video" :src="options.src" ref="video" 
          @click="togglePlay"
          @timeupdate="handleTimeUpdate"
          @play="handlePlay"
          @pause="handlePause"
          @loadeddata="handleVideoLoaded"
          
    >
    </video>
  </div>

  <!-- <div class="control-zone">
    <center>
      <div>
        <p style="font-weight: 800;">
          Highlight
        </p>
        
        
          <div class="highlight-block">
            <img class="highlight" src="./assets/1.PNG" alt="">
            <div>
              <p>
                Step 1
              </p>
              <p>
                <span class="highlight-time">41:59</span>
              </p>
            </div>
          </div>

      </div>
        <div v-for="(highlight,index) in highlights" 
            :key="index" ref="timeMarker" 
            class="time-marker" 
            :data-time="highlight.time"
            @click="jumpToTime(highlight.time)"
        >
          <div class="marker-content">
              <span class="marker-label" :title="`Jump to ${highlight.time} seconds`"> {{highlight.time}}s</span>
          </div>
        </div>
    </center>
  </div> -->
</template>
  
<script>
import "./VideoPlayer.css"  
export default {
  emits: ['returnCurrentTime'],
  data () {
    return {
      isScrubbing: false,
      wasPaused: false,
    }
  },
  props: {
    instructions: {
      type: Array,
      default() {
        return []
      },
      required: true
    },
    options: { 
      type: Object,
      default() {
        return {
          src: "https://firebasestorage.googleapis.com/v0/b/recipe-58dab.appspot.com/o/videos%2FS%E1%BB%91t%20tr%E1%BB%99n%20h%E1%BB%A7%20ti%E1%BA%BFu.mp4?alt=media&token=88e95a60-1d51-4fbf-967a-9db765ffd533" 
        }
      },
      required: true
    },
  },
  methods: {
    jumpToTimeVideo(seconds) {
      if (this.$refs.video) {
        this.$refs.video.currentTime = seconds;
      }
    },
    handleTimelineUpdate(e) {
      const rect = this.$refs.timelineContainer.getBoundingClientRect()
      const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
      this.$refs.timelineContainer.style.setProperty("--preview-position", percent)
    },
    changePlaybackSpeed() {
      let newPlaybackRate = this.$refs.video.playbackRate + 0.25
      if (newPlaybackRate > 2) newPlaybackRate = 0.25
      this.$refs.video.playbackRate = newPlaybackRate
      this.$refs.speedBtn.textContent = `${newPlaybackRate}x`
    },
    handleVideoLoaded() {
      this.$refs.totalTimeElem.textContent = this.formatDuration(this.$refs.video.duration)
    },
    handleTimeUpdate() {
      this.$refs.currentTime.textContent = this.formatDuration(this.$refs.video.currentTime)
      const percent = this.$refs.video.currentTime / this.$refs.video.duration
      this.$refs.timelineContainer.style.setProperty("--progress-position", percent)

      this.$emit('returnCurrentTime',(this.$refs.video.currentTime))
    },
    formatDuration(time) {
      const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
        minimumIntegerDigits: 2,
      })
      const seconds = Math.floor(time % 60)
      const minutes = Math.floor(time / 60) % 60
      const hours = Math.floor(time / 3600)
      if (hours === 0) {
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`
      } else {
        return `${hours}:${leadingZeroFormatter.format(
          minutes
        )}:${leadingZeroFormatter.format(seconds)}`
      }
    },
    setVolume(e) {
      this.$refs.video.volume = e.target.value
      this.$refs.video.muted = e.target.value === 0
    },
    toggleMute() {
      this.$refs.video.muted = !this.$refs.video.muted
    },
    toggleFullScreenMode() {
      if (this.$refs.fullscreenElement == null) {
        this.$refs.videoContainer.requestFullscreen()
      }
    },
    toggleScrubbing(e) {
      const rect = this.$refs.timelineContainer.getBoundingClientRect()
      const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
      this.isScrubbing = (e.buttons & 1) === 1
      this.$refs.videoContainer.classList.toggle("scrubbing", this.isScrubbing)
      if (this.isScrubbing) {
        this.wasPaused = this.$refs.video.paused
        this.$refs.video.pause()
      } else {
        this.$refs.video.currentTime = percent * this.$refs.video.duration
        if (!this.wasPaused) this.$refs.video.play()
      }

      this.handleTimelineUpdate(e)
    },
    toggleMiniPlayerMode() {
      // Your toggleMiniPlayerMode logic goes here
    },
    handleMouseUp(e) {
      // Your handleMouseUp logic goes here
    },
    handleMouseMove(e) {
      // Your handleMouseMove logic goes here
    },
    togglePlay() {
      this.$refs.video.paused ? this.$refs.video.play() : this.$refs.video.pause()
    },
    forcePause() {
      console.log("forcePause");
      this.$refs.video.pause();
    },
    handlePlay() {
      this.$refs.videoContainer.classList.remove("paused");
    },
    handlePause() {
      this.$refs.videoContainer.classList.add("paused");
    },
  },
  // mounted() {
  //   this.$refs.video.addEventListener("timeupdate", this.getCurrentTime)
  // },
}
</script>