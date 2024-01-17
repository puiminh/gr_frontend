<script>
/* eslint-disable no-undef */
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useGeolocation } from '@/useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'
import data from './icons.json'

const GOOGLE_MAPS_API_KEY = 'AIzaSyAu94igMGdWyK9JSVIKwM-e-M9vzZtsTWI'

export default {
  props: ['stores', 'center'],
  watch: {
    otherPos(newValue) {
      console.log(newValue);
    }
  },


  setup(props) {
    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))
    const otherPos = ref(null)

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)

    let map = ref(null)
    let clickListener = null

    onMounted(async () => {
      await loader.load()
      let dS = new google.maps.DirectionsService();
      let dD = new google.maps.DirectionsRenderer();
      map.value = new google.maps.Map(mapDiv.value, {
        center: props.center,
        zoom: 15,
      })
      clickListener = map.value.addListener(
        'click',
        ({ latLng: { lat, lng } }) => {
          (otherPos.value = { lat: lat(), lng: lng() })
          console.log(otherPos);
        }
      )

      console.log(props.stores);

      props.stores.forEach(element => {
        createMarker(element.location.lat, element.location.lng, element.type)        
      });

      createMarker(currPos.value.lat, currPos.value.lng, 0);

      let request = {
        origin: currPos.value,
        destination: props.center,
        travelMode: "DRIVING",
      }

      dS.route(request, function(result, status) {
        if (status == "OK") {
          console.log(result);

          dD.setDirections(result);
        } else {
          console.log(status);
        }
      })
      dD.setMap(map.value)



    })
    onUnmounted(async () => {
      if (clickListener) clickListener.remove()
    })

    let line = null
    watch([map, currPos, otherPos], () => {
      if (line) line.setMap(null)
      if (map.value && otherPos.value != null)
        line = new google.maps.Polyline({
          path: [currPos.value, otherPos.value],
          map: map.value
        })
    })

    function createMarker (lat, lng, iconType) {
      console.log(data);
      new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map.value,
          icon: data.icons[iconType]
      });
    };

    const haversineDistance = (pos1, pos2) => {
      const R = 3958.8 // Radius of the Earth in miles
      const rlat1 = pos1.lat * (Math.PI / 180) // Convert degrees to radians
      const rlat2 = pos2.lat * (Math.PI / 180) // Convert degrees to radians
      const difflat = rlat2 - rlat1 // Radian difference (latitudes)
      const difflon = (pos2.lng - pos1.lng) * (Math.PI / 180) // Radian difference (longitudes)

      const d =
        2 *
        R *
        Math.asin(
          Math.sqrt(
            Math.sin(difflat / 2) * Math.sin(difflat / 2) +
              Math.cos(rlat1) *
                Math.cos(rlat2) *
                Math.sin(difflon / 2) *
                Math.sin(difflon / 2)
          )
        )
      return d
    }
    const distance = computed(() =>
      otherPos.value === null
        ? 0
        : haversineDistance(currPos.value, otherPos.value)
    )
    return { currPos, otherPos, distance, mapDiv }
  }
}
</script>

<template>
  <div ref="mapDiv" style="width: 100%; height: 100%" />
</template>@/services/useGeolocation