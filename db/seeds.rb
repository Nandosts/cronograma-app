# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
subjects = Subject.create([
    {
        name: 'Matemática'
    },
    {
        name: 'Física'
    },
    {
        name: 'Geografia'
    },
    {
        name: 'História'
    },
    {
        name: 'Biologia'
    },
    {
        name: 'Química'
    },
    {
        name: 'Filosofia'
    },
    {
        name: 'Sociologia'
    },
    {
        name: 'Artes'
    }
    
])

activity = Activity.create([
    {
        name: 'Atividades de física',
        period: nil,
        day: 'Segunda Feira',
        subject: Subject.find(1)
    },
    {
        name: 'Atividades de matemática',
        period: nil,
        day: 'Segunda Feira',
        subject: Subject.find(1)
    }
])