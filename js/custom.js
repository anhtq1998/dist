KTUtil.ready(function () {
  KTLayoutScrolltop.init('kt_scrolltop');
  KTLayoutHeader.init('kt_header', 'kt_header_mobile');
  KTLayoutHeaderMenu.init('kt_header_menu', 'kt_header_menu_wrapper');
  KTLayoutAsideToggle.init('kt_aside_toggle')
  KTLayoutAside.init('kt_aside');
  KTLayoutAsideMenu.init('kt_aside_menu');
  console.log(localStorage.getItem("SidebarExtend"))
  if (localStorage.getItem("SidebarExtend") == 'false') {
    console.log(localStorage.getItem("SidebarExtend"))
    $('#kt_body').addClass('aside-minimize');
  }
});
moment.locale('vi');
$('#kt_aside_toggle').on('click', function () {
  if (!$('#kt_body').hasClass("aside-minimize")) {
    window.dispatchEvent(new Event('resize'));
    localStorage.setItem('SidebarExtend', true);
  } else {
    window.dispatchEvent(new Event('resize'));
    localStorage.setItem('SidebarExtend', false);
  }
})

$('.aside').on('mouseenter', function () {
  if ($('body').hasClass('aside-minimize')) {
    window.dispatchEvent(new Event('resize'));
  }
})

$('.aside').on('mouseleave', function () {
  if ($('body').hasClass('aside-minimize-hover')) {
    window.dispatchEvent(new Event('resize'));
  }
});



$(function () {
  $('.nav-tabs-responsive').tabdrop();
});
$('.modal').on('shown.bs.modal', function (e) {
  $(window).trigger('resize');
})
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  console.log($(this).closest('ul').find('.active'))
  $(this).closest('ul').find('.active').removeClass('active')
  $(e.target).addClass('active')
})

$(document).ready(function () {

  $('.selectpicker').selectpicker({
    container: 'body',
    countSelectedText: '{0} đã chọn',
    deselectAllText: 'Bỏ chọn tất cả',
    selectAllText: 'Chọn tất cả',
  });
  $('.selectpicker').on('shown.bs.select', function (e) {
    $('.bs-container.dropdown').addClass('shown')
  });

  $('[data-toast=toast]').on('click', function () {
    var id = $(this).attr('toast-target');
    $(id).toast('show')
  })
  $('.toast').toast({
    delay: 2000
  })
  $('.toast').on('show.bs.toast', function () {
    $('.toast.show').toast('hide');
  })

  window.addEventListener('scroll', function (e) {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop >= 64) {
      document.querySelector('body').classList.add('sidebar-stuck')
    } else {
      document.querySelector('body').classList.remove('sidebar-stuck')
    }
  })
  $('.datepicker-date-time').daterangepicker({
    buttonClasses: 'btn',
    applyClass: 'btn-primary',
    cancelClass: 'btn-secondary',
    autoApply: true,
    timePicker: true,
    timePickerIncrement: 10,
    timePicker24Hour: true,
    locale: {
      format: 'DD/MM/YYYY H:mm',
      fromLabel: "Từ",
      toLabel: "Đến",
      customRangeLabel: "Tuỳ chỉnh",
    }
  });

  $('.datepicker-date').daterangepicker({
    buttonClasses: 'btn',
    applyClass: 'btn-primary',
    cancelClass: 'btn-secondary',
    autoApply: true,
    ranges: {
      '7 ngày trước': [moment().subtract(6, 'days'), moment()],
      '30 ngày trước': [moment().subtract(29, 'days'), moment()],
    },
    "alwaysShowCalendars": true,
    locale: {
      format: 'DD/MM/YYYY',
      applyLabel: "Chọn",
      cancelLabel: "Huỷ",
      fromLabel: "Từ",
      toLabel: "Đến",
      customRangeLabel: "Tuỳ chỉnh",
    }
  });

  $('.datepicker-month').daterangepicker({
    buttonClasses: 'btn',
    applyClass: 'btn-primary',
    cancelClass: 'btn-secondary',
    autoApply: true,
    ranges: {
      '7 ngày trước': [moment().subtract(6, 'days'), moment()],
      '30 ngày trước': [moment().subtract(29, 'days'), moment()],
    },
    "alwaysShowCalendars": true,
    locale: {
      format: 'MM/YYYY',
      applyLabel: "Chọn",
      cancelLabel: "Huỷ",
      fromLabel: "Từ",
      toLabel: "Đến",
      customRangeLabel: "Tuỳ chỉnh",
    }
  });

  $('[data-tooltip]').tooltip({
    container: 'body',
    trigger: 'hover',
    boundary: 'window',
    html: true
  });
})

$('.timepicker').timepicker({
  minuteStep: 1,
  defaultTime: '',
  showSeconds: true,
  showMeridian: false,
  snapToStep: true,
  icons: {
    up: 'ri-arrow-up-s-line',
    down: 'ri-arrow-down-s-line'
  }
});

//====================STAR autosize INIT=================//
autosize(document.querySelectorAll('.textarea-autosize'));

//====================TABLES=================//
var maxWidth = 180;
var tableCellsTd = document.querySelectorAll('td');
var tableCellsTh = document.querySelectorAll('th');

