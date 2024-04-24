const sshowPopup10 = document.querySelectorAll("BT10")
const popupContianer10 = document.querySelector('.popup10')
const closeBt10 = document.querySelector('.cls10')

const bg = document.querySelector(".bg")

   function showpopup10(){
        popupContianer10.classList.add('active')
        bg.classList.add('active')
    }   

    function cls10(){
        popupContianer10.classList.remove('active')
        bg.classList.remove('active')
    }

    function loadStatusFromCookie() {
        const cookieName = 'statuss=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                // Extract the value of the cookie and parse it back into the statuss object
                statuss = JSON.parse(cookie.substring(cookieName.length));
                return;
            }
        }
        
        // If the cookie doesn't exist, set statuss to its default value
        statuss = {
            ATK: 0,
            ReMove: 0,
            MBuff: 0,
            HBuff:0,
            AGI: 0,
        };
    }
    
    let statuss;
    
    loadStatusFromCookie();

document.querySelector('.ATK1').innerHTML = `ATK : ${statuss.ATK}%`
document.querySelector('.RM').innerHTML = `Re.M : ${statuss.ReMove}%`
document.querySelector('.MB').innerHTML = `M.Buff : ${statuss.MBuff}%`
document.querySelector('.HB').innerHTML = `H.Buff : ${statuss.HBuff}%`
document.querySelector('.AGI').innerHTML = `AGI : ${statuss.AGI}%`