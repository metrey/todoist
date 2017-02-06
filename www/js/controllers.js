angular.module('TodoifyApp.controllers', [])
.controller('TodoListCtrl', function (Backand, $state, $rootScope, $ionicPopup, ItemsModel) {
	var vm = this;

    function goToBackand() {
        window.location = 'http://docs.backand.com';
    }

    function getAll() {
    	ItemsModel.all()
            .then(function (result) {
                vm.items = result.data.data;
            });
    }

    function clearData(){
        vm.items = null;
    }

    function create(object) {
    	ItemsModel.create(object)
            .then(function (result) {
                cancelCreate();
                getAll();
            });
    }

    function update(object) {
        ItemsModel.update(object.id, object)
            .then(function (result) {
                cancelEditing();
                getAll();
            });
    }

    function deleteObject(id) {
    	var confirmPopup = $ionicPopup.confirm({
    	     title: 'Delete?',
    	     template: 'Are you sure you want to delete?'
    	   });

    	   confirmPopup.then(function(res) {
    	     if(res) {
    	    	 ItemsModel.delete(id)
    	            .then(function (result) {
    	                cancelEditing();
    	                getAll();
    	            });
    	     }
    	   });
        
    }

    function initCreateForm() {
        vm.newObject = {name: '', description: ''};
    }

    function setEdited(object) {
        vm.edited = angular.copy(object);
        vm.isEditing = true;
    }

    function isCurrent(id) {
        return vm.edited !== null && vm.edited.id === id;
    }

    function cancelEditing() {
        vm.edited = null;
        vm.isEditing = false;
    }

    function cancelCreate() {
        initCreateForm();
        vm.isCreating = false;
    }

    vm.items = [];
    vm.edited = null;
    vm.isEditing = false;
    vm.isCreating = false;
    vm.getAll = getAll;
    vm.create = create;
    vm.update = update;
    vm.delete = deleteObject;
    vm.setEdited = setEdited;
    vm.isCurrent = isCurrent;
    vm.cancelEditing = cancelEditing;
    vm.cancelCreate = cancelCreate;
    vm.goToBackand = goToBackand;
    vm.isAuthorized = false;

    initCreateForm();
    getAll();
});

