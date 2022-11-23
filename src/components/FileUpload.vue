<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col">
      <span class="mb-1 font-bold text-lg uppercase">Upload File</span>
      <div
        class="flex flex-col justify-center items-center w-full h-[80px] relative cursor-pointer bg-gray-100 border-dashed border-2 border-gray-600 rounded"
      >
        <div class="flex justify-center items-center gap-1">
          <icon name="upload" class="w-[20px] h-[20px] text-white inline" />
          <span class="font-extralight text-lg">Drop items here</span>
          <span class="font-normal text-sm">OR</span>
          <span class="font-medium text-sm">Browse files</span>
        </div>
        <input
          type="file"
          multiple
          @change="onchangeHandler($event.target, $event.target.files)"
          class="w-full h-full opacity-0 absolute cursor-pointer"
        />
      </div>
      <span class="font-light text-sm mt-1"
        >Up to {{ `${maxFileSize}MB` }} • File name without special
        characters</span
      >
    </div>

    <ListDisplay
      :items="listOfFiles"
      :len="listOfFiles.length"
      :maxFileSize="maxFileSize"
      :removeItem="removeItem"
    />
  </div>
</template>

<script>
import Icon from "./icons/IconFileUpload.vue";
import ListDisplay from "./ListDisplay.vue";
import { isGreaterThanMaxLimitMB } from "../lib/helper";

export default {
  data() {
    return {
      maxFileSize: 5,
      listOfFiles: [],
    };
  },
  methods: {
    onchangeHandler(target, files) {
      const filesLength = files.length;
      for (let i = 0; i < filesLength; i++) {
        const data = {};
        data.name = files[i]?.name;
        data.size = files[i]?.size;
        data.type = files[i]?.type;
        data.maxSizeError = isGreaterThanMaxLimitMB(files[i]?.size);
        this.listOfFiles.push(data);
        console.log(data);
      }
      target.value = null;
    },
    removeItem(index) {
      this.listOfFiles.splice(index, 1);
    },
    isGreaterThanMaxLimitMB: isGreaterThanMaxLimitMB,
  },
  components: {
    Icon,
    ListDisplay,
  },
};
</script>
