require('./ActionButton').init();

var Ras = require('./Ras');

exports.main = function(options) {

	if (options.loadReason == 'install') {

		Ras.onInstall();
	}

	//handle upgrades version number must increase to have an effect
	else if (options.loadReason == 'upgrade') {

		Ras.onUpgrade();
	}

	Ras.init();
};

exports.onUnload = function (reason) {

	Ras.onUnload(reason);
};
