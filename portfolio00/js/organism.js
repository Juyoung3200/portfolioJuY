	
	function Ref_foreallWindow(cid, tid) {
		var location = 'ref_foreallwindow.jsp?cid=' + cid + '&tid=' + tid;
		window.open(location, '', 'resizable = no, width=1500, height=800');
	}
	
	function Ref_foreWindow(cid, tid) {
		var location = 'ref_forewindow.jsp?cid=' + cid + '&tid=' + tid;
		window.open(location, '', 'resizable = no, width=1500, height=800');
	}
	
	function InfoResize(trid, frameId, parent)
	{
		InfoDetail(trid);
		iframeResize(frameId, parent);
		
	}
	
	function InfoDetail(trid)
	{
		const tr = document.getElementById(trid);	
		var tbs = tr.getElementsByTagName("td");
		var status = tr.getAttribute('name');

		if(status == 'off')
		{
			tr.setAttribute('name','on');
			for(var i = 0; i <tbs.length-1 ; i++ )
			{
				var div = tbs[i].getElementsByTagName("div");
				if(div.length >0)
					{div[0].setAttribute('class','module-desc');}
			}
			var img = tbs[tbs.length-1].getElementsByTagName('img');
			img[0].setAttribute('src','../img/content/reduce_red.png');
			
		}else
		{
			tr.setAttribute('name','off');
			for(var i = 0; i <tbs.length-1 ; i++ )
			{
				var div = tbs[i].getElementsByTagName("div");
				if(div.length >0)
					{div[0].setAttribute('class','module-ellipsis');}
			}
			var img = tbs[tbs.length-1].getElementsByTagName('img');
			img[0].setAttribute('src','../img/content/full-screen_red.png');
		}
		
	}
	
	function iframeResize(frameId, parent)
	{			
		if(parent == true)
		{
			var iframe =  window.parent.document.getElementById(frameId);
			iframe.height =iframe.contentDocument.body.scrollHeight+20+"px";	
		}else
		{
			var iframe =  document.getElementById(frameId);
			iframe.height =iframe.contentDocument.body.scrollHeight+20+"px";
		}
	}

