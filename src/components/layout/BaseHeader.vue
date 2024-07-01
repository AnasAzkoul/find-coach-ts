<script setup lang="ts">
import { RouterLink } from "vue-router";
import Button from "../ui/button/Button.vue";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
</script>

<template>
  <NavigationMenu class="max-w-full">
    <NavigationMenuList
      class="py-5 w-[85rem] flex justify-between gap-10 text-lg"
    >
      <NavigationMenuItem class="mr-auto">
        <RouterLink :to="{ name: 'home' }">
          {{ "< FindCoach />" }}
        </RouterLink>
      </NavigationMenuItem>

      <NavigationMenuItem class="">
        <RouterLink :to="{ name: 'home' }"> Coaches </RouterLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Button>
          <RouterLink :to="{ name: 'signup' }" class="text-lg">
            Sign up
          </RouterLink>
        </Button>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
