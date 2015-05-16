
'use strict';
angular.module('myApp',
	    [


	        "com.2fdevs.videogular",
	        "com.2fdevs.videogular.plugins.controls",
	        "com.2fdevs.videogular.plugins.overlayplay",
	        "com.2fdevs.videogular.plugins.buffering",
	        "info.vietnamcode.nampnq.videogular.plugins.youtube"
	    ]
	).controller('YoutubeCtrl',
	function ($scope, $sce) {
    $scope.currentTime = 0;
    $scope.totalTime = 0;
    $scope.state = null;
    $scope.volume = 1;
    $scope.isCompleted = false;
    $scope.API = null;

    $scope.onPlayerReady = function (API) {
      $scope.API = API;
    };

    $scope.onCompleteVideo = function () {
      $scope.isCompleted = true;
    };

    $scope.onUpdateState = function (state) {
      $scope.state = state;
    };

    $scope.onUpdateTime = function (currentTime, totalTime) {
      $scope.currentTime = currentTime;
      $scope.totalTime = totalTime;
    };

    $scope.onUpdateVolume = function (newVol) {
      $scope.volume = newVol;
    };

    $scope.videos = [
      {
        sources: [
          {src: "https://www.youtube.com/watch?v=gi-wl43o3gc"}
        ],
        tracks: [
          {
            src: "assets/subs/pale-blue-dot.vtt",
            kind: "subtitles",
            srclang: "en",
            label: "English",
            default: ""
          }
        ]
      }
    ];

    $scope.config = {
      autoHide: false,
      autoHideTime: 3000,
      autoPlay: false,
      sources: $scope.videos[0].sources,
      tracks: $scope.videos[0].tracks,
      loop: false,
      preload: "auto",
      transclude: true,
      controls: undefined,
      theme: {
        url: "bower_components/videogular-themes-default/videogular.min.css"
      },
      plugins: {
        poster: {
          url: "assets/images/videogular.png"
        },
        ads: {
          companion: "companionAd",
          companionSize: [728, 90],
          network: "6062",
          unitPath: "iab_vast_samples",
          adTagUrl: "http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=%2F3510761%2FadRulesSampleTags&ciu_szs=160x600%2C300x250%2C728x90&cust_params=adrule%3Dpremidpostpodandbumpers&impl=s&gdfp_req=1&env=vp&ad_rule=1&vid=47570401&cmsid=481&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]",
          skipButton: "<div class='skipButton'>skip ad</div>"
        }
      }
    };

    $scope.changeSource = function () {
      $scope.config.sources = $scope.videos[0].sources;
      $scope.config.tracks =  $scope.videos[0].tracks;
      $scope.config.loop = false;
      $scope.config.preload = true;
    };
	}
);
