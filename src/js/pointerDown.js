var pointer = document.querySelector('.pointer-down');

function checkClassList() {
    var target3 = document.querySelector('.item_3');
    var target2 = document.querySelector('.item_2');
    var target1 = document.querySelector('.item_1');
    
    if(target3.classList.contains('slick-current')) {
        pointer.classList.add('hideTarget');
        
    } else if( target2.classList.contains('slick-current')||target1.classList.contains('slick-current') ) {
        pointer.classList.remove('hideTarget');
        
    }
    
};
