var baseUrl = "/";
var postTitle = "{SearchQuery}";
var dom = "";
function autoRelated(data) {
    var out = data[1];
    for (i = 0; i < out.length; i++) {
        var kw = out[i];
        dom += `<aside><img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /><small>Source: <i>${out[i]} from <a target='_blank' href='https://www.bing.com/images/search?q=${out[i]}'>bing.com</a></i></small><h3 style="text-transform: capitalize;"><a href="/search/${encodeURIComponent(kw)}">${out[i]}</a></h3><p align="justify"><b style="text-transform: capitalize;">${out[i]}</b> is widely regarded as one of the most comprehensive resources on ${out[i]} available today. With a diverse range of references, including scholarly articles and popular blogs, you're sure to find everything you need to satisfy your curiosity about this topic. So start exploring today and don't forget to save ${out[i]} for easy access in the future!</p></aside>`;
    }
    $("#relatedImage").html(dom);
}
$(document).ready(function() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://suggestqueries.google.com/complete/search?jsonp=autoRelated&hl=en&client=firefox&q=" + encodeURIComponent(postTitle);
    document.getElementsByTagName("head")[0].appendChild(script);
});
