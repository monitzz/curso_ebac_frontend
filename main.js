$(document).ready(function() {
  let listCount = 0;

  $("form").on("submit", function(e) {
    e.preventDefault();

    const newListItem = $(`<li id="item-${listCount}" class="list-item" style="text-decoration: none"></li>`);
    $(newListItem).appendTo("ul");
    $(".list-item")[listCount].innerText = $("#activity-name").val();

    listCount += 1;
    $("#activity-name").val("")
  })

  $("ul").on("click", function(e) {
    const listItemId = e.target.attributes.id.nodeValue;
    $(this).find(`#${listItemId}`).toggleClass("completed");
  })
})
