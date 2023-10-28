function borrow(s) {
    return s.toLowerCase().replaceAll(/[^0-9a-z]/gi, '')
}

console.log(borrow('WhAt! FiCK! DaMn CAke?'));//'whatfickdamncake'