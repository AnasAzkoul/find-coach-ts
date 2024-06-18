<script setup lang="ts">
import { ref } from "vue";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { UserFormSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import CustomerTagsInput from "@/components/customTagsInput/CustomTagsInput.vue";
import CustomCard from "@/components/customCard/CustomCard.vue";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = toTypedSchema(UserFormSchema);

defineEmits(["delete-tag"]);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((data) => {
  console.log("submitted the form", data);

  form.handleReset();
});

function handleTagsChange(tags: string[]) {
  console.log("listening to event.....", tags);
  form.setFieldValue("tags", tags);
}
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
        <CustomerTagsInput @tags-change="handleTagsChange" />
        <!-- ------------------------------------------------------------- -->
        <div class="mt-4 text-center col-span-2">
          <Button size="lg" class="w-full"> Sign up </Button>
        </div>
      </div>
    </form>
  </CustomCard>
</template>
