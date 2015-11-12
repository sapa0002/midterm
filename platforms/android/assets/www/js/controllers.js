angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {


   $rootScope.pushNotification = {checked : true};
     $rootScope.pushNotification2 = {checked : true};
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('SettingsCtrl', function() {
    //$rootScope.pushNotification = {checked : true};


})


.controller('TodoBizCtrl', function($scope, taskservices, $stateParams,  $cordovaVibration, $rootScope, $cordovaLocalNotification ) {

    $scope.tasks = taskservices.all($stateParams.todo_id);

    $scope.todobiz = {task:""};

   // var cordova_vibration = $cordovaVibration;


  $scope.addTask = function() {

       taskservices.add({name: $scope.todobiz.task, status: false}, $stateParams.todo_id);
       $scope.todobiz.task = "";

        if($scope.tasks.length == 0){
            $scope.tasks = taskservices.all($stateParams.todo_id);
       }

     }


  $scope.removeTask = function(index) {

        taskservices.remove(index, $stateParams.todo_id);

          }



  $scope.changed = function(index){


       if ($rootScope.pushNotification.checked) {


          if($scope.tasks[index].status){

            alert("hi");
         //  try {
             $cordovaVibration.vibrate(500);
           //}
           // catch (e) {
            //  alert("vibration");
           // }
         }

       }


     if ($rootScope.pushNotification2.checked) {
        var count = 0;


        for(var i=0; i<$scope.tasks.length; i++) {



          if  ($scope.tasks[i].status){
                count ++;
            }


        }
       if (count == $scope.tasks.length){

          //try {
            alert("hi");
           
            $cordovaLocalNotification.schedule({
              id: 1,
              title: 'Completed',
              text: 'Tasks completed'

            });
          //}
          //catch (e) {
         //   alert("notification");
         // }

        }
          console.log(count);

      }


   };


});




