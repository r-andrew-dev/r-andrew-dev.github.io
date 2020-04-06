

// navigation and contact links roll over effect. 

$(".nav-icon, .contact-link").hover(function() {
    console.log($(this).data('hover'))
    $(this).attr("src", $(this).data('hover'))
}, function () {
    $(this).attr("src", $(this).data('off'))
})


// modal operation 

var modal = $(".modal")
var closeButtons = $(".close-modal")
// set  modal close behaviour
$(".close-modal").on('click', function() {
    console.log('clicked')
  $('.modal').removeClass('modal-open')
  $('#nav-bar').show();
});

// close modal if clicked outside content area
$('.modal-inner').on('click', function() {
    $('.modal').removeClass('modal-open')
    $('#nav-bar').show();
});
// prevent modal inner from closing parent when clicked
$('.modal-content').on('click', function(e) {
	e.stopPropagation();
});


$(".work-card").on("click", function() {
        title = $(this).find(".title").text()
        $(".modal-content-inner .title").text(title);
        source = $(this).find("img").data('attr')
        $(".modal-content-inner #modal-image").attr('src', source);
        site = $(this).find('.live').attr('href')
        console.log(site)
        if (!site) {

            $('#modal-live-site').text("CLI APP")
            $('#modal-live-site').attr('href', "#")

        } else {
            $('#modal-live-site').text("Live Site")
            $('#modal-live-site').attr('href', site)
        }


        code = $(this).find('.code').attr('href')
        $('#modal-code-site').attr('href', code)
        $(".modal").addClass('modal-open')
        $("#nav-bar").hide();
    });