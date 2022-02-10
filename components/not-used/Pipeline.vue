<template>
</template>

<script>
import Vue from 'vue'
import VuePipeline from 'vue-pipeline-scalable'

let data = [
  {
    name: "Start",
    hint: "1m23s",
    status: "start",
    next: [{ index: 1, weight: 2 }]
  },
  {
    name: "Ammouncement Import",
    hint: "1m23s",
    status: "success",
    next: [
      { index: 2, weight: 0 },
      { index: 4, weight: 2 }
    ]
  },
  {
    name: "Employee ID to Onboarding",
    hint: "2m23s",
    status: "failure",
    next: [{ index: 3, weight: 0 }]
  },
  {
    name: "Personal Basic Info",
    hint: "2m23s",
    status: "paused",
    next: [{ index: 4, weight: 0 }]
  },
  { name: "End ", hint: "2m23s", status: "end", next: [] }
];

export default {
  name: 'Pipeline',
  props: {
    data: data
  }
}
</script>