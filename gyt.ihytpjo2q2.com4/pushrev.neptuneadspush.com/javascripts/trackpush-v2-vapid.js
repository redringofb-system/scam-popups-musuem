function _NeptuneAdsPushDeferred() {
    this._done = [], this._fail = []
}

function getUrlVars() {
    var a = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(b, c, d) {
        a[c] = d
    });
    return a
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/')
  ;
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

function _NeptuneAdsPushGetDeviceType() {
    var a = 1,
        b = "desktop";
    return function(b) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = 2)
    }(navigator.userAgent || navigator.vendor || window.opera), 2 == a && (b = "mobile"), b
}

function _NeptuneAdsPushGetPageDetails() {
    return pageTitle = document.title, pageURL = window.location.href, {
        pageTitle: pageTitle,
        pageURL: pageURL
    }
}

function _NeptuneAdsPushGetReferrer() {
    return refUrl = null, refName = null, 0 !== document.referrer.indexOf(location.protocol + "//" + location.host) && (refUrl = document.referrer ? document.referrer : null, refName = document.referrer ? document.referrer.split("/")[2] : null), {
        refName: refName,
        refUrl: refUrl
    }
}

function _NeptuneAdsPushGetLanguage() {
    var a = navigator.language || navigator.userLanguage;
    return a
}

function _NeptuneAdsPushGetResolution() {
    var a = "";
    return screen.width && (width = screen.width ? screen.width : "", height = screen.height ? screen.height : "", a += "" + width + " x " + height), a
}

function _NeptuneAdsPushGetBrowserInfo() {
    var f, g, h, b = (navigator.appVersion, navigator.userAgent),
        c = navigator.appName,
        d = "" + parseFloat(navigator.appVersion),
        e = parseInt(navigator.appVersion, 10);
    return (g = b.indexOf("Opera")) != -1 && (c = "Opera", d = b.substring(g + 6), (g = b.indexOf("Version")) != -1 && (d = b.substring(g + 8))), (g = b.indexOf("OPR")) != -1 ? (c = "Opera", d = b.substring(g + 4)) : (g = b.indexOf("MSIE")) != -1 ? (c = "Microsoft Internet Explorer", d = b.substring(g + 5)) : (g = b.indexOf("Chrome")) != -1 ? (c = "Chrome", d = b.substring(g + 7)) : (g = b.indexOf("Safari")) != -1 ? (c = "Safari", d = b.substring(g + 7), (g = b.indexOf("Version")) != -1 && (d = b.substring(g + 8))) : (g = b.indexOf("Firefox")) != -1 ? (c = "Firefox", d = b.substring(g + 8)) : b.indexOf("Trident/") != -1 ? (c = "Microsoft Internet Explorer", d = b.substring(b.indexOf("rv:") + 3)) : (f = b.lastIndexOf(" ") + 1) < (g = b.lastIndexOf("/")) && (c = b.substring(f, g), d = b.substring(g + 1), c.toLowerCase() == c.toUpperCase() && (c = navigator.appName)), (h = d.indexOf(";")) != -1 && (d = d.substring(0, h)), (h = d.indexOf(" ")) != -1 && (d = d.substring(0, h)), (h = d.indexOf(")")) != -1 && (d = d.substring(0, h)), e = parseInt("" + d, 10), isNaN(e) && (d = "" + parseFloat(navigator.appVersion), e = parseInt(navigator.appVersion, 10)), {
        browser: c,
        version: d,
        majorVersion: e
    }
}

