<template>
  <div class="home">
    <div class="title-bar">
      <div>
        <h1 class="notification-heading">Notifications</h1>
        <span class="number-box"> {{ unreadCount }} </span>
      </div>
      <div class="mark-as-read" @click="markAsRead()">Mark all as read</div>
    </div>
    <div class="notifications-list">
      <div v-for="notification in notifications" v-bind:key="notification.id">
        <NotificationItem v-bind:notification="notification" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: 1rem;
}
.title-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}
.notification-heading {
  font-weight: bold;
  font-size: 22px;
  display: inline-block;
  margin-right: 0.8rem;
  color: var(--very-dark-blue);
}
.number-box {
  background-color: var(--very-dark-blue);
  color: var(--white);
  padding: 0.1rem 0.5rem;
  font-weight: bold;
  border-radius: 5px;
}
.mark-as-read {
  display: flex;
  cursor: pointer;
  align-items: center;
}
</style>
<script setup>
import NotificationItem from "@/components/NotificationItem.vue";
import { computed } from "vue";
import { useStore } from "vuex";
//eslint-disable-next-line
//defineProps({ notifications: Object, defalut: [] });
const store = useStore();

function loadAllNotifications() {
  store.dispatch("loadData");
}
loadAllNotifications();
const notifications = store.getters.getNotifications;

const unreadCount = computed(() => {
  return store.getters.getUnreadCount;
});
const markAsRead = function () {
  store.dispatch("markAllRead");
};
</script>
