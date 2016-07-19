$(function() {

  //this is bad code but ok for a quick hack
  function get_comment(comment){
    var dom_str = "<div id=\"\" class=\"old_comment\"><img class=\"displayed left\" src=\"images/dog_profile.png\" width=\"30\" height=\"30\"><div class=\"left\">" + comment + "</div><div class=\"likes left\"></div></div>"
    console.log(dom_str);
    return $(dom_str);
  }

  //this is also pretty bad code but it's okay for a hack
  function get_update(update){
    var dom_str = "<div id=\"\" class=\"past_update\"><div class=\"update_content\"><img class=\"displayed left\" src=\"images/dog_profile.png\" width=\"40\" height=\"40\"><div class=\"left\">"+ update + "</div><div class=\"likes left\"></div></div><div class=\"indent_wrap\"><div class=\"comments\"><div id=\"\" class=\"old_comments\"></div><div id=\"\" class=\"new_comment\"><img class=\"displayed left\" src=\"images/dog_profile.png\" width=\"30\" height=\"30\"><input type=\"text\" class=\"longerinput left\"></input><button class=\"post_new_comment\">comment</button></div></div>  </div></div>"
    console.log(dom_str);
    return $(dom_str);
  }

//code for adding a comment into an old post
$(document).on('click',".post_new_comment",
  function(){
    var input_field = $($(this).parent().children()[1]);
    var text = input_field.val();
    if (text != ""){
      var old_com = $(this).parent().parent().children()[0];
      input_field.val("");
      $(old_com).append(get_comment(text));
    }
  }
);

//code for adding a update 
$(document).on('click',"#post_new_update",
  function(){
    var input_field = $($(this).parent().children()[1]);
    var text = input_field.val();
    if (text != ""){
      $("#past_updates").prepend(get_update(text));
      input_field.val("");
    }
  }
);

//toggle like button
$(document).on("click", '.likes', function() {
    $(this).toggleClass('green');
  }
);

$(".navi").hover( 
  function() {
    var toshow = $(this).attr('id');
    $(this).find("span").text(toshow);
  },
  function () { 
    $(this).find("span").text("");
  }
);

});


