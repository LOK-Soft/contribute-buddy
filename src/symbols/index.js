const chalk = require('chalk');
const leftPad = require('left-pad');

const symbols = {
	default: {
		title: text => chalk.blue.bgWhite.bold(text),
		titleStopped: text => chalk.red.bgWhite.bold(text),
		msg: text => text,
		error: text => chalk.red(text),
		titleSpace: chalk.bgWhite(' '),
		topLeft: chalk.white('┌'),
		topRight: chalk.white('┐'),
		content: chalk.white('│'),
		separatorTop: chalk.white('─'),
		separatorBottom: chalk.white('─'),
		bottomLeft: chalk.white('└'),
		bottomRight: chalk.white('┘'),
	},
	code: {
		title: text => chalk.white.bgBlackBright.bold(text),
		titleStopped: text => chalk.red.bgBlackBright.bold(text),
		msg: text => chalk.black.bgWhite(text),
		error: text => chalk.red.bgWhite(text),
		titleSpace: chalk.bgBlackBright(' '),
		topLeft: ` ${chalk.bgBlackBright(' ')}`,
		topRight: `${chalk.bgBlackBright(' ')} `,
		contentLeft: num => {
			let numOut;
			if (!num || num < 1) {
				numOut = '   ';
			} else {
				numOut = leftPad(num, 3, 0)
					.replace(/^00/, '  ')
					.replace(/^0/, ' ');
			}
			return ` ${chalk.gray.bgWhite(` ${numOut} │`)}`;
		},
		contentRight: `${chalk.bgWhite(' ')} `,
		separatorTop: chalk.bgBlackBright(' '),
		separatorBottom: chalk.bgWhite(' '),
		bottomLeft: ` ${chalk.gray.bgWhite('     │')}`,
		bottomRight: `${chalk.bgWhite(' ')} `,
	},
};

module.exports = symbols;