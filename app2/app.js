//aixo es per utilitzar un modul [el require() ]. posarem la direccio dins els()
//ens referim a aixo a que ho fem servir per interactuar amb les comandes de un altre arxiu 
var flight=require('./vols');//var flight es el punt d'entrada dels exports de l'altre
//arxiu que indiquem en el require.
/*

flight.setOrigin('Barcelona');
flight.setDestination('London');
flight.setNumber(123);
//amb aixo definim el flight. ara necesitem extreure aquesta info

//per accedir a la info, ho fem a traves del console.log()
console.log(flight.getInfo());*/
//------------------------------------------------------------------
//21.10.2016
var pl_data1={

	number:847,
	origin:'BCN',
	destination:'MAD'
};

var pl_data2={

	number:848,
	origin:'MAD',
	destination:'BCN'
};
//crear avió
var pl1=flight(pl_data1);
//sortida de l'avió.
pl1.triggerDepart();


console.log(pl1.getInformation());

var pl2=flight(pl_data2);
//sortida de l'avió.
pl2.triggerDepart();


console.log(pl2.getInformation());

