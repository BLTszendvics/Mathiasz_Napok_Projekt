let time;

function loadingAnimation() {
    time = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}

function Tractor() {
    document.getElementById("nav1").style.color = 'rgb(255, 0, 0)';
    document.getElementById("nav2").style.color = '#EEEEEE';
    document.getElementById("nav3").style.color = '#EEEEEE';
    document.getElementById("nav4").style.color = '#EEEEEE';
    document.getElementById("nav5").style.color = '#EEEEEE';

    document.getElementById("img1").src = '../img/john_deere_1026R.jpg'
    document.getElementById("title1").innerText = "John Deere 1026R kompakt traktor"
    document.getElementById("text1").innerText = "Az 1026R univerzális kompakt traktor tökéletes stabilitást és vezetési kényelmet nyújt. Ezen a feladatok széles skálájára tervezett kis kompakt traktoron a munkaeszközök és munkagépek könnyen és gyorsan cserélhetők. A standard felszereltség részét képezi a hátul és has alatt lévő kardántengely, a hátsó 3 pont felfüggesztés, a hidraulika csatlakozók, a könnyű működtetést elősegítő hidrosztatikus sebességváltó, a kezelő igényeihez állítható szervokormány és deluxe ülés, a négykerék hajtás, a differenciálzár és a deluxe lámpakészlet."
    document.getElementById("link1").href = 'https://www.kite.hu/gepek-eszkozok/kornyezetapolasi-berendezesek/john-deere-1026r-kompakt-traktor/11/7'

    document.getElementById("img2").src = '../img/john_deere_3046R.jpg'
    document.getElementById("title2").innerText = "John Deere 3046R kompakt traktor"
    document.getElementById("text2").innerText = "A John Deere 3R sorozatú kompakt traktorokban a fejlett technológiájú funkciók széles választéka alapfelszereltségként került beépítésre. Ezek között megtalálható a négykerék hajtás, a digitális teljesítménykövető rendszer és a LoadMatch funkció is. Széleskörű felhasználhatóságuknak köszönhetően hosszútávon, költséghatékonyan alkalmazhatók települések, önkormányzatok sportpályaápolással, településfenntartással, városgondnoksággal, kommunális feladatok ellátásával foglalkozó vállalkozások, kertészetek és gazdálkodók számára egyaránt."
    document.getElementById("link2").href = 'https://www.kite.hu/gepek-eszkozok/traktorok/john-deere-3046r-kompakt-traktor/1/815'

    document.getElementById("img3").src = '../img/john_deere_3038E.jpg'
    document.getElementById("title3").innerText = "John Deere 3038E traktor"
    document.getElementById("text3").innerText = "Egy alapkivitelű kompakt traktorral valóban alacsonyabb teljesítményű és képességű gépet vásárol? Ha az egy John Deere E sorozatú traktor, akkor nem. A kedvező árú 3038E könnyű szerrel végrehajt számos feladatot. Ez a rátermett, praktikus és gazdaságos traktor Twin Touch pedálokkal, hidrosztatikus sebességváltóval és 3-pont függesztőszerkezettel rendelkezik. Takarékos üzemeltetési költsége révén hasznos eszköze a kertészeti és kisebb állattartó vállalkozásoknak."
    document.getElementById("link3").href = 'https://www.kite.hu/gepek-eszkozok/traktorok/john-deere-3038e-traktor/1/63'

    document.getElementById("img4").src = '../img/john_deere_3045R.jpg'
    document.getElementById("title4").innerText = "John Deere 3045R traktor"
    document.getElementById("text4").innerText = "A 3R sorozatú traktor teljesítményének maximális kihasználásához a fejlett technológiájú funkciók teljes választékát építettük be az alapfelszereltség részeként. Ezek között megtalálható a négy-kerék hajtás, a digitális teljesítménykövető rendszer és a LoadMatch funkció: egy kiváló elektromos motorteljesítmény-szabályozó rendszer, amely minden alkalmazásban csúcsteljesítményt biztosít. A 3 hengeres dízelmotort nagy nyomatékrugalmasság jellemzi, amellyel terhelés alatt is lenyűgöző vontatási teljesítmény érhető el."
    document.getElementById("link4").href = 'https://www.kite.hu/gepek-eszkozok/traktorok/john-deere-3045r-traktor/1/66'

    document.getElementById("img5").src = '../img/john_deere_4066M.jpg'
    document.getElementById("title5").innerText = "John Deere 4066M traktor"
    document.getElementById("text5").innerText = "A 4M sorozat egy teljes értékű mezőgazdasági traktor erejét és kezelhetőségét nyújtja. A 4 hengeres dízelmotorral, az eHydro sebességváltóval, a négy-kerék hajtással és az ergonomikus kezelőszerv konzollal minden az Ön rendelkezésére áll, ami a feladatok széles skálájának hatékony és könnyű végrehajtásához szükséges. Ez a modell választható manuális ás hidrostatikus váltóval is. Az erős, 4 hengers dízelmotor megfelelő nyomatékot biztosít meg a nehéz feladatokhoz is."
    document.getElementById("link5").href = 'https://www.kite.hu/gepek-eszkozok/traktorok/john-deere-4066m-traktor/1/68'
}

