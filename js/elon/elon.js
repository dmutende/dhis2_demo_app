//Created by elon @Jul 28, 2017 : 1935Hrs

/* -----------------------------  Storage  ----------------------------- */
// Storage Access Object
var Storage = {
    write:function(key,value) {
        store.set(key,value)
    },
    read:function(key){
        return store.get(key)
    },
    delete:function(key){
        store.remove(key)
    },
    clear:function(){
        store.clearAll()
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
            ajaxConfig.callback(response, ajaxConfig.loaderId);
        },
        error:function (xhr, errMsg, err) {
            console.log("Error XHR @ dhis2ApiPost: "+xhr.status + ": " + xhr.responseText);
            console.log("Error (error) @ dhis2ApiPost: "+errMsg + ": " + err);
        }
    });
}
/* ----------------------------- End Of  API Post  ----------------------------- */