<template>
  <div class="spinner-screen">
    <div class="spinner-wrapper">
      <div class="dot-windmill"></div>      
    </div>
  </div>
</template>

<style scoped>
.spinner-screen {
  background: #000;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 50;    
}

.spinner-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
}

.dot-windmill {
  position: relative;
  top: -50px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #fff;
  transform-origin: 0px 64px;
  animation: dotWindmill 4s infinite linear;
}

.dot-windmill::before, .dot-windmill::after {
  content: '';
  display: inline-block;
  position: absolute;
}

.dot-windmill::before {
  left: -50px;
  top: 85px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #1565c0;
}

.dot-windmill::after {
  left: 50px;
  top: 85px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #d32f2f;
}

@keyframes dotWindmill {
  0% {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotateZ(720deg) translate3d(0, 0, 0);
  }
}

</style>