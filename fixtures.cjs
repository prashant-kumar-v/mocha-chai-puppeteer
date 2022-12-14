const puppeteer = require('puppeteer');
const { launch } = require("./puppeteer.config");
const chai = require("chai");
global.expect = chai.expect;
global.puppeteer = puppeteer;

exports.mochaGlobalSetup = async function () {
    console.table(launch);
    const browser = await puppeteer.launch(launch);
    const page = await browser.newPage();
    global.browser = browser;
    global.page = page;
};

exports.mochaGlobalTeardown = async function () {
    // close the browser instance
    await browser.close();
};
