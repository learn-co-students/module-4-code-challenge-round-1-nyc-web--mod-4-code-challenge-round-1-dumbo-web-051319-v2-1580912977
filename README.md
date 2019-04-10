## Deliverables

The database of books can be found in a JSON-server. If you haven't already done so install json-server:

`TO INSTALL: npm install -g json-server`

Then start the json-server:

`TO START: json-server --watch db.json`

1. Fetch to `http://localhost:3005/books`. You should get a response that is an array of multiple book objects that look like this:
```
{ 
   "id": 1, 
   "title": "The Great Gatsby", 
   "author": "F. Scott Fitzgerald", 
   "img": "https://mppl.org/wp-content/uploads/0-214x300.jpg" 
}
```

2. Render a list of books that show the book title and book img
3. Clicking on a book in the Book List should add it to the Book Shelf
4. Clicking on a book in the Book Shelf should remove it from the Book Shelf
5. Add a controlled form that allows the user to add a book to the Book List (this should _NOT_ persist)
6. BONUS: Each book can only be added to Book Shelf one time (Book Shelf should not have duplicate books)

## Sample New Book Info
Here is some convenient sample info for you to use to add new books to the
Book List with your form.

* "How to Win Friends and Influence People", by Dale Carnegie
* Sample Image URL: `https://images.gr-assets.com/books/1442726934l/4865.jpg`


* "The Obstacle is the Way" by Ryan Holiday
* Sample Image URL: `https://images-na.ssl-images-amazon.com/images/I/41d%2Baa6UYCL._SX352_BO1,204,203,200_.jpg`

![bookshelf gif](BookShelf.gif)

