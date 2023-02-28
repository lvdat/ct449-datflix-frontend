<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top main__nav">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <b>PHIMMOIZZ</b>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Phim mới</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Phim chiếu rạp</a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="&#xF002; Tìm phim, diễn viên,..." aria-label="Search" id="searchInput" v-model="search">
                <button class="btn text-white" type="submit" id="searchButton"><i class="fas fa-search"></i></button>
            </form>
            <ul class="ml-auto navbar-nav">
                <template v-if="!logged">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Đăng nhập</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup">Tạo tài khoản</router-link>
                    </li>
                </template>
                <template v-else>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="@/assets/logo.svg" alt="Logo" width="24" height="24" class="d-inline-block align-text-top main__nav--avatar">
                            Hi, levandat
                        </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Trang cá nhân</a></li>
                        <li><a class="dropdown-item" href="#">Cài đặt tài khoản</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
                    </ul>
                </li>
                </template>
            </ul>
            
            </div>
        </div>
    </nav>
</template>
<script>
import { useAuthStore } from '../stores/auth'
export default {
    data() {
        return {
            search: '',
            logged: false,
            user: null,
        }
    },
    methods: {
        checkLogin () {
            const authStore = useAuthStore()
            if(authStore.isAuthenticated) {
                this.logged = true
                this.user = {
                    name: authStore.user.name,
                    avatar: authStore.user.avatar
                }
            } else {
                this.logged = false
                this.user = null
            }
        }
    },
    mounted() {
        this.checkLogin()
    },
    watch: {
        $route: function () {
            this.checkLogin()
        }
    }
}

</script>
<style scoped>
.main__nav {
    padding: 13px;
    background-color: rgb(20, 20, 20);
}
.main__nav--avatar {
    border-radius: 50%;
    margin-right: 5px;
    border: 1px solid red;
}
.nav-link {
    color: #fff;
}
.navbar-nav .nav-link.active {
    font-weight: bold;
}
.navbar-brand {
    color: red;
}
.form-control {
    border-radius: 0%;
    width: 260px;
    padding-left: 0.5em;
    border: 1px solid #fff;
    background-color: white;
}
</style>