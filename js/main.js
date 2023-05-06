/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 상단으로 이동 버튼 보이기!
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 상단으로 이동 버튼 숨기기!
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});
toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});


/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


/**
 * 슬라이드 요소 관리
 */
new Swiper('.notice .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용
    el: '.promotion .swiper-pagination', // 페이지 번호 요소
    clickable: true // 사용자의 페이지 번호 제어 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    prevEl: '.promotion .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.promotion .swiper-button-next' // 다음 버튼 요소
  }
});
new Swiper('.awards .swiper', {
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  navigation: { // 슬라이드 이전/다음 버튼 사용
    prevEl: '.awards .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.awards .swiper-button-next' // 다음 버튼 요소
  }
});


/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('section.promotion');
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion');

// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});


/**
 * 부유하는 요소 관리
 */
gsap.to('.floating1', 1.5, {
  delay: 1, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
  y: 15, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
  repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
  yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
  ease: Power1.easeInOut // Easing 함수 적용.
});
gsap.to('.floating2', 2, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});


/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});


/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


const result = async () => {
  const response = await axios.get(
    'https://apis.data.go.kr/B551011/KorWithService1/searchKeyword1?serviceKey=cU5naztFnlW7LmXTZhJAkm6LicTILQasUDFvBMgMVe3K1gTYi7ZsvvDoCrU9zolhJqDBeb0%2FBFXmJ7tQ5O2REQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&listYN=Y&arrange=A&keyword=%EB%B6%80%EC%82%B0&_type=json'
  );
  console.log('response 결과 : ', response.data.response.body.items.item);
  const datainfo = response.data.response.body.items.item

  return datainfo
};

result().then(datainfo => {
  // 각 객체를 HTML tr 태그로 변환하여 새로운 배열 생성
  const trList = datainfo.map(item => `
    <tr>
      <td>${item.title}</td>
      <td>${item.addr1}</td>
      <td>${item.tel}</td>
      <td>${item.mapx}</td>
      <td>${item.mapy}</td>
    </tr>
  `);
  
  // tr 태그 문자열 배열을 하나의 문자열로 합치기
  const html = `
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>제목</th>
          <th>주소</th>
          <th>전화번호</th>
          <th>위도</th>
          <th>경도</th>
        </tr>
      </thead>
      <tbody>
        ${trList.join('')}
      </tbody>
    </table>
  `;
  
  // 결과를 HTML 문서에 삽입
  const tableContainer = document.querySelector('#dataInfo');
  tableContainer.innerHTML = html;
});
result().then(datainfo => {
  const mapContainer = document.getElementById('map');
  const options = { 
    center: new kakao.maps.LatLng(datainfo[0].mapy, datainfo[0].mapx),
    level: 5
    
  };
  const map = new kakao.maps.Map(mapContainer, options);
  map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

  datainfo.forEach(item => {
    const markerPosition = new kakao.maps.LatLng(item.mapy, item.mapx);

    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
  });

  // mapContainer.appendChild(map);
});

//날씨
const result2 = async () => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=Busan&appid=ad020481bfabee5be75fd5fcd20d4fc7`
  );
  console.log('response 결과 : ', response.data);
  const weather = response.data;

  return weather;
};
result2()
  .then(data => {
    console.log(data);

    // 요소에 데이터 출력
    // document.getElementById("weather-condition").textContent = data.weather[0].description;
    document.getElementById("weather-temperature").textContent = `${(data.main.temp - 273.15).toFixed(2)} °C`; //Kelvin -> Celsius 단위 변환
    document.getElementById("weather-humidity").textContent = `${data.main.humidity}%`;

  // 아이콘 변경
  const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  document.getElementById("weather-icon").style.backgroundImage = `url('${iconUrl}')`;

      // 모달 버튼 클릭시 모달 창 띄우기
      const modalButton = document.getElementById("modal-button");
      const modal = document.getElementById("weather-modal");
      const closeBtn = document.getElementsByClassName("close")[0];
  
      modalButton.onclick = function() {
        modal.style.display = "block";
      }
  
      closeBtn.onclick = function() {
        modal.style.display = "none";
      }
  
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    })
.catch(error => {
  console.error(error);
});