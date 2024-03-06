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
    $('#asisst').fadeIn()
    $('#asisst').css({zIndex: '11'})
    $('#btnXmark').fadeIn()
    $('#btnXmark').css({zIndex: '11'})
    $('body').css({overFlow:'hidden'})
});

$('#btnXmark').click(function(){
    $('#asisst').fadeOut()
    $('#asisst').css({zIndex:'-10'})
    $('#btnXmark').fadeOut()
    $('#btnXmark').css({zIndex: '-10'})
    $('body').css({overFlow:'visible'})
})

$('#project2').click(function(){
    $('#trip').show()
    $('#trip').css({zIndex:'11'})
    $('#btnXmark').fadeIn()
    $('#btnXmark').css({zIndex: '11'})
    $('body').css('overflow','hidden')
})

$('#btnXmark').click(function(){
    $('#trip').fadeOut()
    $('#trip').css({zIndex:'-10'})
    $('#btnXmark').fadeOut()
    $('#btnXmark').css({zIndex: '-10'})
    $('body').css('overflow','visible')
})