document.addEventListener("DOMContentLoaded", function () {
  // delete_button 요소를 가져옵니다.
  const deleteButton = document.getElementById("delete_button");

  // delete_button을 클릭했을 때의 동작을 정의합니다.
  deleteButton.addEventListener("click", function () {
    // 다른 요소의 input checkbox 상태를 가져옵니다.
    const checkbox = document.querySelector("input[type='checkbox']");

    // input checkbox가 체크되어 있는지 확인합니다.
    if (checkbox.checked) {
      // SweetAlert2 알림을 생성합니다.
      Swal.fire({
        title: "임직원 삭제 확인",
        text: "정말로 임직원을 삭제하시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "삭제",
        cancelButtonText: "취소",
      }).then((result) => {
        // SweetAlert2에서 선택된 결과를 확인합니다.
        if (result.isConfirmed) {
          // 삭제 동작을 수행하는 함수를 호출합니다.
          // 이곳에 실제 삭제 로직을 구현하세요.
          // 예를 들면, 서버로 요청을 보내서 데이터를 삭제하는 등의 작업이 가능합니다.
          // 이 예제에서는 아무 작업도 수행하지 않습니다.
          Swal.fire("삭제됨!", "임직원이 삭제되었습니다.", "success");
        }
      });
    } else {
      Swal.fire(
        "체크박스 미선택",
        "삭제하려는 임직원을 선택하세요.",
        "warning"
      );
    }
  });
});
