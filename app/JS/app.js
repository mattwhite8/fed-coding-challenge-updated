$( document ).ready(function() {
  console.log('document ready!');

  //Closure to keep things out of global scope
  (function(){

    //I did not use jQuery's $.getJSON here because chrome does not allow ajax calls to local files
    var json = [
      {
        "name": "Big Guy Financial",
        "apy": 0.75,
        "earnings": 376.41
      },
      {
        "name": "URBank",
        "apy": 0.87,
        "earnings": 436.89
      },
      {
        "name": "Dewey, Cheatam & Howe",
        "apy": 0.01,
        "earnings": 5.00
      },
      {
        "name": "First Onion",
        "apy": 0.01,
        "earnings": 5.00
      },
      {
        "name": "Bank of Everywhere",
        "apy": 0.01,
        "earnings": 5.00
      }
    ];

    //Run the sort function on json compare based on apy %, returns in desc order
    json.sort(function(a,b){return b.apy - a.apy});

    //Console log the array to make sure sort functioned correctly
    console.log(json);

    //Loop through array and use jQuery to append new elements to the table
    json.forEach(function(e, i ,a ){
      var newRow = $('<tr></tr>');
      newRow.append('<th>'+ e.name +'</th>');
      newRow.append('<th>'+ e.apy + ' %' +'</th>');
      newRow.append('<th>'+ '$' + parseFloat(e.earnings).toFixed(2) +'</th>');

      console.log(newRow.html());
      $('#rate-table').append(newRow);

    });

    //Last, append the small text to the end of the table
    $('#rate-table').append('<tr><th></th><th></th><th>Based on $50,000 Deposit.</th></tr>')

  })();

});
