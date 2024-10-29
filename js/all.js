let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('aside ul li a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight; 
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('aside ul li a[href*=' + id + ']').classList.add
                ('active');
            })
        }
    })
};

$('#project1').click(function(){
    $('#asisst').fadeIn(800);
    $('#asisst').css('z-index', '10');
    $('#btnXmark').fadeIn(800);
    $('#btnXmark').css('z-index', '10');
    $('body').css('overflow', 'hidden')
});

$('#project2').click(function(){
    $('#trip').fadeIn(800);
    $('#trip').css('zIndex','10');
    $('#btnXmark').fadeIn(800);
    $('#btnXmark').css('zIndex', '10');
    $('body').css('overflow','hidden');
});

$('#btnXmark').click(function(){
    $('#asisst').hide(100);
    $('#asisst').css('zIndex','-10');
    $('#trip').hide(100);
    $('#trip').css('zIndex','-10');
    $('#btnXmark').fadeOut();
    $('#btnXmark').css('zIndex', '-10');
    $('body').css('overflow','visible');
});

