import store from 'store'
import swal from 'sweetalert'

// get brower info 

function getBrowserInfo(){
    let agent = navigator.userAgent.toLowerCase();
    if(agent.indexOf('msie') > 0){
        return 'msie';
    }
    if(agent.indexOf('firefox') > 0){
        return 'firefox'
    }
    if(agent.indexOf('chrome') > 0){
        return 'chrome'
    }
    if(agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0){
        return 'safari'
    }
    if(agent.indexOf('opera') > 0){
        return 'opera'
    }

    return 'unknown-brower'
}

// set and get localStorage with expiration

var storeWithExpiration = {
    set: function(key, val, exp){
        store.set(key, {val: val, exp: exp, time: new Date().getTime()})
    },
    get: function(key){
        var info = store.get(key);
        if(!info) { return {} }
        if(new Date().getTime() - info.time > info.exp){
            return null;
        }
        return info.val
    }
}

var storeRemove = function(key){
    store.remove(key);
}

// message alert

var toggleAlert = function(message, type) {
    console.log(message);
    let title = type === "error" ? "Oops" : "Good";
    swal({
        title: title,
        text: message,
        type: type || "warning"
    });
}



export default {
    getBrowserInfo,
    storeWithExpiration,
    storeRemove,
    toggleAlert
}