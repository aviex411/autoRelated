var descriptions = [  `${kw} is one of the best results for ${postTitle}.`,  `${postTitle} has some of the best results, including ${kw}.`,  `${kw} is a top result for ${postTitle}.`];

var description = descriptions[Math.floor(Math.random() * descriptions.length)];

dom += `<aside><img alt="${kw}" src="https://tse1.mm.bing.net/th?q=${encodeURIComponent(kw)}" width="320" height="320" style="width:100%;height:auto;margin-right: 8px;margin-bottom: 8px;" /><small>title: <i>${kw}</i></small><h3><a href="${baseUrl}search/q=${encodeURIComponent(kw)}">${kw}</a></h3><p align="justify">${description} Everything in here is for references perpose only. Feel free to save and bookmark ${kw}</p></aside>`;
