// クリック数を表示するためのコンテナの処理
document.addEventListener("DOMContentLoaded", function() {
    let point = localStorage.getItem("point");
    if(point === null) {
        point = 0;
        localStorage.setItem("point", point);
    }

    clickNumber();
});

// オブジェクトがクリックされたときの処理
document.getElementById("object").addEventListener("click", function() {
    let point = localStorage.getItem("point");
    point = parseInt(point) + 1;

    localStorage.setItem("point", point);
    clickNumber();
});

// クリック数を表示するメソッド
function clickNumber() {
    let point = localStorage.getItem("point");

    let pointConainer = document.getElementById("container");

    pointConainer.textContent = point;
}