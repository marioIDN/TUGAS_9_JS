function tampilkanDataObjek() {
  var biodata = {
    nama   : "mardiono",
    umur   : 20,
    status : "mahasiswa",
    alamat : "tanjung Pinang",
    hobi   : "editing"
  }
  for (var tampung in biodata){
    console.log(biodata[tampung]);
  }
}
tampilkanDataObjek()
