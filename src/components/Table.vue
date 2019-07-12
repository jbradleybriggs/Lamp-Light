<template>
  <div id="tableContainer">
    <table class="table table-striped table-dark table-hover">
      <tr>
        <!-- HEADINGS -->
        <th v-for="(field, index) in columns" v-bind:key="index" scope="col">{{field}}</th>
      </tr>
      <!-- ROWS -->
      <tr v-for="(row, index) in dataFilter" v-bind:key="index" scope="row">
        <td v-for="(value, index) in row" v-bind:key="index">{{value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "table",
  components: {},
  props: {
    columns: [],
    rows: [],
    searchValue: ""
  },
  computed: {
    dataFilter() {
      return this.rows.filter(row => {
        for (var field in row) {
          if (row[field].toLowerCase().match(this.searchValue.toLowerCase()))
            return true;
        }
        return false;
      });
    }
  }
};
</script>

<style>
/* table {
  width: 100%;
  border-collapse: collapse;
} */
td,
th {
  text-align: left;
  /* text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; */
}
tr:hover {
  background-color: rgb(245, 226, 58);
  color: black;
}
#tableContainer {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 100%;
}
</style>
