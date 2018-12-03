<template>
  <div class="animated fadeIn">
    <b-card header-tag="header" no-body v-if="show">
      <div slot="header">
        <i class="icon-drop"></i> Form
        <div class="card-header-actions">
          <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
            <i class="icon-arrow-up"></i>
          </b-link>
        </div>
      </div>
      <b-collapse id="collapse1" visible>
        <b-card-body>
          <b-row>
            <b-col>
              <v-autocomplete
                v-model="form[0].autoComp"
                v-validate="'required'"
                :error-messages="errors.collect('search')"
                data-vv-name="search"
                :hint="'Click the icon to edit'"
                :items="states"
                :item-text="states.text"
                :item-value="states.value"
                :label="'Search Autocomplate'"
                persistent-hint
              ></v-autocomplete>
              <v-text-field
                v-model="form[0].nama"
                v-validate="'required|max:10'"
                :error-messages="errors.collect('name')"
                :counter="10"
                label="Name"
                data-vv-name="name"
              ></v-text-field>
              <v-text-field
                v-validate="'required|email'"
                v-model="form[0].email"
                :error-messages="errors.collect('email')"
                label="E-mail"
                data-vv-name="email"
                required
              ></v-text-field>
              <v-switch v-model="form[0].status" label="John" input-value="form[0].status"></v-switch>
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="form[0].tgl"
                persistent
                lazy
                full-width
                width="290px"
              >
                <v-text-field
                  slot="activator"
                  :error-messages="errors.collect('enddate')"
                  v-validate="'required'"
                  data-vv-name="enddate"
                  v-model="form[0].tgl"
                  label="Tanggal"
                  name="enddate"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="form[0].tgl">
                  <v-spacer></v-spacer>
                  <v-btn
                    flat
                    color="primary"
                    @click="(e) => {modal = false, this.$validator.validate('enddate')}"
                  >Cancel</v-btn>
                  <v-btn
                    flat
                    color="primary"
                    @click="(e)=> {$refs.dialog.save(form[0].tgl), this.$validator.validate('enddate')}"
                  >OK</v-btn>
                </v-date-picker>
              </v-dialog>
              <vue-dropzone
                id="customdropzone"
                :options="dropOptions"
                @vdropzone-file-added="ss"
                ref="fileimg"
                :duplicateCheck="true"
                v-model="form[0].img"
              ></vue-dropzone>
              <v-text-field v-model="datagambar" label="E-mail" v-on:click="satu" readonly></v-text-field>

              <!-- <v-daterange :options="dateRangeOptions" no-presets :highlight-range="true" v-model="form[0].tglRange"></v-daterange> -->
              <!-- <p>From:
                <v-chip>{{ range[0] }}</v-chip>To:
                <v-chip>{{ range[1] }}</v-chip>
              </p>
              <p>From:
                <v-chip>{{ form[0].tglRange[0] }}</v-chip>To:
                <v-chip>{{ form[0].tglRange[1] }}</v-chip>
              </p>-->
              <!-- <ul>
              <li v-for="(item, index) in posts" :key="index">{{item.title}}</li>
              </ul>-->
            </b-col>
          </b-row>
        </b-card-body>
        <b-card-footer>
          <div>
            <b-row>
              <b-col>
                <b-button :size="'lg'" variant="success" @click="handleSubmit">Submit</b-button>&nbsp
                <b-button :size="'lg'" variant="primary" v-on:click="ganti('color')">Cancel</b-button>
              </b-col>
            </b-row>
          </div>
        </b-card-footer>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import { mapMultiRowFields, mapFields } from "vuex-map-fields";
import { mapState, mapMutations, mapActions } from "vuex";
import vueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { format, subDays, addDays, addYears } from "date-fns";
const dict = {
  custom: {
    email: {
      required: "Your email is empty"
    },
    name: {
      required: () => "Your name is empty"
    }
  }
};
let fileimg
export default {
  props: ["ganti"],
  data: function() {
    return {
      show: true,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      dropOptions: {
        url: 'https://httpbin.org/post',
        uploadMultiple:true,
        previewsContainer:''
      },
      datagambar:'asas',
      range: [],
      dateRangeOptions: {
        startDate: format(new Date(), "YYYY-MM-DD"),
        endDate: format(addYears(new Date(), 1), "YYYY-MM-DD"),
        format: "MM/DD/YYYY",
        presets: [
          {
            label: "Today",
            range: [
              format(new Date(), "YYYY-MM-DD"),
              format(new Date(), "YYYY-MM-DD")
            ]
          },
          {
            label: "Yesterday",
            range: [
              format(subDays(new Date(), 1), "YYYY-MM-DD"),
              format(subDays(new Date(), 1), "YYYY-MM-DD")
            ]
          },
          {
            label: "Last 30 Days",
            range: [
              format(subDays(new Date(), 30), "YYYY-MM-DD"),
              format(subDays(new Date(), 1), "YYYY-MM-DD")
            ]
          }
        ]
      }
    };
  },
  mounted() {
    // this.$store.dispatch("loadPost")
    const dict = {
      custom: {
        email: {
          required: "Your email is empty"
        },
        name: {
          required: () => "Your name is empty"
        }
      }
    };

    this.$validator.localize("en", dict);
  },
  computed: {
    ...mapState({
      states: state => state.color.states
    }),
    ...mapFields({
      posts: "posts"
    }),
    ...mapMultiRowFields({
      form: "color.form"
    })
  },
  methods: {
    satu(){
      document.getElementById("customdropzone").click();
    },
    ss(s,d,f,v){
      debugger
      this.datagambar= s.name
    },
    handleSubmit() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          console.log("Success");
        }
      });
    }
  },
  name: "colors",
  components: { vueDropzone }
};
</script>










