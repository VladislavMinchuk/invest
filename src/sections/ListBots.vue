<script setup>
  import Card from 'primevue/card';
  import Button from 'primevue/button';
</script>

<template>
  <section>
    <div class="container">
      <div class="grid">
        <div class="col-4">
          <Card>
            <template #header>
              <div class="img-wrap">
                <img alt="user header" src="@/assets/images/logo-esom.png">
              </div>
            </template>
            <template #title> Advanced Card </template>
            <template #content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </template>
            <template #footer>
              <Button icon="pi pi-check" label="More" />
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .img-wrap {
    background-color: var(--gray-400);

    img {
      display: block;
      max-width: 200px;
      margin: 0 auto;
    }
  }
  
</style>