function Combine_Harvester() {
    document.getElementById("nav1").style.color = '#EEEEEE';
    document.getElementById("nav2").style.color = 'rgb(255, 0, 0)';
    document.getElementById("nav3").style.color = '#EEEEEE';
    document.getElementById("nav4").style.color = '#EEEEEE';
    document.getElementById("nav5").style.color = '#EEEEEE';

    document.getElementById("img1").src = '../img/john_deere_W650.avif'
    document.getElementById("title1").innerText = "John Deere W650 kombájn"
    document.getElementById("text1").innerText = "Kezdje a következő aratási szezont egy olyan kombájnnal, amely megkönnyíti Önnek, hogy a legtöbbet hozza ki a terményből, még nehéz körülmények között is. A W-sorozat nemcsak fokozza az Ön termelékenységét és hatékonyságát, hanem a termény és a szalma minősége is jobb. Számos új funkció támogatja az értékes idő megtakarítását és a hatékonyság növelését, ilyen például a ProDrive sebességváltó, ami automatikusan kapcsolja a sebességfokozatokat miközben Ön állandó sebességgel végezheti az aratást."
    document.getElementById("link1").href = 'https://www.kite.hu/gepek-eszkozok/kombajnok-es-adapterek/john-deere-w650-kombajn/2/408'

    document.getElementById("img2").src = '../img/john_deere_W660.avif'
    document.getElementById("title2").innerText = "John Deere W660 kombájn"
    document.getElementById("text2").innerText = "Üdvözöljük a szakma egyik legkényelmesebb munkakörnyezetében. A John Deere W660 sorozat tágas, Deluxe kivitelű vezetőfülkéjének teljes térfogata 3,30 m³. Számos átgondolt részlet segíti a gépkezelőt, hogy a legjobb formáját hozza, és még hosszú munkanapokon, a legnehezebb betakarítási körülmények között is friss lehessen. Köszönhetően a színezett üvegeknek, a vékony sarok-vázoszlopoknak, valamint a rendkívül ergonomikus kezelőszerveknek a kilátás mindig akadálytalan."
    document.getElementById("link2").href = 'https://www.kite.hu/gepek-eszkozok/kombajnok-es-adapterek/john-deere-w660-kombajn/2/412'

    document.getElementById("img3").src = '../img/john_deere_T550.jpg'
    document.getElementById("title3").innerText = "John Deere T550 kombájn"
    document.getElementById("text3").innerText = "Az új T sorozat generációnak a megalkotásával mindent megtartottak abból, ami kiváló volt a T-sorozatban – de tökéletesítettek is rajta. A jól bevált terménytovábbító rendszer nem töri a szemeket és a szalmát, továbbá megnövelt teljesítményt kínál minden terményben és betakarítási körülmények között. A tökéletesített cséplőszerkezetet és tisztítórendszert ma már az egyik legnagyobb felületű a piacon."
    document.getElementById("link3").href = 'https://www.kite.hu/gepek-eszkozok/kombajnok-es-adapterek/john-deere-t550-kombajn/2/413'

    document.getElementById("img4").src = '../img/john_deere_T560.jpg'
    document.getElementById("title4").innerText = "John Deere T560 kombájn"
    document.getElementById("text4").innerText = "Az új generációs John Deere T sorozat tervezése során maximálisan a gazdálkodók igényeire és kívánságaira koncentráltak a mérnökök: nagyobb teljesítmény, kisebb szemveszteség, egyszerű kezelhetőség, gyorsabb átszerelés másik terményre és a könnyebb karbantartás. A jól bevált terménytovábbító rendszer nem töri a szemeket és a szalmát, továbbá megnövelt teljesítményt kínál minden terményben és betakarítási körülmények között. A tökéletesített cséplőszerkezetet és tisztítórendszert ma már az egyik legnagyobb felület, ami a piacon kapható"
    document.getElementById("link4").href = 'https://www.kite.hu/gepek-eszkozok/kombajnok-es-adapterek/john-deere-t560-kombajn/2/414'

    document.getElementById("img5").src = '../img/john_deere_T660.avif'
    document.getElementById("title5").innerText = "John Deere T660 kombájn"
    document.getElementById("text5").innerText = "Az új John Deere T660 kombájn felszereltségét tekintve jobb, mint valaha: cséplőszerkezet, szalmarázó ládák, tisztítórendszer, magtartály és szalmaszecskázó. A termény levágásától a melléktermék kezelésig, a szántóföldtől az országútig, az első használattól a szezon végéig – az új T sorozat segítséget nyúlt intelligens megoldásaival, értékes jellemzőivel és innovatív szolgáltatásaival, így Ön gyorsabban, kényelmesebben és hatékonyabban tud dogozni."
    document.getElementById("link5").href = 'https://www.kite.hu/gepek-eszkozok/kombajnok-es-adapterek/john-deere-t660-kombajn/2/415'
}

