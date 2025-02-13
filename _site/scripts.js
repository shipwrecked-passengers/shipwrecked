const weeklyApplication = [
	"Share what you're looking forward to about a random step (or your favorite part of one you've already finished)",
	"Is every area of your life manageable? How did you, or didn't you, practice step 1 today?",
	"What are you currently working on (or resisting) giving to your HP?",
	"In what ways were you, or could you be, further 'restored to sanity' this week?",
	"In what ways did you (or did you not) turn your will & life over to your HP today?",
	"Where did you see your HP show up today/this week?",
	"Are there any recent resentments or fears in which you struggle to see your part? How do you handle that?",
	"This week, how did you (or could you) practice taking a 'fearless moral inventory'?",
	"In what ways has your sponsor or another member of the fellowship helped you this week?",
	"Are there any 'defects' of character you're not yet ready, or took longer to become ready, to have HP remove?",
	"How did you (or will you) practice humbly asking HP to remove your shortcomings this week?",
	"Which of the 9th step promises showed up most for you this week?",
	"How often do you 'continue to take personal inventory'? What is your process?",
	"What did your practice of prayer & meditation look like this week? (We are not saints - how could it improve?)",
	"This week, how has HP given you the 'knowledge of HP's will for us and the power to carry it out'?",
	"How did you work your program in your daily life this week?",
	"Fears are big & small - how have you found courage despite fear recently?",
	"It requires no willingness to do something we WANT to do... in what area(s) have you practiced the most willingness this week?",
	"In what ways did you, or could you, avoid isolation & encourage true connection this week?",
	"Where were you able to practice 'easy does it' this week? Where might you practice it this coming week?",
	"How does your biggest worry today compare to your biggest worry from last week? month? 5 years ago?",
	"What's one character *asset* of yours that showed up this week, and how?",
	"What big or small moment brought you the most serenity this week?",
	"If someone else struggled with your biggest worry, what could you say that might reframe it, and/or inspire hope?",
	"In what ways did you try to control things this week? How did you practice letting go of control?",
	"What can you appreciate most... about the person or situation you liked the least this week?",
	"In what ways did 'esteemable acts' (big or small) help your self esteem this week?",
	"How did you practice 'first things first' this week?",
	"What does it mean to 'meet crisis with serenity'? How have you, or might you, do this with a recent 'crisis' (big or small)?",
	"How did you, or could you, practice contrary action this week?", 
	"How have you been recently reminded you are not the Ultimate Authority?",
	// "How did you, or could you, practice being 'fully self supporting' (regardless of finances) this week?",
	"Where did you, or could you, practice 'Rule 62' this week (not take yourself too damn seriously)? ",
	"Where did you practice acceptance this week? Where was acceptance more challenging?",
];

const originalSticks = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
    'Step 5',
    'Step 6',
    'Step 7',
    'Step 8',
    'Step 9',
    'Step 10',
    'Step 11',
    'Step 12',
    'Fear',
    'Warped Lives',
    'The Promises', 
    'Guidance',
    'Service Work',
    'Easier, Softer Way',
    'Isolating',
    'Easy Does It',
    'Faith',
    'Drop The Rock',
    'Wreckage of Past',
    'Financial Amends',
    'God',
    'Honesty',
    'Humility',
    'The New Comer',
    'Desperation',
    'Helping Others',
    'Bargaining',
    'There is a Solution',
    'Serenity',
    'Going to Any Length',
    'Willingness',
    'Lack of Control',
    'Your First 30 Days',
    'Confrontation',
    'Peace',
    'Sponsorship',
    'Self Pity',
    'Hopelessness',
    'Fellowship',
    'Courage',
    'Living Sober',
    'Spiritual Growth',
    'Attraction not Promotion',
    'Higher Power',
    'Meditation',
    'Healing Families',
    'Working Program at Home',
    'Judgemental',
    'Gods Will',
    'Love',
    'Sanity',
    'Bitterness',
    'Demoralization',
    'Trusted Servants',
    'Truth',
    'Recovery',
    'Half Measures',
    'Hope',
    'Resentments',
    'Spiritual Progress',
    'Living Amends',
    'Patience',
    'Anger',
    'One Day at a Time',
    'Economic Insecurity',
    'Rigorous Honesty',
    'Jealousy',
    'Family Disease',
    'Self-Seeking',
    'Gratitude',
    'Joyous',
    'Meeting Crisis',
    'Sunlight of the Spirit',
    'First Things First',
    'Change',
    'Trudging Buddies',
    'Controversy',
    'Self Loathing',
    'Spiritual Experience',
    'Common Solution',
    'Ego',
    'Failure',
    'Retaliation',
    'Unity',
    'Spiritual Adviser',
    'Third Step Prayer',
    'Trust',
    'Cunning, Baffling, Powerful',
];

