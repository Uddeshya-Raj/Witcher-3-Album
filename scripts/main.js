var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDE_BUTTON_SELECTOR = '[data-image-role="hide"]';
var HIDDEN_DETAIL_CLASS = 'hiddenDetail';
var TINY_EFFECT_CLASS = 'isTiny';
var ESC_KEY = 27;
function setDetails(imageURL, titleText){
    'use strict';
    var detailImage=document.querySelector('[data-image-role="target"]');
    var detailImageTitle=document.querySelector('[data-image-role="title"]');
    detailImage.setAttribute('src',imageURL);
    detailImageTitle.textContent=titleText;
}

function imageFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFormThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail){
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFormThumb(thumbnail));
}

function addThumbClickHandler(thumb){
    'use strict';
    thumb.addEventListener('click',function (event){
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray(){
    'use strict';
    var thumbnails=document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray=[].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails(){
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails(){
    'use strict';
    var frame=document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function(){
        frame.classList.remove(TINY_EFFECT_CLASS);
    },50);
}

function addKeyPressHandler(){
    'use strict';
    document.body.addEventListener('keyup',function(event){
        event.preventDefault();
        if(event.keyCode===ESC_KEY){
            hideDetails();
        }
    });
}

function getHideButton(){
    'use strict';
    var hideButton=document.querySelector(HIDE_BUTTON_SELECTOR);
    return hideButton;
}

function addHideClickHandler(){
    'use strict';
    var hideButton=getHideButton();
    hideButton.addEventListener('click',function(){
        'use strict';
        document.body.classList.add(HIDDEN_DETAIL_CLASS);
    });
}

function initializeEvents(){
    'use strict';
    var thumbnails=getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
    addHideClickHandler();
}

initializeEvents();