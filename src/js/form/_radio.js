/**
 * @fileoverview radio
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-08
 */

export default {
  name: 'ci-radio',

  props: {
    ns: String,
    name: String,
    inline: String,
    value: [String, Boolean],
    option: Object,

    options: {
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {
      myValue: this.value
    }
  },

  watch: {
    value(val) {
      this.myValue = val
    }
  },

  methods: {
    onChange() {
      this.$emit('input', this.myValue)
    },

    onClick() {
      this.$emit('click', this.myValue)
    }
  }
}
