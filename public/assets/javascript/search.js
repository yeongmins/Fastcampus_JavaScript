const searchButton = document.getElementById("search_button_id");
const searchInput = document.getElementById("search_input_id");
const mainList = document.getElementById("main_list");

// 검색 버튼 클릭 시 검색 기능 수행
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase(); 

  const listItems = mainList.querySelectorAll(".list_item"); 

  // 각 리스트 아이템에 대해 검색어와 비교하여 필터링
  listItems.forEach((item) => {
    const spans = item.querySelectorAll(".item_wrap span");
    const shouldShow = Array.from(spans).some((span) => {
      return span.textContent.toLowerCase().includes(searchTerm);
    });

    // 아이템을 표시하거나 숨김 처리
    item.style.display = shouldShow ? "flex" : "none";
  });
});
