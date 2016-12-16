var mongoose = require('mongoose');
var TvshowData = mongoose.model('TvshowData');

var sendJSONresponse = function(res, content) {
  res.json(content);
};


/*
module.exports.tvshowData = function(req, res) {
  console.log('Finding data');
    TvshowData
      .find()
      .exec(function(err, _x) {
        sendJSONres(res, _x);
      });
};

*/
//// SHOW DATA ////////////////////////////////////////////////////////////////
/* GET all ShowData records */
module.exports.showDataReadAll = function(req, res) {
    console.log("Finding all Tvshow Data Records", req);
    TvshowData
        .find({})
        .exec(function(err, tvshowData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(tvshowData);
            sendJSONresponse(res, tvshowData);
        });
}

/* GET ShowData by weight */
module.exports.showDataReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        TvshowData
            .find({
                weight: req.params.weight
            })
            .exec(function(err, tvshowData) {
                if (!tvshowData) {
                    sendJSONresponse(res, 404, {
                        "message": "Tvshow value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(tvshowData);
                sendJSONresponse(res, 200, tvshowData);
            });
    }
    else {
        console.log('No Tvshow value specified');
        sendJSONresponse(res, 404, {
            "message": "No Tvshow value in request"
        });
    }
};