function Balers() {
    document.getElementById("nav1").style.color = '#EEEEEE';
    document.getElementById("nav2").style.color = '#EEEEEE';
    document.getElementById("nav3").style.color = 'rgb(255, 0, 0)';
    document.getElementById("nav4").style.color = '#EEEEEE';
    document.getElementById("nav5").style.color = '#EEEEEE';

    document.getElementById("img1").src = '../img/john_deere_F441M.jpg'
    document.getElementById("title1").innerText = "John Deere F441M Silage fixkamrás bálázó"
    document.getElementById("text1").innerText = "Amikor itt az idő, hogy elszállítsa a learatott terményt, a lehető legrövidebb idő alatt készen kell állnia az induláshoz. A nedvességtartalom azonban komoly eltéréseket okozhat a szilázs takarmány, a széna vagy a szalma minőségében. A John Deere bálázókat rendszeres, alacsony karbantartási igényű működésre tervezték, lehetővé téve a folyamatos, tömör bálák gyártását, még akár szilázs takarmány esetén is. A kis parcelláktól a hatalmas táblákig, meg fogja találni az Önnek tökéletesen megfelelő John Deere bálázót."
    document.getElementById("link1").href = 'https://www.kite.hu/gepek-eszkozok/szalastakarmanyozas-gepei/john-deere-f441m-silage-fixkamras-balazo/3/426'

    document.getElementById("img2").src = '../img/john_deere_F441M_multicrop.jpg'
    document.getElementById("title2").innerText = "John Deere F441M Multicrop fixkamrás bálázó"
    document.getElementById("text2").innerText = "Ön csak tiszta tarlót fog találni ott, ahol egy John Deere F441M bálázó dolgozott. Az erős igénybevételre tervezett, energikus rendfelszedők jól teljesítenek akár nagy erőpróbát igénylő környezetben is. Könnyen kezelhető vezérlők sorával hozták összhangba a traktort és a John Deere bálázót, hogy a tökéletes bálázást egyszerűvé és gyorsabbá tegyék. Csak a John Deere ajánl CoverEdge hálós kötözést, mely kiválóan biztosítja a termény védelmét és a veszteség csökkentését."
    document.getElementById("link2").href = 'https://www.kite.hu/gepek-eszkozok/szalastakarmanyozas-gepei/john-deere-f441m-multicrop-fixkamras-balazo/3/427'

    document.getElementById("img3").src = '../img/john_deere_F441R.jpg'
    document.getElementById("title3").innerText = "John Deere F441R fixkamrás bálázó"
    document.getElementById("text3").innerText = "A John Deere F441R robusztus és megbízható kivitelezése nagy mennyiségű szilázs bálázására szolgál, ahol a sebesség és a kapacitás elsődleges fontosságú. A bálázó prémium felszereltsége tartalmazza a rozsdamentes acél rendfelszedőt és a nagy igénybevételre tervezett görgőket, hogy még jobban ellenálljanak a nehéz, nedves terménynek. A megerősített fogaskerékház és hajtótengely azt jelenti, hogy nyugodtan feszegetheti a gép határait anélkül, hogy aggódnia kellene."
    document.getElementById("link3").href = 'https://www.kite.hu/gepek-eszkozok/szalastakarmanyozas-gepei/john-deere-f441r-fixkamras-balazo/3/428'

    document.getElementById("img4").src = '../img/john_deere_V451G.jpg'
    document.getElementById("title4").innerText = "John Deere V451G hevederes körbálázó"
    document.getElementById("text4").innerText = "A John Deere V451G bálázók optimális választást jelentenek rendszeres és változatos használathoz. Robusztusak és kompaktak, a legtöbb termény és körülmény esetén nagyszerűen működnek. Leginkább a száraz terményeknél, a szalma és a széna bálázására ideális választás. Akár a John Deere G vagy az M sorozat bálázóit választja, biztos lehet benne, hogy egy nyerő gépet választ, amely tökéletesen megfelel az Ön speciális követelményeinek."
    document.getElementById("link4").href = 'https://www.kite.hu/gepek-eszkozok/szalastakarmanyozas-gepei/john-deere-v451g-hevederes-korbalazo/3/445'

    document.getElementById("img5").src = '../img/john_deere_V451M.jpg'
    document.getElementById("title5").innerText = "John Deere V451M hevederes körbálázó"
    document.getElementById("text5").innerText = "Hosszúra tudnak nyúlni a napok bálázási szezonban, azonban nincs vesztegetni való idő. Ezért számos olyan kényelmi funkcióval látták el a John Deere V451M típusú hevederes körbálázókat, amelyekkel arra összpontosíthat, ami igazán számít: a tökéletes bálák létrehozására, a lehető leggyorsabban.A John Deere bálázóktól eddig megszokott CoverEdge bálaszél kötözési technológia alapfelszereltség, aminek köszönhetően a „vállas” bála már a múlté."
    document.getElementById("link5").href = 'https://www.kite.hu/gepek-eszkozok/szalastakarmanyozas-gepei/john-deere-v451m-hevederes-korbalazo/3/447'
}

