let request = require('request')
// ,
let readline = require('readline')
let fs = require('fs')

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


function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
}

let rad_dict = {}


let aggregate_data = function(){
  return new Promise(function(resolve, reject) {
    request.get('http://www.archchinese.com/traditional_chinese_radicals.html',  function(err, res, body){
      if (err) {
        console.log(err);
      }
      if (res.statusCode != 200) {
        console.log('res status code != 200');
      }

      console.log('body :', body);

      let index_of_rad_no = body.indexOf('Radical No.')
      // let end_index = body.indexOf('yu&#xe8;')
      let end_index = getPosition(body, 'yu&#xe8;', 2)

      let builder = body.substring(index_of_rad_no, end_index)
      let junk_close_tr = builder.indexOf('</tr>')
      builder = builder.substring(junk_close_tr+'</tr>'.length, builder.length)
      console.log(builder);
      console.log('\n\n\n');
      console.log('\n\nfound index of "Radical No" :', index_of_rad_no);
      console.log('\n\nfound index of "yu&#xe8;" :', end_index);



      while (builder.includes('</tr>')){
        let index_of_open_tr = builder.indexOf('<tr>')
        let index_of_close_tr = builder.indexOf('</tr>')
        // console.log('index of open tr :', index_of_open_tr);
        // console.log('index of close tr :', index_of_close_tr);
        let slice = builder.substring(index_of_open_tr, index_of_close_tr+'</tr>'.length)
        console.log('sub :\n\n\t', slice);
        // console.log('\n\n');


        let third_english_end = getPosition(slice, 'english', 3) + 'english">'.length

        let sub_slice = slice.substring(third_english_end, slice.length)
        let nxt_brkt = sub_slice.indexOf('<')
        console.log('\n\n**** sub_slice : ', sub_slice);

        let pinyin_start = getPosition(sub_slice, '>', 3) + 1

        let pinyin_sub_slice = sub_slice.substring(pinyin_start, sub_slice.length)

        let encoded_pinyin = pinyin_sub_slice.substring(0, pinyin_sub_slice.indexOf('<'))

        console.log('\n\npinyin sub slice :', encoded_pinyin);

        let psp_param = sub_slice.substring(sub_slice.indexOf('fn_playSinglePinyin')+'fn_playSinglePinyin'.length+2, getPosition(sub_slice, '\'', 4))

        console.log('\n\npsp_param :', psp_param);
        console.log('psp_param conv :', convertTToNo(psp_param));

        let converted_pinyin = convertTToNo(psp_param)

        let entry = {
          number : slice.substring(
            slice.indexOf('<center>')+'<center>'.length,
            slice.indexOf('</center>')
          ),
          character : slice.substring(
            slice.indexOf('?trad=') + '?trad=65e5">'.length,
            slice.indexOf('?trad=') + '?trad=65e5">'.length+1
          ),
          pinyin : converted_pinyin,
          english : sub_slice.substring(0, nxt_brkt)
        }
        let pinyn = entry.pinyin
        let english = entry.english
        rad_dict[english] = entry

        console.log('\nnum :', entry.number);
        console.log('char :', entry.character);
        console.log('pinyin :', entry.pinyin);
        console.log('\n\n');
        builder = builder.substring(index_of_close_tr+'</tr>'.length, builder.length)


        builder.includes('</tr>') ? console.log('builder still has </tr>'):console.log('builder not has </tr>');
        // console.log(builder);

      }

      console.log(rad_dict);
      resolve(rad_dict)
    })
  })
}





aggregate_data().then(function(resolve, reject) {


	let json = JSON.stringify(resolve)
	fs.writeFileSync('radicals.json', json, (err) => {
		if (err) throw err;
		console.log('file written');
	})

  const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
  })

  let query_user = function(){
    rl.question('input : ', (answer) => {
      console.log('key : ', answer, '->', resolve[answer]);
      query_user()
    })
  }

  query_user()

  // console.log(resolve[])
  // rl.close()
})
