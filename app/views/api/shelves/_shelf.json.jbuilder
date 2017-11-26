json.extract! shelf, :id, :name
json.bookIds shelf.books.map(&:id)
