<script setup lang="ts">
import Button from "../ui/button/Button.vue";
</script>

<template>
  <header>
    <div class="w-full md:max-w-7xl mx-auto flex justify-between py-5">
      <div>Find Coach</div>

      <div>
        <ul class="flex gap-6 items-center">
          <li>All coaches</li>
          <li>
            <Button>Sign in / sign up</Button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
