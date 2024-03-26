/**
 * HTML syntax definition file for wijit-code web component
 *
 *  @author Holmes Bryant <https://github.com/HolmesBryant>
 *  @license GPL-3.0
 *
 */
export default {
	property: /[\w\d-]+\s*:(?!\s*\w+\s*{|:)/g,
	function: /[\w-]+\([^)]*\)/g,
	argument: /(?<=\()[^)]+/g,
	keyword: null,
	number: /(?<!\w)[+-]?\d+[\b\.\w]*/g,
	operator: /=/g,
	tag: /<\/?[\w-]+|(?<=[\w"])>/g,
	string: /["'`][^"'`]*["'`]/g,
	variable: /\$\s*{[^}]+}/g,
	comment: /<!--([\s\S]*?)-->/g,
	// selector: /[:\w\d-]+\s*(?={)/g
}

