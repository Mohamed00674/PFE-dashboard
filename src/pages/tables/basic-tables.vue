<template>

  <section class="tables">
    <div class="page-header">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="javascript:void(0);">Posts</a></li>
          <li class="breadcrumb-item active" aria-current="page">All Posts</li>
        </ol>
      </nav>
    </div>
    <h4>Facebook Posts</h4><br>
          <b-table striped hover :items="items"></b-table><br>
          <h4>Instagram Posts</h4><br>
         <b-table striped hover :items="items"></b-table><br>
                  <h4>Twitter Posts</h4><br>
             <b-table striped hover :items="items"></b-table><br>
              <h4>LinkedIn Posts</h4><br>
             <b-table striped hover :items="items"></b-table><br>




  </section>

</template>

<script>
  export default {
    data() {
      return {
        items: [
          { id: 1, Author: 'Dickerson', content: 'message',published : "true" },
          { id: 2, Author: 'Larsen', content: 'video' ,published : "true" },
          { id: 3, Author: 'Geneva', content: 'photo' ,published : "true"},
          { id: 4, Author: 'Jami', content: 'photo' ,published : "true"}
        ]
      }
    }
  }
</script>

<style scoped>
.tables{
  background: #fff;
}
h4{
  margin-left: 25px;
}
</style>