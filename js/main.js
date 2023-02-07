// var T1 = document.getElementById('T1');
// T1.addEventListener('input', () => {
//     let T1 = Number(document.getElementById("T1").value);
//     let T2 = Number(document.getElementById("T2").value);
//     let T3 = Number(document.getElementById("T3").value);
//     let N1 = Number(document.getElementById("N1").value);
//     let N2 = Number(document.getElementById("N2").value);
//     let N3 = Number(document.getElementById("N3").value);
//     let N4 = Number(document.getElementById("N4").value);
//     let T4 = Number(document.getElementById("T4").value);
//     let T5 = Number(document.getElementById("T5").value);
//     let T6 = Number(document.getElementById("T6").value);
//     let T7 = Number(document.getElementById("T7").value);
//     let V = Number(document.getElementById("V").value);
//     let M = Number(document.getElementById("M").value);
//     let G = Number(document.getElementById("G").value);
//     let T10 = Number(document.getElementById("T10").value);
//     let L = Number(document.getElementById("L").value);
//     let T8 = Number(document.getElementById("T8").value);
//     let T9 = Number(document.getElementById("T9").value);

//     let HelpOperation = Number(((T2 / N2) * N4) + ((T3 / N3) * N4) + ((T4 / M) * N4) + ((T7 * G * L) / ((N1 - 10) * 1000 * 1000)) * N4).toFixed(2);
//     let T0 = Number(((T2 / N2) * N4) + ((T3 / N3) * N4) + ((T4 / M) * N4) + ((((T7 * G * L) / ((N1 - 10) * 1000 * 1000)) * N4) + T6 + (N4 / V))).toFixed(2);
//     let K = Number((T10 * 60) / (T10 * 60 - T1 - T5 - T8 - T9)).toFixed(2);
//     let T = Number(T0 * K).toFixed(2);
//     let P = Number(((T10 * 60) / T) * N4).toFixed(2);
//     document.getElementById("HelpOperation").textContent = HelpOperation;
//     document.getElementById("T0").innerHTML = T0;
//     document.getElementById("K").innerHTML = K;
//     document.getElementById("T").innerHTML = T;
//     document.getElementById("P").innerHTML = P;
//     console.log(((T2 / N2) * N4) + ((T3 / N3) * N4) + ((T4 / M) * N4) + ((T7 * G * L) / ((N1 - 10) * 1000 * 1000)) * N4);
// });

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

        let HelpOperation = Number(((T2 / N2) * N4) + ((T3 / N3) * N4) + ((T4 / M) * N4) + ((T7 * G * L) / ((N1 - 10) * 1000 * 1000)) * N4).toFixed(2);
        let T0 = Number(((T2 / N2) * N4) + ((T3 / N3) * N4) + ((T4 / M) * N4) + ((((T7 * G * L) / ((N1 - 10) * 1000 * 1000)) * N4) + T6 + (N4 / V))).toFixed(2);
        let K = Number((T10 * 60) / (T10 * 60 - T1 - T5 - T8 - T9)).toFixed(2);
        let T = Number(T0 * K).toFixed(2);
        let P = Number(((T10 * 60) / T) * N4).toFixed(2);
        document.getElementById("HelpOperation").textContent = HelpOperation;
        document.getElementById("T0").innerHTML = T0;
        document.getElementById("K").innerHTML = K;
        document.getElementById("T").innerHTML = T;
        document.getElementById("P").innerHTML = P;
        console.log(((T2 / N2) * N4) + ((T3 / N3) * N4) + ((T4 / M) * N4) + ((T7 * G * L) / ((N1 - 10) * 1000 * 1000)) * N4);
    } else {
        return;
    }
})


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