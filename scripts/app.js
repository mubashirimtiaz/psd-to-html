const tab = document.querySelector('.navigate-container .list');
const panels = document.querySelectorAll('.panel-container .panel');

tab.addEventListener('click',function(e){
    if (e.target.parentElement.classList.contains('list-item')) {
        const target = document.querySelector(e.target.parentElement.dataset.target);
        console.log(target)
        panels.forEach(function(panel,index){
            if (panel == target) {
                panel.classList.add('active');
                tab.children[index].classList.add('active');
            }else{
                panel.classList.remove('active');
                tab.children[index].classList.remove('active');
            }
        })
    }
})