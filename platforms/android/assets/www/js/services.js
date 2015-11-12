angular.module('starter.services', ['ngStorage'])


  .factory('taskservices', function($localStorage) {

    var toDoLists= [];



    if ($localStorage.toDoLists) {

      toDoLists = $localStorage.toDoLists;
    }



    return {

      all: function(id) {
        for (var i = 0; i < toDoLists.length; i++) {

          var obj = toDoLists[i];
          if (obj.id == id) {

            return obj.tasks;

          }
        }
        return [];
      },

      remove: function(index, id) {

        for (var i = 0; i < toDoLists.length; i++) {

          var obj = toDoLists[i];
          if (obj.id == id) {

            obj.tasks.splice(index, 1);

            $localStorage.toDoLists = toDoLists;

          }
        }


      },

      add: function(todotask, id){

        for (var i = 0; i < toDoLists.length; i++) {

          var obj = toDoLists[i];

          if (obj.id == id) {

            obj.tasks.push(todotask);

            $localStorage.toDoLists = toDoLists;

            return;
          }
        }

          toDoLists.push({id:id, tasks:[todotask]});

          $localStorage.toDoLists = toDoLists;


      }



    };
  });

