$(document).ready(function(){
    let init_count = 0;

    let h_height = $('.header').height();
    $(window).scroll(function(){
        if((h_height + $(window).scrollTop()) >= $('.restaurant_list_L_total').offset().top) {
            $('.restaurant_L_count').css ({
                position: 'fixed',
                top: 100
            });
        }
        else if((h_height + $(window).scrollTop()) < $('.restaurant_list_L_total').offset().top) {
            $('.restaurant_L_count').css ({
                position: 'relative',
                top:0
            });
        }
        if(h_height + $(window).scrollTop() < 350) {
            $('.restaurant_L_count').css ({
                position: 'relative',
                top:0
            });
        }


        let res_R_total_o_top = $('.restaurant_R_total').offset().top;
        let res_R_total_o_bot = res_R_total_o_top + $('.restaurant_R_total').height();
        if(init_count < 60/*아이템개수*/) {
            if($(window).scrollTop() + $(window).height() >= res_R_total_o_bot + 10 ) {
                product_init();
            }
        }
    });

    
    res_l_init();
    let interval;
    let curr_idx=0;
    function auto_slide() {
        let res_count = $('.restaurant_L').length;
        let timer = 1000;
        interval = setInterval(function(){
            $('.restaurant_L').eq(curr_idx % res_count).animate({
                top: '-100%',
            }, timer, "linear")
            $('.restaurant_L').eq((curr_idx+1) % res_count).css({
                top: '100%'
            }, 0).animate({
                top:'0'
            }, timer, "linear")

            curr_idx+=1;
        }, timer + 1000)
    }
    auto_slide();
    $('.restaurant_L').hover(function(){
        clearInterval(interval)
    }, function(){
        auto_slide();
    });


    function product_init() {
        for(i=init_count; i<init_count + 6; i++) {
            let item = `<div class="restaurant_R restaurant_R${i}"></div>`
            $(item).appendTo($('.restaurant_R_total'));
        }
        $('.restaurant_R').html(`<a href="./item.html">
                <div class="restaurant_list_img">
                    <img src="" alt="">
                </div>
                <p>가게명</p>
                <div class="restaurant_list_heart">
                    <img src="./img/icon/icon_heart.jpg" alt="">
                    <span>개수</span>
                </div>
                <div class="name_border"></div>
                <div class="restaurant_list_num">
                    <img src="./img/icon/icon_num.jpg" alt="">
                    <span>전화번호</span>
                </div>
                <div class="restaurant_list_place">
                    <img src="./img/icon/icon_place.png" alt="">
                    <span>강남구 식당 상세주소</span>
                </div>
                <div class="restaurant_list_hash">
                    <span>#분류 #해시태그 #목적</span>
                </div>
            </a>`);
        init_count += 6;
    }
    product_init();

    function res_l_init() {
        for(i=1; i<6; i++) {
            $(`<div class="restaurant_L restaurant_list_L${i}"></div>`).appendTo($('.restaurant_L_count'));
        }
        $('.restaurant_L').html(`<img src="" alt="">`);
    }
});