<script lang="ts">
  import Form from './lib/Form.svelte'
  import Field from "./lib/Field.svelte";
  import type {InputField} from "./lib/types/inputField";

  let inputFields: Array<InputField> = [
    {label: "Stadien Name", type: "string", value: undefined, id: "stadiumName"},
    {label: "Breite", type: "number", value: undefined, id: "width"},
    {label: "Höhe", type: "number", value: undefined, id: "height"},
    {label: "Spawn-Entfernung", type: "number", value: undefined, id: "spawnDistance"},
    {label: "Hintergrund-Typ", type: "select", value: undefined, id: "backgroundType"},
    {label: "KickOff-Radium", type: "number", value: undefined, id: "kickOffRadius"}
  ]
</script>

<main>
  <div class="form-space" ><Form bind:inputFields={inputFields}/></div>
  <div class="field-space" style="height: 100%"><Field inputFields={inputFields}/></div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  main {
    text-align: center;
    margin: 0 0;
    display: flex;
    height: 100%;
  }

  .form-space {
    width: 20%;
    background-color: lightseagreen;
  }

  .field-space {
    width: 80%;
    background-color: lightgray;
    height: 100%;
  }
</style>
