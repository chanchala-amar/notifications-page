import { createStore } from "vuex";
import userNotifications from "../assets/data.json";
export default createStore({
  state() {
    return {
      notifications: [],
    };
  },
  getters: {
    getNotifications(state) {
      return state.notifications;
    },
    getUnreadCount(state) {
      return state.notifications.reduce(
        (count, notification) => (notification.read ? count : ++count),
        0
      );
    },
  },
  mutations: {
    loadData(state) {
      state.notifications = userNotifications.notifications;
      //console.log(userNotifications);
    },
    markAllRead(state) {
      state.notifications.forEach((notification) => (notification.read = true));
    },
  },
  actions: {
    loadData(contex) {
      contex.commit("loadData");
    },
    markAllRead(contex) {
      contex.commit("markAllRead");
    },
  },
  modules: {},
});
