<template>
      <GMapMap
          :key="updateKey"
          class="w-full h-full"
          ref="mapRef" :center="center" :zoom="18" map-type-id="terrain" >
          <GMapMarker 
              :key="index"
              v-for="(store, index) in stores"
              :icon="icons[store.type]"
              :position="store.position"
              :disableDefaultUI="true"
              @click="handleMarkerClick(store.id)"
          >
          </GMapMarker>

          <GMapMarker
              :icon="icons[0]"
              :position="coords"
              :disableDefaultUI="true"
          >
          </GMapMarker>
      </GMapMap>



</template>
<script>
import { useGeolocation } from '@vueuse/core'
import { toRaw } from 'vue';
import axios from 'axios'
import data from '@/db.json'
import icon from '@/components/maps/icons.json';
import IngredientCheckbox from '@/components/checkboxs/IngredientCheckbox.vue';
import StarsRatingDisplay from '@/components/stars/StarsRatingDisplay.vue';
import { closeModal, openModal } from 'jenesius-vue-modal';
import IngredientSelectModal from '@/components/modals/IngredientSelectModal.vue';
import { useIngredientStore } from '@/stores/ingredient';
import { mapState } from 'pinia';

export default {
  props: ['stores', 'center'],
  computed: {
      ...mapState(useIngredientStore, ['getIngredients']),
      updateKey() {
          return this.$router.name
      }
  },
  mounted() {
      const success = (position) => {
          const lat  = position.coords.latitude;
          const lng = position.coords.longitude;

          // Do something with the position

          this.coords.lat = lat;
          this.coords.lng = lng;
      };

      const error = (err) => {
          console.log(error)
      };

      // This will open permission popup
      navigator.geolocation.getCurrentPosition(success, error);
      

      if (this.getIngredients) {
              this.ingredients = this.getIngredients
      }


  },
  data() {
      return {
          KEY: 'AIzaSyAu94igMGdWyK9JSVIKwM-e-M9vzZtsTWI',
          selectedMarkerId: -1,
          coords: {
              lat: 0,
              lng: 0
          },
          distance: 0,
          showSidewindow: false,
          options: {},
          icons: icon.icons,
          ingredients: [],
      };
  },
  methods: {
      async openIngredientModal () {
          const preSelect = this.ingredients.map(e => e.id)

          const modal = await openModal(IngredientSelectModal, {preSelect: preSelect})

          modal.on('passData', data => {
              this.ingredients = data;
              closeModal();
          })
      },

      handleMarkerClick(id) {
          this.selectedMarkerId = id;

      },

  },
  components: { IngredientCheckbox, StarsRatingDisplay },
}
</script>

<style scoped>

.slide-down {
  animation: slideUp 0.4s ease-in-out; /* Độ dài và chế độ animation */
}

.insideContainer {
  max-height: 70%;
}

@keyframes slideUp {
  from {
      transform: translateY(-50%);
      opacity: 0;
  }
  to {
      transform: translateY(0);
      opacity: 1;
  }
}
</style>