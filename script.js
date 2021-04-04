var htmlMinhaIdade = document.getElementById('idade');
var anoAtual = new Date;
anoAtual = anoAtual.getFullYear();
var nascAno = 2000;
htmlMinhaIdade.innerHTML = anoAtual - nascAno;
