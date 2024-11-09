<script setup lang="ts">
import { Badge } from '@/types/job-item-types';
const props = defineProps({
  item: {} as Badge
});
</script>
<template>
  <div>{{ props.item.name }}</div>
</template>