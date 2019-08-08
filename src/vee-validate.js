import Vue from 'vue'
import VeeValidate from 'vee-validate'

const dictionary = {
  en: {
    messages: {
      required(field) {
        return field + ' is Required'
      },
      min(field, args) {
        return field + ' must enter at least' + args[0]
      }
    },
    attributes: {
      firstname: 'Firstname ',
      lastname: 'Lastname '
    }
  },
  th: {
    messages: {
      required(field) {
        return field + ' ไม่สามารถเป็นค่าว่างได้'
      },
      min(field, args) {
        return field + ' ต้องป้อนข้อมูลอย่างน้อย' + args[0]
      }
    },
    attributes: {
      firstname: 'ชื่อ ',
      lastname: 'นามสกุล '
    }
  }
}

Vue.use(VeeValidate, {
  dictionary: dictionary
})