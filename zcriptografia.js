function criptografar() {
    var palavrasOriginais = document.getElementById("palavrasOriginais").value.toUpperCase();
    var deslocamento = parseInt(document.getElementById("deslocamento").value);
    var palavraCriptografada = "";

    for (var i = 0; i < palavrasOriginais.length; i++) {
        var char = palavrasOriginais[i];
        if (char.match(/[A-Z]/)) {
            var code = palavrasOriginais.charCodeAt(i);
            var newCode = (code - 65 + deslocamento) % 26 + 65;
            palavraCriptografada += String.fromCharCode(newCode);
        } else {
            palavraCriptografada += char;
        }
    }

    document.getElementById("palavraCriptografada").value = palavraCriptografada;
}

function descriptografar() {
    var palavraCriptografada = document.getElementById("palavraCriptografada").value.toUpperCase();
    var deslocamento = parseInt(document.getElementById("deslocamento").value);
    var palavrasOriginais = "";

    for (var i = 0; i < palavraCriptografada.length; i++) {
        var char = palavraCriptografada[i];
        if (char.match(/[A-Z]/)) {
            var code = palavraCriptografada.charCodeAt(i);
            var newCode = (code - 65 - deslocamento + 26) % 26 + 65;
            palavrasOriginais += String.fromCharCode(newCode);
        } else {
            palavrasOriginais += char;
        }
    }

    document.getElementById("palavrasDescriptografadas").value = palavrasOriginais;
}