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
        if (N1 != 10 && N2 != 0 && N3 != 0 && N4 != 0 && M != 0 && V != 0 && (T10 * 60 - T1 - T5 - T8 - T9) != 0) {
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
            // Расчёт исключений
        } else if (N1 == 10 || N2 == 0 || N3 == 0 || N4 == 0 || M == 0 || V == 0 || (T10 * 60 - T1 - T5 - T8 - T9) == 0) {
            function exclusionFun(e) {
                let N1_num = Number((T7 * G * L) / ((N1 - 10) * 1000000));
                let T2_N2 = Number(T2 / N2);
                let T3_N3 = Number(T3 / N3);
                let T6_N4 = Number(T6 / N4);
                let T4_M = Number(T4 / M);
                let N4_V = Number(N4 / V);
                let V_1 = Number(1 / V);
                let T10_nums = Number((T10 * 60) / (T10 * 60 - T1 - T5 - T8 - T9));

                if (!isFinite(N1_num) || isNaN(N1_num)) {
                    N1_num = 0;
                }
                if (!isFinite(T2_N2) || isNaN(T2_N2)) {
                    T2_N2 = 0;
                }
                if (!isFinite(T3_N3) || isNaN(T3_N3)) {
                    T3_N3 = 0;
                }
                if (!isFinite(T6_N4) || isNaN(T6_N4)) {
                    T6_N4 = 0;
                }
                if (!isFinite(T4_M) || isNaN(T4_M)) {
                    T4_M = 0;
                }
                if (!isFinite(N4_V) || isNaN(N4_V)) {
                    N4_V = 0;
                }
                if (!isFinite(V_1) || isNaN(V_1)) {
                    V_1 = 0;
                }
                if (!isFinite(T10_nums) || isNaN(T10_nums)) {
                    T10_nums = 0;
                }
                console.log('N1_num = ' + N1_num);
                console.log('T2_N2 = ' + T2_N2);
                console.log('T3_N3 = ' + T3_N3);
                console.log('T6_N4 = ' + T6_N4);
                console.log('T4_M = ' + T4_M);
                console.log('V_1 = ' + V_1);
                console.log('T10_nums = ' + T10_nums);
                console.log(' --------------');
                console.log(' ');
                // выражение P_Answer не переносить вверх, потому что может нарушиться логика
                let P_Answer = Number(T10_nums / (T2_N2 + T3_N3 + T4_M + N1_num + T6_N4 + V_1));
                // Уравнения, результаты которых будут выводиться на сайте 
                let HelpOperation = Number((T2_N2 * N4) + (T3_N3 * N4) + (T4_M * N4) + (N1_num * N4));
                console.log('T2_N2 * N4 = ' + T2_N2 * N4);
                console.log('T3_N3 * N4 = ' + T3_N3 * N4);
                console.log('T4_M * N4 = ' + T4_M * N4);
                console.log('N1_num = ' + N1_num);
                console.log('N1_num * N4 = ' + N1_num * N4);
                console.log(' +++++++++++++++ ');
                console.log(' ');
                console.log(' ');
                let T0 = Number(HelpOperation + T6 + N4_V);
                let K = T10_nums;
                let T = Number(T0 * K);
                // Проверка для P_1, если оно Infinity или NaN
                if (!isFinite(P_Answer) || isNaN(P_Answer)) {
                    P_Answer = 0;
                }
                let P1 = P_Answer;

                // Вывод элементов на страницу
                document.getElementById("HelpOperation").textContent = HelpOperation.toFixed(4);
                document.getElementById("T0").innerHTML = T0.toFixed(4);
                document.getElementById("K").innerHTML = K.toFixed(4);
                document.getElementById("T").innerHTML = T.toFixed(4);
                document.getElementById("P").innerHTML = P1.toFixed(4);
            }
            exclusionFun();
        } else {
            console.log('Непредвиденные ошибки!');
            return;
        }

    }
    //     let HelpOperation = Number(((T2 / N2) * N4) + ((T3 / N3) * N4) + ((T4 / M) * N4) + ((T7 * G * L) / ((N1 - 10) * 1000 * 1000)) * N4).toFixed(4);
    //     let T0 = Number(((T2 / N2) * N4) + ((T3 / N3) * N4) + ((T4 / M) * N4) + ((((T7 * G * L) / ((N1 - 10) * 1000 * 1000)) * N4) + T6 + (N4 / V))).toFixed(4);
    //     let K = Number((T10 * 60) / (T10 * 60 - T1 - T5 - T8 - T9)).toFixed(4);
    //     let T = Number(T0 * K).toFixed(4);
    //     let P = Number((T10 * 60 - T1 - T5 - T8 - T9) / (T2 / N2 + T3 / N3 + T4 / M + T7 * G * L / (N1 - 10) / 1000000 + T6 / N4 + 1 / V)).toFixed(4);
    //     document.getElementById("HelpOperation").textContent = HelpOperation;
    //     document.getElementById("T0").innerHTML = T0;
    //     document.getElementById("K").innerHTML = K;
    //     document.getElementById("T").innerHTML = T;
    //     document.getElementById("P").innerHTML = P;
    //     console.log(Number(((T10 * 60) / T) * N4).toFixed(4));
    // } 
    else {
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
        if (N_1 != 0 && N_2 != 0 && N_3 != 0 && N_4 != 0 && N_5 != 0 && M_1 != 0 && V_1 != 0 && T_2 != 0 && T_3 != 0 && T_6 != 0 && T_7 != 0 && (T_13 + T_14) != 0 && (T_4 + T_11 + T_12) != 0 && T_1 != 0) {
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
            // Расчёт исключений
        } else if (N_1 == 0 || N_2 == 0 || N_3 == 0 || N_4 == 0 || N_5 == 0 || M_1 == 0 || V_1 == 0 || T_2 == 0 || T_3 == 0 || T_6 == 0 || T_7 == 0 || (T_13 + T_14) == 0 || (T_4 + T_11 + T_12) == 0) {
            function exclusionFun(e) {
                let T_2_N_2 = Number(T_2 / N_2);
                let T_3_N_3 = Number(T_3 / N_3);
                let T_7_N_1 = Number(T_7 / N_1);
                let T_13_T_14_N_5 = Number((T_13 + T_14) / N_5);
                let T_4_T_11_T_12_M_1 = Number((T_4 + T_11 + T_12) / M_1);
                let T_6_N_4 = Number(T_6 / N_4);
                let N_4_V_1 = Number(N_4 / V_1);
                let V_1_ = Number(1 / V_1);
                let K_1_ = Number((T_10 * 60) / (T_10 * 60 - T_1 - T_5 - T_8 - T_9));

                if (!isFinite(T_2_N_2) || isNaN(T_2_N_2)) {
                    T_2_N_2 = 0;
                }
                if (!isFinite(T_3_N_3) || isNaN(T_3_N_3)) {
                    T_3_N_3 = 0;
                }
                if (!isFinite(T_7_N_1) || isNaN(T_7_N_1)) {
                    T_7_N_1 = 0;
                }
                if (!isFinite(T_13_T_14_N_5) || isNaN(T_13_T_14_N_5)) {
                    T_13_T_14_N_5 = 0;
                }
                if (!isFinite(T_4_T_11_T_12_M_1) || isNaN(T_4_T_11_T_12_M_1)) {
                    T_4_T_11_T_12_M_1 = 0;
                }
                if (!isFinite(T_6_N_4) || isNaN(T_6_N_4)) {
                    T_6_N_4 = 0;
                }
                if (!isFinite(N_4_V_1) || isNaN(N_4_V_1)) {
                    N_4_V_1 = 0;
                }
                if (!isFinite(V_1_) || isNaN(V_1_)) {
                    V_1_ = 0;
                }
                if (!isFinite(K_1_) || isNaN(K_1_)) {
                    K_1_ = 0;
                }

                // выражение P_1_Answer не переносить вверх, потому что может нарушиться логика
                let P_1_Answer = Number((T_10 * 60 - T_1 - T_5 - T_8 - T_9) / (T_2_N_2 + T_3_N_3 + T_7_N_1 + T_13_T_14_N_5 + T_4_T_11_T_12_M_1 + T_6_N_4 + V_1_));
                // Уравнения, результаты которых будут выводиться на сайте 
                let HelpOperation_1 = Number((T_2_N_2 * N_4) + (T_3_N_3 * N_4) + (T_7_N_1 * N_4) + (T_13_T_14_N_5 * N_4) + (T_4_T_11_T_12_M_1 * N_4)).toFixed(4);
                let T_0 = Number((T_2_N_2 * N_4) + (T_3_N_3 * N_4) + (T_7_N_1 * N_4) + (T_13_T_14_N_5 * N_4) + (T_4_T_11_T_12_M_1 * N_4) + T_6 + N_4_V_1).toFixed(4);
                let K_1 = K_1_.toFixed(4);
                let T_ = Number(T_0 * K_1).toFixed(4);
                // Проверка для P_1, если оно Infinity или NaN
                if (!isFinite(P_1_Answer) || isNaN(P_1_Answer)) {
                    P_1_Answer = 0;
                }
                let P_1 = P_1_Answer.toFixed(4);

                // Вывод элементов на страницу
                document.getElementById("HelpOperation").textContent = HelpOperation_1;
                document.getElementById("T_0").innerHTML = T_0;
                document.getElementById("K_1").innerHTML = K_1;
                document.getElementById("T_").innerHTML = T_;
                document.getElementById("P_1").innerHTML = P_1;
            }
            exclusionFun();
        } else {
            console.log('Непредвиденные ошибки!');
            return;
        }

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