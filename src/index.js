// Grafico pizza
const ctx = document.getElementById('graficoPizza').getContext('2d');
    const graficoPizza = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Frutas', 'Vegetais', 'Grãos'],
        datasets: [{
          label: 'Composição Natural',
          data: [70, 10, 20], // porcentagens
          backgroundColor: [
            '#543787', // verde claro - frutas
            '#4caf50', // verde médio - vegetais
            '#b81414'  // marrom - grãos
          ],
          borderColor: '#fff',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.parsed + '%';
              }
            }
          }
        }
      }
    });
// -------------------------------------------------------
// Navbar
    let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if (top>offset && top<offset + height){
            navLink.forEach(link=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}

// -------------------------------------------------------
// Scroll
const myObserver = new IntersectionObserver ((entries)=>{
    entries.forEach( ( entry)=> {
        if(entry.isIntersecting){
        entry.target.classList.add('show')
    }else {
        entry.target.classList.remove('show')
    }
    })
})
const elements = document.querySelectorAll('.hidden')
elements.forEach((element)=> myObserver.observe(element))