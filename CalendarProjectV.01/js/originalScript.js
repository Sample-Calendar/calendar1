// js/originalscript.js
import { events } from './eventData.js';

document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');

   

    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',initialDate: '2025-01-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: events
    })
    calendar.render()
  })