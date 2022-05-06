<script>
    import {Canvas, Layer, t} from "svelte-canvas";

    export let inputFields = []

    $: fieldWidth = Number(inputFields.find(value => value.id === "width").value);
    $: fieldHeight = Number(inputFields.find(value => value.id === "height").value);
    $: kickOffRadius = Number(inputFields.find(value => value.id === "kickOffRadius").value);
    $: spawnDistance = Number(inputFields.find(value => value.id === "spawnDistance").value);
    $: backgroundType = inputFields.find(value => value.id === "backgroundType").value;

    const lineThickness = 5;
    const offsetX = 50;
    const offsetY = 10;
    const playerSize = 25;

    $: render = ({context}) => {
        drawField(context);
        drawKickOffRadius(context);
        drawPlayers(context);

        function drawField(context)  {
            context.fillStyle = createBackgroundColor();
            context.beginPath();
            context.rect(offsetX, offsetY, fieldWidth + lineThickness, fieldHeight + lineThickness);
            context.fill();

            context.fillStyle = `hsl(${$t / 40}, 100%, 50%)`;
            context.beginPath();
            context.rect(offsetX, offsetY, fieldWidth, lineThickness);
            context.rect(offsetX, offsetY, lineThickness, fieldHeight);
            context.rect((fieldWidth / 2) + offsetX, offsetY, 1, fieldHeight + lineThickness);
            context.rect(fieldWidth + offsetX, offsetY, lineThickness, fieldHeight + lineThickness);
            context.rect(offsetX, fieldHeight + offsetY, fieldWidth, lineThickness);
            context.fill();
        }

        function createBackgroundColor() {
            if (backgroundType === "grass") {
                return "green"
            }

            if (backgroundType === "hockey") {
                return "black"
            }

            if (backgroundType === "none") {
                return "white"
            }

            return "blue"
        }

        function drawKickOffRadius(context)  {
            context.strokeStyle = `hsl(${$t / 40}, 100%, 50%)`;
            context.lineWidth = lineThickness;
            context.beginPath();
            context.arc((fieldWidth / 2) + offsetX, (fieldHeight / 2) + offsetY, kickOffRadius, 0, Math.PI*2);
            context.stroke();
        }

        function drawPlayers(context)  {
            context.fillStyle = `hsl(${$t / 40}, 100%, 50%)`;
            context.lineWidth = lineThickness;
            context.beginPath();
            context.arc((fieldWidth / 2 - spawnDistance) + offsetX, (fieldHeight / 2) + offsetY, playerSize, 0, Math.PI*2);
            context.arc((fieldWidth / 2 + spawnDistance) + offsetX, (fieldHeight / 2) + offsetY, playerSize, 0, Math.PI*2);
            context.fill();
        }
    };

    let width;
    let height;
    let headlineHeight;
</script>
<div bind:clientWidth={width} bind:clientHeight={height} style="height: 100%">
    <h1 bind:clientHeight={headlineHeight}>Field</h1>
    <Canvas {width} heigth={height - headlineHeight}>
        <Layer {render}/>
    </Canvas>
</div>