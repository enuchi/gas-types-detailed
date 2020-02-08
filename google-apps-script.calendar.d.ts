// Type definitions for Google Apps Script 2020-01-26
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
       * @param title the title of the event
       * @param date the date of the event (only the day is used; the time is ignored)
       */
      createAllDayEvent(title: string, date: Date): CalendarEvent;

      /**
       * Creates a new all-day event.
       *
       *
       *     // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival',
       *         new Date('August 15, 1969'),
       *         new Date('August 18, 1969'));
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createAllDayEvent(String,Date,Date)
       * @param title the title of the event
       * @param startDate the date when the event starts (only the day is used; the time is ignored)
       * @param endDate the date when the event ends (only the day is used; the time is ignored)
       */
      createAllDayEvent(title: string, startDate: Date, endDate: Date): CalendarEvent;

      /**
       * Creates a new all-day event.
       *
       *
       *     // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival',
       *         new Date('August 15, 1969'),
       *         new Date('August 18, 1969'),
       *         {location: 'Bethel, White Lake, New York, U.S.', sendInvites: true});
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar#createAllDayEvent(String,Date,Date,Object)
       * @param title the title of the event
       * @param startDate the date when the event starts (only the day is used; the time is ignored)
       * @param endDate the date when the event ends (only the day is used; the time is ignored)
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createAllDayEvent(title: string, startDate: Date, endDate: Date, options: object): CalendarEvent;

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
       * @param title the title of the event
       * @param date the date of the event (only the day is used; the time is ignored)
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createAllDayEvent(title: string, date: Date, options: object): CalendarEvent;

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
      createAllDayEventSeries(title: string, startDate: Date, recurrence: EventRecurrence, options: object): CalendarEventSeries;

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
      createEvent(title: string, startTime: Date, endTime: Date, options: object): CalendarEvent;

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
      createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: EventRecurrence, options: object): CalendarEventSeries;

      /**
       * Deletes the calendar permanently. A user can only delete a calendar they own.
       * https://developers.google.com/apps-script/reference/calendar/calendar#deleteCalendar()
       */
      deleteCalendar(): void;

      /**
       * Gets the color of the calendar.
       * https://developers.google.com/apps-script/reference/calendar/calendar#getColor()
       */
      getColor(): string;

      /**
       * Gets the description of the calendar.
       * https://developers.google.com/apps-script/reference/calendar/calendar#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the event with the given ID. If the series belongs to a calendar other than the default
       * calendar, this method must be called from that Calendar. Calling CalendarApp.getEventById(iCalId) only
       * returns an event in the default calendar.
       *
       *
       * Multiple events may have the same ID if they are part of an event series. In this case this
       * method returns only the first event from that series.
       * https://developers.google.com/apps-script/reference/calendar/calendar#getEventById(String)
       * @param iCalId ID of the event
       */
      getEventById(iCalId: string): CalendarEvent;

      /**
       * Gets the event series with the given ID. If the ID given is for a single CalendarEvent,
       * then a CalendarEventSeries is returned with a single event in the series. Note that if
       * the event series belongs to a calendar other than the default calendar, this method must be
       * called from that Calendar; calling CalendarApp.getEventSeriesById(iCalId)
       * directly only returns an event series that exists in the default calendar.
       * https://developers.google.com/apps-script/reference/calendar/calendar#getEventSeriesById(String)
       * @param iCalId ID of the event series
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
      getEvents(startTime: Date, endTime: Date, options: object): CalendarEvent[];

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
      getEventsForDay(date: Date, options: object): CalendarEvent[];

      /**
       * Gets the ID of the calendar. The ID for a user's default calendar is their email address.
       * https://developers.google.com/apps-script/reference/calendar/calendar#getId()
       */
      getId(): string;

      /**
       * Gets the name of the calendar.
       * https://developers.google.com/apps-script/reference/calendar/calendar#getName()
       */
      getName(): string;

      /**
       * Gets the time zone of the calendar.
       * https://developers.google.com/apps-script/reference/calendar/calendar#getTimeZone()
       */
      getTimeZone(): string;

      /**
       * Determines whether the calendar is hidden in the user interface.
       * https://developers.google.com/apps-script/reference/calendar/calendar#isHidden()
       */
      isHidden(): boolean;

      /**
       * Determines whether the calendar is the default calendar for the effective user.
       * https://developers.google.com/apps-script/reference/calendar/calendar#isMyPrimaryCalendar()
       */
      isMyPrimaryCalendar(): boolean;

      /**
       * Determines whether the calendar is owned by the effective user.
       * https://developers.google.com/apps-script/reference/calendar/calendar#isOwnedByMe()
       */
      isOwnedByMe(): boolean;

      /**
       * Determines whether the calendar's events are displayed in the user interface.
       * https://developers.google.com/apps-script/reference/calendar/calendar#isSelected()
       */
      isSelected(): boolean;

      /**
       * Sets the color of the calendar.
       * https://developers.google.com/apps-script/reference/calendar/calendar#setColor(String)
       * @param color a hexadecimal color string ("#rrggbb") or a value from CalendarApp.Colors
       */
      setColor(color: string): Calendar;

      /**
       * Sets the description of the calendar.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar#setName(String)
       * @param name the new name
       */
      setName(name: string): Calendar;

      /**
       * Sets whether the calendar's events are displayed in the user interface.
       * https://developers.google.com/apps-script/reference/calendar/calendar#setSelected(Boolean)
       * @param selected true to show the calendar's events in the user interface; false to hide them
       */
      setSelected(selected: boolean): Calendar;

      /**
       * Sets the time zone of the calendar.
       * https://developers.google.com/apps-script/reference/calendar/calendar#setTimeZone(String)
       * @param timeZone the time zone, specified in "long" format (e.g., "America/New_York", as listed by Joda.org)
       */
      setTimeZone(timeZone: string): Calendar;

      /**
       * Unsubscribes the user from the calendar. A user cannot unsubscribe from a calendar they own.
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
       * @param title the title of the event
       * @param date the date of the event (only the day is used; the time is ignored)
       */
      createAllDayEvent(title: string, date: Date): CalendarEvent;

      /**
       * Creates a new all-day event.
       *
       *
       *     // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival',
       *         new Date('August 15, 1969'),
       *         new Date('August 18, 1969'));
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createAllDayEvent(String,Date,Date)
       * @param title the title of the event
       * @param startDate the date when the event starts (only the day is used; the time is ignored)
       * @param endDate the date when the event ends (only the day is used; the time is ignored)
       */
      createAllDayEvent(title: string, startDate: Date, endDate: Date): CalendarEvent;

      /**
       * Creates a new all-day event.
       *
       *
       *     // Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
       *     var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival',
       *         new Date('August 15, 1969'),
       *         new Date('August 18, 1969'),
       *         {location: 'Bethel, White Lake, New York, U.S.', sendInvites: true});
       *     Logger.log('Event ID: ' + event.getId());
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#createAllDayEvent(String,Date,Date,Object)
       * @param title the title of the event
       * @param startDate the date when the event starts (only the day is used; the time is ignored)
       * @param endDate the date when the event ends (only the day is used; the time is ignored)
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createAllDayEvent(title: string, startDate: Date, endDate: Date, options: object): CalendarEvent;

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
       * @param title the title of the event
       * @param date the date of the event (only the day is used; the time is ignored)
       * @param options a JavaScript object that specifies advanced parameters, as listed below
       */
      createAllDayEvent(title: string, date: Date, options: object): CalendarEvent;

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
      createAllDayEventSeries(title: string, startDate: Date, recurrence: EventRecurrence, options: object): CalendarEventSeries;

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
      createCalendar(name: string, options: object): Calendar;

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
      createEvent(title: string, startTime: Date, endTime: Date, options: object): CalendarEvent;

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
      createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: EventRecurrence, options: object): CalendarEventSeries;

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
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the event with the given ID. If the series belongs to a calendar other than the default
       * calendar, this method must be called from that CalendarApp. Calling getEventById(iCalId) only
       * returns an event in the default calendar.
       *
       *
       * Multiple events may have the same ID if they are part of an event series. In this case this
       * method returns only the first event from that series.
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getEventById(String)
       * @param iCalId ID of the event
       */
      getEventById(iCalId: string): CalendarEvent;

      /**
       * Gets the event series with the given ID. If the ID given is for a single CalendarEvent,
       * then a CalendarEventSeries is returned with a single event in the series. Note that if
       * the event series belongs to a calendar other than the default calendar, this method must be
       * called from that CalendarApp; calling getEventSeriesById(iCalId)
       * directly only returns an event series that exists in the default calendar.
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getEventSeriesById(String)
       * @param iCalId ID of the event series
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
      getEvents(startTime: Date, endTime: Date, options: object): CalendarEvent[];

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
      getEventsForDay(date: Date, options: object): CalendarEvent[];

      /**
       * Gets the ID of the calendar. The ID for a user's default calendar is their email address.
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getId()
       */
      getId(): string;

      /**
       * Gets the name of the calendar.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#getTimeZone()
       */
      getTimeZone(): string;

      /**
       * Determines whether the calendar is hidden in the user interface.
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#isHidden()
       */
      isHidden(): boolean;

      /**
       * Determines whether the calendar is the default calendar for the effective user.
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#isMyPrimaryCalendar()
       */
      isMyPrimaryCalendar(): boolean;

      /**
       * Determines whether the calendar is owned by the effective user.
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#isOwnedByMe()
       */
      isOwnedByMe(): boolean;

      /**
       * Determines whether the calendar's events are displayed in the user interface.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#setColor(String)
       * @param color a hexadecimal color string ("#rrggbb") or a value from CalendarApp.Colors
       */
      setColor(color: string): Calendar;

      /**
       * Sets the description of the calendar.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#setName(String)
       * @param name the new name
       */
      setName(name: string): Calendar;

      /**
       * Sets whether the calendar's events are displayed in the user interface.
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#setSelected(Boolean)
       * @param selected true to show the calendar's events in the user interface; false to hide them
       */
      setSelected(selected: boolean): Calendar;

      /**
       * Sets the time zone of the calendar.
       * https://developers.google.com/apps-script/reference/calendar/calendar-app#setTimeZone(String)
       * @param timeZone the time zone, specified in "long" format (e.g., "America/New_York", as listed by Joda.org)
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
      subscribeToCalendar(id: string, options: object): Calendar;
    }
    /**
     * Represents a single calendar event.
     */
    interface CalendarEvent {

      /**
       * Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most 4
       * weeks (40320 minutes), before the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#addEmailReminder(Integer)
       * @param minutesBefore the number of minutes before the event
       */
      addEmailReminder(minutesBefore: Integer): CalendarEvent;

      /**
       * Adds a guest to the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#addGuest(String)
       * @param email the email address of the guest
       */
      addGuest(email: string): CalendarEvent;

      /**
       * Adds a new popup reminder to the event. The reminder must be at least 5 minutes, and at most 4
       * weeks (40320 minutes), before the event.
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
       * Determines whether anyone can invite themselves.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#anyoneCanAddSelf()
       */
      anyoneCanAddSelf(): boolean;

      /**
       * Deletes the event.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getAllDayEndDate()
       */
      getAllDayEndDate(): Date;

      /**
       * Gets the date on which this all-day calendar event begins. (If this is not an all-day event,
       * then this method throws an exception.) The returned Date represents midnight at the
       * beginning of the day on which the event starts in the script's time zone. To use the
       * calendar's time zone instead, call getStartTime().
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getColor()
       */
      getColor(): string;

      /**
       * Gets the creators of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getCreators()
       */
      getCreators(): string[];

      /**
       * Gets the date the event was created.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getDateCreated()
       */
      getDateCreated(): Date;

      /**
       * Gets the description of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the minute values for all email reminders for the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getEmailReminders()
       */
      getEmailReminders(): Integer[];

      /**
       * Gets the date and time at which this calendar event ends. For non–all-day events, this is
       * the instant in time at which the event was defined to end. For all-day events, which only store
       * an end date (not a date and time), this is midnight at the beginning of the day after the event
       * ends in the calendar's time zone. This allows meaningful comparison of end times for
       * all types of events; however, it does not necessarily preserve the original day-of-year
       * unmodified.
       *
       *
       * For all-day events, getAllDayEndDate() should almost
       * always be called in preference to this method.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getEndTime()
       */
      getEndTime(): Date;

      /**
       * Gets the series of recurring events that this event belongs to. A CalendarEventSeries
       * object is returned even if this event doesn't belong to a series, so that you can add new
       * recurrence settings.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getEventSeries()
       */
      getEventSeries(): CalendarEventSeries;

      /**
       * Gets a guest by email address.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getGuestByEmail(String)
       * @param email the address of the guest
       */
      getGuestByEmail(email: string): EventGuest;

      /**
       * Gets the guests for the event, not including the event owner.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getGuestList()
       */
      getGuestList(): EventGuest[];

      /**
       * Gets the guests for the event, potentially including the event owners.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getGuestList(Boolean)
       * @param includeOwner whether to include the owners as a guest
       */
      getGuestList(includeOwner: boolean): EventGuest[];

      /**
       * Gets the unique iCalUID of the event. Note that the iCalUID and the event id used by the Calendar v3 API and Calendar advanced service are not identical and
       * cannot be used interchangebly. One difference in their semantics is that in recurring events
       * all occurrences of one event have different ids while they all share the same iCalUIDs.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getId()
       */
      getId(): string;

      /**
       * Gets the date the event was last updated.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Gets the location of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getLocation()
       */
      getLocation(): string;

      /**
       * Gets the event status (attending, etc.) of the effective user. Always returns GuestStatus.OWNER if the effective user is the owner of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getMyStatus()
       */
      getMyStatus(): GuestStatus;

      /**
       * Get the ID of the calendar where this event was originally created.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getOriginalCalendarId()
       */
      getOriginalCalendarId(): string;

      /**
       * Gets the minute values for all popup reminders for the event.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the visibility of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#getVisibility()
       */
      getVisibility(): Visibility;

      /**
       * Determines whether guests can invite other guests.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#guestsCanInviteOthers()
       */
      guestsCanInviteOthers(): boolean;

      /**
       * Determines whether guests can modify the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#guestsCanModify()
       */
      guestsCanModify(): boolean;

      /**
       * Determines whether guests can see other guests.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#guestsCanSeeGuests()
       */
      guestsCanSeeGuests(): boolean;

      /**
       * Determines whether this is an all-day event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#isAllDayEvent()
       */
      isAllDayEvent(): boolean;

      /**
       * Determines whether the event is owned by the effective user.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#isOwnedByMe()
       */
      isOwnedByMe(): boolean;

      /**
       * Determines whether the event is part of an event series.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#isRecurringEvent()
       */
      isRecurringEvent(): boolean;

      /**
       * Removes all reminders from the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#removeAllReminders()
       */
      removeAllReminders(): CalendarEvent;

      /**
       * Removes a guest from the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#removeGuest(String)
       * @param email the email address of the guest
       */
      removeGuest(email: string): CalendarEvent;

      /**
       * Resets the reminders using the calendar's default settings.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#resetRemindersToDefault()
       */
      resetRemindersToDefault(): CalendarEvent;

      /**
       * Sets the date of the event. Applying this method changes a regular event into an all-day event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setAllDayDate(Date)
       * @param date the date for the event (the time is ignored)
       */
      setAllDayDate(date: Date): CalendarEvent;

      /**
       * Sets the dates of the event. Applying this method changes a regular event into an all-day
       * event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setAllDayDates(Date,Date)
       * @param startDate the date when the event starts (the time is ignored)
       * @param endDate the date when the event ends (the time is ignored)
       */
      setAllDayDates(startDate: Date, endDate: Date): CalendarEvent;

      /**
       * Sets whether non-guests can add themselves to the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setAnyoneCanAddSelf(Boolean)
       * @param anyoneCanAddSelf whether anyone can invite themselves
       */
      setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): CalendarEvent;

      /**
       * Sets the color of the calendar event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setColor(String)
       * @param color an integer color index as a string, or a value from CalendarApp.EventColors
       */
      setColor(color: string): CalendarEvent;

      /**
       * Sets the description of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setDescription(String)
       * @param description the new description
       */
      setDescription(description: string): CalendarEvent;

      /**
       * Sets whether guests can invite other guests.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setLocation(String)
       * @param location the new location
       */
      setLocation(location: string): CalendarEvent;

      /**
       * Sets the event status (attending, etc.) of the effective user.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-event#setTime(Date,Date)
       * @param startTime the new start of the event
       * @param endTime the new end of the event
       */
      setTime(startTime: Date, endTime: Date): CalendarEvent;

      /**
       * Sets the title of the event.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#addEmailReminder(Integer)
       * @param minutesBefore the number of minutes before the event
       */
      addEmailReminder(minutesBefore: Integer): CalendarEventSeries;

      /**
       * Adds a guest to the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#addGuest(String)
       * @param email the email address of the guest
       */
      addGuest(email: string): CalendarEventSeries;

      /**
       * Adds a new popup reminder to the event. The reminder must be at least 5 minutes, and at most 4
       * weeks (40320 minutes), before the event.
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
       * Determines whether anyone can invite themselves.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getColor()
       */
      getColor(): string;

      /**
       * Gets the creators of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getCreators()
       */
      getCreators(): string[];

      /**
       * Gets the date the event was created.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getDateCreated()
       */
      getDateCreated(): Date;

      /**
       * Gets the description of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getDescription()
       */
      getDescription(): string;

      /**
       * Gets the minute values for all email reminders for the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getEmailReminders()
       */
      getEmailReminders(): Integer[];

      /**
       * Gets a guest by email address.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getGuestByEmail(String)
       * @param email the address of the guest
       */
      getGuestByEmail(email: string): EventGuest;

      /**
       * Gets the guests for the event, not including the event owner.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getGuestList()
       */
      getGuestList(): EventGuest[];

      /**
       * Gets the guests for the event, potentially including the event owners.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getGuestList(Boolean)
       * @param includeOwner whether to include the owners as a guest
       */
      getGuestList(includeOwner: boolean): EventGuest[];

      /**
       * Gets the unique iCalUID of the event. Note that the iCalUID and the event id used by the Calendar v3 API and Calendar advanced service are not identical and
       * cannot be used interchangebly. One difference in their semantics is that in recurring events
       * all occurrences of one event have different ids while they all share the same iCalUIDs.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getId()
       */
      getId(): string;

      /**
       * Gets the date the event was last updated.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getLastUpdated()
       */
      getLastUpdated(): Date;

      /**
       * Gets the location of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getLocation()
       */
      getLocation(): string;

      /**
       * Gets the event status (attending, etc.) of the effective user. Always returns GuestStatus.OWNER if the effective user is the owner of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getMyStatus()
       */
      getMyStatus(): GuestStatus;

      /**
       * Get the ID of the calendar where this event was originally created.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getOriginalCalendarId()
       */
      getOriginalCalendarId(): string;

      /**
       * Gets the minute values for all popup reminders for the event.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getTitle()
       */
      getTitle(): string;

      /**
       * Gets the visibility of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#getVisibility()
       */
      getVisibility(): Visibility;

      /**
       * Determines whether guests can invite other guests.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#guestsCanInviteOthers()
       */
      guestsCanInviteOthers(): boolean;

      /**
       * Determines whether guests can modify the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#guestsCanModify()
       */
      guestsCanModify(): boolean;

      /**
       * Determines whether guests can see other guests.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#guestsCanSeeGuests()
       */
      guestsCanSeeGuests(): boolean;

      /**
       * Determines whether the event is owned by the effective user.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#isOwnedByMe()
       */
      isOwnedByMe(): boolean;

      /**
       * Removes all reminders from the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#removeAllReminders()
       */
      removeAllReminders(): CalendarEventSeries;

      /**
       * Removes a guest from the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#removeGuest(String)
       * @param email the email address of the guest
       */
      removeGuest(email: string): CalendarEventSeries;

      /**
       * Resets the reminders using the calendar's default settings.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#resetRemindersToDefault()
       */
      resetRemindersToDefault(): CalendarEventSeries;

      /**
       * Sets whether non-guests can add themselves to the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setAnyoneCanAddSelf(Boolean)
       * @param anyoneCanAddSelf whether anyone can invite themselves
       */
      setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): CalendarEventSeries;

      /**
       * Sets the color of the calendar event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setColor(String)
       * @param color an integer color index as a string, or a value from CalendarApp.EventColors
       */
      setColor(color: string): CalendarEventSeries;

      /**
       * Sets the description of the event.
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setDescription(String)
       * @param description the new description
       */
      setDescription(description: string): CalendarEventSeries;

      /**
       * Sets whether guests can invite other guests.
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
       * https://developers.google.com/apps-script/reference/calendar/calendar-event-series#setLocation(String)
       * @param location the new location
       */
      setLocation(location: string): CalendarEventSeries;

      /**
       * Sets the event status (attending, etc.) of the effective user.
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
     */
    enum Color { BLUE, BROWN, CHARCOAL, CHESTNUT, GRAY, GREEN, INDIGO, LIME, MUSTARD, OLIVE, ORANGE, PINK, PLUM, PURPLE, RED, RED_ORANGE, SEA_BLUE, SLATE, TEAL, TURQOISE, YELLOW }
    /**
     * An enum representing the named event colors available in the Calendar service.
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
     */
    enum Visibility { CONFIDENTIAL, DEFAULT, PRIVATE, PUBLIC }
  }
}

declare var CalendarApp: GoogleAppsScript.Calendar.CalendarApp;
