<template>
  <div class="v-select">  
    <h1>Helo</h1>
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">{{selected}}</p>
    <div class="options" v-if="areOptionsVisible || isExpanded">
      <p v-for="option in options" :key="option.value" @click="selectOption(option)">{{option.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  components: {},
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: String,
      default: ""
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      areOptionsVisible: false
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  }
};
</script>

<style lang="scss">
.v-select {
  position: absolute;
  width: 200px;
  cursor: pointer;
  text-align: left;
  p {
    margin: 0;
  }
}
.title {
  border: solid 1px #aeaeae;
  padding: $padding;
}
.optons {
  border: solid 1px #aeaeae;
  background: #fff;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  padding: $padding;
  p {
    &:hover {
      background: #e7e7e7;
    }
  }
}
</style>