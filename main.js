let listCount = 0;

$("form").on("submit", function(e) {
  e.preventDefault();

  const newListItem = $(`<li class="list-item"></li>`);
  $(newListItem).appendTo("ul");
  $(".list-item")[listCount].innerText = $("#activity-name").val();

  listCount += 1;
  $("#activity-name").val("")
})
