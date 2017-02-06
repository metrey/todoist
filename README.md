
# Requirement
* ionic 1

# What to do after download
* Create new account in backend
* Use anonymouse key
* Create backend application: todoify
* Use pre-object of backend (items)

## Run to test

`ionic serve`

# Steps to create this project
- Create backend starter project

`ionic start todoify https://github.com/backand/backand-ionic-starter`

* Naming the ionic application name: TodoifyApp
* In `app.js`:

  set backand application name: `BackandProvider.setAppName('todoify');`
  set backand anonymous key: BackandProvider.setAnonymousToken('xxxx');
  
* In `app.js`, routing remove everything and put as:
  
  `
  .state('todolist', {
                url: '/todolist',
                templateUrl: 'templates/todo-list.html',
                controller: 'TodoListCtrl as vm'
            });

  $urlRouterProvider.otherwise('/todolist');
   `
   
* Create new view: todo-list.html
  Remove all other views
  
* See controller for detail....


* run: `ionic serve to test`

* run: `ionic platform add android`

* run: `ionic run android`
