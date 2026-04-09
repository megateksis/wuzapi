var $themeElements = [
	{ name: 'lists', target: $('.ui.list').not('.inverted') },
	{ name: 'dividers', target: $('.ui.divider').not('.inverted') },
	{ name: 'dividingHeaders', target: $('.ui.dividing.header').not('.inverted') },
	{ name: 'iconHeaders', target: $('.ui.icon.header').not('.inverted') },
	{ name: 'icons', target: $('.icon').not('.inverted') },
	{ name: 'headers', target: $('.ui.header').not('.inverted') },
	{ name: 'forms', target: $('.ui.form').not('.inverted') },
	// { name: 'tooltippedIcons', target: $('.tooltipped.icon') },
	{ name: 'cardsContainer', target: $('.ui.cards') },
	{ name: 'cards', target: $('.ui.card') },
	{ name: 'dropdowns', target: $('.ui.dropdown') },
	{ name: 'fixedMenu', target: $('.ui.top.fixed.menu') },
	{ name: 'breadcrumb', target: $('.ui.breadcrumb') },
	{ name: 'accordions', target: $('.ui.accordion').not('.styled').not('.inverted') },
	{ name: 'tables', target: $('.ui.table') },
	{ name: 'modals', target: $('.ui.modal').not('.inverted') },
	{ name: 'segments', target: $('.ui.segment').not('.inverted') },
	{ name: 'placeholders', target: $('.ui.placeholder') }
];
var $themeValue = $('#theme-value');
var $darkThemeButton = $('div.right.menu div#dark-theme');
var $lightThemeButton = $('div.right.menu div#light-theme');

// Function to apply or remove 'inverted' class
function applyTheme(isDark) {
    $themeElements.forEach(function(element) {
        if (isDark) {
            element.target.addClass('inverted');
        } else {
            element.target.removeClass('inverted');
        }
    });
    // Handle specific elements that need different treatment
    $('.ui.fixed.menu.menu-header').toggleClass('inverted', isDark);
    $('.ui.container.fluid.p1').toggleClass('inverted', isDark);
    $('.ui.segment').toggleClass('inverted', isDark);
    $('.ui.modal').toggleClass('inverted', isDark);
    $('body').toggleClass('dark-theme', isDark); // Add a class to the body for global dark theme styles
}

// Initialize theme based on system preference or saved setting
$(document).ready(function() {
    var isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (savedTheme === null && isSystemDark)) {
        $('#dark-theme-toggle').prop('checked', true);
        applyTheme(true);
    } else {
        $('#dark-theme-toggle').prop('checked', false);
        applyTheme(false);
    }

    // Toggle theme on button click
    $('#dark-theme-toggle').change(function() {
        var isDark = $(this).is(':checked');
        applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});
