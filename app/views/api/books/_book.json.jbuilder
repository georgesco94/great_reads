json.extract! book, :id, :title, :description, :author
json.image_url asset_path(book.image)
json.reviewIds book.reviews.map(&:id)
json.genreIds book.genres.map(&:id)
