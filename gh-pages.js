import { publish } from 'gh-pages';

publish(
    'public', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/GisangLee/GisangLee.github.io.git', // Update to point to your repository  
        user: {
            name: 'GisangLee', // update to use your name
            email: 'masterkorea01@naver.com' // Update to use your email
        },
        dotfiles: true
    },
    
    () => {
        console.log('Deploy Complete!')
    }
)