<template>
  <div class="home">
    <NotificationItem />
  </div>
</template>

<script>
// @ is an alias to /src
import NotificationItem from "@/components/NotificationItem.vue";

export default {
  name: "HomeView",
  components: {
    NotificationItem,
  },
};
</script>
