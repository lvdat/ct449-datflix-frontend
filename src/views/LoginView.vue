<template>
    <div class="row mb-3 mt-3">
        <div class="text-center text-danger">
            <b>
                <h4>ĐĂNG NHẬP ĐỂ TRẢI NGHIỆM NGAY!</h4>
            </b>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="card">
                <div class="card-body">
                    <div class="alert alert-danger" role="alert" v-if="errorShow">
                        {{ errorInfo }}
                    </div>
                    <form @submit.prevent="login">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Tên người dùng</label>
                            <input type="text" class="form-control form-control-lg" id="exampleInputEmail1" v-model="username" required>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                            <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" v-model="password" required>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-danger btn-lg">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>    
        </div> 
    </div>
</template>
<script>
import md5 from 'md5'
import { useAuthStore } from '../stores/auth'
import axios from 'axios'
export default {
    data() {
        return {
            username: '',
            password: '',
            error: '',
            errorInfo: '',
            errorShow: false,
        }
    },
    setup() {
        const authStore = useAuthStore()
        return {
            authLogin: authStore.login,
        }
    },
    methods: {
        login() {
            axios
            .post("http://localhost:3333/api/v1/auth/login", {
               username: this.username,
               password: md5(this.password),
            })
            .then((res) => {
               console.log(res)
               if (res.data.x_access_token) {
                  this.authLogin(res.data.x_access_token, this.username, res.data.avatar)
                  this.$swal({
                     title: "Đăng nhập thành công",
                     icon: "success",
                     showConfirmButton: true,
                  })
                  this.$router.push("/")
               }
            })
            .catch((err) => {
               this.errorInfo = err.message
               this.errorShow = true
            })
        },
    }
}
</script>