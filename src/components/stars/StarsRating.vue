<template lang="">
    <div>
      <svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-star" viewBox="0 0 26 28">
            <path d="M26 10.109c0 0.281-0.203 0.547-0.406 0.75l-5.672 5.531 1.344 7.812c0.016 0.109 0.016 0.203 0.016 0.313 0 0.406-0.187 0.781-0.641 0.781-0.219 0-0.438-0.078-0.625-0.187l-7.016-3.687-7.016 3.687c-0.203 0.109-0.406 0.187-0.625 0.187-0.453 0-0.656-0.375-0.656-0.781 0-0.109 0.016-0.203 0.031-0.313l1.344-7.812-5.688-5.531c-0.187-0.203-0.391-0.469-0.391-0.75 0-0.469 0.484-0.656 0.875-0.719l7.844-1.141 3.516-7.109c0.141-0.297 0.406-0.641 0.766-0.641s0.625 0.344 0.766 0.641l3.516 7.109 7.844 1.141c0.375 0.063 0.875 0.25 0.875 0.719z"></path>
          </symbol>
          <symbol id="icon-star-half" viewBox="0 0 13 28">
            <path d="M13 0.5v20.922l-7.016 3.687c-0.203 0.109-0.406 0.187-0.625 0.187-0.453 0-0.656-0.375-0.656-0.781 0-0.109 0.016-0.203 0.031-0.313l1.344-7.812-5.688-5.531c-0.187-0.203-0.391-0.469-0.391-0.75 0-0.469 0.484-0.656 0.875-0.719l7.844-1.141 3.516-7.109c0.141-0.297 0.406-0.641 0.766-0.641v0z"></path>
          </symbol>
        </defs>
      </svg>
      <div class="comment-stars">
      
        <input
        :checked="stars==5"  
        @change="handleRatingChange(5)"
        class="comment-stars-input" type="radio" name="rating5" :value="5" id="rating-5">
        <label class="comment-stars-view" for="rating-5"><svg class="icon icon-star">
            <use xlink:href="#icon-star"></use>
          </svg></label>
        <input
        :checked="stars>=4"  
        @change="handleRatingChange(4)"
        class="comment-stars-input" type="radio" name="rating4" :value="4" id="rating-4"> <label class="comment-stars-view" for="rating-4"><svg class="icon icon-star">
            <use xlink:href="#icon-star"></use>
          </svg></label>
        <input
        :checked="stars>=3"  
        @change="handleRatingChange(3)"
        class="comment-stars-input" type="radio" name="rating3" :value="3" id="rating-3"> <label class="comment-stars-view" for="rating-3"><svg class="icon icon-star">
            <use xlink:href="#icon-star"></use>
          </svg></label>
        <input
        :checked="stars>=2"  
        @change="handleRatingChange(2)"
        class="comment-stars-input" type="radio" name="rating2" :value="2" id="rating-2"> <label class="comment-stars-view" for="rating-2"><svg class="icon icon-star">
            <use xlink:href="#icon-star"></use>
          </svg></label>
        <input
        :checked="stars>=1" 
        @change="handleRatingChange(1)"
        class="comment-stars-input" type="radio" name="rating1" :value="1" id="rating-1"> <label class="comment-stars-view" for="rating-1"><svg class="icon icon-star">
            <use xlink:href="#icon-star"></use>
          </svg></label>
      </div>
    </div>
</template>
<script>
export default {
  methods: {
    handleRatingChange(e) {
      this.stars = e;
    }
  },
  data () {
    return {
      stars: 3,
    }
  },
    
}
</script>
<style scoped>


.comment-stars {
  display: flex;
  flex-direction: row-reverse;
}

.comment-stars-input {
  display: none;
}

.comment-stars-view svg {
  margin: 0 5px;
}

.comment-stars-input:checked ~ .comment-stars-view svg {
  fill: var(--yellow);
}

.comment-stars-input:checked ~ .comment-stars-view:hover svg,
.comment-stars-input:checked
  ~ .comment-stars-view:hover
  ~ .comment-stars-view
  svg {
  fill: #fdcb9c;
}

.comment-stars-view {
  cursor: pointer;
}

.comment-stars-view svg {
  fill: #ededef;
  width: 1.39306640625em;
  height: 1.5em;
}

.comment-stars-view.is-half {
  transform: translateX(100%);
  margin-left: -0.69580078125em;
}

.comment-stars-view.is-half svg {
  width: 0.69580078125em;
}

.comment-stars-view:hover svg,
.comment-stars-view:hover ~ .comment-stars-view svg {
  fill: #fdc795;
}

</style>