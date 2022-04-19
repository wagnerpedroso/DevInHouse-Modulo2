var msg;
var level = 2;

// Determina a mensagem com base no nível

switch(level) {

    case 1:
        msg = 'Boa sorte no primeiro teste !'
        break;

    case 2:
        msg = 'Dois de três - Continue !';
        break;

    case 3:
        msg = 'Último round. Você está quase lá !';
        break;

    default:
        msg = 'Good luck !';
        break;
}

var el = document.querySelector('body')
el.textContent = msg;