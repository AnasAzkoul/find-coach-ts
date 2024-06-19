<script setup lang="ts">
import { ref } from "vue";
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const model = defineModel<string[]>();

defineEmits(["delete-tag"]);

function handleAddTag(event: Event) {
  const input = event.target as HTMLInputElement;
  const newTag = input.value.trim().toLowerCase();
  if (newTag && !model.value?.includes(newTag)) {
    model.value = [...(model.value as string[]), newTag];
    input.value = "";
  }
}

function handleDeleteTag(item: string) {
  model.value = model.value?.filter((tag) => tag !== item);
  console.log(model.value);
}
</script>

<template>
  <FormField v-slot="{ componentField }" name="tags">
    <FormItem>
      <FormLabel> Areas of expertise / technologies to learn </FormLabel>
      <FormControl>
        <TagsInput v-model="model">
          <TagsInputItem v-for="item in model" :key="item" :value="item">
            <TagsInputItemText />
            <TagsInputItemDelete @delete-tag="handleDeleteTag(item)" />
          </TagsInputItem>

          <TagsInputInput
            placeholder="technologies..."
            @keydown.enter.prevent="handleAddTag"
          />
        </TagsInput>
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
