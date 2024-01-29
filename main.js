loadContent('pages/content1.html');

function loadContent(url) {

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('content-container').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

var buttons = document.querySelectorAll('.menu .contentBtn');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // すべてのボタンから 'active' クラスを削除
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // クリックされたボタンに 'active' クラスを追加
    button.classList.add('active');
  });
});

buttons[0].click();


// function redirectToPage(url) {
//   window.location.href = url;
// }

// document.getElementById('yourButtonId').addEventListener('click', function() {
//   redirectToPage('新しいページのURL');
// });
