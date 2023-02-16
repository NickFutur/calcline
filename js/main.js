// Рачёт по линии полива №2
document.addEventListener('input', function(event) {
    if (event.target.dataset.count != undefined) {
        let T1 = Number(document.getElementById("T1").value);
        let T2 = Number(document.getElementById("T2").value);
        let T3 = Number(document.getElementById("T3").value);
        let N1 = Number(document.getElementById("N1").value);
        let N2 = Number(document.getElementById("N2").value);
        let N3 = Number(document.getElementById("N3").value);
        let N4 = Number(document.getElementById("N4").value);
        let T4 = Number(document.getElementById("T4").value);
        let T5 = Number(document.getElementById("T5").value);
        let T6 = Number(document.getElementById("T6").value);
        let T7 = Number(document.getElementById("T7").value);
        let V = Number(document.getElementById("V").value);
        let M = Number(document.getElementById("M").value);
        let G = Number(document.getElementById("G").value);
        let T10 = Number(document.getElementById("T10").value);
        let L = Number(document.getElementById("L").value);
        let T8 = Number(document.getElementById("T8").value);
        let T9 = Number(document.getElementById("T9").value);

        let HelpOperation = Number(((T2 / N2) * N4) + ((T3 / N3) * N4) + ((T4 / M) * N4) + ((T7 * G * L) / ((N1 - 10) * 1000 * 1000)) * N4).toFixed(4);
        let T0 = Number(((T2 / N2) * N4) + ((T3 / N3) * N4) + ((T4 / M) * N4) + ((((T7 * G * L) / ((N1 - 10) * 1000 * 1000)) * N4) + T6 + (N4 / V))).toFixed(4);
        let K = Number((T10 * 60) / (T10 * 60 - T1 - T5 - T8 - T9)).toFixed(4);
        let T = Number(T0 * K).toFixed(4);
        let P = Number((T10 * 60 - T1 - T5 - T8 - T9) / (T2 / N2 + T3 / N3 + T4 / M + T7 * G * L / (N1 - 10) / 1000000 + T6 / N4 + 1 / V)).toFixed(4);
        document.getElementById("HelpOperation").textContent = HelpOperation;
        document.getElementById("T0").innerHTML = T0;
        document.getElementById("K").innerHTML = K;
        document.getElementById("T").innerHTML = T;
        document.getElementById("P").innerHTML = P;
        console.log(Number(((T10 * 60) / T) * N4).toFixed(4));
    } else {
        return;
    }
});
// Расчёт по линии полива №1
document.addEventListener('input', function(event) {
    if (event.target.dataset.counter != undefined) {
        let T_1 = Number(document.getElementById("T_1").value);
        let T_2 = Number(document.getElementById("T_2").value);
        let T_3 = Number(document.getElementById("T_3").value);
        let T_4 = Number(document.getElementById("T_4").value);
        let T_5 = Number(document.getElementById("T_5").value);
        let T_6 = Number(document.getElementById("T_6").value);
        let T_7 = Number(document.getElementById("T_7").value);
        let T_8 = Number(document.getElementById("T_8").value);
        let T_9 = Number(document.getElementById("T_9").value);
        let T_11 = Number(document.getElementById("T_11").value);
        let T_10 = Number(document.getElementById("T_10").value);
        let T_12 = Number(document.getElementById("T_12").value);
        let T_13 = Number(document.getElementById("T_13").value);
        let T_14 = Number(document.getElementById("T_14").value);
        let N_1 = Number(document.getElementById("N_1").value);
        let N_2 = Number(document.getElementById("N_2").value);
        let N_3 = Number(document.getElementById("N_3").value);
        let N_4 = Number(document.getElementById("N_4").value);
        let N_5 = Number(document.getElementById("N_5").value);
        let V_1 = Number(document.getElementById("V_1").value);
        let M_1 = Number(document.getElementById("M_1").value);

        console.log(T_13);
        console.log(T_14);
        console.log(N_5);
        let HelpOperation_1 = Number(((T_2 / N_2) * N_4) + ((T_3 / N_3) * N_4) + ((T_7 / N_1) * N_4) + (((T_13 + T_14) / N_5) * N_4) + (((T_4 + T_11 + T_12) / M_1) * N_4)).toFixed(4); // ответ не совпадает
        let T_0 = Number((T_2 / N_2) * N_4 + (T_3 / N_3) * N_4 + (T_7 / N_1) * N_4 + (((T_13 + T_14) / N_5) * N_4) + ((T_4 + T_11 + T_12) / M_1) * N_4 + T_6 + N_4 / V_1).toFixed(4);
        let K_1 = Number((T_10 * 60) / (T_10 * 60 - T_1 - T_5 - T_8 - T_9)).toFixed(4);
        let T_ = Number(T_0 * K_1).toFixed(4);
        let P_1 = Number((T_10 * 60 - T_1 - T_5 - T_8 - T_9) / ((T_2 / N_2) + (T_3 / N_3) + (T_7 / N_1) + ((T_13 + T_14) / N_5) + ((T_4 + T_11 + T_12) / M_1) + (T_6 / N_4) + (1 / V_1))).toFixed(4);
        document.getElementById("HelpOperation").textContent = HelpOperation_1;
        document.getElementById("T_0").innerHTML = T_0;
        document.getElementById("K_1").innerHTML = K_1;
        document.getElementById("T_").innerHTML = T_;
        document.getElementById("P_1").innerHTML = P_1;
        console.log(Number(((T_10 * 60) / T_) * N_4).toFixed(4));
    } else {
        return;
    }
});

// function generatePDF() {

//     html2pdf()
//         .from(document.body)
//         .save();
// }

// function toPDF() {
//     html2pdf()
//         // УСТАНОВИТЬ ПАРАМЕТРЫ
//         .set({
//             margin: 1,
//             filename: "demo.pdf",
//             image: { type: "jpeg", quality: 1.0 },
//             enableLinks: true,
//             jsPDF: { format: "A4", orientation: "portrait" }
//         })
//         // ПОЛУЧИТЬ КОНТЕНТ ИЗ РАЗДЕЛА
//         .from(document.getElementById("demo"))
//         // СОХРАНИТЬ В ФАЙЛ
//         .save();
// }


// var input = document.querySelectorAll('input');
// var HelpOperation = document.getElementById('HelpOperation');
// var res;
// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener('input', function() {
//         if (T1 !== '' && T2 !== '') {
//             res = T1 + T2;
//             document.getElementById("HelpOperation").innerHTML = res;
//         }
//     })
// }



// document.getElementById('recalcInput').addEventListener('input', function() {
//     var output = document.getElementById('recalcedSum');
//     output.innerHTML = this.value - 50;
// });