function tableCell(el) {
  for (x = 0; x < el.length; x++) {
    if (el[x].clientWidth > maxWidth && el[x].closest('.table').offsetWidth > el[x].closest('.table-wrap-inner').offsetWidth) {
      el[x].classList.add("cell-long");
      el[x].style.minWidth = maxWidth + 'px'
    }
  }
}

tableCell(tableCellsTd)
tableCell(tableCellsTh)
//====================END TABLES=================//

// expand
$('.expand-btn').on('click', function () {
  $(this).closest('.expand-wrap').find('.expand-list > *:nth-child(n + 4)').toggleClass('d-none')
  $(this).toggleClass('expand')
})

$('.rnc-show-triger').on('change', function () {
  if ($(this).is(':checked')) {
    $(this).closest('.rnc-show-wrap').find('.rnc-show-content').removeClass('d-none')
  } else {
    $(this).closest('.rnc-show-wrap').find('.rnc-show-content').addClass('d-none')
  }
})
// end expand

$(function () {
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf("/") + 1);
  $(".menu-nav a").each(function () {
    if (this.href.substring(this.href.lastIndexOf("/") + 1) == filename) {
      $(this).parent().closest("li.menu-item").addClass("menu-item-active");
      $(this)
        .parent()
        .closest("li.menu-item")
        .parent()
        .closest("li.menu-item")
        .addClass("menu-item-open");
    }
  });

});

$('#options').change(function () {
  $('#date').show();
  if ($(this).val() == 'show') {
    $('#date').show();
  } else if ($(this).val() == 'hide') {
    $('#date').hide();
  } else
    $('#date').hide();
}
);

$(document).ready(function () {
  $('#page-jump').click(function (event) {
    event.stopPropagation();
  });
  $('#pagination-btn').click(function (event) {
    event.stopPropagation();
    $('#page-jump').toggle();
  });
  $(document).click(function () {
    $('#page-jump').hide();
  });
});

$(document).ready(function () {
  $('#search-content').click(function (event) {
    event.stopPropagation();
  });
  $('#search-bar').focus(function (event) {
    $('#search-content').show();
    $('#search-filter').addClass('active');
  });
});

var mouse_is_inside = false;

$(document).ready(function () {
  $('#search-bar').hover(function () {
    mouse_is_inside = true;
  }, function () {
    mouse_is_inside = false;
  });
  $('.daterangepicker').hover(function () {
    mouse_is_inside = true;
  }, function () {
    mouse_is_inside = false;
  });
  $('#search-content').hover(function () {
    mouse_is_inside = true;
  }, function () {
    mouse_is_inside = false;
  });

  $("body").mouseup(function () {
    if (!mouse_is_inside) {
      $('#search-content').hide();
      $('#search-filter').removeClass('active');
    }
  });
});

$(document).ready(function () {
  $('#search-content').click(function (event) {
    event.stopPropagation();
  });
  $('#search-filter').click(function (event) {
    event.stopPropagation();
    $('#search-content').toggle();
    $('#search-filter').toggleClass('active');
  });
});


$('#options').change(function () {
  $('#phone').text('File dữ liệu Template');
  if ($(this).val() == 'show') {
    $('#phone').text('File dữ liệu Template');
  } else if ($(this).val() == 'hide') {
    $('#phone').text('Số điện thoại');
  } else
    $('#phone').text('Số điện thoại');
}
);


function countChar(val) {
  var len = val.value.length;
  if (len >= 500) {
    val.value = val.value.substring(0, 500);
  }
  else {
    $('#charNum').text(`Ký tự đã nhập: ` + (len) + "/1000")
  }
};

function viewPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};

if ($('#search-filter').hasClass('active')) {
  $('#search-filter').html('<i class="ri-arrow-up-s-fill"></i>')
}
else {
  $('#search-filter').html('<i class="ri-arrow-down-s-fill"></i>')
};

for (let i = 0; i <= $("[id^=checkbox]").length; i++) {
  $(`#checkboxAll${i}`).change(function () {
    var checkBoxes = $(`input[name=checkboxAll${i}]`);
    if ($(`#checkboxAll${i}`).prop("checked") == false) {
      checkBoxes.prop("checked", false)
      $(`#checkboxAll${i}`).removeAttr("indeterminate");
      $(`#checkboxAll${i}`).prop("checked", false);
    }
    else {
      checkBoxes.prop("checked", true)
      $(`#checkboxAll${i}`).prop("checked", true);
    }
  });
  $(`input[name=checkboxAll${i}]`).change(function () {
    if ($(`input[name=checkboxAll${i}]:checked`).length == 0) {
      $(`#checkboxAll${i}`).removeAttr("indeterminate");
      $(`#checkboxAll${i}`).prop("checked", false);
    } else if ($(`input[name=checkboxAll${i}]:checked`).length == $(`input[name=checkboxAll${i}]`).length) {
      $(`#checkboxAll${i}`).removeAttr("indeterminate");
      $(`#checkboxAll${i}`).prop("checked", true);
    } else {
      $(`#checkboxAll${i}`).attr("indeterminate", true);
      $(`#checkboxAll${i}`).prop("checked", false);
    }
  });
}