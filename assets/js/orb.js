orb = {
  init: function () {
    let language = localStorage.getItem("orb-language");

    if (language) {
        this.translateTo(window[language]);
    }
    else {
        let browser_language = navigator.language.replace('-', '_');
        this.translateTo(window[browser_language.toLowerCase()]);
    }
  },

  translateTo: function (language) {
    for (let property in language) {
        if (this._isAnExistingPropertyInDOM(property)) {
            let orbSelectorAll = document.querySelectorAll('[orb="'+property+'"]');

            if (this._hasAnObjectInProperty(language[property])) {
                let object = language[property];

                for (let field in object) {
                     orbSelectorAll.forEach(function(element, index) {
                       element.innerHTML = object[field];
                     });
                }
            }
            else {
                orbSelectorAll.forEach(function(element, index) {
                    element.innerHTML = language[property];
                });
            }
        }
    }
    
    localStorage.setItem("orb-language", language._language);
  },

  _isAnExistingPropertyInDOM: function (property) {
    return document.querySelector('[orb="'+property+'"]') ? true : false;
  },

  _hasAnObjectInProperty: function (property) {
    return typeof(property) === 'object';
  }
};

orb.init();