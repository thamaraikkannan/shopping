<template>
    <div class="container-md mt-5">
        <div v-for="product in $store.state.products" :key="product.id">
            <div v-if="product.id == $route.params.id">
                <div class="row">
                    <div class="col-md-5 col-sm-6 product-img border border-1 border-secondary bg-white rounded" v-bind:style="{ 'background-image': product.image, 'background-repeat': 'no-repeat', 'background-size': 'cover' }">
                    </div>
                    <div class="col-md-7 col-sm-6 fs-5 d-flex flex-column justify-content-between align-items-start mb-md-0 mb-5 px-4">
                        <div class="mt-4 mt-md-0">
                            <h2 class="mb-4">{{product.brand}}</h2>                            
                            <p class="my-2">
                                Rating:
                                <span class="rating shadow-sm" :class="{
                                    highRating: product.rating.rate <= 5,
                                    avgRating: product.rating.rate < 4,
                                    lowRating: product.rating.rate < 3,
                                }">
                                    {{formatRating(product.rating.rate)}}
                                </span> 
                            </p>
                            <p class="my-2">
                                Price:
                                <span class="text-capitalize">
                                    <i class="fas fa-dollar-sign"></i>
                                    {{formatPrice(product.price)}}
                                </span>
                            </p>
                            <p class="mt-3 fs-6">
                                <strong class="fs-4">Description</strong>
                                <br />
                                {{formatDescription(product.description)}}
                            </p>                            
                        </div>
                        <div class="d-inline-block mt-4">
                            <router-link to="/" class="text-decoration-none">
                                <button class="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Back to main
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    components: {  },
    data(){
        return{
           
        }
    },
    methods:{
        formatRating(product){
            return product.toFixed(1)
        },
        formatPrice(product){
            return product.toFixed(2)
        },
        formatDescription(product){
            return product.charAt(0).toUpperCase() + product.slice(1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .row{
        .product-img{
            height: 60vh;
            padding: 0;
            margin: 0;
            img{
                height: 100%;
                width: 100%;
                transform: scale(0.75, 0.85);
                @media(max-width: 30rem){
                    transform: scale(0.9);
                }
            }
        }
        .quantity-input{
            width: 3rem;
        }
    }
</style>