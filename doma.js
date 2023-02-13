function autoRelated(data) {
    var out = data[1];
    var dom = '';    

    for (var i = 0; i < out.length; i++) {
        var kw = out[i];
        var sentences = [            `<b>${kw}</b> is one of the best results for ${postTitle}.`,            `<b>${kw}</b> is a top choice for ${postTitle}.`,            `<b>${kw}</b> is a highly recommended option for ${postTitle}.`        ];
        var randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
        
        dom += `<aside>
                    <img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" />
                    <small>title: <i>${kw}</i></small>
                    <h3><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></h3>
                    <p align="justify">
                        ${randomSentence} Everything in here is for reference purposes only. Feel free to save and bookmark ${kw}.
                    </p>
                </aside>`;
    }

    return dom;
}