function Tillage_Machines() {
    document.getElementById("nav1").style.color = '#EEEEEE';
    document.getElementById("nav2").style.color = '#EEEEEE';
    document.getElementById("nav3").style.color = '#EEEEEE';
    document.getElementById("nav4").style.color = 'rgb(255, 0, 0)';
    document.getElementById("nav5").style.color = '#EEEEEE';

    document.getElementById("img1").src = '../img/rabe_field_bird.jpg'
    document.getElementById("title1").innerText = "Rabe Field Bird rövidtárcsák"
    document.getElementById("text1").innerText = "A Rabe Field Bird rövidtárcsák különféle technológiai beavatkozások elvégzését teszik lehetővé az év során a tarlóhántástól a szántáselmunkáláson át a magágy-előkészítésig. A robusztus konstrukciónak köszönhetően az egy tárcsalapra jutó fajlagos terhelés több mint 80 kg, ami a nehéz tárcsákra jellemző érték, így a tárcsalapok nagyobb ellenállás esetén is a talajban maradnak, biztosítva hogy ne maradjon hántatlan rész a tarlón."
    document.getElementById("link1").href = 'https://www.kite.hu/gepek-eszkozok/talajmuvelo-gepek/rabe-field-bird-rovidtarcsak/4/430'

    document.getElementById("img2").src = '../img/kockerling_rebell.jpg'
    document.getElementById("title2").innerText = "Köckerling Rebell rövidtárcsák"
    document.getElementById("text2").innerText = "A Köckerling Rebell kompakt tárcsás boronákat a sokoldalú felhasználhatóság jellemzi. A Rebell gépcsalád függesztett és félig függesztett gépekből áll 3-tól 8 m-es munkaszélességig. Segítségükkel hatékonyan elvégezhető az olyan problémás növényi maradványok, mint a nagy tömegű kukoricaszár, a megdőlt gabona, vagy a magas növésű köztes növény bedolgozása is. A Köckerling Rebell rövidtárcsa a hagyományos nehéztárcsa konstrukciós előnyeit magában hordozó kompakt tárcsás borona."
    document.getElementById("link2").href = 'https://www.kite.hu/gepek-eszkozok/talajmuvelo-gepek/kockerling-rebell-rovidtarcsak/4/431'

    document.getElementById("img3").src = '../img/rabe.jpg'
    document.getElementById("title3").innerText = "Rabe váltvaforgató ekék"
    document.getElementById("text3").innerText = "A Rabe Albatros, Super-Albatros és Kormoran váltvaforgató ekesorozat tagjainak alapfelszereltsége lehetővé teszi a különböző szántási mélységekben, eltérő talajviszonyok és tarlómaradvány-mennyiségek esetén történő munkavégzést, jó leforgató-képesség mellett. Robosztus szerkezeti felépítésének köszönhetően az ország legkötöttebb területeinek megművelésére is alkalmas. A széles portfólióból pedig a kisgazdaságoktól a nagyüzemi gazdaságokig mindenki megtalálhatja a gazdálkodására legjobban illeszkedő ekét."
    document.getElementById("link3").href = 'https://www.kite.hu/gepek-eszkozok/talajmuvelo-gepek/rabe-valtvaforgato-ekek/4/432'

    document.getElementById("img4").src = '../img/gaspardo.jpg'
    document.getElementById("title4").innerText = "Gaspardo lazítók"
    document.getElementById("text4").innerText = "Napjainkban a szántás alternatívájaként egyre szélesebb körben találkozhatunk a lazításos műveléssel. A száraz, tömörödött talajállapot mellett különösen felértékelődik a lazítók munkája. A Gaspardo Magnum, Artiglio, Attila és Pinocchio középmély lazítók alkalmazásával helyreállítható a tömörödött talajok szerkezete, felszámolható a tárcsatalp és az eketalp, megszüntethetők a pangó vizek és csökkenthetők az eróziós hatások."
    document.getElementById("link4").href = 'https://www.kite.hu/gepek-eszkozok/talajmuvelo-gepek/gaspardo-lazitok/4/434'

    document.getElementById("img5").src = '../img/orthman_1tRIPr.jpg'
    document.getElementById("title5").innerText = "Orthman 1tRIPr sávos talajművelők"
    document.getElementById("text5").innerText = "Az Orthman 1tRIPr sávos talajművelő eszköz egyesíti az USA-ban már bizonyított sávos talajművelési rendszer, a precíziós (lokális) tápanyag lehelyezés és a vetőágykészítés munkafolyamatait. A felsorolt technológiai elemeket egyetlen menetben, kiemelkedő területteljesítmény és produktivitás mellett valósíthatja meg. Megoldásunkkal a talaj vethető állapotba kerül, megőrzi a talajnedvességet, elkerülheti a talajpusztulást, továbbá időt és pénzt takarít meg."
    document.getElementById("link5").href = 'https://www.kite.hu/gepek-eszkozok/talajmuvelo-gepek/orthman-1tripr-savos-talajmuvelok/4/436'
}

