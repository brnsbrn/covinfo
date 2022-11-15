function getglobaldeaths() {


    const getDataDied = fetch('https://covid19.mathdro.id/api')
        .then(results => results.json())
        .then(results => {
            const dead = document.querySelector('.global-deaths');
            dead.innerHTML = results.deaths.value;
        })
        .catch(error => {
            console.log(error);
        });;


}
export default getglobaldeaths;