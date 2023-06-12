const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(200).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
    console.log(req.body.email);
    console.log(req.body.password);
};

// exports.signup = async (req, res, next) => {
//     console.log("Req body: ", req.body);  // Affichez le corps de la requête pour vous assurer qu'il est bien reçu

//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         console.log("Hashed password: ", hashedPassword);  // Affichez le mot de passe haché pour vous assurer qu'il est correctement généré

//         const user = new User({
//             email: req.body.email,
//             password: hashedPassword
//         });

//         const savedUser = await user.save();
//         console.log("Saved user: ", savedUser);  // Affichez l'utilisateur sauvegardé pour vous assurer que la sauvegarde a réussi

//         res.status(200).json({ message: 'Utilisateur créé !' });

//     } catch (error) {
//         console.log("Error: ", error);  // Affichez l'erreur pour aider à identifier le problème
//         res.status(500).json({ error });
//     }
// };

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email})
    .then(
        user => {
            if ( user === null ) {
                res.statut(401).json({ message: 'Paire identifiant/mot de passe incorrecte' });
            } else {
                bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' })
                    } else {
                        res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                { userId: user._id },
                                process.env.MONGO_URI,
                                { expiresIn: '24h' }
                            )
                        })
                    }
                })
                .catch(error => res.status(500).json({ error }));
            }
        }
    )
    .catch(error => res.status(500).json({ error }));
};

exports.allUsers = (req, res, next) => {
    User.find()
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({ error }));
};
