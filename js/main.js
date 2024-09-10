    // full page
$(function(){
    $('#chaeeun').fullpage({
        sectionsColor: ['black', 'black','black','black','black','black'],
        navigation : true,
        responsiveWidth: 769,
        //go top이 fade로 나타나고 사라지게
        afterLoad: function(anchorLink, index){
            if(index >= 2){
                $('#fp-nav ul li').find('a span').addClass('on')
            }else{
                $('#fp-nav ul li').find('a span').removeClass('on')
            }
        }
    })

    // photo popup
    $('.photoslide .swiper-slide').click(function(){
        let slideId = $(this).attr('id');
        $('.pop-photo[data-slide="' + slideId + '"]').show(); 
    });
    
    $('.pop-photo').click(function(){
        $(this).hide();
    });

    // video popup
    $('.container .item').click(function(){
        let idx = $(this).index()
        $('.pop-vid .popup').eq(idx).show()
    })
    $('.pop-vid .popup').click(function(){
        $('.pop-vid .popup').hide()
    })
})

function moveS(event, sectionIndex) {
    event.preventDefault();
    $.fn.fullpage.moveTo(sectionIndex);
    }

