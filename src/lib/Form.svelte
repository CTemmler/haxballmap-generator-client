<script lang="ts">
    import {fly} from 'svelte/transition';
    import type {InputField} from "./types/inputField";
    import {quintOut} from "svelte/easing";

    let currentVisibleItems = 0;

    setTimeout(() => {
        currentVisibleItems += 1;
    }, 1000)

    let stadiumName: string = 'Testname';
    let inputFields: Array<InputField> = [
        {label: "Stadien Name", type: "string", value: undefined, id: "stadiumName"},
        {label: "Breite", type: "number", value: undefined, id: "width"},
        {label: "Höhe", type: "number", value: undefined, id: "height"},
        {label: "Spawn-Entfernung", type: "number", value: undefined, id: "spawnDistance"},
        {label: "Hintergrund-Typ", type: "string", value: undefined, id: "backgroundType"},
        {label: "KickOff-Radium", type: "number", value: undefined, id: "kickOffRadius"}
    ]

    function handleChange(value: number | string, index: number) {
        inputFields[index].value = value;
        console.log('value', value)
        console.log('inputFields', inputFields)

        if (index + 1 === currentVisibleItems) {
            currentVisibleItems += 1;
        }
    }

    function submit3() {
        console.log('Final Fields: ', inputFields);
    }

</script>

<form>
    {#each inputFields as {label, type, value, id}, index(id)}
        {#if index < currentVisibleItems}
            <div transition:fly={{delay: 250, duration: 1000, x: 0, y: 500, opacity: 0.5, easing: quintOut}}>
                <div><label for={id}>{label}:</label></div>
                <input {id} name={id} {type} value={value} on:change={e => handleChange(e.target.value, index)}/>
            </div>
        {/if}
    {/each}
    {#if currentVisibleItems === inputFields.length}
        <input class="form-sent-button" type="button" value="Absenden" on:click={submit3}/>
    {/if}
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    form > div {
        padding: 5px;
        width: 100%
    }

    label {
        width: 150px;
        text-align: right;
    }

    .form-sent-button {
        width: 100px;
    }
</style>