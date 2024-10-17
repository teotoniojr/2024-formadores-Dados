const url="https://raw.githubusercontent.com/teotoniojr/2024-API-Formadores/refs/heads/main/transporte_e_tempo.json"

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
}
visualizarInformacoesGlobais();

