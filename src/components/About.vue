<template>
    <div>
        <nav-bar title="Sobre" />

        <div class="about-text">
            <p>Olá, meu nome é João Aires, sou formado em análise e desnvolvimento de sistemas (Uninter) e trabalho como desenvolvedor web e mobile. Tenho experiência com php, framework laravel, bancos de dados redis e mysql para manutenção, desenvolvimento e consumo de api's REST, html, css, javascript, bibliotecas Vue,Vuex para desenvolvimento e manutenção de painéis administrativos. No desenvolvimento mobile trabalho com React, React Native e Redux.</p>
        </div>
        <div class="about-tech">
            <p>Backend: PHP, framework Laravel.</p>
            <p>Bancos de dados: Redis, MySql.</p>
            <p>Frontend: Html, Css, JavaScript, bibliotecas Vue, Vuex, React, React Native e Redux.</p>
            <p>Versionamento de software: Git, GitHub, GitLab.</p>
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

</style>