   var myDataRef = new Firebase('https://ptsite.firebaseio.com/');
      $('#name2').keypress(function (e) {
        if (e.keyCode == 13) {
          var name_first = $('#name1').val();
          var name_last = $('#name2').val();
          myDataRef.push({firstName: name_first, lastName: name_last});
          $('#name2').val('');
        }
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.firstName, message.lastName);
      });
      function displayChatMessage(name_first, name_last) {
        $('<div/>').text(name_last).prepend($('<em/>').text(name_first+': ')).appendTo($('#listDiv'));
        $('#listDiv')[0].scrollTop = $('#listDiv')[0].scrollHeight;
      };