function Seed_Drill() {
    document.getElementById("nav1").style.color = '#EEEEEE';
    document.getElementById("nav2").style.color = '#EEEEEE';
    document.getElementById("nav3").style.color = '#EEEEEE';
    document.getElementById("nav4").style.color = '#EEEEEE';
    document.getElementById("nav5").style.color = 'rgb(255, 0, 0)';

    document.getElementById("img1").src = '../img/john_deere_740A.avif'
    document.getElementById("title1").innerText = "John Deere 740A pneumatikus gabonavetőgép"
    document.getElementById("text1").innerText = "A John Deere 740A gabonavetőgép kialakítása révén eltérő viszonyok között is pontos vetést és egyenletesen kelő növényállományt biztosít, akár csökkentett menetszámú talajművelés esetén is. A nagy munkaszélesség és a nagy munkasebesség magas termelékenységet eredményez (100 ha/nap 9 m-es változat esetén), biztosítva a vetésre rendelkezésre álló szűk optimális időintervallum maximális kihasználását."
    document.getElementById("link1").href = 'https://www.kite.hu/gepek-eszkozok/vetogepek/john-deere-740a-pneumatikus-gabonavetogep/5/443'

    document.getElementById("img2").src = '../img/john_deere_750A.jpg'
    document.getElementById("title2").innerText = "John Deere 750A gabonavetőgépek"
    document.getElementById("text2").innerText = "A John Deere 750A gabonavetőgépek közepes és nagy gazdaságok számára ideális választás, csökkentett talajműveléses technológiában. A gabonavetőgép kialakítása révén eltérő viszonyok között is pontos vetést és egyenletesen kelő növényállományt biztosít. A nagy munkaszélesség és a nagy munkasebesség magas termelékenységet eredményez, biztosítva a vetésre rendelkezésre álló szűk optimális időintervallum maximális kihasználását."
    document.getElementById("link2").href = 'https://www.kite.hu/gepek-eszkozok/vetogepek/john-deere-750a-gabonavetogepek/5/444'

    document.getElementById("img3").src = '../img/kockerling_vitu.jpg'
    document.getElementById("title3").innerText = "Köckerling Vitu vetőgép"
    document.getElementById("text3").innerText = "Köckerling Vitu vetőgépe beilleszthető a hagyományos és mulcsvetéses technológiába egyaránt. A gép talajművelő része egy kétsoros tárcsás boronából, illetve egy sor simítóból áll. A talajművelő szekciót az eltolt elrendezésű tömörítő kerekek, majd a két sorban elhelyezkedő dupla tárcsás csoroszlyák követik. Ez az elrendezés garancia az egyenletes magágyba történő precíz vetőmag-kijuttatásra magasabb sebességnél is."
    document.getElementById("link3").href = 'https://www.kite.hu/gepek-eszkozok/vetogepek/kockerling-vitu-vetogep/5/449'

    document.getElementById("img4").src = '../img/john_deere_1705.jpg'
    document.getElementById("title4").innerText = "John Deere 1705-ös sorozatú szemenkénti vetőgépek"
    document.getElementById("text4").innerText = "A gazdálkodók igényei különböznek, de a céljuk azonos, minden termelő maximális termésátlagot szeretne a haszonmaximalizálás mellett. Így elengedhetetlen a kiváló vetésminőség elérése. A John Deere szemenkénti vetőgépek kapcsán a fejlesztők az alábbi 4 szempont mentén fejlesztették tovább a legendás John Deere vetőgépeket: segítsék elő a tervezett tőszám elérését, a pontos tőtávolság beállítását, az egyenletes kelés elérését és a vetéshez rendelkezésre álló időszak maximális kihasználását."
    document.getElementById("link4").href = 'https://www.kite.hu/gepek-eszkozok/vetogepek/john-deere-1705-os-sorozatu-szemenkenti-vetogepek/5/450'

    document.getElementById("img5").src = '../img/john_deere_1775NT.jpg'
    document.getElementById("title5").innerText = "John Deere 1775NT ExactEmerge szemenkénti vetőgép"
    document.getElementById("text5").innerText = "A John Deere vetőgépcsaládjának egyik zászlóshajója a John Deere 1775NT ExactEmerge szemenkénti vetőgép. A vetőgép kialakítása, tömege révén szélsőséges viszonyok között is pontos vetést és egyenletesen kelő növényállományt biztosít hagyományos és csökkentett menetszámú talajművelés esetén, de akár direktvetésben is. A vetés még nagy munkasebességnél is pontosan elvégezhető, nagy termelékenységet biztosítva (100 ha/vetőelem egy szezonban)."
    document.getElementById("link5").href = 'https://www.kite.hu/gepek-eszkozok/vetogepek/john-deere-1775nt-exactemerge-szemenkenti-vetogep/5/452'
}

