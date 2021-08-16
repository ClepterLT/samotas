import $ from "jquery";

$(document).ready(function () {

    const fieldName = document.getElementById('fname');
    const regName = /^[a-zA-ZÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ\s-,.\']+/;

    const fieldEmail = document.getElementById('email');
    const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const fieldPhone = document.getElementById('tel');
    const regPhone = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

    function debounce(func, wait, immediate) {
        let timeout;
      
        return function executedFunction() {
          const context = this;
          const args = arguments;
              
          const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
      
          const callNow = immediate && !timeout;
          
          clearTimeout(timeout);
      
          timeout = setTimeout(later, wait);
          
          if (callNow) func.apply(context, args);
        };
    };

    const validator = debounce(function(regex, element) {
        const fieldValue = element.value;

        if(regex.test(fieldValue)) {
            element.style = 'border: 2px solid green';
        } else {
            element.style = 'border: 2px solid red';
        }
    }, 250);

    fieldName?.addEventListener('input', validator.bind(null, regName, fieldName));
    fieldEmail?.addEventListener('input', validator.bind(null, regEmail, fieldEmail));
    fieldPhone?.addEventListener('input', validator.bind(null, regPhone, fieldPhone));
});