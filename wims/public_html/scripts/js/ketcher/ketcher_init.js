// Push CSS for ketcher in head
jq('head').append('<link rel="stylesheet" href="html/themes/_css/ketcher.css" type="text/css" />');

var mol;

// We need a timeout because for unknow reason ketcher can't load directly in some cases
setTimeout(function(){

  // We get molfile url for ajax
  jq.get(jq('#file').text(), function( data ) {

  //We rebuild molfile to match with ketcher
  mol = data;
  var res = data.split(/\r?\n/);
  res.splice(0, 2);
  header = ["", "WIMSchem molfile"];
  res = header.concat(res);

  ketcher.setMolecule(res.join("\n"))
  });
}, 2000);

// For WIMSClick
function getAtomSelection(){
  var selection = "", ketcherselect = ui.editor.getSelection().atoms
  for(var i = 0 ; i < ketcherselect.length ; i++){
    if(selection == ""){
      selection = ketcherselect[i]
    }else{
      selection += ","+ketcherselect[i]
    }
  }
  return selection
}

function getBondsSelection(){
  var selection = "", ketcherselect = ui.editor.getSelection().bonds
  for(var i = 0 ; i < ketcherselect.length ; i++){
    if(selection == ""){
      selection = ketcherselect[i]
    }else{
      selection += ","+ketcherselect[i]
    }
  }
  return selection
}

function ReadThis(){
  jq('#WIMSchemreply1').val(getAtomSelection() + ';' + getBondsSelection() + '\n'+ mol);
}

// For WIMSdraw
function getbrut(){
  function getchar(i){
    //Get line by id
    var ligne = ketcher.getMolfile().split('\n')[i].split(" ");
    for(var j = 0; j < ligne.length; j++){
      if(!(ligne[j] == "") && isNaN(ligne[j])){
        return ligne[j]
      }
    }
  }

  var lignes =  ketcher.getMolfile().split('\n'), elements = {}, indexmol = lignes[3].split(" "), nbatoms, res = "";
  for(var i = 0; i< indexmol.length; i++){
    if(indexmol[i] != "" && !isNaN(indexmol[i])){
      nbatoms = parseInt(indexmol[i]);
      break;
    }
  }

  for(var i = 4; i < (4 + parseInt(nbatoms));i++){
    var atom = getchar(i);
     if(atom != 0){
       if(elements.hasOwnProperty(atom)){
         elements[atom] += 1
       }else{
         elements[getchar(i)] = 1
       }
     }
   }

   jq.each(elements, function(index, value) {
     if(res == ""){
       res = index + value
     }else{
       res += " " + index + value
    }});
    return res
}

function GetMoleculeMDLMol1(){
  jq('#WIMSchemreply1').val(getbrut() + '\n \n'+ ketcher.getMolfile());
}
