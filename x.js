let request = require('request')
request.get('http://www.archchinese.com/traditional_chinese_radicals.html',  function(err, res, body){
  if (err) {
    console.log(err);
  }
  if (res.statusCode != 200) {
    console.log('res status code != 200');
  }

  let index_of_rad_no = body.indexOf('Radical No.')
  let end_index = body.indexOf('yu&#xe8;')
  let builder = body.substring(index_of_rad_no, end_index)
  let junk_close_tr = builder.indexOf('</tr>')
  builder = builder.substring(junk_close_tr+'</tr>'.length, builder.length)
  console.log(builder);
  console.log('\n\n\n');
  console.log('\n\nfound index of "Radical No" :', index_of_rad_no);
  console.log('\n\nfound index of "yu&#xe8;" :', end_index);

  let rad_dict = {}


  while (builder.includes('</tr>')){
    let index_of_open_tr = builder.indexOf('<tr>')
    let index_of_close_tr = builder.indexOf('</tr>')
    console.log('index of open tr :', index_of_open_tr);
    console.log('index of close tr :', index_of_close_tr);
    let slice = builder.substring(index_of_open_tr, index_of_close_tr+'</tr>'.length)
    console.log('sub :\n\n\t', slice);
    console.log('\n\n');

    let entry = {
      number : slice.substring(slice.indexOf('<center>')+'<center>'.length, slice.indexOf('</center>')),
      character : slice.substring(
        slice.indexOf('?trad=') + '?trad=65e5">'.length,
        slice.indexOf('?trad=') + '?trad=65e5">'.length+1
      )
    }

    console.log('num :', entry.number);
    console.log('char :', entry.character);

    builder = builder.substring(index_of_close_tr+'</tr>'.length, builder.length)
  }




  // while (builder.includes('</tr>')) {
  //   let index_of_open_tr = builder.indexOf('<tr>')
  //   // let index_of_close_tr = builder.indexOf('/')
  //   let index_of_english = builder.indexOf('english')
  //   console.log('index of open tr :', index_of_open_tr);
  //   // console.log('index of close tr :', index_of_close_tr);
  //   console.log('index of english :', index_of_english);
  //   console.log('builder length :', builder.length);
  //   // rad_dict =
  //   // let slice = builder.substring(index_of_open_tr, index_of_close_tr)
  //   // console.log('SLICE :\n\t',slice);
  //   // console.log('\n\n');
  //
  //   // builder = builder.substring(index_of_close_tr, builder.length)
  //   builder = builder.substring(index_of_english, builder.length)
  //
  // }


})
