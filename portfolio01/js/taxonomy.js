$(function () {
    var i1 = document.createElement("i"); //i1이라는 변수에 첫번째 아이콘 태그 <i> 만듦
    var i2 = document.createElement("i"); //i2이라는 변수에 두번째 아이콘 태그 <i> 만듦
    var nbsp1 = document.createTextNode("\u00a0"); //nbsp1라는 변수에 첫번째 아이콘 태그 앞에 사용할 띄어쓰기 텍스트 추가
    var nbsp2 = document.createTextNode("\u00a0"); //nbsp2라는 변수에 두개의 아이콘 태그 사이에 사용할 띄어쓰기 텍스트 추가
    i1.setAttribute("data-toggle", "tooltip"); //첫번째 아이콘 태그에 속성 네개 추가
    i1.setAttribute("data-placement", "bottom");
    i1.setAttribute("title", "트리보기");
    i1.setAttribute("class", "bi bi-list-ul");
    i2.setAttribute("data-toggle", "tooltip"); //두번째 아이콘 태그에 속성 네개 추가
    i2.setAttribute("data-placement", "bottom");
    i2.setAttribute("title", "선택하기");
    i2.setAttribute("class", "bi bi-check-circle-fill");
    $(".list>ul>li").append(nbsp1, i1, nbsp2, i2); //.list>ul>li에다가 '공백+첫번째아이콘태그+공백+두번째아이콘태그'를 갖다붙인다.

    $('[data-toggle="tooltip"]').tooltip(); //툴팁 나오게 하기

  });