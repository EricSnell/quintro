"use strict";

var _                 = require('lodash');

var use_env = process.env.USE_ENVIRONMENT_CONFIG;

var appConfig = {};
var log4jsConfig = {};
var mongoConfig = {};
var websocketsConfig = {};
var credentialsConfig = {};

if (!use_env) {
	appConfig         = require('../../config/app');
	log4jsConfig      = require('../../config/log4js');
	mongoConfig       = require('../../config/mongo');
	websocketsConfig  = require('../../config/websockets');
	credentialsConfig = require('../../config/credentials');
}

exports = module.exports = {
	app: {
		environment: use_env ?
			process.env.ENVIRONMENT :
			appConfig.environment,

		secret: use_env ?
			process.env.APP_SECRET :
			appConfig.secret,

		logging: {
			format: use_env ?
				process.env.LOGGING_FORMAT :
				_.get(appConfig, 'logging.format')
		},

		session: {
			key: use_env ?
				process.env.SESSION_KEY :
				_.get(appConfig, 'session.key'),

			store: {
				url     : use_env ?
					process.env.SESSION_STORE_URL :
					_.get(appConfig, 'session.store.url'),

				host    : _.get(appConfig, 'session.store.host'),

				port    : _.get(appConfig, 'session.store.port'),

				username: _.get(appConfig, 'session.store.username'),

				password: _.get(appConfig, 'session.store.password'),

				database: _.get(appConfig, 'session.store.database'),
			}
		},

		address: {
			isSecure: use_env ?
				process.env.APP_ADDRESS_IS_SECURE :
				_.get(appConfig, 'address.isSecure'),

			host: use_env ?
				process.env.APP_ADDRESS_HOST :
				_.get(appConfig, 'address.host'),

			port: use_env ?
				process.env.APP_ADDRESS_PORT :
				_.get(appConfig, 'address.port'),

			externalPort: use_env ?
				process.env.APP_ADDRESS_EXTERNAL_PORT :
				_.get(appConfig, 'address.externalPort')
		}
	},

	log4js: use_env ?
		process.env.LOG4JS_CONFIG :
		log4jsConfig,

	mongo: {
		url: use_env ?
			process.env.DATA_DB_URI :
			mongoConfig.url,

		host: mongoConfig.host,

		port: mongoConfig.port,

		database: mongoConfig.database
	},

	websockets: {
		url: use_env ?
			process.env.WEB_SOCKETS_URI :
			websocketsConfig.url,

		domain: websocketsConfig.domain,

		port: websocketsConfig.port,

		path: websocketsConfig.path,

		externalPort: websocketsConfig.externalPort
	},

	paths: require('../../config/paths'),

	authentication: require('../../config/authentication'),

	credentials: {
		facebook: {
			appSecret: use_env ?
				process.env.CREDENTIALS_FACEBOOK_SECRET :
				_.get(credentialsConfig, 'facebook.appSecret'),

			appID: use_env ?
				process.env.CREDENTIALS_FACEBOOK_APPID :
				_.get(credentialsConfig, 'facebook.appID')
		},

		mongodb: {
			username: use_env ?
				process.env.CREDENTIALS_MONGO_USERNAME :
				_.get(credentialsConfig, 'mongodb.username'),

			password: use_env ?
				process.env.CREDENTIALS_MONGO_PASSWORD :
				_.get(credentialsConfig, 'mongodb.password')
		}
	},

	
};