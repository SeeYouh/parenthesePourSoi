const Product = require( '../models/Product' );

// exports.createProduct = ( req, res, next ) => {
//     try {
//         console.log('Corps de la requête : ', req.body);

//         if (!req.body.product) {
//             throw new Error( 'erreur' );
//         }

//         const productObject = req.body.product;
        
//         console.log('Object produit : ', productObject);

//         if (typeof productObject !== "object") {
//             throw new Error("'thing' doit être un objet.");
//         }

//         if (!req.file || !req.file.filename) {
//             throw new Error("La requête doit inclure un fichier avec un nom de fichier.");
//         }

//         console.log('Nom du fichier : ', req.file.filename);

//         delete productObject._id;
//         delete productObject.user_id;
        
//         const product = new Product({
//             ...productObject,
//             userId: req.auth.userId,
//             imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//         });

//         console.log('Produit avant sauvegarde : ', product);

//         product.save()
//             .then(() => {
//                 console.log('Produit sauvegardé : ', product);
//                 res.status(200).json({ message: 'Objet enregistré !' })
//             })
//             .catch(error => {
//                 console.log('Erreur lors de la sauvegarde du produit : ', error);
//                 res.status(400).json({ error: error.message });
//             });

//     } catch (error) {
//         console.log('Erreur lors de la création du produit : ', error);
//         res.status(400).json({ error: error.message });
//     }
// };

exports.createProduct = ( req, res, next ) => {
    console.log(req.body);
    const productObject = JSON.parse(req.body.product);
    delete productObject._id;
    delete productObject.user_id;
    const product = new Product({
        ...productObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    product.save()
    .then(() => res.status(200).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error }));
    console.log(req.auth.userId);
};

exports.updateProduct = (req, res, next) => {
    Product.updateOne({ _id: req.params.id}), {...req.body, _id: req.params.id}
    .then(() => res.statut(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }))
};

exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.oneProduct = (req, res, next) => {
    Product.findOne({ _id: req.params.id })
    .then(product => res.status(200).json({ product }))
    .catch(error => res.status(400).json({ error }));
};

exports.allProduct = (req, res, next) => {
    Product.find()
    .then(product => res.status(200).json(product))
    .catch(error => res.status(400).json({ error }));
};

