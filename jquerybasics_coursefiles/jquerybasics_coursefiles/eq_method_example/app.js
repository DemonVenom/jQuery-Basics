// Selects index one (second sibling, array rules apply)
// $('li').eq(1).css({color: 'green'});

// Selects second to last sibling
// $('li').eq(-2).css({color: 'green'});

// Selects index previous to one (index zero)
// $('li').eq(1).prev().css({color: 'green'});

// Selects index next to one (index two)
// $('li').eq(1).next().css({color: 'green'});

// Selects index next, then next to one (index four - non existent, no color change)
$('li').eq(1).next().next().css({color: 'green'});