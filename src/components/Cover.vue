<template>
  <div class="coverContainer">
    <b-img-lazy v-bind="props" :src="this.source" alt="Cover"></b-img-lazy>
    <!-- <b-img-lazy src="../public/covers/Cover (11).jpg" alt="Cover 0" id="pic0" class="coverImg"></b-img-lazy> -->
    <div class="coverLabel">{{this.caption}}</div>
  </div>
</template>

<style>
.coverContainer {
  width: 25vw;
  height: 37.5vw;
  background-color: slategray;
  float: left;
}

.coverImg {
  /* position: absolute; */
  width: 95%;
  height: 95%;
}

.coverLabel {
  color: white;
  font-size: 1.2vw;
}
</style>

<script>
// console.log(this.source);
export default {
  name: "cover",
  // components: {},
  props: {
    caption: "",
    source: "../../public/covers/Cover (11).jpg"
    // blankColor: "#bbb",
    // blank: true,
    // width: 640,
    // height: 960,
    // class: "coverImg",
    // fluidGrow: true
  }
};
</script>
