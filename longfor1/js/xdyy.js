	var jsReady = false;
    var isPC = true;
     function isReady() {
         return jsReady;
     }
	 //页面加载完初始化
     function pageInit() {
         jsReady = true;
        /* if(swfeles==null)
             swfeles=document.getElementById("flashcontent");*/
     }
    /*function getJSURL(clickId){
        var strUrl="";
        switch(clickId)
        {
            //了解诺华
            case 1:
                strUrl="aboutNH_global.html";
                break;
            //杨帆招募
            case 2:
                strUrl="aboutNH_recruit.html";
                break;
            //成长故事
            case 3:
                strUrl="growingUpStory.html";
                break;
            //校园行程
            case 4:
                strUrl="campusTrip.html";
                break;
            //官微
            case 5:
                strUrl="#";
                break;
        }
        return strUrl;
    }*/
     window.onload=function(){
        $('.loading').hide();
        if(isPC){
            var obj = document.getElementById("flashcontent");
            obj.style.display="block";
            //$('#wrap').css('display','none');
            var forcesize = new SWFForceSize(obj, 1000, 650);//最小屏幕尺寸可自行更改
         	pageInit();
        }else{
            //$('#wrap').css('display','block');
        }
     };



 