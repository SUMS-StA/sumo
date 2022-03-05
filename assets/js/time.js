
let offset = 0;
$.getJSON('https://worldtimeapi.org/api/timezone/GMT', function(data) {
    offset = data.unixtime - Math.floor(new Date().getTime()/1000);
});

console.log(offset);

setInterval(() => {
    update_time();
}, 1000);

update_time();

function update_time() {
    let date = new Date((offset + Math.floor(new Date().getTime()/1000))*1000);
    $("#time-display").html(date.toTimeString().split(' ')[0]);
    $("#clock-time").html(date.toTimeString().split(' ')[0]);

}