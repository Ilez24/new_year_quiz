let quantity = 1;
$(function() {

    /* Кнопка В отпуск */

    $('.button-go').click(function() {
        $('.test-screen').addClass('d-block');
        $('.hero-screen').addClass('d-none');
    });


    /* Выбор ответа */

    $(".test-screen__block__info__item").on("click", function() {
        // Удаляем классы active
        $(".test-screen__block__info__item").removeClass('test-screen__select_active');
        // Добавляем классы active
        $(this).addClass('test-screen__select_active');
    })


    /*выборка элемента из вопросов*/

    value1 = "", value2 = "", value3 = "", value4 = "", value5 = "", value6 = "", value7 = "";
    $('#step1 .test-screen__block__info__item').on('click', function() {
        value1 = "";
        value1 += $(this).attr("data-value");
    });

    $('#step2 .test-screen__block__info__item').on('click', function() {
        value2 = "";
        value2 += $(this).attr("data-value");
    });
    $('#step3 .test-screen__block__info__item').on('click', function() {
        value3 = "";
        value3 += $(this).attr("data-value");
    });
    $('#step4 .test-screen__block__info__item').on('click', function() {
        value4 = "";
        value4 += $(this).attr("data-value");
    });
    $('#step5 .test-screen__block__info__item').on('click', function() {
        value5 = "";
        value5 += $(this).attr("data-value");
    });
    $('#step6 .test-screen__block__info__item').on('click', function() {
        value6 = "";
        value6 += $(this).attr("data-value");
    });
    $('#step7 .test-screen__block__info__item').on('click', function() {
        value7 = "";
        value7 += $(this).attr("data-value");
    });


    /* Кнопка назад */
    $('.test-screen_button1').click(function(e) {
        e.preventDefault();
        quantity--;
        $('.test-screen__block_active').prev().addClass('test-screen__block_active');
        $('.test-screen__block_active:last').removeClass('test-screen__block_active');
    });


    /* Кнопка дальше */

    $('.test-screen_button2').click(function(e) {
        e.preventDefault();
        $('.test-screen__block_active').next().addClass('test-screen__block_active');
        $('.test-screen__block_active:first').removeClass('test-screen__block_active');
        quantity++;

        if (quantity == 8) {
            $('.test-screen').removeClass('d-block');
            $('.result-screen').addClass('d-block');
            let res_arr = [];
            res_arr.push(value1, value2, value3, value4, value5, value6, value7);
            res_arr.sort();
            $('.test-screen__block__header_question').text(res_arr); /*delete*/

            let num1 = 0;
            let num2 = 0;
            let num3 = 0;
            let num4 = 0;
            let choose = [];
            for (let cikl = 0; cikl < res_arr.length; cikl++) {
                if (res_arr[cikl] == 1) {
                    num1++;
                } else if (res_arr[cikl] == 2) {
                    num2++;
                } else if (res_arr[cikl] == 3) {
                    num3++;
                } else if (res_arr[cikl] == 4) {
                    num4++;
                }
            }
            choose.push(num1, num2, num3, num4);
            let maxIndex = choose.indexOf(Math.max.apply(null, choose));
            maxIndex++;
            maxIndex++;

            if (maxIndex == 0) {
                maxIndex = 1;
            }

            $('.result-screen__block:nth-child(' + maxIndex + ')').addClass('result-screen__block_active');
        }
    });


    // Активация видео в модальном окне

    $('.result-screen__play1').click(function(e) {
        e.preventDefault();
        $('#exampleModal1').arcticmodal();
    });
    $('.result-screen__play2').click(function(e) {
        e.preventDefault();
        $('#exampleModal2').arcticmodal();
    });
    $('.result-screen__play3').click(function(e) {
        e.preventDefault();
        $('#exampleModal3').arcticmodal();
    });
    $('.result-screen__play4').click(function(e) {
        e.preventDefault();
        $('#exampleModal4').arcticmodal();
    });


    /* Параллакс от движения мыши */
    if ($(window).width() > 1201) {
        $('body').parallax({
            'elements': [{
                'selector': '.header-amimate1',
                'properties': {
                    'x': {
                        'left': {
                            'initial': 0,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': true
                        }
                    },
                    'y': {
                        'bottom': {
                            'initial': -100,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': true
                        }
                    }
                }
            }]
        });
    }
    if ($(window).width() > 1201) {
        $('body').parallax({
            'elements': [{
                'selector': '.header-amimate2',
                'properties': {
                    'x': {
                        'left': {
                            'initial': 60,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': false
                        }
                    },
                    'y': {
                        'bottom': {
                            'initial': 70,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': false
                        }
                    }
                }
            }]
        });
    }

    if ($(window).width() > 1201) {
        $('body').parallax({
            'elements': [{
                'selector': '.header-amimate3',
                'properties': {
                    'x': {
                        'left': {
                            'initial': -1500,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': true
                        }
                    },
                    'y': {
                        'bottom': {
                            'initial': -80,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': true
                        }
                    }
                }
            }]
        });
    }
    if ($(window).width() > 1201) {
        $('body').parallax({
            'elements': [{
                'selector': '.header-amimate4',
                'properties': {
                    'x': {
                        'left': {
                            'initial': 1700,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': false
                        }
                    },
                    'y': {
                        'bottom': {
                            'initial': 70,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': false
                        }
                    }
                }
            }]
        });
    }

    if ($(window).width() > 1201) {
        $('body').parallax({
            'elements': [{
                'selector': '.header-amimate5',
                'properties': {
                    'x': {
                        'left': {
                            'initial': -1600,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': true
                        }
                    },
                    'y': {
                        'bottom': {
                            'initial': -80,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': true
                        }
                    }
                }
            }]
        });
    }

    if ($(window).width() > 1201) {
        $('body').parallax({
            'elements': [{
                'selector': '.header-amimate6',
                'properties': {
                    'x': {
                        'left': {
                            'initial': -250,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': true
                        }
                    },
                    'y': {
                        'bottom': {
                            'initial': -70,
                            'multiplier': 0.04,
                            'unit': 'px',
                            'invert': true
                        }
                    }
                }
            }]
        });
    }


})