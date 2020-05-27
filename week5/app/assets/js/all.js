$(function(){
    addNavActive()
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