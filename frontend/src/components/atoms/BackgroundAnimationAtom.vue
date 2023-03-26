<template>
  <div>
    <!-- credits for the animation go to: https://codepen.io/alvarotrigo/pen/GRvYNax -->
    <ul class="animation">
      <li v-for="index in 10" :key="index"></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$baseSize: 20px;

.animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  z-index: -1;
}

ul {
  margin: 0;
}

li {
  position: absolute;
  display: block;
  list-style: none;
  width: $baseSize;
  height: $baseSize;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -180px;

  &:nth-child(1) {
    left: 25%;
    width: $baseSize * 4;
    height: $baseSize * 4;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    left: 10%;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  &:nth-child(3) {
    left: 70%;
    animation-delay: 4s;
  }

  &:nth-child(4) {
    left: 40%;
    width: $baseSize * 3;
    height: $baseSize * 3;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  &:nth-child(5) {
    left: 65%;
    animation-delay: 0s;
  }

  &:nth-child(6) {
    left: 75%;
    width: $baseSize * 6;
    height: $baseSize * 6;
    animation-delay: 3s;
  }

  &:nth-child(7) {
    left: 35%;
    width: $baseSize * 8;
    height: $baseSize * 8;
    animation-delay: 7s;
  }

  &:nth-child(8) {
    left: 50%;
    width: $baseSize * 1.25;
    height: $baseSize * 1.25;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  &:nth-child(9) {
    left: 20%;
    width: $baseSize * 0.75;
    height: $baseSize * 0.75;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  &:nth-child(10) {
    left: 85%;
    width: $baseSize * 8;
    height: $baseSize * 8;
    animation-delay: 0s;
    animation-duration: 11s;
  }
}

@keyframes animate {
  0% {
    transform: translateY(-1500px) rotate(720deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
