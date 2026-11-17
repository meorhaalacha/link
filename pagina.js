// Os textos no idioma do celular (pt, en, es, he; outro idioma = ingles).
// Gerado por Dados/gerar_site_links.mjs no repositorio do app: nao editar aqui.
(function () {
  var T = {"pt":{"sobre":"Este lugar está no app Mishna Berura · Meor Haalacha: o Shulchan Aruch Orach Chaim com o Mishna Berura, o Shaar HaTsiun e o Biur Halacha, inteiro no celular, sem internet.","abrir":"Abrir no app","baixar":"Baixar na Google Play","naoExiste":"Esse lugar não existe no Mishna Berura."},"en":{"sobre":"This place is in the Mishna Berura · Meor Haalacha app: the Shulchan Aruch Orach Chaim with the Mishna Berura, the Shaar HaTsiun and the Biur Halacha, complete on your phone, offline.","abrir":"Open in the app","baixar":"Get it on Google Play","naoExiste":"This place does not exist in the Mishna Berura."},"es":{"sobre":"Este lugar está en la app Mishna Berura · Meor Haalacha: el Shulján Aruj Óraj Jaim con la Mishná Berurá, el Shaar HaTsiún y el Biur Halajá, completo en el celular, sin internet.","abrir":"Abrir en la app","baixar":"Descargar en Google Play","naoExiste":"Este lugar no existe en la Mishná Berurá."},"he":{"sobre":"המקום הזה נמצא באפליקציה משנה ברורה · מאור ההלכה: שולחן ערוך אורח חיים עם משנה ברורה, שער הציון וביאור הלכה, כולו בטלפון, בלי אינטרנט.","abrir":"פתיחה באפליקציה","baixar":"הורדה מ־Google Play","naoExiste":"המקום הזה אינו קיים במשנה ברורה."}};
  var langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']);
  var l = 'en';
  for (var i = 0; i < langs.length; i++) {
    var c = String(langs[i]).toLowerCase().slice(0, 2);
    if (c === 'iw') c = 'he';
    if (T[c]) { l = c; break; }
  }
  var t = T[l];
  var els = document.querySelectorAll('[data-t]');
  for (var j = 0; j < els.length; j++) {
    var k = els[j].getAttribute('data-t');
    els[j].textContent = t[k];
    if (l === 'he') { els[j].setAttribute('dir', 'rtl'); els[j].setAttribute('lang', 'he'); }
  }
  if (!/android/i.test(navigator.userAgent)) {
    var a = document.querySelectorAll('.so-android');
    for (var m = 0; m < a.length; m++) a[m].style.display = 'none';
  }
})();