$(document).ready(function(){

	//천연물에서 추출된 화합물정보 테이블    
	var chemi_tb = $('#chemList').dataTable({
		pageLength: 5, //기본 데이터건수
		lengthChange:false,
		info:false,
		bPaginate: true, //페이징처리
		order : [[0,"asc"]],
		paging:true,
		language: {
	        //"info": "검색하신 천연물에서 _TOTAL_ 개의 화합물이 발견 되었습니다.",
            "zeroRecords": "데이터가 없습니다.",
            "infoFiltered":"",
			"paginate": {
				"next": ">",
				"previous": "<",
				"first": "<<",
				"last" : ">>",
			},
			"sPaginationType": "full_numbers",
			searchPlaceholder: "'화합물 ID, 화합물 이름 등'으로 검색하세요.",
			search:"",
		},
		pagingType: "full_numbers",
		"columnDefs": [ {
		 "targets": 'no-sort',
		 "orderable": false,
	   }],
	});

	// 화합물별 타겟 활성정보 -문헌-
	var refList = $('#refList').DataTable({
		pageLength: 5, //기본 데이터건수
		lengthChange:false,
		searching: true,
		info:false,
		bPaginate: true, //페이징처리
		order : [[0,"asc"]],
		paging:true,
		"language": {
            "zeroRecords": "데이터가 없습니다.",
			"paginate": {
				"next": ">",
				"previous": "<",
				"first": "<<",
			  	"last" : ">>"
			},
			"sPaginationType": "full_numbers",
			searchPlaceholder: "'타겟 ID, 타겟 이름 등'으로 검색하세요.",
			search:""
		},
		pagingType: "full_numbers",
		"columnDefs": [ {
		 "targets": 'no-sort',
		 "orderable": false,
	   }]
	});
	
	
	// 화합물별 타겟 활성정보 -예측-

	var foreList = $('#foreList').DataTable({
		pageLength: 5, //기본 데이터건수
		lengthChange:false,
		searching: true,
		info:false,
		bPaginate: true, //페이징처리
		order : [[0,"asc"]],
		paging:true,
		"language": {
            "zeroRecords": "데이터가 없습니다.",
			"paginate": {
				"next": ">",
				"previous": "<",
				"first": "<<",
			  	"last" : ">>"
				},
				"sPaginationType": "full_numbers",
				searchPlaceholder:  "'타겟 ID, 타겟 이름 등'으로 검색하세요.",
				search:""
		},
	    initComplete: function (){
	    	// 레퍼런스 체크 가져와서 유무 체크. 
	    	//true를 반환하면 그 행은 표시 
	        $.fn.dataTable.ext.search.push(
	            function(settings, data, dataIndex){
	                var ref = data[11] || 0;
	                var ref_bool = ref == null? ref_bool = false : ref_bool = true;
	                var refcheck_none = $("#ref_none").is(":checked");
	                var refcheck_have = $("#ref_have").is(":checked");
	                //둘다 체크가 해제 돼있으면 모든 행을 표시하지 않는다.
	                if(!refcheck_none && !refcheck_have){
		                return false;
	                }else if(refcheck_have == ref_bool || refcheck_none != ref_bool){
	                	return true;	                		
	                }
	                return false;
	            });
	    },
		pagingType: "full_numbers",
		"columnDefs": [ {
		 "targets": 'no-sort',
		 "orderable": false,
	   }]
	});

	$('#ref_none,#ref_have').change(function(){
		forList.draw();
	})


//전체 화합물에 대한 타겟 활성정보 -문헌- 
	var refAllList = $('#refAllList').DataTable({
		pageLength: 5, //기본 데이터건수
		lengthChange:false,
		searching: true,
		info:false,
		bPaginate: true, //페이징처리
		order : [[0,"desc"]],
		paging:true,
		"language": {
            "zeroRecords": "데이터가 없습니다.",
			"paginate": {
				"next": ">",
				"previous": "<",
				"first": "<<",
			  	"last" : ">>"
			},
			"sPaginationType": "full_numbers",
			searchPlaceholder:  "'화합물 ID, 화합물 이름 등'으로 검색하세요.",
			search:""
		},
		pagingType: "full_numbers",
		"columnDefs": [ {
		 "targets": 'no-sort',
		 "orderable": false,
	   }]
	});

	//전체 화합물에 대한 타겟 활성정보 -예측- 
	var foreAllList = $('#foreAllList').DataTable({
		pageLength: 5, //기본 데이터건수
		lengthChange:false,
		searching: true,
		info:false,
		bPaginate: true, //페이징처리
		order : [[0,"desc"]],
		paging:true,
		"language": {
            "zeroRecords": "데이터가 없습니다.",
			"paginate": {
				"next": ">",
				"previous": "<",
				"first": "<<",
				"last" : ">>"
			},
			"sPaginationType": "full_numbers",
			searchPlaceholder: "'화합물 ID, 화합물 이름 등'으로 검색하세요.",
			search:""
		},
	    initComplete: function (){
	    	//테이블 조건. 매 행을 score 칼럼을 가져와서 설정한 범위와 비교, 레퍼런스 체크 가져와서 유무 체크. 
	    	//true를 반환하면 그 행은 표시 
	        $.fn.dataTable.ext.search.push(
	            function(settings, data, dataIndex){
	                var min = parseFloat($('#min_score').val());
	                var max = parseFloat($('#max_score').val());
	                var score = parseFloat(data[4]) || 0;
	                var ref = data[10] || 0;
	                var ref_bool = ref == null? ref_bool = false : ref_bool = true;
	                var refcheck_none = $("#ref_none").is(":checked");
	                var refcheck_have = $("#ref_have").is(":checked");
	                //둘다 체크가 해제 돼있으면 모든 행을 표시하지 않는다.
	                if(!refcheck_none && !refcheck_have){
		                return false;
	                }else if(refcheck_have == ref_bool || refcheck_none != ref_bool){
	                	if( (isNaN(min) && isNaN(max) ) || 
	                		(isNaN(min) && score <= max )|| 
	                		( min <= score && isNaN(max) ) ||
	                		( min <= score && score <= max) ){ 
	                			return true;
	                		}
	                	return false;
	                }
	            });
	    },
		pagingType: "full_numbers",
		"columnDefs": [ {
		 "targets": 'no-sort',
		 "orderable": false,
	   }]
	});
	
	//예측 테이블 검색 설정 추가 부분
	$('<div id="condi_title" class="condition"><div class="condi_title"><span>검색 설정</span></div><div class="condi_check"><input id="all_ref_have" type="checkbox" checked><label for="all_ref_have"><span>문헌정보가 있는 활성정보</span></label><input id="all_ref_none" type="checkbox" checked><label for="all_ref_none"><span>문헌정보가 없는 활성정보</span></label></div><div class="line1"></div><div class="score"><p>associate score  <input id="min_score" type="text" placeholder=""> <span>이상  </span><input id="max_score" type="text" placeholder=""> <span>이하</span></p></div><div class="line2"></div>').insertBefore('#foreAllList_filter');
	$("#condi_title").append($('#foreAllList_filter'));
	
	$('#min_score,#max_score').keyup(function(){
		foreAllList.draw();
	})
	$('#all_ref_none,#all_ref_have').change(function(){
		foreAllList.draw();
	})
	

    //선택한 타겟과 연관된 질병
	var diseaseList = $('#diseaseList').DataTable({
		pageLength: 5, //기본 데이터건수
	    lengthChange:false,
	    searching: true,
	    info:false,
	    bPaginate: true, //페이징처리
	    order : [[0,"asc"]],
	    paging:true,
	  "language": {
          "zeroRecords": "데이터가 없습니다.",
		  "paginate": {
		      "next": ">",
		      "previous": "<",
			  "first": "<<",
			  "last" : ">>"
		    },
		    "sPaginationType": "full_numbers",
			searchPlaceholder:  "'질병 ID, 질병 이름 등'으로 검색하세요",
			search:""
		},
		pagingType: "full_numbers",
		"columnDefs": [ {
		 "targets": 'no-sort',
		 "orderable": false,
	   }]
	});
	
	
//21.11.01 추가
$('.dataTables_filter input').attr("class", "searchBox");
$('.searchBox').css({"width" : "400px"});


	//페이지 바뀔때 I프레임 리사이징
	$('#chemi_tb').on('draw.dt',function(){
    	iframeResize('chem_info',true);
	})
	$('#refList').on('draw.dt',function(){
    	iframeResize('ref',true);
	})
	$('#foreList').on('draw.dt',function(){
    	iframeResize('fore',true);
	})
	$('#refAllList').on('draw.dt',function(){
    	iframeResize('ref_all',true);
	})
	$('#foreAllList').on('draw.dt',function(){
    	iframeResize('fore_all',true);
	})
	$('#diseaseList').on('draw.dt',function(){
    	iframeResize('dise_info',true);
	})
	  

    // select 선택하면 행의 배경색이 변한다.
    
    $('.table1 tbody .select:nth-child(1)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table1 tbody .select:nth-child(2)').removeClass('on')
        $('.table1 tbody .select:nth-child(3)').removeClass('on')
        $('.table1 tbody .select:nth-child(4)').removeClass('on')
        $('.table1 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table1 tbody .select:nth-child(2)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table1 tbody .select:nth-child(1)').removeClass('on')
        $('.table1 tbody .select:nth-child(3)').removeClass('on')
        $('.table1 tbody .select:nth-child(4)').removeClass('on')
        $('.table1 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table1 tbody .select:nth-child(3)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table1 tbody .select:nth-child(1)').removeClass('on')
        $('.table1 tbody .select:nth-child(2)').removeClass('on')
        $('.table1 tbody .select:nth-child(4)').removeClass('on')
        $('.table1 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table1 tbody .select:nth-child(4)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table1 tbody .select:nth-child(1)').removeClass('on')
        $('.table1 tbody .select:nth-child(2)').removeClass('on')
        $('.table1 tbody .select:nth-child(3)').removeClass('on')
        $('.table1 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table1 tbody .select:nth-child(5)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table1 tbody .select:nth-child(1)').removeClass('on')
        $('.table1 tbody .select:nth-child(2)').removeClass('on')
        $('.table1 tbody .select:nth-child(3)').removeClass('on')
        $('.table1 tbody .select:nth-child(4)').removeClass('on')
    });

    // 전체 화합물에 대한 타겟 활성정보 (문헌)에서 타겟을 선택했을때

    $('.table3 tbody .select:nth-child(1)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(2)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(4)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table3 tbody .select:nth-child(2)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(2)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(4)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table3 tbody .select:nth-child(3)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(2)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(4)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table3 tbody .select:nth-child(4)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(2)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(4)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table3 tbody .select:nth-child(5)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(2)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(4)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
    });

    // 전체 화합물에 대한 타겟 활성정보 (예측)에서 타겟을 선택했을때

    $('.table4 tbody .select:nth-child(1)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table4 tbody .select:nth-child(2)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(4)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table4 tbody .select:nth-child(2)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(4)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table4 tbody .select:nth-child(3)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(2)').removeClass('on')
        $('.table4 tbody .select:nth-child(4)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table4 tbody .select:nth-child(4)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(2)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
    });

    $('.table4 tbody .select:nth-child(5)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(2)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(2)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(4)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
    });

        // more-ref-t 모달 설정

        $('#close3').click(function(){
            $('.modal-wrapper2').hide()
        })

        $('.more-ref-t').click(function(){
            $('.modal-wrapper2').show()
        })

         // more-ref-c-t 모달 설정

         $('#close4').click(function(){
            $('.modal-wrapper3').hide()
        })

        $('.more-ref-c-t').click(function(){
            $('.modal-wrapper3').show()
        })

  });