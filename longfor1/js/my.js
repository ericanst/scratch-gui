// JavaScript Document
$(function(){

	$(".left ul li").click(function(){
		//alert(m)
		var m = $(this).index();
		$(".right01").hide();
		$(".right01").eq(m).show();
		$(this).addClass("act").siblings().removeClass("act")
		$(this).children("img").attr({"src":"images/meau01.png"});
		$(this).siblings().children("img").attr({"src":"images/meau01-1.png"})

	})

	$(".dd02").eq(0).show();
	$("#img img").eq(0).attr({"src":"images/dd01.png"});
	$(".dd01 area").click(function(){
		//alert(a)
		var a = $(this).index()
		var b = $(this).index()+1;	
		$(".dd02").eq(a).show();
		//alert()
		$("#img img").attr({"src":"images/dd0"+b+".png"});
		})
	$(".right .dd p span").click(function(){
		$(".dd02").hide();
		$("#img img").attr({"src":"images/ddqj01.png"});
	})
	
	/*$(".dd01 area").hover(function(){
		var b = $(this).index()+1;	
		$("#img img").attr({"src":"images/dd0"+b+".png"});
		},
	
	function(){
		$("#img img").attr({"src":"images/ddqj01.png"});
		})*/
	
	/*$(".dd01 area").mouseover(function(){
		var a = $(this).index()
		var b = $(this).index()+1;	
		$(".dd02").eq(a).show();
		//alert()
		$("#img img").attr({"src":"images/dd0"+b+".png"});
		})
	$(".dd01 area").mouseout(function(){
		var a = $(this).index()	
		$(".dd02").hide();
		$("#img img").attr({"src":"images/ddqj01.png"});
		})*/


	$(".more").eq(0).slideDown();
    $(".job01").eq(0).children("img").attr({"src":"images/down.png"})
	$(".job01").click(function(){
		
		$(".job01").children("img").attr({"src":"images/up.png"})
		$(".job01").next(".more").slideUp();
		if($(this).next(".more").is(":hidden")){
			$(this).next(".more").slideDown().siblings(".more").slideUp();
			$(this).children("img").attr({"src":"images/down.png"})
		}else{
			$(this).next(".more").slideUp();
			$(this).children("img").attr({"src":"images/up.png"})
		}
	})


			
})
