import axios from "axios";
import swal from "sweetalert2";

export function login(context, payload) {
    context.commit('SET_LOADING', true)
    let satu = {
        "email": payload.email,
        "password": payload.password
    }
    return new Promise((resolve, reject) => {
        axios.post('login', satu)
            .then((response) => {
                let accessToken = response.data.token;
                context.commit('authSuccess', accessToken)
                localStorage.setItem('token', accessToken);
                axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
                context.commit('SET_LOADING', false)
                resolve(response);

            })
            .catch((e) => {
                context.commit('SET_LOADING', false)
                swal("ERROR", e.response.data.error, "error");
                localStorage.removeItem('token');
                context.commit('authError')
                // console.log(e);
                reject(e);
            })

    })
}

export function logout(context) {
    return new Promise((resolve, reject) => {
        context.commit('authLogout')
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        resolve();
    })
}
