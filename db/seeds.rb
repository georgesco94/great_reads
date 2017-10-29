# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.destroy_all
User.destroy_all

guest = User.create!(username:"guest", email: "guestEmail", password:"123456")


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
