"use strict";
var app = angular.module("videogularApp",
    [
        "controllers",

        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.buffering",
        "info.vietnamcode.nampnq.videogular.plugins.youtube"
    ]
);

app.controller('HomeCtrl',
    ["$sce", function ($sce) {
      this.config = {
        sources: [
          {src: $sce.trustAsResourceUrl("http://localhost/acopitan/video/video/video.mp4"), type: "video/mp4"},
        ],
        tracks: [
          {
            src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
            kind: "subtitles",
            srclang: "en",
            label: "English",
            default: ""
          }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
          poster: "http://www.videogular.com/assets/images/videogular.png"
        }
      };
    }]
  );
