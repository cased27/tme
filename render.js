const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const render = async (filename) => {
    const filePath = path.join(process.cwd(), filename);
    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously', //this is ok b/c only running my own JS code; otherwise it gives access to other users to your comp via Node
        resources: 'usable'
    });

    return new Promise((resolve, reject) => {
        dom.window.document.addEventListener('DOMContentLoaded', () => {
            resolve(dom);
        });
    })
};

module.exports = render;