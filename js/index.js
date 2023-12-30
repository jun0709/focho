$(document).ready(function() {
    function sl_init() {
        for(i=0; i<5; i++) {
            let item = `<div class="hash_slide hash_slide${i}"></div>`
            $(item).appendTo($('.container'));
            $(`.hash_slide${i}`).html(
                `
                    <div class="slide_title">
                        <h1>#요즘인기</h1>
                        <div class="show_more">
                            <a href="./search.html">자세히보기</a>
                        </div>
                    </div>
                    <div class="slide_area">
                        <div class="slide_btn slide_prev_btn slide_prev_btn${i}">
                            <img src="./img/icon/slide_prev.png" alt="이전버튼">
                        </div>
                        <div class="slide_con slide_con${i}"></div>
                        <div class="slide_btn slide_next_btn slide_next_btn${i}">
                            <img src="./img/icon/slide_next.png" alt="다음버튼">
                        </div>
                    </div>`
            );
            for(j=0; j<12;/*개수만큼*/ j++) {
                $(`<div class="slide_item slide_item${i}"></div>`).appendTo(`.slide_con${i}`);
            }
        }
        for(i=1;i<11;i++){
            $('.slide_item').html(
                `<div class="slide_item_img">
                    <a href="./item.html">
                        <img src="./img/food/asian/asian${i}" alt="음식사진">
                        <div class="restaurant_info_pan">
                            <h3>가게명</h3>
                            <p>
                                <span>무슨동</span>
                                <span>#음식종류</span>
                            </p>
                            <div class="info_pan_line"></div>
                            <div class="info_detail_box">
                                <div class="star_rating">
                                    <img src="./img/icon/star.png" alt="별">
                                    <span>4.4</span>
                                </div>
                                <div class="pan_like">
                                    <img src="./img/icon/heart.png" alt="비어있는 하트">
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide_item_title">가게명</div>`
            );
        }
        
    }
    sl_init();




    let item_size = $('.slide_item').outerWidth();
    function sl_seat(num) {
        for(i=0; i<$(`.slide_item${num}`).length; i++) {
            $(`.slide_item${num}`).eq(i).css({left: 40 + (285) * i});
        }
    }
    let sl_count0 = 0;
    sl_seat(0);
    let sl_count1 = 0;
    sl_seat(1);
    let sl_count2 = 0;
    sl_seat(2);
    let sl_count3 = 0;
    sl_seat(3);
    let sl_count4 = 0;
    sl_seat(4);
    // $(window).resize(function(){ 
    //     if (window.innerWidth > 1350) {
    //         console.log("1");
    //     }
    //     else if(window.innerWidth <= 1350) {
    //         console.log("2");
    //     }
        
    // }).resize(); 

    let slide_time = 500;
    $(document).on('click', '.slide_next_btn0', function() {
        none_btn();
        $('.slide_item0').animate({
            left: "-=" + (285) + "px"
        }, slide_time);

        if(sl_count0 >= 1) {
            $('.slide_item0').eq(sl_count0 % $('.slide_item0').length - 1).animate({
                left: 40 + (285) * ($('.slide_item0').length - 2)
            }, 0);
        }

        sl_count0 += 1;
    });
    $(document).on('click', '.slide_prev_btn0', function() {
        if(sl_count0 > 0) {
            none_btn();

            if(sl_count0 >= 2) {
                $('.slide_item0').eq((sl_count0 - 2) % $('.slide_item0').length).animate({
                    left: (-item_size * 2)
                }, 0);
            }

            $('.slide_item0').animate({
                left: "+=" + (285) + "px"
            }, slide_time);
            
            sl_count0 -= 1;
        }
    });
    $(document).on('click', '.slide_next_btn1', function() {
        none_btn();
        $('.slide_item1').animate({
            left: "-=" + (285) + "px"
        }, slide_time);

        if(sl_count1 >= 1) {
            $('.slide_item1').eq(sl_count1 % $('.slide_item1').length - 1).animate({
                left: 40 + (285) * ($('.slide_item1').length - 2)
            }, 0);
        }

        sl_count1 += 1;
    });
    $(document).on('click', '.slide_prev_btn1', function() {
        if(sl_count1 > 0) {
            none_btn();

            if(sl_count1 >= 2) {
                $('.slide_item1').eq((sl_count1 - 2) % $('.slide_item1').length).animate({
                    left: (-item_size * 2)
                }, 0);
            }

            $('.slide_item1').animate({
                left: "+=" + (285) + "px"
            }, slide_time);
            
            sl_count1 -= 1;
        }
    });
    $(document).on('click', '.slide_next_btn2', function() {
        none_btn();
        $('.slide_item2').animate({
            left: "-=" + (285) + "px"
        }, slide_time);

        if(sl_count2 >= 1) {
            $('.slide_item2').eq(sl_count2 % $('.slide_item2').length - 1).animate({
                left: 40 + (285) * ($('.slide_item2').length - 2)
            }, 0);
        }

        sl_count2 += 1;
    });
    $(document).on('click', '.slide_prev_btn2', function() {
        if(sl_count2 > 0) {
            none_btn();

            if(sl_count2 >= 2) {
                $('.slide_item2').eq((sl_count2 - 2) % $('.slide_item2').length).animate({
                    left: (-item_size * 2)
                }, 0);
            }

            $('.slide_item2').animate({
                left: "+=" + (285) + "px"
            }, slide_time);
            
            sl_count2 -= 1;
        }
    });
    $(document).on('click', '.slide_next_btn3', function() {
        none_btn();
        $('.slide_item3').animate({
            left: "-=" + (285) + "px"
        }, slide_time);

        if(sl_count3 >= 1) {
            $('.slide_item3').eq(sl_count3 % $('.slide_item3').length - 1).animate({
                left: 40 + (285) * ($('.slide_item3').length - 2)
            }, 0);
        }

        sl_count3 += 1;
    });
    $(document).on('click', '.slide_prev_btn3', function() {
        if(sl_count3 > 0) {
            none_btn();

            if(sl_count3 >= 2) {
                $('.slide_item3').eq((sl_count3 - 2) % $('.slide_item3').length).animate({
                    left: (-item_size * 2)
                }, 0);
            }

            $('.slide_item3').animate({
                left: "+=" + (285) + "px"
            }, slide_time);
            
            sl_count3 -= 1;
        }
    });
    $(document).on('click', '.slide_next_btn4', function() {
        none_btn();
        $('.slide_item4').animate({
            left: "-=" + (285) + "px"
        }, slide_time);

        if(sl_count4 >= 1) {
            $('.slide_item4').eq(sl_count4 % $('.slide_item4').length - 1).animate({
                left: 40 + (285) * ($('.slide_item4').length - 2)
            }, 0);
        }

        sl_count4 += 1;
    });
    $(document).on('click', '.slide_prev_btn4', function() {
        if(sl_count4 > 0) {
            none_btn();

            if(sl_count4 >= 2) {
                $('.slide_item4').eq((sl_count4 - 2) % $('.slide_item4').length).animate({
                    left: (-item_size * 2)
                }, 0);
            }

            $('.slide_item4').animate({
                left: "+=" + (285) + "px"
            }, slide_time);
            
            sl_count4 -= 1;
        }
    });


    function none_btn() {
        $('.slide_btn').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.slide_btn').css({pointerEvents:'auto'});
        }, slide_time);
    }

    $('.slide_next_btn').hover(function() {
        $(this).children().prop('src', './img/icon/slide_next_hover.png');
    },function() {
        $('.slide_next_btn').children().prop('src', './img/icon/slide_next.png');
    });

    $('.slide_prev_btn').hover(function() {
        $(this).children().prop('src', './img/icon/slide_prev_hover.png');
    },function() {
        $('.slide_prev_btn').children().prop('src', './img/icon/slide_prev.png');
    });

    
    $(document).on('click', '.roulette_btn', function() {
        $('.roulette_pan').css({
            display: "block"
        });
    });
    $(document).on('click', '.roulette_close_btn', function() {
        $('.roulette_pan').css({
            display: "none"
        });
    });

    
});

