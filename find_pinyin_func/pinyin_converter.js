
function convertTToNo(pinyin) {


		py = pinyin.toLowerCase().replace("ang1", /āng/g)
		// py = py.replace("i1", "ī");


		py = py.replace("ang2", 'áng');
	  py = py.replace("ang3", 'ǎng');
	  py = py.replace("ang4", 'àng');

		py = py.replace("eng1", 'ēng');
		py = py.replace("eng2", 'éng');
		py = py.replace("eng3", 'ěng');
		py = py.replace("eng4", 'èng');
		py = py.replace("ing1", 'īng');
		py = py.replace("ing2", 'íng');
		py = py.replace("ing3", 'ǐng');
		py = py.replace("ing4", 'ìng');
		py = py.replace("ong1", 'ōng');
		py = py.replace("ong2", 'óng');
		py = py.replace("ong3", 'ǒng');
		py = py.replace("ong4", 'òng');


		py = py.replace("an1", 'ān');
		py = py.replace("an2", 'án');
		py = py.replace("an3", 'ǎn');
		py = py.replace("an4", 'àn');
		py = py.replace("en1", 'ēn');
		py = py.replace("en2", 'én');
		py = py.replace("en3", 'ěn');
		py = py.replace("en4", 'èn');
		py = py.replace("in1", 'īn');
		py = py.replace("in2", 'ín');
		py = py.replace("in3", 'ǐn');
		py = py.replace("in4", 'ìn');
		py = py.replace("un1", 'ūn');
		py = py.replace("un2", 'ún');
		py = py.replace("un3", 'ǔn');
		py = py.replace("un4", 'ùn');
		py = py.replace("er2", 'ér');
		py = py.replace("er3", 'ěr');
		py = py.replace("er4", 'èr');

		py = py.replace("aō", 'āo');
		py = py.replace("aó", 'áo');
		py = py.replace("aǒ", 'ǎo');
		py = py.replace("aò", 'ào');
		py = py.replace("oū", 'ōu');
		py = py.replace("oú", 'óu');
		py = py.replace("oǔ", 'ǒu');
		py = py.replace("où", 'òu');
		py = py.replace("aī", 'āi');
		py = py.replace("aí", 'ái');
		py = py.replace("aǐ", 'ǎi');
		py = py.replace("aì", 'ài');
		py = py.replace("eī", 'ēi');
		py = py.replace("eí", 'éi');
		py = py.replace("eǐ", 'ěi');
		py = py.replace("eì", 'èi');

		py = py.replace("a1", 'ā');
		py = py.replace("a2", 'á');
		py = py.replace("a3", 'ǎ');
		py = py.replace("a4", 'à');
		py = py.replace("e1", 'ē');
		py = py.replace("e2", 'é');
		py = py.replace("e3", 'ě');
		py = py.replace("e4", 'è');
		py = py.replace("i1", 'ī');
		py = py.replace("i2", 'í');
		py = py.replace("i3", 'ǐ');
		py = py.replace("i4", 'ì');
		py = py.replace("o1", 'ō');
		py = py.replace("o2", 'ó');
		py = py.replace("o3", 'ǒ');
		py = py.replace("o4", 'ò');
		py = py.replace("u1", 'ū');
		py = py.replace("u2", 'ú');
		py = py.replace("u3", 'ǔ');
		py = py.replace("u4", 'ù');
		py = py.replace("v1", 'ǖ');
		py = py.replace("v2", 'ǘ');
		py = py.replace("v3", 'ǚ');
		py = py.replace("v4", 'ǜ');

		return py



		/*
		done
		// py = pinyin.toLowerCase().replace(/āng/g, "ang1");
		// py = py.replace(/áng/g, "ang2");
		// py = py.replace(/ǎng/g, "ang3");
		// py = py.replace(/àng/g, "ang4");
		// py = py.replace(/ēng/g, "eng1");
		// py = py.replace(/éng/g, "eng2");
		// py = py.replace(/ěng/g, "eng3");
		// py = py.replace(/èng/g, "eng4");
		// py = py.replace(/īng/g, "ing1");
		// py = py.replace(/íng/g, "ing2");
		// py = py.replace(/ǐng/g, "ing3");
		// py = py.replace(/ìng/g, "ing4");
		// py = py.replace(/ōng/g, "ong1");
		// py = py.replace(/óng/g, "ong2");
		// py = py.replace(/ǒng/g, "ong3");
		// py = py.replace(/òng/g, "ong4");

		// py = py.replace(/ān/g, "an1");
		// py = py.replace(/án/g, "an2");
		// py = py.replace(/ǎn/g, "an3");
		// py = py.replace(/àn/g, "an4");
		// py = py.replace(/ēn/g, "en1");
		// py = py.replace(/én/g, "en2");
		// py = py.replace(/ěn/g, "en3");
		// py = py.replace(/èn/g, "en4");
		// py = py.replace(/īn/g, "in1");
		// py = py.replace(/ín/g, "in2");
		// py = py.replace(/ǐn/g, "in3");
		// py = py.replace(/ìn/g, "in4");
		// py = py.replace(/ūn/g, "un1");
		// py = py.replace(/ún/g, "un2");
		// py = py.replace(/ǔn/g, "un3");
		// py = py.replace(/ùn/g, "un4");
		// py = py.replace(/ér/g, "er2");
		// py = py.replace(/ěr/g, "er3");
		// py = py.replace(/èr/g, "er4");

		// py = py.replace(/āo/g, "aō");
		// py = py.replace(/áo/g, "aó");
		// py = py.replace(/ǎo/g, "aǒ");
		// py = py.replace(/ào/g, "aò");
		// py = py.replace(/ōu/g, "oū");
		// py = py.replace(/óu/g, "oú");
		// py = py.replace(/ǒu/g, "oǔ");
		// py = py.replace(/òu/g, "où");
		// py = py.replace(/āi/g, "aī");
		// py = py.replace(/ái/g, "aí");
		// py = py.replace(/ǎi/g, "aǐ");
		// py = py.replace(/ài/g, "aì");
		// py = py.replace(/ēi/g, "eī");
		// py = py.replace(/éi/g, "eí");
		// py = py.replace(/ěi/g, "eǐ");
		// py = py.replace(/èi/g, "eì");

		// py = py.replace(/ā/g, "a1");
		// py = py.replace(/á/g, "a2");
		// py = py.replace(/ǎ/g, "a3");
		// py = py.replace(/à/g, "a4");
		// py = py.replace(/ē/g, "e1");
		// py = py.replace(/é/g, "e2");
		// py = py.replace(/ě/g, "e3");
		// py = py.replace(/è/g, "e4");
		// py = py.replace(/ī/g, "i1");
		// py = py.replace(/í/g, "i2");
		// py = py.replace(/ǐ/g, "i3");
		// py = py.replace(/ì/g, "i4");
		// py = py.replace(/ō/g, "o1");
		// py = py.replace(/ó/g, "o2");
		// py = py.replace(/ǒ/g, "o3");
		// py = py.replace(/ò/g, "o4");
		// py = py.replace(/ū/g, "u1");
		// py = py.replace(/ú/g, "u2");
		// py = py.replace(/ǔ/g, "u3");
		// py = py.replace(/ù/g, "u4");
		// py = py.replace(/ǖ/g, "v1");
		// py = py.replace(/ǘ/g, "v2");
		// py = py.replace(/ǚ/g, "v3");
		// py = py.replace(/ǜ/g, "v4");
		*/

		/*
		todo


		*/

	  // var results = new Array();
	  // var pyList = py.split(' ');
	  // for (var i = 0; i < pyList.length; i++) {
	  // 	var temp = pyList[i]
	  // 	var lastPtr = 0;
	  // 	for(var j = 0; j < temp.length; j++) {
	  // 		if (temp.charAt(j) == "1" || temp.charAt(j) == "2" ||temp.charAt(j) == "3" ||temp.charAt(j) == "4") {
	  // 			results.push(temp.substring(lastPtr,j+1));
	  // 			lastPtr = j+1;
	  // 		} else if (j == temp.length -1 && lastPtr < temp.length - 1) {//neutral tone at the last, always
	  // 			results.push(temp.substring(lastPtr,j+1) + '5');
	  // 		}
	  // 	}
	  // }
	  // return results.join('&');
}



// console.log(convertTToNo('ch&#xe0;ng'));
console.log(convertTToNo('yi1'));
console.log(convertTToNo('ang2'));
