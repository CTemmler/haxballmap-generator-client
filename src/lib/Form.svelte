<script  lang="ts">
import type {InputField} from "./types/inputField";

let stadiumName: string = 'Testname';
let inputFields: Array<InputField> = [

    {label:"Stadien Name", type:"string", value:"stadiumName", id:"stadiumName"},
    {label:"Breite", type:"number", value:"width", id:"width"},
    {label:"Höhe", type:"number", value:"height", id:"height"},
    {label:"Spawn-Entfernung", type:"number", value:"spawnDistance", id:"spawnDistance"},
    {label:"Hintergrund-Typ", type:"string", value:"backgroundType", id:"backgroundType"},
    {label:"KickOff-Radium", type:"number", value:"kickOffRadius", id:"kickOffRadius"}
]


</script>

<form method="POST">
    {#each inputFields as {label, type, value, id}}
        <label for={id}>{label}:</label>
        <input {id} name={id} {type} />
    {/each}
    <input type="submit" value="Absenden" />
</form>