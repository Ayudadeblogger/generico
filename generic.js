$().ready(function() {
    var mensaje = '<p class="blanco">* Tenga en cuenta que el cÃ¡lculo se realizÃ³ con base en la tabla de pensiones establecida para el 2016.</p><p class="blanco">Si desea ver los niveles de ingreso y porcentajes fijados <a href="#" class=2pinchar2>Click aquÃ­</a></p>';
    /*PORCENTAJES DE DESCUENTO SEGUN LA EDAD Y NUMERO DE HIJOS
    CADA PAR DE DATOS SIGNIFICA 1 2 O 3 EN ADELANTE HIJOS
    */
    var tabla = [
        [
            [
                [28.12],
                [39.71],
                [52.18]
            ],
            [
                [29.49],
                [43.13],
                [54.23]
            ],

        ], /*EJ: DE 0 A 2 AÃ‘OS 1 HIJO 28.12, DE 3 EN ADELANTE 29.49*/ /* Y */
        [
            [
                [34.84],
                [47.45]
            ],
            [
                [36.96],
                [49.51]
            ]
        ],
        [
            [
                [38.49]
            ],
            [
                [40.83]
            ]
        ],
        [
            [
                [39.79]
            ],
            [
                [42.21]
            ]
        ],
        [
            [
                [41.14]
            ],
            [
                [43.64]
            ]
        ],
        [
            [
                [42.53]
            ],
            [
                [45.12]
            ]
        ]
    ];


    var discapacidad = [
        [
            [4.56],
            [5.23],
            [6.63]
        ],
        [
            [10.68],
            [12.26],
            [15.55]
        ],
        [
            [18.23],
            [20.92],
            [26.53]
        ],
        [
            [25.54],
            [29.30],
            [37.16]
        ],
        [
            [30.43],
            [34.92],
            [44.28]
        ],
        [
            [30.43],
            [34.92],
            [44.28]
        ]
    ]

    console.log(tabla);
    $("#nhijos").prop('disabled', true);
    sueldo = 400;
    var sbu = 400;
    var porcentaje = [];
    var valores = [];
    /*PORCENTAJES DE CALCULO SEGUN EL SBU*/
    valores[new Array()];
    porcentaje[0] = [1, 1.25];
    porcentaje[1] = [1.25003, 3];
    porcentaje[2] = [3.00003, 4];
    porcentaje[3] = [4.00003, 6.5];
    porcentaje[4] = [6.50003, 9];
    porcentaje[5] = [9.00003, 1000];
    /**********************************/

    //console.log(porcentaje.length);
    var rango1 = 0;
    var rango2 = 0;
    $.each(porcentaje, function(ind, elem) {

        rango1 = porcentaje[ind][0] * sueldo;
        rango2 = porcentaje[ind][1] * sueldo;
        ////console.log(rango1);
        valores[ind] = new Array(rango1, rango2);

        //console.log('nivel ' + ind + ' / ' + valores[ind][0] + ' hasta: ' + valores[ind][1]);

    });

    $('#calcular').on('click', function() {
        /*tomo valores ingresados*/
        var s = parseFloat($('#sueldo').val());
        var me = parseInt($('#menores').val());
        var ma = parseInt($('#mayores').val());
        //var de=parseInt($('#demandantes').val());
        var nh = ma + me;
        $('#nhijos').val(nh);

        //if (me+ma>=1)
        if (nh > 0 && s >= sbu) {
            $('#respuesta').fadeIn();
            $("#sueldo").prop('disabled', true);
            $("#menores").prop('disabled', true);
            $("#mayores").prop('disabled', true);

            /**/
            let s1;
            let s2;
            let s3;
            var ind = 0;
            $('#calcular').hide();
            $('#respuesta').fadeIn(2000);


            console.log(valores);
            $.each(valores, function(ind, elem) {

                if (s >= valores[ind][0] && s <= valores[ind][1]) {
                    s1 = ind;
                    //console.log('Su sueldo esta en el nivel ' + ind);

                    switch (ind) {
                        case 0:

                            calculaPension(ma, me, s1, s, ind, nh);

                            break;
                        case 1:
                            calculaPension(ma, me, s1, s, ind, nh);

                            break;
                        case 2:

                            calculaPension(ma, me, s1, s, ind, nh);
                            break;
                        case 3:

                            calculaPension(ma, me, s1, s, ind, nh);
                            break;
                        case 4:
                            nhijos = ma + me;

                            calculaPension(ma, me, s1, s, ind, nh);
                            break;
                        case 5:
                            nhijos = ma + me;

                            calculaPension(ma, me, s1, s, ind, nh);
                            break;
                        default:
                            //console.log('calculo para nivel otro caso');
                            break;
                    }
                }


                //console.log('nivel ' + ind + ' / ' + valores[ind][0] + ' hasta: ' + valores[ind][1]);

            });


        } else {}

    });


    $('#limpiar').on('click', function() {
        $('#respuesta').hide();
        $('#calcular').show();
        // $('.pregunta').show();
        $('#sueldo').val(400);
        $('#menores').val(0);
        $('#mayores').val(0);
        $('#nhijos').val(0);
        $("#sueldo").prop('disabled', false);
        $("#menores").prop('disabled', false);
        $("#mayores").prop('disabled', false);
        $("#moderado");
        $(".cont-discapacidad").html("<h4>En caso de tener uno o varios hijos con discapacidad, marque la casilla que corresponde segÃºn el nivel que corresponda</h4><br><form><label class='dis' for='moderado'><input type='checkbox' name='moderado' class='marca' id='moderado'/> &nbsp&nbspModerado </label><br/><label class='dis' for='grave'><input type='checkbox' name='grave' class='marca' id='grave'/> &nbsp&nbspGrave</label><br/><label class='dis' for='muygrave'><input type='checkbox' name='muygrave' class='marca' id='muygrave' /> &nbsp&nbspMuy grave</label></form>");
    });

    function calculaPension(ma, me, s1, s, ind, nh) {

        var nh = ma + me;
        var incremento = 0;
        var porcentajedis = 0;
        var s2 = 0;
        var s3 = 0;

        nhijos = ma + me;
        nhijos = ma + me;
        // s2 = ind;
        if (s1 > 1) {
            if (ma > 0) {
                s2 = 1;
                s3 = 0;
            } else {
                s2 = 0;
                s3 = 0;
            }
        } else if (s1 == 1) {
            if (ma >= 2) {
                s2 = 1;
                s3 = 1;
            } else if (me >= 2 && ma < 2) {
                s2 = 0;
                s3 = 1;
            } else if (ma == 1 && me < 2) {
                s2 = 1;
                s3 = 0;
            }
        } else if (s1 == 0) {
            if (ma == me) {
                s2 = 1;
                if (ma == 1) {
                    s3 = 0;
                } else if (ma == 2) {
                    s3 = 1;
                } else
                    s3 = 2;
            } else if (ma > 2) {
                s2 = 1;
                s3 = 2;
            } else if (ma == 2 && me <= 2) {
                s2 = 1;
                s3 = 1;
            } else if (ma == 1 && me <= 1) {
                s2 = 1;
                s3 = 0;
            } else if (me >= 3 && ma < 3) {
                s2 = 0;
                s3 = 2;
            } else if (me == 2 && ma < 2) {
                s2 = 0;
                s3 = 1
            } else if (me == 1 && ma < 1) {
                s2 = 0;
                s3 = 0;
            }
        }
        /*verificaciÃ³n de discapacidad*/
        var dis1 = $('#moderado');
        var dis2 = $('#grave');
        var dis3 = $('#muygrave');
        var totalfinal = 0;
        var incremento = 0;
        var porcentajedis = 0;
        var totalPension = 0;
        var totalfinal = 0;

        if (dis3[0].checked) {
            porcentajedis = discapacidad[ind][2];
            incremento = (sbu * porcentajedis) / 100;
        } else if (dis2[0].checked) {
            porcentajedis = discapacidad[ind][1];
            incremento = (sbu * porcentajedis) / 100;
        } else if (dis1[0].checked) {
            porcentajedis = discapacidad[ind][0];
            incremento = (sbu * porcentajedis) / 100;
        } else {
            porcentajedis = 0;
        }
        /** */
        var pensionCadaHijo = ((tabla[s1][s2][s3] / 100) * s) / nhijos;
        var totalPension = ((tabla[s1][s2][s3] / 100) * s).toFixed(2);
        var ph = pensionCadaHijo.toFixed(2);
        var nivel = parseInt(ind);
        nivel++;
        totalfinal = (parseFloat(totalPension) + parseFloat(incremento)).toFixed(2);
        $('#nivel').html('<p class="datos" style="font-size:1.1em">' + nivel + '</p>');
        $('#nhijos').html('<p class="datos" style="font-size:1.1em">' + nh + '</p>');
        // $('#porcentaje').html('<p class="datos" style="font-size:1.2em">' + tabla[s1][s2][s3] + '%</p>');
        $('#montototal').html('<p class="datos" style="font-size:1.1em">U$D ' + totalPension + ', este valor corresponde al (' + tabla[s1][s2][s3] + '%) de su salario</p>');
        if (porcentajedis != 0) {
            $('#montodis').show();
            $('#adicional').html('<p class="datos" style="font-size:1.2em">U$D ' + incremento + '<span> &nbsp esto corresponde al </span>(' + porcentajedis + '%) <span>de un Salario bÃ¡sico unificado</span></p>');
        } else {
            $('#montodis').hide();
            $('#adicional').html(' ');
        }
        $('#totaltotal').html('<p class="datos" style="font-size:1.1em">U$D ' + totalfinal + '</p>');
        // $('#montohijo').html('<p class="datos" style="font-size:1.2em">U$D ' + ph + '</p>');
    }

    $('.pinchar').on('click', function() {
        $('#tabla').fadeIn();
    });

    $('#cerrar').on('click', function(event) {
        $('#tabla').fadeOut();
    });
    // Control de seleccion checked
    var x = '';
    var cont = 0;
    var presmoderado = false;
    var presgrave = false;
    var presmuygrave = false;
    $('.marca').on('click', function() {

        x = $(this).attr('id');
        // alert(x);
        switch (x) {
            case 'moderado':
                // alert('presmoderado: ' + presmoderado);
                if (!presmoderado) {
                    presmoderado = true;
                    cont++;
                    // alert('suma');
                } else {
                    presmoderado = false;
                    cont--;
                    // alert('resta');
                }
                break;
            case 'grave':
                if (!presgrave) {
                    cont++;
                    presgrave = true;
                } else {
                    presgrave = false;
                    cont--;
                }
                break;
            case 'muygrave':
                if (!presmuygrave) {
                    cont++;
                    presmuygrave = true;
                } else {
                    presmuygrave = false;
                    cont--;
                }
                break;

            default:
                break;
        }
        // alert(cont);
    })
    var bloquea = function(x) {
        if (nh == 1) {
            if (x == 'moderado') {

            }
        }

    }
});
