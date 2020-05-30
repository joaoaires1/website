<template>
    <div class="container-port">
        
        <nav-bar title="Projetos" />

        <div class="projects">
            <div class="card">

                <div class="card-cover bg-green">
                    <img class="cover-img" src="../assets/twitter_brand.png" alt="Twitter logo">
                </div>

                <div class="card-text">
                    SPA Twitter type application desenvolvida usando vuejs, vuex e vue-router. <a target="_blank" href="https://ttclone.netlify.app/">link da applicação</a>
                </div>

            </div>

            <div class="card">

                <div class="card-cover bg-laravel">
                    <img class="cover-img" src="../assets/twitter_brand.png" alt="Twitter logo">
                </div>

                <div class="card-text">
                    API Twitter type application desenvolvida usando PHP com framework Laravel.<a target="_blank" href="https://github.com/joaoaires1/ttclone_api">link no github</a>
                </div>

            </div>

            <div class="card">

                <div class="card-cover bg-react">
                    <img class="cover-img" src="../assets/supermarket.png" alt="Twitter logo">
                </div>

                <div class="card-text">
                    Implementação de um carrinho de compras utilizando react hooks e redux.<a target="_blank" href="https://shopcarthooks.netlify.app/">link da applicação</a>
                </div>

            </div>

            <div class="card">

                <div class="card-cover bg-react">
                    <img class="cover-img" src="../assets/twitter_brand.png" alt="Twitter logo">
                </div>

                <div class="card-text">
                    Mobile app Twitter type application desenvolvida utilizando react native.<a target="_blank" href="https://github.com/joaoaires1/ttclone_app">link no github</a>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import Nav from './Nav'

export default {
    components: {
        'nav-bar': Nav
    },
    data () {
        return {

        }
    }
}
</script>

<style>

@media only screen and (max-width: 900px) {
  .projects {
    justify-content: center;
  }
}

.projects {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
}

.card {
    /* flex: 1; */
    width: 300px;
    padding-right: 7px;
    padding-left: 7px;
}

.card-cover {
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 210px;
}

.bg-green {
    background: green;
}

.bg-laravel {
    background: #ff2d20;
}
.bg-react {
    background: #61DBFB;
}

.card-text {
    padding: 10px;
    text-align: justify;
}

.cover-img {
    width: 120px;
    height: 120px;
}

</style>