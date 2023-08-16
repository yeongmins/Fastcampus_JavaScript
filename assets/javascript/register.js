const registerButton = document.getElementById("register_button");
const closeButton = document.getElementById("close_button");
const registerModal = document.getElementById("register");
const body = document.body;

// 등록 버튼 클릭 시 모달 열기
registerButton.addEventListener("click", () => {
  registerModal.classList.add("show"); // 모달 표시
  body.classList.add("modal-open"); // 스크롤 방지 클래스 추가
});

// 닫기 버튼 클릭 시 모달 닫기
closeButton.addEventListener("click", () => {
  registerModal.classList.remove("show"); // 모달 숨김
  body.classList.remove("modal-open"); // 스크롤 방지 클래스 제거
});

// 모달 내에서 등록 작업 처리
document.getElementById("modal_register").addEventListener("click", function () {
  // 입력된 정보 가져오기
  const name = document.getElementById("name_ID").value; // 이름
  const email = document.getElementById("email_ID").value; // 이메일
  const phone = document.getElementById("phone_ID").value; // 전화번호
  const rank = document.getElementById("rank_ID").value; // 직급
  const imgInput = document.getElementById("file_input"); // 파일 업로드 입력 요소
  const imgURL = imgInput.files[0] ? URL.createObjectURL(imgInput.files[0]) : ""; // 이미지 URL 생성

  // 등록된 정보 모달에 표시
  document.getElementById("name_text").innerHTML = name; // 이름 표시
  document.getElementById("email_text").innerHTML = email; // 이메일 표시
  document.getElementById("phone_text").innerHTML = phone; // 전화번호 표시
  document.getElementById("rank_text").innerHTML = rank; // 직급 표시
  document.getElementById("view_img_ID").src = imgURL; // 이미지 표시

  // 새로운 리스트 아이템 생성 및 추가
  const mainList = document.getElementById("main_list"); // 리스트 컨테이너
  const listItem = document.createElement("div"); // 새로운 리스트 아이템 요소 생성
  listItem.classList.add("list_item"); // 리스트 아이템 클래스 추가
  
  // 체크박스 생성
  const listInput = document.createElement("input");
  listInput.classList.add("list_input"); // 체크박스 클래스 추가
  listInput.type = "checkbox"; // 체크박스 유형
  listInput.name = "list_checkbox"; // 체크박스 이름
  listItem.appendChild(listInput); // 체크박스를 리스트 아이템에 추가
  
  // 리스트 아이템 내용을 감싸는 div 생성
  const itemWrap = document.createElement("div");
  itemWrap.classList.add("item_wrap"); // 내용 div 클래스 추가
  
  // 이미지를 감싸는 div 생성
  const itemImg = document.createElement("div");
  itemImg.classList.add("item_img"); // 이미지 div 클래스 추가
  
  // 이미지 요소 생성
  const profileImage = document.createElement("img");
  profileImage.src = imgURL; // 이미지 소스
  profileImage.alt = "프로필 이미지"; // 대체 텍스트
  itemImg.appendChild(profileImage); // 이미지를 내부 div에 추가
  
  itemWrap.appendChild(itemImg); // 이미지 div를 내용 div에 추가
  
  // 정보를 담는 span 요소 생성 및 추가
  const spans = [name, email, phone, rank];
  for (const spanText of spans) {
    const span = document.createElement("span");
    span.textContent = spanText;
    itemWrap.appendChild(span);
  }
  
  listItem.appendChild(itemWrap); // 내용 div를 리스트 아이템에 추가
  mainList.appendChild(listItem); // 리스트 아이템을 리스트 컨테이너에 추가
  
  registerModal.classList.remove("show"); // 모달 닫기
  body.classList.remove("modal-open"); // 스크롤 가능하게 설정
});
