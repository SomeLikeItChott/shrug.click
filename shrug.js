let shrug = document.getElementById('shrug')

function successAnimation() {
    shrug.innerHTML = 'copied!'
    shrug.classList.add('animation')
    let success = document.getElementById('success')
    setTimeout(function() {
        shrug.innerHTML = '¯\\_(ツ)_/¯'
        shrug.classList.remove('animation')
    },
    500)
}

shrug.onclick = () => {
    // Copy the text inside the text field
    navigator.clipboard
        .writeText('¯\\_(ツ)_/¯')
        .then(() => {successAnimation()})
        .catch((e) => {consoler.log(e)});
}

fitText(document.getElementById('shrug'), 0.6)

//https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
function is_touch_device4() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function(query) {
        return window.matchMedia(query).matches;
    }
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }
    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

if(is_touch_device4()) {
    let actionTextElement = document.getElementById('actionText')
    actionTextElement.innerHTML = 'Tap'
} else {
    let bookmarkletWrapper = document.getElementById('bookmarklet-wrapper')
    bookmarkletWrapper.style.display = 'block'
}