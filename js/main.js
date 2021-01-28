$(document).ready(function(){
    /*아코디언메뉴*/
    // 첫번째 dd 가 아닌것은 너비를 0으로 해서 안보이게 합니다.
    $("dd:not(:first)").css("width","0px");
    
    // 첫번째 dt 태그의 span 에 selected 클래스를 추가합니다.펼쳐져 있는 스타일 추가.
    $("dt:first span").addClass("selected");
    
    // dt 를 클릭하면
    $("dl dt").click(function(){
        // 만약 클릭된 라벨 즉 인접한 dd 의 넓이가 0으로 안보이면 다음코드를 진행.
        if($("+dd",this).css("width")=="0px"){
            // dt 태그중에서 selected 클래스를 가지고 있는 dd 태그의 폭을 0으로 만듭니다.
            // 즉 선택되어 있는 상태인 dt태그의 다음 dd 태그의 폭을 0으로 해서 패널이 닫힙니다.
            $("dt:has(.selected) +dd").animate({"width":"0px"}); 
            
            // 같은식을로 dd 의 폭을 82%로 펼칩니다.
            $("+dd",this).animate({"width":"82%"});
            
            // 클릭된 라벨을 선택된 상태로 만들기위해 모든 selected 클래스를 삭제합니다.
            $("dt span").removeClass("selected");
            
            // 그리고 다시 현재의 dd 태그의 span 에만 selected 클래스를 추가해서 현재의 라벨만 클릭된 요소라는것을 보여줌.
            $("span",this).addClass("selected");
        }
        
    // 마찬가지로 mouseover, mouseout 으로 마우스 롤오버 처리.
    }).mouseover(function(){ $("span",this).addClass("over"); }).mouseout(function(){ $("span",this).removeClass("over"); });
    
    /*searchBar fixed*/
    //스크롤이벤트
    $(window).scroll(function(){
        var sc_top=$(this).scrollTop();
        var sc_left=$(this).scrollLeft();

        if(sc_top>0){
            $('.searchBar').css('display','none');
        }else if(sc_top==0){
            $('.searchBar').css('display','block');
        }
        
        if(sc_top>1900){
            $('.gnb').css('display','none');
        }else if(sc_top>0){
            $('.gnb').css('display','block');
        }
    })
    
    /*페이지3 탭 제이쿼리*/
    //When page loads
    $('.tab_content').hide();
    $('ul.tabs li:first').addClass('active').show();
    $('.tab_content:first').show();
    
    //On click event
    $('ul.tabs li').click(function(){
        $('ul.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();
        
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    })
    
    //slick (html에 이미 불러놓은 화살표이미지 있을 때)
    $('.page1','.page2').slick({
        prevArrow:$('.arrowU','.arrowL'),
        nextArrow:$('..arrowD','.arrowD'),
    });
    
    
})