function Ornamental_Grasses() {
    document.getElementById("nav1").style.color = 'rgb(255, 0, 0)';
    document.getElementById("nav2").style.color = '#EEEEEE';
    document.getElementById("nav3").style.color = '#EEEEEE';
    document.getElementById("nav4").style.color = '#EEEEEE';
    document.getElementById("nav5").style.color = '#EEEEEE';

    document.getElementById("img1").src = '../img/zebra_aranybambusz.jpg'
    document.getElementById("title1").innerText = "Zebra aranybambusz (Pleioblastus auricoma)"
    document.getElementById("text1").innerText = "Származása: Közép-Kína. Tömött bokrú törpe bambusz. Levelei sárgás zöldek. Első pár évben télen takarást igényel."
    document.getElementById("link1").href = 'https://oazis.hu/disznovenyek/zebra-aranybambusz/'

    document.getElementById("img2").src = '../img/zebrafu.jpg'
    document.getElementById("title2").innerText = "Zebrafű (Miscanthus sinensis, Zebrinus)"
    document.getElementById("text2").innerText = "Későn hajt ki. Zöld leveleit sárga kereszt csíkok díszítik. Száraz talajban a levelei vége vissza száradnak. Száraz leveleit tavasszal vágjuk vissza."
    document.getElementById("link2").href = 'https://oazis.hu/disznovenyek/zebrafu/'

    document.getElementById("img3").src = '../img/vesszos_koles.jpg'
    document.getElementById("title3").innerText = "Vesszős köles (Panicum virgatum, Heavy Matel)"
    document.getElementById("text3").innerText = "Oszlopos növekedésű. Levelei acél kékek felállók, ősszel sárgára színeződnek."
    document.getElementById("link3").href = 'https://oazis.hu/disznovenyek/vesszos-koles/'

    document.getElementById("img4").src = '../img/viragosnad.jpg'
    document.getElementById("title4").innerText = "Virágosnád, molnárpántlika (Miscanthus sinensis, Gracillimus)"
    document.getElementById("text4").innerText = "Származása: Kelet-Ázsia. Későn áprilisban hajt ki. Levelei matt zöldek, ezüstös középpel, ősszel vörösre színeződik. Tó és patak partokra ültethető."
    document.getElementById("link4").href = 'https://oazis.hu/disznovenyek/viragosnadmolnarpantlika/'

    document.getElementById("img5").src = '../img/torpe_bambusz.jpg'
    document.getElementById("title5").innerText = "Törpe bambusz (Pleioblastus fortunei, Variegata)"
    document.getElementById("text5").innerText = "0,5 méterre növő fajta. Levelein hosszanti fehér csíkokkal."
    document.getElementById("link5").href = 'https://oazis.hu/disznovenyek/torpe-bambusz/'
}

function Spices_and_Herbs() {
    document.getElementById("nav1").style.color = '#EEEEEE';
    document.getElementById("nav2").style.color = 'rgb(255, 0, 0)';
    document.getElementById("nav3").style.color = '#EEEEEE';
    document.getElementById("nav4").style.color = '#EEEEEE';
    document.getElementById("nav5").style.color = '#EEEEEE';

    document.getElementById("img1").src = '../img/zsalya.jpg'
    document.getElementById("title1").innerText = "Zsálya (Salvia officinalis, Icterina)"
    document.getElementById("text1").innerText = "Kerekded bokorrá fejlődik. Levelei sárgásan tarkázottak. Téli takarást igényel. Sziklakertekbe, rézsűkre ültethető."
    document.getElementById("link1").href = 'https://oazis.hu/disznovenyek/zsalya/'

    document.getElementById("img2").src = '../img/vasfu.jpg'
    document.getElementById("title2").innerText = "Vasfű (Verbena)"
    document.getElementById("text2").innerText = "A vasfű vagy verbéna (Verbena) a vasfűfélék vagy verbénafélék (Verbenaceae) családjának mintegy 200 fajt számláló, névadó nemzetsége. Legtöbb fajuk Amerika trópusi-szubtrópusi területein él, de ebbe a nemzetségbe tartozik a vasfűfélék egyetlen, Magyarországon őshonos faja, a közönséges vasfű (Verbena officinalis) is. Idehaza leginkább nyáron nyíló, üde lila virágai miatt termesztik, a patikákban is biztos helye van. Segíti a szervezet regenerálódását, valamint felső légúti megbetegedések ellen is kiváló, azonban legfontosabb, hogy máj és epebántalmakat is enyhít."
    document.getElementById("link2").href = 'https://oazis.hu/disznovenyek/vasfu/'

    document.getElementById("img3").src = '../img/tarkony.jpg'
    document.getElementById("title3").innerText = "Tárkony (Artemisia dracunculus)"
    document.getElementById("text3").innerText = "Évelő lágyszárú, terjedő tövű évelő. Levelei hosszúak, lándzsásak épp szélűek. Virágzata fészek virágzat, júliustól virágzik. Étvágyjavító, enyhe vérnyomás csökkentő hatású. Levesek, mártások, sültek, savanyúságok ízesítésére alkalmas."
    document.getElementById("link3").href = 'https://oazis.hu/disznovenyek/tarkony/'

    document.getElementById("img4").src = '../img/rozmaring.jpg'
    document.getElementById("title4").innerText = "Rozmaring (Rosmarinus officinalis, Prostratus)"
    document.getElementById("text4").innerText = "Hajtásai elhajlók. Levelei keresztben átellenesek. Meszes talajba is ültethető. Téli takarást igényel. Virágait májustól hozza. A méhek kedvelik."
    document.getElementById("link4").href = 'https://oazis.hu/disznovenyek/rozmaring/'

    document.getElementById("img5").src = '../img/rebarbara.jpg'
    document.getElementById("title5").innerText = "Rebarbara (Rheum rhabarbarum)"
    document.getElementById("text5").innerText = "Terjedelmes bokrot alkotó évelő növény. Napos helyet és tápanyagban gazdag talajt igényel. Telepítést követő harmadik évtől szedhetők levelei márciustól májusig. Levélnyele 30-60 cm hosszú."
    document.getElementById("link5").href = 'https://oazis.hu/disznovenyek/rebarbara/'
}

