<template>
  <div>
    <main id="main-content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { isTouch } from '~/lib/helpers'

export default {
  mounted() {
    this.$store.commit('SET_IS_TOUCH', isTouch())
  }
}
</script>
