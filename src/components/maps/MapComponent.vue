<template>
    <GMapMap ref="mapRef" :center="center" :zoom="18" map-type-id="terrain" style="width: 100%; height: 100%">
        <GMapMarker
          :key="index"
          v-for="(m, index) in stores"
          :icon="icon[0]"
          :position="m.position"
          :clickable="true"
          :disableDefaultUI="true"
        >
          <GMapInfoWindow
            :opened="selectedMarkerId == m.id"
            :options=" {
                    pixelOffset: {
                      width: 10, height: 0
                    },
                    maxWidth: 320,
                    maxHeight: 320,
            }"
          >
            <InfoWindow :data="m"></InfoWindow>
          </GMapInfoWindow>
        </GMapMarker>

        <!-- <GMapMarker
        :position="current"
        :clickable="true"
        :disableDefaultUI="true">

        </GMapMarker> -->
    </GMapMap>
  </template>
  <script>
  import { useGeolocation } from '../../useGeolocation'
  import { toRaw } from 'vue';
  import axios from 'axios'
  import InfoWindow from './InfoWindow.vue';
  import data from '@/db.json'
  import IconCurrent from '../icons/IconCurrent.vue';
  
  export default {
      computed: {

      },
      mounted() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.current = {lat: position.coords.latitude, lng: position.coords.longitude}
                console.log(this.current);
            },
            error => {
                console.log(error.message);
            },
        )

        console.log(this.stores);
      },
      props: ['stores', 'center'],
      data() {
          return {
              KEY: 'AIzaSyAu94igMGdWyK9JSVIKwM-e-M9vzZtsTWI',
              selectedMarkerId: -1,
              distance: 0,
              current: { lat: 0, lng: 0 },
              icon : [
                {
                    url: "https://cdn-icons-png.flaticon.com/512/8422/8422894.png",
                    scaledSize: {width: 50, height: 50},
                    labelOrigin: {x: 0, y: 0}
                },
                './images/food.png',
                './images/247.png',
                './images/store.png'
              ]
          };
      },
      methods: {
          getDistance(id, p) {
              this.selectedMarkerId = id;
              const position = toRaw(p);
              console.log("current:", this.coords, "to:", position);
              this.getDistanceFunc(position)
          },
          getDistanceFunc(position) {
              const corDelete = 'https://cors-anywhere.herokuapp.com/';
              const url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${position.lat}, ${position.lng}&origins=${this.coords.latitude}, ${this.coords.longitude}&key=${this.KEY}`;
              const config = {
                  method: 'get',
                  url: corDelete + url,
                  secure: false,
                  headers: {
                      "X-Requested-With": "XMLHttpRequest"
                  },
              };
  
              axios(config).then(response => {
                  console.log(response);
                  this.distance = response.data.rows[0].elements[0].distance.text;
                  console.log(this.distance);
              }).catch(err => {
                  console.error(err);
              });
          }
      },
      components: { InfoWindow, IconCurrent },
  }
  </script>

<style>

</style>