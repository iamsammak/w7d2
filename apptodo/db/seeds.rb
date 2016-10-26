# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


t1 = Todo.create(title: "first", body: "first todo", done: true)
t2 = Todo.create(title: "second", body: "second todo", done: false)
t3 = Todo.create(title: "third", body: "third todo", done: false)
t4 = Todo.create(title: "fourth", body: "fourth todo", done: true)
