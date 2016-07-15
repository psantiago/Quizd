﻿interface Country {
    country: string;
    capital: string;
}

let countries: Array<Country> = [
    {
        "country": "Abkhazia",
        "capital": "Sukhumi",
    },
    {
        "country": "Afghanistan",
        "capital": "Kabul"
    },
    {
        "country": "Akrotiri and Dhekelia",
        "capital": "Episkopi Cantonment"
    },
    {
        "country": "Albania",
        "capital": "Tirana"
    },
    {
        "country": "Algeria",
        "capital": "Algiers"
    },
    {
        "country": "American Samoa",
        "capital": "Pago Pago"
    },
    {
        "country": "Andorra",
        "capital": "Andorra la Vella"
    },
    {
        "country": "Angola",
        "capital": "Luanda"
    },
    {
        "country": "Anguilla",
        "capital": "The Valley"
    },
    {
        "country": "Antigua and Barbuda",
        "capital": "St. John's"
    },
    {
        "country": "Argentina",
        "capital": "Buenos Aires"
    },
    {
        "country": "Armenia",
        "capital": "Yerevan"
    },
    {
        "country": "Aruba",
        "capital": "Oranjestad"
    },
    {
        "country": "Ascension Island",
        "capital": "Georgetown"
    },
    {
        "country": "Australia",
        "capital": "Canberra"
    },
    {
        "country": "Austria",
        "capital": "Vienna"
    },
    {
        "country": "Azerbaijan",
        "capital": "Baku"
    },
    {
        "country": "Bahamas",
        "capital": "Nassau"
    },
    {
        "country": "Bahrain",
        "capital": "Manama"
    },
    {
        "country": "Bangladesh",
        "capital": "Dhaka"
    },
    {
        "country": "Barbados",
        "capital": "Bridgetown"
    },
    {
        "country": "Belarus",
        "capital": "Minsk"
    },
    {
        "country": "Belgium",
        "capital": "Brussels"
    },
    {
        "country": "Belize",
        "capital": "Belmopan"
    },
    {
        "country": "Benin",
        "capital": "Porto-Novo"
    },
    {
        "country": "Bermuda",
        "capital": "Hamilton"
    },
    {
        "country": "Bhutan",
        "capital": "Thimphu"
    },
    {
        "country": "Bolivia",
        "capital": "Sucre"
    },
    {
        "country": "Bolivia",
        "capital": "La Paz"
    },
    {
        "country": "Bosnia and Herzegovina",
        "capital": "Sarajevo"
    },
    {
        "country": "Botswana",
        "capital": "Gaborone"
    },
    {
        "country": "Brazil",
        "capital": "Brasília"
    },
    {
        "country": "British Virgin Islands",
        "capital": "Road Town"
    },
    {
        "country": "Brunei",
        "capital": "Bandar Seri Begawan"
    },
    {
        "country": "Bulgaria",
        "capital": "Sofia"
    },
    {
        "country": "Burkina Faso",
        "capital": "Ouagadougou"
    },
    {
        "country": "Burundi",
        "capital": "Bujumbura"
    },
    {
        "country": "Cambodia",
        "capital": "Phnom Penh"
    },
    {
        "country": "Cameroon",
        "capital": "Yaoundé"
    },
    {
        "country": "Canada",
        "capital": "Ottawa"
    },
    {
        "country": "Cape Verde",
        "capital": "Praia"
    },
    {
        "country": "Cayman Islands",
        "capital": "George Town"
    },
    {
        "country": "Central African Republic",
        "capital": "Bangui"
    },
    {
        "country": "Chad",
        "capital": "N'Djamena"
    },
    {
        "country": "Chile",
        "capital": "Santiago"
    },
    {
        "country": "China",
        "capital": "Beijing"
    },
    {
        "country": "Christmas Island",
        "capital": "Flying Fish Cove"
    },
    {
        "country": "Cocos (Keeling) Islands",
        "capital": "West Island"
    },
    {
        "country": "Colombia",
        "capital": "Bogotá"
    },
    {
        "country": "Comoros",
        "capital": "Moroni"
    },
    {
        "country": "Cook Islands",
        "capital": "Avarua"
    },
    {
        "country": "Costa Rica",
        "capital": "San José"
    },
    {
        "country": "Croatia",
        "capital": "Zagreb"
    },
    {
        "country": "Cuba",
        "capital": "Havana"
    },
    {
        "country": "Curaçao",
        "capital": "Willemstad"
    },
    {
        "country": "Cyprus",
        "capital": "Nicosia"
    },
    {
        "country": "Czech Republic",
        "capital": "Prague"
    },
    {
        "country": "Côte d'Ivoire",
        "capital": "Yamoussoukro"
    },
    {
        "country": "Democratic Republic of the Congo",
        "capital": "Kinshasa"
    },
    {
        "country": "Denmark",
        "capital": "Copenhagen"
    },
    {
        "country": "Djibouti",
        "capital": "Djibouti"
    },
    {
        "country": "Dominica",
        "capital": "Roseau"
    },
    {
        "country": "Dominican Republic",
        "capital": "Santo Domingo"
    },
    {
        "country": "East Timor (Timor-Leste)",
        "capital": "Dili"
    },
    {
        "country": "Easter Island",
        "capital": "Hanga Roa"
    },
    {
        "country": "Ecuador",
        "capital": "Quito"
    },
    {
        "country": "Egypt",
        "capital": "Cairo"
    },
    {
        "country": "El Salvador",
        "capital": "San Salvador"
    },
    {
        "country": "Equatorial Guinea",
        "capital": "Malabo"
    },
    {
        "country": "Eritrea",
        "capital": "Asmara"
    },
    {
        "country": "Estonia",
        "capital": "Tallinn"
    },
    {
        "country": "Ethiopia",
        "capital": "Addis Ababa"
    },
    {
        "country": "Falkland Islands",
        "capital": "Stanley"
    },
    {
        "country": "Faroe Islands",
        "capital": "Tórshavn"
    },
    {
        "country": "Federated States of Micronesia",
        "capital": "Palikir"
    },
    {
        "country": "Fiji",
        "capital": "Suva"
    },
    {
        "country": "Finland",
        "capital": "Helsinki"
    },
    {
        "country": "France",
        "capital": "Paris"
    },
    {
        "country": "French Guiana",
        "capital": "Cayenne"
    },
    {
        "country": "French Polynesia",
        "capital": "Papeete"
    },
    {
        "country": "Gabon",
        "capital": "Libreville"
    },
    {
        "country": "Gambia",
        "capital": "Banjul"
    },
    {
        "country": "Georgia",
        "capital": "Tbilisi"
    },
    {
        "country": "Germany",
        "capital": "Berlin"
    },
    {
        "country": "Ghana",
        "capital": "Accra"
    },
    {
        "country": "Gibraltar",
        "capital": "Gibraltar"
    },
    {
        "country": "Greece",
        "capital": "Athens"
    },
    {
        "country": "Greenland",
        "capital": "Nuuk"
    },
    {
        "country": "Grenada",
        "capital": "St. George's"
    },
    {
        "country": "Guam",
        "capital": "Hagåtña"
    },
    {
        "country": "Guatemala",
        "capital": "Guatemala City"
    },
    {
        "country": "Guernsey",
        "capital": "St. Peter Port"
    },
    {
        "country": "Guinea",
        "capital": "Conakry"
    },
    {
        "country": "Guinea-Bissau",
        "capital": "Bissau"
    },
    {
        "country": "Guyana",
        "capital": "Georgetown"
    },
    {
        "country": "Haiti",
        "capital": "Port-au-Prince"
    },
    {
        "country": "Honduras",
        "capital": "Tegucigalpa"
    },
    {
        "country": "Hungary",
        "capital": "Budapest"
    },
    {
        "country": "Iceland",
        "capital": "Reykjavík"
    },
    {
        "country": "India",
        "capital": "New Delhi"
    },
    {
        "country": "Indonesia",
        "capital": "Jakarta"
    },
    {
        "country": "Iran",
        "capital": "Tehran"
    },
    {
        "country": "Iraq",
        "capital": "Baghdad"
    },
    {
        "country": "Ireland",
        "capital": "Dublin"
    },
    {
        "country": "Isle of Man",
        "capital": "Douglas"
    },
    {
        "country": "Israel",
        "capital": "Jerusalem"
    },
    {
        "country": "Italy",
        "capital": "Rome"
    },
    {
        "country": "Jamaica",
        "capital": "Kingston"
    },
    {
        "country": "Japan",
        "capital": "Tokyo"
    },
    {
        "country": "Jersey",
        "capital": "St. Helier"
    },
    {
        "country": "Jordan",
        "capital": "Amman"
    },
    {
        "country": "Kazakhstan",
        "capital": "Astana"
    },
    {
        "country": "Kenya",
        "capital": "Nairobi"
    },
    {
        "country": "Kiribati",
        "capital": "Tarawa"
    },
    {
        "country": "Kosovo",
        "capital": "Pristina"
    },
    {
        "country": "Kuwait",
        "capital": "Kuwait City"
    },
    {
        "country": "Kyrgyzstan",
        "capital": "Bishkek"
    },
    {
        "country": "Laos",
        "capital": "Vientiane"
    },
    {
        "country": "Latvia",
        "capital": "Riga"
    },
    {
        "country": "Lebanon",
        "capital": "Beirut"
    },
    {
        "country": "Lesotho",
        "capital": "Maseru"
    },
    {
        "country": "Liberia",
        "capital": "Monrovia"
    },
    {
        "country": "Libya",
        "capital": "Tripoli"
    },
    {
        "country": "Liechtenstein",
        "capital": "Vaduz"
    },
    {
        "country": "Lithuania",
        "capital": "Vilnius"
    },
    {
        "country": "Luxembourg",
        "capital": "Luxembourg"
    },
    {
        "country": "Macedonia",
        "capital": "Skopje"
    },
    {
        "country": "Madagascar",
        "capital": "Antananarivo"
    },
    {
        "country": "Malawi",
        "capital": "Lilongwe"
    },
    {
        "country": "Malaysia",
        "capital": "Kuala Lumpur"
    },
    {
        "country": "Maldives",
        "capital": "Malé"
    },
    {
        "country": "Mali",
        "capital": "Bamako"
    },
    {
        "country": "Malta",
        "capital": "Valletta"
    },
    {
        "country": "Marshall Islands",
        "capital": "Majuro"
    },
    {
        "country": "Mauritania",
        "capital": "Nouakchott"
    },
    {
        "country": "Mauritius",
        "capital": "Port Louis"
    },
    {
        "country": "Mexico",
        "capital": "Mexico City"
    },
    {
        "country": "Moldova",
        "capital": "Chisinau"
    },
    {
        "country": "Monaco",
        "capital": "Monaco"
    },
    {
        "country": "Mongolia",
        "capital": "Ulaanbaatar"
    },
    {
        "country": "Montenegro",
        "capital": "Podgorica"
    },
    {
        "country": "Montserrat",
        "capital": "Plymouth"
    },
    {
        "country": "Morocco",
        "capital": "Rabat"
    },
    {
        "country": "Mozambique",
        "capital": "Maputo"
    },
    {
        "country": "Myanmar",
        "capital": "Naypyidaw"
    },
    {
        "country": "Nagorno-Karabakh Republic",
        "capital": "Stepanakert"
    },
    {
        "country": "Namibia",
        "capital": "Windhoek"
    },
    {
        "country": "Nauru",
        "capital": "Yaren"
    },
    {
        "country": "Nepal",
        "capital": "Kathmandu"
    },
    {
        "country": "Netherlands",
        "capital": "Amsterdam"
    },
    {
        "country": "New Caledonia",
        "capital": "Nouméa"
    },
    {
        "country": "New Zealand",
        "capital": "Wellington"
    },
    {
        "country": "Nicaragua",
        "capital": "Managua"
    },
    {
        "country": "Niger",
        "capital": "Niamey"
    },
    {
        "country": "Nigeria",
        "capital": "Abuja"
    },
    {
        "country": "Niue",
        "capital": "Alofi"
    },
    {
        "country": "Norfolk Island",
        "capital": "Kingston"
    },
    {
        "country": "North Korea",
        "capital": "Pyongyang"
    },
    {
        "country": "Northern Cyprus",
        "capital": "Nicosia"
    },
    {
        "country": "United Kingdom Northern Ireland",
        "capital": "Belfast"
    },
    {
        "country": "Northern Mariana Islands",
        "capital": "Saipan"
    },
    {
        "country": "Norway",
        "capital": "Oslo"
    },
    {
        "country": "Oman",
        "capital": "Muscat"
    },
    {
        "country": "Pakistan",
        "capital": "Islamabad"
    },
    {
        "country": "Palau",
        "capital": "Ngerulmud"
    },
    {
        "country": "Palestine",
        "capital": "Jerusalem"
    },
    {
        "country": "Panama",
        "capital": "Panama City"
    },
    {
        "country": "Papua New Guinea",
        "capital": "Port Moresby"
    },
    {
        "country": "Paraguay",
        "capital": "Asunción"
    },
    {
        "country": "Peru",
        "capital": "Lima"
    },
    {
        "country": "Philippines",
        "capital": "Manila"
    },
    {
        "country": "Pitcairn Islands",
        "capital": "Adamstown"
    },
    {
        "country": "Poland",
        "capital": "Warsaw"
    },
    {
        "country": "Portugal",
        "capital": "Lisbon"
    },
    {
        "country": "Puerto Rico",
        "capital": "San Juan"
    },
    {
        "country": "Qatar",
        "capital": "Doha"
    },
    {
        "country": "Republic of China (Taiwan)",
        "capital": "Taipei"
    },
    {
        "country": "Republic of the Congo",
        "capital": "Brazzaville"
    },
    {
        "country": "Romania",
        "capital": "Bucharest"
    },
    {
        "country": "Russia",
        "capital": "Moscow"
    },
    {
        "country": "Rwanda",
        "capital": "Kigali"
    },
    {
        "country": "Saint Barthélemy",
        "capital": "Gustavia"
    },
    {
        "country": "Saint Helena",
        "capital": "Jamestown"
    },
    {
        "country": "Saint Kitts and Nevis",
        "capital": "Basseterre"
    },
    {
        "country": "Saint Lucia",
        "capital": "Castries"
    },
    {
        "country": "Saint Martin",
        "capital": "Marigot"
    },
    {
        "country": "Saint Pierre and Miquelon",
        "capital": "St. Pierre"
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "capital": "Kingstown"
    },
    {
        "country": "Samoa",
        "capital": "Apia"
    },
    {
        "country": "San Marino",
        "capital": "San Marino"
    },
    {
        "country": "Saudi Arabia",
        "capital": "Riyadh"
    },
    {
        "country": "Scotland",
        "capital": "Edinburgh"
    },
    {
        "country": "Senegal",
        "capital": "Dakar"
    },
    {
        "country": "Serbia",
        "capital": "Belgrade"
    },
    {
        "country": "Seychelles",
        "capital": "Victoria"
    },
    {
        "country": "Sierra Leone",
        "capital": "Freetown"
    },
    {
        "country": "Singapore",
        "capital": "Singapore"
    },
    {
        "country": "Sint Maarten",
        "capital": "Philipsburg"
    },
    {
        "country": "Slovakia",
        "capital": "Bratislava"
    },
    {
        "country": "Slovenia",
        "capital": "Ljubljana"
    },
    {
        "country": "Solomon Islands",
        "capital": "Honiara"
    },
    {
        "country": "Somalia",
        "capital": "Mogadishu"
    },
    {
        "country": "Somaliland",
        "capital": "Hargeisa"
    },
    {
        "country": "South Africa",
        "capital": "Pretoria"
    },
    {
        "country": "South Georgia and the South Sandwich Islands",
        "capital": "Grytviken"
    },
    {
        "country": "South Korea",
        "capital": "Seoul"
    },
    {
        "country": "South Ossetia",
        "capital": "Tskhinvali"
    },
    {
        "country": "South Sudan South Sudan",
        "capital": "Juba"
    },
    {
        "country": "Spain",
        "capital": "Madrid"
    },
    {
        "country": "Sri Lanka",
        "capital": "Sri Jayawardenapura Kotte"
    },
    {
        "country": "Sudan",
        "capital": "Khartoum"
    },
    {
        "country": "Suriname",
        "capital": "Paramaribo"
    },
    {
        "country": "Swaziland",
        "capital": "Mbabane"
    },
    {
        "country": "Sweden",
        "capital": "Stockholm"
    },
    {
        "country": "Switzerland",
        "capital": "Bern"
    },
    {
        "country": "Syria",
        "capital": "Damascus"
    },
    {
        "country": "São Tomé and Príncipe",
        "capital": "São Tomé"
    },
    {
        "country": "Tajikistan",
        "capital": "Dushanbe"
    },
    {
        "country": "Tanzania",
        "capital": "Dodoma"
    },
    {
        "country": "Thailand",
        "capital": "Bangkok"
    },
    {
        "country": "Togo",
        "capital": "Lomé"
    },
    {
        "country": "Tonga",
        "capital": "Nukuʻalofa"
    },
    {
        "country": "Transnistria",
        "capital": "Tiraspol"
    },
    {
        "country": "Trinidad and Tobago",
        "capital": "Port of Spain"
    },
    {
        "country": "Tristan da Cunha",
        "capital": "Edinburgh of the Seven Seas"
    },
    {
        "country": "Tunisia",
        "capital": "Tunis"
    },
    {
        "country": "Turkey",
        "capital": "Ankara"
    },
    {
        "country": "Turkmenistan",
        "capital": "Ashgabat"
    },
    {
        "country": "Turks and Caicos Islands",
        "capital": "Cockburn Town"
    },
    {
        "country": "Tuvalu",
        "capital": "Funafuti"
    },
    {
        "country": "Uganda",
        "capital": "Kampala"
    },
    {
        "country": "Ukraine",
        "capital": "Kiev"
    },
    {
        "country": "United Arab Emirates",
        "capital": "Abu Dhabi"
    },
    {
        "country": "United Kingdom; England",
        "capital": "London"
    },
    {
        "country": "United States",
        "capital": "Washington, D.C."
    },
    {
        "country": "United States Virgin Islands",
        "capital": "Charlotte Amalie"
    },
    {
        "country": "Uruguay",
        "capital": "Montevideo"
    },
    {
        "country": "Uzbekistan",
        "capital": "Tashkent"
    },
    {
        "country": "Vanuatu",
        "capital": "Port Vila"
    },
    {
        "country": "Vatican City",
        "capital": "Vatican City"
    },
    {
        "country": "Venezuela",
        "capital": "Caracas"
    },
    {
        "country": "Vietnam",
        "capital": "Hanoi"
    },
    {
        "country": "Wales",
        "capital": "Cardiff"
    },
    {
        "country": "Wallis and Futuna",
        "capital": "Mata-Utu"
    },
    {
        "country": "Western Sahara",
        "capital": "El Aaiún"
    },
    {
        "country": "Yemen",
        "capital": "Sanaá"
    },
    {
        "country": "Zambia",
        "capital": "Lusaka"
    },
    {
        "country": "Zimbabwe",
        "capital": "Harare"
    }
];

export {countries, Country};