const enhancedSticks = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
    'Step 5',
    'Step 6',
    'Step 7',
    'Step 8',
    'Step 9',
    'Step 10',
    'Step 11',
    'Step 12',
    'Fear',
    'Warped Lives',
    'The Promises', 
    'Guidance',
    'Service Work',
    'Easier, Softer Way',
    'Isolating',
    'Easy Does It',
    'Faith',
    'Drop The Rock',
    'Wreckage of Past',
    'Financial Amends',
    'God',
    'Honesty',
    'Humility',
    'The New Comer',
    'Desperation',
    'Helping Others',
    'Bargaining',
    'There is a Solution',
    'Serenity',
    'Going to Any Length',
    'Willingness',
    'Lack of Control',
    'Your First 30 Days',
    'Confrontation',
    'Peace',
    'Sponsorship',
    'Self Pity',
    'Hopelessness',
    'Fellowship',
    'Courage',
    'Living Sober',
    'Spiritual Growth',
    'Attraction not Promotion',
    'Higher Power',
    'Meditation',
    'Healing Families',
    'Working Program at Home',
    'Judgemental',
    'Gods Will',
    'Love',
    'Sanity',
    'Bitterness',
    'Demoralization',
    'Trusted Servants',
    'Truth',
    'Recovery',
    'Half Measures',
    'Hope',
    'Resentments',
    'Spiritual Progress',
    'Living Amends',
    'Patience',
    'Anger',
    'One Day at a Time',
    'Economic Insecurity',
    'Rigorous Honesty',
    'Jealousy',
    'Family Disease',
    'Self-Seeking',
    'Gratitude',
    'Joyous',
    'Meeting Crisis',
    'Sunlight of the Spirit',
    'First Things First',
    'Change',
    'Trudging Buddies',
    'Controversy',
    'Self Loathing',
    'Spiritual Experience',
    'Common Solution',
    'Ego',
    'Failure',
    'Retaliation',
    'Unity',
    'Spiritual Adviser',
    'Third Step Prayer',
    'Trust',
    'Cunning, Baffling, Powerful',
    // Group-added topics:
    'Finding the solution',
    'What is your favorite step (and why)?',
    'Which of the promises have come true for you?',
    'What was your miracle?',
    "Life on life's terms",
    "How do you handle your triggers?",
    "Strategies between meetings",
    "Dealing with big emotions",
    'Right-Sized',
    'The Traditions',
    'Emotional Sobriety',
    'Rule 62',
    'Expectations',
    'Can the order in which the Steps are worked be changed?',
    // bonus topics (source: https://www.aa.org/assets/en_us/smf-56_en.pdf):
    'Acceptance',
    'Attitude of Gratitude',
    'Complacency',
    'Contempt Prior to Investigation',
    'Dependence',
    'Forgiveness',
    'Freedom Through Sobriety',
    'Inadequacy',
    'Inventory',
    'Letting go of Anger',
    'Making Amends',
    'Open-mindedness',
    'Participation and Action',
    'Patience and Tolerance',
    'Plan the Action not the Result',
    'Practice these principles in all our affairs',
    'Principles before personalities',
    'Projection - living in the wreckage of the future',
    'Staying away from the first drink',
    'Surrender',
    'Three Legacies - Recovery, Unity and Service',
    '"Twelfth stepping"',
    'Ways of carrying the AA message',
    'What is sobriety?',
    'Working with others',
    // Bonus topics from emailed source: "101 Meeting Starters A Guide to Better Twelve Step Discussions - Mel B."
    'Willpower',
    'Are Alcoholics Perfectionists?',
    'Are We Passing It On?',
    'Attracting Trouble',
    'Be Careful What You Pray For',
    'Being Responsible',
    'Changing Things We Can',
    'Coming to Grips with Fear',
    'Contending with self-will',
    'Controlling the Imagination',
    'Coping with Depression',
    'Coping with Social Pressure',
    'Dealing with Disagreeable People',
    'Dealing with Rejection',
    'Dealing with the Past',
    'Do Material Things Matter?',
    'Do We Deserve Success?',
    'Fearing Change',
    'Erasing the Old Tapes',
    'Finding True Independence',
    'Getting Beyond People Pleasing',
    'Giving Away to Keep',
    'Growth through Prayer and Action',
    'Happy coincidences',
    'How to Deal with Impatience',
    'How to Find Happy Sobriety',
    'Hungry, Angry, Lonely, Tired',
    'Keep it Simple',
    'Letting go of guilt',
    'Life after cloud nine',
    'Needing the program vs wanting it',
    'Old resentments flaring up',
    'The need for self honesty',
    'Wanting instant gratification',
    'We die to live',
    'What about my old friends?',
    'What blocks acceptance?',
    'What is being spiritually fit?',
    'What is Prayer & Meditation?',
    'What is sincerity?',
    'When have we made a decision?',
    'Right action leads to right thinking',
    'When pride gets in my way',
    'When the worst things become the best',
    'Who is an alcoholic?',
    'Whom can we fix?',
    'Why attitude matters',
    'Why did we drink?',
    'Why do I keep coming back?',
    'Why have a primary purpose?',
    'Why help is needed',
    'Why is one drink so bad?',
    'Why should we make amends?',
    'Why willingness is the key',
    'Winning the boredom battle',
    'Courage to change the things we can',
];

let topicBaseArr = weeklyApplication;
const chooseTopicBase = (newBase="weeklyApplication") => {
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