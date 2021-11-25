<template>
    <div class="xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-5">
        <h2>Filters</h2>  
        <!-- Sort By all methods -->
        <select class="form-select py-2 shadow-sm mb-4" v-model="sortBy" @change="sortProducts($store.state.products)">
            <option value="" disabled>Sort By</option>
            <option value="lowToHigh">Price Low to High</option>
            <option value="highToLow">Price High to Low</option>
            <option value="lowRatings">Low Ratings</option>
            <option value="highRatings">High Ratings</option>
            <option value="atoz">A->Z</option>
            <option value="ztoa">Z->A</option>
        </select>
        <div class="mt-2">
            <h4>Showing {{ $store.state.filteredCount.length }} of {{$store.state.initialLength}}</h4>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FiltersSort',
    data(){
        return{
        }
    },
    methods: {
        sortProducts(products){
            if(this.sortBy == 'lowToHigh'){
                return products.sort((a, b) => a.price - b.price)
            }
            if(this.sortBy == 'highToLow'){
                return products.sort((a, b) => b.price - a.price)
            }
            if(this.sortBy == 'lowRatings'){
                return products.sort((a, b) => a.rating.rate - b.rating.rate)
            }
            if(this.sortBy == 'highRatings'){
                return products.sort((a, b) => b.rating.rate - a.rating.rate)
            }
            if(this.sortBy == 'atoz'){
                return products.sort(function sortArray(a,b){
                    if(a.brand < b.brand){
                        return -1
                    }
                    if(a.brand > b.brand){
                        return 1
                    }
                    return 0;
                })
            }
            if(this.sortBy == 'ztoa'){
                return products.sort(function sortArray(a,b){
                    if(a.brand < b.brand){
                        return 1
                    }
                    if(a.brand > b.brand){
                        return -1
                    }
                    return 0;
                })
            }     
        }
    }
}
</script>