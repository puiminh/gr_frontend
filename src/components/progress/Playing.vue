<template>
<div :class="['boxContainer ', active]">
  <div :class="['box box1 ',bgColor]"></div>
  <div :class="['box box2 ',bgColor]"></div>
  <div :class="['box box3 ',bgColor]"></div>
  <div :class="['box box4 ',bgColor]"></div>
  <div :class="['box box5 ',bgColor]"></div>
  <div hidden class="bg-red-500 bg-green-500 bg-blue-500 bg-gray-500"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        active: {
            default: 'none'
        },
        bgColor: {
            default: 'bg-gray-500'
        }
    }
}

</script>

<style scoped>
@keyframes quiet {
	 25% {
		 transform: scaleY(0.6);
	}
	 50% {
		 transform: scaleY(0.4);
	}
	 75% {
		 transform: scaleY(0.8);
	}
}
 @keyframes normal {
	 25% {
		 transform: scaleY(1);
	}
	 50% {
		 transform: scaleY(0.4);
	}
	 75% {
		 transform: scaleY(0.6);
	}
}
 @keyframes loud {
	 25% {
		 transform: scaleY(1);
	}
	 50% {
		 transform: scaleY(0.4);
	}
	 75% {
		 transform: scaleY(1.2);
	}
}

 .boxContainer {
	 display: flex;
	 justify-content: space-between;
	 height: 32px;
	 --boxSize: 8px;
	 --gutter: 4px;
	 width: calc((var(--boxSize) + var(--gutter)) * 5);
}
 .box {
	 transform: scaleY(0.4);
	 height: 100%;
	 width: var(--boxSize);
	 animation-duration: 1.2s;
	 animation-timing-function: ease-in-out;
	 animation-iteration-count: infinite;
	 border-radius: 8px;
}
 .active .box1 {
	 animation-name: quiet;
}
 .active .box2 {
	 animation-name: normal;
}
 .active .box3 {
	 animation-name: quiet;
}
 .active .box4 {
	 animation-name: loud;
}
 .active .box5 {
	 animation-name: quiet;
}
 
</style>