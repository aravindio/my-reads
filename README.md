# MyReads

An app that allows you to select and categorize books you have read, are currently reading, or want to read.

## Installation

Download the repo, unzip it, ```cd``` into it and run the following command
```sh
npm install && npm start
```

## Usage

There are two main pages (or views) in this app.
- Homepage (or) ```/```
- Search page (or) ```/search```

### The ```/``` page

The homepage displays a number of books categorized by three sections called "shelves".

- **Currently Reading**
- **Want to Read**
- **Read**

Each book has a control that shows what shelf the book is currently in. The control also lets you select a shelf for that book. When a different shelf is selected, the book moves there.

### The ```/search``` page

The search page lets you search for books that you want to add to your shelves. As you type in the input, the list gets updated based on your search.

Every book in the search page will also have a control that will

- show you what shelf the book is in (if it's already in any one of the shelf)
- let you select what shelf you want to put that book in.

Please note that you can only search for the following terms, for now.
```sh
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball',
'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes',
'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football',
'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo',
'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction',
'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting',
'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript',
'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire',
'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time',
'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
```
___

This project is a part of the [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) syllabus.