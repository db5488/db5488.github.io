const memoList = document.getElementById("memo-list");
const memoInput = document.getElementById("memo-input");

function toggleCompleted(checkbox) {
  const li = checkbox.parentElement;
  const textSpan = li.querySelector(".text");
  textSpan.classList.toggle("completed");
}


function addMemo() {
  const text = memoInput.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.classList.add("memo-item");
    li.innerHTML = `
      <span class="text">${text}</span>
       <button class="completed-button" onclick="toggleCompleted(this)">已完成</button>
      <button class="edit-button" onclick="editMemo(this)">編輯</button>
      <button class="delete-button" onclick="deleteMemo(this)">刪除</button>     
    `;
    memoList.appendChild(li);
    memoInput.value = "";
  }
}

function editMemo(button) {
  const li = button.parentElement;
  const textSpan = li.querySelector(".text");
  const editText = prompt("請輸入新的備忘錄內容:", textSpan.textContent.trim());
  if (editText !== null && editText.trim() !== "") {
    textSpan.textContent = editText;
  }
}

function deleteMemo(button) {
  const li = button.parentElement;
  memoList.removeChild(li);
}

function searchMemo() {
  const searchTerm = memoInput.value.trim().toLowerCase();
  const memos = memoList.getElementsByClassName("memo-item");
  for (const memo of memos) {
    const textSpan = memo.querySelector(".text");
    const text = textSpan.textContent.trim().toLowerCase();
    if (text.includes(searchTerm)) {
      memo.style.display = "flex";
    } else {
      memo.style.display = "none";
    }
  }
}

