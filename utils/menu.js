class MeuMenu extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <select>
            <option>Pagina inicial</option>
            <option>Financeiro</option> 
            <option>Planejamento</option> 
            <option>Documentos</option>
            <option>Membros</option>
            <option>Patrimônio</option>
            <option>Doações e Parcerias</option>
            <option>Relatórios</option>
        </select>
      `;
    }
  }
  
  customElements.define('meu-menu', MeuMenu);
  