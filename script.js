/* =========================
   MENU MOBILE
========================= */
function toggleMenu(){
    document.getElementById('mobile-menu').classList.toggle('active');
}

function closeMenu(){
    document.getElementById('mobile-menu').classList.remove('active');
}

/* =========================
   TABS SOLUÇÕES PRÁTICAS
========================= */
function showTab(tabId, el){
    // Esconde todas as tab contents
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    // Mostra a selecionada
    document.getElementById(tabId).classList.add('active');

    // Remove active das tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // Marca a tab clicada como ativa
    el.classList.add('active');
}