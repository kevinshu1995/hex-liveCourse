$(function(){
    addNavActive()
    $('#js-modalToggle-target').hide();
    $('#js-modalToggle').on('click',function(e){
        console.log('123')
        e.preventDefault();
        $('#js-modalToggle-target').stop().slideToggle()
        $('.js-marginslide').toggleClass('modalToggle-target');
        $('.js-rotate').toggleClass('ani-rotate180')
    })
    $('.modalClose').on('click',function(){
        $('#personModal').modal('hide')
    })
    $('#editModalTrigger').on('click',function(){
        $('#personModal').modal('toggle')
        $('#editModal').modal('toggle')
    })
    $("#editModal").on("shown.bs.modal",function(e){
        $('body').addClass('modal-open')
        console.log('轉場特效結束，已完全呈現時呼叫');
      });
})

function addNavActive(){
    let pathname = window.location.pathname;
    console.log(pathname)
    switch (pathname) {
        case '/index.html':
            $('#sideBar-assignment').addClass('active');
            console.log(pathname , '/index.html',$('#sideBar-assignment').attr('class'))
            break;
        case '/admin.html':
            $('#sideBar-admin').addClass('active');
            console.log(pathname , '/admin.html')
            break;
    }
}