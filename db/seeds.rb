# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.destroy_all
User.destroy_all
Review.destroy_all
Shelf.destroy_all
Status.destroy_all
ShelveAssignment.destroy_all
Genre.destroy_all
GenreBookAssignment.destroy_all

guest = User.create!(username:"guest", email: "guestEmail", password:"123456")

user1 = User.new(username:"george", email: "guestEmail", password:"123456")
user1.save!
user2 = User.new(username:"sam", email: "guestEmail", password:"123456")
user2.image = File.open("app/assets/images/lear.jpg")
user2.save!
user3 = User.new(username:"john baker", email: "guestEmail", password:"123456")
user3.image = File.open("app/assets/images/JB.jpg")
user3.save!

shelf1 = Shelf.create!(name:"read", user_id:guest.id)
shelf2 = Shelf.create!(name:"to-read", user_id:guest.id)
shelf3 = Shelf.create!(name:"currently-reading", user_id:guest.id)
shelf3 = Shelf.create!(name:"favs", user_id:guest.id)

shelf4 = Shelf.create!(name:"read", user_id:user1.id)
shelf5 = Shelf.create!(name:"to-read", user_id:user1.id)
shelf6 = Shelf.create!(name:"currently-reading", user_id:user1.id)

shelf7 = Shelf.create!(name:"read", user_id:user2.id)
shelf8 = Shelf.create!(name:"to-read", user_id:user2.id)
shelf9 = Shelf.create!(name:"currently-reading", user_id:user2.id)

shelf10 = Shelf.create!(name:"read", user_id:user3.id)
shelf11 = Shelf.create!(name:"to-read", user_id:user3.id)
shelf12 = Shelf.create!(name:"currently-reading", user_id:user3.id)

fiction = Genre.new(name:"Fiction", description: "Fiction")
fiction.save!
historical_fiction = Genre.new(name:"Historical Fiction", description: "Historical Fiction")
historical_fiction.save!
short_stories = Genre.new(name:"Short Stories", description: "Short stories")
short_stories.save!
classics = Genre.new(name:"Classics", description: "Classics")
classics.save!
poetry = Genre.new(name:"Poetry", description: "Poetry")
poetry.save!
drama = Genre.new(name:"Drama", description: "Drama")
drama.save!



