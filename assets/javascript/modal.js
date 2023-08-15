document.getElementById("modal_register").addEventListener("click", function () {
  const name = document.getElementById("name_ID").value;
  const email = document.getElementById("email_ID").value;
  const phone = document.getElementById("phone_ID").value;
  const rank = document.getElementById("rank_ID").value;
  const imgInput = document.getElementById("file_input");
  const imgURL = imgInput.files[0] ? URL.createObjectURL(imgInput.files[0]) : "";

  document.getElementById("name_text").innerHTML = name;
  document.getElementById("email_text").innerHTML = email;
  document.getElementById("phone_text").innerHTML = phone;
  document.getElementById("rank_text").innerHTML = rank;
  document.getElementById("view_img_ID").src = imgURL;

  const mainList = document.getElementById("main_list");
  const listItem = document.createElement("div");
  listItem.classList.add("list_item");
  
  const listInput = document.createElement("input");
  listInput.classList.add("list_input");
  listInput.type = "checkbox";
  listInput.name = "list_checkbox";
  listItem.appendChild(listInput);
  
  const itemWrap = document.createElement("div"); // Create the item_wrap div
  itemWrap.classList.add("item_wrap"); // Add the class
  
  const itemImg = document.createElement("div"); // Create the item_img div
  itemImg.classList.add("item_img"); // Add the class
  
  const profileImage = document.createElement("img");
  profileImage.src = imgURL;
  profileImage.alt = "프로필 이미지";
  itemImg.appendChild(profileImage); // Append the image to item_img
  
  itemWrap.appendChild(itemImg); // Append item_img to item_wrap
  
  const spans = [name, email, phone, rank];
  for (const spanText of spans) {
      const span = document.createElement("span");
      span.textContent = spanText;
      itemWrap.appendChild(span); // Append the span to item_wrap
  }
  
  listItem.appendChild(itemWrap); // Append item_wrap to listItem
  mainList.appendChild(listItem);
  
  // 모달 닫기 코드
  const registerModal = document.getElementById("register");
  const body = document.body;
  registerModal.classList.remove("show");
  body.classList.remove("modal-open");
});

// 모달 열기 코드
const registerButton = document.getElementById("register_button");
const closeButton = document.getElementById("close_button");
const registerModal = document.getElementById("register");
const body = document.body;

registerButton.addEventListener("click", () => {
  registerModal.classList.add("show");
  body.classList.add("modal-open");
});

closeButton.addEventListener("click", () => {
  registerModal.classList.remove("show");
  body.classList.remove("modal-open");
});
