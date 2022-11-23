<template>
  <svg v-if="name === 'upload'" width="60" height="60" viewBox="0 0 32 32" fill="gray">
    <path d="M16 3.594l-.719.687-7 7L9.72 12.72 15 7.438V24h2V7.437l5.281 5.282 1.438-1.438-7-7zM7 26v2h18v-2z"></path>
  </svg>

  <svg v-else-if="name === 'doc'" width="46.08" height="46.08" viewBox="-1.6 -1.6 19.2 19.2" fill="#222F3D">
    <path d="M14 4.5V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2h5.5L14 4.5zm-3 0A1.5 1.5 0 019.5 3V1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h-2z"></path>
  </svg>

  <svg
    v-else-if="name === 'cross'"
    @click="onClick"
    width="46.08" height="46.08" viewBox="0 0 24 24" fill="none" stroke="#222F3D" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
  </svg>

  <svg
    v-else-if="name === 'delete'"
    @click="onClick"
    width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/>
  </svg>
</template>

<script>
export default {
  props: {
    name: String,
    onClick: Function,
  },
};
</script>
