var url ='url goes here';

var SammpleServices = angular.module('Sample.service', ['ngResource']);

SammpleServices.factory('users', function ($resource) {
     return $resource(url+'user/:id', {}, {
        post: { method: 'POST' },
        get: { method: 'GET' ,params: {id: '@id'},isArray:true},
        put: { method: 'put' ,params: {id: '@id'}},
        delete: { method: 'DELETE' ,params: {id: '@id'}}
    });
});