function _NeptuneAdsPushGetSystemInfo() {
    var a = navigator.userAgent,
        b = navigator.appVersion,
        c = "-",
        d = [{
            s: "Windows 10",
            r: /(Windows 10.0|Windows NT 10.0)/
        }, {
            s: "Windows 8.1",
            r: /(Windows 8.1|Windows NT 6.3)/
        }, {
            s: "Windows 8",
            r: /(Windows 8|Windows NT 6.2)/
        }, {
            s: "Windows 7",
            r: /(Windows 7|Windows NT 6.1)/
        }, {
            s: "Windows Vista",
            r: /Windows NT 6.0/
        }, {
            s: "Windows Server 2003",
            r: /Windows NT 5.2/
        }, {
            s: "Windows XP",
            r: /(Windows NT 5.1|Windows XP)/
        }, {
            s: "Windows 2000",
            r: /(Windows NT 5.0|Windows 2000)/
        }, {
            s: "Windows ME",
            r: /(Win 9x 4.90|Windows ME)/
        }, {
            s: "Windows 98",
            r: /(Windows 98|Win98)/
        }, {
            s: "Windows 95",
            r: /(Windows 95|Win95|Windows_95)/
        }, {
            s: "Windows NT 4.0",
            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
        }, {
            s: "Windows CE",
            r: /Windows CE/
        }, {
            s: "Windows 3.11",
            r: /Win16/
        }, {
            s: "Android",
            r: /Android/
        }, {
            s: "Open BSD",
            r: /OpenBSD/
        }, {
            s: "Sun OS",
            r: /SunOS/
        }, {
            s: "Linux",
            r: /(Linux|X11)/
        }, {
            s: "iOS",
            r: /(iPhone|iPad|iPod)/
        }, {
            s: "Mac OS X",
            r: /Mac OS X/
        }, {
            s: "Mac OS",
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
        }, {
            s: "QNX",
            r: /QNX/
        }, {
            s: "UNIX",
            r: /UNIX/
        }, {
            s: "BeOS",
            r: /BeOS/
        }, {
            s: "OS/2",
            r: /OS\/2/
        }, {
            s: "Search Bot",
            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
        }];
    for (var e in d) {
        var f = d[e];
        if (f.r.test(a)) {
            c = f.s;
            break
        }
    }
    var g = "-";
    switch (/Windows/.test(c) && (g = /Windows (.*)/.exec(c)[1], c = "Windows"), c) {
        case "Mac OS X":
            g = /Mac OS X (10[\.\_\d]+)/.exec(a)[1];
            break;
        case "Android":
            g = /Android ([\.\_\d]+)/.exec(a)[1];
            break;
        case "iOS":
            g = /OS (\d+)_(\d+)_?(\d+)?/.exec(b), g = g[1] + "." + g[2] + "." + (0 | g[3])
    }
    return {
        os: c,
        osVersion: g
    }
}

function _NeptuneAdsPushInitialize(a, b) {
    return showDebug && console.log("[PUSHNOTIFICATIONS] - Initializing."), a ? "denied" == _NeptuneAdsPushCheckPermissions() ? (showDebug && console.log("[PUSHNOTIFICATIONS] - User has denied push"), !1) : "granted" == _NeptuneAdsPushCheckPermissions() ? (showDebug && console.log("[PUSHNOTIFICATIONS] - User has already granted permissions, updating visitor"), _NeptuneAdsPushGetPushToken().then(function(a) {
		let subscription = a[1];
		a = a[0];
        _at.attributes.push_token = a, _at.attributes.subscription = subscription, _NeptuneAdsPushTrackAttributes(_at.attributes), _NeptuneAdsPushSendTrackData(trackData)
    }), !1) : _NeptuneAdsPushGetCookie("_NeptuneAdsPushPromptDenied") ? (showDebug && console.log("[PUSHNOTIFICATIONS] - User has denied prompt"), !1) : _NeptuneAdsPushGetCookie("_NeptuneAdsPushPromptApproved") ? (showDebug && console.log("[PUSHNOTIFICATIONS] - User has previously accepted prompt"), !1) : b ? (showDebug && console.log("[PUSHNOTIFICATIONS] - Force Custom Set"), b.promptId > 0 ? (showDebug && console.log("[PUSHNOTIFICATIONS] - Loading Prompt"), _NeptuneAdsPushLoadPrompt(b.promptId, b.auto_prompt)) : 1 == b.auto_prompt && (showDebug && console.log("[PUSHNOTIFICATIONS] - Trigger Show Prompt"), _NeptuneAdsPushPrompt()), !1) : void _NeptuneAdsPushGetSiteConfig(a).then(function(a) {
        curPageURL = _NeptuneAdsPushGetPageDetails().pageURL;
        for (var b = 0; b < a.length; b++)
            if (configPageURL = a[b].page, configPageURL = configPageURL.replace(/\*/g, "[^ ]*"), configPageURL = configPageURL.replace(/https/g, "[^ ]*"), configPageURL = configPageURL.replace(/http/g, "[^ ]*"), configPageURL += "$", curPageURL.match(configPageURL)) {
                promptId = a[b].promptId, auto_prompt = a[b].auto_prompt;
                break
            }
        promptId > 0 ? _NeptuneAdsPushLoadPrompt(promptId, auto_prompt) : 1 == auto_prompt && _NeptuneAdsPushPrompt()
    }) : (console.warn("[PUSHNOTIFICATIONS] - idSite must be set."), !1)
}

