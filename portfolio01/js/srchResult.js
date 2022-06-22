$(document).ready(function () {
// 추출물
  $("#ex_srchResult_table").DataTable({
    searching: false,
    info: false,
    lengthChange: false,
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
  });

  // 미생물
  $("#ml_srchResult_table").DataTable({
    searching: false,
    info: false,
    lengthChange: false,
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
  });

  // 유전자원 TI
  $("#geTi_srchResult_table").DataTable({
    searching: false,
    info: false,
    lengthChange: false,
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
  }); 
  // 유전자원 gDNA
  $("#ge_srchResult_table").DataTable({
    searching: false,
    info: false,
    lengthChange: false,
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
  });

  // 미세조류
  $("#ai_srchResult_table").DataTable({
    searching: false,
    info: false,
    lengthChange: false,
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
  });






  // 검색 조건 설정 드롭다운 내부 클릭 시 드롭다운 닫혀버리는 현상 막는 기능
  $('.searchCondition').on('click', function (event) {
    event.stopPropagation();
  });

  //검색 조건 설정 드롭다운 메뉴 내부에 있는 닫기버튼 기능
  $('#searchConditionClose').click(function () {
    $('.searchCondition').dropdown();
  });


});