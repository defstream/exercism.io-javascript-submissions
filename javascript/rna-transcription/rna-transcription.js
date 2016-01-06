//@info DNA->RNA + RNA->DNA Map
var map = {
  DNA: {
    'G': 'C',
    'C': 'G',
    'A': 'T',
    'U': 'A'  
  },
  RNA: {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  }
};
//@info: Transcribe a sequence using a map
function transcribe(map, sequence) {
  return sequence.split('').map(function(a) {
    return map[a];
  }).join('');
}
//@object Transcription
var Transcription = {
  //@info convert dna->rna
  toRna: function(dna) {
    return transcribe(map.RNA, dna);
  },
//@info Convert RNA->DNA
  toDna: function(rna) {
    return transcribe(map.DNA, rna);
  }
};
//@exports Transcription Factory
module.exports = function() {
  return Object.create(Transcription);
};