let moment = require('moment');
let fs = require('fs');
const Time = moment().hours() + ':' + moment().minutes() + ':' + moment().seconds();
console.log(`현재 시간은 ${Time} 입니다.`)
let txt = fs.readFileSync('date.txt');
console.log(txt);
let txt_Str = String(txt);
console.log(txt_Str);
fs.appendFile('date.txt', '\n'+Time, function (err) {
    if(err) throw err;
    console.log('The "data to append" was appended to file!');
});
let new_Txt_Str = fs.readFileSync('date.txt', 'utf-8');
console.log(new_Txt_Str);