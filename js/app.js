window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function() {
        document.querySelector("html").style.opacity = 1;
        // start app?

        //debugger


        var token = "c95ae7b1e65037f31fa13bfa3b4893400bf92c5c"

        var githubUsername = "firehawk09";
        var url = "https://api.github.com/users/" + githubUsername + "?access_token=" + token;

        $.get(url).then(drawProfile);

        function drawProfile(data) {
            document.getElementsByClassName("leftSide")[0].innerHTML = [
                '<img src="https://avatars.githubusercontent.com/u/10188453?v=3">',
                '<h2>',
                data.name,
                '</h2>',
                '<h4> Email: ',
                data.email,
                '</h4>',
                '<h4> Public Repos: ',
                data.public_repos,
                '</h4>',
                '<h4> Location: ',
                data.location,
                '</h4>',
                arguments[1]
            ].join('')
        }

//         var url2 = "https://api.github.com/users/" + githubUsername+ "?access_token=" + token + "/repos/";

//         $.get(url2).then(drawProfile2);

// // ====================================

//         (myRepos.then(function(data)
//         {drawRepos(data)};


//         var myObject = $.get("something");

//         myObject.then(
//         return Unacceptableeeee!!!!);

// // ====================================

//         function drawProfile2(data) {
//             document.getElementsByClassName("rightSide")[0].innerHTML = [
//                 '<h4> Repos:',
//                 data.repos_url,
//                 '</h4>',
//                 arguments[1]
//             ].join('')
//         }
    })
}
