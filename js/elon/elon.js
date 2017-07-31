//Created by elon @Jul 28, 2017 : 1935Hrs

/* -----------------------------  Request HEADERS  ----------------------------- */
// Provides Authorization Header Content
function setAuth(authType, accessToken){
    if(authType===AUTHORIZATION_BASIC){
        return AUTHORIZATION_BASIC+WHITE_SPACE+Base64.encode(authType)
    }else if(authType===AUTHORIZATION_BEARER){
        return AUTHORIZATION_BEARER+WHITE_SPACE+accessToken
    }else{return accessToken}
}
/* ----------------------------- End Of  Request HEADERS  ----------------------------- */

/* -----------------------------  Storage  ----------------------------- */
// Storage Access Object
var Storage = {
    write:function(k,v) {
        store.setItem(k,v);
    },
    read:function(k,ajaxConfig,callback){
        store.getItem(k, function(error, value){
            callback(value, ajaxConfig);
        });
    },
    delete:function(k){
        store.removeItem(k);
        console.log("Key: "+k+" deleted successfully");
    },
    clear:function(){
        store.clear();
    }
};
/* -----------------------------  End Of Storage  ----------------------------- */

/* -----------------------------  Resizable Loader  ----------------------------- */
// Returns HTML for loader
function getLoader(size)
{return "" +
    "<svg class='spinner' width='"+size+"' height='"+size+"' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>" +
    "   <circle class='path' fill='none' stroke-width='6' stroke-linecap='round' cx='33' cy='33' r='30'></circle>" +
    "</svg>"
}
/* ----------------------------- End Of  Resizable Loader  ----------------------------- */

/* -----------------------------  API Post  ----------------------------- */
// Returns Makes AJAX Request and Executes Callback
function dhis2ApiPost(ajaxConfig){
    $('#'+ajaxConfig.loaderId).html(getLoader(ajaxConfig.loaderSize));
    $.ajax({
        async: ajaxConfig.async,
        url: ajaxConfig.url,
        type: ajaxConfig.method,
        dataType: ajaxConfig.dataType,
        data: ajaxConfig.data,
        contentType: ajaxConfig.contentType,
        headers: ajaxConfig.headers,
        success:function (response) {
            console.log("dhis2ApiPost successful");
            ajaxConfig.callback(response, ajaxConfig);
        },
        error:function (xhr, errMsg, err) {
            console.log("Error XHR @ dhis2ApiPost: "+xhr.status + ": " + xhr.responseText);
            console.log("Error (error) @ dhis2ApiPost: "+errMsg + ": " + err);
        }
    });
}
/* ----------------------------- End Of  API Post  ----------------------------- */