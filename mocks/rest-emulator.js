const _ = require('lodash');
module.exports = {
    "/api/persons": {
        "GET": {
            "data": [
                {
                    "name": _.sample(["Adam","Kate","John","Troy","Eva","May"]),
                    "age": _.sample([1,3,4,5,16,28,54]),
                    "birthday": _.sample([new Date(), new Date(2017,3,1)]),
                },{
                    "name": _.sample(["Adam","Kate","John","Troy","Eva","May"]),
                    "age": _.sample([1,3,4,5,16,28,54]),
                    "birthday": _.sample([new Date(), new Date(2017,3,1)]),
                },{
                    "name": _.sample(["Adam","Kate","John","Troy","Eva","May"]),
                    "age": _.sample([1,3,4,5,16,28,54]),
                    "birthday": _.sample([new Date(), new Date(2017,3,1)]),
                },{
                    "name": _.sample(["Adam","Kate","John","Troy","Eva","May"]),
                    "age": _.sample([1,3,4,5,16,28,54]),
                    "birthday": _.sample([new Date(), new Date(2017,3,1)]),
                },{
                    "name": _.sample(["Adam","Kate","John","Troy","Eva","May"]),
                    "age": _.sample([1,3,4,5,16,28,54]),
                    "birthday": _.sample([new Date(), new Date(2017,3,1)]),
                },{
                    "name": _.sample(["Adam","Kate","John","Troy","Eva","May"]),
                    "age": _.sample([1,3,4,5,16,28,54]),
                    "birthday": _.sample([new Date(), new Date(2007,3,21)]),
                },]
        }
    }
}
