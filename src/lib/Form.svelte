<script  lang="ts">
import type {InputField} from "./types/inputField";

let stadiumName: string = 'Testname';
let inputFields: Array<InputField> = [

    {label:"Stadien Name", type:"string", value:"stadiumName", id:"stadiumName"},
    {label:"Breite", type:"number", value:9, id:"width"},
    {label:"Höhe", type:"number", value:9, id:"height"},
    {label:"Spawn-Entfernung", type:"number", value:9, id:"spawnDistance"},
    {label:"Hintergrund-Typ", type:"string", value:"backgroundType", id:"backgroundType"},
    {label:"KickOff-Radium", type:"number", value:9, id:"kickOffRadius"}
]

function handleChange(value: number | string, index: number) {
    inputFields[index].value = value;
    console.log('value', value)
    console.log('inputFields', inputFields)
}

function submit3()  {
    console.log('Final Fields: ', inputFields);
}

</script>

<form>
    {#each inputFields as {label, type, value, id}, index(id)}
        <label for={id}>{label}:</label>
        <input {id} name={id} {type} value={value} on:change={e => handleChange(e.target.value, index)}/>
        <br>
    {/each}
    <input type="button" value="Absenden" on:click={submit3} />
</form>

<style>
    form {
        background-color: #f00;
        color: #0066ff;
    }
</style>