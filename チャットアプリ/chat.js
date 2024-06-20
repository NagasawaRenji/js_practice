// ハンバーガーボタンを押したときの処理
document.getElementById("hamburgerButton").addEventListener("click", function() {

    // メニューの表示を行う
    document.querySelector(".toggle-menu").classList.toggle("menu-open");

    // ハンバーガーボタンの表示をやめる
    document.getElementById("hamburgerButton").style.visibility = "hidden";

    // 閉じるボタンの表示を行う
    document.querySelector(".close-menu").classList.toggle("close-menu-open");
});

// メニューを閉じるボタンを押したときの処理
document.getElementById("closeMenuButton").addEventListener("click", function() {

    // メニューを閉じる
    document.querySelector(".toggle-menu").classList.remove("menu-open");

    // ハンバーガーボタンを表示する
    document.getElementById("hamburgerButton").style.visibility = "visible";

    // 閉じるボタンの表示をやめる
    document.querySelector(".close-menu").classList.remove("close-menu-open");
});

// メッセージを送信したときの処理
document.getElementById("textForm").addEventListener("submit", function(e) {

    // フォームのデフォルトの送信動作をキャンセル
    e.preventDefault();

    // テキスト内容をもとにノードの作成
    let newText = document.getElementById("inputText").value;
    let newTextElement = document.createElement("p");

    newTextElement.textContent = newText;

    // 親要素直下に配置
    let parentElement = document.getElementById("myselfMessage");
    parentElement.appendChild(newTextElement);

    // 入力フィールドをクリア
    document.getElementById("inputText").value = "";
});