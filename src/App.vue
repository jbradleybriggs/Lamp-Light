<template>
  <div id="app">
    <div id="sideBar">
      <img id="movieIcon" alt="Logo" src="./assets/svgs/regular/play-circle.svg" width="35">
    </div>
    <div id="mainContainer">
      <div id="topBar">
        <b-dropdown size="sm" text="View" class="m-2" id="dropDownSel">
          <b-dropdown-item-button @click="this.listView = true">List</b-dropdown-item-button>
          <b-dropdown-item-button @click="this.listView = false">Cover View</b-dropdown-item-button>
        </b-dropdown>
        <div id="searchBar" class="input-group mb-3">
          <input
            v-model.lazy="searchValue"
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            id="searchInput"
          >
        </div>
      </div>
      <div id="infoContainer">
        <!-- <Table v-if="this.listView" :columns="columns" :rows="rows" :searchValue="searchValue"/> -->
        <!-- <b-img-lazy v-bind="mainProps" :src="getImageUrl(80)" alt="Image 1"></b-img-lazy> -->
        <div id="cover0" class="coverContainer">
          <b-img-lazy
            src="../public/covers/Cover (11).jpg"
            alt="Cover 0"
            id="pic0"
            class="coverImg"
          ></b-img-lazy>
          <div id="label0" class="coverLabel">Some Movie</div>
        </div>
        <div id="cover1" class="coverContainer">
          <b-img-lazy src="../public/covers/Cover (2).jpg" alt="Cover 0" id="pic1" class="coverImg"></b-img-lazy>
          <div id="label1" class="coverLabel">Another Movie</div>
        </div>
        <div id="cover2" class="coverContainer">
          <b-img-lazy src="../public/covers/Cover (3).jpg" alt="Cover 0" id="pic2" class="coverImg"></b-img-lazy>
          <div id="label2" class="coverLabel">Another Movie Part 2</div>
        </div>
      </div>
      <!-- <img id="logo" alt="Logo" src="./assets/icon.png" width="100"> -->
    </div>
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import { getData } from "./BackEnd.js";

// function tryThis() {
//   console.log(this.$root);
// }

export default {
  name: "app",
  components: {
    Table
  },
  data: () => ({
    error: "",
    columns: [],
    rows: [],
    searchValue: "",
    listView: true
  }),
  mounted() {
    getData("get", ["title", "year", "genres", "vote_average"], {}).then(
      obj => {
        this.rows = obj.rows;
        this.columns = obj.columns;
      }
    );
  },
  methods: {
    // tryThis
  }
};
</script>

<style>
html {
  background-color: black;
}

#logo {
  float: right;
  width: 100px;
  padding: 10px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  background-color: black;
  height: 100vh;
  /* width: 100vw; */
}

#dropDownSel {
  position: absolute;
  left: 2px;
  top: 47px;
}

#sideBar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50px;
  background-color: yellow;
}

#mainContainer {
  position: absolute;
  top: 0;
  left: 50px;
  width: 95vw;
  background-color: black;
}

#topBar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: black;
}
#infoContainer {
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}

#searchBar {
  position: absolute;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

#movieIcon {
  position: absolute;
  top: 20px;
  left: 7.5px;
}

.coverContainer {
  width: 25vw;
  height: 37.5vw;
  background-color: black;
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
