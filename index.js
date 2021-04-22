// use chrome to load
module.exports = Franz => class superhuman extends Franz { overrideUserAgent() {return "Chrome"; } };

// just pass through Franz
//module.exports = Franz => Franz;
