// Type definitions for Google Apps Script 2023-10-28
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Calendar {
    /**
     * Represents a calendar that the user owns or is subscribed to.
     */
    interface Calendar {

      /**
       * Creates a new all-day event.
       *
       *
       *     // Creates an all-day event for the moon landing and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Apollo 11 Landing',
       *         new Date('July 20, 1969'));
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createAllDayEvent(String,Date)
       * @param title The title of the event.
       * @param date The date of the event (only the day is used; the time is ignored).
       */
      createAllDayEvent(title: string, date: Date): CalendarEvent;

      /**
       * Creates a new all-day event that can span multiple days.
       *
       *
       *     // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival',
       *         new Date('August 15, 1969'),
       *         new Date('August 18, 1969'));
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createAllDayEvent(String,Date,Date)
       * @param title The title of the event.
       * @param startDate The date when the event starts (only the day is used; the time is ignored).
       * @param endDate The date when the event ends (only the day is used; the time is ignored). The end date is exclusive.
       */
      createAllDayEvent(title: string, startDate: Date, endDate: Date): CalendarEvent;

      /**
       * Creates a new all-day event that can span multiple days.
       *
       *
       *     // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival',
       *         new Date('August 15, 1969'),
       *         new Date('August 18, 1969'),
       *         {location: 'Bethel, White Lake, New York, U.S.', sendInvites: true});
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createAllDayEvent(String,Date,Date,Object)
       * @param title The title of the event.
       * @param startDate The date when the event starts (only the day is used; the time is ignored).
       * @param endDate The date when the event ends (only the day is used; the time is ignored). The end date is exclusive.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      createAllDayEvent(title: string, startDate: Date, endDate: Date, options: any): CalendarEvent;

      /**
       * Creates a new all-day event.
       *
       *
       *     // Creates an all-day event for the moon landing and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Apollo 11 Landing',
       *         new Date('July 20, 1969'),
       *         {location: 'The Moon'});
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createAllDayEvent(String,Date,Object)
       * @param title The title of the event.
       * @param date The date of the event (only the day is used; the time is ignored).
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      createAllDayEvent(title: string, date: Date, options: any): CalendarEvent;

      /**
       * Creates a new all-day event series.
       *
       *
       *     // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
       *     var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries('No Meetings',
       *         new Date('January 2, 2013 03:00:00 PM EST'),
       *         CalendarApp.newRecurrence().addWeeklyRule()
       *             .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
       *             .until(new Date('January 1, 2014')));
       *     Logger.log('Event Series ID: ' + eventSeries.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createAllDayEventSeries(String,Date,EventRecurrence)
       * @param title the title of the events in the series
       * @param startDate the date of the first event in the series (only the day is used; the time is ignored)
       * @param recurrence the recurrence settings of the event series
       */
      createAllDayEventSeries(title: string, startDate: Date, recurrence: EventRecurrence): CalendarEventSeries;

      /**
       * Creates a new all-day event series.
       *
       *
       *     // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
       *     var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries('No Meetings',
       *         new Date('January 2, 2013 03:00:00 PM EST'),
       *         CalendarApp.newRecurrence().addWeeklyRule()
       *             .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
       *             .until(new Date('January 1, 2014')),
       *         {guests: 'everyone@example.com'});
       *     Logger.log('Event Series ID: ' + eventSeries.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createAllDayEventSeries(String,Date,EventRecurrence,Object)
       * @param title the title of the events in the series
       * @param startDate the date of the first event in the series (only the day is used; the time is ignored)
       * @param recurrence the recurrence settings of the event series
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createAllDayEventSeries(title: string, startDate: Date, recurrence: EventRecurrence, options: any): CalendarEventSeries;

      /**
       * Creates a new event.
       *
       *
       * If no time zone is specified, the time values are interpreted in the context of the script's
       * time zone, which may be different than the calendar's time zone.
       *
       *
       *     // Creates an event for the moon landing and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createEvent('Apollo 11 Landing',
       *         new Date('July 20, 1969 20:00:00 UTC'),
       *         new Date('July 21, 1969 21:00:00 UTC'));
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createEvent(String,Date,Date)
       * @param title the title of the event
       * @param startTime the date and time when the event starts
       * @param endTime the date and time when the event ends
       */
      createEvent(title: string, startTime: Date, endTime: Date): CalendarEvent;

      /**
       * Creates a new event.
       *
       *
       * If no time zone is specified, the time values are interpreted in the context of the script's
       * time zone, which may be different than the calendar's time zone.
       *
       *
       *     // Creates an event for the moon landing and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createEvent('Apollo 11 Landing',
       *         new Date('July 20, 1969 20:00:00 UTC'),
       *         new Date('July 20, 1969 21:00:00 UTC'),
       *         {location: 'The Moon'});
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createEvent(String,Date,Date,Object)
       * @param title the title of the event
       * @param startTime the date and time when the event starts
       * @param endTime the date and time when the event ends
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createEvent(title: string, startTime: Date, endTime: Date, options: any): CalendarEvent;

      /**
       * Creates an event from a free-form description.
       *
       *
       * The description should use the same format as the UI's "Quick Add" feature.
       *
       *
       *     // Creates a new event and logs its ID.
       *     var event = CalendarApp.getDefaultCalendar()
       *         .createEventFromDescription('Lunch with Mary, Friday at 1PM');
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createEventFromDescription(String)
       * @param description a free-form description of the event
       */
      createEventFromDescription(description: string): CalendarEvent;

      /**
       * Creates a new event series.
       *
       *
       *     // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
       *     var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries('Team Meeting',
       *         new Date('January 1, 2013 03:00:00 PM EST'),
       *         new Date('January 1, 2013 04:00:00 PM EST'),
       *         CalendarApp.newRecurrence().addWeeklyRule()
       *             .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
       *             .until(new Date('January 1, 2014')));
       *     Logger.log('Event Series ID: ' + eventSeries.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createEventSeries(String,Date,Date,EventRecurrence)
       * @param title the title of the events in the series
       * @param startTime the date and time when the first event in the series starts
       * @param endTime the date and time when the first event in the series ends
       * @param recurrence the recurrence settings of the event series
       */
      createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: EventRecurrence): CalendarEventSeries;

      /**
       * Creates a new event series.
       *
       *
       *     // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
       *     var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries('Team Meeting',
       *         new Date('January 1, 2013 03:00:00 PM EST'),
       *         new Date('January 1, 2013 04:00:00 PM EST'),
       *         CalendarApp.newRecurrence().addWeeklyRule()
       *             .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
       *             .until(new Date('January 1, 2014')),
       *         {location: 'Conference Room'});
       *     Logger.log('Event Series ID: ' + eventSeries.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createEventSeries(String,Date,Date,EventRecurrence,Object)
       * @param title the title of the events in the series
       * @param startTime the date and time when the first event in the series starts
       * @param endTime the date and time when the first event in the series ends
       * @param recurrence the recurrence settings of the event series
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: EventRecurrence, options: any): CalendarEventSeries;

      /**
       * Deletes the calendar permanently. A user can only delete a calendar they own.
       *
       *
       *     // Creates a calendar to delete.
       *     const calendar = CalendarApp.createCalendar('Test');
       *
       *     // Deletes the 'Test' calendar permanently.
       *     calendar.deleteCalendar();
       * https://developers.google.com/apps-script/reference/calendar/calendar#deleteCalendar()
       */
      deleteCalendar(): void;

      /**
       * Gets the color of the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Gets the color of the calendar and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.getColor() instead.
       *     const calendarColor = calendar.getColor();
       *     console.log(calendarColor);
       * https://developers.google.com/apps-script/reference/calendar/calendar#getColor()
       */
      getColor(): string;

      /**
       * Gets the description of the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Sets the description of the calendar to 'Test description.'
       *     calendar.setDescription('Test description');
       *
       *     // Gets the description of the calendar and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.getDescription() instead.
       *     const description = calendar.getDescription();
       *     console.log(description);
       * https://developers.google.com/apps-script/reference/calendar/calendar#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the event with the given ID. If the series belongs to a calendar other than the default
       * calendar, this method must be called from that calendar. Calling CalendarApp.getEventById(iCalId) only
       * returns an event in the default calendar.
       *
       *
       * Multiple events may have the same ID if they are part of an event series. In this case this
       * method returns only the first event from that series.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com')
       *
       *     // Creates an event for the moon landing.
       *     const event = calendar.createEvent('Apollo 11 Landing',
       *       new Date('July 20, 1969 20:05:00 UTC'),
       *       new Date('July 20, 1969 20:17:00 UTC'));
       *
       *     // Gets the calendar event ID and logs it to the console.
       *     const iCalId = event.getId();
       *     console.log(iCalId);
       *
       *     // Gets the event by its ID and logs the title of the event to the console.
       *     // For the default calendar, you can use CalendarApp.getEventById(iCalId) instead.
       *     const myEvent = calendar.getEventById(iCalId);
       *     console.log(myEvent.getTitle());
       * https://developers.google.com/apps-script/reference/calendar/calendar#getEventById(String)
       * @param iCalId ID of the event.
       */
      getEventById(iCalId: string): CalendarEvent;

      /**
       * Gets the event series with the given ID. If the ID given is for a single CalendarEvent,
       * then a CalendarEventSeries is returned with a single event in the series. Note that if
       * the event series belongs to a calendar other than the default calendar, this method must be
       * called from that Calendar; calling CalendarApp.getEventSeriesById(iCalId)
       * directly only returns an event series that exists in the default calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Creates an event series for a daily team meeting from 1 PM to 2 PM.
       *     // The series adds the daily event from January 1, 2023 through December 31, 2023.
       *     const eventSeries = calendar.createEventSeries('Team meeting',
       *       new Date('Jan 1, 2023 13:00:00'),
       *       new Date('Jan 1, 2023 14:00:00'),
       *       CalendarApp.newRecurrence().addDailyRule().until(new Date('Jan 1, 2024')));
       *
       *     // Gets the ID of the event series.
       *     const iCalId = eventSeries.getId();
       *
       *     // Gets the event series by its ID and logs the series title to the console.
       *     // For the default calendar, you can use CalendarApp.getEventSeriesById(iCalId) instead.
       *     console.log(calendar.getEventSeriesById(iCalId).getTitle());
       * https://developers.google.com/apps-script/reference/calendar/calendar#getEventSeriesById(String)
       * @param iCalId ID of the event series.
       */
      getEventSeriesById(iCalId: string): CalendarEventSeries;

      /**
       * Gets all events that occur within a given time range.
       *
       *
       * This method returns events that start during the given time range, end during the time
       * range, or encompass the time range. If no time zone is specified, the time values are
       * interpreted in the context of the script's time zone, which may be different from the
       * calendar's time zone.
       *
       *
       *     // Determines how many events are happening in the next two hours.
       *     var now = new Date();
       *     var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
       *     var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
       *     Logger.log('Number of events: ' + events.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar#getEvents(Date,Date)
       * @param startTime the start of the time range
       * @param endTime the end of the time range, non-inclusive
       */
      getEvents(startTime: Date, endTime: Date): CalendarEvent[];

      /**
       * Gets all events that occur within a given time range and meet the specified criteria.
       *
       *
       * This method returns events that start during the given time range, ends during the time
       * range, or encompasses the time range. If no time zone is specified, the time values are
       * interpreted in the context of the script's time zone, which may be different from the
       * calendar's time zone.
       *
       *
       * Be aware that filtering on author, search, or statusFilters takes
       * place after applying start and max. This means that the number of events
       * returned may be less than max, even though additional events meet the criteria.
       *
       *
       *     // Determines how many events are happening in the next two hours that contain the term
       *     // "meeting".
       *     var now = new Date();
       *     var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
       *     var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow,
       *         {search: 'meeting'});
       *     Logger.log('Number of events: ' + events.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar#getEvents(Date,Date,Object)
       * @param startTime the start of the time range
       * @param endTime the end of the time range, non-inclusive
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      getEvents(startTime: Date, endTime: Date, options: any): CalendarEvent[];

      /**
       * Gets all events that occur on a given day.
       *
       *
       * This method returns events if they start during the given day, end during the day, or
       * encompass the day.
       *
       *
       * Note that only the date portion of the Date object is used, and the time portion is ignored.
       * The date is interpreted as midnight that day to midnight the next day in the calendar's time
       * zone.
       *
       *
       *     // Determines how many events are happening today.
       *     var today = new Date();
       *     var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
       *     Logger.log('Number of events: ' + events.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar#getEventsForDay(Date)
       * @param date the date to retrieve events for (only the day is used; the time is ignored)
       */
      getEventsForDay(date: Date): CalendarEvent[];

      /**
       * Gets all events that occur on a given day and meet specified criteria.
       *
       *
       * This method returns events if they start during the given day, end during the day, or
       * encompass the day.
       *
       *
       * Note that only the date portion of the Date object is used, and the time portion is ignored.
       * The date is interpreted as midnight that day to midnight the next day in the calendar's time
       * zone.
       *
       *
       * Be aware that filtering on author, search, or statusFilters takes
       * place after applying start and max. This means that the number of events
       * returned may be less than max, even though additional events meet the criteria.
       *
       *
       *     // Determines how many events are happening today and contain the term "meeting".
       *     var today = new Date();
       *     var events = CalendarApp.getDefaultCalendar().getEventsForDay(today, {search: 'meeting'});
       *     Logger.log('Number of events: ' + events.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar#getEventsForDay(Date,Object)
       * @param date the date to retrieve events for (only the day is used; the time is ignored)
       * @param options advanced filtering options
       */
      getEventsForDay(date: Date, options: any): CalendarEvent[];

      /**
       * Gets the ID of the calendar. The ID for a user's default calendar is their email address.
       *
       *
       *     // Opens the calendar by its ID.
       *     // To get the user's default calendar, use CalendarApp.getDefaultCalendar().
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Gets the ID of the calendar and logs it to the console.
       *     const calendarId = calendar.getId();
       *     console.log(calendarId);
       * https://developers.google.com/apps-script/reference/calendar/calendar#getId()
       */
      getId(): string;

      /**
       * Gets the name of the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Gets the name of the calendar and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.getName() instead.
       *     const calendarName = calendar.getName();
       *     console.log(calendarName);
       * https://developers.google.com/apps-script/reference/calendar/calendar#getName()
       */
      getName(): string;

      /**
       * Gets the time zone of the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Gets the time zone of the calendar and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.getTimeZone() instead.
       *     const timeZone = calendar.getTimeZone();
       *     console.log(timeZone);
       * https://developers.google.com/apps-script/reference/calendar/calendar#getTimeZone()
       */
      getTimeZone(): string;

      /**
       * Determines whether the calendar is hidden in the user interface.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Determines whether the calendar is hidden in the user interface and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.isHidden() instead.
       *     const isHidden = calendar.isHidden();
       *     console.log(isHidden);
       * https://developers.google.com/apps-script/reference/calendar/calendar#isHidden()
       */
      isHidden(): boolean;

      /**
       * Determines whether the calendar is the primary calendar for the effective user.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Determines whether the calendar is the default calendar for
       *     // the effective user and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.isMyPrimaryCalendar() instead.
       *     const isMyPrimaryCalendar = calendar.isMyPrimaryCalendar();
       *     console.log(isMyPrimaryCalendar);
       * https://developers.google.com/apps-script/reference/calendar/calendar#isMyPrimaryCalendar()
       */
      isMyPrimaryCalendar(): boolean;

      /**
       * Determines whether the calendar is owned by you.
       *
       *
       *     // Gets a calendar by its ID. To get the user's default calendar, use
       *     // CalendarApp.getDefault() instead.
       *     // TODO(developer): Replace the ID with the calendar ID that you want to use.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Determines whether the calendar is owned by you and logs it.
       *     console.log(calendar.isOwnedByMe());
       * https://developers.google.com/apps-script/reference/calendar/calendar#isOwnedByMe()
       */
      isOwnedByMe(): boolean;

      /**
       * Determines whether the calendar's events are displayed in the user interface.
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Determines whether the calendar's events are displayed in the user interface and logs it.
       *     console.log(calendar.isSelected());
       * https://developers.google.com/apps-script/reference/calendar/calendar#isSelected()
       */
      isSelected(): boolean;

      /**
       * Sets the color of the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Sets the color of the calendar to pink using the Calendar Color enum.
       *     // For the default calendar, you can use CalendarApp.setColor() instead.
       *     calendar.setColor(CalendarApp.Color.PINK);
       * https://developers.google.com/apps-script/reference/calendar/calendar#setColor(String)
       * @param color A CalendarApp.Color or a hexadecimal color string ("#rrggbb").
       */
      setColor(color: string): Calendar;

      /**
       * Sets the description of a calendar.
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Sets the description of the calendar.
       *     // TODO(developer): Update the string with the description that you want to use.
       *     calendar.setDescription('Updated calendar description.')
       * https://developers.google.com/apps-script/reference/calendar/calendar#setDescription(String)
       * @param description the description of this calendar
       */
      setDescription(description: string): Calendar;

      /**
       * Sets whether the calendar is visible in the user interface.
       * https://developers.google.com/apps-script/reference/calendar/calendar#setHidden(Boolean)
       * @param hidden true to hide the calendar in the user interface; false to show it
       */
      setHidden(hidden: boolean): Calendar;

      /**
       * Sets the name of the calendar.
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Sets the name of the calendar.
       *     // TODO(developer): Update the string with the name that you want to use.
       *     calendar.setName('Example calendar name');
       * https://developers.google.com/apps-script/reference/calendar/calendar#setName(String)
       * @param name the new name
       */
      setName(name: string): Calendar;

      /**
       * Sets whether the calendar's events are displayed in the user interface.
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Selects the calendar so that its events are displayed in the user interface. To
       *     // unselect the calendar, set the parameter to false.
       *     calendar.setSelected(true);
       * https://developers.google.com/apps-script/reference/calendar/calendar#setSelected(Boolean)
       * @param selected true to show the calendar's events in the user interface; false to hide them
       */
      setSelected(selected: boolean): Calendar;

      /**
       * Sets the time zone of the calendar.
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Sets the time zone of the calendar to America/New York (US/Eastern) time.
       *     calendar.setTimeZone('America/New_York');
       * https://developers.google.com/apps-script/reference/calendar/calendar#setTimeZone(String)
       * @param timeZone The time zone, specified in "long" format (such as "America/New_York", as listed by Joda.org).
       */
      setTimeZone(timeZone: string): Calendar;

      /**
       * Unsubscribes the user from a calendar. A user can't unsubscribe from calendars listed under the
       * My calendars list. They can unsubscribe from calendars listed under Other
       * calendars.
       *
       *
       *     // Gets the calendar by its ID.
       *     // TODO(developer): Replace the calendar ID with the calendar ID that you want to get.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Unsubscribes the user from the calendar.
       *     const result = calendar.unsubscribeFromCalendar();
       * https://developers.google.com/apps-script/reference/calendar/calendar#unsubscribeFromCalendar()
       */
      unsubscribeFromCalendar(): void;
    }
    /**
     * Allows a script to read and update the user's Google Calendar. This class provides direct access
     * to the user's default calendar, as well as the ability to retrieve additional calendars that the
     * user owns or is subscribed to.
     */
    interface CalendarApp {
      Color: typeof Color;
      EventColor: typeof EventColor;
      GuestStatus: typeof GuestStatus;
      Month: typeof Base.Month;
      Visibility: typeof Visibility;
      Weekday: typeof Base.Weekday;

      /**
       * Creates a new all-day event.
       *
       *
       *     // Creates an all-day event for the moon landing and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Apollo 11 Landing',
       *         new Date('July 20, 1969'));
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createAllDayEvent(String,Date)
       * @param title The title of the event.
       * @param date The date of the event (only the day is used; the time is ignored).
       */
      createAllDayEvent(title: string, date: Date): CalendarEvent;

      /**
       * Creates a new all-day event that can span multiple days.
       *
       *
       *     // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival',
       *         new Date('August 15, 1969'),
       *         new Date('August 18, 1969'));
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createAllDayEvent(String,Date,Date)
       * @param title The title of the event.
       * @param startDate The date when the event starts (only the day is used; the time is ignored).
       * @param endDate The date when the event ends (only the day is used; the time is ignored). The end date is exclusive.
       */
      createAllDayEvent(title: string, startDate: Date, endDate: Date): CalendarEvent;

      /**
       * Creates a new all-day event that can span multiple days.
       *
       *
       *     // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival',
       *         new Date('August 15, 1969'),
       *         new Date('August 18, 1969'),
       *         {location: 'Bethel, White Lake, New York, U.S.', sendInvites: true});
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createAllDayEvent(String,Date,Date,Object)
       * @param title The title of the event.
       * @param startDate The date when the event starts (only the day is used; the time is ignored).
       * @param endDate The date when the event ends (only the day is used; the time is ignored). The end date is exclusive.
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      createAllDayEvent(title: string, startDate: Date, endDate: Date, options: any): CalendarEvent;

      /**
       * Creates a new all-day event.
       *
       *
       *     // Creates an all-day event for the moon landing and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Apollo 11 Landing',
       *         new Date('July 20, 1969'),
       *         {location: 'The Moon'});
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createAllDayEvent(String,Date,Object)
       * @param title The title of the event.
       * @param date The date of the event (only the day is used; the time is ignored).
       * @param options A JavaScript object that specifies advanced parameters, as listed below.
       */
      createAllDayEvent(title: string, date: Date, options: any): CalendarEvent;

      /**
       * Creates a new all-day event series.
       *
       *
       *     // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
       *     var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries('No Meetings',
       *         new Date('January 2, 2013 03:00:00 PM EST'),
       *         CalendarApp.newRecurrence().addWeeklyRule()
       *             .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
       *             .until(new Date('January 1, 2014')));
       *     Logger.log('Event Series ID: ' + eventSeries.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createAllDayEventSeries(String,Date,EventRecurrence)
       * @param title the title of the events in the series
       * @param startDate the date of the first event in the series (only the day is used; the time is ignored)
       * @param recurrence the recurrence settings of the event series
       */
      createAllDayEventSeries(title: string, startDate: Date, recurrence: EventRecurrence): CalendarEventSeries;

      /**
       * Creates a new all-day event series.
       *
       *
       *     // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
       *     var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries('No Meetings',
       *         new Date('January 2, 2013 03:00:00 PM EST'),
       *         CalendarApp.newRecurrence().addWeeklyRule()
       *             .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
       *             .until(new Date('January 1, 2014')),
       *         {guests: 'everyone@example.com'});
       *     Logger.log('Event Series ID: ' + eventSeries.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createAllDayEventSeries(String,Date,EventRecurrence,Object)
       * @param title the title of the events in the series
       * @param startDate the date of the first event in the series (only the day is used; the time is ignored)
       * @param recurrence the recurrence settings of the event series
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createAllDayEventSeries(title: string, startDate: Date, recurrence: EventRecurrence, options: any): CalendarEventSeries;

      /**
       * Creates a new calendar, owned by the user.
       *
       *
       *     // Creates a new calendar named "Travel Plans".
       *     var calendar = CalendarApp.createCalendar('Travel Plans');
       *     Logger.log('Created the calendar "%s", with the ID "%s".',
       *         calendar.getName(), calendar.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createCalendar(String)
       * @param name the name of the new calendar
       */
      createCalendar(name: string): Calendar;

      /**
       * Creates a new calendar, owned by the user.
       *
       *
       *     // Creates a new calendar named "Travel Plans" with a summary and color.
       *     var calendar = CalendarApp.createCalendar('Travel Plans', {
       *       summary: 'A calendar to plan my travel schedule.',
       *       color: CalendarApp.Color.BLUE
       *     });
       *     Logger.log('Created the calendar "%s", with the ID "%s".',
       *         calendar.getName(), calendar.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createCalendar(String,Object)
       * @param name the name of the new calendar
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createCalendar(name: string, options: any): Calendar;

      /**
       * Creates a new event.
       *
       *
       * If no time zone is specified, the time values are interpreted in the context of the script's
       * time zone, which may be different than the calendar's time zone.
       *
       *
       *     // Creates an event for the moon landing and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createEvent('Apollo 11 Landing',
       *         new Date('July 20, 1969 20:00:00 UTC'),
       *         new Date('July 21, 1969 21:00:00 UTC'));
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createEvent(String,Date,Date)
       * @param title the title of the event
       * @param startTime the date and time when the event starts
       * @param endTime the date and time when the event ends
       */
      createEvent(title: string, startTime: Date, endTime: Date): CalendarEvent;

      /**
       * Creates a new event.
       *
       *
       * If no time zone is specified, the time values are interpreted in the context of the script's
       * time zone, which may be different than the calendar's time zone.
       *
       *
       *     // Creates an event for the moon landing and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createEvent('Apollo 11 Landing',
       *         new Date('July 20, 1969 20:00:00 UTC'),
       *         new Date('July 20, 1969 21:00:00 UTC'),
       *         {location: 'The Moon'});
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createEvent(String,Date,Date,Object)
       * @param title the title of the event
       * @param startTime the date and time when the event starts
       * @param endTime the date and time when the event ends
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createEvent(title: string, startTime: Date, endTime: Date, options: any): CalendarEvent;

      /**
       * Creates an event from a free-form description.
       *
       *
       * The description should use the same format as the UI's "Quick Add" feature.
       *
       *
       *     // Creates a new event and logs its ID.
       *     var event = CalendarApp.getDefaultCalendar()
       *         .createEventFromDescription('Lunch with Mary, Friday at 1PM');
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createEventFromDescription(String)
       * @param description a free-form description of the event
       */
      createEventFromDescription(description: string): CalendarEvent;

      /**
       * Creates a new event series.
       *
       *
       *     // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
       *     var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries('Team Meeting',
       *         new Date('January 1, 2013 03:00:00 PM EST'),
       *         new Date('January 1, 2013 04:00:00 PM EST'),
       *         CalendarApp.newRecurrence().addWeeklyRule()
       *             .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
       *             .until(new Date('January 1, 2014')));
       *     Logger.log('Event Series ID: ' + eventSeries.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createEventSeries(String,Date,Date,EventRecurrence)
       * @param title the title of the events in the series
       * @param startTime the date and time when the first event in the series starts
       * @param endTime the date and time when the first event in the series ends
       * @param recurrence the recurrence settings of the event series
       */
      createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: EventRecurrence): CalendarEventSeries;

      /**
       * Creates a new event series.
       *
       *
       *     // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
       *     var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries('Team Meeting',
       *         new Date('January 1, 2013 03:00:00 PM EST'),
       *         new Date('January 1, 2013 04:00:00 PM EST'),
       *         CalendarApp.newRecurrence().addWeeklyRule()
       *             .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
       *             .until(new Date('January 1, 2014')),
       *         {location: 'Conference Room'});
       *     Logger.log('Event Series ID: ' + eventSeries.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createEventSeries(String,Date,Date,EventRecurrence,Object)
       * @param title the title of the events in the series
       * @param startTime the date and time when the first event in the series starts
       * @param endTime the date and time when the first event in the series ends
       * @param recurrence the recurrence settings of the event series
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: EventRecurrence, options: any): CalendarEventSeries;

      /**
       * Gets all calendars that the user owns or is subscribed to.
       *
       *
       *     // Determines how many calendars the user can access.
       *     var calendars = CalendarApp.getAllCalendars();
       *     Logger.log('This user owns or is subscribed to %s calendars.',
       *         calendars.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getAllCalendars()
       */
      getAllCalendars(): Calendar[];

      /**
       * Gets all calendars that the user owns.
       *
       *
       *     // Determines how many calendars the user owns.
       *     var calendars = CalendarApp.getAllOwnedCalendars();
       *     Logger.log('This user owns %s calendars.', calendars.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getAllOwnedCalendars()
       */
      getAllOwnedCalendars(): Calendar[];

      /**
       * Gets the calendar with the given ID.
       *
       *
       *     // Gets the public calendar "US Holidays" by ID.
       *     var calendar = CalendarApp.getCalendarById(
       *         'en.usa#holiday@group.v.calendar.google.com');
       *     Logger.log('The calendar is named "%s".', calendar.getName());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getCalendarById(String)
       * @param id the calendar ID
       */
      getCalendarById(id: string): Calendar;

      /**
       * Gets all calendars with a given name that the user owns or is subscribed to. Names are not
       * case-sensitive.
       *
       *
       *     // Gets the public calendar named "US Holidays".
       *     var calendars = CalendarApp.getCalendarsByName('US Holidays');
       *     Logger.log('Found %s matching calendars.', calendars.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getCalendarsByName(String)
       * @param name the calendar name
       */
      getCalendarsByName(name: string): Calendar[];

      /**
       * Gets the color of the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Gets the color of the calendar and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.getColor() instead.
       *     const calendarColor = calendar.getColor();
       *     console.log(calendarColor);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getColor()
       */
      getColor(): string;

      /**
       * Gets the user's default calendar.
       *
       *
       *     // Determines the time zone of the user's default calendar.
       *     var calendar = CalendarApp.getDefaultCalendar();
       *     Logger.log('My default calendar is set to the time zone "%s".',
       *         calendar.getTimeZone());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getDefaultCalendar()
       */
      getDefaultCalendar(): Calendar;

      /**
       * Gets the description of the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Sets the description of the calendar to 'Test description.'
       *     calendar.setDescription('Test description');
       *
       *     // Gets the description of the calendar and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.getDescription() instead.
       *     const description = calendar.getDescription();
       *     console.log(description);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the event with the given ID. If the series belongs to a calendar other than the default
       * calendar, this method must be called from that calendar. Calling getEventById(iCalId) only
       * returns an event in the default calendar.
       *
       *
       * Multiple events may have the same ID if they are part of an event series. In this case this
       * method returns only the first event from that series.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com')
       *
       *     // Creates an event for the moon landing.
       *     const event = calendar.createEvent('Apollo 11 Landing',
       *       new Date('July 20, 1969 20:05:00 UTC'),
       *       new Date('July 20, 1969 20:17:00 UTC'));
       *
       *     // Gets the calendar event ID and logs it to the console.
       *     const iCalId = event.getId();
       *     console.log(iCalId);
       *
       *     // Gets the event by its ID and logs the title of the event to the console.
       *     // For the default calendar, you can use CalendarApp.getEventById(iCalId) instead.
       *     const myEvent = calendar.getEventById(iCalId);
       *     console.log(myEvent.getTitle());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getEventById(String)
       * @param iCalId ID of the event.
       */
      getEventById(iCalId: string): CalendarEvent;

      /**
       * Gets the event series with the given ID. If the ID given is for a single CalendarEvent,
       * then a CalendarEventSeries is returned with a single event in the series. Note that if
       * the event series belongs to a calendar other than the default calendar, this method must be
       * called from that CalendarApp; calling getEventSeriesById(iCalId)
       * directly only returns an event series that exists in the default calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Creates an event series for a daily team meeting from 1 PM to 2 PM.
       *     // The series adds the daily event from January 1, 2023 through December 31, 2023.
       *     const eventSeries = calendar.createEventSeries('Team meeting',
       *       new Date('Jan 1, 2023 13:00:00'),
       *       new Date('Jan 1, 2023 14:00:00'),
       *       CalendarApp.newRecurrence().addDailyRule().until(new Date('Jan 1, 2024')));
       *
       *     // Gets the ID of the event series.
       *     const iCalId = eventSeries.getId();
       *
       *     // Gets the event series by its ID and logs the series title to the console.
       *     // For the default calendar, you can use CalendarApp.getEventSeriesById(iCalId) instead.
       *     console.log(calendar.getEventSeriesById(iCalId).getTitle());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getEventSeriesById(String)
       * @param iCalId ID of the event series.
       */
      getEventSeriesById(iCalId: string): CalendarEventSeries;

      /**
       * Gets all events that occur within a given time range.
       *
       *
       * This method returns events that start during the given time range, end during the time
       * range, or encompass the time range. If no time zone is specified, the time values are
       * interpreted in the context of the script's time zone, which may be different from the
       * calendar's time zone.
       *
       *
       *     // Determines how many events are happening in the next two hours.
       *     var now = new Date();
       *     var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
       *     var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
       *     Logger.log('Number of events: ' + events.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getEvents(Date,Date)
       * @param startTime the start of the time range
       * @param endTime the end of the time range, non-inclusive
       */
      getEvents(startTime: Date, endTime: Date): CalendarEvent[];

      /**
       * Gets all events that occur within a given time range and meet the specified criteria.
       *
       *
       * This method returns events that start during the given time range, ends during the time
       * range, or encompasses the time range. If no time zone is specified, the time values are
       * interpreted in the context of the script's time zone, which may be different from the
       * calendar's time zone.
       *
       *
       * Be aware that filtering on author, search, or statusFilters takes
       * place after applying start and max. This means that the number of events
       * returned may be less than max, even though additional events meet the criteria.
       *
       *
       *     // Determines how many events are happening in the next two hours that contain the term
       *     // "meeting".
       *     var now = new Date();
       *     var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
       *     var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow,
       *         {search: 'meeting'});
       *     Logger.log('Number of events: ' + events.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getEvents(Date,Date,Object)
       * @param startTime the start of the time range
       * @param endTime the end of the time range, non-inclusive
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      getEvents(startTime: Date, endTime: Date, options: any): CalendarEvent[];

      /**
       * Gets all events that occur on a given day.
       *
       *
       * This method returns events if they start during the given day, end during the day, or
       * encompass the day.
       *
       *
       * Note that only the date portion of the Date object is used, and the time portion is ignored.
       * The date is interpreted as midnight that day to midnight the next day in the calendar's time
       * zone.
       *
       *
       *     // Determines how many events are happening today.
       *     var today = new Date();
       *     var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
       *     Logger.log('Number of events: ' + events.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getEventsForDay(Date)
       * @param date the date to retrieve events for (only the day is used; the time is ignored)
       */
      getEventsForDay(date: Date): CalendarEvent[];

      /**
       * Gets all events that occur on a given day and meet specified criteria.
       *
       *
       * This method returns events if they start during the given day, end during the day, or
       * encompass the day.
       *
       *
       * Note that only the date portion of the Date object is used, and the time portion is ignored.
       * The date is interpreted as midnight that day to midnight the next day in the calendar's time
       * zone.
       *
       *
       * Be aware that filtering on author, search, or statusFilters takes
       * place after applying start and max. This means that the number of events
       * returned may be less than max, even though additional events meet the criteria.
       *
       *
       *     // Determines how many events are happening today and contain the term "meeting".
       *     var today = new Date();
       *     var events = CalendarApp.getDefaultCalendar().getEventsForDay(today, {search: 'meeting'});
       *     Logger.log('Number of events: ' + events.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getEventsForDay(Date,Object)
       * @param date the date to retrieve events for (only the day is used; the time is ignored)
       * @param options advanced filtering options
       */
      getEventsForDay(date: Date, options: any): CalendarEvent[];

      /**
       * Gets the ID of the calendar. The ID for a user's default calendar is their email address.
       *
       *
       *     // Opens the calendar by its ID.
       *     // To get the user's default calendar, use CalendarApp.getDefaultCalendar().
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Gets the ID of the calendar and logs it to the console.
       *     const calendarId = calendar.getId();
       *     console.log(calendarId);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getId()
       */
      getId(): string;

      /**
       * Gets the name of the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Gets the name of the calendar and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.getName() instead.
       *     const calendarName = calendar.getName();
       *     console.log(calendarName);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getName()
       */
      getName(): string;

      /**
       * Gets the calendar with the given ID, if the user owns it.
       *
       *
       * To find a calendar ID, click the arrow next to the calendar's name in Google Calendar and
       * select Calendar settings. The ID is shown near the bottom of the settings
       * page.
       *
       *
       *     // Gets a (non-existent) private calendar by ID.
       *     var calendar = CalendarApp.getOwnedCalendarById(
       *         '123456789@group.calendar.google.com');
       *     Logger.log('The calendar is named "%s".', calendar.getName());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getOwnedCalendarById(String)
       * @param id the calendar id
       */
      getOwnedCalendarById(id: string): Calendar;

      /**
       * Gets all calendars with a given name that the user owns. Names are not case-sensitive.
       *
       *
       *     // Gets a private calendar named "Travel Plans".
       *     var calendars = CalendarApp.getOwnedCalendarsByName('Travel Plans');
       *     Logger.log('Found %s matching calendars.', calendars.length);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getOwnedCalendarsByName(String)
       * @param name the calendar name
       */
      getOwnedCalendarsByName(name: string): Calendar[];

      /**
       * Gets the time zone of the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Gets the time zone of the calendar and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.getTimeZone() instead.
       *     const timeZone = calendar.getTimeZone();
       *     console.log(timeZone);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getTimeZone()
       */
      getTimeZone(): string;

      /**
       * Determines whether the calendar is hidden in the user interface.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Determines whether the calendar is hidden in the user interface and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.isHidden() instead.
       *     const isHidden = calendar.isHidden();
       *     console.log(isHidden);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#isHidden()
       */
      isHidden(): boolean;

      /**
       * Determines whether the calendar is the primary calendar for the effective user.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Determines whether the calendar is the default calendar for
       *     // the effective user and logs it to the console.
       *     // For the default calendar, you can use CalendarApp.isMyPrimaryCalendar() instead.
       *     const isMyPrimaryCalendar = calendar.isMyPrimaryCalendar();
       *     console.log(isMyPrimaryCalendar);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#isMyPrimaryCalendar()
       */
      isMyPrimaryCalendar(): boolean;

      /**
       * Determines whether the calendar is owned by you.
       *
       *
       *     // Gets a calendar by its ID. To get the user's default calendar, use
       *     // CalendarApp.getDefault() instead.
       *     // TODO(developer): Replace the ID with the calendar ID that you want to use.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Determines whether the calendar is owned by you and logs it.
       *     console.log(calendar.isOwnedByMe());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#isOwnedByMe()
       */
      isOwnedByMe(): boolean;

      /**
       * Determines whether the calendar's events are displayed in the user interface.
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Determines whether the calendar's events are displayed in the user interface and logs it.
       *     console.log(calendar.isSelected());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#isSelected()
       */
      isSelected(): boolean;

      /**
       * Creates a new recurrence object, which can be used to create rules for event recurrence.
       *
       *
       *     // Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
       *     var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
       *         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
       *         .until(new Date('January 1, 2014'));
       *     var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries('No Meetings',
       *         new Date('January 2, 2013 03:00:00 PM EST'),
       *         recurrence);
       *     Logger.log('Event Series ID: ' + eventSeries.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#newRecurrence()
       */
      newRecurrence(): EventRecurrence;

      /**
       * Sets the color of the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');
       *
       *     // Sets the color of the calendar to pink using the Calendar Color enum.
       *     // For the default calendar, you can use CalendarApp.setColor() instead.
       *     calendar.setColor(CalendarApp.Color.PINK);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#setColor(String)
       * @param color A CalendarApp.Color or a hexadecimal color string ("#rrggbb").
       */
      setColor(color: string): Calendar;

      /**
       * Sets the description of a calendar.
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Sets the description of the calendar.
       *     // TODO(developer): Update the string with the description that you want to use.
       *     calendar.setDescription('Updated calendar description.')
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#setDescription(String)
       * @param description the description of this calendar
       */
      setDescription(description: string): Calendar;

      /**
       * Sets whether the calendar is visible in the user interface.
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#setHidden(Boolean)
       * @param hidden true to hide the calendar in the user interface; false to show it
       */
      setHidden(hidden: boolean): Calendar;

      /**
       * Sets the name of the calendar.
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Sets the name of the calendar.
       *     // TODO(developer): Update the string with the name that you want to use.
       *     calendar.setName('Example calendar name');
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#setName(String)
       * @param name the new name
       */
      setName(name: string): Calendar;

      /**
       * Sets whether the calendar's events are displayed in the user interface.
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Selects the calendar so that its events are displayed in the user interface. To
       *     // unselect the calendar, set the parameter to false.
       *     calendar.setSelected(true);
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#setSelected(Boolean)
       * @param selected true to show the calendar's events in the user interface; false to hide them
       */
      setSelected(selected: boolean): Calendar;

      /**
       * Sets the time zone of the calendar.
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Sets the time zone of the calendar to America/New York (US/Eastern) time.
       *     calendar.setTimeZone('America/New_York');
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#setTimeZone(String)
       * @param timeZone The time zone, specified in "long" format (such as "America/New_York", as listed by Joda.org).
       */
      setTimeZone(timeZone: string): Calendar;

      /**
       * Subscribes the user to the calendar with the given ID, if the user is allowed to subscribe.
       *
       *
       *     // Subscribe to the calendar "US Holidays".
       *     var calendar = CalendarApp.subscribeToCalendar(
       *         'en.usa#holiday@group.v.calendar.google.com');
       *     Logger.log('Subscribed to the calendar "%s".', calendar.getName());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#subscribeToCalendar(String)
       * @param id the ID of the calendar to subscribe to
       */
      subscribeToCalendar(id: string): Calendar;

      /**
       * Subscribes the user to the calendar with the given ID, if the user is allowed to subscribe.
       *
       *
       *     // Subscribe to the calendar "US Holidays", and set it to the color blue.
       *     var calendar = CalendarApp.subscribeToCalendar(
       *         'en.usa#holiday@group.v.calendar.google.com',
       *         { color: CalendarApp.Color.BLUE });
       *     Logger.log('Subscribed to the calendar "%s".', calendar.getName());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#subscribeToCalendar(String,Object)
       * @param id the ID of the calendar to subscribe to
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      subscribeToCalendar(id: string, options: any): Calendar;
    }
    /**
     * Represents a single calendar event.
     */
    interface CalendarEvent {

      /**
       * Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most 4
       * weeks (40320 minutes), before the event.
       *
       *
       *     // Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
       *     // TODO(developer): Replace the string with the event ID that you want to get.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Adds an email notification for 15 minutes before the event.
       *     event.addEmailReminder(15);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#addEmailReminder(Integer)
       * @param minutesBefore the number of minutes before the event
       */
      addEmailReminder(minutesBefore: Integer): CalendarEvent;

      /**
       * Adds a guest to the event.
       *
       *
       *     // Example 1: Add a guest to one event
       *     function addAttendeeToEvent() {
       *       // Replace the below values with your own
       *       let attendeeEmail = 'user@example.com'; // Email address of the person you need to add
       *       let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar containing event
       *       let eventId = '123abc'; // ID of event instance
       *
       *       let calendar = CalendarApp.getCalendarById(calendarId);
       *       if (calendar === null) {
       *         // Calendar not found
       *         console.log('Calendar not found', calendarId);
       *         return;
       *         }
       *       let event = calendar.getEventById(eventId);
       *       if (event === null) {
       *         // Event not found
       *         console.log('Event not found', eventId);
       *         return;
       *         }
       *       event.addGuest(attendeeEmail);
       *       }
       *
       *     // Example 2: Add a guest to all events on a calendar within a specified timeframe
       *     function addAttendeeToAllEvents(){
       *     // Replace the following values with your own
       *       let attendeeEmail = 'user@example.com'; // Email address of the person you need to add
       *       let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar with the events
       *       let startDate = new Date("YYYY-MM-DD"); // The first date to add the guest to the events
       *       let endDate = new Date("YYYY-MM-DD"); // The last date to add the guest to the events
       *
       *       let calendar = CalendarApp.getCalendarById(calendarId);
       *         if (calendar === null) {
       *         // Calendar not found
       *         console.log('Calendar not found', calendarId);
       *         return;
       *       }
       *       // Get the events within the specified timeframe
       *       let calEvents = calendar.getEvents(startDate,endDate);
       *       console.log(calEvents.length); // Checks how many events are found
       *       // Loop through all events and add the attendee to each of them
       *       for (var i = 0; i < calEvents.length; i++) {
       *       let event = calEvents[i];
       *       event.addGuest(attendeeEmail);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#addGuest(String)
       * @param email The email address of the guest.
       */
      addGuest(email: string): CalendarEvent;

      /**
       * Adds a new pop-up notification to the event. The notification must be at least 5 minutes, and
       * at most 4 weeks (40320 minutes), before the event.
       *
       *
       *     // Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
       *     // TODO(developer): Replace the string with the event ID that you want to get.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Adds a pop-up notification for 15 minutes before the event.
       *     event.addPopupReminder(15);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#addPopupReminder(Integer)
       * @param minutesBefore the number of minutes before the event
       */
      addPopupReminder(minutesBefore: Integer): CalendarEvent;

      /**
       * Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most 4
       * weeks (40320 minutes), before the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#addSmsReminder(Integer)
       * @param minutesBefore the number of minutes before the event
       */
      addSmsReminder(minutesBefore: Integer): CalendarEvent;

      /**
       * Determines whether people can add themselves as guests to a Calendar event.
       *
       *
       *     // Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
       *     // TODO(developer): Replace the string with the event ID that you want to get.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Determines whether people can add themselves as guests to the event and logs it.
       *     console.log(event.anyoneCanAddSelf());
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#anyoneCanAddSelf()
       */
      anyoneCanAddSelf(): boolean;

      /**
       * Deletes a Calendar event.
       *
       *
       *     // Gets an event by its ID.
       *     // TODO(developer): Replace the string with the ID of the event that you want to delete.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Deletes the event.
       *     event.deleteEvent();
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#deleteEvent()
       */
      deleteEvent(): void;

      /**
       * Deletes a key/value tag from the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#deleteTag(String)
       * @param key the tag key
       */
      deleteTag(key: string): CalendarEvent;

      /**
       * Gets the date on which this all-day calendar event ends. (If this is not an all-day event, then
       * this method throws an exception.) The returned Date represents midnight at the
       * beginning of the day after the event ends in the script's time zone. To use the
       * calendar's time zone instead, call getEndTime().
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Creates an event named 'My all-day event' for May 16, 2023.
       *     const event = calendar.createAllDayEvent('My all-day event', new Date('May 16, 2023'));
       *
       *     // Gets the event's end date and logs it.
       *     const endDate = event.getAllDayEndDate();
       *     console.log(endDate);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getAllDayEndDate()
       */
      getAllDayEndDate(): Date;

      /**
       * Gets the date on which this all-day calendar event begins. (If this is not an all-day event,
       * then this method throws an exception.) The returned Date represents midnight at the
       * beginning of the day on which the event starts in the script's time zone. To use the
       * calendar's time zone instead, call getStartTime().
       *
       *
       *     // Gets the user's default calendar. To get a different calendar, use getCalendarById()
       *     // instead.
       *     const calendar = CalendarApp.getDefaultCalendar();
       *
       *     // Creates an event named 'My all-day event' for May 16, 2023.
       *     const event = calendar.createAllDayEvent('My all-day event', new Date('May 16, 2023'));
       *
       *     // Gets the event's start date and logs it.
       *     const startDate = event.getAllDayStartDate();
       *     console.log(startDate);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getAllDayStartDate()
       */
      getAllDayStartDate(): Date;

      /**
       * Gets all keys for tags that have been set on the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getAllTagKeys()
       */
      getAllTagKeys(): string[];

      /**
       * Returns the color of the calendar event.
       *
       *
       *     // Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
       *     // TODO(developer): Replace the string with the event ID that you want to get.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Gets the color of the calendar event and logs it.
       *     const eventColor = event.getColor();
       *     console.log(eventColor);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getColor()
       */
      getColor(): string;

      /**
       * Gets the creators of an event.
       *
       *
       *     // Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
       *     // TODO(developer): Replace the string with the event ID that you want to get.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Gets a list of the creators of the event and logs it.
       *     console.log(event.getCreators());
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getCreators()
       */
      getCreators(): string[];

      /**
       * Gets the date the event was created. You must have access to the calendar.
       *
       *
       *     // Opens the calendar by using its ID.
       *     // To get the user's default calendar use CalendarApp.getDefault() instead.
       *     // TODO(developer): Replace the calendar ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 8:10 AM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 08:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, gets the date that the event
       *      // was created and logs it.
       *      const eventCreated = event.getDateCreated();
       *      console.log(eventCreated);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getDateCreated()
       */
      getDateCreated(): Date;

      /**
       * Gets the description of the event. You must have edit access to the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // To get the user's default calendar use CalendarApp.getDefault() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 4th, 2023 that takes place
       *     between 4:00 PM and 5:00 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 04, 2023 16:00:00'), new Date('Feb 04, 2023 17:00:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the description of the event.
       *      event.setDescription('Important meeting');
       *
       *      // Gets the description of the event and logs it.
       *      const description = event.getDescription();
       *      console.log(description);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the minute values for all email reminders for the event. You must have edit access to the
       * calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 4th, 2023 that takes place
       *     between 5:00 PM and 6:00 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 04, 2023 15:00:00'), new Date('Feb 04, 2023 18:00:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, adds email reminders for the user to be
       *      // sent at 4 and 7 minutes before the event.
       *      event.addEmailReminder(4);
       *      event.addEmailReminder(7);
       *
       *      // Gets the minute values for all email reminders that are set up for the user for this event
       *      // and logs it.
       *      const emailReminder = event.getEmailReminders();
       *      console.log(emailReminder);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getEmailReminders()
       */
      getEmailReminders(): Integer[];

      /**
       * Gets the date and time at which this calendar event ends. You must have access to the calendar.
       * For non–all-day events, this is the instant in time at which the event was defined to
       * end. For all-day events, which only store an end date (not a date and time), this is midnight
       * at the beginning of the day after the event ends in the calendar's time zone. This
       * allows meaningful comparison of end times for all types of events; however, it does not
       * necessarily preserve the original day-of-year unmodified.
       *
       *
       * For all-day events, getAllDayEndDate() should almost
       * always be called in preference to this method.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:00 PM and 5:00 PM.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:00:00'), new Date('Feb 01, 2023 17:00:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, gets the date and time at which the
       *      // event ends and logs it.
       *      console.log(event.getEndTime());
       *     } else {
       *      // If no event exists within the given time frame, logs that info to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getEndTime()
       */
      getEndTime(): Date;

      /**
       * Gets the series of recurring events that this event belongs to. You must have access to the
       * calendar. A CalendarEventSeries object is returned even if this event doesn't belong to
       * a series, so that you can add new recurrence settings.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 18th, 2023 that takes place between
       *     // 1:00 PM and 2:00 PM.
       *     const event =
       *       calendar.getEvents(new Date('Feb 18, 2023 13:00:00'), new Date('Feb 18, 2023 14:00:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, gets the event series for the event
       *      // and sets the color to pale green.
       *      event.getEventSeries().setColor(CalendarApp.EventColor.PALE_GREEN);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getEventSeries()
       */
      getEventSeries(): CalendarEventSeries;

      /**
       * Gets a guest by email address.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 25th, 2023 that takes place
       *     // between 5:00 PM and 5:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];
       *
       *     // Gets a guest by email address.
       *     const guestEmailId = event.getGuestByEmail('alex@example.com');
       *
       *     // If the email address corresponds to an event guest, logs the email address.
       *     if (guestEmailId) {
       *       console.log(guestEmailId.getEmail());
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getGuestByEmail(String)
       * @param email the address of the guest
       */
      getGuestByEmail(email: string): EventGuest;

      /**
       * Gets the guests for the event, not including the event owner.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 25th, 2023 that takes place
       *     // between 5:00 PM and 5:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];
       *
       *     // Adds two guests to the event by using their email addresses.
       *     event.addGuest('alex@example.com');
       *     event.addGuest('cruz@example.com');
       *
       *     // Gets the guests list for the event.
       *     const guestList = event.getGuestList();
       *
       *     // Loops through the list to get all the guests and logs their email addresses.
       *     for (const guest of guestList){
       *       console.log(guest.getEmail());
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getGuestList()
       */
      getGuestList(): EventGuest[];

      /**
       * Gets the guests for the event, potentially including the event owners.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 25th, 2023 that takes place
       *     // between 5:00 PM and 5:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];
       *
       *     // Gets the guests list for the event, including the owner of the event.
       *     const guestList = event.getGuestList(true);
       *
       *     // Loops through the list to get all the guests and logs it.
       *     for (const guest of guestList) {
       *       console.log(guest.getEmail());
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getGuestList(Boolean)
       * @param includeOwner whether to include the owners as a guest
       */
      getGuestList(includeOwner: boolean): EventGuest[];

      /**
       * Gets the unique iCalUID of the event. Note that the iCalUID and the event id used by the
       * Calendar v3 API and Calendar advanced service are not identical and
       * cannot be used interchangeably. One difference in their semantics is that in recurring events
       * all occurrences of one event have different ids while they all share the same iCalUIDs.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for January 5th, 2023 that takes place
       *     // between 9:00 AM and 9:25 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Jan 05, 2023 09:00:00'), new Date('Jan 05, 2023 09:25:00'))[0];
       *
       *     // Gets the ID of the event and logs it.
       *     console.log(event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getId()
       */
      getId(): string;

      /**
       * Gets the date the event was last updated.
       *
       *
       *     // Opens the calendar by its ID. You must have view access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     between 4:00 PM and 5:00 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:00:00'), new Date('Feb 01, 2023 17:00:00'))[0];
       *
       *     // Gets the date the event was last updated and logs it.
       *     const eventUpdatedDate = event.getLastUpdated();
       *     console.log(eventUpdatedDate);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Gets the location of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the location of the event to Mumbai.
       *      event.setLocation('Mumbai');
       *
       *      // Gets the location of the event and logs it.
       *      const eventLocation = event.getLocation();
       *      console.log(eventLocation);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getLocation()
       */
      getLocation(): string;

      /**
       * Gets the event status (such as attending or invited) of the effective user. Always returns
       * GuestStatus.OWNER if the effective user is the owner of the event.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, gets the event status of
       *      // the effective user and logs it.
       *      const myStatus = event.getMyStatus();
       *      console.log(myStatus.toString());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getMyStatus()
       */
      getMyStatus(): GuestStatus;

      /**
       * Get the ID of the calendar where this event was originally created.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 25th, 2023 that takes place
       *     // between 4:00 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 25,2023 16:00:00'), new Date('Feb 25,2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, gets the ID of the calendar where the
       *      // event was originally created and logs it.
       *      const calendarId = event.getOriginalCalendarId();
       *      console.log(calendarId);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getOriginalCalendarId()
       */
      getOriginalCalendarId(): string;

      /**
       * Gets the minute values for all pop-up reminders for the event.
       *
       *
       *       // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 4th, 2023 that takes place
       *     // between 5:05 PM and 5:35 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 04, 2023 17:05:00'), new Date('Feb 04, 2023 17:35:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, adds two pop-up reminders to the event.
       *      // The first reminder pops up 5 minutes before the event starts and the second reminder
       *      // pops up 3 minutes before the event starts.
       *      event.addPopupReminder(3);
       *      event.addPopupReminder(5);
       *
       *      // Gets the minute values for all pop-up reminders for the event and logs it.
       *      const popUpReminder = event.getPopupReminders();
       *      console.log(popUpReminder);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getPopupReminders()
       */
      getPopupReminders(): Integer[];

      /**
       * Gets the minute values for all SMS reminders for the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getSmsReminders()
       */
      getSmsReminders(): Integer[];

      /**
       * Gets the date and time at which this calendar event begins. For non–all-day events, this
       * is the instant in time at which the event was defined to start. For all-day events, which only
       * store a start date (not a date and time), this is midnight at the beginning of the day on which
       * the event starts in the calendar's time zone. This allows meaningful comparison of
       * start times for all types of events; however, it is not necessarily preserve the original
       * day-of-year unmodified.
       *
       *
       * For all-day events, getAllDayStartDate() should
       * almost always be called in preference to this method.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     // Gets the date and time at which this calendar event begins and logs it.
       *     const startTime = event.getStartTime();
       *     console.log(startTime);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getStartTime()
       */
      getStartTime(): Date;

      /**
       * Gets a tag value of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getTag(String)
       * @param key the key
       */
      getTag(key: string): string;

      /**
       * Gets the title of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for January 31st, 2023 that takes place
       *     // between 9:05 AM and 9:15 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, logs the title of the event.
       *      console.log(event.getTitle());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the visibility of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, gets the visibility of the event
       *      // and logs it.
       *      const eventVisibility = event.getVisibility();
       *      console.log(eventVisibility.toString());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getVisibility()
       */
      getVisibility(): Visibility;

      /**
       * Determines whether guests can invite other guests.
       *
       *
       *     // Opens the calendar by its ID. You must have view access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 9:35 AM and 9:40 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, determines whether guests can invite
       *      // other guests and logs it.
       *      console.log(event.guestsCanInviteOthers());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#guestsCanInviteOthers()
       */
      guestsCanInviteOthers(): boolean;

      /**
       * Determines whether guests can modify the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 9:35 AM and 9:40 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the event so that guests can't
       *      // modify it.
       *      event.setGuestsCanModify(false);
       *
       *      // Determines whether guests can modify the event and logs it.
       *      console.log(event.guestsCanModify());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#guestsCanModify()
       */
      guestsCanModify(): boolean;

      /**
       * Determines whether guests can see other guests.
       *
       *
       *     // Opens the calendar by its ID. You must have view access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 9:35 AM and 9:40 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, determines whether guests can see other
       *      // guests and logs it.
       *      console.log(event.guestsCanSeeGuests());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#guestsCanSeeGuests()
       */
      guestsCanSeeGuests(): boolean;

      /**
       * Determines whether this is an all-day event.
       *
       *
       *     // Opens the calendar by its ID. You must have view access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for January 31st, 2023 that takes place
       *     // between 9:05 AM and 9:15 AM.
       *     const event =
       *       calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];
       *
       *     // Determines whether this event is an all-day event and logs it.
       *     console.log(event.isAllDayEvent());
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#isAllDayEvent()
       */
      isAllDayEvent(): boolean;

      /**
       * Determines whether you're the owner of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have view access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for January 31st, 2023 that takes place
       *     // between 9:05 AM and 9:15 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, determines whether you're the owner
       *      // of the event and logs it.
       *      console.log(event.isOwnedByMe());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#isOwnedByMe()
       */
      isOwnedByMe(): boolean;

      /**
       * Determines whether the event is part of an event series.
       *
       *
       *     // Opens the calendar by its ID. You must have view access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for Januart 31st, 2023 that takes place
       *     // between 9:00 AM and 10:00 AM.
       *     const event =
       *       calendar.getEvents(new Date('Jan 31, 2023 09:00:00'), new Date('Jan 31, 2023 10:00:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, determines whether the event is part of an
       *      // event series and logs it.
       *      console.log(event.isRecurringEvent());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#isRecurringEvent()
       */
      isRecurringEvent(): boolean;

      /**
       * Removes all reminders from the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 1,2023 16:10:00'), new Date('Feb 1,2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, removes all reminders from the event.
       *      event.removeAllReminders();
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#removeAllReminders()
       */
      removeAllReminders(): CalendarEvent;

      /**
       * Removes a guest from the event.
       *
       *
       *     // Example 1: Remove a guest from one event
       *     function removeGuestFromEvent() {
       *       // Replace the below values with your own
       *       let attendeeEmail = 'user@example.com'; // Email address of the person you need to remove
       *       let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar containing event
       *       let eventId = '123abc'; // ID of event instance
       *
       *       let calendar = CalendarApp.getCalendarById(calendarId);
       *       if (calendar === null) {
       *         // Calendar not found
       *         console.log('Calendar not found', calendarId);
       *         return;
       *         }
       *       let event = calendar.getEventById(eventId);
       *       if (event === null) {
       *         // Event not found
       *         console.log('Event not found', eventId);
       *         return;
       *         }
       *       event.removeGuest(attendeeEmail);
       *       }
       *
       *     // Example 2: Remove a guest from all events on a calendar within a specified timeframe
       *     function removeGuestFromAllEvents(){
       *     // Replace the following values with your own
       *       let attendeeEmail = 'user@example.com'; // Email address of the person you need to remove
       *       let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar with the events
       *       let startDate = new Date("YYYY-MM-DD"); // The first date to remove the guest from the events
       *       let endDate = new Date("YYYY-MM-DD"); // The last date to remove the attendee from the events
       *
       *       let calendar = CalendarApp.getCalendarById(calendarId);
       *         if (calendar === null) {
       *         // Calendar not found
       *         console.log('Calendar not found', calendarId);
       *         return;
       *       }
       *       // Get the events within the specified timeframe
       *       let calEvents = calendar.getEvents(startDate,endDate);
       *       console.log(calEvents.length); // Checks how many events are found
       *       // Loop through all events and remove the attendee from each of them
       *       for (var i = 0; i < calEvents.length; i++) {
       *       let event = calEvents[i];
       *       event.removeGuest(attendeeEmail);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#removeGuest(String)
       * @param email the email address of the guest
       */
      removeGuest(email: string): CalendarEvent;

      /**
       * Resets the reminders using the calendar's default settings.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 1, 2023 16:10:00'), new Date('Feb 1, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, resets the reminders using the calendar's
       *      // default settings.
       *      event.resetRemindersToDefault();
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#resetRemindersToDefault()
       */
      resetRemindersToDefault(): CalendarEvent;

      /**
       * Sets the date of the event. Applying this method changes a regular event into an all-day event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 17th, 2023 that takes place
       *     // between 4:00 PM and 5:00 PM.
       *     const event =
       *       calendar.getEvents(new Date('Feb 17, 2023 16:00:00'), new Date('Feb 17, 2023 17:00:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the date of the event and updates
       *      // it to an all-day event.
       *      event.setAllDayDate(new Date('Feb 17, 2023'));
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setAllDayDate(Date)
       * @param date the date for the event (the time is ignored)
       */
      setAllDayDate(date: Date): CalendarEvent;

      /**
       * Sets the dates of the event. Applying this method changes a regular event into an all-day
       * event.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 18th, 2023 that takes place
       *     // between 4:00 PM and 5:00 PM.
       *     const event =
       *       calendar.getEvents(new Date('Feb 18, 2023 16:00:00'), new Date('Feb 18, 2023 17:00:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the event to be an all-day event from
       *      // Feb 18th, 2023 until Feb 25th, 2023. Applying this method changes a regular event into an
       *      // all-day event.
       *      event.setAllDayDates(new Date('Feb 18, 2023'), new Date('Feb 25, 2023'));
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setAllDayDates(Date,Date)
       * @param startDate the date when the event starts (the time is ignored)
       * @param endDate the date when the event ends (the time is ignored)
       */
      setAllDayDates(startDate: Date, endDate: Date): CalendarEvent;

      /**
       * Sets whether non-guests can add themselves to the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 15th, 2023 that takes place
       *     // between 3:30 PM and 4:30 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 15, 2023 15:30:00'), new Date('Feb 15, 2023 16:30:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the event so that non-guests
       *      // can't add themselves to the event.
       *      event.setAnyoneCanAddSelf(false);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setAnyoneCanAddSelf(Boolean)
       * @param anyoneCanAddSelf whether anyone can invite themselves
       */
      setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): CalendarEvent;

      /**
       * Sets the color of the calendar event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the color of the calendar event to
       *      // green.
       *      event.setColor(CalendarApp.EventColor.GREEN);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setColor(String)
       * @param color An integer color index as a string, or a value from CalendarApp.EventColor.
       */
      setColor(color: string): CalendarEvent;

      /**
       * Sets the description of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 4th, 2023 that takes place
       *     // between 5:05 PM and 5:35 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 04, 2023 17:05:00'), new Date('Feb 04, 2023 17:35:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the description of the event to
       *      // 'Meeting.'
       *      event.setDescription('Meeting');
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setDescription(String)
       * @param description the new description
       */
      setDescription(description: string): CalendarEvent;

      /**
       * Sets whether guests can invite other guests.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own. You must have edit access to the calendar.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 9:35 AM and 9:40 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the event so that guests can invite
       *      // other guests.
       *      event.setGuestsCanInviteOthers(true);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setGuestsCanInviteOthers(Boolean)
       * @param guestsCanInviteOthers whether guests can invite others
       */
      setGuestsCanInviteOthers(guestsCanInviteOthers: boolean): CalendarEvent;

      /**
       * Sets whether guests can modify the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setGuestsCanModify(Boolean)
       * @param guestsCanModify whether guests can modify the event
       */
      setGuestsCanModify(guestsCanModify: boolean): CalendarEvent;

      /**
       * Sets whether guests can see other guests.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setGuestsCanSeeGuests(Boolean)
       * @param guestsCanSeeGuests whether guests can see others
       */
      setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): CalendarEvent;

      /**
       * Sets the location of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the location of the event to Noida.
       *      event.setLocation('Noida');
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setLocation(String)
       * @param location the new location
       */
      setLocation(location: string): CalendarEvent;

      /**
       * Sets the event status (such as attending or invited) of the effective user.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the event status for the current user
       *      to maybe.
       *      event.setMyStatus(CalendarApp.GuestStatus.MAYBE);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setMyStatus(GuestStatus)
       * @param status the new status
       */
      setMyStatus(status: GuestStatus): CalendarEvent;

      /**
       * Sets a key/value tag on the event, for storing custom metadata.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setTag(String,String)
       * @param key the tag key
       * @param value the tag value
       */
      setTag(key: string, value: string): CalendarEvent;

      /**
       * Sets the dates and times for the start and end of the event. Applying this method changes an
       * all-day event into a regular event.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Declares a start time of 11:00 AM on February 20th, 2023 and an end time of 12:00 PM on
       *     // February 20th, 2023.
       *     const startTime = new Date('Feb 20,2023 11:00:00');
       *     const endTime = new Date('Feb 20, 2023  12:00:00');
       *
       *     // Creates an all-day event on February 20th, 2023.
       *     const event = calendar.createAllDayEvent('Meeting', new Date('Feb 20,2023'));
       *
       *     // Updates the all-day event to a regular event by setting a start and end time for the event.
       *     event.setTime(startTime, endTime);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setTime(Date,Date)
       * @param startTime the new start of the event
       * @param endTime the new end of the event
       */
      setTime(startTime: Date, endTime: Date): CalendarEvent;

      /**
       * Sets the title of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for January 31st, 2023 that takes place
       *     // between 9:05 AM and 9:15 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, changes its title to Event1.
       *      event.setTitle('Event1');
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setTitle(String)
       * @param title the new title
       */
      setTitle(title: string): CalendarEvent;

      /**
       * Sets the visibility of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setVisibility(Visibility)
       * @param visibility
       */
      setVisibility(visibility: Visibility): CalendarEvent;
    }
    /**
     * Represents a series of events (a recurring event).
     */
    interface CalendarEventSeries {

      /**
       * Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most 4
       * weeks (40320 minutes), before the event.
       *
       *
       *     // Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
       *     // TODO(developer): Replace the string with the event ID that you want to get.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Adds an email notification for 15 minutes before the event.
       *     event.addEmailReminder(15);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#addEmailReminder(Integer)
       * @param minutesBefore the number of minutes before the event
       */
      addEmailReminder(minutesBefore: Integer): CalendarEventSeries;

      /**
       * Adds a guest to the event.
       *
       *
       *     // Example 1: Add a guest to one event
       *     function addAttendeeToEvent() {
       *       // Replace the below values with your own
       *       let attendeeEmail = 'user@example.com'; // Email address of the person you need to add
       *       let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar containing event
       *       let eventId = '123abc'; // ID of event instance
       *
       *       let calendar = CalendarApp.getCalendarById(calendarId);
       *       if (calendar === null) {
       *         // Calendar not found
       *         console.log('Calendar not found', calendarId);
       *         return;
       *         }
       *       let event = calendar.getEventById(eventId);
       *       if (event === null) {
       *         // Event not found
       *         console.log('Event not found', eventId);
       *         return;
       *         }
       *       event.addGuest(attendeeEmail);
       *       }
       *
       *     // Example 2: Add a guest to all events on a calendar within a specified timeframe
       *     function addAttendeeToAllEvents(){
       *     // Replace the following values with your own
       *       let attendeeEmail = 'user@example.com'; // Email address of the person you need to add
       *       let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar with the events
       *       let startDate = new Date("YYYY-MM-DD"); // The first date to add the guest to the events
       *       let endDate = new Date("YYYY-MM-DD"); // The last date to add the guest to the events
       *
       *       let calendar = CalendarApp.getCalendarById(calendarId);
       *         if (calendar === null) {
       *         // Calendar not found
       *         console.log('Calendar not found', calendarId);
       *         return;
       *       }
       *       // Get the events within the specified timeframe
       *       let calEvents = calendar.getEvents(startDate,endDate);
       *       console.log(calEvents.length); // Checks how many events are found
       *       // Loop through all events and add the attendee to each of them
       *       for (var i = 0; i < calEvents.length; i++) {
       *       let event = calEvents[i];
       *       event.addGuest(attendeeEmail);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#addGuest(String)
       * @param email The email address of the guest.
       */
      addGuest(email: string): CalendarEventSeries;

      /**
       * Adds a new pop-up notification to the event. The notification must be at least 5 minutes, and
       * at most 4 weeks (40320 minutes), before the event.
       *
       *
       *     // Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
       *     // TODO(developer): Replace the string with the event ID that you want to get.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Adds a pop-up notification for 15 minutes before the event.
       *     event.addPopupReminder(15);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#addPopupReminder(Integer)
       * @param minutesBefore the number of minutes before the event
       */
      addPopupReminder(minutesBefore: Integer): CalendarEventSeries;

      /**
       * Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most 4
       * weeks (40320 minutes), before the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#addSmsReminder(Integer)
       * @param minutesBefore the number of minutes before the event
       */
      addSmsReminder(minutesBefore: Integer): CalendarEventSeries;

      /**
       * Determines whether people can add themselves as guests to a Calendar event.
       *
       *
       *     // Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
       *     // TODO(developer): Replace the string with the event ID that you want to get.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Determines whether people can add themselves as guests to the event and logs it.
       *     console.log(event.anyoneCanAddSelf());
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#anyoneCanAddSelf()
       */
      anyoneCanAddSelf(): boolean;

      /**
       * Deletes the event series.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#deleteEventSeries()
       */
      deleteEventSeries(): void;

      /**
       * Deletes a key/value tag from the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#deleteTag(String)
       * @param key the tag key
       */
      deleteTag(key: string): CalendarEventSeries;

      /**
       * Gets all keys for tags that have been set on the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getAllTagKeys()
       */
      getAllTagKeys(): string[];

      /**
       * Returns the color of the calendar event.
       *
       *
       *     // Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
       *     // TODO(developer): Replace the string with the event ID that you want to get.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Gets the color of the calendar event and logs it.
       *     const eventColor = event.getColor();
       *     console.log(eventColor);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getColor()
       */
      getColor(): string;

      /**
       * Gets the creators of an event.
       *
       *
       *     // Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
       *     // TODO(developer): Replace the string with the event ID that you want to get.
       *     const event = CalendarApp.getEventById('abc123456');
       *
       *     // Gets a list of the creators of the event and logs it.
       *     console.log(event.getCreators());
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getCreators()
       */
      getCreators(): string[];

      /**
       * Gets the date the event was created. You must have access to the calendar.
       *
       *
       *     // Opens the calendar by using its ID.
       *     // To get the user's default calendar use CalendarApp.getDefault() instead.
       *     // TODO(developer): Replace the calendar ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 8:10 AM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 08:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, gets the date that the event
       *      // was created and logs it.
       *      const eventCreated = event.getDateCreated();
       *      console.log(eventCreated);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getDateCreated()
       */
      getDateCreated(): Date;

      /**
       * Gets the description of the event. You must have edit access to the calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // To get the user's default calendar use CalendarApp.getDefault() instead.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 4th, 2023 that takes place
       *     between 4:00 PM and 5:00 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 04, 2023 16:00:00'), new Date('Feb 04, 2023 17:00:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the description of the event.
       *      event.setDescription('Important meeting');
       *
       *      // Gets the description of the event and logs it.
       *      const description = event.getDescription();
       *      console.log(description);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the minute values for all email reminders for the event. You must have edit access to the
       * calendar.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 4th, 2023 that takes place
       *     between 5:00 PM and 6:00 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 04, 2023 15:00:00'), new Date('Feb 04, 2023 18:00:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, adds email reminders for the user to be
       *      // sent at 4 and 7 minutes before the event.
       *      event.addEmailReminder(4);
       *      event.addEmailReminder(7);
       *
       *      // Gets the minute values for all email reminders that are set up for the user for this event
       *      // and logs it.
       *      const emailReminder = event.getEmailReminders();
       *      console.log(emailReminder);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getEmailReminders()
       */
      getEmailReminders(): Integer[];

      /**
       * Gets a guest by email address.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 25th, 2023 that takes place
       *     // between 5:00 PM and 5:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];
       *
       *     // Gets a guest by email address.
       *     const guestEmailId = event.getGuestByEmail('alex@example.com');
       *
       *     // If the email address corresponds to an event guest, logs the email address.
       *     if (guestEmailId) {
       *       console.log(guestEmailId.getEmail());
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getGuestByEmail(String)
       * @param email the address of the guest
       */
      getGuestByEmail(email: string): EventGuest;

      /**
       * Gets the guests for the event, not including the event owner.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 25th, 2023 that takes place
       *     // between 5:00 PM and 5:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];
       *
       *     // Adds two guests to the event by using their email addresses.
       *     event.addGuest('alex@example.com');
       *     event.addGuest('cruz@example.com');
       *
       *     // Gets the guests list for the event.
       *     const guestList = event.getGuestList();
       *
       *     // Loops through the list to get all the guests and logs their email addresses.
       *     for (const guest of guestList){
       *       console.log(guest.getEmail());
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getGuestList()
       */
      getGuestList(): EventGuest[];

      /**
       * Gets the guests for the event, potentially including the event owners.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 25th, 2023 that takes place
       *     // between 5:00 PM and 5:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];
       *
       *     // Gets the guests list for the event, including the owner of the event.
       *     const guestList = event.getGuestList(true);
       *
       *     // Loops through the list to get all the guests and logs it.
       *     for (const guest of guestList) {
       *       console.log(guest.getEmail());
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getGuestList(Boolean)
       * @param includeOwner whether to include the owners as a guest
       */
      getGuestList(includeOwner: boolean): EventGuest[];

      /**
       * Gets the unique iCalUID of the event. Note that the iCalUID and the event id used by the
       * Calendar v3 API and Calendar advanced service are not identical and
       * cannot be used interchangeably. One difference in their semantics is that in recurring events
       * all occurrences of one event have different ids while they all share the same iCalUIDs.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for January 5th, 2023 that takes place
       *     // between 9:00 AM and 9:25 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Jan 05, 2023 09:00:00'), new Date('Jan 05, 2023 09:25:00'))[0];
       *
       *     // Gets the ID of the event and logs it.
       *     console.log(event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getId()
       */
      getId(): string;

      /**
       * Gets the date the event was last updated.
       *
       *
       *     // Opens the calendar by its ID. You must have view access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     between 4:00 PM and 5:00 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:00:00'), new Date('Feb 01, 2023 17:00:00'))[0];
       *
       *     // Gets the date the event was last updated and logs it.
       *     const eventUpdatedDate = event.getLastUpdated();
       *     console.log(eventUpdatedDate);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Gets the location of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the location of the event to Mumbai.
       *      event.setLocation('Mumbai');
       *
       *      // Gets the location of the event and logs it.
       *      const eventLocation = event.getLocation();
       *      console.log(eventLocation);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getLocation()
       */
      getLocation(): string;

      /**
       * Gets the event status (such as attending or invited) of the effective user. Always returns
       * GuestStatus.OWNER if the effective user is the owner of the event.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, gets the event status of
       *      // the effective user and logs it.
       *      const myStatus = event.getMyStatus();
       *      console.log(myStatus.toString());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getMyStatus()
       */
      getMyStatus(): GuestStatus;

      /**
       * Get the ID of the calendar where this event was originally created.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 25th, 2023 that takes place
       *     // between 4:00 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 25,2023 16:00:00'), new Date('Feb 25,2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, gets the ID of the calendar where the
       *      // event was originally created and logs it.
       *      const calendarId = event.getOriginalCalendarId();
       *      console.log(calendarId);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getOriginalCalendarId()
       */
      getOriginalCalendarId(): string;

      /**
       * Gets the minute values for all pop-up reminders for the event.
       *
       *
       *       // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 4th, 2023 that takes place
       *     // between 5:05 PM and 5:35 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 04, 2023 17:05:00'), new Date('Feb 04, 2023 17:35:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, adds two pop-up reminders to the event.
       *      // The first reminder pops up 5 minutes before the event starts and the second reminder
       *      // pops up 3 minutes before the event starts.
       *      event.addPopupReminder(3);
       *      event.addPopupReminder(5);
       *
       *      // Gets the minute values for all pop-up reminders for the event and logs it.
       *      const popUpReminder = event.getPopupReminders();
       *      console.log(popUpReminder);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getPopupReminders()
       */
      getPopupReminders(): Integer[];

      /**
       * Gets the minute values for all SMS reminders for the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getSmsReminders()
       */
      getSmsReminders(): Integer[];

      /**
       * Gets a tag value of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getTag(String)
       * @param key the key
       */
      getTag(key: string): string;

      /**
       * Gets the title of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for January 31st, 2023 that takes place
       *     // between 9:05 AM and 9:15 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, logs the title of the event.
       *      console.log(event.getTitle());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the visibility of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, gets the visibility of the event
       *      // and logs it.
       *      const eventVisibility = event.getVisibility();
       *      console.log(eventVisibility.toString());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getVisibility()
       */
      getVisibility(): Visibility;

      /**
       * Determines whether guests can invite other guests.
       *
       *
       *     // Opens the calendar by its ID. You must have view access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 9:35 AM and 9:40 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, determines whether guests can invite
       *      // other guests and logs it.
       *      console.log(event.guestsCanInviteOthers());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#guestsCanInviteOthers()
       */
      guestsCanInviteOthers(): boolean;

      /**
       * Determines whether guests can modify the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 9:35 AM and 9:40 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the event so that guests can't
       *      // modify it.
       *      event.setGuestsCanModify(false);
       *
       *      // Determines whether guests can modify the event and logs it.
       *      console.log(event.guestsCanModify());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#guestsCanModify()
       */
      guestsCanModify(): boolean;

      /**
       * Determines whether guests can see other guests.
       *
       *
       *     // Opens the calendar by its ID. You must have view access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 9:35 AM and 9:40 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, determines whether guests can see other
       *      // guests and logs it.
       *      console.log(event.guestsCanSeeGuests());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#guestsCanSeeGuests()
       */
      guestsCanSeeGuests(): boolean;

      /**
       * Determines whether you're the owner of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have view access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for January 31st, 2023 that takes place
       *     // between 9:05 AM and 9:15 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, determines whether you're the owner
       *      // of the event and logs it.
       *      console.log(event.isOwnedByMe());
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#isOwnedByMe()
       */
      isOwnedByMe(): boolean;

      /**
       * Removes all reminders from the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 1,2023 16:10:00'), new Date('Feb 1,2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, removes all reminders from the event.
       *      event.removeAllReminders();
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#removeAllReminders()
       */
      removeAllReminders(): CalendarEventSeries;

      /**
       * Removes a guest from the event.
       *
       *
       *     // Example 1: Remove a guest from one event
       *     function removeGuestFromEvent() {
       *       // Replace the below values with your own
       *       let attendeeEmail = 'user@example.com'; // Email address of the person you need to remove
       *       let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar containing event
       *       let eventId = '123abc'; // ID of event instance
       *
       *       let calendar = CalendarApp.getCalendarById(calendarId);
       *       if (calendar === null) {
       *         // Calendar not found
       *         console.log('Calendar not found', calendarId);
       *         return;
       *         }
       *       let event = calendar.getEventById(eventId);
       *       if (event === null) {
       *         // Event not found
       *         console.log('Event not found', eventId);
       *         return;
       *         }
       *       event.removeGuest(attendeeEmail);
       *       }
       *
       *     // Example 2: Remove a guest from all events on a calendar within a specified timeframe
       *     function removeGuestFromAllEvents(){
       *     // Replace the following values with your own
       *       let attendeeEmail = 'user@example.com'; // Email address of the person you need to remove
       *       let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar with the events
       *       let startDate = new Date("YYYY-MM-DD"); // The first date to remove the guest from the events
       *       let endDate = new Date("YYYY-MM-DD"); // The last date to remove the attendee from the events
       *
       *       let calendar = CalendarApp.getCalendarById(calendarId);
       *         if (calendar === null) {
       *         // Calendar not found
       *         console.log('Calendar not found', calendarId);
       *         return;
       *       }
       *       // Get the events within the specified timeframe
       *       let calEvents = calendar.getEvents(startDate,endDate);
       *       console.log(calEvents.length); // Checks how many events are found
       *       // Loop through all events and remove the attendee from each of them
       *       for (var i = 0; i < calEvents.length; i++) {
       *       let event = calEvents[i];
       *       event.removeGuest(attendeeEmail);
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#removeGuest(String)
       * @param email the email address of the guest
       */
      removeGuest(email: string): CalendarEventSeries;

      /**
       * Resets the reminders using the calendar's default settings.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 1, 2023 16:10:00'), new Date('Feb 1, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, resets the reminders using the calendar's
       *      // default settings.
       *      event.resetRemindersToDefault();
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#resetRemindersToDefault()
       */
      resetRemindersToDefault(): CalendarEventSeries;

      /**
       * Sets whether non-guests can add themselves to the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 15th, 2023 that takes place
       *     // between 3:30 PM and 4:30 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 15, 2023 15:30:00'), new Date('Feb 15, 2023 16:30:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the event so that non-guests
       *      // can't add themselves to the event.
       *      event.setAnyoneCanAddSelf(false);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setAnyoneCanAddSelf(Boolean)
       * @param anyoneCanAddSelf whether anyone can invite themselves
       */
      setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): CalendarEventSeries;

      /**
       * Sets the color of the calendar event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the color of the calendar event to
       *      // green.
       *      event.setColor(CalendarApp.EventColor.GREEN);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setColor(String)
       * @param color An integer color index as a string, or a value from CalendarApp.EventColor.
       */
      setColor(color: string): CalendarEventSeries;

      /**
       * Sets the description of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 4th, 2023 that takes place
       *     // between 5:05 PM and 5:35 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 04, 2023 17:05:00'), new Date('Feb 04, 2023 17:35:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the description of the event to
       *      // 'Meeting.'
       *      event.setDescription('Meeting');
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setDescription(String)
       * @param description the new description
       */
      setDescription(description: string): CalendarEventSeries;

      /**
       * Sets whether guests can invite other guests.
       *
       *
       *     // Opens the calendar by its ID.
       *     // TODO(developer): Replace the ID with your own. You must have edit access to the calendar.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 9:35 AM and 9:40 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the event so that guests can invite
       *      // other guests.
       *      event.setGuestsCanInviteOthers(true);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setGuestsCanInviteOthers(Boolean)
       * @param guestsCanInviteOthers whether guests can invite others
       */
      setGuestsCanInviteOthers(guestsCanInviteOthers: boolean): CalendarEventSeries;

      /**
       * Sets whether guests can modify the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setGuestsCanModify(Boolean)
       * @param guestsCanModify whether guests can modify the event
       */
      setGuestsCanModify(guestsCanModify: boolean): CalendarEventSeries;

      /**
       * Sets whether guests can see other guests.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setGuestsCanSeeGuests(Boolean)
       * @param guestsCanSeeGuests whether guests can see others
       */
      setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): CalendarEventSeries;

      /**
       * Sets the location of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the location of the event to Noida.
       *      event.setLocation('Noida');
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setLocation(String)
       * @param location the new location
       */
      setLocation(location: string): CalendarEventSeries;

      /**
       * Sets the event status (such as attending or invited) of the effective user.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for February 1st, 2023 that takes place
       *     // between 4:10 PM and 4:25 PM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, sets the event status for the current user
       *      to maybe.
       *      event.setMyStatus(CalendarApp.GuestStatus.MAYBE);
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setMyStatus(GuestStatus)
       * @param status the new status
       */
      setMyStatus(status: GuestStatus): CalendarEventSeries;

      /**
       * Sets the recurrence rules for an all-day event series. Applying this method changes a regular
       * event series into an all-day event series.
       *
       *
       *     // Sets the events in a series to take place every Wednesday in 2013.
       *     var eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById('123456789@google.com');
       *     var startDate = new Date('January 2, 2013 03:00:00 PM EST');
       *     var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
       *         .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
       *         .until(new Date('January 1, 2014'));
       *     eventSeries.setRecurrence(recurrence, startDate);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setRecurrence(EventRecurrence,Date)
       * @param recurrence the recurrence rules to use
       * @param startDate the date of the first event in the series (only the day is used; the time is ignored)
       */
      setRecurrence(recurrence: EventRecurrence, startDate: Date): CalendarEventSeries;

      /**
       * Sets the recurrence rules for this event series. Applying this method changes an all-day event
       * series into a regular event series.
       *
       *
       *     // Sets the events in a series to take place from 3pm to 4pm every Tuesday and Thursday in
       *     // 2013.
       *     var eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById('123456789@google.com');
       *     var startTime = new Date('January 1, 2013 03:00:00 PM EST');
       *     var endTime = new Date('January 1, 2013 04:00:00 PM EST');
       *     var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
       *          .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
       *          .until(new Date('January 1, 2014'));
       *     eventSeries.setRecurrence(recurrence, startTime, endTime);
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setRecurrence(EventRecurrence,Date,Date)
       * @param recurrence the recurrence rules to use
       * @param startTime the date and time when the first event in the series starts
       * @param endTime the date and time when the first event in the series ends
       */
      setRecurrence(recurrence: EventRecurrence, startTime: Date, endTime: Date): CalendarEventSeries;

      /**
       * Sets a key/value tag on the event, for storing custom metadata.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setTag(String,String)
       * @param key the tag key
       * @param value the tag value
       */
      setTag(key: string, value: string): CalendarEventSeries;

      /**
       * Sets the title of the event.
       *
       *
       *     // Opens the calendar by its ID. You must have edit access to the calendar.
       *     // TODO(developer): Replace the ID with your own.
       *     const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');
       *
       *     // Gets the first event from the calendar for January 31st, 2023 that takes place
       *     // between 9:05 AM and 9:15 AM.
       *     // For an event series, use calendar.getEventSeriesById('abc123456@google.com');
       *     // and replace the series ID with your own.
       *     const event =
       *       calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];
       *
       *     if (event) {
       *      // If an event exists within the given time frame, changes its title to Event1.
       *      event.setTitle('Event1');
       *     } else {
       *      // If no event exists within the given time frame, logs that information to the console.
       *      console.log('No events exist for the specified range');
       *     }
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setTitle(String)
       * @param title the new title
       */
      setTitle(title: string): CalendarEventSeries;

      /**
       * Sets the visibility of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setVisibility(Visibility)
       * @param visibility
       */
      setVisibility(visibility: Visibility): CalendarEventSeries;
    }
    /**
     * An enum representing the named colors available in the Calendar service.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CalendarApp.Color.BLUE.
     */
    enum Color { BLUE, BROWN, CHARCOAL, CHESTNUT, GRAY, GREEN, INDIGO, LIME, MUSTARD, OLIVE, ORANGE, PINK, PLUM, PURPLE, RED, RED_ORANGE, SEA_BLUE, SLATE, TEAL, TURQOISE, YELLOW }
    /**
     * An enum representing the named event colors available in the Calendar service.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CalendarApp.EventColor.PALE_BLUE.
     */
    enum EventColor { PALE_BLUE, PALE_GREEN, MAUVE, PALE_RED, YELLOW, ORANGE, CYAN, GRAY, BLUE, GREEN, RED }
    /**
     * Represents a guest of an event.
     */
    interface EventGuest {

      /**
       * Gets the number of additional people that this guest has said are attending.
       * https://developers.google.com/apps-script/reference/calendar/event-guest#getAdditionalGuests()
       */
      getAdditionalGuests(): Integer;

      /**
       * Gets the email address of the guest.
       * https://developers.google.com/apps-script/reference/calendar/event-guest#getEmail()
       */
      getEmail(): string;

      /**
       * Gets the status of the guest for the event.
       * https://developers.google.com/apps-script/reference/calendar/event-guest#getGuestStatus()
       */
      getGuestStatus(): GuestStatus;

      /**
       * Gets the name of the guest. If the name of the guest is not available, this method returns the
       * guest's email address.
       * https://developers.google.com/apps-script/reference/calendar/event-guest#getName()
       */
      getName(): string;
      /** @deprecated DO NOT USE */ getStatus(): string;
    }
    /**
     * Represents the recurrence settings for an event series.
     */
    interface EventRecurrence {

      /**
       * Adds a rule that excludes occurrences on a daily basis.
       *
       *
       *     // Creates a rule that recurs every week after the first 30 days.
       *     var recurrence = CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#addDailyExclusion()
       */
      addDailyExclusion(): RecurrenceRule;

      /**
       * Adds a rule that causes the event to recur on a daily basis.
       *
       *
       *     // Creates a rule that recurs every day for ten days.
       *     var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#addDailyRule()
       */
      addDailyRule(): RecurrenceRule;

      /**
       * Adds a rule that causes the event to recur on a specific date.
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#addDate(Date)
       * @param date
       */
      addDate(date: Date): EventRecurrence;

      /**
       * Adds a rule that excludes an occurrence for a specific date.
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#addDateExclusion(Date)
       * @param date
       */
      addDateExclusion(date: Date): EventRecurrence;

      /**
       * Adds a rule that excludes occurrences on a monthly basis.
       *
       *
       * By default the exclusion is applied on the same day of the month as the first event in the
       * series, but this can be altered by calling RecurrenceRule.onlyOnMonthDay(day) or RecurrenceRule.onlyOnMonthDays(days).
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#addMonthlyExclusion()
       */
      addMonthlyExclusion(): RecurrenceRule;

      /**
       * Adds a rule that causes the event to recur on a monthly basis.
       *
       *
       * By default the event recurs on the same day of the month as the first event in the series,
       * but this can be altered by calling RecurrenceRule.onlyOnMonthDay(day) or RecurrenceRule.onlyOnMonthDays(days).
       *
       *
       *     // Creates a rule that recurs every month for three months.
       *     var recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#addMonthlyRule()
       */
      addMonthlyRule(): RecurrenceRule;

      /**
       * Adds a rule that excludes occurrences on a weekly basis.
       *
       *
       * By default the exclusion is applied on the same day of the week as the first event in the
       * series, but this can be altered by calling RecurrenceRule.onlyOnWeekday(day) or RecurrenceRule.onlyOnWeekdays(days).
       *
       *
       *     // Creates a rule that recurs every day except the first four Wednesdays.
       *     var recurrence = CalendarApp.newRecurrence().addDailyRule()
       *         .addWeeklyExclusion().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY).times(4);
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#addWeeklyExclusion()
       */
      addWeeklyExclusion(): RecurrenceRule;

      /**
       * Adds a rule that causes the event to recur on a weekly basis.
       *
       *
       * By default the event recurs on the same day of the week as the first event in the series,
       * but this can be altered by calling RecurrenceRule.onlyOnWeekday(day) or RecurrenceRule.onlyOnWeekdays(days).
       *
       *
       *     // Creates a rule that recurs every week for ten weeks.
       *     var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#addWeeklyRule()
       */
      addWeeklyRule(): RecurrenceRule;

      /**
       * Adds a rule that excludes occurrences on a yearly basis.
       *
       *
       * By default the exclusion is applied on the same day of the year as the first event in the
       * series, but this can be altered by calling RecurrenceRule.onlyOnYearDay(day) or RecurrenceRule.onlyOnYearDays(days).
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#addYearlyExclusion()
       */
      addYearlyExclusion(): RecurrenceRule;

      /**
       * Adds a rule that causes the event to recur on a yearly basis.
       *
       *
       * By default the event recurs on the same day of the year as the first event in the series,
       * but this can be altered by calling RecurrenceRule.onlyOnYearDay(day) or RecurrenceRule.onlyOnYearDays(days).
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#addYearlyRule()
       */
      addYearlyRule(): RecurrenceRule;

      /**
       * Sets the time zone for this recurrence. This affects the date and time that events recur on,
       * and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.
       * https://developers.google.com/apps-script/reference/calendar/event-recurrence#setTimeZone(String)
       * @param timeZone the time zone, specified in "long" format (e.g., 'America/New_York', as listed by Joda.org)
       */
      setTimeZone(timeZone: string): EventRecurrence;
    }
    /**
     * An enum representing the statuses a guest can have for an event.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CalendarApp.GuestStatus.INVITED.
     */
    enum GuestStatus { INVITED, MAYBE, NO, OWNER, YES }
    /**
     * Represents a recurrence rule for an event series.
     *
     * Note that this class also behaves like the EventRecurrence that it belongs to,
     * allowing you to chain rule creation together like so:
     *
     *     recurrence.addDailyRule().times(3).interval(2).addWeeklyExclusion().times(2);
     *
     * times(times)
     * interval(interval)
     */
    interface RecurrenceRule {

      /**
       * Adds a rule that excludes occurrences on a daily basis.
       *
       *
       *     // Creates a rule that recurs every week after the first 30 days.
       *     var recurrence = CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#addDailyExclusion()
       */
      addDailyExclusion(): RecurrenceRule;

      /**
       * Adds a rule that causes the event to recur on a daily basis.
       *
       *
       *     // Creates a rule that recurs every day for ten days.
       *     var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#addDailyRule()
       */
      addDailyRule(): RecurrenceRule;

      /**
       * Adds a rule that causes the event to recur on a specific date.
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#addDate(Date)
       * @param date
       */
      addDate(date: Date): EventRecurrence;

      /**
       * Adds a rule that excludes an occurrence for a specific date.
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#addDateExclusion(Date)
       * @param date
       */
      addDateExclusion(date: Date): EventRecurrence;

      /**
       * Adds a rule that excludes occurrences on a monthly basis.
       *
       *
       * By default the exclusion is applied on the same day of the month as the first event in the
       * series, but this can be altered by calling onlyOnMonthDay(day) or onlyOnMonthDays(days).
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#addMonthlyExclusion()
       */
      addMonthlyExclusion(): RecurrenceRule;

      /**
       * Adds a rule that causes the event to recur on a monthly basis.
       *
       *
       * By default the event recurs on the same day of the month as the first event in the series,
       * but this can be altered by calling onlyOnMonthDay(day) or onlyOnMonthDays(days).
       *
       *
       *     // Creates a rule that recurs every month for three months.
       *     var recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#addMonthlyRule()
       */
      addMonthlyRule(): RecurrenceRule;

      /**
       * Adds a rule that excludes occurrences on a weekly basis.
       *
       *
       * By default the exclusion is applied on the same day of the week as the first event in the
       * series, but this can be altered by calling onlyOnWeekday(day) or onlyOnWeekdays(days).
       *
       *
       *     // Creates a rule that recurs every day except the first four Wednesdays.
       *     var recurrence = CalendarApp.newRecurrence().addDailyRule()
       *         .addWeeklyExclusion().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY).times(4);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#addWeeklyExclusion()
       */
      addWeeklyExclusion(): RecurrenceRule;

      /**
       * Adds a rule that causes the event to recur on a weekly basis.
       *
       *
       * By default the event recurs on the same day of the week as the first event in the series,
       * but this can be altered by calling onlyOnWeekday(day) or onlyOnWeekdays(days).
       *
       *
       *     // Creates a rule that recurs every week for ten weeks.
       *     var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#addWeeklyRule()
       */
      addWeeklyRule(): RecurrenceRule;

      /**
       * Adds a rule that excludes occurrences on a yearly basis.
       *
       *
       * By default the exclusion is applied on the same day of the year as the first event in the
       * series, but this can be altered by calling onlyOnYearDay(day) or onlyOnYearDays(days).
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#addYearlyExclusion()
       */
      addYearlyExclusion(): RecurrenceRule;

      /**
       * Adds a rule that causes the event to recur on a yearly basis.
       *
       *
       * By default the event recurs on the same day of the year as the first event in the series,
       * but this can be altered by calling onlyOnYearDay(day) or onlyOnYearDays(days).
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#addYearlyRule()
       */
      addYearlyRule(): RecurrenceRule;

      /**
       * Configures the rule to only apply at this interval of the rule's time unit.
       *
       *
       *     // Creates a rule that recurs every fourth week.
       *     var recurrence = CalendarApp.newRecurrence().addWeeklyRule().interval(4);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#interval(Integer)
       * @param interval the interval in the rule's time unit
       */
      interval(interval: Integer): RecurrenceRule;

      /**
       * Configures the rule to only apply to a specific month.
       *
       *
       *     // Creates a rule that recurs every week in February.
       *     var recurrence = CalendarApp.newRecurrence()
       *         .addWeeklyRule().onlyInMonth(CalendarApp.Month.FEBRUARY);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#onlyInMonth(Month)
       * @param month the month
       */
      onlyInMonth(month: Base.Month): RecurrenceRule;

      /**
       * Configures the rule to only apply to specific months.
       *
       *
       *     // Creates a rule that recurs every week in February and March.
       *     var recurrence = CalendarApp.newRecurrence()
       *         .addWeeklyRule().onlyInMonths([CalendarApp.Month.FEBRUARY, CalendarApp.Month.MARCH]);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#onlyInMonths(Month)
       * @param months the months
       */
      onlyInMonths(months: Base.Month[]): RecurrenceRule;

      /**
       * Configures the rule to only apply to a specific day of the month.
       *
       *
       *     // Creates a rule that recurs every month on the fifth day of the month.
       *     var recurrence = CalendarApp.newRecurrence().addMonthlyRule().onlyOnMonthDay(5);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#onlyOnMonthDay(Integer)
       * @param day the day of the month
       */
      onlyOnMonthDay(day: Integer): RecurrenceRule;

      /**
       * Configures the rule to only apply to specific days of the month.
       *
       *
       *     // Creates a rule that recurs every month on the first and fifteenth day of the month.
       *     var recurrence = CalendarApp.newRecurrence().addMonthlyRule().onlyOnMonthDays([1, 15]);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#onlyOnMonthDays(Integer)
       * @param days the days of the month
       */
      onlyOnMonthDays(days: Integer[]): RecurrenceRule;

      /**
       * Configures the rule to only apply to a specific week of the year.
       *
       *
       *     // Creates a rule that recurs on the fifth week of every year.
       *     var recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeek(5);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#onlyOnWeek(Integer)
       * @param week the week
       */
      onlyOnWeek(week: Integer): RecurrenceRule;

      /**
       * Configures the rule to only apply to a specific day of the week.
       *
       *
       *     // Creates a rule that recurs every week on Wednesdays.
       *     var recurrence = CalendarApp.newRecurrence()
       *         .addWeeklyRule().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#onlyOnWeekday(Weekday)
       * @param day the day of the week
       */
      onlyOnWeekday(day: Base.Weekday): RecurrenceRule;

      /**
       * Configures the rule to only apply to specific days of the week.
       *
       *
       *     // Creates a rule that recurs every week on Tuesdays and Thursdays.
       *     var recurrence = CalendarApp.newRecurrence()
       *         .addWeeklyRule().onlyOnWeekdays(
       *             [CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY]);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#onlyOnWeekdays(Weekday)
       * @param days the days of the week
       */
      onlyOnWeekdays(days: Base.Weekday[]): RecurrenceRule;

      /**
       * Configures the rule to only apply to specific weeks of the year.
       *
       *
       *     // Creates a rule that recurs on the fifth and tenth weeks of every year.
       *     var recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeeks([5, 10]);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#onlyOnWeeks(Integer)
       * @param weeks the weeks
       */
      onlyOnWeeks(weeks: Integer[]): RecurrenceRule;

      /**
       * Configures the rule to only apply to a specific day of the year.
       *
       *
       *     // Creates a rule that recurs every year on February 15 (the 46th day).
       *     var recurrence = CalendarApp.newRecurrence().addYearlyRule().onlyOnYearDay(46);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#onlyOnYearDay(Integer)
       * @param day the day of the year
       */
      onlyOnYearDay(day: Integer): RecurrenceRule;

      /**
       * Configures the rule to only apply to specific days of the year.
       *
       *
       *     // Creates a rule that recurs every year on January 20 and February 15.
       *     var recurrence = CalendarApp.newRecurrence().addYearlyRule().onlyOnYearDay([20, 46]);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#onlyOnYearDays(Integer)
       * @param days the days of the year
       */
      onlyOnYearDays(days: Integer[]): RecurrenceRule;

      /**
       * Sets the time zone for this recurrence. This affects the date and time that events recur on,
       * and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#setTimeZone(String)
       * @param timeZone the time zone, specified in "long" format (e.g., 'America/New_York', as listed by Joda.org)
       */
      setTimeZone(timeZone: string): EventRecurrence;

      /**
       * Configures the rule to end after a given number of occurrences.
       *
       *
       *     // Creates a rule that recurs every day for ten days.
       *     var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#times(Integer)
       * @param times the number of times to recur
       */
      times(times: Integer): RecurrenceRule;

      /**
       * Configures the rule to end on a given date (inclusive).
       *
       *
       *     // Creates a rule that recurs every day through the end of 2013.
       *     var recurrence = CalendarApp.newRecurrence()
       *         .addDailyRule().until(new Date('December 31, 2013'));
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#until(Date)
       * @param endDate
       */
      until(endDate: Date): RecurrenceRule;

      /**
       * Configures which day a week starts on, for the purposes of applying the rule.
       *
       *
       *     // Creates a weekly rule where weeks start on Monday.
       *     var recurrence = CalendarApp.newRecurrence()
       *         .addWeeklyRule().weekStartsOn(CalendarApp.Weekday.MONDAY);
       * https://developers.google.com/apps-script/reference/calendar/recurrence-rule#weekStartsOn(Weekday)
       * @param day the day on which the week starts
       */
      weekStartsOn(day: Base.Weekday): RecurrenceRule;
    }
    /**
     * An enum representing the visibility of an event.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * CalendarApp.Visibility.CONFIDENTIAL.
     */
    enum Visibility { CONFIDENTIAL, DEFAULT, PRIVATE, PUBLIC }
  }
}

declare var CalendarApp: GoogleAppsScript.Calendar.CalendarApp;