war_peace = Book.new(title:"War and Peace", author: "Lev Tolstoy" ,
description:"The novel chronicles the history of the French invasion of Russia and
the impact of the Napoleonic era on Tsarist society through the stories of five
Russian aristocratic families")
war_peace.image = File.open("app/assets/images/war_peace.jpeg")
war_peace.save!
GenreBookAssignment.create!(book_id: war_peace.id, genre_id:fiction.id)
GenreBookAssignment.create!(book_id: war_peace.id, genre_id:historical_fiction.id)
GenreBookAssignment.create!(book_id: war_peace.id, genre_id:classics.id)



stories = Book.new(title:"The Afterlife", author: "John Updike" ,
description:"This is a collection of stories which look back on the past. They
include stories of moving to the country as a young boy; of seeing the city house
they left behind transformed by other occupants over
the years.")
stories.image = File.open("app/assets/images/updike_short.jpg")
stories.save!
GenreBookAssignment.create!(book_id: stories.id, genre_id:fiction.id)
GenreBookAssignment.create!(book_id: stories.id, genre_id:short_stories.id)

snows = Book.new(title:"Snows of Kilimanjaro", author: "Ernest Hemingway" ,
description:"The Snows of Kilimanjaro and Other Stories is a collection of short stories by Ernest Hemingway, published in 1961. The title story is considered by some to be the best story Hemingway ever wrote.")
snows.image = File.open("app/assets/images/snows.jpg")
snows.save!
GenreBookAssignment.create!(book_id: snows.id, genre_id:fiction.id)
GenreBookAssignment.create!(book_id: snows.id, genre_id:short_stories.id)
GenreBookAssignment.create!(book_id: snows.id, genre_id:classics.id)


ezra = Book.new(title:"Selected Poems", author: "Ezra Pound" ,
description:"Poems by Ezra pound")
ezra.image = File.open("app/assets/images/ezra.jpg")
ezra.save!
GenreBookAssignment.create!(book_id: ezra.id, genre_id:fiction.id)
GenreBookAssignment.create!(book_id: ezra.id, genre_id:poetry.id)

henry = Book.new(title:"King Henry iv", author: "William Shakespeare" ,
description:"Henry IV, Part 1 is a history play by William Shakespeare, believed to have been written no later than 1597.")
henry.image = File.open("app/assets/images/henry.jpg")
henry.save!
GenreBookAssignment.create!(book_id: henry.id, genre_id:fiction.id)
GenreBookAssignment.create!(book_id: henry.id, genre_id:historical_fiction.id)
GenreBookAssignment.create!(book_id: henry.id, genre_id:classics.id)
GenreBookAssignment.create!(book_id: henry.id, genre_id:drama.id)

lear = Book.new(title:"King Lear", author: "William Shakespeare" ,
description:"King Lear is a tragedy written by William Shakespeare. It depicts the gradual descent into madness of the title character, after he disposes of his kingdom giving ")
lear.image = File.open("app/assets/images/lear.jpg")
lear.save!
GenreBookAssignment.create!(book_id: lear.id, genre_id:fiction.id)
GenreBookAssignment.create!(book_id: lear.id, genre_id:historical_fiction.id)
GenreBookAssignment.create!(book_id: lear.id, genre_id:classics.id)
GenreBookAssignment.create!(book_id: lear.id, genre_id:drama.id)

twelfth = Book.new(title:"Twelfth Night", author: "William Shakespeare" ,
description:"Play by Shakespeare")
twelfth.image = File.open("app/assets/images/twelfth.jpg")
twelfth.save!
GenreBookAssignment.create!(book_id: twelfth.id, genre_id:fiction.id)
GenreBookAssignment.create!(book_id: twelfth.id, genre_id:historical_fiction.id)
GenreBookAssignment.create!(book_id: twelfth.id, genre_id:classics.id)
GenreBookAssignment.create!(book_id: twelfth.id, genre_id:drama.id)

slaughter = Book.new(title:"Slaughterhouse-Five", author: "Kurt Vonnegut Jr." ,
description:"Kurt Vonnegut's absurdist classic Slaughterhouse-Five introduces us to Billy Pilgrim, a man who becomes unstuck in time ")
slaughter.image = File.open("app/assets/images/slaughter.jpg")
slaughter.save!
GenreBookAssignment.create!(book_id: slaughter.id, genre_id:fiction.id)


tale = Book.new(title:"A tale of Two Cities", author: "Charles Dickens" ,
description:"'Liberty, equality, fraternity, or death; -- the last, much the easiest to bestow, O Guillotine!' After eighteen years as a political prisoner in the Bastille ")
tale.image = File.open("app/assets/images/tale.jpg")
tale.save!
GenreBookAssignment.create!(book_id: tale.id, genre_id:fiction.id)
GenreBookAssignment.create!(book_id: tale.id, genre_id:historical_fiction.id)
GenreBookAssignment.create!(book_id: tale.id, genre_id:classics.id)


s0 = Status.create!(user_id:user1.id , book_id:slaughter.id ,status:"read")
ShelveAssignment.create(book_id: slaughter.id , shelf_id: shelf4.id )
s1 = Status.create!(user_id:user1.id , book_id:war_peace.id ,status:"read")
ShelveAssignment.create(book_id: war_peace.id , shelf_id: shelf4.id )
s2= Status.create!(user_id:user1.id , book_id:snows.id ,status:"to-read")
ShelveAssignment.create(book_id: snows.id , shelf_id: shelf5.id )
s3= Status.create!(user_id:user1.id , book_id:henry.id ,status:"currently-reading")
ShelveAssignment.create(book_id: henry.id , shelf_id: shelf6.id )

s4= Status.create!(user_id:user2.id , book_id:war_peace.id ,status:"read")
ShelveAssignment.create(book_id: war_peace.id , shelf_id: shelf7.id )
s5= Status.create!(user_id:user2.id , book_id:snows.id ,status:"to-read")
ShelveAssignment.create(book_id: snows.id , shelf_id: shelf8.id )
s6= Status.create!(user_id:user2.id , book_id:henry.id ,status:"read")
ShelveAssignment.create(book_id: henry.id , shelf_id: shelf9.id )


s7= Status.create!(user_id:user3.id , book_id:war_peace.id ,status:"read")
ShelveAssignment.create(book_id: war_peace.id , shelf_id: shelf10.id )
s8= Status.create!(user_id:user3.id , book_id:snows.id ,status:"currently-reading")
ShelveAssignment.create(book_id: snows.id , shelf_id: shelf11.id )
s9= Status.create!(user_id:user3.id , book_id:henry.id ,status:"to-read")
ShelveAssignment.create(book_id: henry.id , shelf_id: shelf12.id )


Review.create!(user_id:user1.id , book_id:war_peace.id ,review:"enjoyed the book a lot" ,rating:4)
Review.create!(user_id:user1.id , book_id:snows.id ,review:"enjoyed the book a lot" ,rating:4)
Review.create!(user_id:user1.id , book_id:henry.id ,review:"enjoyed the book a lot" ,rating:4)
Review.create!(user_id:user3.id , book_id:war_peace.id ,review:"cld be beter" ,rating:3)
Review.create!(user_id:user3.id , book_id:snows.id ,review:"cld be beter" ,rating:3)
Review.create!(user_id:user2.id , book_id:war_peace.id ,review:"aboslutely hated it !!" ,rating:2)
Review.create!(user_id:user2.id , book_id:snows.id ,review:"aboslutely hated it !!" ,rating:2)
Review.create!(user_id:user2.id , book_id:henry.id ,review:"aboslutely hated it !!" ,rating:2)
