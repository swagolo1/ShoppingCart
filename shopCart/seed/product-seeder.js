var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200626201832/cyberpunk2077_5ecfe92351d704_86615862-png-640x360-1.png',
        title: 'Cyberpunk 2077',
        description: 'Cyberpunk 2077 is an upcoming role-playing video game developed and published by CD Projekt. It is scheduled to be released for Microsoft Windows, PlayStation 4, and Xbox One on 19 November 2020, Stadia by the end of the year, and PlayStation 5 and Xbox Series X in 2021.',
        price: 8
    }),
    new Product({
        imagePath: 'https://i.redd.it/2ei5g6azyf331.jpg',
        title: 'DOOM Eternal',
        description: 'Doom Eternal is a first-person shooter video game developed by id Software and published by Bethesda Softworks. The sequel to Doom, and the fifth main game in the Doom series, it was released on March 20, 2020, for Windows, PlayStation 4, Stadia and Xbox One, with a Nintendo Switch version planned.',
        price: 12
    }),
    new Product({
        imagePath: 'https://cdn1.expertreviews.co.uk/sites/expertreviews/files/2018/05/best_android_games_2018_pubg_player_unknowns_battlegrounds.jpg',
        title: 'PlayerUnknown\'s Battlegrounds',
        description: 'PlayerUnknown\'s Battlegrounds is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole.',
        price: 25
    }),
    new Product({
        imagePath: 'https://steamcdn-a.akamaihd.net/half-life.com/images/alyx/alyx_meta_image.jpg',
        title: 'Half-Life: Alyx',
        description: 'Half-Life: Alyx is a 2020 virtual reality first-person shooter developed and published by Valve. Between the events of Half-Life and Half-Life 2, players control Alyx Vance on a mission to seize a superweapon belonging to the alien Combine.',
        price: 6
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/Nfo2NHiBGs66BBvcZyzkhxi3Lv8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19858273/LogoVersion_Beta_Key_Art_VALORANT.jpg',
        title: 'Valorant',
        description: 'Valorant is a free-to-play multiplayer tactical first-person shooter developed and published by Riot Games, for Microsoft Windows. Announced under the codename Project A in October 2019, the game began a closed beta with limited access on April 7, 2020, and was fully released on June 2, 2020.',
        price: 15
    }),
    new Product({
        imagePath: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSFMxoFoAH6qTRt2VQb5P4G19gSmYAy1gm9BBZ6PVpLShfrg9tTn68AjEpW5YC1nm-iu7N',
        title: 'Call of Duty: Warzone',
        description: 'Call of Duty: Warzone is a free-to-play battle royale video game released on March 10, 2020, for Xbox One, PlayStation 4, and Microsoft Windows. The game is a part of the 2019 title Call of Duty: Modern Warfare but does not require purchase of it.',
        price: 20
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}
