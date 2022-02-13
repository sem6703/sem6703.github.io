"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SERVER_URL = 'https://academy.directlinedev.com';
var preloader = document.querySelector('.blog-spinner_js.spinner_js'); //XHR для тегов

(function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', SERVER_URL + '/api/tags');
  xhr.send();
  preloader.classList.remove('hidden');

  xhr.onload = function () {
    var tags = JSON.parse(xhr.response).data;
    var tagBox = document.querySelector('.tags__list');
    tags.forEach(function (tag) {
      var tagHTML = createTag(tag);
      tagBox.insertAdjacentHTML('beforeend', tagHTML);
    });
    getParamsToSubmit();
    getArticle(getParams());
    preloader.classList.add('hidden');
  };
})(); //Переключение страниц стрелками в пагинации


function arrovPaginationControl(pages) {
  var paginationBtnNext = document.querySelector('.pagination-next_js');
  var paginationBtnPrev = document.querySelector('.pagination-prev_js');
  paginationBtnPrev.disabled = false;
  paginationBtnNext.disabled = false;
  var params = getParams();
  var searchParams = new URLSearchParams(location.search);

  if (params.page === 0) {
    paginationBtnPrev.disabled = true;
  }

  if (params.page >= pages - 1) {
    paginationBtnNext.disabled = true;
  }

  function clickNext() {
    paginationBtnPrev.disabled = false;
    var numPageNext = +searchParams.getAll('page');
    params = getParams();

    if (numPageNext >= pages - 1) {
      paginationBtnNext.disabled = true;
    } else {
      params.page = 1 + numPageNext;
      searchParams.set('page', params.page);
      history.replaceState(null, document.title, '?' + searchParams.toString());
      getArticle(getParams());
      params = getParams();

      if (params.page >= pages - 1) {
        paginationBtnNext.disabled = true;
      }
    }
  }

  function clickPrev() {
    paginationBtnNext.disabled = false;
    var numPagePrev = +searchParams.getAll('page');
    params = getParams();

    if (numPagePrev === 0) {
      paginationBtnPrev.disabled = true;
    } else {
      params.page = numPagePrev - 1;
      searchParams.set('page', params.page);
      history.replaceState(null, document.title, '?' + searchParams.toString());
      getArticle(getParams());
      params = getParams();

      if (params.page === 0) {
        paginationBtnPrev.disabled = true;
      }
    }
  }

  paginationBtnNext.addEventListener('click', clickNext, {
    once: true
  });
  paginationBtnPrev.addEventListener('click', clickPrev, {
    once: true
  });
} //получение и вывод статей


function getArticle(params) {
  var xhr = new XMLHttpRequest();
  var searchParams = new URLSearchParams(location.search);
  searchParams.set('v', '1.0.0');

  if (params.tags && Array.isArray(params.tags) && params.tags.length) {
    searchParams.set('tags', JSON.stringify(params.tags));
  }

  var filter = {};

  if (params.comments.length) {
    var paramComment = params.comments;
    var resultCommentStr = [];
    var resultCommentNum = [];
    paramComment.forEach(function (key) {
      resultCommentStr = resultCommentStr.concat(key.split('-'));
    });
    resultCommentStr.forEach(function (key) {
      resultCommentNum.push(+key);
    });
    var minComment = Math.min.apply(null, resultCommentNum);
    var maxComment = Math.max.apply(null, resultCommentNum);
    filter.commentsCount = {
      "$between": [minComment, maxComment]
    };
  }

  if (params.views.length) {
    var views = params.views.split('-');
    filter.views = {
      "$between": [+views[0], +views[1]]
    };
  }

  if (params.search) {
    filter.title = params.search;
  }

  searchParams.set('filter', JSON.stringify(filter));

  if (params.sort) {
    searchParams.set('sort', JSON.stringify([params.sort, 'ASC']));
  }

  searchParams.set('limit', params.show);

  if (+params.page) {
    searchParams.set('offset', +params.page * params.show);
  }

  xhr.open('GET', SERVER_URL + '/api/posts?' + searchParams.toString());
  xhr.send();
  preloader.classList.remove('hidden');

  xhr.onload = function () {
    var articles = JSON.parse(xhr.response).data;
    var getCountArticle = JSON.parse(xhr.response).count;
    var dataArticle = '';
    var linksbox = document.querySelector('.pagination__list');
    linksbox.innerHTML = '';
    articles.forEach(function (article) {
      dataArticle += createArticle(article);
    });
    var articlePage = Math.ceil(getCountArticle / params.show);
    var articleBox = document.querySelector('.article-result_js');
    articleBox.innerHTML = dataArticle;

    for (var i = 0; i < articlePage; i++) {
      var linkLiElement = document.createElement('li');
      var link = createLinkElement(i);
      linkLiElement.appendChild(link);
      linksbox.insertAdjacentElement('beforeend', linkLiElement);
    }

    arrovPaginationControl(articlePage);
    preloader.classList.add('hidden');
  };
} //Создание ссылок пагинации


