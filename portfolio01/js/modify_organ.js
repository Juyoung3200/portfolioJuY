$(document).ready(function(){

// 동정일자 달력 날짜 선택

$('#decideDate').datepicker({
    format: "yyyy-mm-dd",	//데이터 포맷 형식(yyyy : 년 mm : 월 dd : 일 )
    startDate: '-5y',	//달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주)
    endDate: '+5y',	//달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
    autoclose : true,	//사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
    calendarWeeks : false, //캘린더 옆에 몇 주차인지 보여주는 옵션 기본값 false 보여주려면 true
    clearBtn : true, //날짜 선택한 값 초기화 해주는 버튼 보여주는 옵션 기본값 false 보여주려면 true
    datesDisabled : ['2019-06-24','2019-06-26'],//선택 불가능한 일 설정 하는 배열 위에 있는 format 과 형식이 같아야함.
    daysOfWeekDisabled : [0,6],	//선택 불가능한 요일 설정 0 : 일요일 ~ 6 : 토요일
    disableTouchKeyboard : false,	//모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
    immediateUpdates: false,	//사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
    multidate : false, //여러 날짜 선택할 수 있게 하는 옵션 기본값 :false 
    multidateSeparator :",", //여러 날짜를 선택했을 때 사이에 나타나는 글짜 2019-05-01,2019-06-01
    templates : {
        leftArrow: '&laquo;',
        rightArrow: '&raquo;'
    }, //다음달 이전달로 넘어가는 화살표 모양 커스텀 마이징 
    showWeekDays : true ,// 위에 요일 보여주는 옵션 기본값 : true
    title: "",	//캘린더 상단에 보여주는 타이틀
    todayHighlight : true ,	//오늘 날짜에 하이라이팅 기능 기본값 :false 
    toggleActive : false,	//이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
    weekStart : 0 ,//달력 시작 요일 선택하는 것 기본값은 0인 일요일 
    language : "ko",	//달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
    
    });//datepicker end
    
    // 채집일자 달력 날짜 선택
    
    $('#collectDate').datepicker({
    format: "yyyy-mm-dd",	//데이터 포맷 형식(yyyy : 년 mm : 월 dd : 일 )
    startDate: '-5y',	//달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주)
    endDate: '+5y',	//달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
    autoclose : true,	//사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
    calendarWeeks : false, //캘린더 옆에 몇 주차인지 보여주는 옵션 기본값 false 보여주려면 true
    clearBtn : true, //날짜 선택한 값 초기화 해주는 버튼 보여주는 옵션 기본값 false 보여주려면 true
    datesDisabled : ['2019-06-24','2019-06-26'],//선택 불가능한 일 설정 하는 배열 위에 있는 format 과 형식이 같아야함.
    daysOfWeekDisabled : [0,6],	//선택 불가능한 요일 설정 0 : 일요일 ~ 6 : 토요일
    disableTouchKeyboard : false,	//모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
    immediateUpdates: false,	//사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
    multidate : false, //여러 날짜 선택할 수 있게 하는 옵션 기본값 :false 
    multidateSeparator :",", //여러 날짜를 선택했을 때 사이에 나타나는 글짜 2019-05-01,2019-06-01
    templates : {
        leftArrow: '&laquo;',
        rightArrow: '&raquo;'
    }, //다음달 이전달로 넘어가는 화살표 모양 커스텀 마이징 
    showWeekDays : true ,// 위에 요일 보여주는 옵션 기본값 : true
    title: "",	//캘린더 상단에 보여주는 타이틀
    todayHighlight : true ,	//오늘 날짜에 하이라이팅 기능 기본값 :false 
    toggleActive : false,	//이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
    weekStart : 0 ,//달력 시작 요일 선택하는 것 기본값은 0인 일요일 
    language : "ko",	//달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
    
    });//datepicker end
    
    //실물자원보유 N일 경우 미보유 사유 적는 input 활성화
    $("#select2").change(function () {
      var result = $("#select2 option:selected").val();
      if (result == "N") {
        $("#hideInput1").show();
      } else {
        $("#hideInput1").hide();
      }
    });
    
    //반입내용에 기타 선택시에만 인풋창 활성화 + 인풋창 필수작성
    $("select[name=select4]").bind("change", function () {
      val = $(this).val();
      if (val === "기타") {
        $("#input1").attr({"disabled":false, "required":true});
      } else {
        $("#input1").attr("disabled", true);
        $("input[id='input1']").val("");
      }
    });
    
    // 표본 유형에 따른 인풋창 변동
    $("#select6").change(function () {
      var value = $("select[name=select6] option:selected").text();
      if (value == "석엽표본") {
        $(".hideInputBox3").css("display", "block");
        $(".hideInputBox2").css("display", "none");
        $("#input14").attr("disabled", false);
        $("#input15").attr("disabled", true);
        $("#hideSelect1").css("display", "none");
        $("#input14").css("display", "block");
        $("#input13").val("");
        $("#input14").val("");
        $("#input15").val("");
        $("#hideInput3").val("");
      } else if (value == "슬라이드표본") {
        $(".hideInputBox2").css("display", "block");
        $(".hideInputBox3").css("display", "none");
        $("#input15").attr("disabled", false);
        $("#input14").attr("disabled", true);
        $("#hideSelect1").css("display", "none");
        $("#input14").css("display", "block");
        $("#input13").val("");
        $("#input14").val("");
        $("#input15").val("");
        $("#hideInput2").val("");
      } else if (value == "액침표본") {
        $("#hideInput2").val("");
        $("#input13").val("");
        $("#input15").val("");
        $("#input15").attr("disabled", true);
        $(".hideInputBox3").css("display", "none");
        $("#input14").css("display", "none");
        $("#hideSelect1").css("display", "block");
      } else if (value == "기타") {
        $("#input14").css("display", "block");
        $("#input14").attr("disabled", true);
        $("#input15").attr("disabled", false);
        $("#hideSelect1").css("display", "none");
        $(".hideInputBox2").css("display", "none");
        $(".hideInputBox3").css("display", "none");
        $("#input13").val("");
        $("#input14").val("");
        $("#input15").val("");
      } else {
        $(".hideInputBox2").css("display", "none");
        $(".hideInputBox3").css("display", "none");
        $("#hideSelect1").css("display", "none");
        $("#input14").css("display", "block");
        $("#input14").attr("disabled", false);
        $("#input15").attr("disabled", true);
        $("#input13").val("");
        $("#input14").val("");
        $("#input15").val("");
      }
    });
    
     // 국가 선택 select
     $("#select10").select2();
    
     //국가 선택에 따른 인풋창 활성화/비활성화 + required 활성화/비활성화
    
     $("#select10").change(function () {
       var value = $("select[name=select10] option:selected").text();
    
       if (value == "공해상") {
         $("#hideInput4").css("display","block");
         $("#select11").css("display","none");
         $("#input25").attr({"disabled":true, "required":false}).val("");
         $("#input26").attr({"disabled":true, "required":false}).val("");
         $("#input27").attr({"disabled":true, "required":false}).val("");
         $("#input28").attr({"disabled":true, "required":false}).val("");
         $("#input29").attr({"disabled":true, "required":false}).val("");
         $("#addressLabel").empty();
         $("#seaLabel").text("*");
         
       } else if (value != "대한민국") {
         $("#select11").attr("disabled", true);
         $("#hideInput4").css("display","none");
         $("#hideInput4").val("");
         $("#select11").css("display","block");
         $("#select11").val("").attr("required",false);
         $("#input25").attr({"disabled":true, "required":false}).val("");
         $("#input26").attr({"disabled":true, "required":false}).val("");
         $("#input27").attr("disabled",true).val("");
         $("#input28").attr("disabled",false).val("");
         $("#input29").attr("disabled",false).val("");
         $("#addressLabel").empty();
         $("#seaLabel").empty();
    
       } else {
         $("#hideInput4").css("display","none");
         $("#hideInput4").val("");
         $("#select11").css("display","block");
         $("#select11").val("");
         $("#select11").attr("disabled", false);
         $("#input25").attr({"disabled":false, "required":true}).val("");
         $("#input26").attr({"disabled":false, "required":true}).val("");
         $("#input27").attr("disabled",false);
         $("#input28").attr("disabled",false).val("");
         $("#input29").attr("disabled",false).val("");
         $("#addressLabel").text("*");
         $("#seaLabel").text("*");
       }
     });
})