function _NeptuneAdsPushGetSiteConfig(a) {
    return new Promise(function(b, c) {
        b([{"priority":1,"page":"*","promptId":0,"auto_prompt":1}]);
    })
}

function _NeptuneAdsPushLoadPrompt(a, b) {
    var c = new XMLHttpRequest;
	console.log('LOADING: ' + _NeptuneAdsPushAPI + "/prompt/" + a);
    c.onreadystatechange = function() {
        if (4 == c.readyState) {
            prompt = JSON.parse(c.responseText);
            var a = document.createElement("DIV");
            a.setAttribute("id", "pushNotificationsPrompt"), a.innerHTML = prompt.code, document.body.appendChild(a), document.getElementById("pushNotificationsPrompt").style.display = "none", _at.prompt.custom_prompt_id = prompt.id, 1 == b && (showDebug && console.log("[PUSHNOTIFICATIONS] - Custom prompt loaded, trigger prompt()."), _NeptuneAdsPushPrompt())
        }
    }, c.open("GET", _NeptuneAdsPushAPI + "/prompt/" + a, !0), c.send(null)
}

function _NeptuneAdsPushPromptApprove() {
    showDebug && console.log("[PUSHNOTIFICATIONS] - Custom prompt approved."), document.getElementById("pushNotificationsPrompt").style.display = "none", _NeptuneAdsPushSetCookie("_NeptuneAdsPushPromptApproved", !0, 7), _NeptuneAdsPushRunNative()
}

function _NeptuneAdsPushPromptDeny() {
    showDebug && console.log("[PUSHNOTIFICATIONS] - Custom prompt denied."), _NeptuneAdsPushSetCookie("_NeptuneAdsPushPromptDenied", !0, 14), _at.prompt.action = "denied", _NeptuneAdsPushOptInResponse(_at.prompt), document.getElementById("pushNotificationsPrompt").style.display = "none"
}

function _NeptuneAdsPushPromptCancel() {
    showDebug && console.log("[PUSHNOTIFICATIONS] - Custom prompt cancelled."), document.getElementById("pushNotificationsPrompt").style.display = "none"
}

function _NeptuneAdsPushRemovePoweredBy() {
    var a = document.getElementById("pushNotificationsPoweredBy");
    "undefined" != typeof a && null != a && document.getElementById("pushNotificationsPoweredBy").remove()
}

function _NeptuneAdsPushShowPoweredBy() {
    return powered_browserinfo = _NeptuneAdsPushGetBrowserInfo(), powered_devicetype = _NeptuneAdsPushGetDeviceType(), "Safari" == powered_browserinfo.browser ? (powered_top = "160px", powered_left = "45%", !1) : "Chrome" == powered_browserinfo.browser && "desktop" == powered_devicetype ? (powered_top = "120px", powered_left = "210px", !1) : "Chrome" == powered_browserinfo.browser && "mobile" == powered_devicetype && (powered_top = "320px", powered_left = "60px", !1)
}

