$(document).ready(function () {
    ////////////////////////list option active/ // ///////////////////////////////        
            $(".proflie ul li").click(function () {
                $(this).addClass('active').siblings().removeClass('active');

            });

            $(".proflie  li a").click(function () {
                $(this).addClass('active-icon').siblings().removeClass('active-icon');
            });
    
    ///////////////////////show ans  hide main div //////////////////////////////////////////////
            $('#show-oredrers').on('click', function () {
                $(".show-one,.show-two,.show-three,.show-four").hide(200);
                $(".show").show(200);


            });
            $('#show-wish').on('click', function () {
                $(".show,.show-two,.show-three,.show-four").hide(200);
                $(".show-one").show(200);
            });

            $("#addresses").on('click', function () {
                $(".show,.show-one,.show-three,.show-four").hide(200);
                $(".show-two").show(200);
            });

            $("#account-sitting").on('click', function () {
                $(".show,.show-one,.show-two,.show-four").hide(200);
                $(".show-three").show(200);
            });

            $("#recommend").on('click', function () {
                $(".show,.show-one,.show-two,.show-three").hide(200);
                $(".show-four").show(200);
            });       
    
});