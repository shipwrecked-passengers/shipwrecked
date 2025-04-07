import { topics } from '../topics/topics.js';
import { questions } from '../topics/questions.js';

let topicBaseArray = [...topics]; // Access the array inside the object

const chooseTopicBase = (id = 'topics') => {
  topicBaseArray = id === 'questions' ? [...questions] : [...topics];
};

const toggleRadioPanel = () => {
  const container = document.getElementById('radioWrap');
  container?.classList.toggle('expanded');
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const pullAPopsicleStick = (popsicleSticks) => {
  const message = document.getElementById('message');
  const pullButton = document.getElementById('pull');

  if (!popsicleSticks.length) {
    pullButton.innerText = 'Shuffle';
    message.innerText = 'No more topics - shuffling!';
    setTimeout(() => {
      location.reload();
    }, 500);
    return;
  }

  const index = Math.floor(Math.random() * popsicleSticks.length);
  const [topic] = popsicleSticks.splice(index, 1);
  message.innerText = topic;
};

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[name="radioWrap"]');
  const radioButtons = form?.querySelectorAll('input[name="topicGroup"]') || [];

  radioButtons.forEach((radio) => {
    radio.addEventListener('change', (e) => {
      document.getElementById('message').innerText = '';
      chooseTopicBase(e.target.id);
    });
  });

  // Initialize topicBaseArray based on initially checked radio
  const checkedRadio = form?.querySelector('input[name="topicGroup"]:checked');
  if (checkedRadio) chooseTopicBase(checkedRadio.id);

  document.getElementById('pull')?.addEventListener('click', () => {
    pullAPopsicleStick(topicBaseArray);
  });

  document.getElementById('toggleRadios')?.addEventListener('click', toggleRadioPanel);
});
