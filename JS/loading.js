function showLoadingScreen() {
    setTimeout(function() {
        document.querySelector('.loader-container').classList.add('hide');
        setTimeout(function() {
            document.querySelector('.loader-container').style.display = 'none';
        }, 2000);
    }, 500);
}

showLoadingScreen();
