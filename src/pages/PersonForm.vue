<template>
  <div>
    <h1 class="title">Preson Form</h1>
    <div class="field">
      <input type="text"  :class="className('firstname')" v-model="person.firstname" name="firstname" 
                          v-validate="'required|min:3'">
      <div class="help is-danger"  v-show="errors.has('firstname')">{{errors.first('firstname')}}</div>
    </div>
    <div class="field">
      <input type="text"  :class="className('lastname')" v-model="person.lastname" name="lastname" 
                          v-validate="'required'">
      <div class="help is-danger" v-show="errors.has('lastname')">{{errors.first('lastname')}}</div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {}
    }
  },
  watch: {
    person() {
      this.$validator.validateAll()
    }
  },
  methods: {
    className(field) {
      return this.errors.has(field) ? 'input is-danger animated shake' : 'input'
    }
  },
}
</script>

