var events = [
    exampleEvent => { console.log("Example text"); },
    blaEvent => { console.log("Bla bla bla"); }
];

function dice() { return Math.floor(Math.random() * events.length); }

// Użycie losowego eventu:
// events[dice()].call();

// Użycie konkretnego eventu:
// events[NAZWA_EVENTU].call();
