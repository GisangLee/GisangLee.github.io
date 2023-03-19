const ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/GisangLee/GisangLee.github.io.git', // Update to point to your repository  
        user: {
            name: 'GisangLee', // update to use your name
            email: 'masterkorea01@naver.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)