angular.module('myApp', [])
    .controller("hangmanController", ["$scope", function hangmanController($scope) {
        function wordlist() {
            return {
                "Schindler's List": "A 1993, Biography, Drama, History hollywood film",
                "The Godfather: Part II": "A 1974, Crime, Drama hollywood film",
                "The Godfather": "A 1972, Crime, Drama hollywood film",
                "The King's Speech": "A 2010, Biography, Drama, History hollywood film",
                "Forrest Gump": "A 1994, Drama, Romance hollywood film",
                "The Matrix": "A 1999, Action, Sci-Fi hollywood film",
                "Inception": "A 2010, Action, Adventure, Sci-Fi, Thriller hollywood film",
                "Catch Me If You Can": "A 2002, Biography, Crime, Drama hollywood film",
                "The Dark Knight": "A 2008, Action, Crime, Drama, Thriller hollywood film",
                "The Lord of the Rings: The Return of the King": "A 2003, Adventure, Drama, Fantasy hollywood film",
                "The Lord of the Rings: The Fellowship of the Ring": "A 2001, Adventure, Drama, Fantasy hollywood film",
                "The Dark Knight Rises": "A 2012, Action, Thriller hollywood film",
                "Gladiator": "A 2000, Action, Adventure, Drama hollywood film",
                "Good Will Hunting": "A 1997, Drama, Romance hollywood film",
                "A Beautiful Mind": "A 2001, Biography, Drama hollywood film",
                "Fight Club": "A 1999, Drama hollywood film",
                "The Da Vinci Code": "A 2006, Mystery, Thriller hollywood film",
                "Angels & Demons": "A 2009, Mystery, Thriller hollywood film",
                "National Treasure": "A 2004, Action, Adventure, Mystery, Thriller hollywood film",
                "One Flew Over the Cuckoo's Nest": "A 1975, Drama hollywood film",
                "Cast Away": "A 2000, Adventure, Drama, Romance hollywood film",
                "12 Angry Men": "A 1957, Drama hollywood film",
                "The Aviator": "A 2004, Biography, Drama hollywood film",
                "Rain Man": "A 1988, Drama hollywood film",
                "Pulp Fiction": "A 1994, Crime, Drama hollywood film",
                "Back to the Future": "A 1985, Adventure, Comedy, Sci-Fi hollywood film",
                "Serpico": "A 1973, Biography, Crime, Drama, Thriller hollywood film",
                "The Others": "A 2001, Horror, Mystery, Thriller hollywood film",
                "Eternal Sunshine of the Spotless Mind": "A 2004, Drama, Romance, Sci-Fi hollywood film",
                "WALL�E": "A 2008, Animation, Adventure, Family, Sci-Fi hollywood film",
                "Il buono, il brutto, il cattivo": "A 1966, Western hollywood film",
                "Memento": "A 2000, Mystery, Thriller hollywood film",
                "The Silence of the Lambs": "A 1991, Crime, Drama, Thriller hollywood film",
                "Terminator 2: Judgment Day": "A 1991, Action, Sci-Fi hollywood film",
                "The Terminator": "A 1984, Action, Sci-Fi hollywood film",
                "Scarface": "A 1983, Crime, Drama hollywood film",
                "The Hurt Locker": "A 2008, Drama, Thriller, War hollywood film",
                "The Terminal": "A 2004, Comedy, Drama, Romance hollywood film",
                "The Social Network": "A 2010, Biography, Drama hollywood film",
                "Titanic": "A 1997, Drama, Romance hollywood film",
                "The Notebook": "A 2004, Drama, Romance hollywood film",
                "La vita � bella": "A 1997, Comedy, Drama, Romance, War hollywood film",
                "Constantine": "A 2005, Action, Fantasy, Horror, Mystery hollywood film",
                "Se7en": "A 1995, Crime, Drama, Mystery, Thriller hollywood film",
                "Requiem for a Dream": "A 2000, Drama hollywood film",
                "A Walk to Remember": "A 2002, Drama, Romance hollywood film",
                "The Departed": "A 2006, Crime, Drama, Thriller hollywood film",
                "The Bourne Identity": "A 2002, Action, Mystery, Thriller hollywood film",
                "The Bourne Supremacy": "A 2004, Action, Mystery, Thriller hollywood film",
                "The Bourne Ultimatum": "A 2007, Action, Mystery, Thriller hollywood film",
                "Serendipity": "A 2001, Comedy, Romance hollywood film",
                "Toy Story 3": "A 2010, Animation, Adventure, Comedy, Family, Fantasy hollywood film",
                "Toy Story": "A 1995, Animation, Adventure, Comedy, Family, Fantasy hollywood film",
                "Toy Story 2": "A 1999, Animation, Adventure, Comedy, Family, Fantasy hollywood film",
                "X-Men": "A 2000, Action, Adventure, Sci-Fi hollywood film",
                "The Butterfly Effect": "A 2004, Drama, Sci-Fi, Thriller hollywood film",
                "Lagaan: Once Upon a Time in India": "A 2001, Adventure, Drama, Musical, Sport bollywood film",
                "Anand": "A 1971, Drama bollywood film",
                "3 Idiots": "A 2009, Comedy, Drama bollywood film",
                "Rang De Basanti": "A 2006, Comedy, Drama bollywood film",
                "Gangs of Wasseypur": "A 2012, Action, Comedy, Crime, Drama, Thriller bollywood film",
                "Swades: We, the People": "A 2004, Drama bollywood film",
                "Mughal-E-Azam": "A 1960, Drama, Romance, War bollywood film",
                "Taare Zameen Par": "A 2007, Drama, Family bollywood film",
                "A Wednesday": "A 2008, Crime, Drama, Mystery, Thriller bollywood film",
                "Dangal": "A 2016, Action, Biography, Drama, Sport bollywood film",
                "Zindagi Na Milegi Dobara": "A 2011, Comedy, Drama bollywood film",
                "Udaan": "A 2010, Drama bollywood film",
                "Special Chabbis": "A 2013, Crime, Drama, Thriller bollywood film",
                "Pyaasa": "A 1957, Drama, Musical, Romance bollywood film",
                "Black Friday": "A 2004, Action, Crime, Drama, History bollywood film",
                "Bhaag Milkha Bhaag": "A 2013, Biography, Drama, Sport bollywood film",
                "Haider": "A 2014, Action, Crime, Drama, Thriller bollywood film",
                "Shahid": "A 2012, Biography, Crime, Drama bollywood film",
                "Paan Singh Tomar": "A 2012, Action, Biography, Crime, Sport, Thriller bollywood film",
                "Dil Chahta Hai": "A 2001, Comedy, Drama, Romance bollywood film",
                "Queen": "A 2013, Comedy, Drama bollywood film",
                "Drishyam": "A 2015, Crime, Drama, Mystery, Thriller bollywood film",
                "Barfi!": "A 2012, Comedy, Drama, Romance bollywood film",
                "Guru": "A 2007, Biography, Drama bollywood film",
                "Shatranj Ke Khilari": "A 1977, Comedy, Drama, History bollywood film",
                "Baby": "A 2015, Action, Thriller bollywood film",
                "Sparsh": "A 1980, Drama, Romance bollywood film",
                "Chak De! India": "A 2007, Drama, Family, Sport bollywood film",
                "Sarfarosh": "A 1999, Action, Adventure, Drama bollywood film",
                "My Name Is Khan": "A 2010, Drama bollywood film",
                "PK": "A 2014, Comedy, Drama, Fantasy bollywood film",
                "The Legend of Bhagat Singh": "A 2002, Action, Biography, Drama, History bollywood film",
                "Ek Doctor Ki Maut": "A 1990, Drama bollywood film",
                "Kahaani": "A 2012, Mystery, Thriller bollywood film",
                "Salaam Bombay!": "A 1988, Crime, Drama bollywood film",
                "Black": "A 2005, Drama bollywood film",
                "Ek Ruka Hua Faisla": "A 1986, Drama bollywood film",
                "Omkara": "A 2006, Action, Crime, Drama, Thriller bollywood film",
                "Manorama Six Feet Under": "A 2007, Crime, Drama, Mystery, Thriller bollywood film",
                "Bajrangi Bhaijaan": "A 2015, Action, Comedy, Drama bollywood film",
                "Gol Maal": "A 1979, Comedy, Romance bollywood film",
                "Munna Bhai M.B.B.S.": "A 2003, Comedy, Drama, Musical bollywood film",
                "Guide": "A 1965, Drama, Musical, Romance bollywood film",
                "Dev.D": "A 2009, Comedy, Drama, Romance bollywood film",
                "Vaastav: The Reality": "A 1999, Action, Crime, Drama bollywood film",
                "Mother India": "A 1957, Drama, Musical, Family bollywood film",
                "Khuda Kay Liye": "A 2007, Drama bollywood film",
                "Water": "A 2005, Drama, Romance bollywood film",
                "Kaagaz Ke Phool": "A 1959, Musical, Romance bollywood film",
                "Hera Pheri": "A 2000, Action, Comedy, Crime, Drama bollywood film",
                "Company": "A 2002, Action, Crime, Drama, Thriller bollywood film",
                "Chupke Chupke": "A 1975, Comedy, Drama, Romance bollywood film",
                "Roja": "A 1992, Drama, Romance, Thriller bollywood film",
                "Jaane Bhi Do Yaaro": "A 1983, Comedy, Drama bollywood film",
                "Johnny Gaddaar": "A 2007, Crime, Drama, Mystery, Thriller bollywood film",
                "Do Bigha Zamin": "A 1953, Drama bollywood film",
                "Jab We Met": "A 2007, Comedy, Drama, Romance bollywood film",
                "Awaara": "A 1951, Drama, Musical, Romance bollywood film",
                "Airlift": "A 2016, Drama, History bollywood film",
                "Jo Jeeta Wohi Sikandar": "A 1992, Comedy, Drama, Romance, Sport bollywood film",
                "Mumbai Meri Jaan": "A 2008, Drama bollywood film",
                "Oye Lucky! Lucky Oye!": "A 2008, Comedy, Crime, Drama bollywood film",
                "Manjhi: The Mountain Man": "A 2015, Adventure, Biography, Drama bollywood film",
                "Kal Ho Naa Ho": "A 2003, Comedy, Drama, Romance bollywood film",
                "Koshish": "A 1972, Drama bollywood film",
                "Chhoti Si Baat": "A 1976, Comedy, Romance bollywood film",
                "Rock On!!": "A 2008, Drama, Music bollywood film",
                "Bombay": "A 1995, Drama, Musical, Romance bollywood film",
                "Dilwale Dulhania Le Jayenge": "A 1995, Drama, Romance bollywood film",
                "Parinda": "A 1989, Action, Crime, Drama, Romance bollywood film",
                "Saaransh": "A 1984, Drama bollywood film",
                "Bajirao Mastani": "A 2015, Action, Drama, History, Romance, War bollywood film",
                "Satya": "A 1998, Action, Crime, Drama, Thriller bollywood film",
                "Do Ankhen Barah Haath": "A 1957, Comedy, Crime, Drama, Thriller bollywood film",
                "Dil Se..": "A 1998, Drama, Romance bollywood film",
                "Don": "A 1978, Action, Crime, Thriller bollywood film",
                "Vicky Donor": "A 2012, Comedy, Romance bollywood film",
                "Mera Naam Joker": "A 1970, Comedy, Drama bollywood film",
                "Masoom": "A 1996, Action bollywood film",
                "Pink": "A 2016, Drama, Thriller bollywood film",
                "Lootera": "A 2013, Drama, Romance bollywood film",
                "Ankur": "A 1974, Drama bollywood film",
                "Neerja": "A 2016, Biography, Drama, Thriller bollywood film",
                "Maqbool": "A 2003, Crime, Drama, Thriller bollywood film",
                "Garm Hava": "A 1974, Drama bollywood film",
                "Dabba": "A 2013, Drama, Romance bollywood film",
                "Dear Zindagi": "A 2016, Drama, Romance bollywood film",
                "Deewaar": "A 1975, Action, Crime, Drama, Thriller bollywood film",
                "Veer-Zaara": "A 2004, Drama, Family, Musical, Romance bollywood film",
                "Udta Punjab": "A 2016, Action, Crime, Drama bollywood film",
                "Nil Battey Sannata": "A 2015, Drama, Family bollywood film",
                "Lage Raho Munna Bhai": "A 2006, Comedy, Drama, Romance bollywood film",
                "Talvar": "A 2015, Crime, Drama, Mystery, Thriller bollywood film",
                "Padman": "A 2018, Comedy, Drama bollywood film",
                "Madaari": "A 2016, Adventure, Drama, Thriller bollywood film",
                "Andaz Apna Apna": "A 1994, Comedy, Family, Romance bollywood film",
                "Gangaajal": "A 2003, Action, Crime, Drama bollywood film",
                "Jaane Tu... Ya Jaane Na": "A 2008, Comedy, Drama, Romance bollywood film",
                "I Am Kalam": "A 2010, Comedy, Drama bollywood film",
                "M.S. Dhoni: The Untold Story": "A 2016, Biography, Drama, Sport bollywood film",
                "Dil Hai Tumhaara": "A 2002, Drama, Romance bollywood film",
                "Dushman": "A 1998, Crime, Drama, Thriller bollywood film",
                "Taal": "A 1999, Musical, Romance bollywood film",
                "Kya Kehna": "A 2000, Drama, Romance bollywood film",
                "Aashiqui": "A 1990, Musical, Drama, Romance bollywood film",
                "Aashiqui 2": "A 2013, Drama, Music, Musical, Romance bollywood film",
                "Rockstar": "A 2011, Drama, Music, Musical, Romance bollywood film",
                "Yes Boss": "A 1997, Comedy, Drama, Musical, Romance bollywood film",
                "Kabhi Haan Kabhi Naa": "A 1994, Comedy, Drama, Music, Musical bollywood film",
                "Baazigar": "A 1993, Crime, Drama, Musical, Romance, Thriller bollywood film",
                "Shreemaan Aashique": "A 1993, Comedy bollywood film",
                "Chamatkar": "A 1992, Comedy, Drama, Fantasy bollywood film",
                "Chori Chori Chupke Chupke": "A 2001, Drama, Musical, Romance bollywood film",
                "Tere Naam": "A 2003, Action, Drama, Romance bollywood film",
                "Chalte Chalte": "A 2003, Drama, Romance bollywood film",
                "Rehnaa Hai Terre Dil Mein": "A 2001, Musical, Romance bollywood film",
                "Pyaar To Hona Hi Tha": "A 1998, Comedy, Drama, Romance bollywood film",
                "Pyaar Kiya To Darna Kya": "A 1998, Action, Comedy, Drama, Romance bollywood film",
                "Gupt: The Hidden Truth": "A 1997, Action, Crime, Drama, Musical, Thriller bollywood film",
                "Pukar": "A 2000, Action, Drama, Romance, Thriller bollywood film",
                "Barsaat": "A 1995, Action, Romance bollywood film",
                "Kareeb": "A 1998, Drama, Romance bollywood film",
                "Dilwale": "A 1994, Action, Drama, Romance bollywood film",
                "Kadhalar Dinam": "A 1999, Drama, Musical, Romance bollywood film",
                "Love": "A 1991, Drama, Musical, Romance bollywood film",
                "Dil Hai Ki Manta Nahin": "A 1991, Adventure, Comedy, Drama, Musical, Romance bollywood film",
                "Hum Hain Rahi Pyar Ke": "A 1993, Drama, Family, Comedy, Romance bollywood film",
                "Saajan": "A 1991, Drama, Musical, Romance bollywood film",
                "Maine Pyar Kiya": "A 1989, Drama, Family, Musical, Romance bollywood film",
                "Sirf Tum": "A 1999, Romance, Drama bollywood film",
                "Kaho Naa... Pyaar Hai": "A 2000, Action, Romance bollywood film",
                "Yaad Rakhegi Duniya": "A 1992, Comedy, Romance bollywood film",
                "Dil Ka Kya Kasoor": "A 1992, Musical, Romance bollywood film",
                "Deewana": "A 1992, Action, Comedy, Crime, Musical, Romance bollywood film",
                "Rang": "A 1993, Drama, Romance bollywood film",
                "Jaan Se Pyaara": "A 1992, Action, Crime, Drama bollywood film",
                "Jab Pyaar Kisise Hota Hai": "A 1998, Comedy, Drama, Romance bollywood film",
                "Phool Aur Kaante": "A 1991, Action, Crime, Drama, Romance bollywood film",
                "Sir": "A 1993, Crime, Drama bollywood film",
                "Beta": "A 1992, Drama, Romance bollywood film",
                "1942: A Love Story": "A 1994, Romance, Action, Drama, Musical bollywood film",
                "Saathi": "A 1991, Action, Romance bollywood film",
                "Doli Saja Ke Rakhna": "A 1998, Drama, Romance bollywood film",
                "Jaanam Samjha Karo": "A 1999, Drama, Romance bollywood film",
                "Mujhe Kucch Kehna Hai": "A 2001, Drama, Romance bollywood film",
                "Jaan-E-Mann: Let's Fall in Love... Again": "A 2006, Drama, Musical, Romance bollywood film",
                "Noorie": "A 1979, Drama, Family, Romance bollywood film",
                "Janbaaz": "A 1986, Action, Drama bollywood film",
                "Gangster": "A 2006, Action, Crime, Drama, Romance, Thriller bollywood film",
                "Maachis": "A 1996, Action, Crime, Drama, History, Thriller bollywood film",
                "Tum Bin...: Love Will Find a Way": "A 2001, Drama, Romance bollywood film",
                "Yeh Dillagi": "A 1994, Comedy, Drama, Musical, Romance bollywood film",
                "Pyaar Koi Khel Nahin": "A 1999, Drama, Romance, Thriller bollywood film",
                "Aradhana": "A 1969, Drama, Musical, Romance bollywood film",
                "Prince": "A 2010, Action, Thriller bollywood film",
                "Masti": "A 2004, Comedy, Crime, Mystery, Thriller bollywood film",
                "Jhankaar Beats": "A 2003, Comedy, Music bollywood film",
                "Saathiya": "A 2002, Drama, Family, Romance bollywood film",
                "Krishna": "A 1996, Action, Drama, Romance, Thriller bollywood film",
                "Ananda Ashram": "A 1977, Drama, Family bollywood film",
                "...Aur Pyaar Ho Gaya": "A 1997, Comedy, Drama, Musical, Romance bollywood film",
                "Raampur Ka Lakshman": "A 1972, Drama, Family bollywood film",
                "Mere Jeevan Saathi": "A 1972, Drama, Adventure, Action, Romance, Musical bollywood film",
                "Yaara Dildara": "A 1991, Romance, Drama, Family bollywood film",
                "Takkar": "A 1995, Action, Crime, Drama, Romance, Thriller bollywood film",
                "Sabse Bada Khiladi": "A 1995, Action, Crime, Drama, Thriller bollywood film",
                "Kalaakaar": "A 1983, Family, Romance bollywood film",
                "Yeh Vaada Raha": "A 1982, Romance, Musical, Drama bollywood film",
                "Jeeva": "A 1986, Action, Drama, Music, Romance, Thriller bollywood film",
                "Sadma": "A 1983, Romance bollywood film",
                "Shakti": "A 1982, Action, Crime, Drama bollywood film",
                "Arjun": "A 1985, Action, Crime, Drama bollywood film",
                "Major Saab": "A 1998, Action, Drama, Romance bollywood film",
                "Phir Teri Kahani Yaad Aayee": "A 1993, Romance, Drama bollywood film",
                "Vijaypath": "A 1994, Action, Drama bollywood film",
                "Khuddar": "A 1994, Action, Musical, Drama bollywood film",
                "Aao Pyaar Karen": "A 1994, Romance bollywood film",
                "Salaami": "A 1994, Adventure bollywood film",
                "Hero Hindustani": "A 1998, Action, Comedy, Drama bollywood film",
                "Dil Kya Kare": "A 1999, Drama, Musical, Romance bollywood film",
                "Tarkieb": "A 2000, Mystery, Thriller bollywood film",
                "Saath Saath": "A 1982, Drama bollywood film",
                "Soldier": "A 1998, Action, Drama, Sci-Fi bollywood film",
                "Naajayaz": "A 1995, Action, Drama bollywood film",
                "Thakshak": "A 1999, Crime, Drama, Action, Thriller bollywood film",
                "Kuch Naa Kaho": "A 2003, Drama, Romance bollywood film",
                "Rishtey": "A 2002, Action, Drama bollywood film",
                "Sur: The Melody of Life": "A 2002, Drama, Musical, Romance bollywood film",
                "Humraaz": "A 2002, Action, Musical, Romance, Thriller bollywood film",
                "Devdas": "A 2002, Drama, Musical, Romance bollywood film",
                "Raaz": "A 2002, Drama, Horror, Musical, Mystery, Romance, Thriller bollywood film",
                "Khosla Ka Ghosla!": "A 2006, Comedy, Crime, Drama bollywood film",
                "Kabhi Khushi Kabhie Gham...": "A 2001, Drama, Musical, Romance bollywood film",
                "Fiza": "A 2000, Action, Crime, Drama, Romance bollywood film",
                "Mohabbatein": "A 2000, Musical, Drama, Romance bollywood film",
                "Josh": "A 2000, Action, Drama, Musical, Romance bollywood film",
                "Dhadkan": "A 2000, Drama, Romance bollywood film",
                "Aaj Ka Arjun": "A 1990, Action, Crime, Drama bollywood film",
                "Sanjog": "A 1985, Drama bollywood film",
                "Sapne Saajan Ke": "A 1992, Drama, Romance bollywood film",
                "Vijeta": "A 1996, Action bollywood film",
                "Anari": "A 1993, Comedy, Drama, Romance bollywood film",
                "Raja Hindustani": "A 1996, Action, Comedy, Drama, Musical, Romance bollywood film",
                "Kahin Pyaar Na Ho Jaaye": "A 2000, Comedy, Romance bollywood film",
                "Tum Mile": "A 2009, Drama, Romance bollywood film",
                "Raaz 3: The Third Dimension": "A 2012, Horror, Mystery, Romance, Thriller bollywood film",
                "Raaz: The Mystery Continues": "A 2009, Horror, Mystery, Romance, Thriller bollywood film",
                "Kal Ki Awaz": "A 1992, Action bollywood film",
                "Love Love Love": "A 1989, Drama, Romance bollywood film",
                "...Yahaan": "A 2005, Drama, Romance, War bollywood film",
                "Black Mail": "A 1973, Drama, Musical, Romance, Thriller bollywood film",
                "Suhaag": "A 1994, Action, Comedy, Drama, Romance bollywood film",
                "Aunty No. 1": "A 1998, Comedy, Drama, Romance bollywood film",
                "Coolie No. 1": "A 1995, Comedy bollywood film",
                "Hero No. 1": "A 1997, Comedy, Musical, Drama bollywood film",
                "Raja Babu": "A 1994, Comedy, Drama bollywood film",
                "Shola Aur Shabnam": "A 1992, Action, Comedy, Romance bollywood film",
                "Mohra": "A 1994, Action, Drama, Thriller bollywood film",
                "Badhaai Ho Badhaai": "A 2002, Comedy, Drama, Musical bollywood film",
                "Anurodh": "A 1977, Drama, Family bollywood film",
                "Aa Ab Laut Chalen": "A 1999, Musical, Romance, Drama bollywood film",
                "Ghar Ghar Ki Kahani": "A 1970, Drama, Family bollywood film",
                "Kitne Door... Kitne Paas": "A 2002, Comedy, Romance bollywood film",
                "Julie": "A 1975, Family, Musical, Romance, Drama bollywood film",
                "Lakeer - Forbidden Lines": "A 2004, Action, Drama, Romance, Thriller bollywood film",
                "No Smoking": "A 2007, Drama, Mystery, Thriller bollywood film",
                "Karam": "A 2005, Action, Thriller bollywood film",
                "Darr": "A 1993, Drama, Romance, Thriller bollywood film",
                "Daraar": "A 1996, Action, Drama, Romance, Thriller bollywood film",
                "Ek Ajnabee": "A 2005, Action, Crime, Drama, Thriller bollywood film",
                "Naqaab": "A 2007, Crime, Drama, Romance, Thriller bollywood film",
                "Kaante": "A 2002, Action, Crime, Drama, Thriller bollywood film",
                "Shabd": "A 2005, Drama bollywood film",
                "Vaada": "A 2005, Crime, Drama, Mystery, Thriller bollywood film",
                "Zinda": "A 2006, Action, Drama, Mystery, Thriller bollywood film",
                "Saawariya": "A 2007, Drama, Musical, Romance bollywood film",
                "Om Shanti Om": "A 2007, Action, Comedy, Drama, Musical, Romance, Thriller bollywood film",
                "Kabhi Alvida Naa Kehna": "A 2006, Drama, Romance bollywood film",
                "Taxi No. 9 2 11: Nau Do Gyarah": "A 2006, Comedy, Drama, Thriller bollywood film",
                "Pyaar Karke Dekho": "A 1987, Drama, Family bollywood film",
                "Ajnabee": "A 2001, Action, Crime, Drama, Mystery, Thriller bollywood film",
                "The Gentleman": "A 1994, Action, Drama bollywood film",
                "Khauff": "A 2000, Action, Drama, Thriller bollywood film",
                "Plan": "A 2004, Action, Crime, Thriller bollywood film",
                "Rakht": "A 2004, Horror, Thriller bollywood film",
                "Musafir": "A 2004, Action, Crime, Drama, Thriller bollywood film",
                "Indian": "A 1996, Action, Drama, Thriller bollywood film",
                "Khakee": "A 2004, Action, Crime, Drama, Thriller bollywood film",
                "Kyun! Ho Gaya Na...": "A 2004, Comedy, Drama, Romance bollywood film",
                "Humko Deewana Kar Gaye": "A 2006, Drama, Romance bollywood film",
                "Yuva": "A 2004, Action, Drama, Thriller bollywood film",
                "Adharm": "A 1992, Action, Crime, Drama bollywood film",
                "Yalgaar": "A 1992, Action, Drama, Thriller bollywood film",
                "8 x 10 Tasveer": "A 2009, Crime, Drama, Fantasy, Mystery, Thriller bollywood film",
                "Aan: Men at Work": "A 2004, Action, Crime, Drama, Thriller bollywood film",
                "Aashiq Banaya Aapne: Love Takes Over": "A 2005, Drama, Romance, Thriller bollywood film",
                "Ae Dil Hai Mushkil": "A 2016, Drama, Music, Musical, Romance bollywood film",
                "Aggar: Passion Betrayal Terror": "A 2007, Romance, Thriller bollywood film",
                "Aksar": "A 2006, Romance, Thriller bollywood film",
                "Bang Bang": "A 2014, Action, Adventure, Comedy, Thriller bollywood film",
                "Bewafaa": "A 2005, Drama, Romance bollywood film",
                "Bichhoo": "A 2000, Thriller, Action, Crime, Drama bollywood film",
                "Chameli": "A 2003, Drama bollywood film",
                "Fareb": "A 1996, Action, Crime, Drama, Thriller bollywood film",
                "Dil Diya Hai": "A 2006, Drama, Romance, Thriller bollywood film",
                "Dil To Pagal Hai": "A 1997, Comedy, Drama, Musical, Romance bollywood film",
                "Aadmi": "A 1993, Action, Crime, Drama, Romance bollywood film",
                "Cheetah": "A 1994, Action, Drama bollywood film",
                "Duplicate": "A 1998, Action, Comedy, Crime, Thriller bollywood film",
                "Ek Chalis Ki Last Local": "A 2007, Adventure, Comedy, Crime, Drama bollywood film",
                "Family: Ties of Blood": "A 2006, Action, Crime, Drama, Thriller bollywood film",
                "Fight Club: Members Only": "A 2006, Action, Crime bollywood film",
                "Ghajini": "A 2008, Action, Drama, Mystery, Thriller bollywood film",
                "Dhan Dhana Dhan Goal": "A 2007, Drama, Sport bollywood film",
                "Hameshaa": "A 1997, Drama bollywood film",
                "Hello": "A 2008, Drama, Romance bollywood film",
                "Heartless": "A 2014, Drama, Family, Romance, Thriller bollywood film",
                "Indian Babu": "A 2003, Drama, Romance bollywood film",
                "Jab Tak Hai Jaan": "A 2012, Drama, Romance bollywood film",
                "Jackpot": "A 2013, Comedy, Thriller bollywood film",
                "Jannat: In Search of Heaven...": "A 2008, Crime, Drama, Romance bollywood film",
                "Jeans": "A 1998, Comedy, Drama, Romance, Musical bollywood film",
                "Judwaa 2": "A 2017, Action, Comedy bollywood film",
                "Kucch To Hai": "A 2003, Drama, Horror, Mystery, Romance, Thriller bollywood film",
                "Kyon Ki...": "A 2005, Drama, Romance bollywood film",
                "Luck": "A 2009, Action, Adventure, Drama, Thriller bollywood film",
                "Maine Dil Tujhko Diya": "A 2002, Action, Romance bollywood film",
                "Marigold": "A 2007, Comedy bollywood film",
                "Tumko Na Bhool Paayenge": "A 2002, Action, Drama, Mystery, Thriller bollywood film",
                "Yeh Hai Jalwa": "A 2002, Comedy, Drama, Romance bollywood film",
                "Murder": "A 2004, Drama, Thriller bollywood film",
                "Murder 2": "A 2011, Action, Crime, Drama, Horror, Thriller bollywood film",
                "Haal-e-Dil": "A 2008, Drama, Romance bollywood film",
                "Rocky": "A 2006, Action, Drama, Romance, Thriller bollywood film",
                "Dum": "A 2003, Action, Crime, Drama, Thriller bollywood film",
                "Sangharsh": "A 1999, Action, Drama, Thriller bollywood film",
                "Shikari": "A 2000, Drama, Thriller bollywood film",
                "Tashan": "A 2008, Action, Drama, Romance bollywood film",
                "Yaadein...": "A 2001, Musical, Drama, Romance bollywood film",
                "Yeh Dil Aashiqanaa": "A 2002, Action, Romance bollywood film",
                "Zeher": "A 2005, Crime, Drama, Mystery, Thriller bollywood film"
            }
        }

        $(document).ready(function () {
            $('.modal').modal();
        });
        const words = Object.entries(wordlist());
        // global variables
        $scope.alphabet1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        $scope.alphabet2 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
        $scope.alphabet3 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
        $scope.alphabet4 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
        $scope.gameWord = [];
        let keys = [];
        let chances;
        const CHANCES = 6;
        $scope.score = undefined;
        let c;
        let ctx;

        // init hangman
        function hangman() {
            c = document.getElementById("myCanvas");
            ctx = c.getContext("2d");
            // Set canvas dimensions
            c.width = window.innerWidth;
            c.height = window.innerHeight;
            ctx.scale(0.4, 0.4);
            ctx.lineWidth = 5;
        }
        hangman();

        // new word settings
        function newWord() {
            console.log('now here');
            initHangman();
            console.log(words)
            let wordObj = words[Math.floor(Math.random() * words.length)];
            let word = wordObj[0];
            $scope.wordHint = wordObj[1];
            chances = CHANCES;
            let wordArray = word.toUpperCase().replace(/\s/g, "  ").split("");
            $scope.gameWord = [];
            wordArray.forEach((letter) => {
                if (/\w/.test(letter)) {
                    $scope.gameWord.push({
                        lett: letter,
                        shown: false
                    })
                } else {
                    $scope.gameWord.push({
                        lett: letter,
                        shown: true
                    })
                }
            });
            keys.forEach((key) => {
                $('#' + key).removeClass('animated fade');
                $('#' + key).prop('disabled', false);
            })
            keys = [];
            $('.wordArea').fadeIn('slow');
            openSome();
            $scope.$apply();
        }

        function openSome() {
            const howManyToOpen = Math.floor(Math.sqrt($scope.gameWord.length)) - 1;
            for (let i = 1; i <= howManyToOpen; i++) {
                revealLetter();
            }
        }

        function revealLetter() {
            const hiddenIndices = $scope.gameWord.map((letter, index) => {
                if (!letter.shown) {
                    return index;
                }
            }).filter(index => index !== undefined);
            const randomIndex = hiddenIndices[Math.floor(Math.random() * hiddenIndices.length)];
            $scope.gameWord[randomIndex].shown = true;
        }

        //begin game here
        $scope.play = () => {
            $scope.inGame = true;
            $scope.score = 0;
            $scope.hints = 0;
            newWord();
        }

        // selecting a key
        $scope.select = (key) => {
            console.log(key, "selected");
            $('#' + key).prop('disabled', true);
            $('#' + key).addClass('animated fade');
            keys.push(key)
            let found = false;
            $scope.gameWord.forEach((letter) => {
                if (!letter.shown) {
                    if (letter.lett === key) {
                        found = true;
                        letter.shown = true;
                    }
                }
            });
            if (!found) {
                chances--;
                DrawHangMan();
            }
            checkForWin();
            $scope.$apply();
        }

        // Draw the hangman
        function DrawHangMan() {
            $scope.hangman = true;
            $scope.$apply();
            switch (chances) {
                case 5: {
                    ctx.beginPath();
                    ctx.arc(350, 180, 60, 0, 2 * Math.PI);
                    ctx.stroke();
                    break;
                }
                case 4: {
                    ctx.moveTo(350, 240);
                    ctx.lineTo(350, 480);
                    ctx.stroke();
                    break;
                }
                case 3: {
                    ctx.moveTo(350, 270);
                    ctx.lineTo(280, 350);
                    ctx.stroke();
                    break;
                }
                case 2: {
                    ctx.moveTo(350, 270);
                    ctx.lineTo(420, 350);
                    ctx.stroke();
                    break;
                }
                case 1: {
                    ctx.moveTo(350, 480);
                    ctx.lineTo(280, 560);
                    ctx.stroke();
                    break;
                }
                case 0: {
                    ctx.moveTo(350, 480);
                    ctx.lineTo(420, 560);
                    ctx.moveTo(330, 160);
                    ctx.arc(330, 160, 1, 2 * Math.PI, 0);
                    ctx.moveTo(370, 160);
                    ctx.arc(370, 160, 1, 2 * Math.PI, 0);
                    ctx.moveTo(340, 200);
                    ctx.arc(350, 200, 10, Math.PI, 0);
                    ctx.stroke();
                    break;
                }
            }

            setTimeout(() => {
                if (chances === 0) {
                    $scope.gameWord.forEach((letter) => {
                        letter.shown = true;
                    });
                    setTimeout(() => {
                        $scope.inGame = false;
                        $scope.score = undefined;
                        $scope.hints = undefined;
                        $scope.$apply();
                    }, 2000)
                }
                $scope.hangman = false;
                $scope.$apply();
            }, 2000)
        }

        //Draw initial hangman
        function initHangman() {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.beginPath();
            ctx.moveTo(500, 650);
            ctx.lineTo(50, 650);
            ctx.stroke();
            ctx.moveTo(100, 650);
            ctx.lineTo(100, 50);
            ctx.stroke();
            ctx.lineTo(500, 50);
            ctx.stroke();
            ctx.moveTo(250, 50);
            ctx.lineTo(100, 200);
            ctx.stroke();
            ctx.moveTo(350, 50);
            ctx.lineTo(350, 120);
            ctx.stroke();
        }

        function checkForWin() {
            const won = $scope.gameWord.every(letter => letter.shown);
            if (won) {
                $('.wordArea').fadeOut('slow', newWord)
                $scope.score += 1;
            }
        }

        $scope.takeHint = () => {
            $scope.hints--;
            revealLetter();
            checkForWin();
            $scope.$apply();
        };


        $scope.$watch('hints', function (newVal, oldVal) {
            if (newVal === 0) {
                $scope.showHint = false;
            } else {
                $scope.showHint = true;
            }
        });

        $scope.$watch('score', function (newVal, oldVal) {
            console.log()
            if (newVal % 3 === 0) {
                $scope.hints += 3;
            }
        });
    }]);
