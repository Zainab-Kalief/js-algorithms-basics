
function tellTheTime(hour,minute,period) {

  if (minute > 30 && period == 'AM'){
    hour += 1
    return 'it"s almost ' + hour + ' in the morning';
  } else if (minute < 30 && period == 'AM') {
    return 'it"s just ' + hour + ' in the morning';
  } else if (minute > 30 && period == 'PM') {
    hour += 1
    return 'it"s almost ' + hour + ' in the evening';
  } else {
      return 'it"s just ' + hour + ' in the evening';
  }

}
console.log(tellTheTime(7,50,'PM'));