function Bulbs() {
    document.getElementById("nav1").style.color = '#EEEEEE';
    document.getElementById("nav2").style.color = '#EEEEEE';
    document.getElementById("nav3").style.color = 'rgb(255, 0, 0)';
    document.getElementById("nav4").style.color = '#EEEEEE';
    document.getElementById("nav5").style.color = '#EEEEEE';

    document.getElementById("img1").src = '../img/vervirag.jpg'
    document.getElementById("title1").innerText = "Vérvirág (Scadoxus multiflorus)"
    document.getElementById("text1").innerText = "Hagymás fagyérzékeny évelő. Piros virágai gömb alakú ernyő virágzatot alkotnak. Tavasszal fiókhagymákkal szaporítható."
    document.getElementById("link1").href = 'https://oazis.hu/disznovenyek/vervirag/'

    document.getElementById("img2").src = '../img/tulipan.jpg'
    document.getElementById("title2").innerText = "Tulipán (Tulipa Concerto)"
    document.getElementById("text2").innerText = "Forsteriana hibrid. Kora tavasszal virágzó, virágai egyszerűek, napon kiterülők. Levelei foltosak vagy csíkosak. Virága fehér színű. Törpe változat sziklakertek beéltetésére, temetőbe alkalmas fajta. Ősz időszakban hagymás kiszerelésben áruljuk."
    document.getElementById("link2").href = 'https://oazis.hu/disznovenyek/tulipan-37/'

    document.getElementById("img3").src = '../img/trombitas_narcisz.jpg'
    document.getElementById("title3").innerText = "Trombitás nárcisz (Narcissus Dutch Master)"
    document.getElementById("text3").innerText = "Magányos nagy virágú fajta, Tavasz elejétől végéig nyílnak, sárga trombita formájú virágai. Magassága 45 cm."
    document.getElementById("link3").href = 'https://oazis.hu/disznovenyek/trombitas-narcisz/'

    document.getElementById("img4").src = '../img/torpe_daliak.jpg'
    document.getElementById("title4").innerText = "Törpe dáliák (Dahlia Topmix pink)"
    document.getElementById("text4").innerText = "Törpe dália, 20-40 cm magas. Kőedények, dalnokládák beültetésére alkalmas. Teleltetést igényel."
    document.getElementById("link4").href = 'https://oazis.hu/disznovenyek/torpe-daliak/'

    document.getElementById("img5").src = '../img/trombitaviragu_liliom.jpg'
    document.getElementById("title5").innerText = "Trombitavirágú liliom (Lilium African Queen)"
    document.getElementById("text5").innerText = "Nyáron virágzó hagymás. Levelei lándzsa alakúak. Nagy virágai narancssárgák. Hagymás kiszerelésben lapható. Évelőágyak háttér növényének ültethető, 120-150 cm magas. Egyszerre 8-12 virágot is hoz."
    document.getElementById("link5").href = 'https://oazis.hu/disznovenyek/trombitaviragu-liliom/'
}

