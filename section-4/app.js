/**
 * Return an array of string element
 * 1st element is the path of node location where it's installed
 * 2nd element is the file path (if it run using node)
 * can provide arguments followed by file name and they will push into the array
 * if there is need to get arguments provided from the terminal
 * use slice(2) method : console.log(process.argv.slice(2));
 */
console.log(process.argv.slice(2));
