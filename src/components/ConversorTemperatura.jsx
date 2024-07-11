import { useState } from "react";


function ConversorTemperatura() {
    const [temperatura, setTemperatura] = useState(0);
    const [tempF, setTempF] = useState(0);

    function handleTemp(evento) {
        const input = evento.target;
        const valor = input.value;

        setTemperatura(valor);
    }
    function handleTempF() {
        const resultado = temperatura*1.8 + 32;

        setTempF(resultado.toFixed(1));
    }

    return (
        <section>
            <h3>Conversor de Temperatura</h3>
            <input
                type="text"
                placeholder="Digite a temperatura"
                onChange={handleTemp}
            />
            <br />
            <button onClick={handleTempF}>Converter</button>
            <hr />
            <h4> {temperatura} C° =  {tempF} F°</h4>
        </section>
    );
}
export default ConversorTemperatura;