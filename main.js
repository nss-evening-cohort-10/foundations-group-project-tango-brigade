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
            <div class="col-2 button"><a href="${tourArr[i].linkToTickets}" target="_blank" class="btn btn-primary">Buy Tickets</a></div>
        </div>
        `
    }
    printToDom('tour-dates', tourCard)
};



// MESSAGE TO SHOW WHEN BUTTON IS CLICKED
const printMessage = () => {
    let showMoreMessageDivContent = document.getElementById('show-more-message').innerHTML;
    let showMoreMessageDiv = document.getElementById('show-more-message');
    if (showMoreMessageDivContent === '') {
        let showMoreMessage = `NO UPCOMING SHOWS`
        printToDom('show-more-message', showMoreMessage);
    } else {
        while (showMoreMessageDiv.hasChildNodes()) {
            showMoreMessageDiv.removeChild(showMoreMessageDiv.firstChild);
    }
}
}

// SHOW MORE BUTTON EVENT LISTENER
document.getElementById('show-more').addEventListener('click', printMessage);

// INIT
const init = () => {
    if (document.URL.includes('tour')) {
        tourDatePrinter(tourDates);
    }
}
init()