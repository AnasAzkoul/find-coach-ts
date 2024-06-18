<script setup lang="ts">
import { ref, defineEmits, watch } from "vue";
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

const modelValue = ref<string[]>([]);

const emit = defineEmits(["tags-change"]);

watch(modelValue, () => {
  emit("tags-change", modelValue.value);
});

function addTag(event: Event) {
  const input = event.target as HTMLInputElement;
  const newTag = input.value.trim().toLowerCase();
  if (newTag && !modelValue.value.includes(newTag)) {
    modelValue.value.push(newTag);
    input.value = "";
  }
  emit("tags-change", modelValue.value);
}

function handleDeleteTag(item: string) {
  modelValue.value = modelValue.value.filter((tag) => tag !== item);
  console.log(modelValue.value);
}
</script>

<template>
  <FormField v-slot="{ componentField }" name="tags">
    <FormItem>
      <FormLabel> Areas of expertise / technologies to learn </FormLabel>
      <FormControl>
        <TagsInput v-model="modelValue">
          <TagsInputItem
            v-for="item in modelValue"
            :key="item"
            :value="item"
          >
            <TagsInputItemText />
            <TagsInputItemDelete @delete-tag="handleDeleteTag(item)" />
          </TagsInputItem>

          <TagsInputInput
            placeholder="technologies..."
            @keydown.enter.prevent="addTag"
          />
        </TagsInput>
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
