(function(){

  // service workers
  if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('/assets/js/sw.js')
  }

  // docsify search config

  function searchPaths(){
    let search_paths = [];
    const paths = {
      tutorials: [
        'git-flow',
        'persistent-storage-using-html5-localstorage',
        'chatbot-using-rivescript-js'
      ]
    };

    for(key in paths){
      paths[key].forEach(path => {
        search_paths.push(`/${key}/${path}`);
      });
    }

    function countSearchIndex(){
      var count = 0;
      if(localStorage['docsify.search.index']){
        for(i in JSON.parse(localStorage['docsify.search.index'])){
          count++;
        }
      }

      return count;
    }

    if(countSearchIndex() != search_paths.length){
      localStorage.removeItem('docsify.search.index');
      localStorage.removeItem('docsify.search.expires');
    }

    return search_paths;
  }

  window.$docsify = {
    nameLink: '/',
    auto2top: true,
    loadNavbar: true,
    loadSidebar: true,
    subMaxLevel: 2,
    search: {
      placeholder: 'What do you want to know...',
      noData: `Sorry! I'm not aware of it too.`,
      paths: searchPaths(),
      depth: 1
    },
    name: 'Awesamm Coder',
    repo: 'awesammcoder/awesammcoder.github.io',
    notFoundPage: '_not-found.md',
    ga: 'UA-125141087-1'
  }
})();