var argv = require('yargs').argv;
var command = argv._[0];

console.log(argv);
var result = "hello";
if (command === 'hello') {
	if (typeof argv.name !== 'undefined'){
		result = result + argv.name;
	}
	if (typeof argv.city !== 'undefined'){
		result = result + argv.city;
	}
	if (typeof argv.country !== 'undefined'){
		result = result + argv.country;
	}
	console.log(result);
}
else if (command === 'hello') {
	console.log('Hello world!');
}
