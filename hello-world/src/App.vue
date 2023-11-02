<script setup>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import BoardList from "@/components/board/BoardList.vue";

</script>


<!--    <Header />-->
<template>
  <v-app>
    <Header />
    <v-main>
      <BoardList />

    </v-main>
  </v-app>
<!--  <v-app>-->
<!--
    <v-layout class="rounded rounded-md">
      <v-app-bar title="Application bar"></v-app-bar>

      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="d-flex align-center justify-center">
        Main Content
      </v-main>
    </v-layout>
-->
<!--
    <v-main class="d-flex align-center justify-center" style="min-width: 300px;">
      Main Content
&lt;!&ndash;    <BoardList />&ndash;&gt;
    </v-main>
    <Footer />
-->

<!--  </v-app>-->

</template>