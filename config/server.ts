import ip from 'ip';
import options from '../utils/commandOptions';

const { env } = process;

export default {
    /** 服务端host, 默认为本机ip地址(可能会是局域网地址) */
    host: options.host || env.Host || ip.address(),

    // service port
    port: options.port || env.Port || 9200,

    // mongodb address
    database: options.database || env.Database || 'mongodb://localhost:27017/fiora',

    // jwt encryption secret
    jwtSecret: options.jwtSecret || env.JwtSecret || 'jwtSecret',

    // Maximize the number of groups
    maxGroupsCount: 3,

    // qiniu config
    qiniuAccessKey: options.qiniuAccessKey || env.QiniuAccessKey || 'OdEhVll-lLXcs3jveFgZhh1EWRZty1b_YQreapPU',
    qiniuSecretKey: options.qiniuSecretKey || env.QiniuSecretKey || '-1Hm9ty0zC3lKlc4cbZVTnoiifwQYj7OhAV-ODnB',
    qiniuBucket: options.qiniuBucket || env.QiniuBucket || 'liaotian',
    qiniuUrlPrefix: options.qiniuUrlPrefix || env.QiniuUrlPrefix || 'https://cdn.guaiwola.com/',

    allowOrigin: options.allowOrigin || env.AllowOrigin,

    // token expires time
    tokenExpiresTime: 1000 * 60 * 60 * 24 * 7,

    // administrator user id
    administrator: options.administrator || env.Administrator || '5db7a2e622096228e82ae069',

    // default group name
    defaultGroupName: 'fiora',
};
