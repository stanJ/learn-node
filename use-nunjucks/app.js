const nunjucks = require('nunjucks');
function createEnv(path, opts){
	var 
		autoescape = opts.autoescape || true,
		noCache = opts.noCache || false,
		watch = opts.watch || false,
		throwOnUndefined = opts.throwOnUndefined || false,
		env = new nunjucks.Environment(
			new nunjucks.FileSystemLoader(path || 'views', {
				noCache: noCache,
				watch: watch,
			}), {
				autoescape: autoescape,
				throwOnUndefined: throwOnUndefined
			}
		)
	if(opts.filters){
		for(var f in opts.filters){
			env.addFilter(f, opts.filters[f]);
		}
	}
	return env;
}
var env = createEnv('views', {
	watch: true,
	noCache: false,
	filters: {
		hex: function(n){
			return '0x' + n.toString(16);
		}
	}
})

//var s = env.render('hello.html', {
//	name: '<script>alert("小明")</script>'
//})
//console.log(s)

//var s1 = env.render('fruits.html', {
//	fruits: ['apple', 'banana',	'peach']
//})
//console.log(s1)

var s2 = env.render('extend.html', {
	header: 'Hello',
	body: 'bla bla bla...'
})
console.log(s2)