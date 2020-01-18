<template>
    <div class="container-port">
        
        <nav-bar title="Projetos" />

        <div class="projects">
            <div v-for="item in list" :key="item.id" class="card">

                <div class="card-cover">

                </div>

                <div class="card-text">
                    {{ item.description }}
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
            list: [
                {
                    id: 0,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 1,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 2,
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                }
            ]
        }
    }
}
</script>

<style>

.projects {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.card {
    /* flex: 1; */
    width: 300px;
    padding-right: 7px;
    padding-left: 7px;
}

.card-cover {
    /* width: 100%; */
    height: 210px;
    background: blue;
}

.card-text {
    padding: 10px;
    text-align: justify;
}

</style>