function _NeptuneAdsPushGetSubscriberID() {
    return new Promise(function(a, b) {
        uid = _NeptuneAdsPushGetCookie("_NeptuneAdsPushSubscriberID"), uid ? (_NeptuneAdsPushSubscriberID = uid, subscriberID_existed = !0, a(_NeptuneAdsPushSubscriberID)) : "granted" == _NeptuneAdsPushCheckPermissions() ? _NeptuneAdsPushGetPushToken().then(function(b) {
			b = b[0];
            return b ? void _NeptuneAdsPushGetSubscriberIDFromToken(b).then(function(c) {
                c.uid ? (uid = c.uid, subscriberID_existed = !0) : (uid = _NeptuneAdsPushGenerateID(), subscriberID_existed = !1, _at.attributes.push_token = b), _NeptuneAdsPushSubscriberID = uid, _NeptuneAdsPushSetCookie("_NeptuneAdsPushSubscriberID", uid, 100), a(uid)
            }) : (console.warn("[PUSHNOTIFICATIONS] - A Fatal Error Occured. Permission granted but no token found."), !1)
        }) : (uid = _NeptuneAdsPushGenerateID(), _NeptuneAdsPushSubscriberID = uid, _NeptuneAdsPushSetCookie("_NeptuneAdsPushSubscriberID", uid, 100), subscriberID_existed = !1, a(_NeptuneAdsPushSubscriberID))
    })
}

function _NeptuneAdsPushSendTrackData(a) {
    var b;
	console.log('LOADING (POST): ' + _NeptuneAdsPushAPI + "/track/" + ' DATA: ' + JSON.stringify(a));
    b = new XMLHttpRequest, postData = JSON.stringify(a), postURL = _NeptuneAdsPushAPI + "/track/", b.open("POST", postURL, !0), b.setRequestHeader("Content-Type", "application/json"), b.send(postData), showDebug && console.info("[PUSHNOTIFICATIONS] - Track Data Sent ")
}

function _NeptuneAdsPushGetSubscriberIDFromToken(a) {
    return new Promise(function(b, c) {
        showDebug && console.info("[PUSHNOTIFICATIONS] - Update SubscriberID From Token Ran ");
		console.log('LOADING: ' + _NeptuneAdsPushAPI + "/subscriber/token/" + a);
        var d = new XMLHttpRequest;
        d.onreadystatechange = function() {
            4 == d.readyState && (response = JSON.parse(d.responseText), b(response))
        }, d.open("GET", _NeptuneAdsPushAPI + "/subscriber/token/" + a, !0), d.send(null)
    })
}

function _NeptuneAdsPushGenerateID() {
    function a() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
}

function _NeptuneAdsPushGetCookie(a) {
    for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d];
            " " == e.charAt(0);) e = e.substring(1);
        if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
    }
    return ""
}

function _NeptuneAdsPushSetCookie(a, b, c) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
    var e = "expires=" + d.toUTCString();
    document.cookie = a + "=" + b + "; path=/ ;" + e
}

function _NeptuneAdsPushDeleteCookie(a) {
    document.cookie = a + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
}

function _NeptuneAdsPushTrackAttributes(a) {
    if (0 == _NeptuneAdsPushSupportsPush()) return !1;
    var b;	
    if (b = new XMLHttpRequest, postdata = a, postdata.idSite = _at.idSite, postdata.owner_uid = _at.owner, postdata = JSON.stringify(postdata), "undefined" != typeof Storage) {
        if (lastCall = sessionStorage.getItem("last_NeptuneAdsPushTrackAttributes"), lastCall == postdata) return showDebug && console.info("[PUSHNOTIFICATIONS] - No New Attributes To Track."), !1;
        sessionStorage.setItem("last_NeptuneAdsPushTrackAttributes", postdata)
    }
	console.log('LOADING (POST): ' + _NeptuneAdsPushAPI + "/subscriber/" + _at.subscriber + ' DATA: ' + postdata);
    b.open("POST", _NeptuneAdsPushAPI + "/subscriber/" + _at.subscriber, !0), b.setRequestHeader("Content-Type", "application/json"), b.send(postdata), showDebug && console.info("[PUSHNOTIFICATIONS] - Updated Subscriber Sent ")
}

