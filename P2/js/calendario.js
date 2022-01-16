window.addEventListener("DOMContentLoaded", function() {

    document.getElementById('imprimir').addEventListener('click', function() {

        //Creamos una variable que recoge el día actual
        var actual = new Date();

        function mostrarCalendario(year, month) {
            //Creamos variables que recogen diferentes datos referentes a la fecha
            var now = new Date(year, month - 1, 1);
            var last = new Date(year, month, 0);
            var primerDiaSemana = (now.getDay() == 0) ? 7 : now.getDay();
            var ultimoDiaMes = last.getDate();
            var dia = 0;
            var resultado = "<tr>";
            var diaActual = 0;
            console.log(ultimoDiaMes);

            var last_cell = primerDiaSemana + ultimoDiaMes;

            for (var i = 1; i <= 42; i++) {
                if (i == primerDiaSemana) {
                    // determinamos en que dia empieza
                    dia = 1;
                }
                if (i < primerDiaSemana || i >= last_cell) {
                    // celda vacia
                    resultado += "<td>&nbsp;</td>";
                } else {
                    // mostramos el dia
                    if (dia == actual.getDate() && month == actual.getMonth() + 1 && year == actual.getFullYear())
                        resultado += "<td class='hoy'>" + dia + "</td>";
                    else
                        resultado += "<td>" + dia + "</td>";
                    dia++;
                }
                if (i % 7 == 0) {
                    if (dia > ultimoDiaMes)
                        break;
                    resultado += "</tr><tr>\n";
                }
            }
            resultado += "</tr>";
            //Creamos otra variable con los meses del año
            var meses = Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

            document.getElementById("calendar").getElementsByTagName("caption")[0].innerHTML = "<div>" + meses[month - 1] + " / " + year + "</div><div><a onclick='mostrarCalendario()'></a> <a onclick='mostrarCalendario()'></a></div>";
            document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML = resultado;
        }
        //se muestra el mes del año en que estamos

        mostrarCalendario(actual.getFullYear(), actual.getMonth() + 1);

    });



});