var videoLibrary = [];

var contestID = 1;

var indexController = {
	index: function(req, res) {
		res.render('index', {videos: videoLibrary});
	},

	createVideo: function(req, res) {
		// console.log((req.body.URL).split("v="))
		if(videoLibrary.length < 4){
			console.log(videoLibrary.length);
			videoLibrary.push({
				name: req.body.videoName,
				url: req.body.URL,
				title: req.body.Title,
				description: req.body.Description,
				votes: 0,
				slug: (req.body.URL).split("v=")[1],
				contestID: contestID++
			});
		}
		// console.log(videoLibrary.length);
		res.redirect('/submissions');

	},
	submissions: function(req, res) {
		res.render('submissions', {videos: videoLibrary});
	},

	vote: function(req, res) {
		for (var i = 0; i < videoLibrary.length; i++){
			if(videoLibrary[i].slug === req.params.slug){
				videoLibrary[i].votes++;
				break;
			}

		}
		console.log(videoLibrary);
		res.redirect('/submissions');
	}

};

module.exports = indexController;
