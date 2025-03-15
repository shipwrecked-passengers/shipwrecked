import {originalSticks} from '../topics/original.js';
import {enhancedSticks} from '../topics/enhanced.js';
import {weeklyApplication} from '../topics/weekly.js';



let topicBaseArr = weeklyApplication;
const chooseTopicBase = (newBase="originalSticks") => {
    switch (newBase) {
        case "Original Sticks":
            topicBaseArr=originalSticks;
            break;
        case "Enhanced Sticks":
            topicBaseArr=enhancedSticks;
            break;
        default:
            topicBaseArr=weeklyApplication;
    }
};

const toggleRadioPanel = () => {
    const container = document.getElementById('radioWrap');
    container.classList.toggle('expanded');
}

window.onload = function() {
    const form = document.radioWrap;
    const radioArr = form?.querySelectorAll('input[name="topicGroup"]');
    let prev = null;

    if (radioArr.length) {
        for (var i = 0; i < radioArr.length; i++) {
            radioArr[i].addEventListener('change', function() {
                document.getElementById('message').innerText = "";
                chooseTopicBase(this.value);
            });
        }
    }

    const newTopicButton = document.getElementById('pull');
    newTopicButton.addEventListener('click', function(e) {
        pullAPopsicleStick(topicBaseArr);
    });

    const radioToggle = document.getElementById('toggleRadios');
    radioToggle.addEventListener('click', function(e) {
        toggleRadioPanel();
    })
};

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
};

function pullAPopsicleStick (popsicleSticks) {
    const message = document.getElementById('message');
    const allOut = document.getElementById('allOut');
    const shuffle = document.getElementById('shuffle');
    const pull = document.getElementById('pull');
    const index = Math.floor(Math.random() * popsicleSticks.length);
    const topic = popsicleSticks.splice(index, 1);

    if (topic.length === 0) {
        pull.innerText = "Shuffle";
        message.innerText = 'No more topics - shuffling!';
        
        setTimeout(function(){location = ''}, 500);
    }
    else {
        message.innerText = topic;
    }
}
