const stoic_messages = ['Imagine smiling after a slap in the face. Then think of doing it twenty-four hours a day.',
'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
'Warriors should suffer their pain silently.',
'It is the power of the mind to be unconquerable.',
'Feeling too much is a hell of a lot better than feeling nothing.',
'The things you think about determine the quality of your mind.',
'Misfortune nobly born is good fortune.',
'There will never come a time when I will be able to resist my emotions.',
'It is not the man who has too little that is poor, but the one who hankers after more.',
'If what you have seems insufficient to you, then though you possess the world, you will yet be miserable',
'It is impossible to lose everything and still be alive.'];

function generate_rand_message(arr) {
    rand_index = Math.floor(Math.random() * arr.length)
    return arr[rand_index];
}