function createLinkElement(page) {
  var linkElement = document.createElement('a');
  linkElement.classList.add('pagination__item');
  linkElement.classList.add('link_js');
  linkElement.innerText = page + 1;
  linkElement.href = '?page=' + page;
  var params = getParams();

  if (page === +params.page) {
    linkElement.classList.add('pagination__item_active');
  }

  linkElement.addEventListener('click', function (e) {
    e.preventDefault();
    var links = document.querySelectorAll('.link_js');
    var searchParams = new URLSearchParams(location.search);
    var params = getParams();
    links[params.page].classList.remove('pagination__item_active');
    searchParams.set('page', page);
    links[page].classList.add('pagination__item_active');
    history.replaceState(null, document.title, '?' + searchParams.toString());
    getArticle(getParams());
  });
  return linkElement;
} //создание разметки статьи


function createArticle(_ref) {
  var title = _ref.title,
      text = _ref.text,
      views = _ref.views,
      photo = _ref.photo,
      commentsCount = _ref.commentsCount,
      date = _ref.date,
      tags = _ref.tags;
  var dataTags = '';
  tags.forEach(function (tag) {
    dataTags += "<span class=\"article__tags_color\" style=\"background:".concat(tag.color, "\"></span>");
  });
  var fulldDate = new Date(date);
  var getDay = fulldDate.getDate() < 10 ? "0" + fulldDate.getDate() : fulldDate.getDate();
  var getMonth = fulldDate.getMonth() < 10 ? "0" + fulldDate.getMonth() : fulldDate.getMonth();
  var dateToArticle = "".concat(getDay, ".").concat(getMonth, ".").concat(fulldDate.getFullYear());
  return "\n    <article class=\"article\">\n    <picture>\n        <source srcset=\"".concat(SERVER_URL).concat(photo.mobilePhotoUrl, ", ").concat(SERVER_URL).concat(photo.mobile2xPhotoUrl, " 2x\" media=\"(max-width: 375px)\">\n        <source srcset=\"").concat(SERVER_URL).concat(photo.tabletPhotoUrl, ", ").concat(SERVER_URL).concat(photo.tablet2xPhotoUrl, " 2x\" media=\"(max-width: 768px)\">\n        <source srcset=\"").concat(SERVER_URL).concat(photo.desktopPhotoUrl, ", ").concat(SERVER_URL).concat(photo.desktop2xPhotoUrl, " 2x\">\n        <img class=\"article__img\" src=\"").concat(SERVER_URL).concat(photo.desktopPhotoUrl, "\" alt=\"").concat(title, "\" />\n    </picture>\n    <div class=\"article__content\">\n        ").concat(dataTags, "\n        <div class=\"article__statistic\">\n            <span class=\"article__post-time\">").concat(dateToArticle, "</span>\n            <span class=\"article__views\">").concat(views, " views</span>\n            <span class=\"article__comments\">").concat(commentsCount, " comments</span>\n        </div>\n        <h3 class=\"article__title\">").concat(title, "</h3>\n        <p class=\"article__text\">").concat(text, "</p>\n        <a class=\"article__link\" href=\"#\">Go to this post</a>\n    </div>\n</article>\n    ");
} // При нажатии кнопки search в фильтр форме, сохранение и выставление search параметров


