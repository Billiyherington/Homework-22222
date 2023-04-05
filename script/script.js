const authBtn = document.getElementById('open-auth-btn')
const modal = document.getElementById('auth-modal')
const closeBtns = modal.querySelectorAll ('.btn-close')
console.log(closeBtns );
const openModal = () => {
    modal.style.display = "block"

    setTimeout(() =>{
        modal.classList.add('show')
    }, 500)
    setTimeout(() => {
        modal.style.display = 'none'
    }, );
}
const closeModal = () => {
    modal.classList.remove('show')  
    modal.style.display = 'none'   
}
authBtn.addEventListener('click' , () => {
    openModal()
})
closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        closeModal()
    })
})
// loginBtn.addEventListener
// for (let i = 0;  i < closeBtns.length; i++){
//     console.log(closeBtns[i]);
// } 