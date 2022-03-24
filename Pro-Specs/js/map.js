$(function () {
    //지도위도와 경도를 저장할 배열만들기
    let mapX = new Array(37.52808103887396, 37.55575141478772, 37.53129749102806, 37.556744967029566, 37.48800070247272, 37.48882865735253)
    let mapY = new Array(126.96778000653153, 126.97035977720317, 126.86352869730992, 126.93662462793942, 126.98263503982938, 126.88465165265515)


    //선택한 주소가 누구인지를 체크할 변수
    let sMap = 0;

    //선택한 마커가 누구인지를 체크할 변수
    let stname = 0;

    //마커 클릭시 매장이름 인덱스 만들기
    let storename = new Array("<div style='width:190px; padding:5px ;'>프로스펙스 용산직영점</div>", "<div style='width:220px; padding:5px;'>프로스펙스 서울역롯데마트점</div>", "<div style='width:160px; padding:5px;'>프로스펙스 목동점</div>", "<div style='width:190px; padding:5px;'>프로스펙스 현대신촌점</div>", "<div style='width:160px; padding:5px;'>프로스펙스 방배점</div>", "<div style='width:190px; padding:5px;'>프로스펙스 구로대리점</div>");

    function panTo() {

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(mapX[sMap], mapY[sMap]), // 지도의 중심좌표
                level: 2 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


        // 마커가 표시될 위치입니다
        markerPosition = new kakao.maps.LatLng(mapX[sMap], mapY[sMap]);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        var iwContent = storename[stname], // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
            
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function () {
            stname = $(this).index();
            console.log(stname);
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.open(map, marker);
        });
    }


    panTo();

    $(".storeBox>div").on("click", function () {
        stname = $(this).index();
        console.log(stname);
        sMap = $(this).index();
        panTo();
        $(this).addClass("active").siblings().removeClass("active");
    })



})