function getParamsToSubmit() {
  var form = document.forms.filters;
  setDataToFilter(getParams());
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = {
      page: 0
    };
    data.search = form.elements.search.value;
    data.tags = _toConsumableArray(form.elements.tags).filter(function (checkbox) {
      return checkbox.checked;
    }).map(function (checkbox) {
      return checkbox.value;
    });
    data.comments = _toConsumableArray(form.elements.comments).filter(function (checkbox) {
      return checkbox.checked;
    }).map(function (checkbox) {
      return checkbox.value;
    });
    data.views = (_toConsumableArray(form.elements.views).find(function (radio) {
      return radio.checked;
    }) || {
      value: null
    }).value;
    data.show = (_toConsumableArray(form.elements.show).find(function (radio) {
      return radio.checked;
    }) || {
      value: null
    }).value;
    data.sort = (_toConsumableArray(form.elements.sort).find(function (radio) {
      return radio.checked;
    }) || {
      value: null
    }).value;
    setsearchParams(data);
    getArticle(data);
  });
} //создание html кода 1 тега чекбокса в фильтре


function createTag(_ref2) {
  var id = _ref2.id,
      color = _ref2.color;
  var tagChecked = '';

  if (id === 1 || id === 6) {
    tagChecked = 'checked';
  } else {
    tagChecked = '';
  }

  return "\n    <li class=\"tags__item\">\n\t\t<input type=\"checkbox\" name=\"tags\" id=\"color-".concat(id, "\" value=\"").concat(id, "\" ").concat(tagChecked, ">\n\t\t<label class=\"tags__label-").concat(id, "-color\" for=\"color-").concat(id, "\"><svg class=\"tags__check-mark\"\n\t\t\t\twidth=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\"\n\t\t\t\txmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<path\n\t\t\t\t\td=\"M2 6.75L5.91301 12.77C6.20128 13.2135 6.85836 13.1893 7.11327 12.7259L13.425 1.25\"\n\t\t\t\t\tstroke=\"").concat(color, "\" stroke-width=\"2.5\" stroke-linecap=\"round\" />\n\t\t\t</svg></label>\n\t</li>\n    ");
} //Выставление search параметров в адресную строку


function setsearchParams(data) {
  var searchParams = new URLSearchParams();
  searchParams.set('search', data.search);
  data.tags.forEach(function (item) {
    searchParams.append('tags', item);
  });
  data.comments.forEach(function (item) {
    searchParams.append('comments', item);
  });

  if (data.views) {
    searchParams.set('views', data.views);
  }

  if (data.show) {
    searchParams.set('show', data.show);
  }

  if (data.sort) {
    searchParams.set('sort', data.sort);
  }

  if (data.page) {
    searchParams.set('page', data.page);
  } else {
    searchParams.set('page', 0);
  }

  history.replaceState(null, document.title, '?' + searchParams.toString());
} // Получение search параметров из адресной строки и выставление параметров при 1 загрузке страницы


function getParams() {
  var firstParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var searchParams = new URLSearchParams(location.search);
  var tag = null;
  var comment = null;

  if (!searchParams.getAll('tags').length) {
    tag = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  } else {
    tag = searchParams.getAll('tags');
  }

  comment = searchParams.getAll('comments');
  return {
    tags: tag,
    views: searchParams.get('views') || "100-500",
    comments: comment,
    show: searchParams.get('show') || "5",
    sort: searchParams.get('sort') || "date",
    search: searchParams.get('search') || '',
    page: +searchParams.get('page') || 0
  };
}

; //установка данных из объекта data в форму поиска

function setDataToFilter(data) {
  var form = document.forms.filters;
  form.elements.search.value = data.search;
  form.elements.tags.forEach(function (checkbox) {
    checkbox.checked = data.tags.includes(checkbox.value);
  });
  form.elements.comments.forEach(function (checkbox) {
    checkbox.checked = data.comments.includes(checkbox.value);
  });
  form.elements.views.forEach(function (radio) {
    radio.checked = data.views === radio.value;
  });
  form.elements.show.forEach(function (radio) {
    radio.checked = data.show === radio.value;
  });
  form.elements.sort.forEach(function (radio) {
    radio.checked = data.sort === radio.value;
  });
}

;