function Aquatic_Plants() {
    document.getElementById("nav1").style.color = '#EEEEEE';
    document.getElementById("nav2").style.color = '#EEEEEE';
    document.getElementById("nav3").style.color = '#EEEEEE';
    document.getElementById("nav4").style.color = 'rgb(255, 0, 0)';
    document.getElementById("nav5").style.color = '#EEEEEE';

    document.getElementById("img1").src = '../img/vizi_harmatkasa.jpg'
    document.getElementById("title1").innerText = "Vízi harmatkása (Glyceria maxima, Variegata)"
    document.getElementById("text1").innerText = "Levelei szélesek, hosszúkásak, krémszínű csíkokkal. Gyors növekedésű évelő. Tóparti sekély vizekbe ültethető. Vízmélység: 5-20 cm"
    document.getElementById("link1").href = 'https://oazis.hu/disznovenyek/vizi-harmatkasa/'

    document.getElementById("img2").src = '../img/vizi_hidor.jpg'
    document.getElementById("title2").innerText = "Vízi hídőr (Alisma plantago-aquatica)"
    document.getElementById("text2").innerText = "Sekély vízben él. Levelei élénkzöldek, a víz fölé emelkednek. Virágzata, rózsaszín, kunkorszerű, nagy laza bugában nyáron jelennek meg."
    document.getElementById("link2").href = 'https://oazis.hu/disznovenyek/vizi-hidor/'

    document.getElementById("img3").src = '../img/vizi_jacint.jpg'
    document.getElementById("title3").innerText = "Vizi jácint (Eichhornia crassipes)"
    document.getElementById("text3").innerText = "Levél nyele hólyag szerűen felfújódott, viaszosak így úsznak a vízen. Hosszú gyökerei belelógnak a vízbe. Virágai lilák augusztusban nyílnak. Teleltetéséről gondoskodni kell."
    document.getElementById("link3").href = 'https://oazis.hu/disznovenyek/vizi-jacint/'

    document.getElementById("img4").src = '../img/vizi_menta.jpg'
    document.getElementById("title4").innerText = "Vizi menta (Mentha aquatica)"
    document.getElementById("text4").innerText = "Származása: Ázsia. Erősen tarackozó szárú aromás évelő. Levelei tojásdadok szélük fűrészes. Virágai lila fejecske virágzatba tömörülnek. Vízmélység: 10 cm."
    document.getElementById("link4").href = 'https://oazis.hu/disznovenyek/vizi-menta/'

    document.getElementById("img5").src = '../img/vizi_noszirom.jpg'
    document.getElementById("title5").innerText = "Vízi nőszirom (Iris versicolor)"
    document.getElementById("text5").innerText = "Levelei keskenyebbek mint a többi írisz fajtáé. Virágai kékek, ezüst és arany pöttyösek, szirmaik keskenyek. Virágait júliustól hozza. Vízmélység: 5-10 cm."
    document.getElementById("link5").href = 'https://oazis.hu/disznovenyek/vizi-noszirom/'
}

function Evergreens() {
    document.getElementById("nav1").style.color = '#EEEEEE';
    document.getElementById("nav2").style.color = '#EEEEEE';
    document.getElementById("nav3").style.color = '#EEEEEE';
    document.getElementById("nav4").style.color = '#EEEEEE';
    document.getElementById("nav5").style.color = 'rgb(255, 0, 0)';

    document.getElementById("img1").src = '../img/zold_henyeboroka.jpg'
    document.getElementById("title1").innerText = "Zöld henyeboróka (Juniperus Horizontalis, Prince of Wales)"
    document.getElementById("text1").innerText = "30 cm magas terülő boróka. Levelei zöldek. Humuszos talajt igényel. Sziklakertbe, talajtakarónak, ültethető."
    document.getElementById("link1").href = 'https://oazis.hu/disznovenyek/zold-henyeboroka/'

    document.getElementById("img2").src = '../img/zold_oszlopos_tiszafa.jpg'
    document.getElementById("title2").innerText = "Zöld oszlopos tiszafa (Taxus x media Hicksii)"
    document.getElementById("text2").innerText = "Oszlopos növekedésű, 6 méter magasságot is elérő fajta. A nőivarú változat nagyon sok termést hoz. Idősebb korban koronája széthajló."
    document.getElementById("link2").href = 'https://oazis.hu/disznovenyek/zold-oszlopos-tiszafa/'

    document.getElementById("img3").src = '../img/wilson_magyal.jpg'
    document.getElementById("title3").innerText = "Wilson magyal (Ilex x altaclerensis Wilsonii)"
    document.getElementById("text3").innerText = "4 méter magas kúp koronájú. A vessző végi levelei ép szélűek, ősszel bronzossá válnak."
    document.getElementById("link3").href = 'https://oazis.hu/disznovenyek/wilson-magyal/'

    document.getElementById("img4").src = '../img/virginiai_boroka.jpg'
    document.getElementById("title4").innerText = "Virginiai boróka (Juniperus virginiana Blue Arrow)"
    document.getElementById("text4").innerText = "Keskeny oszlopos növekedésű, kék lombú fajta. 5-6 méter magas. Atkásodásra nem hajlamos."
    document.getElementById("link4").href = 'https://oazis.hu/disznovenyek/virginiai-boroka/'

    document.getElementById("img5").src = '../img/tuztovis.jpg'
    document.getElementById("title5").innerText = "Tűztövis (Pyracantha, Orange Charmer)"
    document.getElementById("text5").innerText = "2 méter magas felfelé álló ágú, örökzöld cserje. Fehér virágait bugákban hozza. Termése tömegesen jelennek meg, sötét narancssárga színben."
    document.getElementById("link5").href = 'https://oazis.hu/disznovenyek/tuztovis-4/'
}