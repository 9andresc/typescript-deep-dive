// Types can be ambient

declare var $: {
  (selector: string): any;
};

$('.awesome').show(); // Okay
$(123).show(); // Argument of type '123' is not assignable to parameter of type 'string'
