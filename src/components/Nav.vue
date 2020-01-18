<template>
    <div class="title-box">
        <div class="title">
            <p>{{ title }}</p>
        </div>
        <span @click="navigate"> <img width="30" src="../assets/back.svg" alt=""> </span>
    </div>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        navigate () {
            this.$router.push('home').catch(() => {})
        }
    }
}
</script>

<style>

.title-box {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 15px;
}

.title {
    text-align: center;
    font-size: 42px;
    font-weight: 400;
}


.title-box span {
    position: absolute;
    top: 25px;
    cursor: pointer;
}

</style>