import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4 className='text-primary'>Difference between SQL and NoSQL</h4>
            <p className='text-muted'>The most widespread and well-liked programming language for relational database management systems is SQL, or Structured Query Language. It is a language intended for managing, inserting, deleting, and updating data for structured data and tactical analysis.</p>
            <p className='text-muted'>
                Top internet businesses like Facebook, WhatsApp, and others frequently employ SQL as a data processing option. It is utilized for several RDBMS platforms, such as Oracle, MySQL, SQLServer, etc.
            </p>
            <p className='text-muted'>
                A technique for storing and retrieving data that is modelled differently from tabular form is provided by NoSQL databases. It was first referred to as a non-relational database by Carl Stroz in the year 1998. It now denotes Not Just SQL. It allows huge data to be stored in a variety of formats, including polymorphic, semi-structured, unstructured, and structured tables.
            </p>
            <p className='text-muted'>
                It allows huge data to be stored in a variety of formats, including polymorphic, semi-structured, unstructured, and structured tables.
            </p>

            <h4 className='text-primary'>What is JWT, and how does it work?</h4>
            <p className='text-muted'>An open industry standard called JSON Web Token is used to exchange data between two entities, often a client and a server .</p>
            <p className='text-muted'>They include JSON objects that include the necessary information to be shared. To ensure that the JSON contents, also known as JWT claims, cannot be changed by the client or an unintentional party, each JWT is also signed using cryptography (hashing).</p>
            <h4 className='text-primary'>What is the difference between javascript and NodeJS?</h4>
            <p className='text-muted'>Our web pages and online apps become dynamic and interactive thanks to JavaScript, a high-level programming language that gives them the capacity to reason and act. In contrast to Node, JavaScript is an object-oriented programming language that is lightweight (with simple syntax). A collection of objects and functions that JavaScript programs can access is commonly represented by the js runtime environment, which is based on the Google v8 engine.</p>
            <h4 className='text-primary'>How does NodeJS handle multiple requests at the same time?</h4>
            <p className='text-muted'>Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an infinite loop that accepts and processes requests. The EventQueue's listener is the EventLoop.</p>
            <p className='text-muted'>
                The event loop would handle the request itself and send the response back to the client by itself if NodeJS can process the request without I/O blocking. However, you can handle numerous requests concurrently by utilizing the worker threads or NodeJS cluster modules.
            </p>
        </div>
    );
};

export default Blog;