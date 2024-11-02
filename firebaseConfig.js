const firebaseConfig = {
    apiKey: "AIzaSyCRT86JnmAorJyRZQSVBsBUqT1fKeNgmlw",
    authDomain: "pertamina-dfac1.firebaseapp.com",
    databaseURL: "https://pertamina-dfac1-default-rtdb.firebaseio.com",
    projectId: "pertamina-dfac1",
    storageBucket: "pertamina-dfac1.appspot.com",
    messagingSenderId: "545759762730",
    appId: "1:545759762730:web:43ee1c8b97acf5d6b36653",
    measurementId: "G-JRTF23K4DR"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
/*
  var usersRef = firebase.database().ref('users')
  var auth = null;
  $('#registerForm').on('submit', function (e) {
    e.preventDefault();
    $('#registerModal').modal('hide');
    $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
    $('#messageModal').modal('show');
    var data = {
      email: $('#registerEmail').val(),
      firstName: $('#registerFirstName').val(), 
      lastName: $('#registerLastName').val(),
    };

    var passwords = {
      password: $('#registerPassword').val(),
      cPassword: $('#registerConfirmPassword').val(), 
    }
    if (data.email != '' && passwords.password != '' && passwords.cPassword != '') {
      if (passwords.password == passwords.cPassword) {
        //create the user

        firebase.auth()
          .createUserWithEmailAndPassword(data.email, passwords.password)
          .then(function (user) {
            return user.updateProfile({
              displayName: data.firstName + ' ' + data.lastName
            })
          })
          .then(function (user) {
            //now user is needed to be logged in to save data
            auth = user;
            //now saving the profile data
            usersRef.child(user.uid).set(data)
              .then(function () {
             
              })
            $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))

            $('#messageModal').modal('hide');
          })
          .catch(function (error) {
       
            $('#messageModalLabel').html(spanText('silahkan login cek data anda '
             , ['danger']
            ))
          });

      } else {
        //password and confirm password didn't match
        $('#messageModalLabel').html(spanText("ERROR: Passwords didn't match", ['danger']))
      }
    }
  });

  //Login
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
    $('#loginModal').modal('hide');

    $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
    $('#messageModal').modal('show');

    if ($('#loginEmail').val() != '' && $('#loginPassword').val() != '') {
      //login the user
      var data = {
        email: $('#loginEmail').val(),
        password: $('#loginPassword').val()
      };
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(function (authData) {
          auth = authData;
          $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))
          $('#messageModal').modal('hide');
          $('#loginModal').modal('hide');
        })
        .catch(function (error) {

         $('#messageModalLabel').html(spanText('ERROR: ' + error.code, ['danger']))
        });
    }
  });

  $('#logout').on('click', function (e) {
    e.preventDefault();
    firebase.auth().signOut()
  });

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      auth = user;
      $('body').removeClass('auth-false').addClass('auth-true');
      usersRef.child(user.uid).once('value').then(function (data) {
        var info = data.val();
        if (user.photoUrl) {
         $('.user-info .user-name').hide();
        } else if (user.displayName) {
          $('.user-info').append('<span class="user-name">' + user.displayName + '</span>');
        } 
      });
     
    } else {
      $('body').removeClass('auth-true').addClass('auth-false');
      $('#contacts').html('');
      auth = null;
    }
  });
  
function spanText(textStr, textClasses) {
 var classNames = textClasses.map(c => 'text-' + c).join(' ');
  return '<span class="' + classNames + '">' + textStr + '</span>';
  
}
*/



