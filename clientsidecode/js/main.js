document.querySelector('button').addEventListener('click', apiRequest)

document.querySelector('input').addEventListener('keypress', function (event) {
    // Check if the key pressed is the Enter key (key code 13)
    if (event.key === 'Enter') {
        // Trigger the button click event
        document.querySelector('button').click();
    }
});

async function apiRequest(){
    const lastName = document.querySelector('input').value
    try{
        const response = await fetch(`https://uspresident-api.onrender.com/api/${lastName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('img').src = data.pimg
        document.querySelector('#fn').innerText = data.fullName
        document.querySelector('#pst').innerText = data.position
        document.querySelector('#inof').innerText = data.inOffice
        document.querySelector('#vp').innerText = data.vicePresident
        document.querySelector('#pp').innerText = data.party
        document.querySelector('#bl').innerText = data.birthLocation
        document.querySelector('#dob').innerText = data.dob
        document.querySelector('#do').innerText = data.died
        document.querySelector('#ag').innerText = data.age
        document.querySelector('#ab').innerText = data.about
    }catch(error){
        console.log(error)
    }
}