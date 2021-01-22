// import { infoPath } from '../utils/default';

const path = require('path')
const puppeteer = require('puppeteer');
// const puppeteer = require('puppeteer-core');

(async () => {
  //启动浏览器
  const browers = await puppeteer.launch();
  //启动新页面
  const page = await browers.newPage();
  //链接网址
  const url = `https://www.bilibili.com/`;
  const infoPath = path.resolve(__dirname, '../data')
  await page.goto(url);
  await page.screenshot({
    path: `${ infoPath }/${Date.now()}.png`
  });
  await browers.close();
})()