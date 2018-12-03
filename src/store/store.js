import Vue from "vue"
import Vuex from "vuex";
import axios from "axios";
import { getField, updateField } from "vuex-map-fields";
import storeColor from "../routes/color/store/storeColor";
import swal from "sweetalert2";
import * as action from "./actions"

Vue.use(Vuex, axios)
// Vue.use()

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        token: localStorage.getItem('token') || '',
        status: '',
        isLoading: false,
        products: [
            { name: 'banana Skin', price: 10 },
            { name: 'HP', price: 40 },
            { name: 'laptop', price: 60 },
            { name: 'keyboard', price: 80 }
        ],
        nama: 'erik',
        posts: [],
        form: [{
            autoComp: null
        }]

    },
    getters: {
        isAuthenticated: state => !!state.token,
        getModA: state => {
            return state.nama
        },
        saleProducts: state => {
            var saleProducts = state.products.map(x => {
                return {
                    name: "***" + x.name + "***",
                    price: "---" + x.price / 2 + "---"
                };
            });
            return saleProducts
        },
        getField
    },
    mutations: {
        SET_LOADING(state, data){
            state.isLoading = data;
        },
        authSuccess(state, token) {
            state.token = token;
            state.status = 'success';
        },
        authError(state) {
            state.token = '';
            state.status = 'error';
        },
        authLogout(state) {
            state.token = ''
        },
        reducePrice: (state, payload) => {
            state.products.forEach(x => {
                x.price -= payload;
            });
        },
        onChange: (state, payload) => {
            debugger
            state.nama = payload
        },
        updateField,
        SET_POST(state, posts) {
            state.posts = posts
        },
        ADD_FROM(state) {
            state.form.push({
                autoComp: '',
            });
        }
    },
    actions: {
        login(context, payload) {
            return action.login(context, payload)
        },
        logout(context) {
            return action.logout(context)
        },
        reducePrice: (context, payload) => {
            setTimeout(function () {
                context.commit('reducePrice', payload)
            }, 3000)
        },
        onChange: (context, obj, payload) => {
            context.commit('onChange', payload)
        },
        loadPost({ commit }) {
            console.log("load Post");
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    commit('SET_POST', res.data)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    },
    modules: {
        color: storeColor
    }
})

window.store = store
export default store