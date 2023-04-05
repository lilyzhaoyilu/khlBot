import { AppCommand, AppFunc, BaseSession, TextMessage } from 'kbotify';

class ApexStreamers extends AppCommand {
  code = 's'; // 只是用作标记
  trigger = 's'; // 用于触发的文字
  help = '发送`.apex streamers`就可以啦~'; // 帮助文字
  intro = '什么时候会有intro';
  func: AppFunc<BaseSession> = async (session) => {
    return session.replyCard(constructStreamerCard());
  };
}

export const apexStreamers = new ApexStreamers();


const constructStreamerCard = () => (`[
  {
    "type": "card",
    "theme": "secondary",
    "size": "lg",
    "modules": [
      {
        "type": "header",
        "text": {
          "type": "plain-text",
          "content": "快速查询主播"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "kmarkdown",
          "content": "\`.apex 3mz\` 查询**一口三明治3Mz**的账号和直播间"
        },
        "mode": "left",
        "accessory": {
          "type": "image",
          "src": "https://apic.douyucdn.cn/upload/avatar_v3/202209/d5b9d408f15f44129094fe2c8d51e7ee_big.jpg",
          "size": "lg"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "kmarkdown",
          "content": "\`.apex pite\` 查询**皮特174**的账号和直播间"
        },
        "mode": "left",
        "accessory": {
          "type": "image",
          "src": "https://apic.douyucdn.cn/upload/avatar_v3/202107/573dc76d4d7e4994b6b55e1df28d72b0_big.jpg",
          "size": "lg"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "kmarkdown",
          "content": "\`.apex roieee\` 查询**百弟**的账号和直播间"
        },
        "mode": "left",
        "accessory": {
          "type": "image",
          "src": "https://apic.douyucdn.cn/upload/avatar_v3/202203/f08daf1b788643b791954ee6b5af50c7_big.jpg",
          "size": "lg"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "kmarkdown",
          "content": "\`.apex jacky\` 查询**Jacky**的账号和直播间"
        },
        "mode": "left",
        "accessory": {
          "type": "image",
          "src": "https://apic.douyucdn.cn/upload/avatar_v3/202107/e3170c90309547b5bb0bc38b8cae0a16_big.jpg",
          "size": "lg"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "kmarkdown",
          "content": "\`.apex kuku\` 查询**库库_sama**的账号和直播间"
        },
        "mode": "left",
        "accessory": {
          "type": "image",
          "src": "https://i2.hdslb.com/bfs/face/22c40d9f5569da64fc3a2a2c8e219fed38722c6d.jpg",
          "size": "lg"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "kmarkdown",
          "content": "\`.apex qq\` 查询**QQ**的账号和直播间"
        },
        "mode": "left",
        "accessory": {
          "type": "image",
          "src": "https://i1.hdslb.com/bfs/face/ac2c6d3112c9e97db9459ed89019c09b9b1bf431.jpg",
          "size": "lg"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "kmarkdown",
          "content": "\`.apex feiju\` 查询**飞天狙**的账号和直播间"
        },
        "mode": "left",
        "accessory": {
          "type": "image",
          "src": "https://i1.hdslb.com/bfs/face/6a63e73ed7a9c85744df88c3db6d866b7b6e9fe2.jpg",
          "size": "lg"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "kmarkdown",
          "content": "\`.apex laodiao\` 查询**老吊QuQ**的直播间 （嗯我也不知道他账号是啥"
        },
        "mode": "left",
        "accessory": {
          "type": "image",
          "src": "https://i1.hdslb.com/bfs/face/56aff59eb6a4ab68dbf1a029fa2161b912fcce48.jpg",
          "size": "lg"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "kmarkdown",
          "content": "\`.apex lizhi\` 查询**荔枝Kouun**的账号和直播间"
        },
        "mode": "left",
        "accessory": {
          "type": "image",
          "src": "https://i1.hdslb.com/bfs/face/d92ff20bf8c468e6f1fdf129fc75d81962989dd9.jpg",
          "size": "lg"
        }
      },
      {
        "type": "context",
        "elements": [
                   {
            "type": "image",
            "src": "https://img.kookapp.cn/assets/2023-01/BWDWRd1Pm2035035.png"
          },
          {
            "type": "plain-text",
            "content": "如果还有其他你想看到的主播，请私信狗头哦~"
          },
          {
            "type": "image",
            "src": "https://img.kookapp.cn/assets/2023-01/BWDWRd1Pm2035035.png"
          }
        ]
      }
    ]
  }
]`)

// https://img.kookapp.cn/assets/2023-01/BWDWRd1Pm2035035.png