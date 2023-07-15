export const today = () => new Date();
export const todayYear = () => today().getFullYear();

export const dateToISO = (date: Date | string | undefined, time: boolean = false) => {
  if (date == null) {
    return "Not set";
  }
  if (typeof date != "string") {
    date = date.toISOString();
  }
  const isoString = date
  if (time) {
    return isoString;
  } else {
    return isoString.slice(0, 10);
  }
}

class CustomDate extends Date {
  constructor(date: Date) {
    super();
    this.setDate(date.getDate());
  }

  static today() {
    return new Date();
  }

  static toISO = (date: Date, time: boolean = false) => {
    dateToISO(date, time)
  }

  new() {

  }

  toISO = (time: boolean = false) => {
    dateToISO(this, time);
  }
}


