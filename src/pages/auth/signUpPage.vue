<script setup lang="ts">
import { ref, watch } from "vue";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { UserFormSchema } from "@/schemas";
// components
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import CustomTagsInput from "@/components/customTagsInput/CustomTagsInput.vue";
import CustomCard from "@/components/customCard/CustomCard.vue";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useAuthStore } from "@/stores/authStore";

const tags = ref<string[]>([]);

watch(tags, () => {
  console.log("watching", tags.value);
  form.setFieldValue("tags", tags.value);
});

const formSchema = toTypedSchema(UserFormSchema);

defineEmits(["delete-tag", "add-tag"]);

const form = useForm({
  validationSchema: formSchema,
});

const authStore = useAuthStore();

const onSubmit = form.handleSubmit((data) => {
  console.log("submitted the form", data);

  authStore.createUser(data);

  form.handleReset();
  tags.value = [];
  console.log(tags.value);
});
</script>

<template>
  <CustomCard
    title="Create an account"
    description="please fill in the form to create a new account"
  >
    <form @submit.prevent="onSubmit">
      <div class="grid grid-cols-2 gap-x-4 gap-y-6">
        <!-- ------------------------------------------------------------- -->
        <FormField v-slot="{ componentField }" name="firstName">
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- ------------------------------------------------------------- -->
        <FormField v-slot="{ componentField }" name="lastName">
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- ------------------------------------------------------------- -->
        <FormField v-slot="{ componentField }" name="email">
          <FormItem class="col-span-2">
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- ------------------------------------------------------------- -->
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- ------------------------------------------------------------- -->
        <FormField v-slot="{ componentField }" name="confirmPassword">
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input type="password" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- ------------------------------------------------------------- -->
        <FormField
          v-slot="{ componentField }"
          type="radio"
          name="userType"
        >
          <FormItem class="space-y-3">
            <FormLabel>What would you like to register as?</FormLabel>

            <FormControl>
              <RadioGroup
                class="flex flex-col space-y-1"
                v-bind="componentField"
              >
                <FormItem class="flex items-center space-y-0 gap-x-3">
                  <FormControl>
                    <RadioGroupItem value="student" />
                  </FormControl>
                  <FormLabel class="font-normal"> student </FormLabel>
                </FormItem>
                <FormItem class="flex items-center space-y-0 gap-x-3">
                  <FormControl>
                    <RadioGroupItem value="coach" />
                  </FormControl>
                  <FormLabel class="font-normal"> coach </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <!-- ------------------------------------------------------------- -->
        <CustomTagsInput v-model="tags" />
        <!-- ------------------------------------------------------------- -->
        <div class="mt-4 text-center col-span-2">
          <Button size="lg" class="w-full"> Sign up </Button>
        </div>
      </div>
    </form>
  </CustomCard>
</template>
