"use strict";
angular.module("myApp",
    [
        'ngSanitize',
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.poster",
        "com.2fdevs.videogular.plugins.buffering",
        "info.vietnamcode.nampnq.videogular.plugins.youtube"
    ]
);

angular.module('myApp').controller('DashboardController', [
  '$scope', '$sce', '$log', function($scope, $sce, $log) {
    $scope.currentTime = 0;
    $scope.totalTime = 0;
    $scope.state = null;
    $scope.volume = 1;
    $scope.isCompleted = false;
    $scope.API = null;
    $scope.onPlayerReady = function(API) {
      return $scope.API = API;
    };
    $scope.onCompleteVideo = function() {
      return $scope.isCompleted = true;
    };
    $scope.onUpdateState = function(state) {
      return $scope.state = state;
    };
    $scope.onUpdateTime = function(currentTime, totalTime) {
      $scope.currentTime = currentTime;
      return $scope.totalTime = totalTime;
    };
    $scope.onUpdateVolume = function(newVol) {
      return $scope.volume = newVol;
    };
    $scope.config = {
      autoHide: false,
      autoHideTime: 3000,
      autoPlay: false,
      sources: [
        {
          src: "https://www.youtube.com/watch?v=OCy5461BtTg"
        }
      ],
      tracks: [
        {
          src: "assets/subs/pale-blue-dot.vtt",
          kind: "subtitles",
          srclang: "en",
          label: "English",
          "default": ""
        }
      ],
      loop: false,
      preload: "auto",
      transclude: true,
      controls: void 0,
      theme: {
        url: "bower_components/videogular-themes-default/videogular.css"
      },
      plugins: {
        poster: {
          url: "http://www.videogular.com/assets/images/videogular.png"
        }
      }
    };
    $scope.isOpenInitial = false;
  }
]);

// ---
// generated by coffee-script 1.9.2
