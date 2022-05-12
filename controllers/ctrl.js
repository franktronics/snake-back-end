const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '.env'})
const User = require('../models/user')

const TOKENKEY = process.env.DB_TOKEN

exports.signin = (req, res, next) => {
    const userTemp = {
        name: req.body.name,
        token: req.body.token,
        facile: {
            date: Date.now(),
            value: 0
        },
        moyen: {
            date: Date.now(),
            value: 0
        },
        difficile: {
            date: Date.now(),
            value: 0
        },
    }
    User.findOne({name: req.body.name})
        .then((user) => {
            if(!user){
                const newUser = new User({...userTemp})
                newUser.save()
                    .then(() => {res.status(200).json({message: "Utilisateur crée !"})})
                    .catch(error => {res.status(500).json( error )})
            }else{
                res.status(200).json({messageError: "Ce nom est deja utilisé"})
            }
        })
        .catch( error => {res.status(500).json({ error })})
}

exports.getStat = (req, res, next) => {
    User.find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

exports.score = (req, res, next) => {
    if(req.body.facile){
        User.updateOne({token: req.body.token}, {facile: req.body.facile})
            .then(() => res.status(200).json({message: 'score sauvegarder'}))
            .catch( error => {res.status(500).json({ error })})
    }else if(req.body.moyen){
        User.updateOne({token: req.body.token}, {moyen: req.body.facile})
            .then(() => res.status(200).json({message: 'score sauvegarder'}))
            .catch( error => {res.status(500).json({ error })})
    }else if(req.body.difficile){
        User.updateOne({token: req.body.token}, {difficile: req.body.facile})
            .then(() => res.status(200).json({message: 'score sauvegarder'}))
            .catch( error => {res.status(500).json({ error })})
    }
}