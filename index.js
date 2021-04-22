// updated class name to superhuman
module.exports = Franz => class superhuman extends Franz { overrideUserAgent() { return "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136"; } };

// try the whole string from the issue example? class name kept it from showing up as selectable
// module.exports = Franz => class useragent extends Franz { overrideUserAgent() { return "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136"; } };

// tried shortening to just Chrome lol - didn't work
// module.exports = Franz => class superhuman extends Franz { overrideUserAgent() {return "Chrome"; } };

// just pass through Franz - doesn't work
//module.exports = Franz => Franz;
