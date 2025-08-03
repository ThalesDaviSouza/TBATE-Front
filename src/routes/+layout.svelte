<div id="container">
  <section>
    <slot></slot>
  </section>
  
  <footer>
    <span>RPG TBATE - Feito de fã para fã</span>
    <a href="https://docs.google.com/document/d/1HX8Sl6S6qn_0rXENL1611WghXpAaJt5u7dmojAVVayk/edit?usp=sharing" target="_blank">
      Link do Sistema
    </a>
  </footer>
</div>

<style>
  #container {
    width: 100vw;
    height: 100vh;
    background-color: #24242d;
    color: #f8faff;

    grid-template-rows: 1fr 60px;
    grid-template-columns: auto;

    grid-template-areas: 
      'section'
      'footer'
    ;

    display: grid;

    & *{
      padding: 0 15px;
    }
  }

  section{
    grid-area: section;
  }

  footer{
    grid-area: footer;
    display: flex;
    flex-direction: column;
  }

  a{
    color: #68b2e4;
    text-decoration: none;
    transition: all 0.2s;
  }
  
  a:hover{
    color:var(--white);
  }


</style>