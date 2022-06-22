$(document).ready( function () {
  $('#userList').DataTable({
    lengthChange:false,
    searching: false,
    info:false,
    bLengthChange: true, // n개씩보기
    bPaginate: true, //페이징처리
    order : [[0,"asc"]],
    paging: true,
  language: {
	"zeroRecords": "데이터가 없습니다.",
    "paginate": {
      "next": ">",
      "previous": "<",
      "first":"<<",
      "last": ">>"
    },
  },
   pagingType: "full_numbers",


  //  sorting빼고 싶은 컬럼이 있을 경우, html에서 해당 컬럼 th부분에 
  //  클래스명 no-sort 추가하고 사용하기 

   "columnDefs": [ {
    "targets": 'no-sort',
    "orderable": false,
}]
  
  });
 

  $('#ciemiList').DataTable({
    lengthChange:false,
    searching: false,
    info:false,
    bLengthChange: true, // n개씩보기
    bPaginate: true, //페이징처리
    order : [[0,"asc"]],
    paging: true,
  language: {
	"zeroRecords": "데이터가 없습니다.",
    "paginate": {
      "next": ">",
      "previous": "<",
      "first":"<<",
      "last": ">>"
    },
  },
   pagingType: "full_numbers",

   "columnDefs": [ {
    "targets": 'no-sort',
    "orderable": false,
}]
  
  });

  
//천연물 통합검색 js
$('#orgaList').DataTable({
  lengthChange:false,
    searching: false,
    info:false,
    bLengthChange: true, // n개씩보기
    bPaginate: true, //페이징처리
    order : [[0,"asc"]],
    paging: true,
  language: {
	"zeroRecords": "데이터가 없습니다.",
    "paginate": {
      "next": ">",
      "previous": "<",
      "first":"<<",
      "last": ">>"
    },
  },
   pagingType: "full_numbers",

   "columnDefs": [ {
    "targets": 'no-sort',
    "orderable": false,
}]
  
  });
 


//질병 통합검색 js
$('#diseList').DataTable({
  lengthChange:false,
    searching: false,
    info:false,
    bLengthChange: true, // n개씩보기
    bPaginate: true, //페이징처리
    order : [[0,"asc"]],
    paging: true,
  language: {
	"zeroRecords": "데이터가 없습니다.",
    "paginate": {
      "next": ">",
      "previous": "<",
      "first":"<<",
      "last": ">>"
    },
  },
   pagingType: "full_numbers",
   "columnDefs": [ {
    "targets": 'no-sort',
    "orderable": false,
}]
  
});





// 모바일버전 메뉴 설정 (햄버거)

$(function () {
  $("#toggleMenu").click(function (ev) {
    ev.preventDefault();
    $(this).toggleClass("active");
    $(".overlay").toggleClass("visible");
  });
});


  });

  
    
   