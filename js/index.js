document.addEventListener('DOMContentLoaded', function(){
    
    const togglePath = document.querySelector('.show-path i')

    togglePath.addEventListener('click', function(){
        this.classList.toggle('icon-circleRight')
        this.classList.toggle('icon-circleLeft')
        $elements = document.querySelectorAll('.switchable')
        for (e of $elements) {
            e.classList.toggle('is-visible')
        }
    })
});
