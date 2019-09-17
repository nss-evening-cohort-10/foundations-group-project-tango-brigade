console.log('holaaaa');

// TOUR DATES ARRAY
tourDates = [
    {
        month: 'SEP',
        day: '24',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
    {
        month: 'OCT',
        day: '1',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
    {
        month: 'OCT',
        day: '8',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
];

// PRINT TO DOM FUNCTION
const printToDom = (divId, stringToPrint) => {
    document.getElementById(divId).innerHTML = stringToPrint;
};

// PRINTS TOUR DATES BANNERS TO PAGE
const tourDatePrinter = (tourArr) => {
    let tourCard = '';
    for (let i = 0; i < tourArr.length; i++) {
        tourCard += `
        <div class="tour row d-flex align-items-center">
            <div class="date-zone col-1">
                <div class="row date-zone-row month">${tourArr[i].month}</div>
                <div class="row date-zone-row day">${tourArr[i].day}</div>
                <div class="row date-zone-row time">${tourArr[i].time}</div>
            </div>
            <div class="col-4 venue">${tourArr[i].venue}</div>
            <div class="col-4 location">${tourArr[i].location}</div>
            <div class="col-2 button"><a href="${tourArr[i].linkToTickets}" class="btn btn-primary">Buy Tickets</a></div>
        </div>
        `
    }
    printToDom('tour-dates', tourCard)
};

tourDatePrinter(tourDates);