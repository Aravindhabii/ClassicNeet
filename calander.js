const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oAuth2client = new OAuth2(
  "319365280006-lpeunvgphpp1r91d6dlhapdcnm1j2ql5.apps.googleusercontent.com",
  "MAfy4PM1rbcVjy1hJdkym11c"
);

oAuth2client.setCredentials({
  refresh_tocken:
    "1//04F739fI69MAbCgYIARAAGAQSNgF-L9IrtTq8-MRF78LJVBtJCOR-1U6NDhrusXlOm0DZeKwZDuqalda74bfnnjla6OU6o6pgJA",
});

const calendar = google.calendar({ version: "v3", auth: oAuth2client });

const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDay() + 2);

const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay() + 2);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);

const event = {
  summary: "Classic neet meet",
  location:
    "84-B/5, Third Floor, S.S Complex (Ramesh Theatre Bus Stop),Trichy Road",
  description: "about the meeting in new class",
  start: {
    dateTime: eventStartTime,
    timezone: "America/Denver",
  },
  end: {
    dateTime: eventEndTime,
    timezone: "America/Denver",
  },
  colorId: 1,
};

calendar.
  freebusy.query(
    {
      resourse: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
        timezone: "America/Denver",
        items: [{ id: "primary" }],
      },
    },
    (err, res) => {
      if (err) return console.error("free busy error", err);

      const eventsArr = res.data.calendars.primary.busy;

      if (eventsArr.length === 0)
        return calendar.events.insert(
          { calendarId: "primary", resourse: event },
          (err) => {
            if (err) return console.error('calandar Event creation Error:', err)
            return console.log('Calendar event created')
          }
        );
        return console.log(`sorry i'am busy`);
    }
  );