function _NeptuneAdsPushOptInResponse(a) {
    _NeptuneAdsPushRemovePoweredBy();
    var b;	
    b = new XMLHttpRequest, postdata = a, postdata.idSite = _at.idSite, postdata.owner_uid = _at.owner, postdata = JSON.stringify(postdata), console.log('LOADING (POST): ' + _NeptuneAdsPushAPI + "/subscriber/" + _at.subscriber + "/optin" + ' DATA: ' + postData), b.open("POST", _NeptuneAdsPushAPI + "/subscriber/" + _at.subscriber + "/optin", !0), b.setRequestHeader("Content-Type", "application/json"), b.send(postdata), showDebug && console.info("[PUSHNOTIFICATIONS] - Optin Details Sent ")
}

function _NeptuneAdsPushPrompt() {
    var a = document.getElementById("pushNotificationsPrompt");
    "undefined" != typeof a && null != a ? (showDebug && console.info("[PUSHNOTIFICATIONS] - Showing Custom Prompt "), document.getElementById("pushNotificationsPrompt").style.display = "block") : (showDebug && console.info("[PUSHNOTIFICATIONS] - Loading Native Prompt "), _NeptuneAdsPushRunNative())
}

function _NeptuneAdsPushTrackEvent(a, b, c, d) {
    if (0 == _NeptuneAdsPushSupportsPush()) return !1;
    eventPostData = {}, eventPostData.eventCategory = a, eventPostData.eventAction = b, c && (eventPostData.eventLabel = c), d && (eventPostData.eventValue = d), eventPostData.idSite = _at.idSite, eventPostData.owner_uid = _at.owner, eventPostData = JSON.stringify(eventPostData);
    var e;
	console.log('LOADING (POST): ' + _NeptuneAdsPushAPI + "/subscriber/" + _at.subscriber + "/event" + ' DATA: ' + eventPostData);
    e = new XMLHttpRequest, e.open("POST", _NeptuneAdsPushAPI + "/subscriber/" + _at.subscriber + "/event", !0), e.setRequestHeader("Content-Type", "application/json"), e.send(eventPostData), showDebug && console.info("[PUSHNOTIFICATIONS] - Track Event Sent ")
}

function _NeptuneAdsPushAbandonedCart(a, b) {
    if (0 == _NeptuneAdsPushSupportsPush()) return !1;
    if (null == a) return !1;
    abandonedCartData = {}, abandonedCartData.type = a, b && (abandonedCartData.delay = b), abandonedCartData.idSite = _at.idSite, abandonedCartData.owner_uid = _at.owner, abandonedCartData = JSON.stringify(abandonedCartData);
    var c;
	console.log('LOADING (POST): ' + _NeptuneAdsPushAPI + "/subscriber/" + _at.subscriber + "/cart" + ' DATA: ' + abandonedCartData);
    c = new XMLHttpRequest, c.open("POST", _NeptuneAdsPushAPI + "/subscriber/" + _at.subscriber + "/cart", !0), c.setRequestHeader("Content-Type", "application/json"), c.send(abandonedCartData), showDebug && console.info("[PUSHNOTIFICATIONS] - Abandoned Cart Data Sent ")
}

function _NeptuneAdsPushGetPushToken() {
    return new Promise(function(a, b) {
        0 == _NeptuneAdsPushSupportsPush() && (_NeptuneAdsPushPushToken = null, a([_NeptuneAdsPushPushToken, null])), "safari" in window && "pushNotification" in window.safari && (_NeptuneAdsPushPushToken = window.safari.pushNotification.permission(_at.webpushid).deviceToken, a([_NeptuneAdsPushPushToken, null])), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(b) {
            b.pushManager.getSubscription().then(function(b) {
                b ? (_NeptuneAdsPushPushToken = _NeptuneAdsPushExtractSubscriptionId(b.endpoint), a([_NeptuneAdsPushPushToken, b])) : "granted" == _NeptuneAdsPushCheckPermissions() ? navigator.serviceWorker.ready.then(function(b) {
                    b.pushManager.subscribe({
                        userVisibleOnly: !0,
						applicationServerKey: urlBase64ToUint8Array('BNBQgRSJ6UwJpilXrO56QHXHuIb6btefAduu2oGlUkz0jQNVmwyEwZhzeGH--NEFscRI6IXu_gBQSkORieD40ac')
                    }).then(function(b) {
						console.log(JSON.stringify(b));
                        _NeptuneAdsPushPushToken = _NeptuneAdsPushExtractSubscriptionId(b.endpoint), a([_NeptuneAdsPushPushToken, b])
                    })
                }) : (_NeptuneAdsPushPushToken = null, a([_NeptuneAdsPushPushToken, null]))
            })
        })
    })
}

