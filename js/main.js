'use strict';
angular.module('myApp',
		[


        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.buffering",
        "info.vietnamcode.nampnq.videogular.plugins.youtube",
        'com.2fdevs.videogular.plugins.controlbar'
		]
	)
	.controller('HomeCtrl',
		["$sce", function ($sce) {
			this.config =
                                  {
        sources: [
          {src: "https://www.youtube.com/watch?v=gi-wl43o3gc"}
        ]
        // Tracks are inside .mpd file and added by Dash.js
      };
		}]
	);