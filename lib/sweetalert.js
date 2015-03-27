/*!
 * angular-sweetalert
 * Angular wrapper for sweetalert
 *
 * Abimael Martell @ 2015
 *
 */
(function(angular) {
    'use strict';

    var module = angular.module('abimaelmartell.SweetAlert', []);

    module.factory('SweetAlert', function($q, $window) {
        this.sweetAlert = $window.sweetAlert;

        var SweetAlert = {};

        SweetAlert.show = function(options) {
            var defered = $q.defer();

            var callback = function() {
                defered.resolve();
            };

            $window.swal(options, callback);

            return defered.promise;
        };

        // Helper for shortcuts

        SweetAlert.simpleShow = function(text, title, type) {
            return SweetAlert.show({
                text: text,
                title: title,
                type: type
            });
        };

        // Shortcuts

        SweetAlert.info = function(text, title) {
            return SweetAlert.simpleShow(text, title || 'Info', 'info');
        };

        SweetAlert.success = function(text, title) {
            return SweetAlert.simpleShow(text, title || 'Success', 'success');
        };

        SweetAlert.error = function(text, title) {
            return SweetAlert.simpleShow(text, title || 'Error', 'error');
        };

        return SweetAlert;
    });

})(angular);
