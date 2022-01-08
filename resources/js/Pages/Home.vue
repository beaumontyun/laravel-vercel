<template>
  <div class="w-1/2 bg-gray-700 rounded-lg shadow-lg mx-auto p-4">
    <h1 class="text-2xl text-white text-center mb-4">Testing submit</h1>
    <p class="text-white pb-3">
      Type in your email below
    </p>
    <form @submit.prevent="submit"  class="grid grid-cols-2 gap-2">
      <input type="text" id="email" v-model="form.email" placeholder="Enter your email" class="w-full rounded-lg pl-3">
      <button type="submit" class="border-red border-2 w-20 rounded-lg text-white">Register</button>
    </form>
  </div>
</template>

<script>
import { useForm } from "@inertiajs/inertia-vue3";

export default {
  setup(props) {
    const form = useForm({
      email: null,
    });

    function submit() {
      form.post("/api/add");
    }

    return { form, submit };
  },
};
</script>