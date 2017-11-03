# GreatReads
## Introduction
GreatReads is a single page web application based on GoodReads. Users manage their own bookshelves and review/browse/create books. Built on Rails and React. 

[GreatReads](https://great-reads.herokuapp.com/)


## Technologies
### Backend
The backend for this application uses a PostgreSQL database and is built with Ruby on Rails. Data requests are made with AJAX and fulfilled by JSON Jbuilder. Users and Books are stored in the database with images using the paperclip gem (images are hosted on AWS). A shelveAssignments join table links books to shelfs , and a statuses table links books to users. 

### Frontend
The frontend is implemented with the React JS library, and Redux. A normalized Redux state is kept.

## Features
A few of the things you can do with GreatReads:

* Search books through title or author
* Create a review (as well as assign a star rating)
* Create bookshelf and add books to it

![alt text](https://github.com/georgesco94/greatReads/blob/master/infinite%20scroll.png)

The book index page employs an infinite scroll, where three books are fetched each time the bottom of the page is hit. An offset number is sent to the database so that it keeps track of what the next three books are. To avoid unnecessary fetches when all the books have already been displayed, the event listener is turned off when the controller returns no books. 


![alt text](https://github.com/georgesco94/greatReads/blob/master/Screen%20Shot%202017-11-03%20at%201.28.20%20AM.png)

Each Book show page displays all the reviews for the given book. In the redux state, books have an array of reviewIds through which we can display the correct reviews.

![alt text](https://github.com/georgesco94/greatReads/blob/master/Screen%20Shot%202017-11-03%20at%201.29.53%20AM.png)


![alt text](https://github.com/georgesco94/greatReads/blob/master/search.png)
Users can search for a book via author and/or title. Case insensitive.

Upon creating a profile, each user is assigned three default shelves which cannot be deleted - "read", "currently reading" and "to read". To do this, the create action in the users controller makes those shelves upon successfull save of the user to the database. 

## Future Directions
* auto-complete search
* comments
