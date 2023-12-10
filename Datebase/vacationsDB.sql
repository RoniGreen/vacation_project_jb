-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: vacationdatabase
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` longtext,
  `role` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'roni','greenberg','rl2309473@gmail.com','d36723f04c1361f074b6596bf9738c13fb6f12ef363f9b0ba16f62a07bc57b1b',1),(2,'Pat','Simmons','pat.simmons@example.com','d36723f04c1361f074b6596bf9738c13fb6f12ef363f9b0ba16f62a07bc57b1b',0),(3,'Brandon','Hughes','brandon.hughes@example.com','d36723f04c1361f074b6596bf9738c13fb6f12ef363f9b0ba16f62a07bc57b1b',0),(4,'Tim ','White','tim.white@example.com','d36723f04c1361f074b6596bf9738c13fb6f12ef363f9b0ba16f62a07bc57b1b',0),(5,'Jerry','Snyder','jerry.snyder@example.com','d36723f04c1361f074b6596bf9738c13fb6f12ef363f9b0ba16f62a07bc57b1b',0),(6,'Duane','Gardner','duane.gardner@example.com','d36723f04c1361f074b6596bf9738c13fb6f12ef363f9b0ba16f62a07bc57b1b',0),(7,'Kenzi','Horton','kenzi.horton@example.com','d36723f04c1361f074b6596bf9738c13fb6f12ef363f9b0ba16f62a07bc57b1b',0),(8,'Joy','Bowman','joy.bowman@example.com','d36723f04c1361f074b6596bf9738c13fb6f12ef363f9b0ba16f62a07bc57b1b',0),(9,'Warren','Gutierrez','warren.gutierrez@example.com','d36723f04c1361f074b6596bf9738c13fb6f12ef363f9b0ba16f62a07bc57b1b',0),(10,'Megan','Shelton','megan.shelton@example.com','d36723f04c1361f074b6596bf9738c13fb6f12ef363f9b0ba16f62a07bc57b1b',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vacationDestination` varchar(45) DEFAULT NULL,
  `vacationDescription` longtext,
  `checkIn` date DEFAULT NULL,
  `checkOut` date DEFAULT NULL,
  `price` int DEFAULT NULL,
  `image` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (1,'Abruzzo, Italy','Stretching from the heart of the Apennines to the Adriatic Sea on the peninsula\'s southeastern side, Abruzzo, Italy has long been one of the country\'s most overlooked destinations despite its unspoiled villages, picturesque Trabocchi Coast, and stunning natural escapes. Over the past few years, however, it has gone from a sleepy underdog to an ambitious harbinger of slow travel, sustainable gastronomy, and conscious hospitality. Villa Corallo, a 19th-century mansion near Civitella del Tronto was transformed into a five-star hotel in 2019. Dimore Montane, an eco-lodge opened in 2020 in Majella National Park, marries glamping with environmentally-friendly facilities with a zero waste policy. Meanwhile, restaurants like Bottega Culinaria in San Vito Chietino and Materia Prima in Castel di Sangro are redefining the region as one of Italy\'s most exciting food hotspots for their innovative and sustainable takes on local produce and traditional dishes (in case Niko Romito\'s three-Michelin-starred Reale wasn\'t enough). And completing construction this Spring is Via Verde dei Trabocchi: a cycling and pedestrian path along the Adriatic sea that\'s being built on a disused railway route. — Marianna Cerini','2023-09-01','2023-09-03',234,'Abruzzo.jpeg'),(2,'London','With many international borders closed over the last two years, many eager U.S. travelers\' eyes turned to Alaska. The vast state, famous for its towering, snow-capped peaks, pristine wilderness, massive national parks, and colorful locals, made for a dynamic destination with no passport required. But as borders reopen, interest in the 49th state is showing no signs of slowing down. Alaska\'s tourism board said early forecasts are projecting that more than 1.57 million cruise ship passengers could visit southeast Alaska in summer 2022. That\'s an 18% jump from 2019, the previous record year. Many perennial favorite cruise lines, like Holland America, will be returning to full strength after a non-existent 2020 and abbreviated 2021. Others, like Windstar Cruises, UnCruise, and Hurtigruten are rolling out fresh itineraries or are launching new ships. On dry land, Alaska is set to see myriad new offerings and events. In Juneau, the Sealaska Heritage Institute will open their Arts Campus (where visitors will be able to learn about Alaska Native art and culture) and will host Celebration, one of the largest gatherings of Indigenous peoples. In Anchorage, Fur Rendezvous, Alaska\'s oldest and largest winter festival, will be back from Feb. 25 to March 6 (which also happens to be peak aurora season). The event hosts activities like the Running of the Reindeer and the Outhouse Races, before culminating with the 50th running of the iconic Iditarod Trail Sled Dog Race. — Bailey Berg','2023-05-10','2023-05-13',500,'4654.jpg'),(3,'Anguilla','This easy-going Caribbean gem is simpler than ever to get to with American Airlines launching the first-ever nonstop, direct flight from Miami on Dec. 11. Private charter flights by Tradewind Aviation have also resumed service to the island. And the just-opened Aurora Anguilla Resort & Golf Club has a fleet of jets to ferry guests from key U.S. cities. The sprawling luxury resort will include a few restaurants overseen by chef Abram Bissell, formerly of Eleven Madison Park, The NoMad, and The Modern. Quintessence, a boutique luxury resort with perks like butler service and a 4:1 staff-to-guest ratio, is opening a more affordable annex of suites called Quinn that will debut in 2022 (along with a Champagne cellar tasting room and Art Bar). New Restaurant Uchu at Belmond Cap Juluca is taking inspiration from Belmond\'s collection of properties in Peru. Named after the Quechuan word for spice, the menu will feature contemporary Peruvian cuisine inspired by three of the country\'s regions: the coast, the jungle, and the highlands. — Scott Bay','2023-05-15','2023-05-17',345,'Anguilla.jpeg'),(4,'Antarctica','The pandemic shutdown created a compelling reason to visit Antarctica in 2022: See how the whales, seals, and penguins react after nearly two years without seeing humans. New polar-class expedition ships and new ways to get to the White Continent are reasons to pack your boots too. Viking Expeditions will be in Antarctica for the first time in 2022 with new, twin 378-passenger expedition ships. Ponant\'s new 270-passenger Le Commandant Charcot introduces eco-friendlier sailing, as the first hybrid-electric ship fueled by liquified natural gas (rather than heavy fuel). Quark Expeditions\' long-awaited 199-passenger Ultramarine delivers exciting heli-hiking adventures via two eight-seat twin-engine helicopters. Hit a craps table in between icy exploration on the luxurious new all-suite 200-passenger Crystal Endeavor. Silversea Cruises\' posh, 144-passenger, all-suite Silver Explorer returns with a debut travel option: Skip the notorious (for rough water) Drake Passage and catch a private flight directly from Chile to Antarctica to board the ship. — Fran Golden','2023-06-02','2023-06-05',500,'4654.jpg'),(5,'Bahamas','American travelers have long loved the Bahamas for its crystal-clear waters, sandy beaches, and sunshine just about 50 miles off the coast of Florida, but there are even more reasons to visit the island nation in 2022. Baha Mar on the Island of New Providence has a brand new water park equipped with everything from a lazy river to a surf simulator, and day passes are available for purchase to those who aren\'t resort guests. For more rest and relaxation, journey to the outer islands of the Bahamas. While charter flights will get you exactly where you need to go, Crystal Cruises is offering a Bahamas-centric cruise that brings guests to some of the quieter and more remote islands. On its mid-July cruise, guests will embark and disembark from Nassau and then be whisked away via \"6-star\" service to the islands of Bimini, Great Exuma, San Salvador, and Long Island. Beyond the beach, don\'t forget to indulge in some local food and culture. The Island archipelago is famous for its conch, stew fish, and rock lobster. From late April through early May, Carnival is celebrated in Nassau and back after a pandemic hiatus. Keep an eye out for the famous sound and dance of the junkanoo. — Jamie Aranoff','2023-06-15','2023-06-18',500,'4654.jpg'),(6,'Budapest','Very few places in the world capture both old-world charm and elegant modernity like Hungary\'s capital city, and Budapest\'s latest 130-room luxury hotel, Matild Palace, is a shining example. The neo-baroque palace-turned-hotel, which opened last summer in the city\'s District V, is a UNESCO-protected site that once housed the city\'s royalty. The hotel is now home to Wolfgang Punk\'s famed restaurant, Spago, the first of its kind in central Europe. It also hosts the Duchess bar — a rooftop \"liquor library\" that mixes craft cocktails using local wines and pálinka, Hungarian fruit brandy, which can be enjoyed alongside panoramic views of the Danube river. Surrounded by 22 wine regions, Budapest is a city for oenophiles. Enjoy a glass of Kékfrankos or Kadarka in the Castle District\'s newly opened wine bar, Takler Borbár Buda, founded by one of the country\'s renowned winemaking families. Don\'t leave the city without visiting Marlou, a biodynamic wine bar near the Hungarian State Opera, and Portobello, an unassuming coffee and natural wine bar around the corner from Matild Palace. — Stephanie Andrews','2023-06-23','2023-06-26',200,'4654.jpg'),(7,'Burgundy','The region of Burgundy is known for — you guessed it — its Burgundy wine, but French wine isn\'t the only reason Burgundy is a must-visit in 2022. In the spring, the region\'s capital city of Dijon will welcome the Cité Internationale de la Gastronomie et du Vin (International City of Gastronomy and Wine), an expansive complex with a cooking school, a new hotel, a handful of restaurants, and a wine cellar with over 250 by-the-glass offerings. The new project is perfectly situated at the starting point of Burgundy\'s famed wine route — Route des Grands Crus — which runs from Dijon to Santenay and produces some of the country\'s most well-regarded wines, including pinot noir, chardonnay, and sauvignon blanc. — Evie Carrick','2023-07-05','2023-07-08',500,'4654.jpg'),(8,'Costa Smeralda','You\'re likely to glimpse Europe\'s pro athlete and yachting crowds at Marriott\'s four hotels on the Costa Smeralda, the glitzy Italian destination known for its Caribbean-like beaches and luxury resorts. Its glamorous Hotel Cala di Volpe has gradually been unveiling room renovations alongside new dining options, including its Harrods Suite, with a roof terrace and sea-facing plunge pool, and BeefBar\'s first Italian outpost. The entire area is one big \"Billionaire Experience,\" but Formula One and entertainment mogul Flavio Briatore snagged the term for his new dining and nightlife venue in designer shopping destination Porto Cervo. For more of a low-key, family-friendly escape, the Baglioni Resort Sardinia opened an hour south in San Teodoro in June, overlooking the stunning Tavolara Marine Reserve. — Nina Ruggiero','2023-07-11','2023-07-13',500,'4654.jpg'),(9,'Crete','The Greek Islands have long been a perennial favorite vacation destination for discerning travelers, and Crete, the largest of the 227 islands in the archipelago, deserves a spot atop your must-see list. Yes, it\'s a place where you can find the white-washed buildings and blue roofs you\'ve lusted after on Instagram for years, and a spot where you can dive into the cerulean blue waters of the Mediterranean at every turn. And of course you can dig deep into both history and mythology as humans have lived on the island since the 7th millennium B.C., not to mention the fact that Crete is the birthplace of Zeus. It\'s little surprise then, with all this beauty and history, that Crete continues to harbor a rich creative community, mostly centered in the neighborhood of Chania. There, visitors can peruse works in museums like the Mediterranean Architecture Center, or seek out unique pieces in galleries like the Municipal Art Gallery or the Redd Gallery. To visit Crete, hop aboard a sailing with Silversea, which takes guests to Crete and several other stellar islands, or book a stay at the Blue Palace Elounda, a Luxury Collection Resort, named one of the Top 10 Greece Resort Hotels in Travel + Leisure\'s World\'s Best Awards, 2021. — Stacey Leasca','2023-07-20','2023-07-23',500,'4654.jpg'),(10,'Jackson Hole','Those wary of traveling internationally in 2022 will find solace in Jackson Hole, a mountain town with endless open space (Wyoming is the least populated state in the U.S.) and plenty to do. In the winter, life revolves around Jackson Hole Mountain Resort, home to some of the nation\'s best skiing and snowboarding. In the summer, plan your trip around the Jackson Hole Food & Wine Summer Festival (June 23-25) or head to the nearby Grand Teton and Yellowstone National Parks. For easy access to the mountain town, travelers can hop on one of Aero\'s high-end, seasonal flights and stay at The Cloudveil off the Town Square or the Caldera House at the base of Jackson Hole Mountain Resort. — Evie Carrick','2023-08-06','2023-08-09',500,'4654.jpg'),(11,'Maldives','The Maldives\' 1,000+ islands sit in the Indian Ocean like a string of turquoise pearls. The tropical nirvana has 166 accommodation options, including the new Joali Being nature retreat, which leads guests on a transformative wellness journey. Alila Kothaifaru Maldives debuts in February with 80 beach and overwater villas on the Raa Atoll. Coming to the same atoll in May, also with 80 luxury villas, is Emerald Faarufushi Resort & Spa on a massive lagoon primed for snorkeling. The ever-innovative Soneva Fushi has a new experience that includes zip-lining to a six-course meal 30 feet about the sand. Along with Soneva Jani, they\'ve debuted Soneva Soul, a new spa complex melding ancient and modern techniques. Other vacation favorites are unveiling new digs like the sleek, contemporary renovation of Naladhu Private Island and the Conrad Maldives Rangali Island, debuting in February. — Katie Lockhart','2023-08-14','2023-08-16',500,'4654.jpg'),(12,'Nile Cruise','There is no trip that will convert you to a life of river cruising quite like a sail down (well, technically, up) the Nile. In fact, the world\'s first river cruises sailed in Egypt, a country designed around the central waterway, where it makes sense that the Nile would act as your home base. A typical Egyptian river cruise sets sail from Cairo to Luxor and then Aswan, with the occasional stop to visit an island temple along the way — complete with sights like the Pyramids, Valley of Kings and Queens, Nefertari\'s tomb, and the Temple of Kom Ombo. In 2022, there\'s more than one new river cruise to choose from, between Uniworld\'s newly launched S.S. Sphinx and AmaWaterways\' Amadahlia, both of which sailed their inaugural voyages in fall 2021. — Maya Kachroo-Levine','2023-08-25','2023-08-27',500,'4654.jpg'),(58,'Abruzzo, Italy','Stretching from the heart of the Apennines to the Adriatic Sea on the peninsula\'s southeastern side, Abruzzo, Italy has long been one of the country\'s most overlooked destinations despite its unspoiled villages, picturesque Trabocchi Coast, and stunning natural escapes. Over the past few years, however, it has gone from a sleepy underdog to an ambitious harbinger of slow travel, sustainable gastronomy, and conscious hospitality. Villa Corallo, a 19th-century mansion near Civitella del Tronto was transformed into a five-star hotel in 2019. Dimore Montane, an eco-lodge opened in 2020 in Majella National Park, marries glamping with environmentally-friendly facilities with a zero waste policy. Meanwhile, restaurants like Bottega Culinaria in San Vito Chietino and Materia Prima in Castel di Sangro are redefining the region as one of Italy\'s most exciting food hotspots for their innovative and sustainable takes on local produce and traditional dishes (in case Niko Romito\'s three-Michelin-starred Reale wasn\'t enough). And completing construction this Spring is Via Verde dei Trabocchi: a cycling and pedestrian path along the Adriatic sea that\'s being built on a disused railway route. — Marianna Cerini','2023-09-02','2023-09-04',234,'Abruzzo.jpeg'),(59,'London','With many international borders closed over the last two years, many eager U.S. travelers\' eyes turned to Alaska. The vast state, famous for its towering, snow-capped peaks, pristine wilderness, massive national parks, and colorful locals, made for a dynamic destination with no passport required. But as borders reopen, interest in the 49th state is showing no signs of slowing down. Alaska\'s tourism board said early forecasts are projecting that more than 1.57 million cruise ship passengers could visit southeast Alaska in summer 2022. That\'s an 18% jump from 2019, the previous record year. Many perennial favorite cruise lines, like Holland America, will be returning to full strength after a non-existent 2020 and abbreviated 2021. Others, like Windstar Cruises, UnCruise, and Hurtigruten are rolling out fresh itineraries or are launching new ships. On dry land, Alaska is set to see myriad new offerings and events. In Juneau, the Sealaska Heritage Institute will open their Arts Campus (where visitors will be able to learn about Alaska Native art and culture) and will host Celebration, one of the largest gatherings of Indigenous peoples. In Anchorage, Fur Rendezvous, Alaska\'s oldest and largest winter festival, will be back from Feb. 25 to March 6 (which also happens to be peak aurora season). The event hosts activities like the Running of the Reindeer and the Outhouse Races, before culminating with the 50th running of the iconic Iditarod Trail Sled Dog Race. — Bailey Berg','2023-05-11','2023-05-14',500,'4654.jpg'),(60,'Anguilla','This easy-going Caribbean gem is simpler than ever to get to with American Airlines launching the first-ever nonstop, direct flight from Miami on Dec. 11. Private charter flights by Tradewind Aviation have also resumed service to the island. And the just-opened Aurora Anguilla Resort & Golf Club has a fleet of jets to ferry guests from key U.S. cities. The sprawling luxury resort will include a few restaurants overseen by chef Abram Bissell, formerly of Eleven Madison Park, The NoMad, and The Modern. Quintessence, a boutique luxury resort with perks like butler service and a 4:1 staff-to-guest ratio, is opening a more affordable annex of suites called Quinn that will debut in 2022 (along with a Champagne cellar tasting room and Art Bar). New Restaurant Uchu at Belmond Cap Juluca is taking inspiration from Belmond\'s collection of properties in Peru. Named after the Quechuan word for spice, the menu will feature contemporary Peruvian cuisine inspired by three of the country\'s regions: the coast, the jungle, and the highlands. — Scott Bay','2023-05-16','2023-05-18',345,'Anguilla.jpeg'),(61,'Antarctica','The pandemic shutdown created a compelling reason to visit Antarctica in 2022: See how the whales, seals, and penguins react after nearly two years without seeing humans. New polar-class expedition ships and new ways to get to the White Continent are reasons to pack your boots too. Viking Expeditions will be in Antarctica for the first time in 2022 with new, twin 378-passenger expedition ships. Ponant\'s new 270-passenger Le Commandant Charcot introduces eco-friendlier sailing, as the first hybrid-electric ship fueled by liquified natural gas (rather than heavy fuel). Quark Expeditions\' long-awaited 199-passenger Ultramarine delivers exciting heli-hiking adventures via two eight-seat twin-engine helicopters. Hit a craps table in between icy exploration on the luxurious new all-suite 200-passenger Crystal Endeavor. Silversea Cruises\' posh, 144-passenger, all-suite Silver Explorer returns with a debut travel option: Skip the notorious (for rough water) Drake Passage and catch a private flight directly from Chile to Antarctica to board the ship. — Fran Golden','2023-06-03','2023-06-06',500,'4654.jpg'),(62,'Bahamas','American travelers have long loved the Bahamas for its crystal-clear waters, sandy beaches, and sunshine just about 50 miles off the coast of Florida, but there are even more reasons to visit the island nation in 2022. Baha Mar on the Island of New Providence has a brand new water park equipped with everything from a lazy river to a surf simulator, and day passes are available for purchase to those who aren\'t resort guests. For more rest and relaxation, journey to the outer islands of the Bahamas. While charter flights will get you exactly where you need to go, Crystal Cruises is offering a Bahamas-centric cruise that brings guests to some of the quieter and more remote islands. On its mid-July cruise, guests will embark and disembark from Nassau and then be whisked away via \"6-star\" service to the islands of Bimini, Great Exuma, San Salvador, and Long Island. Beyond the beach, don\'t forget to indulge in some local food and culture. The Island archipelago is famous for its conch, stew fish, and rock lobster. From late April through early May, Carnival is celebrated in Nassau and back after a pandemic hiatus. Keep an eye out for the famous sound and dance of the junkanoo. — Jamie Aranoff','2023-06-16','2023-06-19',500,'4654.jpg'),(63,'Budapest','Very few places in the world capture both old-world charm and elegant modernity like Hungary\'s capital city, and Budapest\'s latest 130-room luxury hotel, Matild Palace, is a shining example. The neo-baroque palace-turned-hotel, which opened last summer in the city\'s District V, is a UNESCO-protected site that once housed the city\'s royalty. The hotel is now home to Wolfgang Punk\'s famed restaurant, Spago, the first of its kind in central Europe. It also hosts the Duchess bar — a rooftop \"liquor library\" that mixes craft cocktails using local wines and pálinka, Hungarian fruit brandy, which can be enjoyed alongside panoramic views of the Danube river. Surrounded by 22 wine regions, Budapest is a city for oenophiles. Enjoy a glass of Kékfrankos or Kadarka in the Castle District\'s newly opened wine bar, Takler Borbár Buda, founded by one of the country\'s renowned winemaking families. Don\'t leave the city without visiting Marlou, a biodynamic wine bar near the Hungarian State Opera, and Portobello, an unassuming coffee and natural wine bar around the corner from Matild Palace. — Stephanie Andrews','2023-06-24','2023-06-27',200,'4654.jpg'),(64,'Burgundy','The region of Burgundy is known for — you guessed it — its Burgundy wine, but French wine isn\'t the only reason Burgundy is a must-visit in 2022. In the spring, the region\'s capital city of Dijon will welcome the Cité Internationale de la Gastronomie et du Vin (International City of Gastronomy and Wine), an expansive complex with a cooking school, a new hotel, a handful of restaurants, and a wine cellar with over 250 by-the-glass offerings. The new project is perfectly situated at the starting point of Burgundy\'s famed wine route — Route des Grands Crus — which runs from Dijon to Santenay and produces some of the country\'s most well-regarded wines, including pinot noir, chardonnay, and sauvignon blanc. — Evie Carrick','2023-07-06','2023-07-09',500,'4654.jpg'),(65,'Costa Smeralda','You\'re likely to glimpse Europe\'s pro athlete and yachting crowds at Marriott\'s four hotels on the Costa Smeralda, the glitzy Italian destination known for its Caribbean-like beaches and luxury resorts. Its glamorous Hotel Cala di Volpe has gradually been unveiling room renovations alongside new dining options, including its Harrods Suite, with a roof terrace and sea-facing plunge pool, and BeefBar\'s first Italian outpost. The entire area is one big \"Billionaire Experience,\" but Formula One and entertainment mogul Flavio Briatore snagged the term for his new dining and nightlife venue in designer shopping destination Porto Cervo. For more of a low-key, family-friendly escape, the Baglioni Resort Sardinia opened an hour south in San Teodoro in June, overlooking the stunning Tavolara Marine Reserve. — Nina Ruggiero','2023-07-12','2023-07-14',500,'4654.jpg'),(66,'Crete','The Greek Islands have long been a perennial favorite vacation destination for discerning travelers, and Crete, the largest of the 227 islands in the archipelago, deserves a spot atop your must-see list. Yes, it\'s a place where you can find the white-washed buildings and blue roofs you\'ve lusted after on Instagram for years, and a spot where you can dive into the cerulean blue waters of the Mediterranean at every turn. And of course you can dig deep into both history and mythology as humans have lived on the island since the 7th millennium B.C., not to mention the fact that Crete is the birthplace of Zeus. It\'s little surprise then, with all this beauty and history, that Crete continues to harbor a rich creative community, mostly centered in the neighborhood of Chania. There, visitors can peruse works in museums like the Mediterranean Architecture Center, or seek out unique pieces in galleries like the Municipal Art Gallery or the Redd Gallery. To visit Crete, hop aboard a sailing with Silversea, which takes guests to Crete and several other stellar islands, or book a stay at the Blue Palace Elounda, a Luxury Collection Resort, named one of the Top 10 Greece Resort Hotels in Travel + Leisure\'s World\'s Best Awards, 2021. — Stacey Leasca','2023-07-21','2023-07-24',500,'4654.jpg'),(67,'Jackson Hole','Those wary of traveling internationally in 2022 will find solace in Jackson Hole, a mountain town with endless open space (Wyoming is the least populated state in the U.S.) and plenty to do. In the winter, life revolves around Jackson Hole Mountain Resort, home to some of the nation\'s best skiing and snowboarding. In the summer, plan your trip around the Jackson Hole Food & Wine Summer Festival (June 23-25) or head to the nearby Grand Teton and Yellowstone National Parks. For easy access to the mountain town, travelers can hop on one of Aero\'s high-end, seasonal flights and stay at The Cloudveil off the Town Square or the Caldera House at the base of Jackson Hole Mountain Resort. — Evie Carrick','2023-08-07','2023-08-10',500,'4654.jpg'),(68,'Maldives','The Maldives\' 1,000+ islands sit in the Indian Ocean like a string of turquoise pearls. The tropical nirvana has 166 accommodation options, including the new Joali Being nature retreat, which leads guests on a transformative wellness journey. Alila Kothaifaru Maldives debuts in February with 80 beach and overwater villas on the Raa Atoll. Coming to the same atoll in May, also with 80 luxury villas, is Emerald Faarufushi Resort & Spa on a massive lagoon primed for snorkeling. The ever-innovative Soneva Fushi has a new experience that includes zip-lining to a six-course meal 30 feet about the sand. Along with Soneva Jani, they\'ve debuted Soneva Soul, a new spa complex melding ancient and modern techniques. Other vacation favorites are unveiling new digs like the sleek, contemporary renovation of Naladhu Private Island and the Conrad Maldives Rangali Island, debuting in February. — Katie Lockhart','2023-08-15','2023-08-17',500,'4654.jpg'),(69,'Nile Cruise','There is no trip that will convert you to a life of river cruising quite like a sail down (well, technically, up) the Nile. In fact, the world\'s first river cruises sailed in Egypt, a country designed around the central waterway, where it makes sense that the Nile would act as your home base. A typical Egyptian river cruise sets sail from Cairo to Luxor and then Aswan, with the occasional stop to visit an island temple along the way — complete with sights like the Pyramids, Valley of Kings and Queens, Nefertari\'s tomb, and the Temple of Kom Ombo. In 2022, there\'s more than one new river cruise to choose from, between Uniworld\'s newly launched S.S. Sphinx and AmaWaterways\' Amadahlia, both of which sailed their inaugural voyages in fall 2021. — Maya Kachroo-Levine','2023-08-26','2023-08-28',500,'4654.jpg');
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacationslikes`
--

DROP TABLE IF EXISTS `vacationslikes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacationslikes` (
  `vacationId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`vacationId`,`userId`),
  KEY `fk_userId_idx` (`userId`),
  CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_vacationId` FOREIGN KEY (`vacationId`) REFERENCES `vacations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacationslikes`
--

LOCK TABLES `vacationslikes` WRITE;
/*!40000 ALTER TABLE `vacationslikes` DISABLE KEYS */;
INSERT INTO `vacationslikes` VALUES (1,1),(3,1),(4,1),(5,1),(6,1),(10,1),(11,1),(1,2),(2,2),(3,2),(2,4),(3,4),(10,6),(1,7),(10,8),(10,9),(10,10);
/*!40000 ALTER TABLE `vacationslikes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-24 13:30:44
