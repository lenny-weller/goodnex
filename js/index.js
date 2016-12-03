$(document).ready(function(){
//  $(".d1").hover(function(){
//  $(".d1 ul").css("display","block");
//  },function(){
//  $(".d1 ul").css("display","none");
//  });	

    $(".drop").on("mouseover",function(){
   	      a=$(".drop").index($(this))
        $(".drop ul").eq(a).css("display","block");
    })
        $(".drop").on("mouseout",function(){
        $(".drop ul").eq(a).css("display","none");
   })
        
        
        
    $(".fixT").on("mouseover",function(){
   	      a=$(".fixT").index($(this))
        $(".fixT ul").eq(a).css("display","block");
    })
        $(".fixT").on("mouseout",function(){
        $(".fixT ul").eq(a).css("display","none");
   })    
        
        

	var head=$(".head")	
	 $(window).scroll(function(){   
	  var obj=document.body.scrollTop?document.body:document.documentElement;
        if($(".banner").offset().top<=obj.scrollTop){        
          head.css("display","block")
        }
        else{        
           head.css("display","none")
        }
    })
	

 	var lis=$(".choose .ch_tab ul li");
 	var zz=$("span",lis);
 	ch_con=$(".ch_con")
 	lis.eq(0).css({"background":"#fff","border-top-color":"#79be0b"});
 	zz.eq(0).css("display","block")
 	ch_con.eq(0).css("display","block")
 	lis.click(function(){
 		lis.css({"background":"#fafafa","border-top-color":"#ebebeb"});
 		ch_con.css("display","none")
 		var index=lis.index($(this))
 		lis.eq(index).css({"background":"#fff","border-top-color":"#79be0b"});
 		zz.eq(index).css("display","block")
 		ch_con.eq(index).css("display","block")
 	})
 	
 	//轮播图
            var ban=$(".banner .ban")
            var banner=$(".banner")[0];
            
            var ban_prev=$("#banner .prev")[0];
            var ban_next=$("#banner .next")[0];
            var t=setInterval(move, 4000);

            var now=0;
            var next=0;

            function move(){
                next=now+1;
                if(next>=ban.length){
                    next=0;
                }
                
                ban.eq(now).css("display","none").end().eq(next).css("display","block")
                now=next;
            }

            banner.onmouseover=function(){
                clearInterval(t);
            }
            banner.mouseout=function(){
                    t=setInterval(move,4000);
            }

            ban_prev.onclick=function(){
                next=now-1;
                 if(next<0){
                    next=ban.length-1;
                }

                ban.eq(now).css("display","none").end().eq(next).css("display","block")
                now=next;
            }

            ban_next.onclick=function(){
                move();
            }

})




