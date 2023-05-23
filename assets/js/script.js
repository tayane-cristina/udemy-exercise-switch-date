let relogio = document.querySelector('.relogio')

//Implemente uma função que mostre o horário e o dia atual

const getDay = (day) => {
    if (day == 1) {
        return "Domingo"
    } else if (day == 2) {
        return "Segunda-feira"
    }else if (day == 3) {
        return "Terça-feira"
    } else if (day == 4) {
        return "Quarta-feira"
    } else if (day == 5) {
        return "Quinta-feira"
    } else if (day == 6) {
        return "Sexta-feira"
    } else {
        return "Sábado"
    }
}

const getMonth = (month) => {
    if (month == 1) {
        return "Janeiro";
    } else if (month == 2) {
        return "Fevereiro";
    } else if (month == 3) {
        return "Março";
    } else if (month == 4) {
        return "Abril";
    } else if (month == 5) {
        return "Maio";
    } else if (month == 6) {
        return "Junho";
    } else if (month == 7) {
        return "Julho";
    } else if (month == 8) {
        return "Agosto";
    } else if (month == 9) {
        return "Setembro";
    } else if (month == 10) {
        return "Outubro";
    } else if (month == 11) {
        return "Novembro";
    } else {
        return "Dezembro"
    }
}

const showTime = () => {
    let currentDay = new Date();
    let dia = currentDay.getDate();
    let semana = getDay(currentDay.getDay() + 1); 
    let mes = getMonth(currentDay.getMonth() + 1);
    let ano = currentDay.getFullYear();
    let hora = currentDay.getHours();
    let minuto = currentDay.getMinutes();

    let message = `${semana}, ${dia} de ${mes} de ${ano} 
    ${hora}:${minuto}`
    relogio.innerText = message
    
}

console.log(showTime())