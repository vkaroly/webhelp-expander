/*
	Tags the active hyperlink in treeview based on the reported URL, and clicks
  on every expandable (+) div of the hyperlink's parents.
	-catail
*/

$(document).ready(function(){

  /* Tag the active span */
  $(".file a").each(function() {
    if ($(this).attr("href") == location.href.split("/").slice(-1)) {
      $(this).addClass("current_page");
    }
  });

  /* Open tree up from the active span */
	$(".current_page").parents("li").each(function() {
    $(this).children("div.hitarea.expandable-hitarea").trigger("click");
	});
});
