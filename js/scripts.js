$(document).ready(function() {
  $("form#stressForm").submit(function(event) {
    event.preventDefault();
    var signsArray = [];
    var symptomsArray = [];
    var activityArray = [];

    $("input:checkbox[name=signs]:checked").each(function() {
      var signsResponses = $(this).val();
      signsArray.push(signsResponses);
    });

    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptomsResponses = $(this).val();
      symptomsArray.push(symptomsResponses);
    });

    $("input:checkbox[name=activity]:checked").each(function() {
      var activityResponses = $(this).val();
      activityArray.push(activityResponses);
    });

    if (signsArray.length === 4 && symptomsArray.length === 4 && activityArray.length <= 1) {
      $("#guidance").show();
    } else if (signsArray.length === 4 && activityArray.length === 3) {
      $("#guidance").show();
    } else if (symptomsArray.length === 3 && activityArray.length === 4) {
      $("#good_job").show();
    } else {
      $("#good_job").show();
    }

  });
});
