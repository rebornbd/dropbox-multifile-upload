<template>
  <div class="mb-2 shadow-[rgba(0,0,0,0.15)_0px_2px_8px] rounded">
    <div v-if="!isError" class="flex justify-center items-center p-1">
      <icon name="doc" class="mr-5 w-[40px] h-[40px]" />
      <div class="flex-auto flex flex-col">
        <span class="font-thin text-lg">{{ item.name }}</span>
        <span class="font-normal text-sm">{{ formatByte(item.size) }}</span>
      </div>
      <icon
        name="delete"
        :onClick="removeItem"
        class="mx-2 w-[25px] h-[25px] cursor-pointer hover:bg-red-100"
      />
    </div>

    <div
      v-else
      class="flex justify-center items-center p-1 border-l-2 border-red-400"
    >
      <icon name="doc" class="mr-5 w-[40px] h-[40px]" />
      <div class="flex-auto flex flex-col">
        <span class="font-thin text-lg">{{ item.name }}</span>
        <span class="font-normal text-sm text-red-400">{{
          maxFileSizeErrorMessage
        }}</span>
      </div>
      <icon
        name="cross"
        :onClick="removeItem"
        class="mx-2 w-[25px] h-[25px] cursor-pointer hover:bg-red-100"
      />
    </div>
  </div>
</template>

<script>
import Icon from "./icons/IconFileUpload.vue";
import { formatByte } from "../lib/helper";

export default {
  props: {
    item: Object,
    isError: Boolean,
    maxFileSize: Number,
  },
  data() {
    return {
      maxFileSizeErrorMessage: `File is too large (max: ${this.maxFileSize}MB)`,
    };
  },
  methods: {
    formatByte: formatByte,
    removeItem() {
      this.$emit("remove-item");
    },
  },
  components: {
    Icon,
  },
};
</script>
