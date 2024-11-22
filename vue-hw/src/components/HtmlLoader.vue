<template>
    <iframe :src="htmlFile" style="width: 100%; height: 100vh; border: none;"></iframe>
  </template>
  
  <script>
  export default {
    props: {
      htmlFile: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  