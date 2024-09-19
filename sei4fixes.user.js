// ==UserScript==
// @name         Sei 4.0 fixes
// @namespace    https://sei.ebserh.gov.br/
// @version      2024-09-19
// @description  correções para o SEI 4.0
// @author       Elvis Diniz
// @match        https://sei.ebserh.gov.br/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let fakePassInput = document.getElementById("pwdSenha");
    if (fakePassInput) {
        fakePassInput.remove();
        let passInputs = document.getElementsByName("pwdSenha");
        if (passInputs.length) {
            let realPassInput = passInputs[0];
            realPassInput.classList.add("form-control");
            realPassInput.style.display = "block";
            realPassInput.placeholder = "Senha";
            realPassInput.id = "pwdSenha";
        }
    }
})();
