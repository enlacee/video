
var app = angular.module('myapp', [
            'ngSanitize',
            "com.2fdevs.videogular",
            "com.2fdevs.videogular.plugins.controls",
            "com.2fdevs.videogular.plugins.overlayplay",
            "com.2fdevs.videogular.plugins.buffering",
            "com.2fdevs.videogular.plugins.poster"
        ]
    );

app.controller('MyController', function($scope) {
    $scope.stretchModes = [
        {label: "None", value: "none"},
        {label: "Fit", value: "fit"},
        {label: "Fill", value: "fill"}
    ];

    $scope.config = {
        width: 740,
        height: 380,
        autoHide: false,
        autoPlay: true,
        responsive: false,
        stretch: $scope.stretchModes[0],
        transclude: true,
        theme: {
                url: "videogular/default/videogular.css",
                playIcon: "&#xe000;",
                pauseIcon: "&#xe001;",
                volumeLevel3Icon: "&#xe002;",
                volumeLevel2Icon: "&#xe003;",
                volumeLevel1Icon: "&#xe004;",
                volumeLevel0Icon: "&#xe005;",
                muteIcon: "&#xe006;",
                enterFullScreenIcon: "&#xe007;",
                exitFullScreenIcon: "&#xe008;"
            },
        plugins: {
            poster: {
                url: "assets/images/logo.png"
            }
        }
    };
});




