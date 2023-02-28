<template>
    <div class="row mb-3 mt-3">
        <div class="text-center text-danger">
            <b>
                <h4>TẠO TÀI KHOẢN ĐỂ TRẢI NGHIỆM NGAY!</h4>
            </b>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="card">
                <div class="card-body">
                    <div class="alert alert-danger" role="alert" v-if="error">
                        {{ error }}
                    </div>
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">Tên người dùng</label>
                            <input type="text" class="form-control form-control-lg" id="username" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control form-control-lg" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="pass1" class="form-label">Mật khẩu</label>
                            <input type="password" class="form-control form-control-lg" id="pass1" required>
                        </div>
                        <div class="mb-3">
                            <label for="pass2" class="form-label">Nhập lại mật khẩu</label>
                            <input type="password" class="form-control form-control-lg" id="pass2" required>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-danger btn-lg">Tạo tài khoản</button>
                        </div>
                    </form>
                </div>
            </div>    
        </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            error: '',
        }
    },
}
</script>