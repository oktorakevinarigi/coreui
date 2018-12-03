<template>
  <div class="animated fadeIn">
    <b-card header-tag="header" no-body v-if="show">
      <div slot="header">
        <i class="icon-drop"></i> Theme colors
        <div class="card-header-actions">
        <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
      </div>
      </div>
      <b-collapse id="collapse1" visible>
      <b-card-body>
        <b-button variant="primary">Add New Data</b-button>
        <br/>
        <br/>
          
        <b-row>
          
          <b-col>
            <vue-good-table style="width:100%"
            :columns="columns"
            :rows="rows"
            :row-style-class="rowStyleClassFn"
            :search-options="{
                          enabled: true
                        }"
            :pagination-options="{
              enabled: true
            }"/>
          </b-col>
          
        </b-row>
      </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import ColorTheme from "./ColorTheme";
import { VueGoodTable } from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

import Vue from 'vue'
Vue.use(VueGoodTable);

export default {
  data: function () {
    return {
      show: true,
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM Do YY',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '201-10-31:9: 35 am',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    }
  },
  methods:{
    rowStyleClassFn(row) {
        return row.age > 18 ? 'yellow' : 'red';
      },
  },
  name: "colors",
  components: { ColorTheme, VueGoodTable }
};
</script>
<style>
.yellow{
  width: 100%
}
</style>



