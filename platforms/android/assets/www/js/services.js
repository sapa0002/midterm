angular.module('starter.services', ['ngStorage'])

.factory('taskservice', function($localStorage) {
 
    var tasks=[];
    

 if ($localStorage.tasks) {
     
    tasks = $localStorage.tasks;
  } 
    
    /*else {
        
    tasks =[ {name:'Biz Task 1', status:false}, 
                   
             {name:'Biz Task 2', status:false }, 
             
             {name:'Biz Task 3', status:false } 
           
           ];
  
    }*/
  

  return {
      all: function() {
        return tasks;
       },
      
      remove: function(index) {
        
        delete tasks[index];

        $localStorage.tasks = tasks;

    
        },
    
      add: function(todotask){
        tasks.push(todotask);
        $localStorage.tasks = tasks;
    
         }
    
      };
});
