<template>
    <div class="my-2">
        <RouterLink :to="link" class="flex justify-between mb-1">
            <span :class="['text-sm font-medium dark:text-white truncate w-36',textColor]">{{name}}</span>
            <Transition appear @before-enter="beforeCounting" @enter="enterCounting">
                <span :class="['text-sm font-medium dark:text-white ',textColor  ]" ref="processNumber"></span>
            </Transition>
        </RouterLink>
            <div  v-if="thin=='true'" class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">

            <Transition appear @before-enter="beforeRuning" @enter="enterRuning">
                <div :class="['h-1.5 rounded-full ',bgColor]" ref="process" class="process"></div>
            </Transition>

            </div>

            <div  v-else class="w-full bg-gray-200 rounded-sm h-6 dark:bg-gray-700">

            <Transition appear @before-enter="beforeRuning" @enter="enterRuning">
                <div :class="['h-6 rounded-sm ',bgColor]" ref="process"></div>
            </Transition>

            </div>
        </div>

    <!-- Weird way to make dynamic class -->
    <!-- <div class="text-red-700 text-blue-700 text-purple-700 bg-blue-700 bg-red-700 bg-purple-700"></div> -->

</template>

<script>
import gsap from 'gsap';


export default {
    props: {
        color: {
            default: 1
        },
        name: '',
        progress: {
            default: 0,
        },   
        thin: {
            default: 'true'
        },
        link: {
            default: '/#'
        }
    }, 
    data() {
        return {
            progressRender: 0,
        }
    },
    mounted() {
        
    },
    computed: {
        textColor() {
            return 'text-'+this.getColor+'-700';
        },
        bgColor() {
            return 'bg-'+this.getColor+'-700';
        },
        getColor() {
            switch (this.color) {
                case 0:
                    return 'blue';
                    break;
                case 1:
                    return'red';
                    break;
                case 2:
                    return 'purple';
                    break;
                case 3:
                    return 'yellow';
                    break;
                default:
                    return 'blue'
                    break;
            }
        }
    },
    methods: {
        beforeRuning(el) {
            el.style.width = 0

        },
        enterRuning(el, done) {
          gsap.to(el, {
          width: this.progress + '%',
          duration: 2,
          ease: 'ease-in',
          onComplete: done,
          delay: 0.5
          }
        )
        },
        beforeCounting(el) {
            el.innerText = '0%';
        },
        enterCounting(el, done) {
            gsap.to(el, 
            { 
              innerText: this.progress+'%', 
              duration: 2,
              delay: 0.5,
              snap: {
                    innerText:2
              } 
            });
        }
    },
    watch: {
        progress() {            
            gsap.to(this.$refs.process, {
                width: this.progress + '%',
                duration: 0.5,
                ease: 'ease-in',
                 
            })

            gsap.to(this.$refs.processNumber,             
            { 
              innerText: this.progress+'%', 
              duration: 0.5,
              
              snap: {
                    innerText:2
              } 
            });
        }
    }
}
</script>