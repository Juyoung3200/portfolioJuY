$(document).ready(function () {
  // 표본 등록/검색 페이지 -> 데이터테이블
  // #spList에서 #sp_srch_organ_table 로 변경함

  $("#sp_srch_organ_table").DataTable({
    searching: false,
    info: false,
    lengthMenu: [5, 10, 25, 50],
    pagingType: "full_numbers", //first, last까지 표출
    scrollX: true,
    language: {
      paginate: {
        first: "<<",
        previous: "<",
        next: ">",
        last: ">>",
      },
    },
    columnDefs: [{
      orderable: false,
      className: "select-checkbox",
      targets: 0,
    }, ],
    select: {
      style: "os",
      selector: "td:first-child",
    },
    order: [
      [1, "asc"]
    ],
  });

  // 추출물 등록/검색 페이지 -> 데이터테이블
  $("#ex_srch_organ_table").DataTable({
    searching: false,
    info: false,
    lengthMenu: [5, 10, 25, 50],
    pagingType: "full_numbers", //first, last까지 표출
    scrollX: true,
    language: {
      paginate: {
        first: "<<",
        previous: "<",
        next: ">",
        last: ">>",
      },
    },
    columnDefs: [{
      orderable: false,
      className: "select-checkbox",
      targets: 0,
    }, ],
    select: {
      style: "os",
      selector: "td:first-child",
    },
    order: [
      [1, "asc"]
    ],
  });


  // 검색 조건 설정 드롭다운 내부 클릭 시 드롭다운 닫혀버리는 현상 막는 기능
  $('.searchCondition').on('click', function (event) {
    event.stopPropagation();
  });

  //검색 조건 설정 드롭다운 메뉴 내부에 있는 닫기버튼 기능
  $('#searchConditionClose').click(function () {
    $('.searchCondition').dropdown();
  });

  // 검색 조건 설정 드롭다운 메뉴 내부에 있는 달력 날짜 선택

  // 채집일자 시작일
  $('#datePicker-start-1').datepicker({
    format: "yyyy-mm-dd", //데이터 포맷 형식(yyyy : 년 mm : 월 dd : 일 )
    startDate: '-5y', //달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주)
    endDate: '+5y', //달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
    autoclose: true, //사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
    calendarWeeks: false, //캘린더 옆에 몇 주차인지 보여주는 옵션 기본값 false 보여주려면 true
    clearBtn: true, //날짜 선택한 값 초기화 해주는 버튼 보여주는 옵션 기본값 false 보여주려면 true
    datesDisabled: ['2019-06-24', '2019-06-26'], //선택 불가능한 일 설정 하는 배열 위에 있는 format 과 형식이 같아야함.
    daysOfWeekDisabled: [0, 6], //선택 불가능한 요일 설정 0 : 일요일 ~ 6 : 토요일
    disableTouchKeyboard: false, //모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
    immediateUpdates: false, //사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
    multidate: false, //여러 날짜 선택할 수 있게 하는 옵션 기본값 :false 
    multidateSeparator: ",", //여러 날짜를 선택했을 때 사이에 나타나는 글짜 2019-05-01,2019-06-01
    templates: {
      leftArrow: '&laquo;',
      rightArrow: '&raquo;'
    }, //다음달 이전달로 넘어가는 화살표 모양 커스텀 마이징 
    showWeekDays: true, // 위에 요일 보여주는 옵션 기본값 : true
    title: "", //캘린더 상단에 보여주는 타이틀
    todayHighlight: true, //오늘 날짜에 하이라이팅 기능 기본값 :false 
    toggleActive: false, //이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
    weekStart: 0, //달력 시작 요일 선택하는 것 기본값은 0인 일요일 
    language: "ko" //달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
  }); //datepicker end

  // 채집일자 종료일
  $('#datePicker-end-1').datepicker({
    format: "yyyy-mm-dd", //데이터 포맷 형식(yyyy : 년 mm : 월 dd : 일 )
    startDate: '-5y', //달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주)
    endDate: '+5y', //달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
    autoclose: true, //사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
    calendarWeeks: false, //캘린더 옆에 몇 주차인지 보여주는 옵션 기본값 false 보여주려면 true
    clearBtn: false, //날짜 선택한 값 초기화 해주는 버튼 보여주는 옵션 기본값 false 보여주려면 true
    datesDisabled: ['2019-06-24', '2019-06-26'], //선택 불가능한 일 설정 하는 배열 위에 있는 format 과 형식이 같아야함.
    daysOfWeekDisabled: [0, 6], //선택 불가능한 요일 설정 0 : 일요일 ~ 6 : 토요일
    disableTouchKeyboard: false, //모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
    immediateUpdates: false, //사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
    multidate: false, //여러 날짜 선택할 수 있게 하는 옵션 기본값 :false 
    multidateSeparator: ",", //여러 날짜를 선택했을 때 사이에 나타나는 글짜 2019-05-01,2019-06-01
    templates: {
      leftArrow: '&laquo;',
      rightArrow: '&raquo;'
    }, //다음달 이전달로 넘어가는 화살표 모양 커스텀 마이징 
    showWeekDays: true, // 위에 요일 보여주는 옵션 기본값 : true
    title: "", //캘린더 상단에 보여주는 타이틀
    todayHighlight: true, //오늘 날짜에 하이라이팅 기능 기본값 :false 
    toggleActive: false, //이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
    weekStart: 0, //달력 시작 요일 선택하는 것 기본값은 0인 일요일 
    language: "ko" //달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
  }); //datepicker end

  // 이관완료일 시작일
  $('#datePicker-start-2').datepicker({
    format: "yyyy-mm-dd", //데이터 포맷 형식(yyyy : 년 mm : 월 dd : 일 )
    startDate: '-5y', //달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주)
    endDate: '+5y', //달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
    autoclose: true, //사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
    calendarWeeks: false, //캘린더 옆에 몇 주차인지 보여주는 옵션 기본값 false 보여주려면 true
    clearBtn: true, //날짜 선택한 값 초기화 해주는 버튼 보여주는 옵션 기본값 false 보여주려면 true
    datesDisabled: ['2019-06-24', '2019-06-26'], //선택 불가능한 일 설정 하는 배열 위에 있는 format 과 형식이 같아야함.
    daysOfWeekDisabled: [0, 6], //선택 불가능한 요일 설정 0 : 일요일 ~ 6 : 토요일
    disableTouchKeyboard: false, //모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
    immediateUpdates: false, //사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
    multidate: false, //여러 날짜 선택할 수 있게 하는 옵션 기본값 :false 
    multidateSeparator: ",", //여러 날짜를 선택했을 때 사이에 나타나는 글짜 2019-05-01,2019-06-01
    templates: {
      leftArrow: '&laquo;',
      rightArrow: '&raquo;'
    }, //다음달 이전달로 넘어가는 화살표 모양 커스텀 마이징 
    showWeekDays: true, // 위에 요일 보여주는 옵션 기본값 : true
    title: "", //캘린더 상단에 보여주는 타이틀
    todayHighlight: true, //오늘 날짜에 하이라이팅 기능 기본값 :false 
    toggleActive: false, //이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
    weekStart: 0, //달력 시작 요일 선택하는 것 기본값은 0인 일요일 
    language: "ko" //달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
  }); //datepicker end

  // 이관완료일 종료일
  $('#datePicker-end-2').datepicker({
    format: "yyyy-mm-dd", //데이터 포맷 형식(yyyy : 년 mm : 월 dd : 일 )
    startDate: '-5y', //달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주)
    endDate: '+5y', //달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
    autoclose: true, //사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
    calendarWeeks: false, //캘린더 옆에 몇 주차인지 보여주는 옵션 기본값 false 보여주려면 true
    clearBtn: false, //날짜 선택한 값 초기화 해주는 버튼 보여주는 옵션 기본값 false 보여주려면 true
    datesDisabled: ['2019-06-24', '2019-06-26'], //선택 불가능한 일 설정 하는 배열 위에 있는 format 과 형식이 같아야함.
    daysOfWeekDisabled: [0, 6], //선택 불가능한 요일 설정 0 : 일요일 ~ 6 : 토요일
    disableTouchKeyboard: false, //모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
    immediateUpdates: false, //사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
    multidate: false, //여러 날짜 선택할 수 있게 하는 옵션 기본값 :false 
    multidateSeparator: ",", //여러 날짜를 선택했을 때 사이에 나타나는 글짜 2019-05-01,2019-06-01
    templates: {
      leftArrow: '&laquo;',
      rightArrow: '&raquo;'
    }, //다음달 이전달로 넘어가는 화살표 모양 커스텀 마이징 
    showWeekDays: true, // 위에 요일 보여주는 옵션 기본값 : true
    title: "", //캘린더 상단에 보여주는 타이틀
    todayHighlight: true, //오늘 날짜에 하이라이팅 기능 기본값 :false 
    toggleActive: false, //이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
    weekStart: 0, //달력 시작 요일 선택하는 것 기본값은 0인 일요일 
    language: "ko" //달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
  }); //datepicker end

  // 자원 등록/검색 드롭다운 버튼과 드롭다운 메뉴의 넓이가 같게 설정
  var width = $('#srch_organ_dropdown').outerWidth();
  $('#srch_organ_dropdown_menu').css('width', width + 'px');
  // 해상도가 바뀌어도 자원 등록/검색 드롭다운 버튼과 드롭다운 메뉴의 넓이가 같게 설정
  $(window).resize(function () {
    var width = $('#srch_organ_dropdown').outerWidth();
    $('#srch_organ_dropdown_menu').css('width', width + 'px');
  });


});