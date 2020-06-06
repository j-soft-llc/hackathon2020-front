<template>
  <q-page class="flex q-pa-md">
    <Chat
        :style="getChatStyle"
        v-if="visible"
        :participants="participants"
        :myself="myself"
        :messages="messages"
        :chat-title="chatTitle"
        :placeholder="placeholder"
        :colors="colors"
        :border-style="borderStyle"
        :hide-close-button="true"
        :close-button-icon-size="closeButtonIconSize"
        :submit-icon-size="submitIconSize"
        :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
        :async-mode="asyncMode"
        :scroll-bottom="scrollBottom"
        :display-header="false"
        :send-images="true"
        :profile-picture-config="profilePictureConfig"
        :timestamp-config="timestampConfig"
        @onImageClicked="onImageClicked"
        @onImageSelected="onImageSelected"
        @onMessageSubmit="onMessageSubmit"
        @onType="onType"
        @onClose="onClose"/>
  </q-page>
</template>

<script>
import { Chat } from 'vue-quick-chat';
import 'vue-quick-chat/dist/vue-quick-chat.css';

export default {
  components: {
    Chat,
  },
  data() {
    return {
      visible: true,
      participants: [
        {
          name: 'Лидер',
          id: 1,
          profilePicture: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg',
        },
        // {
        //   name: 'Пользователь',
        //   id: 2,
        //   profilePicture: 'https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg',
        // },
      ],
      myself: {
        name: 'Пользователь',
        id: 2,
        profilePicture: 'https://lh3.googleusercontent.com/-G1d4-a7d_TY/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPez_wX5UCJztzEUeCxOd7HBK7-jA.CMID/s83-c/photo.jpg',
      },
      messages: [],
      chatTitle: 'Чат с лидером',
      placeholder: 'Отправьте ваше сообщение',
      colors: {
        header: {
          bg: '#212121',
          text: '#fff',
        },
        message: {
          myself: {
            bg: '#fff',
            text: '#212121',
          },
          others: {
            bg: '#212121',
            text: '#fff',
          },
          messagesDisplay: {
            bg: '#f7f3f3',
          },
        },
        submitIcon: '#b91010',
        submitImageIcon: '#b91010',
      },
      borderStyle: {
        topLeft: '10px',
        topRight: '10px',
        bottomLeft: '10px',
        bottomRight: '10px',
      },
      hideCloseButton: false,
      submitIconSize: 25,
      closeButtonIconSize: '20px',
      asyncMode: false,
      toLoad: [
        {
          content: 'Здравствуйте чем я могу помочь?',
          myself: false,
          participantId: 1,
          timestamp: {
            year: 2011, month: 3, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123,
          },
          uploaded: true,
          viewed: true,
          type: 'text',
        },
        {
          content: 'Здравстуйте, пока что помощь не требуется.',
          myself: true,
          participantId: 3,
          timestamp: {
            year: 2010, month: 1, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123,
          },
          uploaded: true,
          viewed: true,
          type: 'text',
        },
      ],
      scrollBottom: {
        messageSent: true,
        messageReceived: false,
      },
      displayHeader: true,
      profilePictureConfig: {
        others: true,
        myself: true,
        styles: {
          width: '30px',
          height: '30px',
          borderRadius: '50%',
        },
      },
      timestampConfig: {
        format: 'HH:mm',
        relative: false,
      },
    };
  },
  computed: {
    isMobile() {
      const isMobile = window.matchMedia('only screen and (max-width: 767px)');
      return isMobile.matches;
    },
    getChatStyle() {
      const mobileStyle = 'min-height: calc(100vh - 159px); max-height: calc(100vh - 159px);overflow: auto;';
      const desktopStyle = 'min-height: calc(100vh - 86px);max-height: calc(100vh - 86px);overflow: auto;';
      console.log();
      return this.isMobile ? mobileStyle : desktopStyle;
    },
  },
  methods: {
    onType(event) {
      console.log(event);
    },
    loadMoreMessages(resolve) {
      setTimeout(() => {
        resolve(this.toLoad); // We end the loading state and add the messages
        this.messages.unshift(...this.toLoad);
        this.toLoad = [];
      }, 1000);
    },
    onMessageSubmit(message) {
      console.log(message);
      this.messages.push(message);

      /*
            * you can update message state after the server response
            */
      // timeout simulating the request
      setTimeout(() => {
        message.uploaded = true;
      }, 2000);
    },
    onClose() {
      this.visible = false;
    },
    onImageSelected(files, message) {
      const src = 'https://149364066.v2.pressablecdn.com/wp-content/uploads/2017/03/vue.jpg';
      this.messages.push(message);
      /**
             * This timeout simulates a requisition that uploads the image file to the server.
             * It's up to you implement the request and deal with the response in order to
             * update the message status and the message URL
             */
      setTimeout((res) => {
        message.uploaded = true;
        message.src = res.src;
      }, 3000, { src });
    },
    onImageClicked(message) {
      console.log('Image clicked', message.src);
    },
  },
};
</script>

<style>

</style>
