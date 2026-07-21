
import React, { useState } from 'react'; 


import { books, courses, blogs } from './data';


import { BookDetails, CourseDetails, BlogDetails } from './Components'; 
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(true);

  
  let coursedet = <CourseDetails courses={courses} />;

  return (
    <div className="container">
      <div className="controls">
        <button onClick={() => setShowContent(!showContent)}>Toggle UI</button>
      </div>

      <div className="flex-row">
        <div className="mystyle1">
          <h1>Course Details</h1>
          {coursedet}
        </div>

        <div className="st2">
          <h1>Book Details</h1>
          <BookDetails books={books} showPrice={showContent} />
        </div>

        <div className="v1">
          <h1>Blog Details</h1>
          {showContent ? <BlogDetails blogs={blogs} /> : <p>Content Hidden</p>}
        </div>
      </div>
    </div>
  );
}

export default App;