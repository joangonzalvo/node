//definim 3 variables amb un array tipus javascript, camp:valor. Pusarem null com a
//valor
module.exports=function(info)
{
	var values={
		number:null,
		origin:null,
		destination:null,
		departs:null,
		arrives:null,
		actualDepart:null,
		actualArrive:null

		};//en el ultim null no posem , posem ; al final del objecte

	//crearem un bucle per donar valors al array
	for(var prop in values)//cada prop es camp:valor declarats en array
		{
		if(values[prop]!=='undefined')//es a dir, que values[prop] no es indentic a
		//a undefinit
			{
				values[prop]=info[prop];

			}
		};
		var functions={
			//actualitzara les dates de sortida
			triggerDepart:function(){
				values.actualDepart=Date.now();//objecte de javascript que ens diu
												//la data dle sistema

			},
			triggerArrive:function(){
				values.actualArrive=Date.now();
			},

			getInformation:function(){
				return values;

			}
		};
		return functions;


};//no se perk ho ha possat


//definim 4 funcions que s'utilitzaran fora del fitxer, usarem
exports.setNumber=function(num){
	number=num;
//amb el punt indiquem el nom dela funcio a exportar

		
	};

exports.setOrigin=function(o){
 origin=o;


};

exports.setDestination=function(d){
destination=d;

};

exports.getInfo=function(){
//el que volem que retorni es tota la info (numero, origne i destinació). Ho farem 
//amb un getInfo que significa returnar informacio
//Lo que volem esque retorni un objecta en javascript
	return{
		number: number,
		origin: origin,
		destination: destination,
		//hem de entendre que la primera columna son els cams, i la segona son els valors

	};

};