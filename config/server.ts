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
    qiniuAccessKey: options.qiniuAccessKey || env.QiniuAccessKey || 'TOKEN_32b75fd2-6890-41c0-8375-de401eb45b9d',
    qiniuSecretKey: options.qiniuSecretKey || env.QiniuSecretKey || 'b3178848-c4a1-4f68-a74c-caf314d4af27',
    qiniuBucket: options.qiniuBucket || env.QiniuBucket || 'nie',
    qiniuUrlPrefix: options.qiniuUrlPrefix || env.QiniuUrlPrefix || 'https://nie.cn-bj.ufileos.com/',

    allowOrigin: options.allowOrigin || env.AllowOrigin,

    // token expires time
    tokenExpiresTime: 1000 * 60 * 60 * 24 * 7,

    // administrator user id
    administrator: options.administrator || env.Administrator || '5db7a2e622096228e82ae069',

    // default group name
    defaultGroupName: 'fiora',
};