function _NeptuneAdsPushSupportsPush() {
    var a = !1;
    return "safari" in window && "pushNotification" in window.safari && (a = !0), "serviceWorker" in navigator && (a = !0, "showNotification" in ServiceWorkerRegistration.prototype || (a = !1), "PushManager" in window || (a = !1), 0 == _NeptuneAdsPushCheckHTTPS() && (a = !1)), "Promise" in window || (a = !1), a
}

function _NeptuneAdsPushCheckHTTPS() {
    var a = !1,
        b = window.location.protocol;
    return "https:" == b && (a = !0), a
}

function _NeptuneAdsPushCheckPermissions() {
    return "safari" in window && "pushNotification" in window.safari ? window.safari.pushNotification.permission(_at.webpushid).permission : "Notification" in window && "permission" in window.Notification ? Notification.permission : void 0
}

function _NeptuneAdsPushRunNative() {
    if (0 == _NeptuneAdsPushSupportsPush()) return showDebug && console.log("[PUSHNOTIFICATIONS] Browser doesn't support push"), !1;
    if ("safari" in window && "pushNotification" in window.safari) {
        var a = window.safari.pushNotification.permission(_at.webpushid);
        return showDebug && console.log(a), _NeptuneAdsPushSafariRun(a), !1
    }
    "serviceWorker" in navigator ? _NeptuneAdsPushChromeRun() : console.warn("Service workers aren't supported in this browser.")
}

function _NeptuneAdsPushSafariRun(a) {
    "default" === a.permission ? (_NeptuneAdsPushShowPoweredBy(), showDebug && console.log("User Requested Permissions"), window.safari.pushNotification.requestPermission(_NeptuneAdsPushAPI + "/site/" + domain, _at.webpushid, {}, _NeptuneAdsPushSafariRun)) : "denied" === a.permission ? (showDebug && console.log("User Denied Permissions"), _at.prompt.action = "denied", _NeptuneAdsPushOptInResponse(_at.prompt), "undefined" != typeof _NeptuneAdsPushPermissionDenied && _NeptuneAdsPushPermissionDenied()) : "granted" === a.permission && (deviceToken = a.deviceToken, _at.attributes.push_token = deviceToken, showDebug && (console.log("User Granted Permissions"), console.log("deviceToken: " + deviceToken)), _at.prompt.action = "granted", _NeptuneAdsPushOptInResponse(_at.prompt), _NeptuneAdsPushTrackAttributes(_at.attributes), _NeptuneAdsPushSendTrackData(trackData), "undefined" != typeof _NeptuneAdsPushPermissionGranted && _NeptuneAdsPushPermissionGranted())
}

function _NeptuneAdsPushChromeRun() {
    showDebug && console.log("[PUSHNOTIFICATIONS] - Running function: _NeptuneAdsPushChromeRun"), navigator.serviceWorker.ready.then(function(a) {
        a.pushManager.getSubscription().then(function(a) {
			showDebug && console.log("[PUSHNOTIFICATIONS] - getSubscription() - a: " + a);
            return a ? void _NeptuneAdsPushSendSubscriptionToServer(a) : void _NeptuneAdsPushSubscribe()
        }).catch(function(a) {
            console.warn("Error during getSubscription()", a)
        })
    })
}

