<script setup lang="ts">

const props = defineProps({
    prop3: Object,
});
console.log(props.prop3);
</script>

<template>
    <div>
        <div class="atras" :class="prop3?.genero">

            <div class="info">
                <p>
                    Nombre: <span>{{ prop3?.nombre }}</span>
                </p>

                <p>
                    Apellido: <span>{{ prop3?.apellido }}</span>
                </p>

                <p>
                    Edad: <span>{{ prop3?.edad }}</span>
                </p>

                <p>
                    Genero: <span>{{ prop3?.genero }}</span>
                </p>

                <p>
                    equipo: <span>{{ prop3?.equipo }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
