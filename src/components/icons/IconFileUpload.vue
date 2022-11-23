<template>
  <svg v-if="name === 'upload'" aria-hidden="true" width="60" height="60" viewBox="0 0 32 32" fill="gray">
    <path d="M16 3.594l-.719.687-7 7L9.72 12.72 15 7.438V24h2V7.437l5.281 5.282 1.438-1.438-7-7zM7 26v2h18v-2z"></path>
  </svg>
</template>

<script>
  export default {
    props: ["name"]
  }
</script>