function _NeptuneAdsPushSubscribe() {
	showDebug && console.log("[PUSHNOTIFICATIONS] - _NeptuneAdsPushSubscribe()");
    _NeptuneAdsPushShowPoweredBy(), navigator.serviceWorker.ready.then(function(a) {
        a.pushManager.subscribe({
            userVisibleOnly: !0,
			applicationServerKey: urlBase64ToUint8Array('BNBQgRSJ6UwJpilXrO56QHXHuIb6btefAduu2oGlUkz0jQNVmwyEwZhzeGH--NEFscRI6IXu_gBQSkORieD40ac')
        }).then(function(a) {
            return showDebug && console.log("[PUSHNOTIFICATIONS] - Chrome subscription successful"), "undefined" != typeof _NeptuneAdsPushPermissionGranted && _NeptuneAdsPushPermissionGranted(), _NeptuneAdsPushSendSubscriptionToServer(a)
        }).catch(function(a) {
            "denied" === Notification.permission ? (showDebug && console.log("[PUSHNOTIFICATIONS] - Chrome permission denied"), _at.prompt.action = "denied", _NeptuneAdsPushOptInResponse(_at.prompt), "undefined" != typeof _NeptuneAdsPushPermissionDenied && _NeptuneAdsPushPermissionDenied()) : (console.log("Unable to subscribe to push.", a), "undefined" != typeof _NeptuneAdsPushPermissionDenied && _NeptuneAdsPushPermissionDenied(), _NeptuneAdsPushRemovePoweredBy())
        })
    })
}

function _NeptuneAdsPushExtractSubscriptionId(a) {
    return endpointParts = a.toString().split("/"), SubscriptionId = endpointParts[endpointParts.length - 1], SubscriptionId
}

function _NeptuneAdsPushSendSubscriptionToServer(a) {
    endpoint = a.endpoint, subscriptionId = _NeptuneAdsPushExtractSubscriptionId(endpoint), showDebug && console.log("[PUSHNOTIFICATIONS] New Subscriber ID: " + subscriptionId), _NeptuneAdsPushRegisterWorker(), _at.attributes.push_token = subscriptionId, _at.attributes.subscription = a, "granted" == _NeptuneAdsPushCheckPermissions() && (_NeptuneAdsPushTrackAttributes(_at.attributes), _NeptuneAdsPushSendTrackData(trackData), _at.prompt.action = "granted", _NeptuneAdsPushOptInResponse(_at.prompt))
}

function _NeptuneAdsPushRegisterWorker() {
    _NeptuneAdsPushSendWorkerMessage({
        command: "register",
        uid: _NeptuneAdsPushSubscriberID
    }).then(function(a) {
        showDebug && console.log("[PUSHNOTIFICATIONS] - service worker registered successfully.")
    }).catch(_NeptuneAdsPushConsoleOutput)
}

function _NeptuneAdsPushFetchSubscriberIDFromWorker() {
    _NeptuneAdsPushSendWorkerMessage({
        command: "fetchID"
    }).then(function(a) {}).catch(_NeptuneAdsPushConsoleOutput)
}

function _NeptuneAdsPushConsoleOutput(a) {
    showDebug && console.log("[PUSHNOTIFICATIONS] " + a)
}

function _NeptuneAdsPushSendWorkerMessage(a) {
    return new Promise(function(b, c) {
        var d = new MessageChannel;
        d.port1.onmessage = function(a) {
            a.data.error ? c(a.data.error) : b(a.data)
        }, navigator.serviceWorker.controller.postMessage(a, [d.port2])
    })
}

