<template>
  <div class="anim-elements">
    <div class="anim-element"></div>
    <div class="anim-element"></div>
    <div class="anim-element"></div>
    <div class="anim-element"></div>
    <div class="anim-element"></div>
    <div class="anim-element"></div>
    <div class="anim-element"></div>
    <div class="anim-element"></div>
  </div>
</template>

<style scoped>
  .anim-elements {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .anim-elements .anim-element {
    position: absolute;
  }
  .anim-elements .anim-element:nth-child(1) {
    background: rgba(0, 201, 157, 0.6);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 12%;
    left: 15%;
    animation: animTwo 13s infinite linear;
  }
  .anim-elements .anim-element:nth-child(2) {
    border: 5px solid rgba(0, 153, 229, 0.5);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: 15%;
    left: 45%;
    animation: animOne 15s infinite linear;
  }
  .anim-elements .anim-element:nth-child(3) {
    border: 5px solid rgba(244, 34, 104, 0.5);
    width: 25px;
    height: 25px;
    bottom: 20%;
    left: 30%;
    animation: animFour 15s infinite linear alternate;
  }
  .anim-elements .anim-element:nth-child(4) {
    background: rgba(252, 162, 73, 0.8);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    bottom: 15%;
    right: 25%;
    animation: animFive 15s infinite linear alternate;
  }
  .anim-elements .anim-element:nth-child(5) {
    background: rgba(100, 45, 250, 0.7);
    width: 3px;
    height: 20px;
    top: 18%;
    right: 25%;
    animation: animFour 15s infinite linear alternate;
  }
  .anim-elements .anim-element:nth-child(6) {
    border: 5px solid rgba(244, 34, 104, 0.5);
    width: 30px;
    height: 30px;
    bottom: 20%;
    left: 30%;
    animation: animFour 10s infinite linear alternate;
  }
  .anim-elements .anim-element:nth-child(7) {
    border: 5px solid rgba(0, 153, 229, 0.5);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: 15%;
    left: 45%;
    animation: animFour 20s infinite linear;
  }
  .anim-elements .anim-element:nth-child(8) {
    background: rgba(252, 162, 73, 0.8);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    bottom: 15%;
    right: 25%;
    animation: animTwo 15s infinite linear alternate;
  }
  .anim-elements .anim-element:nth-child(5):after,
  .anim-elements .anim-element:nth-child(5):before {
    content: '';
    display: block;
    width: 100%;
    height: calc(50% - 2px);
    top: 6px;
    background: inherit;
    position: absolute;
    transform: rotate(90deg);
  }
  .anim-elements .anim-element:nth-child(5):before {
    right: -6px;
  }
  .anim-elements .anim-element:nth-child(5):after {
    left: -6px;
  }
  @keyframes animOne {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    20% {
      transform: translate(73px, -1px) rotate(35deg);
    }
    40% {
      transform: translate(141px, 72px) rotate(75deg);
    }
    60% {
      transform: translate(83px, 122px) rotate(110deg);
    }
    80% {
      transform: translate(-40px, 72px) rotate(145deg);
    }
    100% {
      transform: translate(0px, 0px) rotate(0deg);
    }
  }

  @keyframes animTwo {
    0% {
      transform: translate(0px, 0px) rotate(0deg) scale(1);
    }
    20% {
      transform: translate(73px, -1px) rotate(36deg) scale(0.9);
    }
    40% {
      transform: translate(141px, 72px) rotate(72deg) scale(1);
    }
    60% {
      transform: translate(83px, 122px) rotate(108deg) scale(1.2);
    }
    80% {
      transform: translate(-40px, 72px) rotate(144deg) scale(1.1);
    }
    100% {
      transform: translate(0px, 0px) rotate(0deg) scale(1);
    }
  }

  @keyframes animThree {
    0% {
      transform: translate(165px, -179px);
    }
    100% {
      transform: translate(-346px, 617px);
    }
  }

  @keyframes animFour {
    0% {
      transform: translate(-300px, 151px) rotate(0deg);
    }
    100% {
      transform: translate(251px, -200px) rotate(180deg);
    }
  }

  @keyframes animFive {
    0% {
      transform: translate(61px, -99px) rotate(0deg);
    }
    21% {
      transform: translate(4px, -190px) rotate(38deg);
    }
    41% {
      transform: translate(-139px, -200px) rotate(74deg);
    }
    60% {
      transform: translate(-263px, -164px) rotate(108deg);
    }
    80% {
      transform: translate(-195px, -49px) rotate(144deg);
    }
    100% {
      transform: translate(-1px, 0px) rotate(180deg);
    }
  }
</style>
