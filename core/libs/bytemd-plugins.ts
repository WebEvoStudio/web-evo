import {BytemdPlugin} from 'bytemd';
import {Download} from '@mui/icons-material';

function isMarkdownImage(text: string) {
  // 正则表达式用于匹配 Markdown 图片格式 ![alt text](image url)
  const regex = /!\[.*\]\(.*\)/;

  // 使用正则表达式测试文本
  return regex.test(text);
}
function getMarkdownImageURL(text: string) {
  // 正则表达式用于匹配 Markdown 图片格式 ![alt text](image url)
  const regex = /!\[.*\]\((.*?)\)/;

  // 使用正则表达式提取图片 URL
  const match = regex.exec(text);
  if (match && match.length >= 2) {
    return match[1];
  } else {
    return null;
  }
}
const iconColor = '#9A9CA3';

export function imagePlugin(): BytemdPlugin {
  // eslint-disable-next-line max-len
  const icon = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-8-3v.551a3.5 3.5 0 1 1-.187 4.691C3.55 8.427 3.811 8 4.221 8c.176 0 .339.085.46.213A2.5 2.5 0 1 0 4.5 5H5.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0Z" fill="#9A9CA3"/><path d="M18.75 5.5h-5.826a6.451 6.451 0 0 0-.422-1.5h6.248A3.25 3.25 0 0 1 22 7.25v11.5A3.25 3.25 0 0 1 18.75 22H7.25A3.25 3.25 0 0 1 4 18.75v-6.248c.474.198.977.34 1.5.422v5.826c0 .208.036.408.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702c.067-.186.104-.386.104-.595V7.25a1.75 1.75 0 0 0-1.75-1.75Zm.58 14.901-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687c.182.064.378.099.582.099h11.5c.203 0 .399-.035.58-.099Z" fill="#9A9CA3"/><path d="M16.252 7.5a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504Zm0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504Z" fill="#9A9CA3"/></svg>`;
  return {
    actions: [
      {
        title: '将选择的图片转换为可控制大小',
        // eslint-disable-next-line max-len
        icon,
        handler: {
          type: 'action',
          click(ctx) {
            // editor.
            // console.log(ctx);
            const s = window.getSelection()?.toString();
            // console.log(s);
            // console.log(isMarkdownImage(s!));
            const imgUrl = getMarkdownImageURL(s!);
            // console.log(imgUrl);
            // ctx.appendBlock('222');
            imgUrl && ctx.appendBlock(`<featur>\n  <img width="100%" src="${imgUrl}">\n</featur>`);
          },
        },
      },
    ],
  };
}
