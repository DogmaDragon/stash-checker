import meta from "./package.json" with { type: "json" };

export default {
    name: "Stash Checker",
    description: meta.description,
    icon: "https://docs.stashapp.cc/favicon.ico",
    version: meta.version,
    author: meta.author.name,
    source: meta.repository.url,
    license: 'WTFPL',
    match: [
        "*://adultanime.dbsearch.net/*",
        "*://coomer.party/*",
        "*://erommdtube.com/*",
        "*://fansdb.cc/*",
        "*://fansdb.xyz/*",
        "*://gayeroticvideoindex.com/*",
        "*://kemono.party/*",
        "*://metadataapi.net/*",
        "*://onlyfans.com/*",
        "*://oreno3d.com/*",
        "*://pmvstash.org/*",
        "*://r18.dev/*",
        "*://shemalestardb.com/*",
        "*://stashdb.org/*",
        "*://www.animecharactersdatabase.com/*",
        "*://www.babepedia.com/*",
        "*://www.data18.com/*",
        "*://www.freeones.com/*",
        "*://www.iafd.com/*",
        "*://www.indexxx.com/*",
        "*://www.iwara.tv/*",
        "*://www.javlibrary.com/*",
        "*://www.minnano-av.com/*",
        "*://www.pornteengirl.com/*",
        "*://www.thenude.com/*",
        "*://xslist.org/*",
    ],
    require: [],
    grant: [
        "GM.xmlHttpRequest",
        "GM.getValue",
        "GM.setValue",
        "GM.deleteValue",
        "GM.listValues",
        "GM.registerMenuCommand",
    ],
    connect: [
        "localhost",
        "*"
    ],
    "run-at": "document-end",
};
