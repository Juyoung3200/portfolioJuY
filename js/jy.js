$(document).ready(function(){

    // nav color
    $("ul li a").click(function(){  
        var direction = $(this).attr("href");   
        $('body').css('color','#eee');
        scrolling( direction ); 
        return false;   
    });
    $("ul li:first-child a").click(function(){  
        var direction = $(this).attr("href");   
        $('body').css('color','#333');
        scrolling( direction ); 
        return false;   
    });

    // scroll
    var speed = 1500;   
    function scrolling(obj){
        if (!obj){ 
            $('html, body').animate({scrollTop:0},speed);
        }else{
            var posTop = $(obj).offset().top;
            $('html, body').animate({scrollTop:posTop}, speed ) 
        }
    };

    // wheel
    var $html = $("html");

    var page = 1;
    
    var lastPage = $("section").length;
    
    $html.animate({scrollTop:0},10);

    $(window).on("wheel", function(e){

        if($html.is(":animated")) return;
    
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
            page++;


        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;

            page--;


        }

        var posTop = (page-1) * $(window).height();
        
        $html.animate({scrollTop : posTop});
    
    });

    
    

});