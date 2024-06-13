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