<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { Form, useForm } from "vee-validate";
import { UserFormSchema } from "@/schemas";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = toTypedSchema(UserFormSchema);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <Card class="max-w-3xl mx-auto">
    <CardHeader class="text-center">
      <CardTitle class="text-3xl">Create An Account</CardTitle>
      <CardDescription class="mt-4">
        Fill in the form to create a new account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="onSubmit">
        <FormField v-slot="{ componentField }" name="firstName">
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="lastName">
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="confirmPassword">
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input type="password" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="confirmPassword">
          <FormItem>
            <FormLabel>
              Would you like to register as a student or a coach
            </FormLabel>
            <FormControl>
              <RadioGroup v-bind="componentField" default-value="student">
                <div class="flex items-center space-x-2">
                  <RadioGroupItem id="r1" value="student" />
                  <Label for="r1">Student</Label>
                </div>
                <div class="flex items-center space-x-2">
                  <RadioGroupItem id="r2" value="coach" />
                  <Label for="r2">Coach</Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </form>
      <div class="mt-4">
        <Button type="submit">Sign up</Button>
      </div>
    </CardContent>
  </Card>
</template>
