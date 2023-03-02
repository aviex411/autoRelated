function autoRelated(data) {
    var out = data[1];		    

    for (i = 0; i < out.length; i++) {
    	var kw = out[i];
        dom += `<aside><img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /><small>title: <i>${kw}</i></small><h3><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></h3><p align="justify"><b>${kw}</b> is an exceptional resource for ${postTitle}. Its wealth of information, expertly organized and presented, makes it a must-have reference. And since everything within is intended solely for reference, you can confidently save and bookmark it for future use. Trust <b>${kw}</b> to be your go-to source for all things related to ${postTitle}.</aside>`;
    }
}
