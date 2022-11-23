<template>
  <div v-if="len > 0">
    <div v-for="(item, index) in items" :key="index">
      <ShowItem
        :item="item"
        :isError="item.maxSizeError"
        :maxFileSize="maxFileSize"
        @remove-item="removeItem(index)"
      />
    </div>
  </div>

  <div
    v-else
    class="p-10 flex justify-center items-center shadow-[rgba(0,0,0,0.15)_0px_2px_8px] rounded"
  >
    <span class="font-bold text-lg text-gray-300">No data to display</span>
  </div>
</template>

<script>
import ShowItem from "./ShowItem.vue";

export default {
  props: {
    items: Array,
    len: Number,
    maxFileSize: Number,
    removeItem: Function,
  },
  components: {
    ShowItem,
  },
};
</script>