const $c = document.querySelector("canvas");
const ctx = $c.getContext(`2d`);
const menuAdd = document.querySelector('#menu_add');

const product = ["한식","중식","양식","일식","분식","아시안","패스트푸드","프레시","카페·디저트"];

const colors = [];

const newMake = () => {
    const [cw, ch] = [$c.width / 2, $c.height / 2];
    const arc = Math.PI / (product.length / 2);
    for (let i = 0; i < product.length; i++) {
        ctx.beginPath();
        if(colors.length == 0){
            for(var l=0; l<product.length; l++){
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                colors.push("rgb(" + r + "," + g + "," + b + ")");
            }
        }
        ctx.fillStyle = colors[i % (colors.length)];
        ctx.moveTo(cw, ch);
        ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
        ctx.fill();
        ctx.closePath();
    }

    ctx.fillStyle = "#fff";
    ctx.font = "18px Noto_Sans_KR";
    ctx.textAlign = "center";

    for (let i = 0; i < product.length; i++) {
        const angle = (arc * i) + (arc / 2);

        ctx.save();

        ctx.translate(
            cw + Math.cos(angle) * (cw - 50),
            ch + Math.sin(angle) * (ch - 50)
        );

        ctx.rotate(angle + Math.PI / 2);

        product[i].split(" ").forEach((text, j) => {
            ctx.fillText(text, 0, 30 * j);
        });

        ctx.restore();
    }
}

const rotate = () => {
    $c.style.transform = `initial`;
    $c.style.transition = `initial`;
    const alpha = Math.floor(Math.random()*100);

    setTimeout(() => {    
        const ran = Math.floor(Math.random() * product.length);
        const arc = 360 / product.length;
        const rotate = (ran * arc) + 3600 + (arc * 3) - (arc/4) + alpha;
        $c.style.transform = `rotate(-${rotate}deg)`;
        $c.style.transition = `2s`;

    }, 1);
};


function add(){
    if(menuAdd.value != undefined && menuAdd.value != ""){
        product.push(menuAdd.value);
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        colors.push("rgb(" + r + "," + g + "," + b + ")");
        newMake();
        menuAdd.value="";
    }
    else{
        alert("메뉴를 입력한 후 버튼을 클릭 해 주세요");
    }
}

newMake();