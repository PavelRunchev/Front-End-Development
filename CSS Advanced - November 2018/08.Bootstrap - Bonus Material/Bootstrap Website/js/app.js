
$('#clickedSuccess').click(function () {
    swal("Good job!", "You clicked the button!", "success");
});

$('#clickedInfo').click(function () {
    swal("Here's a message!", "It's pretty, isn't it?");
});

$('#clickedLoader').click(function () {
    swal({
        title: "Ajax request example",
        text: "Submit to run ajax request",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
      }, function () {
        setTimeout(function () {
          swal("Ajax request finished!");
        }, 2000);
      });
});

$('#clickedDeleted').click(function () {
    swal({
        title: "Are you sure?",
        text: "Your will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      },
      function(){
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
      });
});