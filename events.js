var events = [
    orkEvent => { console.log("Jestem złym orkiem i chcę Cię zabić!!"); },
    orkEvent2 => { console.log("Jestem złym orkiem i chcę Cię zabić!!"); },
    orkEvent3 => { console.log("2Jestem złym orkiem i chcę Cię zabić!!"); },
    orkEvent4 => { console.log("3Jestem złym orkiem i chcę Cię zabić!!"); },
    orkEvent5 => { console.log("4Jestem złym orkiem i chcę Cię zabić!!"); },
    orkEvent6 => { console.log("5Jestem złym orkiem i chcę Cię zabić!!"); },
    orkEvent7 => { console.log("6Jestem złym orkiem i chcę Cię zabić!!"); },
    blaEvent => { console.log("Bla bla bla"); }
];

function dice() { return Math.floor(Math.random() * events.length); }

// Użycie losowego eventu:
// events[dice()].call();

// Użycie konkretnego eventu:
// events[NAZWA_EVENTU].call();
