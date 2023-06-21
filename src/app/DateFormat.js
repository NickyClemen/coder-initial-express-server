const { DateTime } = require('luxon');

class DateFormat {
  #currentTime;

  constructor() {
    this.#currentTime = DateTime.now().setZone('America/Buenos_Aires');
  }

  #timeStampToDate(timeStamp) {
    const millisecondsTimeStamp = timeStamp * 1000;
    return DateTime
      .fromMillis(millisecondsTimeStamp)
      .setZone('America/Buenos_Aires');
  }

  compareDate(timeStamp) {
    const castToDateTime = this.#timeStampToDate(timeStamp);
    return castToDateTime >= this.#currentTime;
  }
}

module.exports = new DateFormat();