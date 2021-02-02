const config = {
    isLive: false,
    'UAT': {
        database: 'sms',
        username: 'aachyutan',
        password: 'Pwd10an2018',
        host: '192.168.1.101',
        dialect: 'mysql',
        },
    'LIVE': {
        database: 'sms',
        username: 'aachyutan',
        password: 'Pwd10an2018',
        host: '192.168.1.101',
    }
};

module.exports = config.isLive ? config.LIVE : config.UAT;