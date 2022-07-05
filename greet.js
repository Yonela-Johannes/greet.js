
import chalk from 'chalk'

export const greet = (name) => 'Hello' + ' ' + name

export let message = greet('Xola')
export let styledMessage = chalk.bgGreen.black(greet('Xola'))

