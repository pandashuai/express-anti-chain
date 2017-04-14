var path = require('path');
var url = require('url');
module.exports = {
    fn_exts: function(url, exts) {
        var ext = path.extname(url).replace(/\?.*$/, '');
        for (var i = 0, el;
            (el = exts[i]), el != null; i++) {
            if (ext === el) {
                return ext;
            }
        }
        return false;
    },
    fn_ignore: function(ref, strict, ignoreArr) {
        if (!ref) {
            if (strict) {
                return false;
            } else {
                return true;
            }
        }
        var host = url.parse(ref).host;
        for (var i = 0, ignore;
            (ignore = ignoreArr[i]), ignore != null; i++) {
            if (ignore.indexOf('*') != '-1') {
                var exs = ignore.replace(/\*/g, '');
                if (host.indexOf(exs) != '-1') {
                    return true;
                }
            } else {
                if (host === ignore) {
                    return true;
                }
            }

        }
        return false;
    },
    fn_def: function(url, exs, def, additional, res) {
        if (typeof(def) === 'string') {
            if (url == def) {
                return false;
            }
            if (def) {
                res.redirect(def);
            } else {
                res.send('');
            }
            return true;
        } else if (typeof(def) === 'object') {
            if (def.images && additional.indexOf(exs) != '-1') {
                if (url == def.images) {
                    return false;
                }
                if (def.images) {
                    res.redirect(def.images);
                } else {
                    res.send('');
                }
                return true;
            }
            exs = exs.replace(/^\./, '');
            if (url == def[exs]) {
                return false;
            }
            if (def[exs]) {
                res.redirect(def[exs]);
            } else {
                res.send('');
            }
            return true;
        }
    },
    fn_log: function(referer, log, req) {
        if (!log) {
            return false;
        }
        var url = req.url;
        if (log == console.log) {
            log('request :' + url + ' from ' + referer + ' was blocked');
        } else {
            log(url, referer, req);
        }
    }
}
