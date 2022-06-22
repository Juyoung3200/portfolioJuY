
  $(document).ready(function(){

	  $('#chemi_tb').DataTable({
		    lengthChange:false,
		    searching: false,
		    info:false,
		    bPaginate: true, //페이징처리
		    order : [[0,"asc"],[1,"desc"]],
		    paging:true,
		  "language": {
			  "paginate": {
				  "next": ">",
				  "previous": "<",
				  //  "first": "<<"
				  //  "last" : ">>"
				  },
				  "sPaginationType": "full_numbers",
				}
	  });

	  var table = $("#userList").DataTable();

	  $('#next').on( 'click', function () {
	      table.page( 'next' ).draw( 'page' );
	  } );

	  $('#previous').on( 'click', function () {
	      table.page( 'previous' ).draw( 'page' );
	  } );
	  $('#first').on( 'click', function () {
	    table.page( 'next' ).draw( 'page' );
	  } );

	  $('#last').on( 'click', function () {
	    table.page( 'previous' ).draw( 'page' );
	  } );
	  
    // 오름차순 버튼을 누르면 버튼이 검은색으로 변하고,
    // 검은색이였던 오름차순 버튼이 회색으로 변한다. 
    $('.up th .up0').click(function(){
        $(this).toggleClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp0').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp0').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp0').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .uppppp0').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
    })

    $('.up th .upppppp0').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppppp1').removeClass('on')
        $('.up th .upppppp2').removeClass('on')
        $('.up th .upppppp3').removeClass('on')
        $('.up th .upppppp4').removeClass('on')
        $('.up th .upppppp5').removeClass('on')
        $('.up th .upppppp6').removeClass('on')
        $('.up th .upppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .upppppp9').removeClass('on')
        $('.up th .upppppp10').removeClass('on')
        $('.up th .upppppp11').removeClass('on')
        $('.up th .upppppp12').removeClass('on')
        $('.up th .downnnnnn0').removeClass('on')
        $('.up th .downnnnnn1').removeClass('on')
        $('.up th .downnnnnn2').removeClass('on')
        $('.up th .downnnnnn3').removeClass('on')
        $('.up th .downnnnnn4').removeClass('on')
        $('.up th .downnnnnn5').removeClass('on')
        $('.up th .downnnnnn6').removeClass('on')
        $('.up th .downnnnnn7').removeClass('on')
        $('.up th .downnnnnn8').removeClass('on')
        $('.up th .downnnnnn9').removeClass('on')
        $('.up th .downnnnnn10').removeClass('on')
        $('.up th .downnnnnn11').removeClass('on')
        $('.up th .downnnnnn12').removeClass('on')
    })

    $('.up th .up1').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp1').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp1').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp1').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .uppppp1').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
    })

    $('.up th .upppppp1').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppppp0').removeClass('on')
        $('.up th .upppppp2').removeClass('on')
        $('.up th .upppppp3').removeClass('on')
        $('.up th .upppppp4').removeClass('on')
        $('.up th .upppppp5').removeClass('on')
        $('.up th .upppppp6').removeClass('on')
        $('.up th .upppppp7').removeClass('on')
        $('.up th .upppppp8').removeClass('on')
        $('.up th .upppppp9').removeClass('on')
        $('.up th .upppppp10').removeClass('on')
        $('.up th .upppppp11').removeClass('on')
        $('.up th .upppppp12').removeClass('on')
        $('.up th .downnnnnn0').removeClass('on')
        $('.up th .downnnnnn1').removeClass('on')
        $('.up th .downnnnnn2').removeClass('on')
        $('.up th .downnnnnn3').removeClass('on')
        $('.up th .downnnnnn4').removeClass('on')
        $('.up th .downnnnnn5').removeClass('on')
        $('.up th .downnnnnn6').removeClass('on')
        $('.up th .downnnnnn7').removeClass('on')
        $('.up th .downnnnnn8').removeClass('on')
        $('.up th .downnnnnn9').removeClass('on')
        $('.up th .downnnnnn10').removeClass('on')
        $('.up th .downnnnnn11').removeClass('on')
        $('.up th .downnnnnn12').removeClass('on')
    })

    $('.up th .up2').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp2').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp2').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp2').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .uppppp2').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
    })

    $('.up th .upppppp2').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppppp0').removeClass('on')
        $('.up th .upppppp1').removeClass('on')
        $('.up th .upppppp3').removeClass('on')
        $('.up th .upppppp4').removeClass('on')
        $('.up th .upppppp5').removeClass('on')
        $('.up th .upppppp6').removeClass('on')
        $('.up th .upppppp7').removeClass('on')
        $('.up th .upppppp8').removeClass('on')
        $('.up th .upppppp9').removeClass('on')
        $('.up th .upppppp10').removeClass('on')
        $('.up th .upppppp11').removeClass('on')
        $('.up th .upppppp12').removeClass('on')
        $('.up th .downnnnnn0').removeClass('on')
        $('.up th .downnnnnn1').removeClass('on')
        $('.up th .downnnnnn2').removeClass('on')
        $('.up th .downnnnnn3').removeClass('on')
        $('.up th .downnnnnn4').removeClass('on')
        $('.up th .downnnnnn5').removeClass('on')
        $('.up th .downnnnnn6').removeClass('on')
        $('.up th .downnnnnn7').removeClass('on')
        $('.up th .downnnnnn8').removeClass('on')
        $('.up th .downnnnnn9').removeClass('on')
        $('.up th .downnnnnn10').removeClass('on')
        $('.up th .downnnnnn11').removeClass('on')
        $('.up th .downnnnnn12').removeClass('on')
    })

    $('.up th .up3').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp3').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp3').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp3').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .uppppp3').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
    })

    $('.up th .upppppp3').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppppp0').removeClass('on')
        $('.up th .upppppp1').removeClass('on')
        $('.up th .upppppp2').removeClass('on')
        $('.up th .upppppp4').removeClass('on')
        $('.up th .upppppp5').removeClass('on')
        $('.up th .upppppp6').removeClass('on')
        $('.up th .upppppp7').removeClass('on')
        $('.up th .upppppp8').removeClass('on')
        $('.up th .upppppp9').removeClass('on')
        $('.up th .upppppp10').removeClass('on')
        $('.up th .upppppp11').removeClass('on')
        $('.up th .upppppp12').removeClass('on')
        $('.up th .downnnnnn0').removeClass('on')
        $('.up th .downnnnnn1').removeClass('on')
        $('.up th .downnnnnn2').removeClass('on')
        $('.up th .downnnnnn3').removeClass('on')
        $('.up th .downnnnnn4').removeClass('on')
        $('.up th .downnnnnn5').removeClass('on')
        $('.up th .downnnnnn6').removeClass('on')
        $('.up th .downnnnnn7').removeClass('on')
        $('.up th .downnnnnn8').removeClass('on')
        $('.up th .downnnnnn9').removeClass('on')
        $('.up th .downnnnnn10').removeClass('on')
        $('.up th .downnnnnn11').removeClass('on')
        $('.up th .downnnnnn12').removeClass('on')
    })

    $('.up th .up4').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp4').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp4').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp4').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .uppppp4').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
    })

    $('.up th .upppppp4').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppppp0').removeClass('on')
        $('.up th .upppppp1').removeClass('on')
        $('.up th .upppppp2').removeClass('on')
        $('.up th .upppppp3').removeClass('on')
        $('.up th .upppppp5').removeClass('on')
        $('.up th .upppppp6').removeClass('on')
        $('.up th .upppppp7').removeClass('on')
        $('.up th .upppppp8').removeClass('on')
        $('.up th .upppppp9').removeClass('on')
        $('.up th .upppppp10').removeClass('on')
        $('.up th .upppppp11').removeClass('on')
        $('.up th .upppppp12').removeClass('on')
        $('.up th .downnnnnn0').removeClass('on')
        $('.up th .downnnnnn1').removeClass('on')
        $('.up th .downnnnnn2').removeClass('on')
        $('.up th .downnnnnn3').removeClass('on')
        $('.up th .downnnnnn4').removeClass('on')
        $('.up th .downnnnnn5').removeClass('on')
        $('.up th .downnnnnn6').removeClass('on')
        $('.up th .downnnnnn7').removeClass('on')
        $('.up th .downnnnnn8').removeClass('on')
        $('.up th .downnnnnn9').removeClass('on')
        $('.up th .downnnnnn10').removeClass('on')
        $('.up th .downnnnnn11').removeClass('on')
        $('.up th .downnnnnn12').removeClass('on')
    })

    $('.up th .up5').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp5').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp5').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp5').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .uppppp5').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
    })

    $('.up th .up6').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp6').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp6').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp6').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .uppppp6').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
    })

    $('.up th .up7').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp7').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp7').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp7').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .uppppp7').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
    })

    $('.up th .up8').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp8').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp8').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp8').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .uppppp8').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
    })

    $('.up th .up9').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp9').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp9').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp9').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .uppppp9').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
    })

    $('.up th .up10').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })
    $('.up th .upp10').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp10').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp10').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .up11').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up12').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp11').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp12').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    $('.up th .uppp11').click(function(){
        $(this).toggleClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp12').removeClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
    })

    $('.up th .upppp11').click(function(){
        $(this).toggleClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp12').removeClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
    })

    $('.up th .up12').click(function(){
        $(this).toggleClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
    })

    $('.up th .upp12').click(function(){
        $(this).toggleClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
    })

    // 내림차순 버튼을 누르면 버튼이 검은색으로 변하고,
    // 검은색이였던 내림차순 버튼이 회색으로 변한다. 
    $('.up th .down0').click(function(){
        $(this).toggleClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn0').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn0').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn0').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downnnnn0').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
    })

    $('.up th .downnnnnn0').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnnn1').removeClass('on')
        $('.up th .downnnnnn2').removeClass('on')
        $('.up th .downnnnnn3').removeClass('on')
        $('.up th .downnnnnn4').removeClass('on')
        $('.up th .downnnnnn5').removeClass('on')
        $('.up th .downnnnnn6').removeClass('on')
        $('.up th .downnnnnn7').removeClass('on')
        $('.up th .downnnnnn8').removeClass('on')
        $('.up th .downnnnnn9').removeClass('on')
        $('.up th .downnnnnn10').removeClass('on')
        $('.up th .downnnnnn11').removeClass('on')
        $('.up th .downnnnnn12').removeClass('on')
        $('.up th .upppppp0').removeClass('on')
        $('.up th .upppppp1').removeClass('on')
        $('.up th .upppppp2').removeClass('on')
        $('.up th .upppppp3').removeClass('on')
        $('.up th .upppppp4').removeClass('on')
        $('.up th .upppppp5').removeClass('on')
        $('.up th .upppppp6').removeClass('on')
        $('.up th .upppppp7').removeClass('on')
        $('.up th .upppppp8').removeClass('on')
        $('.up th .upppppp9').removeClass('on')
        $('.up th .upppppp10').removeClass('on')
        $('.up th .upppppp11').removeClass('on')
        $('.up th .upppppp12').removeClass('on')
    })

    $('.up th .down1').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn1').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn1').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn1').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downnnnn1').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
    })

    $('.up th .downnnnnn1').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnnn0').removeClass('on')
        $('.up th .downnnnnn2').removeClass('on')
        $('.up th .downnnnnn3').removeClass('on')
        $('.up th .downnnnnn4').removeClass('on')
        $('.up th .downnnnnn5').removeClass('on')
        $('.up th .downnnnnn6').removeClass('on')
        $('.up th .downnnnnn7').removeClass('on')
        $('.up th .downnnnnn8').removeClass('on')
        $('.up th .downnnnnn9').removeClass('on')
        $('.up th .downnnnnn10').removeClass('on')
        $('.up th .downnnnnn11').removeClass('on')
        $('.up th .downnnnnn12').removeClass('on')
        $('.up th .upppppp0').removeClass('on')
        $('.up th .upppppp1').removeClass('on')
        $('.up th .upppppp2').removeClass('on')
        $('.up th .upppppp3').removeClass('on')
        $('.up th .upppppp4').removeClass('on')
        $('.up th .upppppp5').removeClass('on')
        $('.up th .upppppp6').removeClass('on')
        $('.up th .upppppp7').removeClass('on')
        $('.up th .upppppp8').removeClass('on')
        $('.up th .upppppp9').removeClass('on')
        $('.up th .upppppp10').removeClass('on')
        $('.up th .upppppp11').removeClass('on')
        $('.up th .upppppp12').removeClass('on')
    })

    $('.up th .down2').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn2').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn2').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn2').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downnnnn2').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
    })

    $('.up th .downnnnnn2').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnnn0').removeClass('on')
        $('.up th .downnnnnn1').removeClass('on')
        $('.up th .downnnnnn3').removeClass('on')
        $('.up th .downnnnnn4').removeClass('on')
        $('.up th .downnnnnn5').removeClass('on')
        $('.up th .downnnnnn6').removeClass('on')
        $('.up th .downnnnnn7').removeClass('on')
        $('.up th .downnnnnn8').removeClass('on')
        $('.up th .downnnnnn9').removeClass('on')
        $('.up th .downnnnnn10').removeClass('on')
        $('.up th .downnnnnn11').removeClass('on')
        $('.up th .downnnnnn12').removeClass('on')
        $('.up th .upppppp0').removeClass('on')
        $('.up th .upppppp1').removeClass('on')
        $('.up th .upppppp2').removeClass('on')
        $('.up th .upppppp3').removeClass('on')
        $('.up th .upppppp4').removeClass('on')
        $('.up th .upppppp5').removeClass('on')
        $('.up th .upppppp6').removeClass('on')
        $('.up th .upppppp7').removeClass('on')
        $('.up th .upppppp8').removeClass('on')
        $('.up th .upppppp9').removeClass('on')
        $('.up th .upppppp10').removeClass('on')
        $('.up th .upppppp11').removeClass('on')
        $('.up th .upppppp12').removeClass('on')
    })

    $('.up th .down3').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn3').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn3').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn3').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downnnnn3').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
    })

    $('.up th .downnnnnn3').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnnn0').removeClass('on')
        $('.up th .downnnnnn1').removeClass('on')
        $('.up th .downnnnnn2').removeClass('on')
        $('.up th .downnnnnn4').removeClass('on')
        $('.up th .downnnnnn5').removeClass('on')
        $('.up th .downnnnnn6').removeClass('on')
        $('.up th .downnnnnn7').removeClass('on')
        $('.up th .downnnnnn8').removeClass('on')
        $('.up th .downnnnnn9').removeClass('on')
        $('.up th .downnnnnn10').removeClass('on')
        $('.up th .downnnnnn11').removeClass('on')
        $('.up th .downnnnnn12').removeClass('on')
        $('.up th .upppppp0').removeClass('on')
        $('.up th .upppppp1').removeClass('on')
        $('.up th .upppppp2').removeClass('on')
        $('.up th .upppppp3').removeClass('on')
        $('.up th .upppppp4').removeClass('on')
        $('.up th .upppppp5').removeClass('on')
        $('.up th .upppppp6').removeClass('on')
        $('.up th .upppppp7').removeClass('on')
        $('.up th .upppppp8').removeClass('on')
        $('.up th .upppppp9').removeClass('on')
        $('.up th .upppppp10').removeClass('on')
        $('.up th .upppppp11').removeClass('on')
        $('.up th .upppppp12').removeClass('on')
    })

    $('.up th .down4').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn4').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn4').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn4').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downnnnn4').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
    })

    $('.up th .downnnnnn4').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnnn0').removeClass('on')
        $('.up th .downnnnnn1').removeClass('on')
        $('.up th .downnnnnn2').removeClass('on')
        $('.up th .downnnnnn3').removeClass('on')
        $('.up th .downnnnnn5').removeClass('on')
        $('.up th .downnnnnn6').removeClass('on')
        $('.up th .downnnnnn7').removeClass('on')
        $('.up th .downnnnnn8').removeClass('on')
        $('.up th .downnnnnn9').removeClass('on')
        $('.up th .downnnnnn10').removeClass('on')
        $('.up th .downnnnnn11').removeClass('on')
        $('.up th .downnnnnn12').removeClass('on')
        $('.up th .upppppp0').removeClass('on')
        $('.up th .upppppp1').removeClass('on')
        $('.up th .upppppp2').removeClass('on')
        $('.up th .upppppp3').removeClass('on')
        $('.up th .upppppp4').removeClass('on')
        $('.up th .upppppp5').removeClass('on')
        $('.up th .upppppp6').removeClass('on')
        $('.up th .upppppp7').removeClass('on')
        $('.up th .upppppp8').removeClass('on')
        $('.up th .upppppp9').removeClass('on')
        $('.up th .upppppp10').removeClass('on')
        $('.up th .upppppp11').removeClass('on')
        $('.up th .upppppp12').removeClass('on')
    })

    $('.up th .down5').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn5').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn5').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn5').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downnnnn5').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
    })

    $('.up th .down6').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn6').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn6').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn6').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downnnnn6').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
    })

    $('.up th .down7').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn7').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn7').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn7').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downnnnn7').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
    })

    $('.up th .down8').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn8').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn8').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn8').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downnnnn8').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn9').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
    })

    $('.up th .down9').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn9').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn9').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn9').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downnnnn9').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnnn0').removeClass('on')
        $('.up th .downnnnn1').removeClass('on')
        $('.up th .downnnnn2').removeClass('on')
        $('.up th .downnnnn3').removeClass('on')
        $('.up th .downnnnn4').removeClass('on')
        $('.up th .downnnnn5').removeClass('on')
        $('.up th .downnnnn6').removeClass('on')
        $('.up th .downnnnn7').removeClass('on')
        $('.up th .downnnnn8').removeClass('on')
        $('.up th .downnnnn10').removeClass('on')
        $('.up th .downnnnn11').removeClass('on')
        $('.up th .downnnnn12').removeClass('on')
        $('.up th .uppppp0').removeClass('on')
        $('.up th .uppppp1').removeClass('on')
        $('.up th .uppppp2').removeClass('on')
        $('.up th .uppppp3').removeClass('on')
        $('.up th .uppppp4').removeClass('on')
        $('.up th .uppppp5').removeClass('on')
        $('.up th .uppppp6').removeClass('on')
        $('.up th .uppppp7').removeClass('on')
        $('.up th .uppppp8').removeClass('on')
        $('.up th .uppppp9').removeClass('on')
        $('.up th .uppppp10').removeClass('on')
        $('.up th .uppppp11').removeClass('on')
        $('.up th .uppppp12').removeClass('on')
    })

    $('.up th .down10').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down11').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn10').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn10').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn11').removeClass('on')
        $('.up th .downnn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn10').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn11').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .down11').click(function(){
        $(this).toggleClass('on')
        $('.up th .down0').removeClass('on')
        $('.up th .down1').removeClass('on')
        $('.up th .down2').removeClass('on')
        $('.up th .down3').removeClass('on')
        $('.up th .down4').removeClass('on')
        $('.up th .down5').removeClass('on')
        $('.up th .down6').removeClass('on')
        $('.up th .down7').removeClass('on')
        $('.up th .down8').removeClass('on')
        $('.up th .down9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .down12').removeClass('on')
        $('.up th .up0').removeClass('on')
        $('.up th .up1').removeClass('on')
        $('.up th .up2').removeClass('on')
        $('.up th .up3').removeClass('on')
        $('.up th .up4').removeClass('on')
        $('.up th .up5').removeClass('on')
        $('.up th .up6').removeClass('on')
        $('.up th .up7').removeClass('on')
        $('.up th .up8').removeClass('on')
        $('.up th .up9').removeClass('on')
        $('.up th .up10').removeClass('on')
        $('.up th .up11').removeClass('on')
        $('.up th .up12').removeClass('on')
    })

    $('.up th .downn11').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .downn10').removeClass('on')
        $('.up th .downn12').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })

    $('.up th .downnn11').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnn0').removeClass('on')
        $('.up th .downnn1').removeClass('on')
        $('.up th .downnn2').removeClass('on')
        $('.up th .downnn3').removeClass('on')
        $('.up th .downnn4').removeClass('on')
        $('.up th .downnn5').removeClass('on')
        $('.up th .downnn6').removeClass('on')
        $('.up th .downnn7').removeClass('on')
        $('.up th .downnn8').removeClass('on')
        $('.up th .downnn9').removeClass('on')
        $('.up th .downnn10').removeClass('on')
        $('.up th .downnn12').removeClass('on')
        $('.up th .uppp0').removeClass('on')
        $('.up th .uppp1').removeClass('on')
        $('.up th .uppp2').removeClass('on')
        $('.up th .uppp3').removeClass('on')
        $('.up th .uppp4').removeClass('on')
        $('.up th .uppp5').removeClass('on')
        $('.up th .uppp6').removeClass('on')
        $('.up th .uppp7').removeClass('on')
        $('.up th .uppp8').removeClass('on')
        $('.up th .uppp9').removeClass('on')
        $('.up th .uppp10').removeClass('on')
        $('.up th .uppp11').removeClass('on')
        $('.up th .uppp12').removeClass('on')
    })

    $('.up th .downnnn11').click(function(){
        $(this).toggleClass('on')
        $('.up th .downnnn0').removeClass('on')
        $('.up th .downnnn1').removeClass('on')
        $('.up th .downnnn2').removeClass('on')
        $('.up th .downnnn3').removeClass('on')
        $('.up th .downnnn4').removeClass('on')
        $('.up th .downnnn5').removeClass('on')
        $('.up th .downnnn6').removeClass('on')
        $('.up th .downnnn7').removeClass('on')
        $('.up th .downnnn8').removeClass('on')
        $('.up th .downnnn9').removeClass('on')
        $('.up th .downnnn10').removeClass('on')
        $('.up th .downnnn12').removeClass('on')
        $('.up th .upppp0').removeClass('on')
        $('.up th .upppp1').removeClass('on')
        $('.up th .upppp2').removeClass('on')
        $('.up th .upppp3').removeClass('on')
        $('.up th .upppp4').removeClass('on')
        $('.up th .upppp5').removeClass('on')
        $('.up th .upppp6').removeClass('on')
        $('.up th .upppp7').removeClass('on')
        $('.up th .upppp8').removeClass('on')
        $('.up th .upppp9').removeClass('on')
        $('.up th .upppp10').removeClass('on')
        $('.up th .upppp11').removeClass('on')
        $('.up th .upppp12').removeClass('on')
    })

    $('.up th .downn12').click(function(){
        $(this).toggleClass('on')
        $('.up th .downn0').removeClass('on')
        $('.up th .downn1').removeClass('on')
        $('.up th .downn2').removeClass('on')
        $('.up th .downn3').removeClass('on')
        $('.up th .downn4').removeClass('on')
        $('.up th .downn5').removeClass('on')
        $('.up th .downn6').removeClass('on')
        $('.up th .downn7').removeClass('on')
        $('.up th .downn8').removeClass('on')
        $('.up th .downn9').removeClass('on')
        $('.up th .down10').removeClass('on')
        $('.up th .downn11').removeClass('on')
        $('.up th .upp0').removeClass('on')
        $('.up th .upp1').removeClass('on')
        $('.up th .upp2').removeClass('on')
        $('.up th .upp3').removeClass('on')
        $('.up th .upp4').removeClass('on')
        $('.up th .upp5').removeClass('on')
        $('.up th .upp6').removeClass('on')
        $('.up th .upp7').removeClass('on')
        $('.up th .upp8').removeClass('on')
        $('.up th .upp9').removeClass('on')
        $('.up th .upp10').removeClass('on')
        $('.up th .upp11').removeClass('on')
        $('.up th .upp12').removeClass('on')
    })
    

    // 활성정보 개수 그래프

    var chart = bb.generate({
        data: {
      //  여기부터
        columns: [
        ["predict_score", 30, 10, 10, 10, 10, 20, 10, 30, 20, 20]
        // ["data2", 130, 100, 140, 200, 150, 50]
        ],
        type: "bar", // for ESM specify as: bar()
        colors :{
          "predict_score": "#e44126"
        },
        
        labels : {show: true, colors : "white", centered: true},
      //   chart.resize({
      //     width: 640,
      //     height: 480
      //  }); 
      },
      bar: {
        width: {
          ratio: 0.3
        }
      },
    // 여기까지!!!
      bindto: "#barChart"
    });
    

    //  페이지 넘버링 
    // $(".numBtn-box li").on("click", function () {
    //   var data = $(this).attr("data-rel");
    //   var $content = $("." + data);
    //   $(this).addClass("on").siblings().removeClass("on");
    //   $content.show().siblings().hide();
    // });

    // 페이징01

    $(".paging01 .numBtn-box01 .num-btn").on("click", function () {
        var data = $(this).attr("data-rel");
        var $content = $("." + data);
        $(this).addClass("active").siblings().removeClass("active");
        $content.show().siblings().hide();
      });
          
      $('.p_next01').click(function(){
        $(".numBtn-box01").find('.num-btn.active').next().addClass('active');
        $(".numBtn-box01").find('.num-btn.active').prev().removeClass('active');
      });
      $('.p_prev01').click(function(){
        $(".numBtn-box01").find('.num-btn.active').prev().addClass('active');
        $(".numBtn-box01").find('.num-btn.active').next().removeClass('active');
      });

      // 페이지 넘버링 02
 $(".paging02 .numBtn-box02 .num-btn").on("click", function () {
    var data = $(this).attr("data-rel");
    var $content = $("." + data);
    $(this).addClass("active").siblings().removeClass("active");
    $content.show().siblings().hide();
  });
      
  $('.p_next02').click(function(){
    $(".numBtn-box02").find('.num-btn.active').next().addClass('active');
    $(".numBtn-box02").find('.num-btn.active').prev().removeClass('active');
  });
  $('.p_prev02').click(function(){
    $(".numBtn-box02").find('.num-btn.active').prev().addClass('active');
    $(".numBtn-box02").find('.num-btn.active').next().removeClass('active');
  });
  
      // 페이지 넘버링 03
      $(".paging03 .numBtn-box03 .num-btn").on("click", function () {
        var data = $(this).attr("data-rel");
        var $content = $("." + data);
        $(this).addClass("active").siblings().removeClass("active");
        $content.show().siblings().hide();
      });
          
      $('.p_next03').click(function(){
        $(".numBtn-box03").find('.num-btn.active').next().addClass('active');
        $(".numBtn-box03").find('.num-btn.active').prev().removeClass('active');
      });
      $('.p_prev03').click(function(){
        $(".numBtn-box03").find('.num-btn.active').prev().addClass('active');
        $(".numBtn-box03").find('.num-btn.active').next().removeClass('active');
      });
  
    // 페이지 넘버링 04
    $(".paging04 .numBtn-box04 .num-btn").on("click", function () {
      var data = $(this).attr("data-rel");
      var $content = $("." + data);
      $(this).addClass("active").siblings().removeClass("active");
      $content.show().siblings().hide();
    });
        
    $('.p_next04').click(function(){
      $(".numBtn-box04").find('.num-btn.active').next().addClass('active');
      $(".numBtn-box04").find('.num-btn.active').prev().removeClass('active');
    });
    $('.p_prev04').click(function(){
      $(".numBtn-box04").find('.num-btn.active').prev().addClass('active');
      $(".numBtn-box04").find('.num-btn.active').next().removeClass('active');
    });

    // 페이지 넘버링 05
    $(".paging05 .numBtn-box05 .num-btn").on("click", function () {
        var data = $(this).attr("data-rel");
        var $content = $("." + data);
        $(this).addClass("active").siblings().removeClass("active");
        $content.show().siblings().hide();
      });
          
      $('.p_next05').click(function(){
        $(".numBtn-box05").find('.num-btn.active').next().addClass('active');
        $(".numBtn-box05").find('.num-btn.active').prev().removeClass('active');
      });
      $('.p_prev05').click(function(){
        $(".numBtn-box05").find('.num-btn.active').prev().addClass('active');
        $(".numBtn-box05").find('.num-btn.active').next().removeClass('active');
      });

      // 페이지 넘버링 06
    $(".paging06 .numBtn-box06 .num-btn").on("click", function () {
        var data = $(this).attr("data-rel");
        var $content = $("." + data);
        $(this).addClass("active").siblings().removeClass("active");
        $content.show().siblings().hide();
      });
          
      $('.p_next06').click(function(){
        $(".numBtn-box06").find('.num-btn.active').next().addClass('active');
        $(".numBtn-box06").find('.num-btn.active').prev().removeClass('active');
      });
      $('.p_prev06').click(function(){
        $(".numBtn-box06").find('.num-btn.active').prev().addClass('active');
        $(".numBtn-box06").find('.num-btn.active').next().removeClass('active');
      });
    

    // select 선택하면 행의 배경색이 변한다.
    

    $('.table1 tbody .select:nth-child(1)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table1 tbody .select:nth-child(3)').removeClass('on')
        $('.table1 tbody .select:nth-child(5)').removeClass('on')
        $('.table1 tbody .select:nth-child(7)').removeClass('on')
        $('.table1 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table1 tbody .select:nth-child(3)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table1 tbody .select:nth-child(1)').removeClass('on')
        $('.table1 tbody .select:nth-child(5)').removeClass('on')
        $('.table1 tbody .select:nth-child(7)').removeClass('on')
        $('.table1 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table1 tbody .select:nth-child(5)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table1 tbody .select:nth-child(1)').removeClass('on')
        $('.table1 tbody .select:nth-child(3)').removeClass('on')
        $('.table1 tbody .select:nth-child(7)').removeClass('on')
        $('.table1 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table1 tbody .select:nth-child(7)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table1 tbody .select:nth-child(1)').removeClass('on')
        $('.table1 tbody .select:nth-child(3)').removeClass('on')
        $('.table1 tbody .select:nth-child(5)').removeClass('on')
        $('.table1 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table1 tbody .select:nth-child(9)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table1 tbody .select:nth-child(1)').removeClass('on')
        $('.table1 tbody .select:nth-child(3)').removeClass('on')
        $('.table1 tbody .select:nth-child(5)').removeClass('on')
        $('.table1 tbody .select:nth-child(7)').removeClass('on')
    });

    // 전체 화합물에 대한 타겟 활성정보 (문헌)에서 타겟을 선택했을때

    $('.table3 tbody .select:nth-child(1)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(7)').removeClass('on')
        $('.table3 tbody .select:nth-child(9)').removeClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(7)').removeClass('on')
        $('.table4 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table3 tbody .select:nth-child(3)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(7)').removeClass('on')
        $('.table3 tbody .select:nth-child(9)').removeClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(7)').removeClass('on')
        $('.table4 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table3 tbody .select:nth-child(5)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(7)').removeClass('on')
        $('.table3 tbody .select:nth-child(9)').removeClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(7)').removeClass('on')
        $('.table4 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table3 tbody .select:nth-child(7)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(9)').removeClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(7)').removeClass('on')
        $('.table4 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table3 tbody .select:nth-child(9)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(7)').removeClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(7)').removeClass('on')
        $('.table4 tbody .select:nth-child(9)').removeClass('on')
    });

    // 전체 화합물에 대한 타겟 활성정보 (예측)에서 타겟을 선택했을때


    $('.table4 tbody .select:nth-child(1)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(7)').removeClass('on')
        $('.table4 tbody .select:nth-child(9)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(7)').removeClass('on')
        $('.table3 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table4 tbody .select:nth-child(3)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(7)').removeClass('on')
        $('.table4 tbody .select:nth-child(9)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(7)').removeClass('on')
        $('.table3 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table4 tbody .select:nth-child(5)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(7)').removeClass('on')
        $('.table4 tbody .select:nth-child(9)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(7)').removeClass('on')
        $('.table3 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table4 tbody .select:nth-child(7)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(9)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(7)').removeClass('on')
        $('.table3 tbody .select:nth-child(9)').removeClass('on')
    });

    $('.table4 tbody .select:nth-child(9)').click(function(){
        // 화합물 선택하면 배경색과 글씨색이 바뀐다.
        $(this).addClass('on')
        $('.table4 tbody .select:nth-child(1)').removeClass('on')
        $('.table4 tbody .select:nth-child(3)').removeClass('on')
        $('.table4 tbody .select:nth-child(5)').removeClass('on')
        $('.table4 tbody .select:nth-child(7)').removeClass('on')
        $('.table3 tbody .select:nth-child(1)').removeClass('on')
        $('.table3 tbody .select:nth-child(3)').removeClass('on')
        $('.table3 tbody .select:nth-child(5)').removeClass('on')
        $('.table3 tbody .select:nth-child(7)').removeClass('on')
        $('.table3 tbody .select:nth-child(9)').removeClass('on')
    });
    

    // 확장 버튼을 누르면 ... 말줄임표로 되어있던 내용이 전체적으로 보인다. 
    
        $("#module1").hide();
        $("#module2").hide();
        $("#module3").hide();
        $("#module4").hide();
        $("#module5").hide();
        $("#module6").hide();
        $("#module7").hide();
        $("#module8").hide();
        $("#module9").hide();
        $("#module10").hide();
        $("#module11").hide();
        $("#module12").hide();
        $("#module13").hide();
        $("#module14").hide();
        $("#module15").hide();
        $("#module16").hide();
        $("#module17").hide();
        $("#module18").hide();
        $("#module19").hide();
        $("#module20").hide();
        $("#module21").hide();
        $("#module22").hide();
        $("#module23").hide();
        $("#module24").hide();
        $("#module25").hide();
        $("#module26").hide();
        $("#module27").hide();
        $("#module28").hide();
        $("#module29").hide();
        $("#module30").hide();
        $("#module31").hide();
        $("#module32").hide();
        $("#module33").hide();
        $("#module34").hide();
        $("#module35").hide();
        $("#module36").hide();
        $("#module37").hide();
        $("#module38").hide();
        $("#module39").hide();
        $("#module40").hide();
        $("#module41").hide();
        $("#module42").hide();
        $("#module43").hide();
        $("#module44").hide();
        $("#module45").hide();
        $("#module46").hide();
        $("#module47").hide();
        $("#module48").hide();
        $("#module49").hide();
        $("#module50").hide();
        $("#module0").hide();
        $("#module00").hide();

        $(".expand1").click(function(){
            $(this).hide();
            $('.table1 tbody .select:nth-child(1)').hide();
            $('#module1').slideDown()
        });

        $(".reduce1").click(function(){
            $('#module1').hide();
            $('.expand1').show();
            $('.table1 tbody .select:nth-child(1)').show();
        });

        $(".expand2").click(function(){
            $(this).hide();
            $('#module2').slideDown();
            $('.table1 tbody .select:nth-child(3)').hide();
        });

        $(".reduce2").click(function(){
            $('#module2').hide();
            $('.expand2').show()
            $('.table1 tbody .select:nth-child(3)').show();
        });

        $(".expand3").click(function(){
            $(this).hide();
            $('#module3').slideDown()
            $('.table1 tbody .select:nth-child(5)').hide();
        });

        $(".reduce3").click(function(){
            $('#module3').hide();
            $('.expand3').show()
            $('.table1 tbody .select:nth-child(5)').show();
        });

        $(".expand4").click(function(){
            $(this).hide();
            $('#module4').slideDown();
            $('.table1 tbody .select:nth-child(7)').hide();
        });

        $(".reduce4").click(function(){
            $('#module4').hide();
            $('.expand4').show();
            $('.table1 tbody .select:nth-child(7)').show();
        });

        $(".expand5").click(function(){
            $(this).hide();
            $('#module5').slideDown();
            $('.table1 tbody .select:nth-child(9)').hide();
        });

        $(".reduce5").click(function(){
            $('#module5').hide();
            $('.expand5').show();
            $('.table1 tbody .select:nth-child(9)').show();
        });

        $(".expand6").click(function(){
            $(this).hide();
            $('#module6').slideDown();
            $('.table6 tbody tr:nth-child(1)').hide();
        });

        $(".reduce6").click(function(){
            $('#module6').hide();
            $('.expand6').show();
            $('.table6 tbody tr:nth-child(1)').show();
        });
        $(".expand7").click(function(){
            $(this).hide();
            $('#module7').slideDown();
            $('.table6 tbody tr:nth-child(3)').hide();
        });

        $(".reduce7").click(function(){
            $('#module7').hide();
            $('.expand7').show();
            $('.table6 tbody tr:nth-child(3)').show();
        });
        $(".expand8").click(function(){
            $(this).hide();
            $('#module8').slideDown();
            $('.table6 tbody tr:nth-child(5)').hide();
        });

        $(".reduce8").click(function(){
            $('#module8').hide();
            $('.expand8').show();
            $('.table6 tbody tr:nth-child(5)').show();
        });

        $(".expand9").click(function(){
            $(this).hide();
            $('#module9').slideDown();
            $('.table6 tbody tr:nth-child(7)').hide();
        });

        $(".reduce9").click(function(){
            $('#module9').hide();
            $('.expand9').show();
            $('.table6 tbody tr:nth-child(7)').show();
        });

        $(".expand10").click(function(){
            $(this).hide();
            $('#module10').slideDown();
            $('.table6 tbody tr:nth-child(9)').hide();
        });

        $(".reduce10").click(function(){
            $('#module10').hide();
            $('.expand10').show();
            $('.table6 tbody tr:nth-child(9)').show();
        });

        $(".expand11").click(function(){
            $(this).hide();
            $('#module11').slideDown();
            $('.table2 tbody tr:nth-child(1)').hide();
        });

        $(".reduce11").click(function(){
            $('#module11').hide();
            $('.expand11').show();
            $('.table2 tbody tr:nth-child(1)').show();
        });

        $(".expand12").click(function(){
            $(this).hide();
            $('#module12').slideDown();
            $('.table2 tbody tr:nth-child(3)').hide();
        });

        $(".reduce12").click(function(){
            $('#module12').hide();
            $('.expand12').show();
            $('.table2 tbody tr:nth-child(3)').show();
        });

        $(".expand13").click(function(){
            $(this).hide();
            $('#module13').slideDown();
            $('.table2 tbody tr:nth-child(5)').hide();
        });

        $(".reduce13").click(function(){
            $('#module13').hide();
            $('.expand13').show();
            $('.table2 tbody tr:nth-child(5)').show();
        });

        $(".expand14").click(function(){
            $(this).hide();
            $('#module14').slideDown();
            $('.table2 tbody tr:nth-child(7)').hide();
        });

        $(".reduce14").click(function(){
            $('#module14').hide();
            $('.expand14').show();
            $('.table2 tbody tr:nth-child(7)').show();
        });
        
        $(".expand15").click(function(){
            $(this).hide();
            $('#module15').slideDown();
            $('.table2 tbody tr:nth-child(9)').hide();
        });

        $(".reduce15").click(function(){
            $('#module15').hide();
            $('.expand15').show();
            $('.table2 tbody tr:nth-child(9)').show();
        });

        $(".expand16").click(function(){
            $(this).hide();
            $('#module16').slideDown();
            $('.table3 tbody .select:nth-child(1)').hide();
        });

        $(".reduce16").click(function(){
            $('#module16').hide();
            $('.expand16').show();
            $('.table3 tbody .select:nth-child(1)').show();
        });

        $(".expand17").click(function(){
            $(this).hide();
            $('#module17').slideDown();
            $('.table3 tbody .select:nth-child(3)').hide();
        });

        $(".reduce17").click(function(){
            $('#module17').hide();
            $('.expand17').show();
            $('.table3 tbody .select:nth-child(3)').show();
        });

        $(".expand18").click(function(){
            $(this).hide();
            $('#module18').slideDown();
            $('.table3 tbody .select:nth-child(5)').hide();
        });

        $(".reduce18").click(function(){
            $('#module18').hide();
            $('.expand18').show();
            $('.table3 tbody .select:nth-child(5)').show();
        });

        $(".expand19").click(function(){
            $(this).hide();
            $('#module19').slideDown();
            $('.table3 tbody .select:nth-child(7)').hide();
        });

        $(".reduce19").click(function(){
            $('#module19').hide();
            $('.expand19').show();
            $('.table3 tbody .select:nth-child(7)').show();
        });

        $(".expand20").click(function(){
            $(this).hide();
            $('#module20').slideDown();
            $('.table3 tbody .select:nth-child(9)').hide();
        });

        $(".reduce20").click(function(){
            $('#module20').hide();
            $('.expand20').show();
            $('.table3 tbody .select:nth-child(9)').show();
        });

        $(".expand21").click(function(){
            $(this).hide();
            $('#module21').slideDown();
            $('.table4 tbody .select:nth-child(1)').hide();
        });

        $(".reduce21").click(function(){
            $('#module21').hide();
            $('.expand21').show();
            $('.table4 tbody .select:nth-child(1)').show();
        });

        $(".expand22").click(function(){
            $(this).hide();
            $('#module22').slideDown();
            $('.table4 tbody .select:nth-child(3)').hide();
        });

        $(".reduce22").click(function(){
            $('#module22').hide();
            $('.expand22').show();
            $('.table4 tbody .select:nth-child(3)').show();
        });

        $(".expand23").click(function(){
            $(this).hide();
            $('#module23').slideDown();
            $('.table4 tbody .select:nth-child(5)').hide();
        });

        $(".reduce23").click(function(){
            $('#module23').hide();
            $('.expand23').show();
            $('.table4 tbody .select:nth-child(5)').show();
        });

        $(".expand24").click(function(){
            $(this).hide();
            $('#module24').slideDown();
            $('.table4 tbody .select:nth-child(7)').hide();
        });

        $(".reduce24").click(function(){
            $('#module24').hide();
            $('.expand24').show();
            $('.table4 tbody .select:nth-child(7)').show();
        });

        $(".expand25").click(function(){
            $(this).hide();
            $('#module25').slideDown();
            $('.table4 tbody .select:nth-child(9)').hide();
        });

        $(".reduce25").click(function(){
            $('#module25').hide();
            $('.expand25').show();
            $('.table4 tbody .select:nth-child(9)').show();
        });

        $(".expand26").click(function(){
            $(this).hide();
            $('#module26').slideDown();
            $('.table7 tbody tr:nth-child(1)').hide();
        });

        $(".reduce26").click(function(){
            $('#module26').hide();
            $('.expand26').show();
            $('.table7 tbody tr:nth-child(1)').show();
        });

        $(".expand27").click(function(){
            $(this).hide();
            $('#module27').slideDown();
            $('.table7 tbody tr:nth-child(3)').hide();
        });

        $(".reduce27").click(function(){
            $('#module27').hide();
            $('.expand27').show();
            $('.table7 tbody tr:nth-child(3)').show();
        });

        $(".expand28").click(function(){
            $(this).hide();
            $('#module28').slideDown();
            $('.table7 tbody tr:nth-child(5)').hide();
        });

        $(".reduce28").click(function(){
            $('#module28').hide();
            $('.expand28').show();
            $('.table7 tbody tr:nth-child(5)').show();
        });

        $(".expand29").click(function(){
            $(this).hide();
            $('#module29').slideDown();
            $('.table7 tbody tr:nth-child(7)').hide();
        });

        $(".reduce29").click(function(){
            $('#module29').hide();
            $('.expand29').show();
            $('.table7 tbody tr:nth-child(7)').show();
        });

        $(".expand30").click(function(){
            $(this).hide();
            $('#module30').slideDown();
            $('.table7 tbody tr:nth-child(9)').hide();
        });

        $(".reduce30").click(function(){
            $('#module30').hide();
            $('.expand30').show();
            $('.table7 tbody tr:nth-child(9)').show();
        });

        // for (let i=31; i<=40; i++) {
        //     for (let j=1; j<=19; j++) {
                
        //         if(j%2 === 1) {
        //             console.log(j);
        //             for (let y=1; y<=j; y++) {
        //                 $('.table8 tbody tr:nth-child('+y+')').hide();
        //             }
                    
        //         }
                
        //     } ;
            
        //     $(".expand"+i).click(function(){
        //         $(this).hide();
        //         $('#module'+i).slideDown();
        //     });
        // }

        $(".expand31").click(function(){
            $(this).hide();
            $('#module31').slideDown();
            $('.table8 tbody tr:nth-child(1)').hide();
        });

        $(".reduce31").click(function(){
            $('#module31').hide();
            $('.expand31').show();
            $('.table8 tbody tr:nth-child(1)').show();
        });

        $(".expand32").click(function(){
            $(this).hide();
            $('#module32').slideDown();
            $('.table8 tbody tr:nth-child(3)').hide();
        });

        $(".reduce32").click(function(){
            $('#module32').hide();
            $('.expand32').show();
            $('.table8 tbody tr:nth-child(3)').show();
        });

        $(".expand33").click(function(){
            $(this).hide();
            $('#module33').slideDown();
            $('.table8 tbody tr:nth-child(5)').hide();
        });

        $(".reduce33").click(function(){
            $('#module33').hide();
            $('.expand33').show();
            $('.table8 tbody tr:nth-child(5)').show();
        });

        $(".expand34").click(function(){
            $(this).hide();
            $('#module34').slideDown();
            $('.table8 tbody tr:nth-child(7)').hide();
        });

        $(".reduce34").click(function(){
            $('#module34').hide();
            $('.expand34').show();
            $('.table8 tbody tr:nth-child(7)').show();
        });

        $(".expand35").click(function(){
            $(this).hide();
            $('#module35').slideDown();
            $('.table8 tbody tr:nth-child(9)').hide();
        });

        $(".reduce35").click(function(){
            $('#module35').hide();
            $('.expand35').show();
            $('.table8 tbody tr:nth-child(9)').show();
        });

        $(".expand36").click(function(){
            $(this).hide();
            $('#module36').slideDown();
            $('.table8 tbody tr:nth-child(11)').hide();
        });

        $(".reduce36").click(function(){
            $('#module36').hide();
            $('.expand36').show();
            $('.table8 tbody tr:nth-child(11)').show();
        });

        $(".expand37").click(function(){
            $(this).hide();
            $('#module37').slideDown();
            $('.table8 tbody tr:nth-child(13)').hide();
        });

        $(".reduce37").click(function(){
            $('#module37').hide();
            $('.expand37').show();
            $('.table8 tbody tr:nth-child(13)').show();
        });

        $(".expand38").click(function(){
            $(this).hide();
            $('#module38').slideDown();
            $('.table8 tbody tr:nth-child(15)').hide();
        });

        $(".reduce38").click(function(){
            $('#module38').hide();
            $('.expand38').show();
            $('.table8 tbody tr:nth-child(15)').show();
        });

        $(".expand39").click(function(){
            $(this).hide();
            $('#module39').slideDown();
            $('.table8 tbody tr:nth-child(17)').hide();
        });

        $(".reduce39").click(function(){
            $('#module39').hide();
            $('.expand39').show();
            $('.table8 tbody tr:nth-child(17)').show();
        });

        $(".expand40").click(function(){
            $(this).hide();
            $('#module40').slideDown();
            $('.table8 tbody tr:nth-child(19)').hide();
        });

        $(".reduce40").click(function(){
            $('#module40').hide();
            $('.expand40').show();
            $('.table8 tbody tr:nth-child(19)').show();
        });

        $(".expand41").click(function(){
            $(this).hide();
            $('#module41').slideDown();
            $('.table9 tbody tr:nth-child(1)').hide();
        });

        $(".reduce41").click(function(){
            $('#module41').hide();
            $('.expand41').show();
            $('.table9 tbody tr:nth-child(1)').show();
        });

        $(".expand42").click(function(){
            $(this).hide();
            $('#module42').slideDown();
            $('.table9 tbody tr:nth-child(3)').hide();
        });

        $(".reduce42").click(function(){
            $('#module42').hide();
            $('.expand42').show();
            $('.table9 tbody tr:nth-child(3)').show();
        });

        $(".expand43").click(function(){
            $(this).hide();
            $('#module43').slideDown();
            $('.table9 tbody tr:nth-child(5)').hide();
        });

        $(".reduce43").click(function(){
            $('#module43').hide();
            $('.expand43').show();
            $('.table9 tbody tr:nth-child(5)').show();
        });

        $(".expand44").click(function(){
            $(this).hide();
            $('#module44').slideDown();
            $('.table9 tbody tr:nth-child(7)').hide();
        });

        $(".reduce44").click(function(){
            $('#module44').hide();
            $('.expand44').show();
            $('.table9 tbody tr:nth-child(7)').show();
        });

        $(".expand45").click(function(){
            $(this).hide();
            $('#module45').slideDown();
            $('.table9 tbody tr:nth-child(9)').hide();
        });

        $(".reduce45").click(function(){
            $('#module45').hide();
            $('.expand45').show();
            $('.table9 tbody tr:nth-child(9)').show();
        });

        $(".expand46").click(function(){
            $(this).hide();
            $('#module46').slideDown();
            $('.table9 tbody tr:nth-child(11)').hide();
        });

        $(".reduce46").click(function(){
            $('#module46').hide();
            $('.expand46').show();
            $('.table9 tbody tr:nth-child(11)').show();
        });

        $(".expand47").click(function(){
            $(this).hide();
            $('#module47').slideDown();
            $('.table9 tbody tr:nth-child(13)').hide();
        });

        $(".reduce47").click(function(){
            $('#module47').hide();
            $('.expand47').show();
            $('.table9 tbody tr:nth-child(13)').show();
        });

        $(".expand48").click(function(){
            $(this).hide();
            $('#module48').slideDown();
            $('.table9 tbody tr:nth-child(15)').hide();
        });

        $(".reduce48").click(function(){
            $('#module48').hide();
            $('.expand48').show();
            $('.table9 tbody tr:nth-child(15)').show();
        });

        $(".expand49").click(function(){
            $(this).hide();
            $('#module49').slideDown();
            $('.table9 tbody tr:nth-child(17)').hide();
        });

        $(".reduce49").click(function(){
            $('#module49').hide();
            $('.expand49').show();
            $('.table9 tbody tr:nth-child(17)').show();
        });

        $(".expand50").click(function(){
            $(this).hide();
            $('#module50').slideDown();
            $('.table9 tbody tr:nth-child(19)').hide();
        });

        $(".reduce50").click(function(){
            $('#module50').hide();
            $('.expand50').show();
            $('.table9 tbody tr:nth-child(19)').show();
        });

        $(".expand0").click(function(){
            $(this).hide();
            $('#module0').slideDown();
            $('.table0 tbody tr:nth-child(1)').hide();
        });

        $(".reduce0").click(function(){
            $('#module0').hide();
            $('.expand0').show();
            $('.table0 tbody tr:nth-child(1)').show();
        });

        $(".expand00").click(function(){
            $(this).hide();
            $('#module00').slideDown();
            $('.table00 tbody tr:nth-child(1)').hide();
        });

        $(".reduce00").click(function(){
            $('#module00').hide();
            $('.expand00').show();
            $('.table00 tbody tr:nth-child(1)').show();
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
        
        
        var iframe = document.getElementById('myframe')
/*
		window.addEventListener('DOMContentLoaded', function () {
			iframe.addEventListener('load', autoHeight)
		})
		
		function autoHeight() {
			var frame = iframe
		    var sub = frame.contentDocument ? frame.contentDocument : frame.contentWindow.document
		    iframe.height = sub.body.scrollHeight
		}
*/

  });