function GithubClient(username, token){
    this.username = username;
    this.token = token;
    this.drawToPage();
}

// var token = "c95ae7b1e65037f31fa13bfa3b4893400bf92c5c"
// var githubUsername = "firehawk09";

GithubClient.prototype.getUserInfo = function() {
    return $.get("http://api.github.com/users/"+this.username+"?access_token="+this.token)
};

GithubClient.prototype.getReposInfo = function() {
    return $.get("http://api.github.com/users/"+this.username+"/repos?access_token="+this.token)
};

GithubClient.prototype.getLeftTemplate = function() {
    return $.get("./templates/left.html")
};

GithubClient.prototype.getRightTemplate = function() {
    return $.get("./templates/right.html")
};

GithubClient.prototype.getAllData = function(){
    return $.when(this.getUserInfo(), this.getReposInfo(), this.getLeftTemplate(), this.getRightTemplate())
};

GithubClient.prototype.drawToPage = function(){
    this.getAllData().then(function(){
        //// do something with the arguments...
            var data = arguments[0]
            var template = arguments[1]
            document.getElementsByClassName("left")[0].innerHTML += _.template(template[0], data[0]);
            var repo = arguments[0][0]
            var template = arguments[1]
            repo.forEach(function(value) {
                document.getElementsByClassName("right")[0].innerHTML += _.template(template[0], value);
    })
}














