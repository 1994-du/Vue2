<template>
  <div class="hello">
    <gc-spread-sheets-designer
      :styleInfo="styleInfo"
      :config="config"
      @designerInitialized="designerInitialized"
    >
    </gc-spread-sheets-designer>
  </div>
</template>

<script>
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css";
import GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-pivot-addon";
import "@grapecity/spread-sheets-resources-zh";
GC.Spread.Common.CultureManager.culture("zh-cn");
import "@grapecity/spread-sheets-designer-resources-cn";
import { Designer } from "@grapecity/spread-sheets-designer-vue";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      styleInfo: {
        height: "800px",
        width: "1200px",
        border: "solid red 1px"
      },
      config: null,
      designer: null
    };
  },
  methods: {
    designerInitialized(value) {
      this.designer = value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
