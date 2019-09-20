
const logo = document.getElementsByClassName('logo')[0];
let currentPage = document.URL;

// TOUR DATES ARRAYS
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

moreTourDates = [
    {
        month: 'OCT',
        day: '15',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
    {
        month: 'OCT',
        day: '22',
        time: '6:00pm',
        venue: 'The Station Inn',
        location: 'Nashville, TN, USA',
        linkToTickets: 'https://www.ticketmaster.com/',
    },
    {
        month: 'OCT',
        day: '29',
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
    if (tourArr === tourDates) {
        printToDom('tour-dates', tourCard)
    } else if (tourArr === moreTourDates) {
        printToDom('show-me-more', tourCard)
    }
};

// MESSAGE TO SHOW WHEN BUTTON IS CLICKED
const printMessage = () => {
    let showMoreMessageDivContent = document.getElementById('show-me-more').innerHTML;
    let removeSMButton = document.getElementById('SMButton');
    if (showMoreMessageDivContent === '') {
        tourDatePrinter(moreTourDates);
        while (removeSMButton.hasChildNodes()) {
            removeSMButton.removeChild(removeSMButton.firstChild);
        }
    }
}


// SHOW MORE BUTTON EVENT LISTENER
//document.getElementById('show-more').addEventListener('click', printMessage);



const checkPrev = () => {
    if (document.referrer.includes('index.html')) {
        logo.className += ' firstAnimation';
    } else {
        logo.className += ' leftToRight';
    }
}

const pageCheck = () => {
    if (currentPage.includes('tour.html')) {
        tourDatePrinter(tourDates);
        // SHOW MORE BUTTON EVENT LISTENER
        document.getElementById('show-more').addEventListener('click', printMessage);
        checkPrev();

    } else if (currentPage.includes('index.html')) {
        logo.className - ' firstAnimation';

    } else if (currentPage.includes('about.html')) {
        checkPrev();
        
    } else if (currentPage.includes('disc.html')) {
        checkPrev();    
    }
}

// INIT
const init = () => {
    window.addEventListener('load', pageCheck);
}

init();


// ABOUT PAGE MEMBER PROFILE CARDS
const bandMembers = [
    {
    image: '/images/terrysharpe.jpg',
    name: 'Terry Sharpe',
    instrument: 'Vocals & Guitar'
  },
  {
    image: '/images/paulbowen.jpg',
    name: 'Paul Bowen',
    instrument: 'Guitar & Vocals'
},
{
    image: '/images/seanmartin.jpg',
    name: 'Sean Martin',
    instrument: 'Bass Guitar'
},{
    image: '/images/LiamLEstrange.jpg',
    name: "Liam L'Estrange",
    instrument: 'Drums'
},
    
]


const bandBuilder = (bandArray) =>{
    let aboutBandCard='';
    for (let i=0; i < bandArray.length; i++){
        const bandCard= bandArray[i];
        aboutBandCard +=`
        <div class="bandCard">
            <h2>${bandCard.name}</h2>
            <img src="${bandCard.image}" alt="Image of ${bandCard.name}"/>
            <p>${bandCard.instrument}</p>
        </div>
        `
    }
    console.log("${bandcard.name}");
    printToDom('aboutMembersZone', aboutBandCard);
}
bandBuilder(bandMembers);
=======

init();
