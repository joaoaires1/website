<template>
    <div class="container">
        <div class="jackInTheBox animated content">

            <div class="text">
                <div>
                    <p>Olá! Eu sou João Aires,</p>
                </div>
                <div>
                    <h1>Desenvolvedor</h1>
                </div>
                <div>
                    <h1><span class="tech">Web</span> e <span class="tech">Mobile</span>.</h1>
                </div>
                <div class="nav">
                    <p><span class="link" @click="navigate('projects')">Projetos</span> - <span class="link" @click="navigate('about')">Sobre</span> - <span class="link"><a href="https://github.com/joaoaires1" target="_blank">GitHub</a></span> - <span class="link"><a href="https://www.linkedin.com/in/joaoaires1/" target="_blank" >Linkedin</a></span></p>
                </div>
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