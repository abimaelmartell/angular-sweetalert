/*!
 * angular-sweetalert
 * Angular wrapper for sweetalert
 *
 * Abimael Martell @ 2015
 *
 */
(function(angular) {
    'use strict';

    var module = angular.module('abimaelmartell.SweetAlert');

    module.factory('SweetAlert', function($q, $window) {
        this.sweetAlert = $window.sweetAlert;

        // do the thing!
    });

})(angular);
