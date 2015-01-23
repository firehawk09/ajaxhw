function GithubClient(username, token) {
    this.username = username;
    this.token = token;
    this.drawToPage();
}

// var token = "c95ae7b1e65037f31fa13bfa3b4893400bf92c5c"
// var githubUsername = "firehawk09";

GithubClient.prototype.getUserInfo = function() {
    return $.get("http://api.github.com/users/" + this.username + "?access_token=" + this.token)
};

GithubClient.prototype.getReposInfo = function() {
    return $.get("http://api.github.com/users/" + this.username + "/repos?access_token=" + this.token)
};

GithubClient.prototype.getLeftTemplate = function() {
    return $.get("./templates/left.html")
};

GithubClient.prototype.getRightTemplate = function() {
    return $.get("./templates/right.html")
};

GithubClient.prototype.getAllData = function() {
    return $.when(this.getUserInfo(), this.getReposInfo(), this.getLeftTemplate(), this.getRightTemplate())
};

GithubClient.prototype.drawToPage = function() {
    this.getAllData().then(function() {
    //// do something with the arguments.

        var userData = arguments[0][0];
        var profileTemplate = arguments[2][0];
        var repoData = arguments[1][0];
        var repoTemplate = arguments[3][0];

        document.getElementsByClassName("left")[0].innerHTML += _.template(profileTemplate, userData);

        repoData.forEach(function(value) {
            // console.log(value[0]);
            // console.log(repoTemplate[0]);
            document.querySelector(".right").innerHTML += _.template(repoTemplate, value);
        })
    })
}
