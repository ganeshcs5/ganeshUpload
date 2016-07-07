var app = angular.module('ranking', []);
 app.controller('missaoRankingCtrl', ['$scope', function($scope){

$scope.uploadImage =function() {
    //console.log("username "+value);
  AWS.config.region = 'us-east-1';
AWS.config.update({accessKeyId: 'AKIAJW62LTFBVTMMD4CA', secretAccessKey: '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'});

  var bucket = new AWS.S3({params: {Bucket: 'learning-testing'}});

  var fileChooser = document.getElementById('file-chooser');
  var results = document.getElementById('results');

    var file = fileChooser.files[0];
    console.log(file.name)
    //var profilePic;
    if (file) {
      results.innerHTML = '';

      var params = {Key: file.name+"", ContentType: file.type, Body: file, ACL:'public-read'};
      bucket.upload(params, function (err, data) {
        var object = {};
        object.picture = data.Location
         /*$http.put("/api/App-Users/"+value.id+"?access_token="+$scope.UserDetail.access_token,object).success(function(data) { 
            console.log("update successfull");
            alert('Profile Picture Updated');
             }).error(function(message) { 
               console.log("error  "+JSON.stringify(message));
              alert('Profile Picture did not Updated');
             });*/
        results.innerHTML = err ? 'ERROR!' : 'UPLOADED.';
        return data.Location;
      });
    } else {
      results.innerHTML = 'Nothing to upload.';
    }

  }

  }])