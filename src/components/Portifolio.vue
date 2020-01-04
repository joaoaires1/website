<template>
    <div class="container-port">
        <div class="fadeInUp animated">
            <div class="title">
                <h1>Projetos</h1>
            </div>

            <div class="projects">
                <div class="card">

                    <div class="card-cover">

                    </div>

                    <div class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>

                </div>
                <div class="card">

                    <div class="card-cover">

                    </div>

                    <div class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>

                </div>
                <div class="card">

                    <div class="card-cover">

                    </div>

                    <div class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {

    }
}
</script>

<style>

.title {
    text-align: center;
    padding: 15px;
}

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