<template>
    <div class="container">
        <div class="content">
            <div class="presentation-section">
                <div>
                    <h1>Hello, i'm João</h1>
                    <p>Software developer</p>
                </div>
            </div>

            <div class="links-section">
                <span><a href="https://www.linkedin.com/in/joaoaires1/" target="_blank">Linkedin</a></span>
                <span><a href="https://github.com/joaoaires1" target="_blank">GitHub</a></span>
<!--                <span @click="navigate('projects')">Projects</span>-->
<!--                <span @click="navigate('about')">About</span>-->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    methods: {
        navigate (route) {
            this.$router.push(route).catch(() => {})
        }
    }
}
</script>

<style>

</style>