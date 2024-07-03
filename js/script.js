$(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      return '<img class="img-fluid" width="50px" src="'+$(this).data('img') + '" />';
    }
  })
})
