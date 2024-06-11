// 保存ボタンがクリックされたときの処理
document.getElementById("saveButton").addEventListener("click", function() {
    let memoText = document.getElementById("memo").value;
    saveMemo(memoText);
});

// 読込ボタンがクリックされたときの処理
document.getElementById("loadButton").addEventListener("click", function() {
    // メモデータの読み込み
    let memoText = loadMemo();

    // 表示するdiv領域コンテナの読み込み
    let memoContainer = document.getElementById("memoContainer");
    
    memoContainer.textContent = memoText;
    memoContainer.classList.add("font");
});

// 削除ボタンがクリックされたときの処理
document.getElementById("deleteButton").addEventListener("click", function() {
    saveMemo("");
});

// メモ保存メソッド
function saveMemo(memoText) {

    localStorage.setItem("memo", memoText);

    if(memoText !==  "") {
        alert("メモを保存しました。");
    } else {
        alert("メモを削除しました。");
    }
}

// メモ読込メソッド
function loadMemo() {
    let memoText = localStorage.getItem("memo");

    if(memoText === "" || memoText === null) {
       memoText = "メモはありません。";
    }

    return memoText;
}