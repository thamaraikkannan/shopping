<template>
    <div v-if="filterProducts.length > 0" class="xl:col-span-10 lg:col-span-9 md:col-span-8 sm:col-span-7">                
        <!-- Display Products -->
        <div class="d-flex flex-wrap justify-content-sm-between justify-content-center">
            <div id="scrollDiv" class="card mb-4 shadow-sm" v-for="product in filterProducts" :key="product.id">
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                    <div class="flex items-end justify-end h-56 w-full bg-cover" v-bind:style="{ 'background-image': product.image }">
                        <router-link :to="'/product/' + product.id" class="text-decoration-none">
                            <button class="p-2 rounded-full bg-blue-600 text-white mx-5 mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </button>
                        </router-link>
                    </div>
                    <div class="px-5 py-3">
                        <h6 class="text-gray-700 uppercase">{{product.brand}}</h6>
                        <span class="text-gray-500 mt-2">${{product.price}}</span>
                    </div>
                </div>                
            </div>
        </div>
    </div>    
</template>
<script>



export default {

    name: 'Cards',
    components: {  },
    data(){
        return{
            searchProduct: this.$store.state.searchProduct,
            filterByCategory: '',
            sortByPrice: '',
            sortByRating: '',
            sortByAlpha:'',
            sortBy: '',
            datas: 10          
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },        
    computed:{
        filterProducts(){
                console.log(this.$store.state.searchProduct + '------------' + this.searchProduct);
                return this.$store.state.products.filter(product => {
                    return product.brand.toLowerCase().includes(this.searchProduct.toLowerCase())
            }).slice(0,this.datas)
        }
    },
    beforeUpdate(){
        console.log(this.filterProducts);
    },
    updated(){        
        this.searchProduct = this.$store.state.searchProduct;
        this.$store.dispatch('filterCount', this.filterProducts);        
    },
    methods:{
        handleScroll(){
            if (((window.innerHeight + window.scrollY) - document.body.offsetHeight) > 47 && ((window.innerHeight + window.scrollY) - document.body.offsetHeight) <= 48) {                
                if(this.$store.state.initialLength - this.datas > -10){
                    console.log(this.datas);
                    this.datas = this.datas + 10;
                    this.filterProducts();
                }                
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    .card{
        width: 21rem;
        .card-img{
            height: 22.5rem;
            width: 100%;
            img{
                height: 100%;
                width: 100%;
                transform: scale(0.75);
            }
        }
    }
</style>