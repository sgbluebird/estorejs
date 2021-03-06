var MailProvider = require('../../../mail/MailProvider');

/**
 *
 *  Usage:
 *
 *  Once this extension is installed, it will listen for a 'SEND_EMAIL' event Once
 *  the store bus. Requires the MANDRIL_API_KEY.
 *
 */
module.exports = {

	type: 'service',
	name: 'Mandrill Email Support',
	event: 'OUTBOUND_MAIL',
	/**
	 *
	 *  @param {Object} mail The mail Object.
	 *  @param {EStore} store
	 *
	 */
	action: function(mail, store) {

		MailProvider.
		mandrill(store.keystone.get('emails'), store.keystone).
		send(mail).
		then(null, function(err) {
			console.log(err);
		}).
		done();

	}


};
