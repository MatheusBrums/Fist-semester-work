//


button_open = document.getElementById("open_compaint")
button_open.addEventListener('click', open_compaint)

function hide_button() {
    document.getElementById('open_compaint').style.display = 'none'
}

function open_compaint() {
    const form = document.createElement('div')
    form.id = 'form'
    form.innerHTML =
        `
                    <fieldset>
                        <legend>Dados pessoais</legend>
                        <p>
                            <label for="name">Nome completo:</label>
                            <input type="text" name="name" id="name">
                        </p>
                        <p>
                            <label for="cpf">CPF:</label>
                            <input type="text" name="cpf" id="cpf">
                        </p>
                    </fieldset>
                    <fieldset>
                        <legend>Dados da denuncia</legend>
                        <p>
                            <label for="zone">Municipio:</label>
                            <input type="text" name="zone" id="zone">
                        </p>
                        <label for="data_complaint">Informações da denuncia:</label><br>
                        <textarea name="data_complaint" id="data_complaint" cols="100" rows="20"></textarea>
                    </fieldset>
                    <button id="send_form">ENVIAR</button>
    `
    const sform = document.getElementById('sform')
    sform.appendChild(form)
    hide_button()
    button_close = document.getElementById("send_form")
    button_close.addEventListener('click', close_compaint)
}


//




function close_compaint() {
    const section = document.getElementById('main_section')
    document.getElementById('form').style.display = 'none'
    section.innerHTML = 
    `
    <div id="congratulations">
                    <h3>Obrigado pela sua colaboração! 🌱</h3>
                    <p>Sua denúncia foi enviada com sucesso e será encaminhada para análise. A participação da sociedade é essencial para a preservação dos recursos naturais e para a construção de um ambiente mais sustentável para todos.</p>
                </div>
    `
}