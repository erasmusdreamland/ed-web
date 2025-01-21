import React, { useState } from "react";

export const whatsappLinksInfo = [  
    {
        country: "Alemania",
        data: [ 
            {        
                city: "Alemania General",        
                whatsappLink:"https://chat.whatsapp.com/FIJqbYT3SbbFHt1NURQwOY" 
                       },
            {        
                city: "Aachen",        
                whatsappLink:"https://chat.whatsapp.com/DBvQy2zAPtLChShCYZ1h1B"            },
            {        
                city: "Aleen",        
                whatsappLink:"https://chat.whatsapp.com/LbSNUw8qDTOA2y55cd35gQ"            },
            {        
                city: "Aschaffenburg",        
                whatsappLink:"https://chat.whatsapp.com/ITXr4mNbbfBIlwNnGuphAq"            },
            {        
                city: "Augsburg",        
                whatsappLink:"https://chat.whatsapp.com/FA3qVHCMPai2lNzJvCLxDW"            },
            {        
                city: "Bamberg",        
                whatsappLink:"https://chat.whatsapp.com/IH9PogM83TxFBXzZtwYtq1"            },
            {        
                city: "Bayreuth",        
                whatsappLink:"https://chat.whatsapp.com/Fk4JmS7EV7w1WdeL4K5GBN"            },
            {        
                city: "Berlin",        
                whatsappLink:"https://chat.whatsapp.com/K9RYN19InH5HSRTIczirl5"            },
            {        
                city: "Bielefeld",        
                whatsappLink:"https://chat.whatsapp.com/HXExSco0gU0AWxIAlq6xA2"            },
            {        
                city: "Bochum",        
                whatsappLink:"https://chat.whatsapp.com/JhhgsVxMpsaH2vujrXJClr"            },
            {        
                city: "Bremen",        
                whatsappLink:"https://chat.whatsapp.com/CaLhVFFp2brAXTquTXN0eH"            },
            {        
                city: "Brunswick",        
                whatsappLink:"https://chat.whatsapp.com/E84le7jAOVkGKKbpEiEStf"            },
            {        
                city: "Chemintz",        
                whatsappLink:"https://chat.whatsapp.com/KDufFmw82juGh0na7Izp97"            },
            {        
                city: "Coblenza",        
                whatsappLink:"https://chat.whatsapp.com/GX5Z5KIamQQ3Tw8gL9oRCS"            },
            {        
                city: "Colonia",        
                whatsappLink:"https://chat.whatsapp.com/GJ9OB6D1B7MKdQaQyuPGR7"            },
            {        
                city: "Darmstadt",        
                whatsappLink:"https://chat.whatsapp.com/InwPwCPLsAe9SPI8ZiTxwx"            },
                {        
                city: "Detmold",        
                whatsappLink:"https://chat.whatsapp.com/EzI27SSz4VQGz2MWnuCn1q"            },
            {        
                city: "Dresde",        
                whatsappLink:"https://chat.whatsapp.com/Cc5qmTEqqUBBi3O2E2noB8"            },
            {        
                city: "Dortmund",        
                whatsappLink:"https://chat.whatsapp.com/JTuoFOZW6wB23qd64lwBRV"            },
            {        
                city: "Duisburg",        
                whatsappLink:"https://chat.whatsapp.com/CPyniqvGwJ6IIgxaNkaUAl"            },
            {        
                city: "Dusseldorf",        
                whatsappLink:"https://chat.whatsapp.com/HR1YNlLn0RyB66rJJEo77b"            },
            {        
                city: "Erfurt",        
                whatsappLink:"https://chat.whatsapp.com/INrnvW6WaGJH9VH5esP6KD"           },
            {        
                city: "Erlangen",        
                whatsappLink:"https://chat.whatsapp.com/ET7cy5z2iZ52WNpWPti6XP"                },
            {        
                city: "Essen",        
                whatsappLink:"https://chat.whatsapp.com/E6ZsqJhiqRtExEWQ37qIXR"            },
                  {        
                city: "Esslingen",        
                whatsappLink:"https://chat.whatsapp.com/HZ45gWdLBm1J0U8l7mn2xf"           },
            {        
                city: "Flensburg",        
                whatsappLink:"https://chat.whatsapp.com/CdL5jIFrLjvDGBksi5asar"           },
            {        
                city: "Frankfurt",        
                whatsappLink:"https://chat.whatsapp.com/IVf6YpgnBoi34NY5KsCua4"            },
            {        
                city: "Friburgo",        
                whatsappLink:"https://chat.whatsapp.com/BemXDFb1jrF5LyvPFYhA1A"            },
            {        
                city: "Giessen",        
                whatsappLink:"https://chat.whatsapp.com/LmHKZrZTUnJ9bj3UdgfoV6"            },
            {        
                city: "Göttingen",        
                whatsappLink:"https://chat.whatsapp.com/J5HkAxHX30s2d1biBwk3sB"            },
            {        
                city: "Hamburgo",        
                whatsappLink:"https://chat.whatsapp.com/BRblWkVs7y893iBzMtMx1B"            },
            {        
                city: "Hannover",        
                whatsappLink:"https://chat.whatsapp.com/DJ0flRzv2A34BdmHqWhLMH"            },
            {        
                city: "Heidelberg",        
                whatsappLink:"https://chat.whatsapp.com/EOGhKXG6kGJ4BKxDZJCri3"            },
            {        
                city: "Hildesheim",        
                whatsappLink:"https://chat.whatsapp.com/EOGhKXG6kGJ4BKxDZJCri3"            },
            {        
                city: "Ingolstadt",        
                whatsappLink:"https://chat.whatsapp.com/CiAPlaPMnMOCxdT7e7UG0P"            },
            {        
                city: "Kaiserlautern",        
                whatsappLink:"https://chat.whatsapp.com/Bw5iDgWOrrQ3UIvsD2RBIm"            },
            
            {        
                city: "Karlsruhe",        
                whatsappLink:"https://chat.whatsapp.com/HjAZMJk3Dl2AuakEGuAQPh"            },
            {        
                city: "Kempten",        
                whatsappLink:"https://chat.whatsapp.com/LP7XGPS712PCU1QWohmQbB"            },
            {        
                city: "Kiel",        
                whatsappLink:"https://chat.whatsapp.com/EMa321sdepV8qrEd6LVwLf"            },
            {        
                city: "Kleve",        
                whatsappLink:"https://chat.whatsapp.com/GAsDv5THF4RIMl6UnPEo6V"            },
            {        
                city: "Konstanz",        
                whatsappLink:"https://chat.whatsapp.com/C950piFjzqtDwKOptZJ1sn"            },
            {        
                city: "Leipzing",        
                whatsappLink:"https://chat.whatsapp.com/GjDIYHQbNzc25UtGwCOEw2"            },
            {        
                city: "Lubeck",        
                whatsappLink:"https://chat.whatsapp.com/ECawccBCNugGt1RXRVvqj4"            },
            {        
                city: "Luneburg",        
                whatsappLink:"https://chat.whatsapp.com/G56djHBGZnGIKbGbtbtvFi"            },
            {        
                city: "Magdeburg",        
                whatsappLink:"https://chat.whatsapp.com/LIMvCpPftBd000bIY6OoHJ"            },
            {        
                city: "Mainz",        
                whatsappLink:"https://chat.whatsapp.com/H8cTjltVxAG4SOhXiYKMFq"            },
            {        
                city: "Merseburg",        
                whatsappLink:"https://chat.whatsapp.com/FS1zqrKpSlD98o1wxP33pB"            },
            {        
                city: "Munich",        
                whatsappLink:"https://chat.whatsapp.com/LmIYqJSph9F8I3zQLhF2dW"            },
            {        
                city: "Munster",        
                whatsappLink:"https://chat.whatsapp.com/IYjHv0JHzzPH3HZd1nnDZk"            },
            
            {        
                city: "Mannheim",        
                whatsappLink:"https://chat.whatsapp.com/KcLQevyBU2jEhDBdHCuakt"            },
            {        
                city: "Neu-Ulm",        
                whatsappLink:"https://chat.whatsapp.com/Bcr74kBtAc34OpFIAWgR4C"            },
            {        
                city: "Nuremberg",        
                whatsappLink:"https://chat.whatsapp.com/EFn58kwmBWu9CH2LjQtbFv"            },
            {        
                city: "Osnabrück",        
                whatsappLink:"https://chat.whatsapp.com/FTnCz4HpvqL2FFcx7q1MZ0"            },
            {        
                city: "Oestricht-Winkel",        
                whatsappLink:"https://chat.whatsapp.com/GmHdJ2pKcAnHBMVVcC8RfP"            },
            {        
                city: "Oldenburg",        
                whatsappLink:"https://chat.whatsapp.com/LF5eliXhyLGFoK5ZczwDis"            },
            {        
                city: "Paderborn",        
                whatsappLink:"https://chat.whatsapp.com/KmYXNDkmYqGHvMVqhuzkLp"            },
            {        
                city: "Passau",        
                whatsappLink:"https://chat.whatsapp.com/K2fqhQEY67T65zAhByngki"            },
            {        
                city: "Phorzeim",        
                whatsappLink:"https://chat.whatsapp.com/ERSZHs4mMFu9nzNgda5Ndo"            },
            {        
                city: "Potsdam",        
                whatsappLink:"https://chat.whatsapp.com/Jy7U0bk2C1kLtNyV2LANVO"            },
            {        
                city: "Ravensburg",        
                whatsappLink:"https://chat.whatsapp.com/CWCZNjxUbPp3SR11Ojg3jf"            },
            {        
                city: "Regensburg",        
                whatsappLink:"https://chat.whatsapp.com/EmwUyFlxd3wI6LrN4Mi4cL"            },
            {        
                city: "Reutlingen",        
                whatsappLink:"https://chat.whatsapp.com/DpV8WeBDppxG9C1lUVXiev"            },
            {        
                city: "Schamalkalden",        
                whatsappLink:"https://chat.whatsapp.com/ByfjKggZkN44WlElLbg9Fn"            },
            {        
                city: "Stuttgart",        
                whatsappLink:"https://chat.whatsapp.com/LJFI6MVzEJqJiGe9wpB4vz"            },
            {        
                city: "Tübingen",        
                whatsappLink:"https://chat.whatsapp.com/GZEw2xjJEFnBZsr5J0eFS1"            },
            {        
                city: "Vechta",        
                whatsappLink:"https://chat.whatsapp.com/JhrAse5aa2EIyABcJeHy3S"            },
            {        
                city: "Wernigerode",        
                whatsappLink:"https://chat.whatsapp.com/EcOBXlnSXfI5Mcb2UTDJUa"            },
            {        
                city: "Weimar",        
                whatsappLink:"https://chat.whatsapp.com/LX43qFQzvBw3PFbeUBQIAI"            },
            {        
                city: "Wilhemshaven",        
                whatsappLink:"https://chat.whatsapp.com/G73PmEXakko0dBmGugOD1R"            },
            {        
                city: "Wiesbaden",        
                whatsappLink:"https://chat.whatsapp.com/CjPGyyPuAagGGLdvr638Xx"            },
            {        
                city: "Worms",        
                whatsappLink:"https://chat.whatsapp.com/GVnPo7nRd2a1s0epkVoxvK"            },
            {        
                city: "Wuppertal",        
                whatsappLink:"https://chat.whatsapp.com/DlJJqaQQZ4m2BgJCa5TfwV"            },
            {        
                city: "Würzburg",        
                whatsappLink:"https://chat.whatsapp.com/CGevkq42c98D1qsp6wD6Wo"            },
        ]
    },
    {    country: "Austria",    
    data: [      
        {        
            city: "Austria General",        
            whatsappLink:"https://chat.whatsapp.com/CiCmEY26b7VJTpzf8KeLfE"        },    
        {        
            city: "Baden",        
            whatsappLink:"https://chat.whatsapp.com/DRpradPHmyr2AlBbN4YqWF"        },      
        {        
            city: "Graz",        
            whatsappLink:"https://chat.whatsapp.com/KKWQrN4YOfRFedEKy5MXRP"        },      
        {        
            city: "Innsbruck",        
            whatsappLink:"https://chat.whatsapp.com/LLnGdrwqwjJ4p3aOMbrlKM"        },
        {        
            city: "Klagenfurt",        
            whatsappLink:"https://chat.whatsapp.com/C3ESNWgLsykHo75KcDOY3O"        },
        {        
            city: "Kufstein",        
            whatsappLink:"https://chat.whatsapp.com/G0rGEc9QJP3EtKadhWaHKM"        },
        {        
            city: "Linz",        
            whatsappLink:"https://chat.whatsapp.com/BjEnHS020FCIxxIYVktdph"        },
        {        
            city: "Salzburgo",        
            whatsappLink:"https://chat.whatsapp.com/Lj75OlQA34v3nXBHx3eytU"        },
        {        
            city: "Viena",        
            whatsappLink:"https://chat.whatsapp.com/KPzG9zs1jtUIMrvBMI9St5"        },      
        {        
            city: "Wels",        
            whatsappLink:"https://chat.whatsapp.com/HgeLfSOic2x4xfQxvLlwiK"        },      
        {        
            city: "Wiener Neustadt",        
            whatsappLink:"https://chat.whatsapp.com/JdmLAHIOKis3bgnPP4LRJ0"        },      
    ]
    },
    {
        country: "Belgium",
        data: [      
            {        
                city: "Bélgica General",        
                whatsappLink:"https://chat.whatsapp.com/B6DUI9MmGnb27pLKwwuGGn"            },
            {        
                city: "Amberes",        
                whatsappLink:"https://chat.whatsapp.com/EdsRbH87IYlBuTIlYixhJT"            },
            {        
                city: "Bruselas",        
                whatsappLink:"https://chat.whatsapp.com/HFasqRnLLveEBs3e5AGdUS"            },      
            {        
                city: "Brujas",        
                whatsappLink:"https://chat.whatsapp.com/BQNxMkUxfKYI0xXAiXhse1"            },
            {        
                city: "Gante",        
                whatsappLink:"https://chat.whatsapp.com/HQXVLkf0eeZ9MppzGUwFD1"            },
            {        
                city: "Hasselt",        
                whatsappLink:"https://chat.whatsapp.com/LBAwYXTVUPQHQIag0TiPiX"            },
            {        
                city: "Kortrijk",        
                whatsappLink:"https://chat.whatsapp.com/HWFaMRuEvdEDJPqaPOoH2r"            },
            {        
                city: "Lieja",        
                whatsappLink:"https://chat.whatsapp.com/Bw2x0IKvyMJByLatjTFwub"            },
            {        
                city: "Leuven",        
                whatsappLink:"https://chat.whatsapp.com/FKPGxeqbFDP3vqDOnzgKsR"            },
            {        
                city: "Lovain-la-Neuve",        
                whatsappLink:"https://chat.whatsapp.com/EkwoNAIfB129xrsA6XN2At" },            
            {     
                city: "Malinas",        
                whatsappLink:"https://chat.whatsapp.com/CAQJOuPMdbW8g8D09PpDrg"            },
            {        
                city: "Mons",        
                whatsappLink:"https://chat.whatsapp.com/GD2JCBthHZFFPEafuqS7h0"            },      
            {        
                city: "Namur",        
                whatsappLink:"https://chat.whatsapp.com/Jf95n5FUh7h5zKTdeq0sAI"            },

        ]
    },
    {
        country: "Bosnia y Herzegovina",
        data: [      
            {        
                city: "Bosnia y Herzegovina General",        
                whatsappLink:"https://chat.whatsapp.com/EI9F61exts92y9e18F1kGr"  } ,
        ]
    },
    {
        country: "Bulgaria",
        data: [      
            {        
                city: "Bulgaria General",        
                whatsappLink:"https://chat.whatsapp.com/J6Ihn2jPeiY6wGR65cl4ho"            },
            {        
                city: "Plovdiv",        
                whatsappLink:"https://chat.whatsapp.com/KFlVjR1nVp9FaHLzZJk111"            },
            {        
                city: "Ruse",        
                whatsappLink:"https://chat.whatsapp.com/F4OrycuOgT4KrnkBpTXecJ"            },      
            {        
                city: "Shumen",        
                whatsappLink:"https://chat.whatsapp.com/DfuoCC79mNiLnLeV4hTY9K"            },
            {        
                city: "Sofia",        
                whatsappLink:"https://chat.whatsapp.com/FTb02OnLr9JB190iYoKJBN"            },      
            {        
                city: "Varna",        
                whatsappLink:"https://chat.whatsapp.com/FmPClerSuUi88wEeSclYeQ"            },


        ]
    },
    {
        country: "Chipre",
        data: [      
            {        
                city: "Chipre General",        
                whatsappLink:"https://chat.whatsapp.com/HQW6wMaytluIJNXenZbPTh"            } ,
            {        
                city: "Nicosia",        
                whatsappLink:"https://chat.whatsapp.com/BeW3YkS7F9xLYyO0kCCyWi"            } ,
            {        
                city: "Paphos",        
                whatsappLink:"https://chat.whatsapp.com/ECa1qyyGyO0BKiTXhohCgO"            } 
        ]
    },
    {
        country: "Croacia",
        data: [      
            {        
                city: "Croacia General",        
                whatsappLink:"https://chat.whatsapp.com/ByrEDjkrkMTDV8a30U3ONZ"            },   
            {        
                city: "Dubrovnik",        
                whatsappLink:"https://chat.whatsapp.com/ISDmR762SIwLYeEM6FYu1E"            },     
            {        
                city: "Rijeka",        
                whatsappLink:"https://chat.whatsapp.com/DIedcWixqdPDu5INM2lQHQ"            },      
            {        
                city: "Split",        
                whatsappLink:"https://chat.whatsapp.com/ERsYbP12MLrIma5q3fotGs"            },
            {        
                city: "Osijek",        
                whatsappLink:"https://chat.whatsapp.com/ElVbCbSIaCD4BmONf3ol92"            },
            {        
                city: "Zadar",        
                whatsappLink:"https://chat.whatsapp.com/CdXRntM3lIiBxpRE473bS2"            },
            {        
                city: "Zagreb",        
                whatsappLink:"https://chat.whatsapp.com/JO0RP7JumYvEdHCD7HGfQf"            },      


        ]
    },
    {
        country: "Dinamarca",
        data: [       
            {        
                city: "Dinamarca General",        
                whatsappLink:"https://chat.whatsapp.com/C9zFigJKAn1EqtOWjClqwT"            },
            {        
                city: "Aalborg",        
                whatsappLink:"https://chat.whatsapp.com/Gy49eOerxzyElpInuiJ8ru"            },
            {        
                city: "Aarhus",        
                whatsappLink:"https://chat.whatsapp.com/ETnSyyAg1LGEap6DBjWxOp"            },
            {        
                city: "Copenhague",        
                whatsappLink:"https://chat.whatsapp.com/B64axwpzuIJJyUGXUtVXnF"            },
            {        
                city: "Horsens",        
                whatsappLink:"https://chat.whatsapp.com/EBPc4nhXHZ10l2UKuoXqRp"            },
            {        
                city: "Lyngby",        
                whatsappLink:"https://chat.whatsapp.com/Ky2jdHzaAvbHePc86zLveN"            },       
            {        
                city: "Odense",        
                whatsappLink:"https://chat.whatsapp.com/CvaqFpzwp6uHTxXzfhbnGV"            },     
            {        
                city: "Roskilde",        
                whatsappLink:"https://chat.whatsapp.com/EXq7gFmehYTIMpMHxsupmb"            },     


        ]
    },
    {
        country: "Escocia",
        data: [       
            {        
                city: "Escocia General",        
                whatsappLink:"https://chat.whatsapp.com/K0IcgZZwN6NDGGXh426vOB"            },
            {        
                city: "Aberdeen",        
                whatsappLink:"https://chat.whatsapp.com/DfJvHx2xamrKeiXKdxEqCc"            },
            {        
                city: "Dundee",        
                whatsappLink:"https://chat.whatsapp.com/KcZMqVXiXW5E8FCFSkyiLN"            },
            {        
                city: "Edimburgo",        
                whatsappLink:"https://chat.whatsapp.com/GKGV49yjMLj0EA6G8cswU0"            },
            {        
                city: "Glasgow",        
                whatsappLink:"https://chat.whatsapp.com/GUeRstqUrSwE2zh5eHfj9s"            }

        ]
    },
    {
        country: "Eslovaquia",
        data: [      
            {        
                city: "Eslovaquia General",        
                whatsappLink:"https://chat.whatsapp.com/HCGQXPomfD61BnICzzyI4B"            } ,
            {        
                city: "Bratislava",        
                whatsappLink:"https://chat.whatsapp.com/Evd20e5NBFzGzDyAcvrDaz"            } ,
            {        
                city: "Banská Bystrica",        
                whatsappLink:"https://chat.whatsapp.com/DBvkH8U4vra9F4CTn6DMja"            } ,
            {        
                city: "Kosice",        
                whatsappLink:"https://chat.whatsapp.com/LMlBXHg6O215D0tNVoNBkI"            } ,
            {        
                city: "Nitra",        
                whatsappLink:"https://chat.whatsapp.com/BBKrXi9vrYb31631FvME3h"            },
            {        
                city: "Presov",        
                whatsappLink:"https://chat.whatsapp.com/LJYOVj4AgQs1AaZcep16yv"            },
            {        
                city: "Trencin",        
                whatsappLink:"https://chat.whatsapp.com/LmrnXiIoVWECrQ80FLH4KE"            },
            {        
                city: "Trnava ",        
                whatsappLink:"https://chat.whatsapp.com/J6ZVcFJngjN9SNfKLVmliZ"            } ,
            {        
                city: "Zilina",        
                whatsappLink:"https://chat.whatsapp.com/HnB34dfJX9b3BK4L2pmmsw"            } 
        ]
    },
    {
        country: "Eslovenia",
        data: [      
            {        
                city: "Eslovenia",        
                whatsappLink:"https://chat.whatsapp.com/JUzXeACoknC1WMgBxdQio7"            } ,
            {        
                city: "Ljubljana",        
                whatsappLink:"https://chat.whatsapp.com/E5Z2hdEvJuZ4jIeltvWVJf"            } ,
            {        
                city: "Maribor",        
                whatsappLink:"https://chat.whatsapp.com/KEHIapyWqBOLZlXX66o6jW"            },
            {        
                city: "Koper",        
                whatsappLink:"https://chat.whatsapp.com/Dz3dOp6TN3jF7AFrycqyp5"            }
        ]
    },
    {
        country: "Estonia",
        data: [      
            {        
                city: "Estonia General",        
                whatsappLink:"https://chat.whatsapp.com/Ktlvv7tO2EKDDVhhYXn7vd"            } ,
            {        
                city: "Tallinn",        
                whatsappLink:"https://chat.whatsapp.com/FqbrLCx6hfY2s1ktHu70v4"            } ,
            {        
                city: "Tartu",        
                whatsappLink:"https://chat.whatsapp.com/FC9MCuoXLdhKR9qkpmJEzk"            } 
        ]
    },
    {
        country: "Finlandia",
        data: [  
            {        
                city: "Finlandia General",        
                whatsappLink:"https://chat.whatsapp.com/CeEuCk5T8eDIocSmRSqw9R"            },    
            {        
                city: "Joensuu",        
                whatsappLink:"https://chat.whatsapp.com/CSdEesyinkF7O5a0HJTgxK"            },
            {        
                city: "Jyvaskyla",        
                whatsappLink:"https://chat.whatsapp.com/D7BayN9PBeyEeOD10wfZLl"            },
            {        
                city: "Helsinki",        
                whatsappLink:"https://chat.whatsapp.com/LIBSqZofhfG49z8cPUvDv9"            },
            {        
                city: "Kuopio",        
                whatsappLink:"https://chat.whatsapp.com/JnE70HyWLf6K4qE1mel4Dy"            },
            {        
                city: "Lahti",        
                whatsappLink:"https://chat.whatsapp.com/HLCgETPktCT3nJbIXk69GJ"            },
            {        
                city: "Turku",        
                whatsappLink:"https://chat.whatsapp.com/HeEmqozZ5bnEKs9vSwkxg8"            },
            {        
                city: "Tampere",        
                whatsappLink:"https://chat.whatsapp.com/J6JTRpbShxtAKgLhZ7XF9O"            },
            {        
                city: "Vaasa",        
                whatsappLink:"https://chat.whatsapp.com/JlUX9Daasi17FUPkqapAks"            },
        ]
    },
    {
        country: "Francia",
        data: [    
            {        
                city: "Francia General",        
                whatsappLink:"https://chat.whatsapp.com/Ijwng22YWXI7WSq0Ptsv5R"            },  
            {        
                city: "Aix-En-Provence",        
                whatsappLink:"https://chat.whatsapp.com/DP2llutBfoKE40fIlNusPX"            },
            {        
                city: "Amiens",        
                whatsappLink:"https://chat.whatsapp.com/BDj0hRA8DjxGSG6HhVZhdM"            },
            {        
                city: "Angers",        
                whatsappLink:"https://chat.whatsapp.com/CZotH6SYbKtFTyVMSY70xc"            },
            {        
                city: "Besançon",        
                whatsappLink:"https://chat.whatsapp.com/CPMZi1UQmos0NFOQRiLZXr"            },
            {        
                city: "Bordeaux",        
                whatsappLink:"https://chat.whatsapp.com/L5K6Qlo7iRJEN8K5y0fZqw"            },
            {        
                city: "Brest",        
                whatsappLink:"https://chat.whatsapp.com/BmukQaAkZ116c4gPryz79X"            },
            {        
                city: "Cergy",        
                whatsappLink:"https://chat.whatsapp.com/BUmqpEIRoppHokwP1cX1SV"            },
            {        
                city: "Chambery",        
                whatsappLink:"https://chat.whatsapp.com/IDaayEWNbmuKjrXJRxAA2Q"            },
            {        
                city: "Clemont-Ferrand",        
                whatsappLink:"https://chat.whatsapp.com/IaHS44RzL9oI12SjQYE2fV"            },

            {        
                city: "Compiegne",        
                whatsappLink:"https://chat.whatsapp.com/E1zbHhXUT1B92NikXZsW5p"            },
            {        
                city: "Dijon",        
                whatsappLink:"https://chat.whatsapp.com/G8625MihWCBJr4av8KoQ1u"            },
            {        
                city: "Grenoble",        
                whatsappLink:"https://chat.whatsapp.com/HF1mHBzFJY1FmBKZRNpZr1"            },
            {        
                city: "La Rochelle",        
                whatsappLink:"https://chat.whatsapp.com/BFHMtfwi3mO29y6c4lTEyD"            },
            {        
                city: "Lille",        
                whatsappLink:"https://chat.whatsapp.com/LVVTliyTUaa54mlc5pKOx4"            },
            {        
                city: "Lyon",        
                whatsappLink:"https://chat.whatsapp.com/HUvdexXSA61KrzvgRtvRB5"            },
            {        
                city: "Marsella",        
                whatsappLink:"https://chat.whatsapp.com/JP5jPBFVMBW4LQEaupNqgr"            },
            {        
                city: "Montpellier",        
                whatsappLink:"https://chat.whatsapp.com/KHkdd6nMYjd0DkiuZOVs52"            },
            {        
                city: "Nancy",        
                whatsappLink:"https://chat.whatsapp.com/EKxeCv5rHiL1zeFt2Ak8Dr"            },
            {        
                city: "Nantes",        
                whatsappLink:"https://chat.whatsapp.com/BfZzmwh11SoA8kDTuGwESn"            },
            {        
                city: "Nimes",        
                whatsappLink:"https://chat.whatsapp.com/KwHPav19q3jJ09855jxIem"            },
            {        
                city: "Niza",        
                whatsappLink:"https://chat.whatsapp.com/G7WfJRCuDekGmUjHjzwMiA"            },
            {        
                city: "Orleans",        
                whatsappLink:"https://chat.whatsapp.com/DCELeWhEYCq8J3XaruOpbZ"            },
            {        
                city: "Paris",        
                whatsappLink:"https://chat.whatsapp.com/IgSEsTCR7XJA8V22gPwfVw"            },
            {        
                city: "Perpignan",        
                whatsappLink:"https://chat.whatsapp.com/JedncfWQT6SDl2PDst5ftQ"            },
            {        
                city: "Poitiers",        
                whatsappLink:"https://chat.whatsapp.com/CF8tY2nfrkI30dmkEMDRlw"            },
            {        
                city: "Reims",        
                whatsappLink:"https://chat.whatsapp.com/Fr6AVOu5qjuC4zdqzC12h8"            },
            {        
                city: "Rennes",        
                whatsappLink:"https://chat.whatsapp.com/CX7YxxSEGgS0jhrK5xcucU"            },
            {        
                city: "Rouren",        
                whatsappLink:"https://chat.whatsapp.com/BC4D2TDOsMBKAe6gBT9xWk"            },
            {        
                city: "Saint Ettienne",        
                whatsappLink:"https://chat.whatsapp.com/L532uoMvOr0FE6b0S28gcB"            },
            {        
                city: "Strasbourg",        
                whatsappLink:"https://chat.whatsapp.com/Ewwb7hyGVIA9FnVsIGnWHE"            },
            {        
                city: "Toulouse",        
                whatsappLink:"https://chat.whatsapp.com/LNDgu5Ri2NDJKvxfuMX9BC"            },
            {        
                city: "Toulon",        
                whatsappLink:"https://chat.whatsapp.com/IMdc4BR2N4F4QRvmg9zlwE"            },
            {        
                city: "Tours",        
                whatsappLink:"https://chat.whatsapp.com/Bzs3PifIJjQ5EROl1VeU1h"            },
            {        
                city: "Troyes",        
                whatsappLink:"https://chat.whatsapp.com/H1rC2fxZK0QJeTSVfSsBQP"            },


        ]
    },
    
    {
        country: "Grecia",
        data: [      
            {        
                city: "Grecia General",        
                whatsappLink:"https://chat.whatsapp.com/IbWQGZHMWVU3qnY25M2DIv"            } ,
            {        
                city: "Atenas",        
                whatsappLink:"https://chat.whatsapp.com/Ddb7VZChw7MKMTG11LZ95L"            } ,            
            {        
                city: "Heraklion",        
                whatsappLink:"https://chat.whatsapp.com/JcBYLoiK5sm0PqTE892xus"                 } ,
            {        
                city: "Ionnina",        
                whatsappLink:"https://chat.whatsapp.com/I9N49HgBr986fQ4XA7cUIe"            } ,
            {        
                city: "Salonica",        
                whatsappLink:"https://chat.whatsapp.com/K822JuceEOo94yGnlyXq3G"            } ,
            {        
                city: "Patras",        
                whatsappLink:"https://chat.whatsapp.com/Glnt2GoOCapHsGEoLN2tY5"                  } ,
            {        
                city: "Volos",        
                whatsappLink:"https://chat.whatsapp.com/DA7U8DauxpO7rnK668QhmW"            } ,

        ]
    },

    {
        country: "Hungría",
        data: [      
            {        
                city: "Hungría General",        
                whatsappLink:"https://chat.whatsapp.com/GfaHtDvmgd3HtRpMp9dLub"            } ,
            {        
                city: "Budapest",        
                whatsappLink:"https://chat.whatsapp.com/KjlajFgFlok4Y9Pu43hAP1"            } ,
            {        
                city: "Debrecen",        
                whatsappLink:"https://chat.whatsapp.com/JnlOzkTtgpD8rc036L5slx"            } ,
            {        
                city: "Gyor",        
                whatsappLink:"https://chat.whatsapp.com/IaxGVTqavwU9brGpCrqJtH"            } ,
            {        
                city: "Miskolc",        
                whatsappLink:"https://chat.whatsapp.com/GcfLX2oSxzw0wXJu7pk9nP"           } ,
            {        
                city: "Pécs",        
                whatsappLink:"https://chat.whatsapp.com/E8TrJMexvbR1gOoIEYSokj"            } ,
            {        
                city: "Szeged",        
                whatsappLink:"https://chat.whatsapp.com/L2HUSmva1Ui7vDWjeJDWmH"            } ,
                {        
                    city: "Veszprem",        
                    whatsappLink:"https://chat.whatsapp.com/L2HUSmva1Ui7vDWjeJDWmH"            } ,
        ]
    },
    {
        country: "Inglaterra",
        data: [      
            {        
                city: "Birmingham",        
                whatsappLink:"https://chat.whatsapp.com/IcxsR307XVOBHqWWQIkclN"     
            },
            {        
                city: "Bradford",        
                whatsappLink:"https://chat.whatsapp.com/Lo7VVmk91Oi4zvZw6EzbYR"   
            },
            {        
                city: "Bristol",        
                whatsappLink:"https://chat.whatsapp.com/FOg7p23HBbzHh7EW69fNEp"    
            },
            {        
                city: "Cambridge",        
                whatsappLink:"https://chat.whatsapp.com/LFwp0Jst7pM3FLRggyglcT"    
            },
            {        
                city: "Cardiff",        
                whatsappLink:"https://chat.whatsapp.com/G52aZVkOcrd58zHayB7iZ2"   
            },
            {        
                city: "Chester",        
                whatsappLink:"https://chat.whatsapp.com/Is7yNoTuVN7H7xFFrHMFxE"  
            },
            {        
                city: "Coventry",        
                whatsappLink:"https://chat.whatsapp.com/IZz09qqedvrJtqKQhMXFFq" 
            },
            {        
                city: "Greenwich",        
                whatsappLink:"https://chat.whatsapp.com/LcQRUgRD8CEIzuArrQdRJa"
            },
            {        
                city: "Leeds",        
                whatsappLink:"https://chat.whatsapp.com/F6FBYFf9BdX4A9AF4SxDNQ"    
            },
            {        
                city: "Liverpool",        
                whatsappLink:"https://chat.whatsapp.com/CzRggGUiYD3D8qkpKN7wni"  
            },
            {        
                city: "Londres",        
                whatsappLink:"https://chat.whatsapp.com/HrLpLsf5aJR7Yww57OiJnt"     
            },
            {        
                city: "Manchester",        
                whatsappLink:"https://chat.whatsapp.com/GtBtliIs8Rn3iC7CdtdjQX"    
            },  
            {        
                city: "Nottingham",        
                whatsappLink:"https://chat.whatsapp.com/GVjaL3jG90F8pS1xrslrIK"     
            },    
            {        
                city: "Oxford",        
                whatsappLink:"https://chat.whatsapp.com/FodMgMcYXsL0rp9PmQL6cJ"    
            },   
            {        
                city: "Plymouth",        
                whatsappLink:"https://chat.whatsapp.com/BiUaAYtwZwA4Pf1vkzpJNF"   
            },     
            {        
                city: "Portsmouth",        
                whatsappLink:"https://chat.whatsapp.com/IGDPNBLoVZn5BC7kFI9MiY" 
            },   
            {        
                city: "Reading",        
                whatsappLink:"https://chat.whatsapp.com/KD2JiZSEAcCEiZOCJNSZSw"     
            },
            {        
                city: "Sheffield",        
                whatsappLink:"https://chat.whatsapp.com/BkpbWqSt1Zt0pPpPeIIJnq"     
            },
            {        
                city: "York",        
                whatsappLink:"https://chat.whatsapp.com/Ds9ICTgs9Kw5xpdrN29EW8"    
            },  


        ]
    },
    {
        country: "Irlanda",
        data: [      
            {        
                city: "Cork",        
                whatsappLink: "https://chat.whatsapp.com/HBndUVPdDoN27yWoE9fswm"      
            } ,
            {        
                city: "Dublin",        
                whatsappLink: "https://chat.whatsapp.com/Kwa9uzxuWg53zjSJ1BHAmd"      
            } ,
            {        
                city: "Galway",        
                whatsappLink: "https://chat.whatsapp.com/Ce8yTcXhAsCLDLfR8WApFY"      
            } ,
            {        
                city: "Limerick",        
                whatsappLink: "https://chat.whatsapp.com/Gt8WzBYpD7l4sm1upQggOx"      
            }
        ]
    },
    {
        country: "Italia",
        data: [   
            {        
                city: "Italia General",        
                whatsappLink:"https://chat.whatsapp.com/Dv78ekUxQLH3O6kzpyN4xK"            } ,   
            {        
                city: "Ancona",        
                whatsappLink:"https://chat.whatsapp.com/FUlhFAZNwlWKv2LHkgS61e"            } ,
            {        
                city: "Bari",        
                whatsappLink:"https://chat.whatsapp.com/GReT2WDPVfvG3O7x8REuLZ"            } ,
            {        
                city: "Benevento",        
                whatsappLink:"https://chat.whatsapp.com/Bwg9eKhIj6rKWWUkYnWHT5"            },
            {        
                city: "Bergamo",        
                whatsappLink:"https://chat.whatsapp.com/ChyMJCzDe9W9spfZj7KX6N"            },
            {        
                city: "Bolonia",        
                whatsappLink:"https://chat.whatsapp.com/LfigVwqVybn4X3s1deMQ4L"            } ,
            {        
                city: "Bolzano",        
                whatsappLink:"https://chat.whatsapp.com/IUN2eQzuWV20HHuSxxUTrv"            } ,
            {        
                city: "Brescia",        
                whatsappLink:"https://chat.whatsapp.com/EWqF5r28JyW8XB9rO5Jc3d"            } ,
            {        
                city: "Cagliari",        
                whatsappLink:"https://chat.whatsapp.com/GP582PhMldZIlacLnYyXiH"            },
            {        
                city: "Campobasso",        
                whatsappLink:"https://chat.whatsapp.com/JSbhPWyQ1cJ8qimsuTKGUc"            },
            {        
                city: "Carrara",        
                whatsappLink:"https://chat.whatsapp.com/IEhi44kwQINAteiZgFy1by"            },
            {        
                city: "Cassino",        
                whatsappLink:"https://chat.whatsapp.com/G12fFKVp6Jp1gpSYnoeGFb"            } ,           
            {        
                city: "Catanzaro",        
                whatsappLink:"https://chat.whatsapp.com/C2ZvfIXwqquJJkg0OuzZ1T"            } ,
            {        
                city: "Cesena",        
                whatsappLink:"https://chat.whatsapp.com/Lo15hOg3G6WLnrTEZqiG7X"            },
            {        
                city: "Cosenza",        
                whatsappLink:"https://chat.whatsapp.com/Lv1IJ4zqo0sLqJCqKGrNPp"            } ,
            {        
                city: "Enna",        
                whatsappLink:"https://chat.whatsapp.com/L8GJzXuGHbl67yLWHyzdVO"                } ,
            {        
                city: "Ferrara",        
                whatsappLink:"https://chat.whatsapp.com/LqLBdGBLKDFLuV1AvMjHOm"                },
            {        
                city: "Florencia",        
                whatsappLink:"https://chat.whatsapp.com/I7gqb4csAYF3AKBKlBFWdF"            } ,
            {        
                city: "Foggia",        
                whatsappLink:"https://chat.whatsapp.com/DJ0Dx4zwNjcAiRx0V0J15b"            } ,
            {        
                city: "Forli",        
                whatsappLink:"https://chat.whatsapp.com/BrTTwUkCa0j8JEVbP6Db6p"            } ,
            {        
                city: "Frosinone",        
                whatsappLink:"https://chat.whatsapp.com/FD8iTbbeVpq2LZVqR7cM0W"            } ,
            {        
                city: "Genova",        
                whatsappLink:"https://chat.whatsapp.com/LFuDCBEjBpe6yq1DyqyRle"            } ,
            {        
                city: "L'Aquila",        
                whatsappLink:"https://chat.whatsapp.com/EygZqRLclIt3zBmK1W9aMC"            } ,
            {        
                city: "Lecce",        
                whatsappLink:"https://chat.whatsapp.com/Enhyuq7WsXQ2ZLADmzfMJx"            },
            {        
                city: "Macerata",        
                whatsappLink:"https://chat.whatsapp.com/HzFK53zGGaS7zF8L5OiV3C"                } ,    
            {        
                city: "Messina",        
                whatsappLink:"https://chat.whatsapp.com/Kfygbg80Teh83JzREYA3j0"            } ,
            {        
                city: "Milan",        
                whatsappLink:"https://chat.whatsapp.com/F8nbsV2IlaS7p2rELKDNmP"            } ,
            {        
                city: "Milazzo",        
                whatsappLink:"https://chat.whatsapp.com/HpnbyYhP9v0G7mJFedpF5j"            },
            {        
                city: "Modena",        
                whatsappLink:"https://chat.whatsapp.com/KtegP2OAQxUC0SPaSCzFgd"            } ,
            {        
                city: "Nápoles",        
                whatsappLink:"https://chat.whatsapp.com/Bqj3L2tsNBk6KAItCFyUjD"            } ,
            {        
                city: "Padua",        
                whatsappLink:"https://chat.whatsapp.com/L7lWIYB4CO20NRilsZWywo"            } ,
            {        
                city: "Palermo",        
                whatsappLink:"https://chat.whatsapp.com/F4uvaLHAiivID5Mk7qmBgO"            },
            {        
                city: "Parma",        
                whatsappLink:"https://chat.whatsapp.com/Ef6g4I5VjIrBsk5hNhimru"            } ,            
            {        
                city: "Pavia",        
                whatsappLink:"https://chat.whatsapp.com/FYSrvfNS0bvBVlRwdqxxlf"            } ,
            {        
                city: "Perugia",        
                whatsappLink:"https://chat.whatsapp.com/H5F2Yd9Z91JGvvycXUfoiE"            } ,
            {        
                city: "Pescara",        
                whatsappLink:"https://chat.whatsapp.com/KWSZiRBpALXAlo8EE8ezLs"            },
            {        
                city: "Pisa",        
                whatsappLink:"https://chat.whatsapp.com/JSKXBIsPOTyEmhvc9Jy70K"            } ,
            {        
                city: "Potenza",        
                whatsappLink:"https://chat.whatsapp.com/KnF8yUcK0zkDithulQwZpS"            } ,
            {        
                city: "Regio Calabria",        
                whatsappLink:"https://chat.whatsapp.com/Dv6AXJ4enwwGB4Y8SjWThr"            } ,
            {        
                city: "Regio Emilia",        
                whatsappLink:"https://chat.whatsapp.com/IlEifYexiNV6js6mFdPUeG"            } ,
            {        
                city: "Rimini",        
                whatsappLink:"https://chat.whatsapp.com/GFMpyOv0tN7DHewr7RcUnG"            },
            {        
                city: "Roma",        
                whatsappLink:"https://chat.whatsapp.com/Lt9mnlLAClwClQ1LIYfgFw"            } ,
            {        
                city: "Salerno",        
                whatsappLink:"https://chat.whatsapp.com/Cp2Dcvl0ol1CMzk0RaVDPF"            } ,
            {        
                city: "San'telia Fiumerapido",        
                whatsappLink:"https://chat.whatsapp.com/L9kHxRnQVZG0yrQJvN0d60"            } ,
            {        
                city: "Sassari",        
                whatsappLink:"https://chat.whatsapp.com/Dir7ii3IF2o8Dn0bXkFbW0"            },
            {        
                city: "Siena",        
                whatsappLink:"https://chat.whatsapp.com/JnPsiayhEGw7kNCAeLXe1Y"            } ,
            {        
                city: "Turin",        
                whatsappLink:"https://chat.whatsapp.com/HcyUNUE2BjP6GEwmBDvx45"            },
            {        
                city: "Trento",        
                whatsappLink:"https://chat.whatsapp.com/FzOiZQbV4DpHmluRo8FIdc"            } ,
            {        
                city: "Trieste",        
                whatsappLink:"https://chat.whatsapp.com/HJlj89B8IE23Fz014qsFNy"            } ,
            {        
                city: "Udine",        
                whatsappLink:"https://chat.whatsapp.com/EUVgexIVqmBD6kwWbLlG0f"            },

            {        
                city: "Urbino",        
                whatsappLink:"https://chat.whatsapp.com/J2Q7gspDi5e5XgJTsIq8HZ"            } ,
            {        
                city: "Varese",        
                whatsappLink:"https://chat.whatsapp.com/F9917MFB18sFIANJhzwN53"            } ,
            {        
                city: "Venecia",        
                whatsappLink:"https://chat.whatsapp.com/Lo53fkJe6mEGeNNBnZNxL7"            } ,
            {        
                city: "Verona",        
                whatsappLink:"https://chat.whatsapp.com/C3OSp9NAWDJLu02fpmLjom"            },
            {        
                city: "Vercelli",        
                whatsappLink:"https://chat.whatsapp.com/HbkFOCRvImY7KzESuRWkKK"            },
            {        
                city: "Viterbo",        
                whatsappLink:"https://chat.whatsapp.com/LNcOl6ZrVnqEfz2iuhL4lD"            }
        ]
    },
    {
        country: "Letonia",
        data: [      
            {        
                city: "Letonia General",        
                whatsappLink:"https://chat.whatsapp.com/G1hh2yh3i4l26bVmqteINN"     } ,
                {        
                city: "Jelgava",        
                whatsappLink:"https://chat.whatsapp.com/GvSZFQcr9eLGqhOWC8I5Yx"      } ,
                {        
                city: "Liepaja",        
                whatsappLink:"https://chat.whatsapp.com/GvSZFQcr9eLGqhOWC8I5Yx"      } ,
                {        
                city: "Riga",        
                whatsappLink:"https://chat.whatsapp.com/GvSZFQcr9eLGqhOWC8I5Yx"      } ,
]
    },
    {
        country: "Lituania",
        data: [      
            {        
                city: "Lituania General",        
                whatsappLink:"https://chat.whatsapp.com/DEjIMOz0aGxFq7PvL34qrS"            } ,
            {        
                city: "Kaunas",        
                whatsappLink:"https://chat.whatsapp.com/FW9YYQwyFBy4KP5r5BJRAy"            } ,
            {        
                city: "Klaipéda",        
                whatsappLink:"https://chat.whatsapp.com/BfUzWA11ViFA1Jx0Hj4dfd"            },
            {        
                city: "Siauliai",        
                whatsappLink:"https://chat.whatsapp.com/EeS3igQLtDRLQ7NKUBwoj7"            } ,
            {        
                city: "Vilna",        
                whatsappLink:"https://chat.whatsapp.com/DkFZyF1KAjU3bVejd0K35V"            } ,

        ]
    },
    {
        country: "Luxemburgo",
        data: [      
            {        
                city: "Luxemburgo",        
                whatsappLink:"https://chat.whatsapp.com/GvSZFQcr9eLGqhOWC8I5Yx"      } ,
        ]
    },
    {
        country: "Macedonia",
        data: [      
            {        
                city: "Macedonia General",        
                whatsappLink:"https://chat.whatsapp.com/F3qGWM6r3IE0KM2Dc0CAqw"     } ,
        ]
    },
    {
        country: "Malta",
        data: [      
            {        
                city: "Saint Julians",        
                whatsappLink: "https://chat.whatsapp.com/DyEKMNUXyX251QIRuqSOlE"      
            } ,
            {        
                city: "Sliema",        
                whatsappLink: "https://chat.whatsapp.com/GIvfZG5jvuV8aAKwMIhshO"      
            } ,
            {        
                city: "Valletta",        
                whatsappLink: "https://chat.whatsapp.com/Kgz73yiW1hrEWoj7oLsH8l"      
            } 

        ]
    },
  
    {
        country: "Noruega",
        data: [      
            {        
                city: "Bodø",        
                whatsappLink: "https://chat.whatsapp.com/HKw1c4igQtlHFCXmke3iRd"      
            } ,
            {        
                city: "Bergen",        
                whatsappLink: "https://chat.whatsapp.com/JWWcjuY3RkD6hdF6f95nsz"      
            },
            {        
                city: "Stavanger",        
                whatsappLink: "https://chat.whatsapp.com/HWUCVAdb9dxL1mT8BsyGor"      
            } ,
            {        
                city: "Tromso",        
                whatsappLink: "https://chat.whatsapp.com/LEwkTKHXZ6XHfEOe7Xunuc"      
            } ,
            {        
                city: "Trondheim",        
                whatsappLink: "https://chat.whatsapp.com/LIAXtBxlMbB8fe53x8zzRj"      
            } ,
            {        
                city: "Oslo",        
                whatsappLink: "https://chat.whatsapp.com/JxhahNiZBel7dhLfBSFtpX"      
            } ,

        ]
    },
    {
        country: "Holanda",
        data: [  
            {        
                city: "Países Bajos General",        
                whatsappLink:"https://chat.whatsapp.com/DQI8z9aILyRGWT1klq8waJ"            } ,
            {        
                city: "Amsterdam",        
                whatsappLink:"https://chat.whatsapp.com/Jpd5wFxtmiGJKJXr3xvIf5"            } ,
            {        
                city: "Arnhem",        
                whatsappLink:"https://chat.whatsapp.com/BziKhNX4IoT8e4BnClEPBd"            },
            {        
                city: "Breda",        
                whatsappLink:"https://chat.whatsapp.com/LER6Wt3Ueqr5IABTSShuu1"            } ,
            {        
                city: "Delft",        
                whatsappLink:"https://chat.whatsapp.com/IAX52FMCPhDChwpuzxUHRy"            },
            {        
                city: "Eindhoven",        
                whatsappLink:"https://chat.whatsapp.com/LMeKKo8cipJLnXFBYOPKmU"            },
            {        
                city: "Enschede",        
                whatsappLink:"https://chat.whatsapp.com/JgKXocMknvrG4ApD9Bxair"            },
            {        
                city: "Groningen",        
                whatsappLink:"https://chat.whatsapp.com/JXhkjnxdakmBa4z0ShFGt7"            },
            {        
                city: "Herlen",        
                whatsappLink:"https://chat.whatsapp.com/GkGX8no9QzSEYz1FEhxzc3"            } ,
            {        
                city: "Hertogenbosch",        
                whatsappLink:"https://chat.whatsapp.com/CibrwenXkrJ9cxOSnrw4vz"            } ,
            {        
                city: "La Haya",        
                whatsappLink:"https://chat.whatsapp.com/KQ2rPi6k1Zc01hhpenmFls"            } ,
            {        
                city: "Leeuwarden",        
                whatsappLink:"https://chat.whatsapp.com/EsQaWBfrb0FEF8dWh6y17B"            },
            {        
                city: "Leiden",        
                whatsappLink:"https://chat.whatsapp.com/JncQYZ4CibC2qEGbyulYDM"            },
            {        
                city: "Maastrich",        
                whatsappLink:"https://chat.whatsapp.com/Knt0VkKkstkEJf41NR30Dz"            } ,
            {        
                city: "Meppel",        
                whatsappLink:"https://chat.whatsapp.com/K8h7iVtLWB3GXUvTYAZhcx"            } ,
            {        
                city: "Middelburg",        
                whatsappLink:"https://chat.whatsapp.com/CkHYPhOAXBLDV7ZEcJZQXT"            } ,
            {        
                city: "Nimega",        
                whatsappLink:"https://chat.whatsapp.com/FpfyRsoeS2uG9ic9kDTv3O"            } ,
            {        
                city: "Rotterdam",        
                whatsappLink:"https://chat.whatsapp.com/De1uru7PKqhHmc0thtBHVa"            } ,
            {        
                city: "Tilburg",        
                whatsappLink:"https://chat.whatsapp.com/E2YJQAeVvupLPbA2eIEGjC"            } ,
            {        
                city: "Utretch",        
                whatsappLink:"https://chat.whatsapp.com/I3jW4HPlWz1Eu5HIN1Q3wb"            } ,
            {        
                city: "Venlo",        
                whatsappLink:"https://chat.whatsapp.com/KVbfq30w3ymJuzR1yt4txX"            } ,
            {        
                city: "Vlissingen",        
                whatsappLink:"https://chat.whatsapp.com/BazdKq9ClEO5jLAtUU3BRc"            } ,
            {        
                city: "Wageningen",        
                whatsappLink:"https://chat.whatsapp.com/JYsqJMOogz3JBeFA5BHc47"            } ,
            {        
                city: "Zwolle",        
                whatsappLink:"https://chat.whatsapp.com/EpO1q08i9ftLKlf9lCuOKB"            } ,

        ]
    },
    {
        country: "Polonia",
        data: [      
            {        
                city: "Polonia General",        
                whatsappLink:"https://chat.whatsapp.com/IueL7mej8V7D1eDIWwWDiM"            } ,
            {        
                city: "Bialystok",        
                whatsappLink:"https://chat.whatsapp.com/DGkQVajkTWB3ydE0kJAyTQ"            } ,
            {        
                city: "Bielsko-Biala",        
                whatsappLink:"https://chat.whatsapp.com/BnREA54KhirBhOftruu5Qm"            } ,
            {        
                city: "Bydgoszcz",        
                whatsappLink:"https://chat.whatsapp.com/Ls4wA40D4gMBB0HXlBcXKv"            } ,
            {        
                city: "Czestochowa",        
                whatsappLink:"https://chat.whatsapp.com/I6CjTXvPUNM88TseLGGLPf"            } ,
            {        
                city: "Cracovia",        
                whatsappLink:"https://chat.whatsapp.com/IahjDUvMLzv3UVAk6eva8N"            },
            {        
                city: "Elbag",        
                whatsappLink:"https://chat.whatsapp.com/Lkt9svx4CPTIEHA2h4yHA8"            } ,
            {        
                city: "Gdansk",        
                whatsappLink:"https://chat.whatsapp.com/JTShhSMkLXF29dqpAYptnd"            } ,
            {        
                city: "Gdynia",        
                whatsappLink:"https://chat.whatsapp.com/Ffa2tQYD2Iz6RlPc2jy1X8"            } ,
            {        
                city: "Gliwice",        
                whatsappLink:"https://chat.whatsapp.com/FNP3tnrhvgTIB11FneqDwk"            } ,
            {        
                city: "Kielce",        
                whatsappLink:"https://chat.whatsapp.com/KhLZLBeGxrI1Q3tVkkTjrM"            },
            {        
                city: "Katowice",        
                whatsappLink:"https://chat.whatsapp.com/JKWQHqULaQ97ro59mgiYgl"            },
            {        
                city: "Konin",        
                whatsappLink:"https://chat.whatsapp.com/EnaPJ6Gb8d7CUeEJgB5Hm9"            } ,
            {        
                city: "Krosno",        
                whatsappLink:"https://chat.whatsapp.com/LVm5YJ75ojL71JvSk2NdHx"            } ,
            {        
                city: "Legnica",        
                whatsappLink:"https://chat.whatsapp.com/Bwo7EO2LuVKLJXVLsFFBRl"            } ,
            {        
                city: "Leszno",        
                whatsappLink:"https://chat.whatsapp.com/HlwY3smIVoQEHnYliqd0VI"            } ,
            {        
                city: "Lodz",        
                whatsappLink:"https://chat.whatsapp.com/DxZEvRCwGdo51RArm99SKl"            } ,
            {        
                city: "Lomza",        
                whatsappLink:"https://chat.whatsapp.com/LLyCARvxLq77cshDDG80Dn"            } ,
            {        
                city: "Lublin",        
                whatsappLink:"https://chat.whatsapp.com/K7NxQbATnei2sOdH6JNa3L"            } ,
            {        
                city: "Noowy Sacz",        
                whatsappLink:"https://chat.whatsapp.com/LuXO7Gc91RJ9rUGs2mndtT"            },
            {        
                city: "Nysa",        
                whatsappLink:"https://chat.whatsapp.com/FwuWKR99ag15c7qJkKSrFg"            },
            {        
                city: "Olsztyn",        
                whatsappLink:"https://chat.whatsapp.com/FIURTK32Z9i2BSV87c2gyX"            },
            
            {        
                city: "Opole",        
                whatsappLink:"https://chat.whatsapp.com/D22wckt3RP11h2R1cOBIFU"            },
            {        
                city: "Osijek",        
                whatsappLink:"https://chat.whatsapp.com/LO3gIvH4KqT3D2uqokPckg"            } ,
            {        
                city: "Plock",        
                whatsappLink:"https://chat.whatsapp.com/Lb7Ka2QIz5I674a975VFpY"            } ,
            {        
                city: "Poznan",        
                whatsappLink:"https://chat.whatsapp.com/F2Yl1gJqcZPFZe4TA2Cn4z"            } ,
            {        
                city: "Radom",        
                whatsappLink:"https://chat.whatsapp.com/KmzyDj2RHxSK9QiaslPmy8"            } ,
            {        
                city: "Rzeszow",        
                whatsappLink:"https://chat.whatsapp.com/Kz7WrArBtBfHAAJcqXNsyH"            } ,
            {        
                city: "Sanok",        
                whatsappLink:"https://chat.whatsapp.com/CRFIinR2AzvEneqU1KDZ9H"            } ,
            {        
                city: "Szczecin",        
                whatsappLink:"https://chat.whatsapp.com/EpAeJDfIwkx0sQGrK5xYGs"            } ,
            {        
                city: "Tarnow",        
                whatsappLink:"https://chat.whatsapp.com/JWcpZZPkGu72zzbkIjMN5c"            } ,
            {        
                city: "Toruń",        
                whatsappLink:"https://chat.whatsapp.com/JAEJzPoMKdF6wk42DCCjJT"            } ,
            {        
                city: "Varsovia",        
                whatsappLink:"https://chat.whatsapp.com/FEsMyFRYsgq1EJ45StOEP4"            },
            {        
                city: "Wroclaw",        
                whatsappLink:"https://chat.whatsapp.com/JGuU4eFq2CZ0HmlzzxHdce"            },
        ]
    },
    {
        country: "Portugal",
        data: [      
            {        
                city: "Portugal General",        
                whatsappLink:"https://chat.whatsapp.com/BaU8wlkJBEDC3BLJizCnst"            } ,
            {        
                city: "Aveiro",        
                whatsappLink:"https://chat.whatsapp.com/GVmGp1HTGg0HM6WaT7olF9"            } ,
            {        
                city: "Azores",        
                whatsappLink:"https://chat.whatsapp.com/C4qnR0E7nQPAHhPjaqEFQ8"            } ,
            {        
                city: "Barcelos",        
                whatsappLink:"https://chat.whatsapp.com/EHeDWTlg5daAl4DG4K0YVd"            } ,
            {        
                city: "Beja",        
                whatsappLink:"https://chat.whatsapp.com/JNfAjeSX9P771pI7WOeGtA"            } ,      
            {        
                city: "Braga",        
                whatsappLink:"https://chat.whatsapp.com/FJEug0VRMxpITm6yFJKe9Z"            } ,
            {        
                city: "Braganza",        
                whatsappLink:"https://chat.whatsapp.com/IBtN8WnH56S6E2dSphq1Fm"            } ,
            {        
                city: "Castelo Branco",        
                whatsappLink:"https://chat.whatsapp.com/K30ZT94CeU8Lg6Q7m1jevy"            } ,
            {        
                city: "Coimbra",        
                whatsappLink:"https://chat.whatsapp.com/GaHGSCRjX2w67sLpoXQuX4"            },
            {        
                city: "Covilha",        
                whatsappLink:"https://chat.whatsapp.com/HU9kDhBh1iJKrPRJWWyVVM"            },
            {        
                city: "Evora",        
                whatsappLink:"https://chat.whatsapp.com/JhuWe2hmhVLEMIEkp9LTgX"            },
            {        
                city: "Faro",        
                whatsappLink:"https://chat.whatsapp.com/Ip20wd0PxT0GRyOeLrfRcz"            },
            {        
                city: "Guarda",        
                whatsappLink:"https://chat.whatsapp.com/IbRQgRusyPk2YFXclWVPR9"            } ,
            {        
                city: "Guimares",        
                whatsappLink:"https://chat.whatsapp.com/JES264o8Dhk6DUjgAEdQZw"            } ,
            {        
                city: "Leiria",        
                whatsappLink:"https://chat.whatsapp.com/FpyLRPAjgBXH6JqDvZlAXV"            } ,
            {        
                city: "Lisboa",        
                whatsappLink:"https://chat.whatsapp.com/Kk2mrlnawXo4smFzkD5SpA"            } ,
            {        
                city: "Oporto",        
                whatsappLink:"https://chat.whatsapp.com/BYO0umbpcyyGC3njs8gCFN"            },
            {        
                city: "Setubal",        
                whatsappLink:"https://chat.whatsapp.com/GvUjq9ym3RELtihhxy5hg8"            } ,
            {        
                city: "Viana do Castelo",        
                whatsappLink:"https://chat.whatsapp.com/Kq3hxW7V0CvHNcOleVunFQ"            } ,
            {        
                city: "Vila Real",        
                whatsappLink:"https://chat.whatsapp.com/FK0rc1LxBBJ4Pi3KLCmvIU"            } ,
            {        
                city: "Viseu",        
                whatsappLink:"https://chat.whatsapp.com/JcJWMYtU8NFIR6xGGchEEB"            },
        ]
    },

    {
        country: "República Checa",
        data: [   
            {        
                city: "República Checa General",        
                whatsappLink:"https://chat.whatsapp.com/Ev04XBQcKn04YHmNm8gFMx"            },   
            {        
                city: "Brno",        
                whatsappLink:"https://chat.whatsapp.com/L1eCXYEU2N46G4OO9SlQ7n"            },
            {        
                city: "Ceske Budejovice",        
                whatsappLink:"https://chat.whatsapp.com/HIZzsKWtu9IEv50m0YUpLc"            },     
            {        
                city: "Liberec",        
                whatsappLink:"https://chat.whatsapp.com/Ew6t2myMcda2EmrKYB2XHd"            },  
            {        
                city: "Hradec Karlove",        
                whatsappLink:"https://chat.whatsapp.com/HE7KEEOtFNzFYerd0ON2Pw"            },  
            {        
                city: "Ostrava",        
                whatsappLink:"https://chat.whatsapp.com/LwVJFmj6cy5CXvpPRoArq5"            },      
            {        
                city: "Olomuc",        
                whatsappLink:"https://chat.whatsapp.com/CiRfzxZ5tnT5MjTuvTlJId"            },     
            {        
                city: "Pilsen",        
                whatsappLink:"https://chat.whatsapp.com/FLBE5FuFUvlBiCwQPyn3aL"            },      
            {        
                city: "Pardubice",        
                whatsappLink:"https://chat.whatsapp.com/Fujbnlt4KrgCRdjNlRl4El"            },   
            {        
                city: "Praga",        
                whatsappLink:"https://chat.whatsapp.com/EtCOhxLSpqp7jrQzJirjTC"            },      
            {        
                city: "Ústí nad Labem",        
                whatsappLink:"https://chat.whatsapp.com/JLIK49ul3RbHRZxrxoyzm8"            },     
            {        
                city: "Zlin",        
                whatsappLink:"https://chat.whatsapp.com/EloiXdYe0tOKLp2jp6YjwS"            },   


        ]
    },

    {
        country: "Rumania",
        data: [      
            {        
                city: "Brasov",        
                whatsappLink: "https://t.co/SJoAC5jXpb"      
            } ,
            {        
                city: "Bucarest",        
                whatsappLink: "https://t.co/N8dIg9CMia"      
            } ,
            {        
                city: "Cluj-Napoca",        
                whatsappLink: "https://t.co/IMxEQMjozP"      
            },
            {        
                city: "Craiova",        
                whatsappLink: "https://t.co/1596OM4hqS"      
            },
            {        
                city: "Iasi",        
                whatsappLink: "https://t.co/V6kyIqVlN3"      
            } ,
            {        
                city: "Petrosani",        
                whatsappLink: "https://t.co/4rKbakhjYR"      
            } ,
            {        
                city: "Oradea",        
                whatsappLink: "https://t.co/CFOqFAkh2P"      
            },
            {        
                city: "Sibiu",        
                whatsappLink: "https://t.co/RA7ZIWYtUw"      
            },
            {        
                city: "Timisoara",        
                whatsappLink: "https://t.co/pxw3NCsBrd"      
            },
        ]
    },
    {
        country: "Serbia",
        data: [      
            {        
                city: "Serbia General",        
              whatsappLink:"https://chat.whatsapp.com/IJimfVLVjZM5BQhDk2QT1p"     } ,
        ]
    },
    {
        country: "Suecia",
        data: [      
            {        
                city: "Suecia General",        
                whatsappLink:"https://chat.whatsapp.com/EvbqYRhJdeUJkEfiWbs6n6"   
            } ,
            {        
                city: "Boras",        
                whatsappLink:"https://chat.whatsapp.com/EyyBaQ9tMGn5qBvqZ22u7D" 
            } ,
            {        
                city: "Estocolmo",        
                whatsappLink:"https://chat.whatsapp.com/B9xARXtua0P3Uq7cmGlMz4"    
            } ,
            {        
                city: "Falun",        
                whatsappLink:"https://chat.whatsapp.com/BjcRTCOoi8A61717PmdcxP"    
            } ,
            {        
                city: "Gavle",        
                whatsappLink:"https://chat.whatsapp.com/KBWE8O0SSjK8MxsnIkIifb"  
            } ,
            {        
                city: "Gothenburg",        
                whatsappLink:"https://chat.whatsapp.com/E7njZMxM7ZRGgEazctS87F"   
            } ,
            {        
                city: "Halmstad",        
                whatsappLink:"https://chat.whatsapp.com/IEX6hiAeSUcFtTq0ucJ51q" 
            },
            {        
                city: "Jonkoping",        
                whatsappLink:"https://chat.whatsapp.com/C6YLl5ry6KA4qcYqnhaVhh"      
            },
            {        
                city: "Kristianstad",        
                whatsappLink:"https://chat.whatsapp.com/L9X5qcxUP0eJPOEgZNa1ZJ"     
            },
            {        
                city: "Karlskrona",        
                whatsappLink:"https://chat.whatsapp.com/LR8OlE37gPmApMScRs3bWX"    
            },
            {        
                city: "Linköping ",        
                whatsappLink:"https://chat.whatsapp.com/C7AuuU4gC0IGuqsayO26By"      
            },
            {        
                city: "Lulea",        
                whatsappLink:"https://chat.whatsapp.com/B8zrX9Erd5N7lY5wT3Hzn4"    
            } ,
            {        
                city: "Malmö",        
                whatsappLink:"https://chat.whatsapp.com/GGaBYLApypp20UFfk5NodJ"     
            },
            {        
                city: "Orebro",        
                whatsappLink:"https://chat.whatsapp.com/C7HfxUEl0ckK3QtIen1sOf"   
            } ,
            {        
                city: "Skovde",        
                whatsappLink:"https://chat.whatsapp.com/JICxhuafLb20tsLwbovluj"  
            } ,
            {        
                city: "Trollhattan",        
                whatsappLink:"https://chat.whatsapp.com/F2dikWUcIQ13zRUrqUIFsM" 
            } ,
            {        
                city: "Umea",        
                whatsappLink:"https://chat.whatsapp.com/Fj29qFiJTXZ0ylEnGeMwXw"    
            } ,
            {        
                city: "Uppsala",        
                whatsappLink:"https://chat.whatsapp.com/FbR4RsbsXQQC0oguFUFA3o"   
            } ,
            {        
                city: "Vasteras",        
                whatsappLink:"https://chat.whatsapp.com/DmYKrOl1RWwHPwnilJWnUx" 
            } ,
            {        
                city: "Vaxjo",        
                whatsappLink:"https://chat.whatsapp.com/IH8gilq2R8n86nPkuyEsyb"
            } ,

        ]
    },
    {
        country: "Suiza",
        data: [      
            {        
                city: "Basilea",        
                whatsappLink: "https://t.co/vZuMvKJfDg"      
            } ,
            {        
                city: "Bern",        
                whatsappLink: "https://t.co/txZjsr4viu"      
            } ,
            {        
                city: "Geneva",        
                whatsappLink: "https://t.co/BhOhZTLkg9"      
            } ,
            {        
                city: "Lausanne",        
                whatsappLink: "https://t.co/LJxCCiUzuj"      
            },
            {        
                city: "Zürich",        
                whatsappLink: "https://t.co/nLKLsROtrc"      
            } 
        ]
    },
    {
        country: "Turquia",
        data: [      
            {        
                city: "Turquía General",        
                whatsappLink:"https://chat.whatsapp.com/Ftg1GqcMSzx3lOWdegPxGh"            } ,
            {        
                city: "Ankara",        
                whatsappLink:"https://chat.whatsapp.com/FQGacOtboKq9C0sWfKGla8"            } ,
            {        
                city: "Esmirna",        
                whatsappLink:"https://chat.whatsapp.com/LgXn57yPNpS4JgxKFQk6mN"            } ,
            {        
                city: "Estambul",        
                whatsappLink:"https://chat.whatsapp.com/CyD9nZGB3uk5ReX2s0fiFq"            } ,
            {        
                city: "Sakarya",        
                whatsappLink:"https://chat.whatsapp.com/F1GTIiC9ZDI9hD9kqui6wA"            }
        ]
    },
    
    
    
];