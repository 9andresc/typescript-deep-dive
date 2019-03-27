// Template strings

// Instead of this
var lyrics = 'Never gonna give you up';
var html = '<div>' + lyrics + '</div>';

// Write this
var html = `<div>${lyrics}</div>`;

// Multiline strings

// Instead of this
var lyrics = 'Never gonna give you up \
\nNever gonna let you down';

// Write this
var lyrics = `Never gonna give you up
Never gonna let you down`;
