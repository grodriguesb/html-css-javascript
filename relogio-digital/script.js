
function atualizarHora() {
    const hh = document.getElementById("horas");
    const mm = document.getElementById("minutos");
    const ss = document.getElementById("segundos");

    var data = new Date();

    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    hh.innerHTML = hora
    mm.innerHTML = minuto
    ss.innerHTML = segundo
}
setInterval(atualizarHora, 1000);