<template>
  <div
    class="notification-container"
    :class="{ 'not-read': !notification.read }"
  >
    <div
      class="notification-main-row"
      :class="{
        'notification-main-image-row': notification.type === 'commented',
      }"
    >
      <div>
        <img
          :src="require('@/assets/images/' + notification.imgName)"
          alt="profile image"
          class="profile-image"
        />
      </div>
      <div>
        <div class="notification-sub-row">
          <span class="notification-name"> {{ notification.name }}</span>
          <span v-if="notification.type === 'reacted'">
            &nbsp;reacted to your recent post
            <span class="notification-post">{{ notification.reactedTo }}</span>
          </span>
          <span v-else-if="notification.type === 'followed'">
            &nbsp;followed you
          </span>
          <span v-else-if="notification.type === 'joined'">
            &nbsp;has joined your group
            <span class="group-name">{{ notification.groupName }}</span>
          </span>
          <span v-else-if="notification.type === 'left'">
            &nbsp;left the group
            <span class="group-name"> {{ notification.groupName }}</span>
          </span>
          <span v-else-if="notification.type === 'messaged'">
            &nbsp;sent you a private message
          </span>
          <span v-else-if="notification.type === 'commented'" class="">
            &nbsp;commented on your picture
          </span>
          <span class="red-dot" v-if="!notification.read"></span>
        </div>

        <div class="notification-timestamp">
          {{ notification.timestampNumber }}
          <span v-if="notification.timestampUnit !== 'm'">&nbsp;</span>
          {{ notification.timestampUnit }} ago
        </div>
      </div>
      <div v-if="notification.type === 'commented'" class="right-align-image">
        <img
          :src="require('@/assets/images/' + notification.commentPicture)"
          alt="notification comment picture"
          class="profile-image"
        />
      </div>

      <div v-if="notification.type === 'messaged'" class="notification-message">
        {{ notification.messageText }}
      </div>
    </div>
  </div>
</template>

<script setup>
//import { defineProps } from "vue";
//eslint-disable-next-line
defineProps({
  notification: Object,
  default: () => {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notification-container {
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 10px;
}
.notification-main-row {
  display: grid;
  grid-template-columns: 1fr 5fr;
}
.notification-main-image-row {
  grid-template-columns: 1fr 4fr 1fr;
}
.not-read {
  background-color: var(--very-light-grayish-blue);
}
.notification-sub-row {
  text-align: left;
}
.profile-image {
  width: 75%;
  padding: 0.1rem;
}
.right-align-image {
  text-align: right;
  cursor: pointer;
}
.notification-name {
  font-weight: bold;
  color: var(--very-dark-blue);
  cursor: pointer;
}
.notification-name:hover,
.notification-post:hover {
  color: var(--blue);
}
.notification-post {
  font-weight: bold;
  cursor: pointer;
}
.group-name {
  font-weight: bold;
  cursor: pointer;
  color: var(--blue);
}
.notification-timestamp {
  color: var(--grayish-blue);
  text-align: left;
}
.notification-message {
  grid-column-start: 2;
  text-align: left;
  border: 1px solid var(--light-grayish-blue-2);
  border-radius: 5px;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
}
.notification-message:hover {
  background-color: var(--light-grayish-blue-2);
}
.red-dot {
  background-color: var(--red);
  border-radius: 50%;
  height: 0.5rem;
  width: 0.5rem;
  display: inline-block;
  margin-left: 0.4rem;
}

@media screen and (min-width: 400px) {
  .profile-image {
    width: 50%;
  }
}
</style>