function _NeptuneAdsPushLoad() {
    return new Promise(function(a, b) {
				"serviceWorker" in navigator && navigator.serviceWorker.register(_at.worker,{scope:"/"}), _NeptuneAdsPushGetSubscriberID().then(function(b) {
            if (_NeptuneAdsPushSubscriberID = b, _NeptuneAdsPushConsoleOutput(subscriberID_existed ? " - Existing SubscriberID: " + _NeptuneAdsPushSubscriberID : " - New SubscriberID: " + _NeptuneAdsPushSubscriberID), _at.prompt = {}, _at.subscriber = _NeptuneAdsPushSubscriberID, trackData = {}, trackData.idSite = _at.idSite, trackData.visitor_subscriber_uid = _at.subscriber, trackData.visitor_localtime = new Date, trackData.device_type = _NeptuneAdsPushGetDeviceType(), trackData.device_resolution = _NeptuneAdsPushGetResolution(), browserInfo = _NeptuneAdsPushGetBrowserInfo(), trackData.browser_name = browserInfo.browser, trackData.browser_version = browserInfo.version, systemInfo = _NeptuneAdsPushGetSystemInfo(), trackData.device_os = systemInfo.os, trackData.device_os_version = systemInfo.osVersion, referrer = _NeptuneAdsPushGetReferrer(), trackData.referrer_url = referrer.refUrl, trackData.referrer_name = referrer.refName, trackData.browser_lang = _NeptuneAdsPushGetLanguage(), pageDetails = _NeptuneAdsPushGetPageDetails(), trackData.page_title = pageDetails.pageTitle, trackData.page_url = pageDetails.pageURL, getUrlVars().at_action) {
                var c = getUrlVars().at_category,
                    d = getUrlVars().at_action,
                    e = getUrlVars().at_label,
                    f = getUrlVars().at_value;
                _NeptuneAdsPushTrackEvent(c, d, e, f)
            }
            a()
        })
		    })
}
var domain = _at.domain,
    owner = _at.owner,
    idSite = _at.idSite,
    showDebug = false,
    subscriberID_existed = !0,
    _NeptuneAdsPushPushToken, _NeptuneAdsPushSubscriberID, _NeptuneAdsPushCallResponse, trackData, currentPage = window.location.href,
	_NeptuneAdsPushAPI = "https://pushlite.neptuneadspush.com",
    _NeptuneAdsPushRanScript;
"undefined" == typeof _at.webpushid && (_at.webpushid = "web.neptuneads.com"), "undefined" == typeof _at.manifest && (_at.manifest = window.location.origin + "/pushf/manifest.json"), "undefined" == typeof _at.worker && (_at.worker = window.location.origin + "/pushf/service_worker.js?v=1.0.221"), "b538080f127a" != _at.owner && "c7d1a79e82b9" != _at.owner || (_at.manifest = window.location.origin + "/pushf/manifest.json"), 1 == _at.debug && (showDebug = !0), console.log("Push notifications powered by NeptuneAds. Learn more at neptuneads.com"), _NeptuneAdsPushDeferred.prototype = {
    execute: function(a, b) {
        var c = a.length;
        for (b = Array.prototype.slice.call(b); c--;) a[c].apply(null, b)
    },
    resolve: function() {
        this.execute(this._done, arguments)
    },
    reject: function() {
        this.execute(this._fail, arguments)
    },
    done: function(a) {
        this._done.push(a)
    },
    fail: function(a) {
        this._fail.push(a)
    }
};
var webURL = getUrlVars().atlink;
if (webURL) {
    var logid = getUrlVars().logid;
    redirectlink = _NeptuneAdsPushAPI + "/redirect/?link=" + webURL + "&logid=" + logid, window.location = redirectlink
}! function() {
    if ("undefined" != typeof _NeptuneAdsPushRanScript) return console.log("[PUSHNOTIFICATIONS] Script loaded twice."), !1;
    if (_NeptuneAdsPushRanScript = !0, 0 == _NeptuneAdsPushSupportsPush()) return console.warn("[PUSHNOTIFICATIONS] - Browser does not support push"), "undefined" != typeof _NeptuneAdsPushPushSupported && _NeptuneAdsPushPushSupported(!1), !1;
    "undefined" != typeof _NeptuneAdsPushPushSupported && _NeptuneAdsPushPushSupported(!0);
    var a = document.createElement("link");
    return a.rel = "manifest", a.href = _at.manifest, document.head.appendChild(a), _at.demo ? (console.log("[PUSHNOTIFICATIONS] - Demo loaded. You must load and initialize manually."), !1) : void _NeptuneAdsPushLoad().then(function(a) {
        _NeptuneAdsPushInitialize(_at.idSite), setTimeout(function() {
            "undefined" != typeof _NeptuneAdsPushReady && _NeptuneAdsPushReady(), "undefined" != typeof _NeptuneAdsPushShopifyReady && _NeptuneAdsPushShopifyReady()
        }, 1500)
    }).catch(function(a) {
        console.warn("[PUSHNOTIFICATIONS] - " + a)
    })
}();