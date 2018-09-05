var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;

    if (customName.value !== '') {
        var name = customName.value;

        newStory = newStory.replace('Bob', name);

    }

    if (document.getElementById("uk").checked) {
        var weight = Math.floor(Math.round(300) * 0.071428571428571) + ' stone';
        var temperature = Math.floor((Math.round(94) - 32) * 5 / 9) + ' centigrade';

        newStory = newStory.replace('94 fahrenheit', temperature).replace('300 pounds', weight);

    }


    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem).replace(':insertx:', xItem);

    story.textContent = newStory;
    story.style.visibility = 'visible';
}