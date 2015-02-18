/*!
 * util-identifier
 *
 * @version 1.0.0
 * @author Simon Elvery <elvery.simon@abc.net.au>
 */

module.exports = function(identity) {
	return function(section, state, prefix) {
		return ((prefix)?prefix:'') + 
			identity + 
			((section)?'-'+section:'') + 
			((state)?'--'+state:'');
	};
};