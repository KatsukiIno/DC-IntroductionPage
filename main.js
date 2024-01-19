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
