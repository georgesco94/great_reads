# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guest = User.create!(username:"guest", email: "guestEmail", password:"123456")

wp_img =
war_peace = Book.create!(title:"War and Peace", author: "Lev Tolstoy" ,
description:"The novel chronicles the history of the French invasion of Russia and
the impact of the Napoleonic era on Tsarist society through the stories of five
Russian aristocratic families")
war_peace.image = File.open("app/assets/images/war_peace.jpeg")

stories = Book.create!(title:"The Afterlife", author: "John Updike" ,
description:"Short stories by John Updike")
war_peace.image = File.open("app/assets/images/updike_short.jpg")

snows = Book.create!(title:"Snows of Kilimanjaro", author: "Ernest Hemingway" ,
description:"Collection of short stories by Hemingway")
war_peace.image = File.open("app/assets/images/snows.jpg")
