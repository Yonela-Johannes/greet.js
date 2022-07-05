import { greet } from './nodeModules.js'
import chalk from 'chalk'
import figlet from 'figlet'

console.log(chalk.bgRed(figlet.textSync(greet('Xola'))))
console.log(chalk.bgMagenta(figlet.textSync(greet('Xola'))))
console.log(chalk.bgCyan(figlet.textSync(greet('Xola'))))