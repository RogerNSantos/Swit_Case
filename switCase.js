/* Objetivo: Linha de comentário JavaScript:
Objetivo: Utilizando o recurso de seleção múltipla - switch...case, pesquisar o nome do mês de referência
através do respectivo número do mês informado.
- Objetos/Métodos utilizados:
Entrada: document.form (entrada de dados via formulário)
Saída: document.form (saída de dados via formulário)
- Importante:
Os campos do formulário serão identificados com o prefixo f_ => Exemplo: f_mes
Os campos do JavaScript serão identificados com o prefixo js_ => Exemplo: js_mes
*/

/* Definicao das variaveis */
var mes;

/* Início da função verificames() para captura dos dados do formulário e pesquisa por Seleção Múltipla */
function verificames() {
    /* Captura do valor do mês do formulário f_mes e transferência/atribuição para a variável do JavaScript
    js_mes */

    mes = parseInt(document.formcalend.f_mes.value);
    /* Início da estrutura de Seleção Múltipla switch...case */
    switch (mes) {
        case 1: document.formcalend.f_nomemes.value = 'Janeiro'; break;
        case 2: document.formcalend.f_nomemes.value = 'Fevereiro'; break;
        case 3: document.formcalend.f_nomemes.value = 'Marco'; break;
        case 4: document.formcalend.f_nomemes.value = 'Abril'; break;
        case 5: document.formcalend.f_nomemes.value = 'Maio'; break;
        case 6: document.formcalend.f_nomemes.value = 'Junho'; break;
        case 7: document.formcalend.f_nomemes.value = 'Julho'; break;
        case 8: document.formcalend.f_nomemes.value = 'Agosto'; break;
        case 9: document.formcalend.f_nomemes.value = 'Setembro'; break;
        case 10: document.formcalend.f_nomemes.value = 'Outubro'; break;
        case 11: document.formcalend.f_nomemes.value = 'Novembro'; break;
        case 12: document.formcalend.f_nomemes.value = 'Dezembro'; break;
        default: document.formcalend.f_nomemes.value = '** Mês Inválido! **'; break;
    }
    /* Final da estrutura de Seleção Múltipla switch...case */
}
/* Final da função verificames() para captura dos dados do formulário e pesquisa por Seleção Múltipla */

