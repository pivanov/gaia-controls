document.body.onresize = function() {
  centerHeader()
}

centerHeader()

function centerHeader() {
  var headers = document.querySelectorAll('.bb-header');

  var dir = document.dir;

  for (i = 0; i < headers.length; i++) {

    var headerHalfWidth = headers[i].offsetWidth / 2;

    var title = headers[i].querySelector('h1');
    var menu = headers[i].querySelector('menu');
    var button = headers[i].querySelectorAll(":scope > a, :scope > button")[0];

    title.style = '';

    if (title && menu) {

      var titleHalfWidth = title.offsetWidth / 2;
      var menuWidth = menu.offsetWidth;

      if (headerHalfWidth - menuWidth < titleHalfWidth) {
        if (button) {
          if (dir == 'ltr' || dir == "") {
            title.style.paddingLeft = button.offsetWidth + 2 + 'px';
          } else {
            title.style.paddingRight = button.offsetWidth + 2 + 'px';
          }
        }
        if (menu) {
          if (dir == 'ltr' || dir == "") {
            title.style.paddingRight = menuWidth + 2 + 'px';
          } else {
            title.style.paddingLeft = menuWidth + 2 + 'px';
          }

          title.style.textAlign = 'right';
        }
      }
    }

    if (button && !menu) {
      var buttonWidth = button.offsetWidth;
      var titleHalfWidth = title.offsetWidth / 2;

      if (headerHalfWidth - buttonWidth < titleHalfWidth) {
        if (dir == 'ltr') {
          title.style.paddingLeft = button.offsetWidth + 2 + 'px';
        } else {
          title.style.paddingRight = button.offsetWidth + 2 + 'px';
        }
      }
    }

    if (title) {
      title.style.width = '100%';
    }
  }
}
