import React from 'react';

import Dialog from '../../components/Dialog';
import Style from './About.less';
import Common from './Common.less';

interface AboutProps {
    visible: boolean;
    onClose: () => void;
}

function About(props: AboutProps) {
    const { visible, onClose } = props;
    return (
        <Dialog className={Style.about} visible={visible} title="关于" onClose={onClose}>
            <div>
                <div className={Common.block}>
                    <p className={Common.title}>将Nie安装到主屏(PWA)</p>
                    <ul>
                        <li>地址栏输入: Chrome://flags</li>
                        <li>
                            搜索并启用以下项目: Desktop PWAs(桌面PWAs)、App
                            Banners(应用横幅)、Experimental App Banners(实验性应用横幅)
                        </li>
                        <li>重启浏览器使修改的设置生效</li>
                        <li>点击地址栏最右边按钮</li>
                        <li>选择&quot;安装 Nie&quot;</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>输入框快捷键</p>
                    <ul>
                        <li>Alt + S: 发送滑稽</li>
                        <li>Alt + D: 发送表情</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>命令消息</p>
                    <ul>
                        <li>-roll [number]: 掷点</li>
                        <li>-rps: 石头剪刀布</li>
                    </ul>
                </div>
                <div className={Common.block}>
                    <p className={Common.title}>友情链接</p>
                    <ul>
                        <li>
                            <a
                                href="https://nie.im/"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                免费VPN无限量使用
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Dialog>
    );
}

export default About;
