<script setup lang="ts">
import { JobTitle } from '@/types/job-item-types';
import { exampleJobTitle, IconType } from './data';
import Badge from '../Badge.vue';

const props = defineProps({
  item: {
    type: Object as PropType<JobTitle<IconType>>,
    required: true
  }
});

const exampleJobTitleRef = ref(exampleJobTitle);
</script>
<template>
  <section class="flex">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl">{{props.jobTitle}}</h2>
      <p class="text-xs text-gray-600">{{props.item.libraryName}}</p>
    </div>
    <h3 class="text-xl">{{props.projectName}}</h3>
    <div class="flex">
      <span>props.item.startDate</span> - 
      <span>props.item.endDate</span>
    </div>
  </section>
  
</template>