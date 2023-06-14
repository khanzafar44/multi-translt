self.__BUILD_MANIFEST = function(s, a, e) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, a, e, "static/chunks/pages/index-42c09ad158d1c2780c07.js"],
        "/_error": ["static/chunks/pages/_error-737a04e9a0da63c9d162.js"],
        "/about-us": ["static/chunks/pages/about-us-4a03b84ec25815218480.js"],
        "/translate": [s, a, e, "static/chunks/pages/translate-eb60f09b33ee80816737.js"],
        "/translate/[slug]": [s, a, "static/chunks/pages/translate/[slug]-2fd501b18df5b051c46d.js"],
        "/translator/[slug]": [s, a, e, "static/chunks/pages/translator/[slug]-65d65a41313025a75edd.js"],
        sortedPages: ["/", "/_app", "/_error", "/about-us", "/translate", "/translate/[slug]", "/translator/[slug]"]
    }
}("static/chunks/206-b624385b7bec488865ab.js", "static/chunks/640-32b5a053810a08daaa95.js", "static/chunks/930-f02a6da3ad20ad2565a0.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();