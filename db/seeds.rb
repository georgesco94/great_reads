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

guest = User.create!(username:"guest", email: "guestEmail", password:"123456")

user1 = User.new(username:"george", email: "guestEmail", password:"123456")
user1.save!
user2 = User.new(username:"sam", email: "guestEmail", password:"123456")
user2.image = File.open("app/assets/images/lear.jpg")
user2.save!
user3 = User.new(username:"john baker", email: "guestEmail", password:"123456")
user3.image = File.open("app/assets/images/JB.jpg")
user3.save!

Shelf.create(name:"read", user_id:guest.id)
Shelf.create(name:"to-read", user_id:guest.id)
Shelf.create(name:"currently-reading", user_id:guest.id)
Shelf.create(name:"read", user_id:user1)
Shelf.create(name:"to-read", user_id:user1)
Shelf.create(name:"currently-reading", user_id:user1)
Shelf.create(name:"read", user_id:user2)
Shelf.create(name:"to-read", user_id:user2)
Shelf.create(name:"currently-reading", user_id:user2)
Shelf.create(name:"read", user_id:user3)
Shelf.create(name:"to-read", user_id:user3)
Shelf.create(name:"currently-reading", user_id:user3)

war_peace = Book.new(title:"War and Peace", author: "Lev Tolstoy" ,
description:"The novel chronicles the history of the French invasion of Russia and
the impact of the Napoleonic era on Tsarist society through the stories of five
Russian aristocratic families")
war_peace.image = File.open("app/assets/images/war_peace.jpeg")
war_peace.save!

stories = Book.new(title:"The Afterlife", author: "John Updike" ,
description:"Short stories by John Updike")
stories.image = File.open("app/assets/images/updike_short.jpg")
stories.save!

snows = Book.new(title:"Snows of Kilimanjaro", author: "Ernest Hemingway" ,
description:"Collection of short stories by Hemingway")
snows.image = File.open("app/assets/images/snows.jpg")
snows.save!

ezra = Book.new(title:"Selected Poems", author: "Ezra Pound" ,
description:"Poems by Ezra pound")
ezra.image = File.open("app/assets/images/ezra.jpg")
ezra.save!

henry = Book.new(title:"King Henry iv", author: "William Shakespeare" ,
description:"Henry IV, Part 1 is a history play by William Shakespeare, believed to have been written no later than 1597.")
henry.image = File.open("app/assets/images/henry.jpg")
henry.save!

lear = Book.new(title:"King Lear", author: "William Shakespeare" ,
description:"King Lear is a tragedy written by William Shakespeare. It depicts the gradual descent into madness of the title character, after he disposes of his kingdom giving ")
lear.image = File.open("app/assets/images/lear.jpg")
lear.save!

twelfth = Book.new(title:"Twelfth Night", author: "William Shakespeare" ,
description:"Play by Shakespeare")
twelfth.image = File.open("app/assets/images/twelfth.jpg")
twelfth.save!

slaughter = Book.new(title:"Slaughterhouse-Five", author: "Kurt Vonnegut Jr." ,
description:"Kurt Vonnegut's absurdist classic Slaughterhouse-Five introduces us to Billy Pilgrim, a man who becomes unstuck in time ")
slaughter.image = File.open("app/assets/images/slaughter.jpg")
slaughter.save!

tale = Book.new(title:"A tale of Two Cities", author: "Charles Dickens" ,
description:"'Liberty, equality, fraternity, or death; -- the last, much the easiest to bestow, O Guillotine!' After eighteen years as a political prisoner in the Bastille ")
tale.image = File.open("app/assets/images/tale.jpg")
tale.save!


Status.create(user_id:user1.id , book_id:war_peace.id ,status:"Read")
Status.create(user_id:user1.id , book_id:snows.id ,status:"Read")
Status.create(user_id:user1.id , book_id:henry.id ,status:"Currently Reading")

Status.create(user_id:user2.id , book_id:war_peace.id ,status:"Read")
Status.create(user_id:user2.id , book_id:snows.id ,status:"To Read")
Status.create(user_id:user2.id , book_id:henry.id ,status:"Read")

Status.create(user_id:user3.id , book_id:war_peace.id ,status:"Read")
Status.create(user_id:user3.id , book_id:snows.id ,status:"Currently Reading")
Status.create(user_id:user3.id , book_id:henry.id ,status:"To read")

Review.create!(user_id:user1.id , book_id:war_peace.id ,review:"enjoyed the book a lot" ,rating:4)
Review.create!(user_id:user1.id , book_id:snows.id ,review:"enjoyed the book a lot" ,rating:4)
Review.create!(user_id:user1.id , book_id:henry.id ,review:"enjoyed the book a lot" ,rating:4)
Review.create!(user_id:user3.id , book_id:war_peace.id ,review:"cld be beter" ,rating:3)
Review.create!(user_id:user3.id , book_id:snows.id ,review:"cld be beter" ,rating:3)
Review.create!(user_id:user2.id , book_id:war_peace.id ,review:"aboslutely hated it !!" ,rating:2)
Review.create!(user_id:user2.id , book_id:snows.id ,review:"aboslutely hated it !!" ,rating:2)
Review.create!(user_id:user2.id , book_id:henry.id ,review:"aboslutely hated it !!" ,rating:2)
