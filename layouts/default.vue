<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/buefy.png" alt="Buefy" height="28" />
        </a>
      </div>
    </nav>

    <section class="main-content columns">
      <div class="container column is-10">
        <nuxt :key="$route.fullPath"/>
      </div>
    </section>
  </div>
</template>
