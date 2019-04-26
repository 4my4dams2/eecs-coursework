ch1_text = `
Lorem ipsum dolor sit amet, cu soluta concludaturque vim, summo voluptatibus
ex sea. Est id aperiri offendit vulputate, legere malorum est et. Zril volutpat
sit id, no aeterno apeirian mei. Est at oblique democritum. Oratio minimum
atomorum an per, mel ne ferri deterruisset. In eos vivendum incorrupte
reprimique...`;

ch2_text = `
Vel animal omittantur at, malis aperiri docendi eam cu. Usu ad tota omnesque,
an alii gloriatur vis. Pri homero alienum voluptatibus no. Sea ne quot omnes,
apeirian dignissim disputationi vim at.  Eu enim mutat volutpat est, tota
partiendo expetenda ad mea. Ei nam epicuri pertinacia, alterum offendit
maluisset ut est.

Duis vivendum dissentiunt nec ea. Sed at omittam sadipscing, est ea dolore
verear vituperata, blandit suscipit intellegat ex nec. Idque essent eu est.`;

ch3_text = `
Libris persecuti in ius, sed id probo molestie. Ut est habemus legendos
facilisis, per id nostrud vivendo phaedrum. Qui dolores nominati te. Id nam
legendos necessitatibus, ne vim malis choro soleat, te cum porro decore. Utinam
antiopam dissentiunt eam ei, vim enim reque omittantur an.

Virtute quaeque omnesque vis no, pro id omnes torquatos, paulo audiam pri
ne. Eirmod malorum partiendo vel id, impedit alienum omittantur ne vix, ne usu
libris accumsan platonem. Suavitate dissentias sit at, vis vivendo interesset
eu. Ei intellegat moderatius quo, at mel elit fierent. Cu quaeque efficiendi
nec, per et autem viris, sit in luptatum platonem. Sea diam reprimique ad,
aliquip meliore constituto has et.`;

const chapter1 = () => {
   document.querySelector("p").innerText=ch1_text;
   document.querySelector("h2").innerText="Chapter 1"
};

const chapter2 = () => {
   document.querySelector("p").innerText=ch2_text;
   document.querySelector("h2").innerText="Chapter 2"
};

const chapter3 = () => {
   document.querySelector("p").innerText=ch3_text;
   document.querySelector("h2").innerText="Chapter 3"
};



document.querySelector("#ch1").onclick = chapter1;
document.querySelector("#ch2").onclick = chapter2;
document.querySelector("#ch3").onclick = chapter3;
