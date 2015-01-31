var mongoose = require('mongoose');

var championDataSchema = new mongoose.Schema({
	role: String,
	key: String,
	general: [{
		title:String,
		val:String,
		position:Number,
		change:Number
	}],
	overallPosition: {
		position: Number, 
		change:Number
	},
	championMatrix:[Number],
	patchPlay:[Number],
	gameLength:[Number],
	patchWin:[Number],
	dmgComposition:{
		physicalDmg: Number,
		magicDmg: Number,
		trueDmg: Number
	},
	items:{
		mostGames: {
			items: [{
				id:Number,
				name:String,
				description:String
			}],
			games: Number,
			winPercent: Number
		},
		highestWinPercent: {
			items: [{
				id:Number,
				name:String,
				description:String
			}],
			games: Number,
			winPercent: Number
		}
	},
	firstItems:{
		mostGames: {
			items: [{
				id:Number,
				name:String,
				description:String
			}],
			games: Number,
			winPercent: Number
		},
		highestWinPercent: {
			items: [{
				id:Number,
				name:String,
				description:String
			}],
			games: Number,
			winPercent: Number
		}
	},
	summoners:{
		mostGames: {
			summoner1: {
				name:String,
				description: String,
				url: String
			},
			summoner2: {
				name:String,
				description: String,
				url: String
			},
			games: Number,
			winPercent: Number
		},
		highestWinPercent: {
			summoner1: {
				name:String,
				description: String,
				url: String
			},
			summoner2: {
				name:String,
				description: String,
				url: String
			},
			games: Number,
			winPercent: Number
		}
	},
	skills:{
		skillInfo: [{
			name: String,
			description: String,
			img: String,
			key: String
		}],
		mostGames: {
			order: [Number],
			games: Number,
			winPercent: Number
		},
		highestWinPercent: {
			order: [Number],
			games: Number,
			winPercent: Number
		}
	},
	masteries:{
		mostGames: {
			masteries: [{mastery:Number, points:Number}],
			games: Number,
			winPercent: Number
		},
		highestWinPercent: {
			masteries: [{mastery:Number, points:Number}],
			games: Number,
			winPercent: Number
		}
	},
	runes:{
		mostGames: {
			runes: [{
				id: Number,
				number: Number,
				name: String,
				img: String,
				description: String,
			}],
			games: Number,
			winPercent: Number
		},
		highestWinPercent: {
			runes: [{
				id: Number,
				number: Number,
				name: String,
				img: String,
				description: String,
			}],
			games: Number,
			winPercent: Number
		}
	},
	matchups:[{ // For all champions
		key:String,
		statScore:Number,
		games:Number,
		winRate:Number,
		winRateChange:Number
	}],
	adcsupport:[{ // only support/ad
		key:String,
		statScore:Number,
		games:Number,
		winRate:Number,
		winRateChange:Number
	}],
	synergy:[{ // only support/ad
		key:String,
		statScore:Number,
		games:Number,
		winRate:Number,
		winRateChange:Number
	}]
});

module.exports = mongoose.model('ChampionData', championDataSchema);