(function() {
    var ogTitleElem = document.querySelector('meta[property~="og:title"]');
    if (ogTitleElem != null)
        var title = ogTitleElem.getAttribute("content").trim();

    var ogDescriptionElem = document.querySelector('meta[property~="og:description"]');
    if (ogDescriptionElem != null)
        var description = ogDescriptionElem.getAttribute("content").trim();

    var descriptionElem = getMeta('description')
    if (descriptionElem != null && description == null)
        var description = descriptionElem.trim();

    var keywordsElem = getMeta('keywords')
    if (keywordsElem != null)
        var keywords = keywordsElem.trim();

    if (title == null)
        title = document.title.trim();

    var url = window.location.href;

    console.log("SymRe Autofill.\nTitle: " + title + "\nDescription: " + description + "\nKeywords: " + keywords + "\nURL: " + url);

    var str = "?url=" + encodeURIComponent(url);
    
    if (title != null && title.length > 0)
        str += "&title=" + encodeURIComponent(title);
    
    if (description != null && description.length > 0)
        str += "&description=" + encodeURIComponent(description);
    
    if (keywords != null && keywords.length > 0)
        str += "&tags=" + encodeURIComponent(keywords);

    console.log("SymRe params string: " + str);

    return str;
})();

function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
  
    return null;
  }
  