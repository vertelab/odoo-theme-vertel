function swedish_clock(){
    var today = new Date();

    var week_days = ["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"];
    var week_day = week_days[today.getDay()];

    var day = today.getDate();

    var months = ["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"];
    var month = months[today.getMonth()];

    var hours = today.getHours();
    hours = hours > 9 ? hours : "0" + hours;

    var minutes = today.getMinutes();
    minutes = minutes > 9 ? minutes : "0" + minutes;

    var seconds = today.getSeconds();
    seconds = seconds > 9 ? seconds : "0" + seconds;

	var names = new Array(12);
	names[0] = new Array("","Nyårsdagen","Svea","Alfred, Alfrida","Rut","Hanna, Hannele","Kasper, Melker, Baltsar","August, Augusta","Erland","Gunnar, Gunder","Sigurd, Sigbritt","Jan, Jannike","Frideborg, Fridolf","Knut","Felix, Felicia","Laura, Lorentz","Hjalmar, Helmer","Anton, Tony","Hilda, Hildur","Henrik","Fabian, Sebastian","Agnes, Agneta","Vincent, Viktor","Frej, Freja","Erika","Paul, Pål","Bodil, Boel","Göte, Göta","Karl, Karla","Diana","Gunilla, Gunhild","Ivar, Joar");
	names[1] = new Array("","Max, Maximilian","Kyndelsmässodagen","Disa, Hjördis","Ansgar, Anselm","Agata, Agda","Dorotea, Doris","Rikard, Dick","Berta, Bert","Fanny, Franciska","Iris","Yngve, Inge","Evelina, Evy","Agne, Ove","Valentin","Sigfrid","Julia, Julius","Alexandra, Sandra","Frida, Fritiof","Gabriella, Ella","Vivianne","Hilding","Pia","Torsten, Torun","Mattias, Mats","Sigvard, Sivert","Torgny, Torkel","Lage","Maria","Skottdagen");
	names[2] = new Array("","Albin, Elvira","Ernst, Erna","Gunborg, Gunvor","Adrian, Adriana","Tora, Tove","Ebba, Ebbe","Camilla","Siv","Torbjörn, Torleif","Edla, Ada","Edvin, Egon","Viktoria","Greger","Matilda, Maud","Kristoffer, Christel","Herbert, Gilbert","Gertrud","Edvard, Edmund","Josef, Josefina","Joakim, Kim","Bengt","Kennet, Kent","Gerda, Gerd","Gabriel, Rafael","Marie, bebådelsedag","Emanuel","Rudolf, Ralf","Malkolm, Morgan","Jonas, Jens","Holger, Holmfrid","Ester");
	names[3] = new Array("","Harald, Hervor","Gudmund, Ingemund","Ferdinand, Nanna","Marianne, Marlene","Irene, Irja","Vilhelm, Helmi","Irma, Irmelin","Nadja, Tanja","Otto, Ottilia","Ingvar, Ingvor","Ulf, Ylva","Liv","Artur, Douglas","Tiburtius","Olivia, Oliver","Patrik, Patricia","Elias, Elis","Valdemar, Volmar","Olaus, Ola","Amalia, Amelie","Anneli, Annika","Allan, Glenn","Georg, Göran","Vega","Markus","Teresia, Terese","Engelbrekt","Ture, Tyra","Tyko","Mariana");
	names[4] = new Array("","Valborg","Filip, Filippa","John, Jane","Monika, Mona","Gotthard, Erhard","Marit, Rita","Carina, Carita","Åke","Reidar, Reidun","Esbjörn, Styrbjörn","Märta, Märit","Charlotta, Lotta","Linnea, Linn","Halvard, Halvar","Sofia, Sonja","Ronald, Ronny","Rebecka, Ruben","Erik","Maj, Majken","Karolina, Carola","Konstantin, Conny","Hemming, Henning","Desideria, Desirée","Ivan, Vanja","Urban","Vilhelmina, Vilma","Beda, Blenda","Ingeborg, Borghild","Yvonne, Jeanette","Vera, Veronika","Petronella, Pernilla");
	names[5] = new Array("","Gun, Gunnel","Rutger, Roger","Ingemar, Gudmar","Solbritt, Solveig","Bo","Gustav, Gösta","Robert, Robin","Eivor, Majvor","Börje, Birger","Svante, Boris","Bertil, Berthold","Eskil","Aina, Aino","Håkan, Hakon","Margit, Margot","Axel, Axelina","Torborg, Torvald","Björn, Bjarne","Germund, Görel","Linda","Alf, Alvar","Paulina, Paula","Adolf, Alice","Johannes, Döparens, dag","David, Salomon","Rakel, Lea","Selma, Fingal","Leo","Peter, Petra","Elof, Leif");
	names[6] = new Array("","Aron, Mirjam","Rosa, Rosita","Aurora","Ulrika, Ulla","Laila, Ritva","Esaias, Jessika","Klas","Kjell","Jörgen, Örjan","André, Andrea","Eleonora, Ellinor","Herman, Hermine","Joel, Judit","Folke","Ragnhild, Ragnvald","Reinhold, Reine","Bruno","Fredrik, Fritz","Sara","Margareta, Greta","Johanna","Magdalena, Madeleine","Emma","Kristina, Kerstin","Jakob","Jesper","Marta","Botvid, Seved","Olof","Algot","Helena, Elin");
	names[7] = new Array("","Per","Karin, Kajsa","Tage","Arne, Arnold","Ulrik, Alrik","Alfons, Inez","Dennis, Denise","Silvia, Sylvia","Roland","Lars","Susanna","Klara","Kaj","Uno","Stella, Estelle","Brynolf","Verner, Valter","Ellen, Lena","Magnus, Måns","Bernhard, Bernt","Jon, Jonna","Henrietta, Henrika","Signe, Signhild","Bartolomeus","Lovisa, Louise","Östen","Rolf, Raoul","Gurli, Leila","Hans, Hampus","Albert, Albertina","Arvid, Vidar");
	names[8] = new Array("","Samuel","Justus, Justina","Alfhild, Alva","Gisela","Adela, Heidi","Lilian, Lilly","Regina, Roy","Alma, Hulda","Anita, Annette","Tord, Turid","Dagny, Helny","Åsa, Åslög","Sture","Ida","Sigrid, Siri","Dag, Daga","Hildegard, Magnhild","Orvar","Fredrika","Elise, Lisa","Matteus","Maurits, Moritz","Tekla, Tea","Gerhard, Gert","Tryggve","Enar, Einar","Dagmar, Rigmor","Lennart, Leonard","Mikael, Mikaela","Helge");
	names[9] = new Array("","Ragnar, Ragna","Ludvig, Love","Evald, Osvald","Frans, Frank","Bror","Jenny, Jennifer","Birgitta, Britta","Nils","Ingrid, Inger","Harry, Harriet","Erling, Jarl","Valfrid, Manfred","Berit, Birgit","Stellan","Hedvig, Hillevi","Finn","Antonia, Toini","Lukas","Tore, Tor","Sibylla","Ursula, Yrsa","Marika, Marita","Severin, Sören","Evert, Eilert","Inga, Ingalill","Amanda, Rasmus","Sabina","Simon, Simone","Viola","Elsa, Isabella","Edit, Edgar");
	names[10] = new Array("","Allhelgonadagen","Tobias","Hubert, Hugo","Sverker","Eugen, Eugenia","Gustav, Adolf","Ingegerd, Ingela","Vendela","Teodor, Teodora","Martin, Martina","Mårten","Konrad, Kurt","Kristian, Krister","Emil, Emilia","Leopold","Vibeke, Viveka","Naemi, Naima","Lillemor, Moa","Elisabet, Lisbet","Pontus, Marina","Helga, Olga","Cecilia, Sissela","Klemens","Gudrun, Rune","Katarina, Katja","Linus","Astrid, Asta","Malte","Sune","Andreas, Anders");
	names[11] = new Array("","Oskar, Ossian","Beata, Beatrice","Lydia","Barbara, Barbro","Sven","Nikolaus, Niklas","Angela, Angelika","Virginia","Anna","Malin, Malena","Daniel, Daniela","Alexander, Alexis","Lucia","Sten, Sixten","Gottfrid","Assar","Stig","Abraham","Isak","Israel, Moses","Tomas","Natanael, Jonatan","Adam","Eva","Juldagen","Stefan, Staffan","Johannes, Johan","Benjamin / Värnlösa, barns, dag","Natalia, Natalie","Abel, Set","Sylvester");

	names = names[today.getMonth()][today.getDate()];

    document.getElementById("clock").innerHTML = "Idag är det " + week_day + ", " + day + " " + month + ". Klockan är " + hours + ":" + minutes + ":" + seconds + ", och det är " + names + " som har namnsdag idag.";
    setTimeout("swedish_clock()",1000);
}