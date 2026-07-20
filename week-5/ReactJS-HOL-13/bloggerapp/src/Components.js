
import React from 'react';


export function BookDetails({ books, showPrice }) {
  return (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          
          {showPrice && <h4>{book.price}</h4>}
        </div>
      ))}
    </ul>
  );
}


export function CourseDetails({ courses }) {
  return (
    <ul>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.cname}</h2>
          <p>{course.date}</p>
        </div>
      ))}
    </ul>
  );
}


export function BlogDetails({ blogs }) {
  return (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h3>{blog.author}</h3>
          <p>{blog.desc}</p>
        </div>
      ))}
    </ul>
  );
}