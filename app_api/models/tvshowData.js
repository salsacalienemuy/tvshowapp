var mongoose = require('mongoose');

var TvshowSchema = new mongoose.Schema({
	Title: String,
	Year: Number,
	Genre: String,
	Description: String,
});

mongoose.model('TvshowData', TvshowSchema, 'TvshowData');