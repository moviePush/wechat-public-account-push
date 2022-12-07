/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: 'TpHjp9ZqWlQZH02cfaP7TDA9lMxtCHMXfy7TlY9Ep0Y',
    title: '喝水小助手',
    desc: `
      崔老师,{{remind.DATA}}
    `
  },
  {
    id: '325-SUn1u2LvuD2nbNw16HkqDO_rNL2Eja4ngYbwYsY',
    title: '通知',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
