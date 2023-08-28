// HTML 요소들을 JavaScript 변수에 할당
const mypageButton = document.getElementById("mypage");
const mypageCloseButton = document.getElementById("mypage_close_button");
const mypageModal = document.getElementById("mypage_modal");
const mypageBody = document.body;

const myImg = document.getElementById("my_img");

const mypageFileInput = document.getElementById("mypage_file_input");
const mypageViewImg = document.getElementById("mypage_view_img_ID");
let selectedFile = null;

// 파일 입력 변경 시 이벤트 리스너
mypageFileInput.addEventListener("change", () => {
  selectedFile = mypageFileInput.files[0];
  if (selectedFile) {
    // 선택한 파일로부터 Object URL 생성
    const objectUrl = URL.createObjectURL(selectedFile);
    // 이미지 요소의 src 속성 설정하여 파일 미리보기
    mypageViewImg.setAttribute("src", objectUrl);
  }
});

// "mypage" 버튼 클릭 시 이벤트 리스너
mypageButton.addEventListener("click", () => {
  // 각각의 필요한 요소들을 가져옴
  const myNameSpan = document.getElementById("name_span");
  const myEmailSpan = document.getElementById("email_span");
  const myPhoneSpan = document.getElementById("phone_span");
  const myRankSpan = document.getElementById("rank_span");

  const myNameInput = document.getElementById("mypage_name_ID");
  const myEmailInput = document.getElementById("mypage_email_ID");
  const myPhoneInput = document.getElementById("mypage_phone_ID");
  const myRankInput = document.getElementById("mypage_rank_ID");

  // 입력된 값을 화면에 보여줌
  myNameInput.value = myNameSpan.textContent;
  myEmailInput.value = myEmailSpan.textContent;
  myPhoneInput.value = myPhoneSpan.textContent;
  myRankInput.value = myRankSpan.textContent;

  // 텍스트로도 입력된 값을 화면에 보여줌
  const myNameText = document.getElementById("mypage_name_text");
  const myEmailText = document.getElementById("mypage_email_text");
  const myPhoneText = document.getElementById("mypage_phone_text");
  const myRankText = document.getElementById("mypage_rank_text");

  myNameText.textContent = myNameSpan.textContent;
  myEmailText.textContent = myEmailSpan.textContent;
  myPhoneText.textContent = myPhoneSpan.textContent;
  myRankText.textContent = myRankSpan.textContent;

  // 기존 이미지의 소스를 가져와서 프로필 이미지 요소에 설정
  const myImgSrc = myImg.getAttribute("src");
  mypageViewImg.setAttribute("src", myImgSrc);

  const mypageRegisterButton = document.getElementById("mypage_register");
  // "mypage_register" 버튼 클릭 시 이벤트 리스너
  mypageRegisterButton.addEventListener("click", () => {
    if (selectedFile) {
      // 선택한 파일로부터 Object URL 생성
      const objectUrl = URL.createObjectURL(selectedFile);
      // 이미지 요소의 src 속성 설정하여 프로필 이미지 변경
      myImg.setAttribute("src", objectUrl);
    }

    // 입력된 값들을 각각의 요소에 반영
    myNameSpan.textContent = myNameInput.value;
    myEmailSpan.textContent = myEmailInput.value;
    myPhoneSpan.textContent = myPhoneInput.value;
    myRankSpan.textContent = myRankInput.value;

    myNameText.textContent = myNameInput.value;
    myEmailText.textContent = myEmailInput.value;
    myPhoneText.textContent = myPhoneInput.value;
    myRankText.textContent = myRankInput.value;

    // 모달 닫기
    mypageModal.classList.remove("show");
    mypageBody.classList.remove("modal-open");
  });

  // 모달 열기
  mypageModal.classList.add("show");
  mypageBody.classList.add("modal-open");
});

// "mypage_close_button" 버튼 클릭 시 모달 닫기
mypageCloseButton.addEventListener("click", () => {
  mypageModal.classList.remove("show");
  mypageBody.classList.remove("modal-open");
});

