<template>
  <canvas id="ecg"></canvas>
</template>

<script lang="ts">
import { fabric } from 'fabric';
import { defineComponent } from 'vue';
import { Ecg } from '../ecg/Ecg-machine'
export default defineComponent({
  setup() {
    return {

    }
  },
  mounted() {
    const ecg = document.getElementById('ecg') as HTMLCanvasElement
    const canvas = new fabric.Canvas(ecg, {
      width: 850,
      height: 400,
      fireRightClick: true, // 启用右键，button的数字为3
      selection: false,
      backgroundColor: 'pink',
    })
    new Ecg(canvas)
  },
  methods: {}
})
</script>

<style scoped>

</style>
