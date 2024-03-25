<template>
    <button class="button-57 rounded-xl text-lg p-2" role="button"><span class="text">Cook Now!</span><span class="text-xl">Go to Recipe→ </span></button>
</template>

<style scoped>
/* CSS */
.button-57 {
    position: relative;
    overflow: hidden;

    color: white;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    background: orange;
    border: 3px solid orange;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .button-57 span:first-child {
    position: relative;
    transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 10;
    font-weight: 700;
  }
  
  .button-57 span:last-child {
    color: orange;
    display: block;
    position: absolute;
    bottom: 0;
    transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 100;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translateY(225%) translateX(-50%);
    height: 20px;
    line-height: 20px;
  }
  
  .button-57:after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform-origin: bottom center;
    transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
    transform: skewY(9.3deg) scaleY(0);
    z-index: 50;
  }
  
  .button-57:hover:after {
    transform-origin: bottom center;
    transform: skewY(9.3deg) scaleY(2);
  }
  
  .button-57:hover span:last-child {
    transform: translateX(-50%) translateY(-100%);
    opacity: 1;
    transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
    font-weight: 700;
  }
</style>

