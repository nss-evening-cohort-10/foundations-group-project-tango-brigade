
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
            <div class="col-2 button"><a href="${tourArr[i].linkToTickets}" target="_blank" class="btn btn-primary">BUY TICKETS</a></div>
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
const printNewMessage = () => {
    let removeEmailForm = document.getElementById('email-zone');
    let newString = `
    <div id="email-message">
    <h2>THANK YOU FOR SUBSCRIBING!</h2>
    <a href="/about.html" class="btn btn-primary">READ MORE</a>
    </div>
    `
        while (removeEmailForm.hasChildNodes()) {
            removeEmailForm.removeChild(removeEmailForm.firstChild);
            console.log(('#email-zone').innerHTML);
        }
        printToDom('email-message', newString);
        document.getElementById('read-more').addEventListener('click', printMessage);
    }

const printMessage = () => {
    let removeSMButton = document.getElementById('SMButton');
        tourDatePrinter(moreTourDates);
        while (removeSMButton.hasChildNodes()) {
            removeSMButton.removeChild(removeSMButton.firstChild);
        }
}

// EMAIL FORM
const printEmailForm = () => {
    let emailString = `
    <div>
    <h2>STAY IN TOUCH</h2>
    <P>Subscribe to email updates to stay up to date with news from the Tango Brigade.</P>
    <form class="row">
        <div class="form-group col-9">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@email.com">
        </div>
        <button type="button" id="subscribe" class="col-3 btn btn-primary">SUBSCRIBE</button>
    </form>
    </div>
    `
    printToDom('email-zone', emailString);
}


const checkPrev = () => {
    if (document.referrer.includes('index.html')) {
        logo.className += ' firstAnimation';
    } else {
        logo.className += ' leftToRight';
    }
}

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
},
{
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


// DISC PAGE ARRAYS
const tangoSingles = [
    {
        albumArt: 'https://img.discogs.com/K1D4-fJyXC7caO6HIUvBcLwmjNo=/fit-in/490x495/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3173532-1319058781.jpeg.jpg',
        title: 'Donegal',
        genre: 'Rock',
        style: 'Power Pop, Punk',
        year: '1981',
        length: '2:33',
    },
    {
        albumArt: 'https://img.discogs.com/Lmv4w_Eo8QrSkEfzDr72pPmlCc0=/fit-in/495x494/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3173532-1319058788.jpeg.jpg',
        title: 'In Vain',
        genre: 'Rock',
        style: 'Power Pop, Punk',
        year: '1981',
        length: '3:58',
    },
]

const starjetsSingles = [
    {
        albumArt: 'https://img.discogs.com/nVIPB0kOEPpOYzsEyDiREsKKMwI=/fit-in/600x588/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2763503-1454090346-5512.jpeg.jpg',
        title: 'Shiraleo',
        genre: 'Rock',
        style: 'New Wave, Punk',
        year: '1980',
        length: '3:05',
    },
    {
        albumArt: 'https://img.discogs.com/8wYrtsrCchKeOcRj8l8tX40_tzA=/fit-in/389x392/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2763518-1363288596-1803.png.jpg',
        title: 'Schooldays',
        genre: 'Rock',
        style: 'Punk',
        year: '1979',
        length: '3:10',
    },
    {
        albumArt: 'https://img.discogs.com/OGMaZ-1BItKlgGQShGlCrMbrFqE=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2187103-1560481243-4479.jpeg.jpg',
        title: 'War Stories',
        genre: 'Rock',
        style: 'Power Pop',
        year: '1979',
        length: '3:12',
    },
    {
        albumArt: 'https://img.discogs.com/yTV9GjghvGaYtE5r9jL7X9yDe08=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1404033-1560480775-8379.jpeg.jpg',
        title: 'Ten Years',
        genre: 'Rock',
        style: 'New Wave, Power Pop',
        year: '1979',
        length: '3:20',
    },
    {
        albumArt: 'https://img.discogs.com/dd616C9hAiVRWxPLnLMYSFj1Fkw=/fit-in/600x609/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11717726-1521197245-6762.jpeg.jpg',
        title: "It Really Doesn't Matter",
        genre: 'Rock',
        style: 'Pop Punk',
        year: '1979',
        length: '3:07',
    },
    {
        albumArt: 'https://img.discogs.com/OOvU2azluPFYnd4v_MRhll5Ls8o=/fit-in/591x593/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2244745-1392388032-1911.jpeg.jpg',
        title: 'Here She Comes Again',
        genre: 'Rock',
        style: 'Punk',
        year: '1978',
        length: '3:22',
    },
];

const starjetsAlbums = [
    {
        albumArt: 'https://img.discogs.com/xubyZAIv_YPT8t4J9Mx9VNc4ohw=/fit-in/600x593/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3521390-1398544495-9162.jpeg.jpg',
        albumTitle: 'God Bless Starjets: The Punk Collection',
        albumYear: '1999',
        record: 'Epic',
    },
    {
        albumArt: 'https://img.discogs.com/LQjx89380Xp-Ok74uhxtZsz9opA=/fit-in/600x584/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10949196-1522281917-2768.jpeg.jpg',
        albumTitle: 'The 1979 Belfast Demo Session Volume II',
        albumYear: '1979, 2018',
        record: 'Spit Records',
    },
    {
        albumArt: 'https://img.discogs.com/y0Q_1EcsP9x08RjQZPn33GhN0DM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10637314-1521049514-9146.jpeg.jpg',
        albumTitle: 'The 1979 Belfast Demo Session Volume I',
        albumYear: '1979, 2018',
        record: 'Spit Records',
    },
    {
        albumArt: 'https://img.discogs.com/KEAhNtDSz7x6xJcVgiuimJFG5Ng=/fit-in/600x605/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1321394-1564910928-8348.jpeg.jpg',
        albumTitle: 'God Bless Starjets',
        albumYear: '1979',
        record: 'Epic',
    },
];


// PAGE LOAD CHECK DO NOT PUT ANYTHING BELOW THIS
const pageCheck = () => {
    if (currentPage.includes('tour.html')) {
        tourDatePrinter(tourDates);
        checkPrev();
        printEmailForm();
        document.getElementById('show-more').addEventListener('click', printMessage);
        document.getElementById('subscribe').addEventListener('click', printNewMessage);

    } else if (currentPage.includes('index.html')) {
        logo.className - ' firstAnimation';

    } else if (currentPage.includes('about.html')) {
        checkPrev();
        bandBuilder(bandMembers);
        
    } else if (currentPage.includes('disc.html')) {
        checkPrev();    
    }
}

// INIT
const init = () => {
    window.addEventListener('load', pageCheck);
}
init();
