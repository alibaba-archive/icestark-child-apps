<template>
  <div class="app-wrapper">
    <div>小二后台（基于 Vue）</div>
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<style>
.main-container {
  background-color: rgb(255, 255, 255);
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
}
</style>