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
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  });
});


buttons[0].click();

function openNewTab(url) {
  window.open(url, '_blank');
}
