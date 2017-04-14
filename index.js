var config = require('./lib/default');
var logic = require('./lib/logic');
module.exports = function(opt) {
    opt = Object.assign(config, opt);
    return function(req, res, next) {
    	if (req.method  === 'POST') return next();
    	var url = req.url;
    	var referer = req.headers.referer;
    	var exs = logic.fn_exts(url, opt.exts);
    	if( !!exs ){
    		if( !logic.fn_ignore(referer, opt.strict, opt.ignore) ){
    			if( logic.fn_def(url, exs, opt.default, opt.additional, res) ){
                    return logic.fn_log(referer, opt.log, req);
    			}
    		}
    	}
        next();
    }
}
