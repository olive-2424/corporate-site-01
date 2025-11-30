// document.addEventListener('イベント名', 実行したい処理);
// 'イベント名'：いつ実行するか
// 実行したい処理：何を実行するか（関数）
// 'DOMContentLoaded' とは？ HTML を全部読み込んだ瞬間に発火するイベント
// これをしないとHTMLが読み込まれる前に.menu-toggleを探すとエラーになるため
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  // document全体から'セレクタ'に一致する最初の要素を1つだけ取り出す
  const nav = document.querySelector('.nav');
  // addEventListenr('click')はボタンが押されたら実行
  btn.addEventListener('click', () => {
    // navが存在しなかったら何もせず終了
    if (!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    // nav.style.displayは表示、非表示を切り替える
    // nav.styleはnavのスタイルをjavaScriptから直接変えるためのプロパティ
    // 現在の状態を見て、逆の状態に変えて、その値を nav.style.display に再代入して更新している
    nav.style.flexDirection = 'column';
  });
});
