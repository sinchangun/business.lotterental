/* ***** top_menu(sticky) 영역 ***** */

$(window).scroll(function(){
    let value = $(window).scrollTop();
    console.log(value)
    if(value>55){
        $(".t_menu").addClass("sticky")
        $(".c1_container").addClass("sticky")
    }else{
        $(".t_menu").removeClass("sticky")
        $(".c1_container").removeClass("sticky")
    }
})

/* ***** cont1_slide(slick) 영역 ***** */

$(".tmi_serach>img").click(function(){
    $(".tm_search").fadeIn()
})
$(".tmi_input_cancel").click(function(){
    $(".tm_search").fadeOut()
})

$(".tm_list>ul").mouseover(function(){
    $(".t_menu_hidden").show();
})
$(".tm_list>ul").mouseout(function(){
    $(".t_menu_hidden").hide();
})

$('.c1_slide_list').slick({
    infinite:true,
    autoplay:true,
    pauseOnHover:false,
    dots:true,
});

$(".c1_slide_pause").click(function(){
    $(".c1_slide_list").slick("slickPause")
    $(".c1_slide_pause").hide()
    $(".c1_slide_start").show()
})
$(".c1_slide_start").click(function(){
    $(".c1_slide_list").slick("slickPlay")
    $(".c1_slide_start").hide()
    $(".c1_slide_pause").show()
})

/* ***** cont3_product(Popular) 영역 ***** */

let currentIndex3 = 0;

$('.right_arrow').click(function () {
    currentIndex3++;
    let slidePosition3 = currentIndex3 * (-300) + "px";
    console.log(slidePosition3);
    $('.c3_container-total').animate({
        left: slidePosition3
    }, 500)
    if (currentIndex3 > 0 ){
        $('.left_arrow').show()
        $('.left_arrow_dis').hide()
    }else{
        $('.left_arrow').hide()
        $('.left_arrow_dis').show()
    }
    if (currentIndex3 < 6 ){
        $('.right_arrow').show()
        $('.right_arrow_dis').hide()
    }else{
        $('.right_arrow').hide()
        $('.right_arrow_dis').show()
    }
});

$('.left_arrow').click(function () {
    currentIndex3--;
    let slidePosition3 = currentIndex3 * (-300) + "px";
    console.log(slidePosition3);
    $('.c3_container-total').animate({
        left: slidePosition3
    }, 500)
    if (currentIndex3 > 0 ){
        $('.left_arrow').show()
        $('.left_arrow_dis').hide()
    }else{
        $('.left_arrow').hide()
        $('.left_arrow_dis').show()
    }
    if (currentIndex3 < 6 ){
        $('.right_arrow').show()
        $('.right_arrow_dis').hide()
    }else{
        $('.right_arrow').hide()
        $('.right_arrow_dis').show()
    }
});

/* ***** cont4_product(Recommend) 영역 ***** */

$(".c4_cont").hide().eq(0).show();

$(".c4_tab").click(function(){
    let index = $(this).index();
    $(".c4_tab").removeClass("active")
    $(".c4_tab").eq(index).addClass("active")

    $(".c4_cont").hide();
    $(".c4_cont").eq(index).show();
})

/* ***** footer toggle 영역 ***** */
let toggle = true;
$(".cf4_btn").click(function(){
    if(toggle == true){
        $(".cf4_btn").addClass("active")
        $(".cont_f4_toggle").addClass("active")
        toggle = false;
    }else{
        $(".cf4_btn").removeClass("active")
        $(".cont_f4_toggle").removeClass("active")
        toggle = true;
    }
})
