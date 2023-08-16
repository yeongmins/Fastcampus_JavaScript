// 모달을 열기 위한 요소들을 변수에 저장
const registerButton = document.getElementById("register_button"); // 등록 버튼
const closeButton = document.getElementById("close_button"); // 닫기 버튼
const registerModal = document.getElementById("register"); // 등록 모달 창
const body = document.body; // body 요소

// 등록 버튼에 클릭 이벤트 리스너 추가
registerButton.addEventListener("click", () => {
  registerModal.classList.add("show"); // 등록 모달 창에 "show" 클래스 추가하여 표시
  body.classList.add("modal-open"); // body에 "modal-open" 클래스 추가하여 스크롤 방지
});

// 닫기 버튼에 클릭 이벤트 리스너 추가
closeButton.addEventListener("click", () => {
  registerModal.classList.remove("show"); // 등록 모달 창에서 "show" 클래스 제거하여 숨김
  body.classList.remove("modal-open"); // body에서 "modal-open" 클래스 제거하여 스크롤 가능하게
});

// 등록 모달 내에서 실제 등록 작업을 처리하는 부분
document.getElementById("modal_register").addEventListener("click", function () {
  // 입력된 정보 가져오기
  const name = document.getElementById("name_ID").value; // 이름
  const email = document.getElementById("email_ID").value; // 이메일
  const phone = document.getElementById("phone_ID").value; // 전화번호
  const rank = document.getElementById("rank_ID").value; // 직급
  const imgInput = document.getElementById("file_input"); // 파일 업로드 입력 요소
  const imgURL = imgInput.files[0] ? URL.createObjectURL(imgInput.files[0]) : ""; // 이미지 URL 생성

  // 등록된 정보를 모달 내에 표시하는 부분
  document.getElementById("name_text").innerHTML = name; // 이름 표시
  document.getElementById("email_text").innerHTML = email; // 이메일 표시
  document.getElementById("phone_text").innerHTML = phone; // 전화번호 표시
  document.getElementById("rank_text").innerHTML = rank; // 직급 표시
  document.getElementById("view_img_ID").src = imgURL; // 이미지 표시

  // 새로운 리스트 아이템 생성 및 추가
  const mainList = document.getElementById("main_list"); // 리스트 컨테이너
  const listItem = document.createElement("div"); // 새로운 리스트 아이템 요소 생성
  listItem.classList.add("list_item"); // 생성된 아이템에 "list_item" 클래스 추가
  
  // 리스트 아이템 내부 요소들 생성
  const listInput = document.createElement("input"); // 체크박스 생성
  listInput.classList.add("list_input"); // 생성된 체크박스에 "list_input" 클래스 추가
  listInput.type = "checkbox"; // 입력 타입을 체크박스로 설정
  listInput.name = "list_checkbox"; // 체크박스의 이름 설정
  listItem.appendChild(listInput); // 체크박스를 리스트 아이템에 추가
  
  const itemWrap = document.createElement("div"); // 아이템 내용을 감싸는 div 생성
  itemWrap.classList.add("item_wrap"); // 생성된 div에 "item_wrap" 클래스 추가
  
  const itemImg = document.createElement("div"); // 이미지를 감싸는 div 생성
  itemImg.classList.add("item_img"); // 생성된 div에 "item_img" 클래스 추가
  
  const profileImage = document.createElement("img"); // 이미지 요소 생성
  profileImage.src = imgURL; // 이미지의 소스 설정
  profileImage.alt = "프로필 이미지"; // 이미지의 대체 텍스트 설정
  itemImg.appendChild(profileImage); // 이미지를 "item_img" div에 추가
  
  itemWrap.appendChild(itemImg); // "item_img" div를 "item_wrap" div에 추가
  
  const spans = [name, email, phone, rank];
  for (const spanText of spans) {
      const span = document.createElement("span"); // 각 정보를 담는 span 생성
      span.textContent = spanText; // span의 텍스트 내용 설정
      itemWrap.appendChild(span); // span을 "item_wrap" div에 추가
  }
  
  listItem.appendChild(itemWrap); // "item_wrap" div를 리스트 아이템에 추가
  mainList.appendChild(listItem); // 리스트 아이템을 리스트 컨테이너에 추가
  
  // 등록이 완료되었으므로 모달을 닫음
  registerModal.classList.remove("show"); // 모달 창에서 "show" 클래스 제거하여 숨김
  body.classList.remove("modal-open"); // body에서 "modal-open" 클래스 제거하여 스크롤 가능하게
});
