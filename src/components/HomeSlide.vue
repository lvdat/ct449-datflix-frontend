<template>
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="row">
                <div class="col-3">
                    <div class="card" style="width: 100%; height: 0; padding-bottom: 56%;">
                        <img src="@/assets/backdrops/1.jpeg" alt="Your Image">
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" style="width: 100%; height: 0; padding-bottom: 56%;">
                        <img src="@/assets/backdrops/2.jpeg" alt="Your Image">
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" style="width: 100%; height: 0; padding-bottom: 56%;">
                        <img src="@/assets/backdrops/3.jpeg" alt="Your Image">
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" style="width: 100%; height: 0; padding-bottom: 56%;">
                        <img src="@/assets/backdrops/4.jpeg" alt="Your Image">
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item" v-for="n in 3">
            <div class="row">
                <div class="col-3">
                    <div class="card" style="width: 100%; height: 0; padding-bottom: 56%;">
                        <img src="@/assets/backdrops/1.jpeg" alt="Your Image">
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" style="width: 100%; height: 0; padding-bottom: 56%;">
                        <img src="@/assets/backdrops/2.jpeg" alt="Your Image">
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" style="width: 100%; height: 0; padding-bottom: 56%;">
                        <img src="@/assets/backdrops/3.jpeg" alt="Your Image">
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" style="width: 100%; height: 0; padding-bottom: 56%;">
                        <img src="@/assets/backdrops/4.jpeg" alt="Your Image">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            slider: [
                "red", 
                "green", 
                "orange", 
                "blue", 
                "pink", 
                "purple", 
                "indigo", 
                "cyan", 
                "deep-purple", 
                "light-green", 
                "deep-orange", 
                "blue-grey"
            ]
        }
    },
    computed: {
        columns() {
            return 3
        }
    },
}
</script>
<style scoped>
.card {
    border-radius: 0%;
}
</style>