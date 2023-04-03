import React, { useState } from "react";

export const whatsappLinksInfo = [  
    {    country: "Austria",    
    data: [      
        {        
            city: "Viena",        
            whatsappLink: "https://chat.whatsapp.com/GXnM7VYGmt60mZEaPzgABP"      
        },      
        {        
            city: "Innsbruck",        
            whatsappLink: "https://chat.whatsapp.com/IlTgR0DDM5O3ap9qwe1Co5"      
        },
        {        
            city: "Graz",        
            whatsappLink: "https://chat.whatsapp.com/EhDhbBbqaY8KgOKw4FjbPR"      
        },      
        {        
            city: "Klagenfurt",        
            whatsappLink: "https://chat.whatsapp.com/GPPnNbln4i4ChHO1CqjQa5"      
        },
        {        
            city: "Salzburgo",        
            whatsappLink: "https://chat.whatsapp.com/DTg9ogsqw2ELNu7uPwC2dm"      
        },
    ]
    },
    {
        country: "Belgium",
        data: [      
            {        
                city: "Brussels",        
                whatsappLink: "https://chat.whatsapp.com/LLykyE3KAJmBq5zjBPEB9l"      
            },      
            {        
                city: "Hasselt",        
                whatsappLink: "https://chat.whatsapp.com/I6opBvYtjeiDAqLhELLG6y"      
            },
            {        
                city: "Antwerp",        
                whatsappLink: "https://chat.whatsapp.com/D91xkMtNxA0I3kBgwi5OBT"      
            },      
            {        
                city: "Ghent",        
                whatsappLink: "https://chat.whatsapp.com/Ktd39nUWqQh3OXkuL5A43K"      
            },
            {        
                city: "Mechelen",        
                whatsappLink: "https://chat.whatsapp.com/JaWgnlbysnP4EV0krYulmv"      
            },
            {        
                city: "Bruges",        
                whatsappLink: "https://chat.whatsapp.com/CIlvwMosVCg2BZcXt3gMTu"      
            },
            {        
                city: "Namur",        
                whatsappLink: "https://chat.whatsapp.com/HBJBplnAQQ8FdGg83wHSz3"      
            },
            {        
                city: "Kortrijk",        
                whatsappLink: "https://chat.whatsapp.com/GDcbzuIYbcD8KzVITpuVUq"      
            },
            {        
                city: "Liège",        
                whatsappLink: "https://chat.whatsapp.com/K15KKmgDi4O6v8eCvIiT4t"      
            },
            {        
                city: "Leuven",        
                whatsappLink: "https://chat.whatsapp.com/Gbttiy44BP4JyqioOuKEt5"      
            },
        ]
    },
    {
        country: "Bulgaria",
        data: [      
            {        
                city: "Sofia",        
                whatsappLink: "https://chat.whatsapp.com/EF1TzrsSBOl9kMJ0l2n0Cl"      
            },      
            {        
                city: "Varna",        
                whatsappLink: "https://chat.whatsapp.com/H8UmvABCBli25tChN1BJA5"      
            },
            {        
                city: "Ruse",        
                whatsappLink: "https://chat.whatsapp.com/CmXoK3aLNa9HYNLbGf8kkg"      
            },      
            {        
                city: "Shumen",        
                whatsappLink: "https://chat.whatsapp.com/EZKK9SbNmWm3QzCcU6WQLa"      
            },
        ]
    },
    {
        country: "Croatia",
        data: [      
            {        
                city: "Zagreb",        
                whatsappLink: "https://chat.whatsapp.com/DkMDmarUQ2q2BZYSWhg3y5"      
            },      
            {        
                city: "Split",        
                whatsappLink: "https://chat.whatsapp.com/JYuvneub7wHBPe3ik1XovM "      
            },
            {        
                city: "Rijeka",        
                whatsappLink: "https://chat.whatsapp.com/H2eENkNGMxT15CpEsf8yEw"      
            },      
        ]
    },
    {
        country: "Cyprus",
        data: [      
            {        
                city: "Nicosia",        
                whatsappLink: "https://chat.whatsapp.com/EbcVYByBjWNESdsNvKMef2"      
            } 
        ]
    },
    {
        country: "Czech Republic",
        data: [      
            {        
                city: "Praga",        
                whatsappLink: "https://chat.whatsapp.com/B5Ca4hkXvG56b29K72hKr1"      
            },      
            {        
                city: "Brno",        
                whatsappLink: "https://chat.whatsapp.com/ECHlUgsTnNA421elO8EUGb"      
            },
            {        
                city: "Ostrava",        
                whatsappLink: "https://chat.whatsapp.com/Jw7SdOe3Z6xE5E7uoIxpbg"      
            },      
            {        
                city: "Olomuc",        
                whatsappLink: "https://chat.whatsapp.com/FA4WnJH5bNdK52CcqhaJ11"      
            },      
            {        
                city: "Liberec",        
                whatsappLink: "https://chat.whatsapp.com/KN26RVWedat6x3BRDxtHwk"      
            },     
            {        
                city: "Ústí nad Labem",        
                whatsappLink: "https://chat.whatsapp.com/CcG1SR1A6StJbDQeF8xRtJ"      
            },     
            {        
                city: "Ceske Budejovice",        
                whatsappLink: "https://chat.whatsapp.com/LAPbRQe4g9j9BJ8coZUqJa"      
            },     
            {        
                city: "Pilsen",        
                whatsappLink: "https://chat.whatsapp.com/LDyWBrqO3ijJUCE3sazaQZ"      
            },     
        ]
    },
    {
        country: "Denmark",
        data: [      
            {        
                city: "Denmark General Group",        
                whatsappLink: "https://chat.whatsapp.com/FNecsSNqPeBAwubddii15p"      
            },      
            {        
                city: "Copenhagen",        
                whatsappLink: "https://chat.whatsapp.com/FaCamCn5RMK7f6oUNLHhGq"      
            },
            {        
                city: "Odense",        
                whatsappLink: "https://chat.whatsapp.com/ECLQRWmJqgqHzUeQ11A2vv"      
            },      
        ]
    },
    {
        country: "Denmark",
        data: [      
            {        
                city: "England General Group",        
                whatsappLink: "https://chat.whatsapp.com/HqNthgc9l6NJOsDqw5wF2i"      
            },      
            {        
                city: "Birmingham",        
                whatsappLink: "https://chat.whatsapp.com/GAgDvpuL67AFaC7i3GUQX3"      
            },
            {        
                city: "Newcastle upon Tyne",        
                whatsappLink: "https://chat.whatsapp.com/KSDwCakUwEe4sfS1QliPAJ"      
            },     
            {        
                city: "Leeds",        
                whatsappLink: "https://chat.whatsapp.com/Kb65DAMmnzz6kKO9YJXBY5"      
            },  
        ]
    },
    {
        country: "Estonia",
        data: [      
            {        
                city: "Tallinn",        
                whatsappLink: "https://chat.whatsapp.com/C4OIpVYqgddDAEDEFN1KF9"      
            } 
        ]
    },
    {
        country: "Finland",
        data: [      
            {        
                city: "Helsinki",        
                whatsappLink: "https://chat.whatsapp.com/G8vV35s98JVBzYJRYW4Fjh"      
            },
            {        
                city: "Lahti",        
                whatsappLink: "https://chat.whatsapp.com/FdwJcVnpZ8h9ZyO5YPWXbs"      
            },
            {        
                city: "Turku",        
                whatsappLink: "https://chat.whatsapp.com/JDjKlLMzT8N8A7s1ydP7KN"      
            },
            {        
                city: "Tampere",        
                whatsappLink: "https://chat.whatsapp.com/LL7Vb5W2PIo9UsUHpVMTaT"      
            },
        ]
    },
    {
        country: "France",
        data: [      
            {        
                city: "Paris",        
                whatsappLink: "https://chat.whatsapp.com/K0tKRd7AF9UFMyOI2gRsZX"      
            },
            {        
                city: "Lyon",        
                whatsappLink: "https://chat.whatsapp.com/EsrpYG1hFf17r8uphRaIuK"      
            },
            {        
                city: "Montpellier",        
                whatsappLink: "https://chat.whatsapp.com/GdREQ1LbFWk5FbwtVJGIRs"      
            },
            {        
                city: "Bordeaux",        
                whatsappLink: "https://chat.whatsapp.com/BuGGzx8bi3p01iemL9gJkv"      
            },
            {        
                city: "Nimes",        
                whatsappLink: "https://chat.whatsapp.com/DgL3Xu3BLUhCsptizXizn3"      
            },
            {        
                city: "Niza",        
                whatsappLink: "https://chat.whatsapp.com/CjZ8r0XpoLD3YEeKV8Geni"      
            },
            {        
                city: "Lille",        
                whatsappLink: "https://chat.whatsapp.com/CgyVSro207rCpiww93Z0ul"      
            },
            {        
                city: "Toulouse",        
                whatsappLink: "https://chat.whatsapp.com/GyxGUH8ehJ50PdCMEvGr0y"      
            },
            {        
                city: "Nantes",        
                whatsappLink: "https://chat.whatsapp.com/CcoqF56qNafKFMi0fyFtar"      
            },
        ]
    },
    {
        country: "Germany",
        data: [ 
            {        
                city: "Germany General Group",        
                whatsappLink: "https://chat.whatsapp.com/HTK6smvQJKb2Zu23Zx0S6Y"      
            },     
            {        
                city: "Berlin",        
                whatsappLink: "https://chat.whatsapp.com/CQ85cyKp0Gk74QupmG8oDR?fbclid=PAAaYomtaDu6e1tYR9wT1xkMgNulYIE-D-br6rpRaWstEyIRxNM0r9_EPLB0Q"      
            },
            {        
                city: "Munich",        
                whatsappLink: "https://chat.whatsapp.com/E1sIxwtmIEbCzfCirhYBen"      
            },
            {        
                city: "Hamburg",        
                whatsappLink: "https://chat.whatsapp.com/Ji9a8CPbW2wKvXmvaUPWNu"      
            },
            {        
                city: "Hannover",        
                whatsappLink: "https://chat.whatsapp.com/KEKTB8jhxAl0vcIrG6irzV"      
            },
            {        
                city: "Dortmund",        
                whatsappLink: "https://chat.whatsapp.com/FEuXK3NMlvWHJoK2Mj1sIr"      
            },
            {        
                city: "Munster",        
                whatsappLink: "https://chat.whatsapp.com/Ip9GW7nTSN8F4V2yVBrmjk"      
            },
            {        
                city: "Düsseldorf",        
                whatsappLink: "https://chat.whatsapp.com/BfxlNcQS9qKAadixVQKkSv"      
            },
            {        
                city: "Essen",        
                whatsappLink: "https://chat.whatsapp.com/Ix2PCKeiB1eABcxLs62Emo"      
            },
            {        
                city: "Cologne",        
                whatsappLink: "https://chat.whatsapp.com/LvPrqY5Xc9JDmQ049eDkAc"      
            },
            {        
                city: "Frankfurt",        
                whatsappLink: "https://chat.whatsapp.com/EJaV19ri1Xc8h0JOYNX2jR"      
            },
            {        
                city: "Osnabrück",        
                whatsappLink: "https://chat.whatsapp.com/Ituc8a1NxauDvyC8AdkF98"      
            },
            {        
                city: "Regensburg",        
                whatsappLink: "https://chat.whatsapp.com/CRxvEezEeT1Gw5MyHP0Vyo"      
            },
            {        
                city: "Stuttgart",        
                whatsappLink: "https://chat.whatsapp.com/GjiIX10RlKjA3r6HS3ZxJ7"      
            },
            {        
                city: "Tübingen",        
                whatsappLink: "https://chat.whatsapp.com/CMEujJ75GwRDWlkrBg43HT"      
            },
            {        
                city: "Konstanz",        
                whatsappLink: "https://chat.whatsapp.com/HpRCZwWxnAtF8mHOIjIUUg"      
            },
            {        
                city: "Neu-Ulm",        
                whatsappLink: "https://chat.whatsapp.com/DoS8jM1uECl0cfOYK52E39"      
            },
            {        
                city: "Nuremberg",        
                whatsappLink: "https://chat.whatsapp.com/BjIwBIDH5rFD4yddrgD3N1"      
            },
            {        
                city: "Mainz",        
                whatsappLink: "https://chat.whatsapp.com/HTK6smvQJKb2Zu23Zx0S6Y"      
            },
            {        
                city: "Göttingen",        
                whatsappLink: "https://chat.whatsapp.com/KXmLXp4WIUY3yuoWycQJ6i"      
            },
            {        
                city: "Karlsruhe",        
                whatsappLink: "https://chat.whatsapp.com/Ht4tQlNNC3q4ArL1o0mt94"      
            },
            {        
                city: "Dresde",        
                whatsappLink: "https://chat.whatsapp.com/ENesEZrp8HcLEfUXgBUdU0"      
            },
            {        
                city: "Mannheim",        
                whatsappLink: "https://chat.whatsapp.com/CrKyuBUYEOLHNwGw3LFVgd"      
            },
            {        
                city: "Bremen",        
                whatsappLink: "https://chat.whatsapp.com/JnrWiftEU6f5eoLaR2FEkg"      
            },
            {        
                city: "Bonn",        
                whatsappLink: "https://chat.whatsapp.com/JKqmqltvN1dBjkrLGOXA4m"      
            }
        ]
    },
    {
        country: "Greece",
        data: [      
            {        
                city: "Athens",        
                whatsappLink: "https://chat.whatsapp.com/DibZGOAMalpIio16ophtPB"      
            } 
        ]
    },
    {
        country: "Hungary",
        data: [      
            {        
                city: "Budapest",        
                whatsappLink: "https://chat.whatsapp.com/IZh1l1SktFT4wU1PSPoPJV "      
            } ,
            {        
                city: "Debrecen",        
                whatsappLink: "https://chat.whatsapp.com/IkwlaxouI4ULf2Vc3Ic1Z8"      
            } ,
        ]
    },
    {
        country: "Ireland",
        data: [      
            {        
                city: "Dublin",        
                whatsappLink: "https://chat.whatsapp.com/EwrX1GIIChv7MtzevLfxPD"      
            } ,
            {        
                city: "Galway",        
                whatsappLink: "https://chat.whatsapp.com/KwcfuC79uK09CCUTJIDWsT"      
            } ,
            {        
                city: "Limerick",        
                whatsappLink: "https://chat.whatsapp.com/B7bypUzMgoHC6RCsyskLDL"      
            }
        ]
    },
    {
        country: "Italy",
        data: [      
            {        
                city: "Dublin",        
                whatsappLink: "https://chat.whatsapp.com/EwrX1GIIChv7MtzevLfxPD"      
            } ,
            {        
                city: "Galway",        
                whatsappLink: "https://chat.whatsapp.com/KwcfuC79uK09CCUTJIDWsT"      
            } ,
            {        
                city: "Limerick",        
                whatsappLink: "https://chat.whatsapp.com/B7bypUzMgoHC6RCsyskLDL"      
            }
        ]
    },
    {
        country: "Lithuania",
        data: [      
            {        
                city: "Vilna",        
                whatsappLink: "https://chat.whatsapp.com/GbRUJIDIotTGP0yRp2hCu0"      
            } ,
            {        
                city: "Kaunas",        
                whatsappLink: "https://chat.whatsapp.com/JHg9aQMDCm5FoV6MQN6MOg"      
            } ,
            {        
                city: "Klaipéda",        
                whatsappLink: "https://chat.whatsapp.com/EIevvaWDc6a3flmcw33tfN"      
            }
        ]
    },
    {
        country: "Malta",
        data: [      
            {        
                city: "Valletta",        
                whatsappLink: "https://chat.whatsapp.com/CFhSleyLmWVGdWVLG3HQ2x"      
            } 

        ]
    },
    {
        country: "Netherlands",
        data: [      
            {        
                city: "Amsterdam",        
                whatsappLink: "https://chat.whatsapp.com/BXBXa16NhKpCVjWy3fMI7e"      
            } ,
            {        
                city: "The Hague",        
                whatsappLink: "https://chat.whatsapp.com/GO3ZPJMDtHrAQav4v8tWG7"      
            } ,
            {        
                city: "Eindhoven",        
                whatsappLink: "https://chat.whatsapp.com/LfX3qUeYsfy04lcTqRmGjJ"      
            },
            {        
                city: "Maastrich",        
                whatsappLink: "https://chat.whatsapp.com/JdTiuZmesRtEfZMEjHwqRS"      
            } ,
            {        
                city: "Rotterdam",        
                whatsappLink: "https://chat.whatsapp.com/DuK3Zgtz1sJIHRxhEyytav"      
            } ,
            {        
                city: "Arnhem",        
                whatsappLink: "https://chat.whatsapp.com/DRO5zLg3SZNDaMZP9Zeacm"      
            },
            {        
                city: "Utretch",        
                whatsappLink: "https://chat.whatsapp.com/ISo0N6EZM3602d7oOnchFE"      
            } ,
            {        
                city: "Breda",        
                whatsappLink: "https://chat.whatsapp.com/DVSBneCbUy0EPw7gUaMvoo"      
            } ,
            {        
                city: "Leiden",        
                whatsappLink: "https://chat.whatsapp.com/CZawskUENWiE9ZMQ5kMQ2Z"      
            },
            {        
                city: "Zwolle",        
                whatsappLink: "https://chat.whatsapp.com/KRwp5l93xdlAygHh6ipuIU"      
            } ,
            {        
                city: "Groningen",        
                whatsappLink: "https://chat.whatsapp.com/DeIdjjXtKgt3Wt5bjuIXNJ"      
            },
        ]
    },
    {
        country: "Norway",
        data: [      
            {        
                city: "Oslo",        
                whatsappLink: "https://chat.whatsapp.com/BKwTc3twCjcK5hKylBeOhx"      
            } ,
            {        
                city: "Bodø",        
                whatsappLink: "https://chat.whatsapp.com/Ce0ZyEzdg59KOhkv82Bjrr"      
            } ,
            {        
                city: "Bergen",        
                whatsappLink: "https://chat.whatsapp.com/EADBd3ZimQrDIe5ZtaGCBf"      
            }
        ]
    },
    
    
    
];