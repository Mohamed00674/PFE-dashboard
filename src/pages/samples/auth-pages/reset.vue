<template>
 <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
                <form @submit.prevent="login" class="pt-3">
                <h3>Reset Password</h3> <br>
                  <div class="form-group">
                    <input v-model="password" type="pssword" class="form-control form-control-lg" id="password" placeholder=" Enter your new  password">
                  </div>
                  <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" > Reset   </button>
                </form>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name : "reset",
    data() {
        return {
            password : ""
        }
    },
}
</script>

<style scoped>
</style>
