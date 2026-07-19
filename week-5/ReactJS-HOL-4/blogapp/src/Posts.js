import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        // Initialize the component state with an empty posts array
        this.state = {
            posts: []
        };
    }

    // Custom method to fetch data using the Fetch API
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Assign the fetched data to the component state
                this.setState({ posts: data });
            })
            .catch(error => {
                console.error("Fetch error: ", error);
            });
    }

    // Lifecycle hook: Triggers automatically right after the component mounts to the screen
    componentDidMount() {
        this.loadPosts();
    }

    // Lifecycle hook: Catches errors happening in the component/children and displays an alert
    componentDidCatch(error, info) {
        alert(`An error occurred: ${error.message}`);
    }

    // Render method: displays the title and body of posts using headings and paragraphs
    render() {
        return (
            <div style={{ padding: '20px' }}>
                <h2>Blog Posts</h2>
                {this.state.posts.length === 0 ? (
                    <p>Loading posts...</p>
                ) : (
                    this.state.posts.map(post => (
                        <div key={post.id} style={{ borderBottom: '1px solid #ccc', margin: '15px 0', paddingBottom: '10px' }}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))
                )}
            </div>
        );
    }
}

export default Posts;