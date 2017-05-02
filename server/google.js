module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '681644594140-6u40flstt15k44901so7hvnoh43q7m5n.apps.googleusercontent.com',
        'clientSecret'  : 'OXYwfvElMWfB1It0j9A46Zh6',
        'callbackURL'   : 'http://localhost:2000/api/auth/google/callback'
    }

};