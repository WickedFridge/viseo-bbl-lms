const database = {
    lms: [
        {
            intent: 'hello',
            output: 'Hi ! I\'m IceCreamator! Can I serve you some ice cream ?',
        },
        {
            intent: 'goodbye',
            output: 'See you in hell!',
        },
        {
            intent: 'iceCream',
            output: 'Which ice cream would you like ?',
        },
        {
            intent: 'iceCream',
            entities: {
                iceCream: ['chocolate'],
            },
            output: 'Here is a chocolate Ice cream !',
        },
        {
            intent: 'iceCream',
            entities: {
                iceCream: ['vanilla'],
            },
            output: 'Here is a vanilla Ice cream !',
        },
        {
            intent: 'iceCream',
            entities: {
                iceCream: '*',
            },
            output: 'We don\'t have this flavour, I can give you either Vanilla or Chocolate.',
        },
    ],
    fallback: [
        'I don\'t understand humans quite well',
        'Your english seems pretty bad... Try rephrasing maybe ?',
        'Let\'s be honest, nobody understands what you are saying',
    ],
};

module.exports = database;
