const imgTop= {
    "slideImg": ["slide0.jpg","slide1.jpg","slide2.jpg","slide3.jpg"]
}
$(function(){
    $(".slide-cir p").on("click", function(){
        no=$(this).index();
        $(".slide-wrap").attr("src", "./img/slide"+no.imgTop.slideImg[no])
    });

}); //jQuery end