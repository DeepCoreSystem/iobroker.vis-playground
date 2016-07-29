/*
    ioBroker.vis playground Widget-Set

    version: "0.0.1"

    Copyright 10.2015-2016 DeepCore System<devap@deepcore.eu>

*/
"use strict";

// add translations for edit mode
// if (vis.editMode) {
//     $.extend(true, systemDictionary, {
//         "myColor": {
//             "en": "myColor",
//             "de": "mainColor",
//             "ru": "Мой цвет"
//         },
//         "myColor_tooltip": {
//             "en": "Description of\x0AmyColor",
//             "de": "Beschreibung von\x0AmyColor",
//             "ru": "Описание\x0AmyColor"
//         },
//         "htmlText": {
//             "en": "htmlText",
//             "de": "htmlText",
//             "ru": "htmlText"
//         },
//         "group_extraMyset": {
//             "en": "extraMyset",
//             "de": "extraMyset",
//             "ru": "extraMyset"
//         },
//         "extraAttr": {
//             "en": "extraAttr",
//             "de": "extraAttr",
//             "ru": "extraAttr"
//         }
//     });
// }

// add translations for non-edit mode
$.extend(true, systemDictionary, {
    "Instance": {
        "en": "Instance",
        "de": "Instanz",
        "ru": "Инстанция"
    }
});

// this code can be placed directly in playground.html
vis.binds.playground = {
    version: "0.0.1",
    showVersion: function() {
        if (vis.binds.playground.version) {
            console.log('Version playground: ' + vis.binds.playground.version);
            vis.binds.playground.version = null;
        }
    }
};

vis.binds.playground.showVersion();
