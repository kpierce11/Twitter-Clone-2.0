# Twitter Clone with React and MUI

A simple Twitter-like application built with React, Vite, Material UI, and React Router. It allows you to post tweets, like/unlike them, and reply to existing tweets. It also includes a sidebar for navigation and a trends section.

## Features

- Post new tweets with a ComposeTweet form  
- Like/unlike tweets with a toggleable heart icon  
- Reply to tweets, which creates indented reply cards  
- Dark-themed UI with a custom MUI theme  
- Default avatars for the main user and placeholder avatars for John Doe and Jane Smith  
- Sidebar navigation that mimics Twitter’s design  
- Trends section with hoverable hashtags  

## Technologies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [pravatar.cc](https://pravatar.cc/) for placeholder avatars

## Getting Started

1. **Clone the repository**:  
   `git clone <your-repo-url>`  
   `cd twitter-clone`
2. **Install dependencies**:  
   `npm install`
3. **Run the development server**:  
   `npm run dev`
4. **Open in your browser**:  
   The app is usually served at [http://localhost:5173](http://localhost:5173), but your terminal output may show a different port.

## Usage

- Type your tweet in the box and click **Tweet** to post.
- Click the heart icon to like or unlike a tweet.
- Click **Reply** under a tweet to open a text box and post a reply.
- Click the Twitter logo in the sidebar to refresh the page.
- Hover over sidebar links and hashtags to see hover effects.

## Customization

- Modify avatars, names, and placeholder text in `Feed.jsx` or `Sidebar.jsx`.
- Adjust the dark theme colors in `theme.js`.
- Change layout settings (widths, padding) in `App.jsx`.

## License

This project is for demonstration purposes and is not affiliated with Twitter. Feel free to adapt or extend it as needed.
