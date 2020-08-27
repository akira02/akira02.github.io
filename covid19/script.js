window.onload = function () {
  // Month Day, Year Hour:Minute:Second, id-of-element-container
  countUpFromTime("Jan 21, 2020 20:51:00", "time");
  fetch('https://covid2019-api.herokuapp.com/v2/country/Taiwan*')
  .then(response => response.json())
  .then((data) => {document.getElementById("twnum").innerHTML = data.data.confirmed;
                  document.getElementById("twdeadnum").innerHTML = data.data.deaths;})
  fetch('https://covid2019-api.herokuapp.com/v2/total')
  .then(response => response.json())
  .then((data) => {document.getElementById("worldnum").innerHTML = data.data.confirmed;
                  document.getElementById("worlddeadnum").innerHTML = data.data.deaths;})
  
};
function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
    countFrom = new Date(countFrom),
    timeDifference = now - countFrom;

  var secondsInADay = 60 * 60 * 1000 * 24,
    secondsInAHour = 60 * 60 * 1000;

  days = Math.floor((timeDifference / secondsInADay) * 1);

  hours = Math.floor(((timeDifference % secondsInADay) / secondsInAHour) * 1);
  mins = Math.floor(
    (((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
  );
  secs = Math.floor(
    ((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
      1000) *
      1
  );

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName("days")[0].innerHTML = days;
  idEl.getElementsByClassName("hours")[0].innerHTML = hours;
  idEl.getElementsByClassName("minutes")[0].innerHTML = mins;
  idEl.getElementsByClassName("seconds")[0].innerHTML = secs;

  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function () {
    countUpFromTime(countFrom, id);
  }, 1000);
}