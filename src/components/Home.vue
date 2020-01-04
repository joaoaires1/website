<template>
    <div class="container-home">
        <div class="jackInTheBox animated">
            <h1>Olá,</h1>
            <h2>meu nome é João,</h2>
            <h2>desenvolvedor <span>Web</span> e <span>Mobile</span>.</h2>
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

.container-home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

span {
    color: #772ce8;
}

h1 {
    font-size: 56px;
}

h2 {
    font-size: 42px;
}

@media only screen and (max-width: 700px) {

h1 {
    font-size: 42px;
}

h2 {
    font-size: 28px;
}

}
</style>