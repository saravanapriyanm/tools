const repl = require("repl");
const msg = "Hello world";

const r = repl.start('~~~~~~~~~~~~~~~~~~~~\n> ');

// Some custom functions I am using. Replace with your own.. 

// pa(percentage, amount) for percentage + amount
Object.defineProperty(r.context, 'pa', {
  configurable: false,
  enumerable: true,
  value: function(p,a){
			return a + a/100*p
		}
});

// p(percentage, amount) for percentage
r.context.p = (p,a) => a/100*p

// m for 'Hello world'
r.context.m = msg;