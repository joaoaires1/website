<template>
    <div>
        <nav-bar title="Sobre" />

        <div class="about-text">
            <p>Olá, meu nome é João Aires, sou desenvolvedor web e tenho tecnólogo em análise e desenvolvimento de sistemas (Uninter). Minhas principais experiências proficionais são com php, framework laravel e javascript com as bibliotecas vue, react e react native.</p>
        </div>
        <div class="about-tech">
            <h2>Habilidades:</h2>
            <br />
            <p>Backend: <span class="php">PHP</span>, <span class="laravel">Laravel</span> framework.</p>
            <p>Bancos de dados: <span class="redis">Redis</span>, <span class="mysql">MySql</span>.</p>
            <p>Frontend: <span class="html">Html</span>, <span class="css">Css</span>, <span class="js">JavaScript</span>, bibliotecas <span class="vue">Vue</span>, <span class="vue">Vuex</span>, <span class="react">React</span>, <span class="react">React Native</span> e <span class="redux">Redux</span>.</p>
            <p>Versionamento de software: <span class="git">Git</span>.</p>
        </div>  
    </div>
</template>

<script>
import Nav from './Nav'

export default {
    components: {
        'nav-bar': Nav
    }
}
</script>

<style>

.about-text {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 15px;
    text-align: center;
}

.about-tech {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 15px;
}

.php {
    font-weight: bold;
    color: mediumslateblue;
}
.laravel {
    font-weight: bold;
    color: #ff2d20;
}
.redis {
    font-weight: bold;
    color: #a32422;;
}
.mysql {
    font-weight: bold;
    color: blue;
}
.js {
    font-weight: bold;
    color: #FFCD3A;;
}
.vue {
    font-weight: bold;
    color: #42b983;
}
.react {
    font-weight: bold;
    color: #61dafb;
}
.redux {
    font-weight: bold;
    color: rgb(118, 74, 188);
}
.git {
    font-weight: bold;
    color: #f14e32;
}
.html {
    font-weight: bold;
    color: chocolate;
}
.css {
    font-weight: bold;
    color: fuchsia;
}

</style>