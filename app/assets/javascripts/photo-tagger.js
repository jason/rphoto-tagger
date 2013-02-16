var squares = [];
var tags = ["Liv Tyler", "Frodo", "Peter", "Boromir", "Viggo"]
function makeClicksController (element) {


  var clicksController = {
    canvas: null,

    bind: function (canvas) {
      this.canvas = $(canvas);
      this.canvas.click(this.handleClick.bind(this));
    },

    handleClick: function (event) {
      var relPos = {
        x: event.pageX,
        y: event.pageY
      };

      this.addSquare(relPos);
      squares.push(relPos);
    },

    addSquare: function (pos) {
      var that = this;
      this.canvas.append(
        $("<div></div>")
          .addClass("square")
          .css("left", pos.x)
          .css("top", pos.y),
        $("<ul></ul>")
          .addClass("tags")
          .css("left", (pos.x + 130))
          .css("top", pos.y)
        );

      $.each(tags, function(index, tag) {
        that.canvas.find('.tags').append("<li>" + tag + "</li>")
      });
    },

    hideSquares: function() {
        $('.square').hide();
        },

    reloadSquares: function() {
      $('.square').remove();
      var that = this;
      $.each(squares, function(index, square) {
        that.addSquare(square);
      });
    },

    createTags: function(tag) {
      this.tags.push(tag);
    },

    tagPhoto: function(tag) {

    }
  }

  clicksController.bind(element);

  return clicksController;
};

$(function () {
  // var canvases = $(".canvas");
  // canvases.each(function () {
  //   makeClicksController(this);
  var photo = $("#photo");
  var mcc = makeClicksController(photo);
  $("button#clear").click(mcc.hideSquares);
  $("button#reload").click(mcc.reloadSquares.bind(mcc));
});
