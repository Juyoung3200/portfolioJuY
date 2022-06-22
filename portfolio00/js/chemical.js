
  $(document).ready(function(){
  
// 화합물 구조 sdf 다운로드 기능 모달 설정

   
    const close = document.getElementById("close")
    const modal = document.querySelector(".modal-wrapper")
    const down = document.querySelector(".download")
    const sdf = document.querySelector('.modal')
    const ok = document.querySelector('.ok')
    


    close.onclick = () => {
        modal.style.display = "none"
    };

    down.onclick = () => {
        modal.style.display = "block"
        // sdf.style.display = "none"
    }

    ok.onclick = () => {
        
        // sdf.style.display = "none"
        modal.style.display = "none"
    }


    // more DB 버튼 누르면 PubChem CID, chEMBL ID, ZINC ID가 번갈아가면서 나타난다. 
    // 21.10.28 변수 추가 수정 
    
    $('.table00 tbody tr td .btnlink').click(function change(pubchem, chembl, zinc){
            var db = document.getElementById('db')
            console.log(pubchem)
            console.log(db)
            if (db.innerText =="PubChem CID : "+pubchem) {
                db.innerText ="chEMBL ID : "+chembl
            } else if (db.innerText == "chEMBL ID : "+pubchem) {
                        db.innerText = "ZINC ID : "+zinc
            } else {
                db.innerText ="PubChem CID : "+pubchem
            }

            if (db.href =="https://pubchem.ncbi.nlm.nih.gov/compound/"+pubchem) {
                db.href ="https://www.ebi.ac.uk/chembl/compound_report_card/"+pubchem
            } else if (db.href =="https://www.ebi.ac.uk/chembl/compound_report_card/"+chembl) {
                db.href ="http://zinc15.docking.org/substances/"+zinc
            } else {
                db.href = "https://pubchem.ncbi.nlm.nih.gov/compound/"+pubchem
            }

            
    })

    $('.more-db-icon').click(function change(pubchem, chembl, zinc){
      var db = document.getElementById('db')
      console.log(db)
      if (db.innerText =="PubChem CID : "+pubchem) {
          db.innerText ="chEMBL ID : "+chembl
      } else if (db.innerText == "chEMBL ID : "+pubchem) {
                  db.innerText = "ZINC ID : "+zinc
      } else {
          db.innerText ="PubChem CID : "+pubchem
      }

      if (db.href =="https://pubchem.ncbi.nlm.nih.gov/compound/"+pubchem) {
          db.href ="https://www.ebi.ac.uk/chembl/compound_report_card/"+pubchem
      } else if (db.href =="https://www.ebi.ac.uk/chembl/compound_report_card/"+chembl) {
          db.href ="http://zinc15.docking.org/substances/"+zinc
      } else {
          db.href = "https://pubchem.ncbi.nlm.nih.gov/compound/"+pubchem
      }

      
})

    // select 선택하면 행의 배경색이 변한다.

    // 화합물별 타겟 활성정보 (문헌)에서 타겟을 선택했을때

    $('.table2 tbody tr:nth-child(1)').click(function(){
        // 타겟 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table2 tbody .select:nth-child(2)').removeClass('on')
        $('.table2 tbody .select:nth-child(3)').removeClass('on')
        $('.table2 tbody .select:nth-child(4)').removeClass('on')
        $('.table2 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table2 tbody tr:nth-child(2)').click(function(){
        // 타겟 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table2 tbody .select:nth-child(1)').removeClass('on')
        $('.table2 tbody .select:nth-child(3)').removeClass('on')
        $('.table2 tbody .select:nth-child(4)').removeClass('on')
        $('.table2 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table2 tbody tr:nth-child(3)').click(function(){
        // 타겟 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table2 tbody .select:nth-child(1)').removeClass('on')
        $('.table2 tbody .select:nth-child(2)').removeClass('on')
        $('.table2 tbody .select:nth-child(4)').removeClass('on')
        $('.table2 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table2 tbody tr:nth-child(4)').click(function(){
        //타겟 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table2 tbody .select:nth-child(1)').removeClass('on')
        $('.table2 tbody .select:nth-child(2)').removeClass('on')
        $('.table2 tbody .select:nth-child(3)').removeClass('on')
        $('.table2 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table2 tbody tr:nth-child(5)').click(function(){
        // 타겟 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table2 tbody .select:nth-child(1)').removeClass('on')
        $('.table2 tbody .select:nth-child(2)').removeClass('on')
        $('.table2 tbody .select:nth-child(3)').removeClass('on')
        $('.table2 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
    });

    // 화합물별 타겟 활성정보 (예측)에서 타겟을 선택했을때

    $('.table3 tbody tr:nth-child(1)').click(function(){
        // 타겟 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table2 tbody .select:nth-child(1)').removeClass('on')
        $('.table2 tbody .select:nth-child(2)').removeClass('on')
        $('.table2 tbody .select:nth-child(3)').removeClass('on')
        $('.table2 tbody .select:nth-child(4)').removeClass('on')
        $('.table2 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table3 tbody tr:nth-child(2)').click(function(){
        // 타겟 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table2 tbody .select:nth-child(1)').removeClass('on')
        $('.table2 tbody .select:nth-child(2)').removeClass('on')
        $('.table2 tbody .select:nth-child(3)').removeClass('on')
        $('.table2 tbody .select:nth-child(4)').removeClass('on')
        $('.table2 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table3 tbody tr:nth-child(3)').click(function(){
        // 타겟 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table2 tbody .select:nth-child(1)').removeClass('on')
        $('.table2 tbody .select:nth-child(2)').removeClass('on')
        $('.table2 tbody .select:nth-child(3)').removeClass('on')
        $('.table2 tbody .select:nth-child(4)').removeClass('on')
        $('.table2 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table3 tbody tr:nth-child(4)').click(function(){
        // 타겟 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table2 tbody .select:nth-child(1)').removeClass('on')
        $('.table2 tbody .select:nth-child(2)').removeClass('on')
        $('.table2 tbody .select:nth-child(3)').removeClass('on')
        $('.table2 tbody .select:nth-child(4)').removeClass('on')
        $('.table2 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table3 tbody tr:nth-child(5)').click(function(){
        // 타겟 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table2 tbody .select:nth-child(1)').removeClass('on')
        $('.table2 tbody .select:nth-child(2)').removeClass('on')
        $('.table2 tbody .select:nth-child(3)').removeClass('on')
        $('.table2 tbody .select:nth-child(4)').removeClass('on')
        $('.table2 tbody .select:nth-child(5)').removeClass('on')
    });

    
    

// more-ref-t모달 설정

$('#close2').click(function(){
    $('.modal-wrapper2').hide()
})

$('.more-ref-t').click(function(){
    $('.modal-wrapper2').show()
})

//검색한 화합물이 포함된 천연물  js 
$('#orgList').DataTable({
  pageLength: 5, //기본 데이터건수
  lengthChange:false,
  info:false,
  bPaginate: true, //페이징처리
  order : [[0,"asc"]],
  paging:true,
  language: {
       "info": "검색하신 천연물에서 _TOTAL_ 개의 화합물이 발견 되었습니다.",
        "zeroRecords": "데이터가 없습니다.",
        "infoFiltered":"",
     "paginate": {
        "next": ">",
        "previous": "<",
        "first": "<<",
        "last" : ">>",
     },
     "sPaginationType": "full_numbers",
     searchPlaceholder: "'천연물 ID, 천연물 이름 등'으로 검색하세요.",
     search:"",
  },
  pagingType: "full_numbers",
  "columnDefs": [ {
   "targets": 'no-sort',
   "orderable": false,
  }],
  
  });

// 화합물별 타겟 활성정보 -문헌-

$('#refList').DataTable({
  pageLength: 5, //기본 데이터건수
  lengthChange:false,
  info:false,
  bPaginate: true, //페이징처리
  order : [[0,"asc"]],
  paging:true,
  language: {
       "info": "검색하신 천연물에서 _TOTAL_ 개의 화합물이 발견 되었습니다.",
        "zeroRecords": "데이터가 없습니다.",
        "infoFiltered":"",
     "paginate": {
        "next": ">",
        "previous": "<",
        "first": "<<",
        "last" : ">>",
     },
     "sPaginationType": "full_numbers",
     searchPlaceholder: "'타겟 ID, 타겟 이름 등'으로 검색하세요.",
     search:"",
  },
  pagingType: "full_numbers",
  "columnDefs": [ {
   "targets": 'no-sort',
   "orderable": false,
  }],


});

// 화합물별 타겟 활성정보 -예측-

//21.10.28 수정
var foretb = $('#foreList').DataTable({
	  pageLength: 5, //기본 데이터건수
	  lengthChange:false,
	  info:false,
	  bPaginate: true, //페이징처리
	  order : [[0,"asc"]],
	  paging:true,
	  language: {
	       "info": "검색하신 천연물에서 _TOTAL_ 개의 화합물이 발견 되었습니다.",
	        "zeroRecords": "데이터가 없습니다.",
	        "infoFiltered":"",
	     "paginate": {
	        "next": ">",
	        "previous": "<",
	        "first": "<<",
	        "last" : ">>",
	     },
	     "sPaginationType": "full_numbers",
	     searchPlaceholder: "'타겟 ID, 타겟 이름 등'으로 검색하세요.",
	     search:"",
	  },
	  
	  	//21.10.28 수정 (추가) 
		initComplete: function (){ 
			//테이블 조건. 매 행을 score 칼럼을 가져와서 설정한 범위와 비교, 레퍼런스 체크 가져와서 유무 체크. 
			//true를 반환하면 그 행은 표시 
		    $.fn.dataTable.ext.search.push(
		        function(settings, data, dataIndex) {
		            var ref = data[10] || 0;
		            var ref_bool = ref == null? ref_bool = false : ref_bool = true;
		            var refcheck_none = $("#ref_none").is(":checked");
		            var refcheck_have = $("#ref_have").is(":checked");
		            
		            //둘다 체크가 해제 돼있으면 모든 행을 표시하지 않는다.
		            if(!refcheck_none && !refcheck_have){
		                return false;
		            }else if(refcheck_have == ref_bool || refcheck_none != ref_bool) { 
		            		return true;
		            }else { 
		            		return false;
		            }        
		            
		        });
	},
	  
	  pagingType: "full_numbers",
	  "columnDefs": [ {
	   "targets": 'no-sort',
	   "orderable": false,
	  }],
	
	});
	
	//21.10.28 수정 (추가) 
	$('#ref_none,#ref_have').change(function(){
		foretb.draw();
	});

//선택한 타겟과 연관된 질병
$('#diseaseList').DataTable({
  pageLength: 5, //기본 데이터건수
  lengthChange:false,
  info:false,
  bPaginate: true, //페이징처리
  order : [[0,"asc"]],
  paging:true,
  language: {
       "info": "검색하신 천연물에서 _TOTAL_ 개의 화합물이 발견 되었습니다.",
        "zeroRecords": "데이터가 없습니다.",
        "infoFiltered":"",
     "paginate": {
        "next": ">",
        "previous": "<",
        "first": "<<",
        "last" : ">>",
     },
     "sPaginationType": "full_numbers",
     searchPlaceholder:"'질병 ID, 질병 이름 등'으로 검색하세요.",
     search:"",
  },
  pagingType: "full_numbers",
  "columnDefs": [ {
   "targets": 'no-sort',
   "orderable": false,
  }],
  
});

//21.10.28 수정
$('.dataTables_filter input').attr("class", "searchBox");
$('.searchBox').css({"width" : "400px"});


$(function () {
  $("#toggleMenu").click(function (ev) {
    ev.preventDefault();
    $(this).toggleClass("active");
    $(".overlay").toggleClass("visible");
  });
});

})