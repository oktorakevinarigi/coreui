import axios from "axios";
import Swal from "sweetalert2";
import moment from 'moment';

const storeColor = {
    namespaced: true,
    strict: true,
    state: {
        isLoading: false,
        dataUser: [],
        modA: 'datamodA',
        states: [
            {
                value: 1,
                text: "Alabama",
                nama: "erik1"
            }, {
                value: 2,
                text: "Alaska",
                nama: "erik2"
            }, {
                value: 3,
                text: "American Samoa",
                nama: "erik3"
            },
        ],
        form: [
            {
                id: 0,
                autoComp: null,
                nama: '',
                email: '',
                status: false,
                tgl: moment().format("YYYY-MM-DD"),
                tglRange: []
            }
        ],
    },
    getters: {
        getModA: state => {
            return state.modA
        },
        getForm: state => {
            return state.form
        },
        gIsLoading: state => state.isLoading,
    },
    mutations: {
        SET_LOADING(state, payload) {
            state.isLoading = payload
        },
        SET_DATA_USER(state, payload) {
            state.dataUser = payload
        },
        SET_GET(state, payload) {
            state.form = [
                {
                    id: payload.id,
                    autoComp: null,
                    nama: payload.title,
                }
            ]
        },
        RESET_FORM(state) {
            state.form = [
                {
                    id: 0,
                    autoComp: null,
                    nama: '',
                    status: false,
                    tgl: null,
                    modal:false,
                    tglRange: [],
                    img:''
                }
            ]
        },
    },
    actions: {
        getUser({ commit }, payload) {
            commit('SET_LOADING', true)
            return new Promise((resolve, reject) => {
                axios.get('users?page=2')
                    .then((res) => {
                        commit('SET_DATA_USER', res.data)
                        commit('SET_LOADING', false)
                        resolve(res);

                    })
                    .catch((e) => {
                        commit('SET_LOADING', false)
                        // swal("ERROR", e.response.data.error, "error");
                        reject(e);
                    })

            })
        },
        getData({ commit }, id) {
            commit('SET_LOADING', true)
            axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
                .then(res => {
                    commit('SET_GET', res.data)
                    commit('SET_LOADING', false)
                })
                .catch(e => {
                    console.log(e)
                })
        },
        delData({ commit }, id) {
            Swal({
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, keep it"
            }).then(result => {

            });
        }
    },
}

export default storeColor
