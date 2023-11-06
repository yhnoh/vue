<script setup>

</script>

<!--
  https://v3.router.vuejs.org/kr/

  RouterLink 컴포넌트는 라우터에 지정했던 링크로 이동할 수 있도록 지원하는 컴포넌트이다.
  a태그를 대신하여 사용할 수 있으며 실제로 a태그로 랜더링하게 된다.

  Vue에서는 컴퍼넌트의 dash 케이스와 pascal 케이스의 컴포넌트를 사용한것을 지원한다.
  컴포넌트와 일반 태그를 구분 짓기 위해서 컴포넌트는 pascal 케이스를 사용하는 것을 권장한다.
-->

<template>
  <header>
    <div class="nav nav-pills">
      <div
          v-for="nav in navigations"
          :key="nav.name"
          class="nav-item">
        <RouterLink
            class="nav-link"
            :to="nav.href"
            active-class="active">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>