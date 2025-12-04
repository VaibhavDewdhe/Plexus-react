let a = ["smitasutar",
    "Shweta",
    "madhura",
    "Vedika",
    "Rutuja Jagtap ",
    "tejal",
    "pragati",
    "Nikita",
    "Akanksha",
    "jumpu"
];



let result = a.map((element, index) => element.charAt(0).toUpperCase() + element.substring(1) );

console.log(result)

