<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  title?: string;
  description?: string;
}

defineProps<Props>();
</script>

<template>
  <Card class="max-w-3xl mx-auto">
    <CardHeader class="text-center">
      <CardTitle class="text-3xl">{{ title }}</CardTitle>
      <CardDescription class="mt-4">
        {{ description }}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <slot></slot>
    </CardContent>
  </Card>
</template>
