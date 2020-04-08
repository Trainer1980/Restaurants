const Restaurant = require('../models/models.js')

module.exports = {
    index: function(req, res){
        Restaurant.find()
            .then(restaurants =>{
                res.json(restaurants)
            })
            .catch(err => {
                res.json(err)
            })
    },
    create: function(req, res){
        const restaurant = new Restaurant()
        restaurant.name = req.body.name;
        restaurant.cuisine = req.body.cuisine;
        restaurant.save()
            .then(newRestaurant =>{
                res.json(newRestaurant)
            })
            .catch(err =>{
                res.json(err)
            })
    },
    show: function(req, res){
        Restaurant.findById({_id: req.params.id})
        .then(restaurant =>{
            res.json(restaurant)
        })
        .catch(err =>{
            res.json(err)
        })
    },
    update: function(req, res){
        Restaurant.findById({_id: req.params.id})
        .then(restaurantToEdit =>{
            restaurantToEdit.name = req.body.name;
            restaurantToEdit.cuisine = req.body.cuisine;
            restaurantToEdit.save()
                .then(updatedRestaurant =>{
                    res.json(updatedRestaurant)
                })
                .catch(err =>{
                    res.json(err)
                })
        })
        .catch(err =>{
            res.json(err)
        })
    },
    addReview: function(req, res){
        console.log(req.body)
        Restaurant.findById({_id: req.params.id})
            .then(restaurant =>{
                restaurant.reviews.push({customer: req.body.customer, rating: req.body.rating, content: req.body.content })
                restaurant.save()
                    .then(updatedRestaurant =>{
                        res.json(updatedRestaurant)
                    })
                    .catch(err =>{
                        res.json(err)
                    })
                })
            .catch(err =>{
                res.json(err)
            })
    },
    destroy: function(req, res){
        Restaurant.remove({_id: req.params.id})
            .then(restaurant =>{
                res.json(restaurant)
            })
            .catch(err =>{
                res.json(err)
            })
    }
}