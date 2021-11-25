<template>
    <div class="container my-5">
        <div class="md:grid md:grid-cols-12 md:gap-4">
            <FiltersSort />
            <Cards />
        </div>
    </div>
</template>

<script>
import FiltersSort from './FiltersSort.vue'
import Cards from './Cards.vue'
export default {
    name: 'Products',
    data(){
        return {   
        }
    },
    components: {
        Cards,
        FiltersSort,
    },
}
</script>