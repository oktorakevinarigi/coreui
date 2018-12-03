<template>
<div>
  <component v-bind:is="component" :edit="edit" :ganti="ganti" :deleteUser="deleteUser"></component>
  <!-- <Color v-show="show" :coba="ganti" :lima="lima" :edit="edit"></Color>
  <FormData v-show="!show" :coba="ganti" :form="form"></FormData> -->
  <BlockUI v-show="this.$store.state.color.isLoading">
    <half-circle-spinner
      :animation-duration="1000"
      :size="80"
      color="#3498DB"
    />
  </BlockUI>
</div>
</template>

<script>
import Color from "./Colors";
import FormDataa from "./Form";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { mapMultiRowFields, mapFields } from "vuex-map-fields";
import { HalfCircleSpinner } from "epic-spinners";
import moment from 'moment';
export default {
  data: function() {
    return {
      show: true,
      component: "",
    };
  },
  computed: {
    // ...mapGetters({
    //   lima: "color/getModA",
    //   ss: "color/getForm"
    // }),
    // ...mapMultiRowFields({
    //   form: "color.form"
    // }),
    ...mapState(["isLoading"])
  },
  methods: {
    ganti: function(isDisplay) {
      this.component = isDisplay;
      this.$store.commit("color/RESET_FORM");
    },
    edit: function(data) {
      this.$store.dispatch("color/getData", data.id);
      this.component = "formm";
    },
    deleteUser: function(data) {
      this.$store.dispatch("color/delData", data.id);
    }
    // ...mapActions({

    // })
  },
  mounted() {
    this.$store.dispatch("color/getUser").then(() => {
      this.component = "color";
    });
  },
  name: "colors",
  components: {
    color: Color,
    formm: FormDataa,
    HalfCircleSpinner
  }
};
</script>



