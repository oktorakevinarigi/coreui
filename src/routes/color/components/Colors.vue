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
        <b-button variant="primary" :size="'lg'" v-on:click="ganti('formm')">Add New Data</b-button>
        <br/>
        <br/>
          
        <b-row>
          <b-col>
            <vue-good-table style="width:100%"
              :columns="columns"
              :rows="data"
              :search-options="{enabled: true}"
              :pagination-options="{
                enabled: true
              }"
            >
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'action'">
                <b-button variant="primary" :size="'lg'" v-on:click="edit(props.row)">Edit</b-button>&nbsp
                 <b-button variant="danger" :size="'lg'" v-on:click="deleteUser(props.row)">Delete</b-button>
              </span>
              <span v-else>
                {{props.formattedRow[props.column.field]}}
              </span>
            </template>
            </vue-good-table>
          </b-col>
        </b-row>

      </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table";
import { mapFields } from "vuex-map-fields";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  props: ["ganti", "lima", "edit","deleteUser"],
  data: function() {
    return {
      show: true,
      columns: [
        {
          label: "Name",
          field: "first_name"
        },
        {
          label: "Age",
          field: "last_name",
        },
        {
          label: "Percent",
          field: "avatar",
        },
        {
          label: "Action",
          field: "action",
          width: "180px"
        }
      ],
    };
  },
  methods: {
    // rowStyleClassFn(row) {
    //   return row.age > 18 ? "yellow" : "red";
    // },
    // ...mapActions({
    //   edit: 'color/getData'
    //   })
  },
  computed: {
    ...mapGetters(["saleProducts"]),
    ...mapState({
      data: state => state.color.dataUser.data
    })
  },
  name: "colors",
  components: { VueGoodTable }
};
</script>




