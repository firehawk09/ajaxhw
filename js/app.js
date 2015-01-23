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
        }, {
            url: "./js/github.js"
        }, {
            url: "./bower_components/backbone/backbone.js"
        }

    ).then(function() {
        document.querySelector("html").style.opacity = 1;
        // start app?

        //debugger




        // githubClient(firehawk09, c95ae7b1e65037f31fa13bfa3b4893400bf92c5c)

        //<------------------------------------------------------------------->






        var token = "c95ae7b1e65037f31fa13bfa3b4893400bf92c5c"
        var githubUsername = "firehawk09";

        var profile_url = "https://api.github.com/users/" + githubUsername + "?access_token=" + token;


        var Ralphy = new GithubClient(githubUsername, token)

        //     var left_template_url = "./templates/left.html";
        //     var right_template_url = "./templates/right.html";
        //     var repos_url = "https://api.github.com/users/" + githubUsername + "/repos?access_token=" + token;


        //     var promise1 = $.get(profile_url);
        //     var promise2 = $.get(left_template_url);

        //     $.when(promise1, promise2).then(drawProfile)


        // function drawProfile() {
        //     var data = arguments[0]
        //     var template = arguments[1]
        //     document.getElementsByClassName("left")[0].innerHTML += _.template(template[0], data[0]);
        //     }


        //     var promise3 = $.get(repos_url);
        //     var promise4 = $.get(right_template_url);

        //     $.when(promise3, promise4).then(drawRepos)


        //     function drawRepos() {

        // var repo = arguments[0][0]
        // var template = arguments[1]
        // repo.forEach(function(value) {
        //     document.getElementsByClassName("right")[0].innerHTML += _.template(template[0], value);
        //         })
        // }
    })
}
