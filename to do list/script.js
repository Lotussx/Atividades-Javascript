
document.querySelector('#submit').addEventListener('click', function () {
    var lista = document.getElementById('lista');
    var nome = document.querySelector('#nome').value;
    lista.innerHTML = lista.innerHTML + '<input type="checkbox">' + nome + '</br>'

    document.querySelector('#nome').value = '';

});