<template>
    <div class="body-index">
        <main class="main-index">
            <h1>Lizardd</h1>
            <div id="main_count">
                <p><p class="js-object-components"></p> &nbsp;</p>
                <p><i class="fa-solid fa-gallery-thumbnails"></i> <p class="js-object-log"></p> </p>
            </div>
            <p>{{$t('index.openSource')}} <span>{{$t('index.repository')}}</span> {{$t('index.community')}} <span> {{$t('index.components')}}</span> <br>
                {{$t('index.and')}} <span>{{$t('index.views')}}</span></p>
            <div id="main_buttons">
                <button class="button-normal"><router-link :to="{name:'home'}" >{{$t('index.viewComponents')}}</router-link></button>
                <!-- <button class="button-line">Follow us on Twitter</button> -->
            </div>
        </main>
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
    data() {
        return {
            users:10,
            components:40
        }
    },
    mounted() {
        this.aa()
        this.bb()
    },
    methods: {
        aa(){
            var objPropLogEl = document.querySelector('.js-object-log');
            console.log(objPropLogEl)
            var myObject = {
                "Users": 0,
            }

            anime({
                targets: myObject,
                Users: this.users,
                easing: 'linear',
                round: 1,
                update: function() {
                    objPropLogEl.innerHTML = JSON.stringify(myObject);
                }
            });
        },
        bb(){
            var objPropLogEl = document.querySelector('.js-object-components');
            console.log(objPropLogEl)
            var myObject = {
                "Components": 0,
            }

            anime({
                targets: myObject,
                Components: this.components,
                easing: 'linear',
                round: 1,
                update: function() {
                    objPropLogEl.innerHTML = JSON.stringify(myObject);
                }
            });
        }
    },
}
</script>