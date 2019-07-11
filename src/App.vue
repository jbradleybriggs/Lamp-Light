<template>
  <div id="app">
    <b-dropdown size="sm" text="View" class="m-2" id="dropDownSel">
      <b-dropdown-item-button @click="this.listView = true">List</b-dropdown-item-button>
      <b-dropdown-item-button @click="this.listView = false">Cover View</b-dropdown-item-button>
    </b-dropdown>
    <img id="logo" alt="Logo" src="./assets/icon.png" width="100" />

    <div class="input-group mb-3" style="padding-left: 15px; padding-right: 15px">
      <input
        v-model.lazy="searchValue"
        type="text"
        class="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        style="padding: 5px;"
        id="searchInput"
      />
    </div>

    <Table v-if="this.listView" :columns="columns" :rows="rows" :searchValue="searchValue" />
    <!-- <img v-if="this.listView" id="logo2" alt="Logo" src="./assets/icon.png" width="100" /> -->
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
    getData("get", [], {}).then(obj => {
      this.rows = obj.rows;
      this.columns = obj.columns;
    });
  },
  methods: {
    // tryThis
  }
};
</script>

<style>
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
  margin-top: 30px;
  background-color: black;
  height: 100vh;
}
html {
  background-color: slategray;
}

#dropDownSel {
  position: absolute;
  left: 7px;
  top: 80px;
}
</style>
