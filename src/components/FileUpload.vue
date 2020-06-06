<template>
  <div class="file-upload">
      <VueFileAgent
        ref="vueFileAgent"
        :theme="'list'"
        :multiple="true"
        :deletable="true"
        :meta="true"
        :accept="'image/*'"
        :maxSize="'10MB'"
        :maxFiles="14"
        :helpText="'Загрузите документы'"
        :errorText="{
          type: 'Неверный формат файла',
          size: 'Файл не должен превышать размера в 10МБ',
        }"
        @select="filesSelected($event)"
        @beforedelete="onBeforeDelete($event)"
        @delete="fileDeleted($event)"
        v-model="fileRecords"
    ></VueFileAgent>
    <!-- <button :disabled="!fileRecordsForUpload.length" @click="uploadFiles()">
      Загрузить {{ fileRecordsForUpload.length }} files
    </button> -->
  </div>
</template>

<script>
// import 'vue-file-agent/dist/vue-file-agent.css';

export default {
  data() {
    return {
      fileRecords: [],
      uploadUrl: 'https://www.mocky.io/v2/5d4fb20b3000005c111099e3',
      uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
      fileRecordsForUpload: [],
    };
  },
  methods: {
    uploadFiles() {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.upload(this.uploadUrl, this.uploadHeaders, this.fileRecordsForUpload);
      this.fileRecordsForUpload = [];
    },
    deleteUploadedFile(fileRecord) {
      // Using the default uploader. You may use another uploader instead.
      this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord);
    },
    filesSelected(fileRecordsNewlySelected) {
      const validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
    },
    onBeforeDelete(fileRecord) {
      const i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
        this.$refs.vueFileAgent.deleteFileRecord(fileRecord); // will trigger 'delete' event
      }
    },
    fileDeleted(fileRecord) {
      const i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        this.deleteUploadedFile(fileRecord);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~vue-file-agent/dist/vue-file-agent.css";
</style>
