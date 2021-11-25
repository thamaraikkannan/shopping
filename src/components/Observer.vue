<template>
    <div class="observer"></div>
</template>

<script>
export default {
    name:'Observer',
    data(){
        return {
            observer: null
        }
    },
    mounted(){
        this.observer = new IntersectionObserver(([entry]) => {
            if(entry && entry.isIntersecting){
                this.$emit('intersect');
            }
            if(entry[0].IntersectionRatio <= 0) return;
            console.log(this.observer)
        });
        this.observer.observe(this.$el)
    }
}
</script>